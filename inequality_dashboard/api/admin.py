from django.contrib import admin

from .models import Country
from .models import Indicator
from .models import IndicatorType

admin.site.register(Country)
admin.site.register(Indicator)
admin.site.register(IndicatorType)
