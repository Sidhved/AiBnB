from django.urls import path
from itinerary_planner.views import *

urlpatterns = [
    path('get-itinerary/', GetItineraryView.as_view(), name = "get-itinerary"),
]