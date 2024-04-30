from django.db import models
from authentication.models import User
# Create your models here.
class Preference(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=500, null=False)
    budget = models.IntegerField()
    season = models.CharField(max_length=255, null=False)
    date = models.DateField()
    guests = models.IntegerField()

    def __str__(self):
        return "{} -{}, {}".format(self.user, self.city, self.country)

class Itinerary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=False)
    # add jsonfield for itinerary
    itinerary_description = models.TextField()
    is_private = models.BooleanField(default=True)

    def __str__(self):
        return "{}, {}".format(self.user, self.name)

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    itinerary = models.ForeignKey(Itinerary, on_delete=models.CASCADE)
    rating = models.IntegerField()
    review = models.TextField()
    date = models.DateField()

    # one review per user per itinerary
    class Meta:
        unique_together = ['user', 'itinerary']

    def __str__(self):
        return "{} -{} {}".format(self.itinerary, self.rating,self.user)