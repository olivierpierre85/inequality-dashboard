from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=256, default="",unique=True)
    code = models.CharField(max_length=2, default="",unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

class TestData(models.Model):
    year = models.CharField(max_length=4, default="")
    country = models.ForeignKey(Country, on_delete=models.CASCADE)