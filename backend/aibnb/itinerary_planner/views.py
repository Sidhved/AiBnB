from datetime import datetime

from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_itinerary
from .serializers import *
from .models import Itinerary, Review
from authentication.renderers import UserRenderer


# Create your views here.
class GetItineraryView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def post(self, request):
        print(request.data)
        generated_itinerary = generate_itinerary(request.data['destination'], request.data['days'], request.data['guests'], request.data['budget'], request.data['preferences'])
        return Response({'itinerary': generated_itinerary}, status=status.HTTP_200_OK)


class CreateItineraryView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def post(self, request):
        request.data['user'] = request.user.id
        itinerary_serializer = ItinerarySerializer(data=request.data)
        if itinerary_serializer.is_valid():
            itinerary_serializer.save()
            return Response(itinerary_serializer.data, status=status.HTTP_201_CREATED)
        return Response(itinerary_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetUserItinerariesView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def get(self, request):
        private = request.query_params.get('private', None)
        ids = request.query_params.get('ids', None)
        if ids:
            itineraries = Itinerary.objects.filter(user=request.user.id, is_private=private, id__in=ids.split(','))
        elif private:
            itineraries = Itinerary.objects.filter(user=request.user.id, is_private=private)
        else:
            itineraries = Itinerary.objects.filter(user=request.user.id)
        serializer = ItineraryListSerializer(itineraries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UpdateItineraryView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def put(self, request, pk):
        itinerary = Itinerary.objects.get(id=pk)
        if request.user.id != itinerary.user.id:
            return Response({'error': 'You do not have permission to edit this itinerary'}, status=status.HTTP_403_FORBIDDEN)
        serializer = UpdateItinerarySerializer(itinerary, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CreateReviewView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]

    def post(self, request):
        request.data['user'] = request.user.id
        request.data['date'] = datetime.now().date()
        review_serializer = ReviewSerializer(data=request.data)
        if review_serializer.is_valid():
            review_serializer.save()
            return Response(review_serializer.data, status=status.HTTP_201_CREATED)
        return Response(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetPublicItinerariesView(APIView):
    renderer_classes = [UserRenderer]
    def get(self, request):
        # sort itineraries by rating of review object
        itineraries = Itinerary.objects.filter(is_private=False).order_by('-review__rating')
        serializer = ItineraryListSerializer(itineraries, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DeleteItineraryView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def delete(self, request, pk):
        itinerary = Itinerary.objects.get(id=pk)
        if request.user.id != itinerary.user.id:
            return Response({'error': 'You do not have permission to delete this itinerary'}, status=status.HTTP_403_FORBIDDEN)
        itinerary.delete()
        Review.objects.filter(itinerary=pk).delete()

        return Response({'msg': 'Itinerary deleted successfully'}, status=status.HTTP_200_OK)
