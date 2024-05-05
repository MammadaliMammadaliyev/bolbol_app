if ($('.typed').length > 0) {
    var typed = new Typed('#search_typed', {
        strings: ["bolbol axtar", 'iPhone 12', 'Pərdə', 'Maşın təkəri', 'Xiaomi Mi9T', 'Rəqs dərsləri', 'və sairə...'],
        typeSpeed: 40,
        backSpeed: 20,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });
}