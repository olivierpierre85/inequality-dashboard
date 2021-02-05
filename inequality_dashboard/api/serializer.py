from rest_framework import serializers
from .models import Country
from .models import TestData
class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id','code','name','created_at' )

class TestDataSerializer(serializers.ModelSerializer):
    country = CountrySerializer(many=True, read_only=True)
    class Meta:
        model = TestData
        fields = ['year','country']


