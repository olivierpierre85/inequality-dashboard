from django.contrib import admin

from .models import Country
from .models import TestData

admin.site.register(Country)
admin.site.register(TestData)
