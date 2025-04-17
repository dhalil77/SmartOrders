from django.urls import path
from .views.authentication.login import LoginUserView

urlpatterns = [
    path('login/',  LoginUserView.as_view()),

]
