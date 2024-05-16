// hide categories (on mobile)

var categoriesFunc;
(categoriesFunc = function categoriesFunc() {
  if ($(".category").length > 0) {
    var $category = $(".category"),
      $categoryItem = $category.find(".category__item"),
      $categoryBtn = $category.find(".category__btn");

    if (window.innerWidth < 768) {
      if ($categoryItem.length > 4) {
        $categoryBtn.removeClass("d-none");

        for (var i = 4; i < $categoryItem.length; i++) {
          $categoryItem.eq(i).addClass("d-none");
        }

        $categoryBtn.on("click", function (e) {
          e.preventDefault();
          $categoryItem.removeClass("d-none");
          $categoryBtn.addClass("d-none");
        });
      }
    } else {
      $categoryItem.removeClass("d-none");
      $categoryBtn.addClass("d-none");
    }
  }
})();
