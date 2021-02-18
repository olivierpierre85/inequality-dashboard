from django.urls import path
from .views import CountryView
from .views import IndicatorView
from .  import views 

urlpatterns = [
    path('countries', CountryView.as_view()),
    path('indicators', IndicatorView.as_view()),
    path('countries-years/<int:indicator_type>/', views.countries_years_list),
    path('test', views.test_view ),
]