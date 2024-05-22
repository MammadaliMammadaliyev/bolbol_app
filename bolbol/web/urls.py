from django.urls import path
from .views import (
    HomeView,
    CategoryTransportView,
    TransportFiltersView,
    CategoryEstateView,
    CategoryElectronicsView,
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
    path(
        "transport-filters/",
        TransportFiltersView.as_view(),
        name="transport-filters"
    ),
    path(
        "elektronika/",
        CategoryElectronicsView.as_view(),
        name="category-electronics"
    ),
]