from django.shortcuts import render
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_itinerary


# Create your views here.
class GetItineraryView(APIView):
    def post(self, request):
        print(request.data)
        generated_itinerary = generate_itinerary(request.data['destination'], request.data['days'], request.data['guests'], request.data['budget'], request.data['preferences'])
        return Response({'itinerary': generated_itinerary}, status=status.HTTP_200_OK)
