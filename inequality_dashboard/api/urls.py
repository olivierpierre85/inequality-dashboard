from django.urls import path
from .views import CountryView

urlpatterns = [
    path('country', CountryView.as_view()),
]