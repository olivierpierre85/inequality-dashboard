from django.db import models

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=256, default="",unique=True)
    code = models.CharField(max_length=2, default="",unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

class IndicatorType(models.Model):
    name = models.CharField(max_length=256, default="",unique=True)
    #percentile
    def __str__(self):
        return self.name


class Indicator(models.Model):
    year = models.CharField(max_length=4, default="")
    indicator_type = models.ForeignKey(IndicatorType, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    data = models.JSONField()

