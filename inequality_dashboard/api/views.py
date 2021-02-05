from django.shortcuts import render
from rest_framework import generics
from .serializer import CountrySerializer
from .serializer import TestDataSerializer
from .models import Country
from .models import TestData

class CountryView(generics.ListAPIView):
    queryset = TestData.objects.all()
    serializer_class = TestDataSerializer