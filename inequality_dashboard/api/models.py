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
    description = models.TextField( default="",unique=True)    
    stat_variable = models.CharField(max_length=256, default="")
    percentiles = models.ManyToManyField('IndicatorPercentile')

    def __str__(self):
        return self.name

class IndicatorPercentile(models.Model):
    name = models.CharField(max_length=30, default="",unique=True)
    size = models.IntegerField(default=1)

    def __str__(self):
        return self.name

class Indicator(models.Model):
    year = models.CharField(max_length=4, default="")
    indicator_type = models.ForeignKey(IndicatorType, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    value = models.DecimalField(max_digits=999, decimal_places=99, default=0)
    percentile = models.CharField(max_length=30, default="")    

    def __str__(self):
        return self.country.code + "_" + self.indicator_type.stat_variable + "_" + self.percentile + "_" + self.year