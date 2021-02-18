from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse

from .serializer import CountrySerializer
from .models import Country
from .serializer import IndicatorSerializer
from .models import Indicator

class CountryView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class IndicatorView(generics.ListAPIView):
    queryset = Indicator.objects.all()
    serializer_class = IndicatorSerializer

def countries_years_list(request,indicator_type):
    return HttpResponse(indicator_type)

def test_view(request):
    # get all countries indictor for type ...
    return HttpResponse('test')
