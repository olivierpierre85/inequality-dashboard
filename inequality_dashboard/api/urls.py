from django.urls import path
from .views import CountryView
from .views import IndicatorView
from .  import views 

urlpatterns = [
    path('countries', CountryView.as_view()),
    path('indicators', IndicatorView.as_view()),
    path('countries-years/<int:indicator_id>/', views.countries_years_list),
    path('chart-country-year/<int:chart_id>/<str:country_code>/<int:year>', views.country_year_chart),
    path('test', views.test_view ),
]