from django.urls import path
from .views import (
    HomeView,
    CategoryTransportView,
    CategoryEstateView
)


app_name = "web"

urlpatterns = [
    path(
        "",
        HomeView.as_view(),
        name="home"
    ),
    path(
        "neqliyyat/",
        CategoryTransportView.as_view(),
        name="category-transport"
    ),
    path(
        "dashinmaz-emlak/",
        CategoryEstateView.as_view(),
        name="category-estate"
    ),
]