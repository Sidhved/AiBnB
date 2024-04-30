from django.urls import path
from itinerary_planner.views import *

urlpatterns = [
    path('get-itinerary/', GetItineraryView.as_view(), name = "get-itinerary"),
    path('create-itinerary/', CreateItineraryView.as_view(), name = "create-itinerary"),
    path('get-user-itineraries/', GetUserItinerariesView.as_view(), name = "get-user-itineraries"),
    path('update-itinerary/<int:pk>/', UpdateItineraryView.as_view(), name = "update-itinerary"),
    path('create-review/', CreateReviewView.as_view(), name = "create-review"),
    path('get-public-itineraries/', GetPublicItinerariesView.as_view(), name = "get-public-itineraries"),
    path('delete-itinerary/<int:pk>/', DeleteItineraryView.as_view(), name = "delete-itinerary"),
]