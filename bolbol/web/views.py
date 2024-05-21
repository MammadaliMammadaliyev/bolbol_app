from django.views import generic


class HomeView(generic.TemplateView):
    template_name = "web/home.html"


class CategoryTransportView(generic.TemplateView):
    template_name = "web/transport.html"


class TransportFiltersView(generic.TemplateView):
    template_name = "web/transport_filters.html"


class CategoryEstateView(generic.TemplateView):
    template_name = "web/estate.html"


class CategoryElectronicsView(generic.TemplateView):
    template_name = "web/electronics.html"