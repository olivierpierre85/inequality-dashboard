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
    #TODO filter on inidcaotrid
    indicators = Indicator.objects.all().order_by('country')
    last_country = indicators[0].country.name
    country_list = []
    years = []
    for i in  indicators:
        if last_country != i.country.name:
            country_list.append({"country":last_country,"years":years})
            years=[]
        years.append(i.year)
        last_country = i.country.name
    country_list.append({"country":last_country,"years":years})

    #results = CountriesYearsSerializer(country_list, many=True).data
    return HttpResponse(json.dumps(country_list))

def test_view(request):
    # get all countries indictor for type ...
    return HttpResponse('test')
