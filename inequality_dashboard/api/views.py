from django.shortcuts import render
from rest_framework import generics
from .serializer import CountrySerializer
from .models import Country

class CountryView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer