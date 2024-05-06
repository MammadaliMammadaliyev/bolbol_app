if ($('#home-typed').length > 0) {
    console.log("home search")
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
    console.log("transport search")
    var typed = new Typed('#transport-typed', {
        strings: ["Toyota Land Cruiser", 'iPhone 12', 'Pərdə', 'Maşın təkəri', 'Xiaomi Mi9T', 'Rəqs dərsləri', 'və sairə...'],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}

if ($('#estate-typed').length > 0) {
    var typed = new Typed('#estate-typed', {
        strings: ["Nerimanov 2 otaqli", 'iPhone 12', 'Pərdə', 'Maşın təkəri', 'Xiaomi Mi9T', 'Rəqs dərsləri', 'və sairə...'],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}