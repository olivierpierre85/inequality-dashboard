from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse

from .models import Country, IndicatorType, Indicator, IndicatorPercentile

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

def avg_income_countries_years(request):
    """ Return the list of countries and years available with data """
    # TODO USE PROPERLY SERIALIZER
    indicator_type_val = IndicatorType.objects.filter( stat_variable="sptinc992j").first()
    indicators = Indicator.objects.filter( indicator_type=indicator_type_val).order_by('country')
    last_country = indicators[0].country
    country_list = []
    years = []
    for i in indicators:
        if last_country.name != i.country.name:
            years = list(set(years))
            years.sort(reverse=True)
            country_list.append({"code":last_country.code ,"country":last_country.name,"years":years})
            years=[]
        years.append(i.year)
        last_country = i.country
    years = list(set(years))
    years.sort(reverse=True)
    country_list.append({"code":last_country.code, "country":last_country.name,"years":years})

    #results = CountriesYearsSerializer(country_list, many=True).data
    return HttpResponse(json.dumps(country_list))

def average_income_list(request, country_code, year = None):
    """ Return average_income_value for 100 People"""
    indicator_type_rep = IndicatorType.objects.filter( stat_variable="sptinc992j").first()
    country = Country.objects.filter(code=country_code).first()
    #TODO check if country doesn't exists
    result = {}
    if year == None :
        #avg_income_repartition = Indicator.objects.filter(country=country, indicator_type=indicator_type_rep).order_by(year)
        # Get all years for the indicator
        years = Indicator.objects.filter(country=country, indicator_type=indicator_type_rep).values_list('year').distinct()
    else:
        years = [ (year,) ]

    for (y,) in years:
        avg_income_list = {}
        avg_income_repartition = Indicator.objects.filter(country=country,year=y, indicator_type=indicator_type_rep)
    
        for i in avg_income_repartition :
            avg_income_list[i.percentile] = { "percent" : float(i.value)}

        # replace p90p100 by p90p99 for consistency ( compute because p90p99 is not provided in dataset)
        avg_income_list["p90p99"] = { "percent" : (avg_income_list["p90p100"]["percent"] - avg_income_list["p99p100"]["percent"]) }
        del avg_income_list["p90p100"]

        indicator_type_val = IndicatorType.objects.filter( stat_variable="anninc992i").first()
        avg_income_val = Indicator.objects.filter(country=country,year=y, indicator_type=indicator_type_val).first()        
        total_income_100 = avg_income_val.value * 100

        for per, val in avg_income_list.items():
            indicator_percentile = IndicatorPercentile.objects.filter( name=per).first()
            avg_income_list[per]["avg_income"] = round((val["percent"] * float(total_income_100)) / indicator_percentile.size , 2 )

        # Add Average for all
        indicator_percentile = IndicatorPercentile.objects.filter( name=avg_income_val.percentile).first()
        avg_income_list[avg_income_val.percentile] = {"avg_income" : float(avg_income_val.value), "percent" : indicator_percentile.size }

        result[y] = avg_income_list
        # TODO create real serializer for this

    return HttpResponse(json.dumps(result))

