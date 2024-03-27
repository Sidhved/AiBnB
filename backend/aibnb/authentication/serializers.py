from django.db.models import Q # for queries
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from django.core.exceptions import ValidationError
from uuid import uuid4


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    firstname = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    lastname = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(max_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('id',  # 'id' is added to the fields
            'firstname',
            'lastname',
            'email',
            'password',
            'phone',
        )


class UserLoginSerializer(serializers.ModelSerializer):
    # to accept either username or email
    user_id = serializers.CharField()
    password = serializers.CharField()
    token = serializers.CharField(read_only=True)

    def validate(self, data):
        # user,email,password validator
        user_id = data.get("user_id", None)
        password = data.get("password", None)
        if not user_id and not password:
            raise ValidationError("Details not entered.")

        user = User.objects.filter(
            Q(email=user_id) &
            Q(password=password)
            ).distinct()
        if not user.exists():
            raise ValidationError("User credentials are not correct.")
        user = User.objects.get(email=user_id)
        if user.ifLogged:
            raise ValidationError("User already logged in.")
        user.ifLogged = True
        data['token'] = uuid4()
        user.token = data['token']
        user.save()
        return data

    class Meta:
        model = User
        fields = (
            'user_id',
            'password',
            'token',
        )

        read_only_fields = (
            'token',
        )


class UserLogoutSerializer(serializers.ModelSerializer):
    token = serializers.CharField()
    status = serializers.CharField(required=False, read_only=True)

    def validate(self, data):
        token = data.get("token", None)
        user = None
        try:
            user = User.objects.get(token=token)
            if not user.ifLogged:
                raise ValidationError("User is not logged in.")
        except Exception as e:
            raise ValidationError(str(e))
        user.ifLogged = False
        user.token = ""
        user.save()
        data['status'] = "User is logged out."
        return data

    class Meta:
        model = User
        fields = (
            'status',
            'token'
        )

class UserUpdateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    firstname = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    lastname = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password = serializers.CharField(max_length=8, write_only=True)
    phone = serializers.CharField(max_length=15, required=False)

    class Meta:
        model = User
        fields = (
            'firstname',
            'lastname',
            'email',
            'password',
            'phone',
        )