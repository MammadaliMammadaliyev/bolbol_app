from django.views import generic


class CategoryTransportView(generic.TemplateView):
    template_name = "categories/transport.html"


class TransportFiltersView(generic.TemplateView):
    template_name = "categories/transport_filters.html"


class CategoryEstateView(generic.TemplateView):
    template_name = "categories/estate.html"


class CategoryElectronicsView(generic.TemplateView):
    template_name = "categories/electronics.html"


class CategoryBabyWorldView(generic.TemplateView):
    template_name = "categories/baby_world.html"


class CategoryClothesView(generic.TemplateView):
    template_name = "categories/clothes.html"


class CategoryCosmeticsView(generic.TemplateView):
    template_name = "categories/cosmetics.html"


class CategoryJobVacanciesView(generic.TemplateView):
    template_name = "categories/job_vacancies.html"


class CategoryHomeGardenView(generic.TemplateView):
    template_name = "categories/home_garden.html"


class CategoryMealView(generic.TemplateView):
    template_name = "categories/meal.html"


class CategoryAnimalsPlantsView(generic.TemplateView):
    template_name = "categories/animals_plants.html"


class CategorySportMusicHobbyView(generic.TemplateView):
    template_name = "categories/sport_music_hobby.html"


class CategoryOthersView(generic.TemplateView):
    template_name = "categories/others.html"


class CategoryServicesView(generic.TemplateView):
    template_name = "categories/services.html"