from rest_framework import serializers
from authentication.models import User
from itinerary_planner.models import Itinerary, Review



class ItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Itinerary
        fields = ['user', 'name', 'itinerary_description']

    def create(self, validated_data):
        return Itinerary.objects.create(**validated_data)

class UpdateItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Itinerary
        fields = ['name', 'itinerary_description', 'is_private']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.itinerary_description = validated_data.get('itinerary_description', instance.itinerary_description)
        instance.is_private = validated_data.get('is_private', instance.is_private)
        instance.save()
        return instance

class ReviewSerializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(min_value=1, max_value=10)
    class Meta:
        model = Review
        fields = ['user', 'itinerary', 'rating', 'review','date']

    def create(self, validated_data):
        return Review.objects.create(**validated_data)


class ItineraryListSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Itinerary
        fields = ['id', 'name', 'itinerary_description', 'is_private', 'reviews']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['reviews'] = ReviewSerializer(instance.review_set.all(), many=True).data
        return response