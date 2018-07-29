from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view()),
    path('logout/', views.logout_view),
    path('register/', views.register_view),
    path('lock/', views.LocksView.as_view())
]