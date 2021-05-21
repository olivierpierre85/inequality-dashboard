from django.urls import path
from .views import CountryView
from .views import IndicatorView
from .  import views 

urlpatterns = [
    path('countries', CountryView.as_view()),
    path('indicators', IndicatorView.as_view()),
    path('countries-years/<int:indicator_id>/', views.countries_years_list),
    path('average-income-repartition/<str:country_code>/<int:year>', views.average_income_repartition),
    path('average-income-value/<str:country_code>/<int:year>', views.average_income_value),
]