from django.urls import path
from .views import CountryView
from .views import IndicatorView
from .  import views 

urlpatterns = [
    path('countries', CountryView.as_view()),
    path('indicators', IndicatorView.as_view()),
    path('avg-income-countries-years/', views.avg_income_countries_years),
    path('avg-income-list/<str:country_code>/<int:year>', views.average_income_list),
    path('avg-income-list/<str:country_code>', views.average_income_list),
]