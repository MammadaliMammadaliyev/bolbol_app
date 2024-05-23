from django.views import generic


class CategoryTransportView(generic.TemplateView):
    template_name = "categories/transport.html"


class TransportFiltersView(generic.TemplateView):
    template_name = "categories/transport_filters.html"


class CategoryEstateView(generic.TemplateView):
    template_name = "categories/estate.html"


class CategoryElectronicsView(generic.TemplateView):
    template_name = "categories/electronics.html"

    
class CategoryClothesView(generic.TemplateView):
    template_name = "categories/clothes.html"