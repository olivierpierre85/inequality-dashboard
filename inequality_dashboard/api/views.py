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
    """ Return the list of countries and years available with data """

    # TODO filter on inidcaotrid
    # TODO USE PROPERLY SERIALIZER
    indicators = Indicator.objects.all().order_by('country')
    last_country = indicators[0].country
    country_list = []
    years = []
    for i in indicators:
        if last_country.name != i.country.name:
            country_list.append({"code":last_country.code ,"country":last_country.name,"years":years})
            years=[]
        years.append(i.year)
        last_country = i.country
    country_list.append({"code":last_country.code, "country":last_country.name,"years":years})

    #results = CountriesYearsSerializer(country_list, many=True).data
    return HttpResponse(json.dumps(country_list))

def country_year_chart(request,chart_id,country_code,year):
    """ Return data for a chart type, based on country year and indicator type """

    # TODO use chart id to restrict when multiple charts are available
    country = Country.objects.filter(code=country_code).first()
    #TODO check if country doesn't exists
    result = {}
    indicators = Indicator.objects.filter(country=country,year=year).order_by('country')
    for i in indicators:
        result[i.percentile] = float(i.value)

    # TODO create real serializer for this
    return HttpResponse(json.dumps(result))

def test_view(request):
    # get all countries indictor for type ...
    return HttpResponse('test')
