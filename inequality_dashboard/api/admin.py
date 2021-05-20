from django.contrib import admin

from .models import Country
from .models import Indicator
from .models import IndicatorType
from .models import IndicatorPercentile

admin.site.register(Country)
admin.site.register(Indicator)
admin.site.register(IndicatorType)
admin.site.register(IndicatorPercentile)
