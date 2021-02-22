from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse

from .models import Country
from .models import Indicator

from .serializer import CountrySerializer
from .serializer import IndicatorSerializer
from .serializer import CountriesYearsSerializer
import json

class CountryView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class IndicatorView(generics.ListAPIView):
    queryset = Indicator.objects.all()
    serializer_class = IndicatorSerializer

def countries_years_list(request,indicator_id):
    #queryset = Indicator.objects.all()
    yourdata= [{"country": "Belgium", "years": [2010,2030]}, {"country":"France", "years": [2,1]}]
    results = CountriesYearsSerializer(yourdata, many=True).data
    return HttpResponse(json.dumps(results))

def test_view(request):
    # get all countries indictor for type ...
    return HttpResponse('test')
