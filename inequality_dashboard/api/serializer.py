from rest_framework import serializers
from .models import Country
from .models import Indicator

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id','code','name','created_at' )

class IndicatorSerializer(serializers.ModelSerializer):
    country = CountrySerializer()
    class Meta:
        model = Indicator
        fields = ['year','country']

# class CountriesYearsSerializer(serializers.Serializer):
#     country = serializers.CharField(required=False, allow_blank=True, max_length=100)
#     years = serializers.ListField(*args, **kwargs)

