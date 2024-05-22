if ($('#home-typed').length > 0) {
    var typed = new Typed('#home-typed', {
        strings: ["bolbol axtar", 'iPhone 12', 'Pərdə', 'Maşın təkəri', 'Xiaomi Mi9T', 'Rəqs dərsləri', 'və sairə...'],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}


if ($('#transport-typed').length > 0) {
    var typed = new Typed('#transport-typed', {
        strings: [
            "Toyota Land Cruiser",
            "BMW 328i, 2018 il",
            "Toyota Camry, 2020 il",
            "Hyundai Elantra, 2019 il",
            "Ford Mustang, 2021 il",
            "Mercedes-Benz C200, 2017 il"
        ],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}

if ($('#estate-typed').length > 0) {
    var typed = new Typed('#estate-typed', {
        strings: [
            "Nərimanov metrosu, 2 otaqlı",
            "28 May metrosu, 3 otaqlı",
            "Elmlər Akademiyası metrosu, 1 otaqlı",
            "Xətai metrosu, 4 otaqlı",
            "Gənclik metrosu, 2 otaqlı"
        ],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}