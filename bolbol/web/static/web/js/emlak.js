document.querySelectorAll("#emlakRoom").forEach(function (room) {
  const emlakRoomDropdown = room.querySelector(".emlak_room_dropdown");
  const checkedEmlakRoom = room.querySelector("#checkedEmlakRoom");
  const emlakRoomArrow = room.querySelector("#emlakRoomArrow");
  const otherRoom = room.querySelector("#otherRoom");
  const roomCheckboxes = room.querySelectorAll(
    '.emlak_room_dropdown input[type="checkbox"]'
  );
  const roomCheckboxes2 = room.querySelectorAll(
    '.mobile_emlak_room input[type="checkbox"]'
  );
  const checkedEmlakRoom2 = document.querySelector("#checkedEmlakRoom2");

  let roomArr = [];

  document.addEventListener("click", function (e) {
    if (
      !room.contains(e.target) &&
      e.target !== emlakRoomDropdown &&
      e.target !== emlakRoomArrow &&
      e.target !== checkedEmlakRoom
    ) {
      emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
      emlakRoomOpen = false;
      emlakRoomArrow.style.transform = "rotate(0)";
    }
  });

  room.addEventListener("click", (e) => {
    emlakRoomDropdown.classList.toggle("emlak_room_dropdown_visible");
    emlakRoomArrow.style.transform = emlakRoomDropdown.classList.contains(
      "emlak_room_dropdown_visible"
    )
      ? "rotate(180deg)"
      : "rotate(0)";
  });

  emlakRoomDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  otherRoom.addEventListener("click", () => {
    roomArr = [];
    roomCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.style.backgroundColor = "";
      checkbox.style.color = "";
      checkbox.parentNode.classList.remove("checked");
    });
    roomCheckboxes2.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.style.backgroundColor = "";
      checkbox.style.color = "";
      checkbox.parentNode.classList.remove("checked");
    });
    emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
    emlakRoomArrow.style.transform = "rotate(0)";
    checkedEmlakRoom.textContent = "Otaq sayı";
    checkedEmlakRoom2.textContent = "Otaq sayı";
    SelectedRoomCount = roomArr;
  });

  roomCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      otherRoom.checked = false;
      const text = (index + 1).toString();
      roomArr = updateRoomArr(roomArr, text);
      SelectedRoomCount = roomArr;
      checkbox.parentNode.classList.toggle("checked");
      updateCheckedEmlakRoom();
    });
  });
  roomCheckboxes2.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      otherRoom.checked = false;
      const text = (index + 1).toString();
      roomArr = updateRoomArr(roomArr, text);
      checkbox.parentNode.classList.toggle("checked");
      updateCheckedEmlakRoom();
    });
  });

  function updateRoomArr(arr, text) {
    if (arr.includes(text)) {
      arr = arr.filter((a) => a != text);
    } else {
      arr.push(text);
    }
    return arr.sort((a, b) => a - b);
  }

  function updateCheckedEmlakRoom() {
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
      checkedEmlakRoom2.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = word ? `${word} otaqlı` : "Otaq sayı";
      checkedEmlakRoom2.textContent = word ? `${word} otaqlı` : "Otaq sayı";
    }
    if (
      checkedEmlakRoom.textContent.length > 15 ||
      checkedEmlakRoom2.textContent.length > 15
    ) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
      checkedEmlakRoom2.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  }
});

document.querySelectorAll(".emlak_floor_hero").forEach(function (floorHero) {
  const emlakFloorNotOneInput1 = floorHero.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = floorHero.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = floorHero.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;

  emlakFloorNotOneInput3.addEventListener("click", () => {
    if (emlakFloorNotOneInput3.checked == true) {
      emlakFloorNotOneInput2.checked = false;
    }
  });
  emlakFloorNotOneInput2.addEventListener("click", () => {
    if (emlakFloorNotOneInput2.checked == true) {
      emlakFloorNotOneInput3.checked = false;
    }
  });
});

const emlakHideBtn = document.querySelector(".emlak_hide");
const emlakShowBtn = document.querySelector(".emlak_show");
const emlakReset = document.querySelector(".emlak_reset");

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
let selectedBuyType = "buy";
let selectedBuildingType = null;
let SelectedRoomCount = [];
let selectedPrice = {
  min: 0,
  max: 0,
};
let selectedArea = {
  min: 0,
  max: 0,
};
let selectedFloor = {
  min: 0,
  max: 0,
};
let selectedCity = "Bakı";
let selectedMetro = [];
let selectedNisangah = [];
let selectedRayon = [];
let filteredMetro = [];
let selectedAdditional = [];

let roomTypeDefaultValueMob = "buy";
const alqiSatqiMob = document.getElementById("emlak_mobi_alqi_input");
const kirayeMob = document.getElementById("emlak_mobi_alqi_input");

const metroDropdownList = document.querySelector("#metros");
const metroDropdown = document.querySelector("#emlak_metro");
const metroDropdownBtn = document.querySelector("#metro-btn");
document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const citiesArr = [
    { city: "Ağcabədi" },
    { city: "Ağdam" },
    { city: "Ağdaş" },
    { city: "Ağstafa" },
    { city: "Ağsu" },
    { city: "Astara" },
    { city: "Babək" },
    {
      city: "Bakı",
      metro: ["Hazi Aslanov", "Xetai"],
      nisangah: ["Heydar Aliyev Centre", "28 Mall"],
      rayon: ["Xətai r.", "Xəzər r."],
      qesebe: ["Buzovna", "Mərdəkan"],
    },
    { city: "Balakən" },
    { city: "Beyləqan" },
    { city: "Bərdə" },
    { city: "Biləsuvar" },
    { city: "Cəbrayıl" },
    { city: "Cəlilabad" },
    { city: "Culfa" },
    { city: "Daşkəsən" },
    { city: "Dəliməmmədli" },
    { city: "Füzuli" },
    { city: "Gədəbəy" },
    { city: "Gəncə", nisangah: ["Heydar Aliyev Park", "Kolorit"] },
    { city: "Goranboy" },
    { city: "Göyçay" },
    { city: "Göygöl" },
    { city: "Göytəpə" },
    { city: "Hacıqabul" },
    { city: "Horadiz" },
    { city: "İmişli" },
    { city: "İsmayıllı" },
    { city: "Kürdəmir" },
    { city: "Laçın" },
    { city: "Lerik" },
    { city: "Lənkəran" },
    { city: "Liman" },
    { city: "Masallı" },
    { city: "Mingəçevir" },
    { city: "Naftalan" },
    { city: "Naxçıvan" },
    { city: "Neftçala" },
    { city: "Oğuz" },
    { city: "Ordubad" },
    { city: "Qax" },
    { city: "Qazax" },
    { city: "Qəbələ" },
    { city: "Qobustan" },
    { city: "Quba" },
    { city: "Qusar" },
    { city: "Saatlı" },
    { city: "Sabirabad" },
    { city: "Şabran" },
    { city: "Şahbuz" },
    { city: "Salyan" },
    { city: "Şamaxı" },
    { city: "Samux" },
    { city: "Şəki" },
    { city: "Şəmkir" },
    { city: "Şərur" },
    { city: "Şirvan" },
    { city: "Siyəzən" },
    { city: "Sumqayıt" },
    { city: "Şuşa" },
    { city: "Tərtər" },
    { city: "Tovuz" },
    { city: "Ucar" },
    { city: "Xaçmaz" },
    { city: "Xırdalan" },
    { city: "Xızı" },
    { city: "Xudat" },
    { city: "Yardımlı" },
    { city: "Yevlax" },
    { city: "Zaqatala" },
    { city: "Zərdab" },
  ];
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const type = dropDownBtn.dataset.value;
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  if (type == "emkak-buy") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        selectedBuyType = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Alış";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        selectedBuildingType = this.innerText;

        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikili";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-city") {
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a.city);
      li.textContent = a.city;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Şəhər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-mobi-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      dropDownList.classList.toggle("dropdown_otaq");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikililər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emlak_desc_city") {
    const dropDownListHero = dropDownWrapper.querySelector(
      ".dropdown__list_hero"
    );
    const dropDownList = document.createElement("ul");
    dropDownList.classList.add("dropdown__list");
    const input = document.createElement("input");
    input.classList.add("universal_search_input");
    input.setAttribute("type", "text");
    dropDownListHero.append(input);
    input.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListHero.append(p);
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a.city);
      li.textContent = a.city;
      dropDownList.append(li);
    });

    dropDownListHero.append(dropDownList);
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      // dropDownListHero.classList.toggle(".dropdown__list_hero_visible");
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        citiesArr.map((a) => {
          // console.log(a);
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a.city);
          li.textContent = a.city;
          dropDownList.append(li);
        });
        input.value = "";
        dropOpen = true;
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          const text = e.target.textContent;
          dropArrow.classList.remove("rotate");
          dropDownBtn.innerText = this.innerText;
          selectedCity = this.innerText;
          document.querySelector("#metros").innerText = "";
          // document.querySelector("#qesebeler").innerText = "";
          fillMetros();
          fillNisangahs();
          fillRayons();
          // fillRayon();
          // fillQesebe();
          dropDownBtn.focus();
          dropDownInput.value = this.dataset.value;
          dropDownListHero.classList.remove(".dropdown__list_hero_visible");
          dropDownListHero.style.display = "none";
          dropOpen = false;
        });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Şəhər";
    });
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const newList = [];
      dropDownList.innerText = "";
      dropDownListItems.forEach(function (listItem) {
        const newItem = listItem.textContent.toLowerCase();
        if (newItem.startsWith(value.toLowerCase())) {
          newList.push(listItem);
        }
      });
      const h4 = document.createElement("h4");
      h4.classList.add("none_text");
      h4.textContent = "Nəticə tapılmadi";
      dropDownList.append(h4);
      if (newList.length) {
        newList.map((a) => {
          dropDownList.append(a);
        });
        h4.classList.remove("none_text_visible");
      } else {
        h4.classList.add("none_text_visible");
      }
    });

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#metro-btn").innerText = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      document.querySelector("#metros").innerText = "";
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
      }
    });
  }
  if (type === "city-mob") {
    const dropDownListHero = dropDownWrapper.querySelector(
      ".dropdown__list_hero"
    );
    const dropDownList = document.createElement("ul");
    dropDownList.classList.add("dropdown__list");
    // const input = document.createElement("input");
    // input.classList.add("universal_search_input");
    // input.setAttribute("type", "text");
    // dropDownListHero.append(input);
    // input.addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListHero.append(p);
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a.city);
      li.textContent = a.city;
      dropDownList.append(li);
    });

    dropDownListHero.append(dropDownList);
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      // dropDownListHero.classList.toggle(".dropdown__list_hero_visible");
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        citiesArr.map((a) => {
          // console.log(a);
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a.city);
          li.textContent = a.city;
          dropDownList.append(li);
        });
        // input.value = "";
        dropOpen = true;
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          const text = e.target.textContent;
          dropArrow.classList.remove("rotate");
          dropDownBtn.innerText = this.innerText;
          selectedCity = this.innerText;
          document.querySelector("#metros").innerText = "";
          fillMetrosMob();
          fillNisangahsMob();
          fillRayonsMob();
          dropDownBtn.focus();
          dropDownInput.value = this.dataset.value;
          dropDownListHero.classList.remove(".dropdown__list_hero_visible");
          dropDownListHero.style.display = "none";
          dropOpen = false;
        });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Şəhər";
    });

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#metro-btn").innerText = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      document.querySelector("#metros").innerText = "";
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
      }
    });
  }
  // function fillMetro() {
  //   let filteredMetro = citiesArr.filter((city) => city.city == selectedCity);

  //   if (filteredMetro.length > 0) {
  //     const firstCity = filteredMetro[0];
  //     if (firstCity.metro && firstCity.metro.length > 0) {
  //       console.log("true");
  //       document.querySelector("#metro-btn").style.backgroundColor = "#fff";
  //     } else {
  //       document.querySelector("#metro-btn").style.backgroundColor =
  //         "#f7f5f562";
  //       return;
  //     }
  //   } else {
  //     console.log("City not found");
  //     document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
  //   }

  //   const dropDownListMetro = document.querySelector("#metros");
  //   const dropDownBtn = document.querySelector("#metro-btn");
  //   dropDownBtn.innerText = "Metro";
  //   const p = document.createElement("p");
  //   p.classList.add("items_reset_btn");
  //   p.textContent = "Sıfırla";
  //   const i = document.createElement("i");
  //   i.classList.add("fa-sharp");
  //   i.classList.add("fa-solid");
  //   i.classList.add("fa-xmark");
  //   p.append(i);
  //   dropDownListMetro.append(p);
  //   if (filteredMetro[0].metro) {
  //     filteredMetro[0].metro.map((a) => {
  //       const li = document.createElement("li");
  //       li.classList.add("dropdown__list-item");
  //       li.setAttribute("data-value", a);
  //       li.textContent = a;
  //       dropDownListMetro.append(li);
  //     });
  //   }
  //   const dropDownListItems = dropDownListMetro.querySelectorAll(
  //     ".dropdown__list-item"
  //   );
  //   const dropDownInput = dropDownWrapper.querySelector(
  //     ".dropdown__input-hidden"
  //   );
  //   const dropArrow = dropDownWrapper.querySelector("i");
  //   // Клик по кнопке. Открыть/Закрыть select
  //   dropDownBtn.addEventListener("click", function (e) {
  //     const dropDownListMetro = document.getElementById("metros");
  //     if (dropDownListMetro.childElementCount > 0) {
  //       dropDownListMetro.classList.toggle("dropdown__list--visible");
  //     } else {
  //       dropDownListMetro.classList.remove("dropdown__list--visible");
  //     }
  //     this.classList.toggle("dropdown__button--active");
  //     dropArrow.classList.toggle("rotate");
  //   });
  //   document
  //     .querySelector("#emlak_all_reset_btn")
  //     .addEventListener("click", () => {
  //       removeEventButton();
  //       dropDownBtn.removeEventListener("click", removeEventButton);
  //     });
  //   // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  //   dropDownListItems.forEach(function (listItem) {
  //     listItem.addEventListener("click", function (e) {
  //       e.stopPropagation();
  //       e.target.classList.toggle("added_model");
  //       let ifCheck = [];
  //       dropDownListItems.forEach((a) => {
  //         let gfgf = a.classList.value;
  //         let b = gfgf.split(" ");
  //         if (a.classList.value.split(" ").includes("added_model")) {
  //           ifCheck.push(a);
  //         } else {
  //           ifCheck.filter((n) => n != a);
  //         }
  //       });
  //       let name = [];
  //       if (ifCheck.length) {
  //         for (let i = 0; i < ifCheck.length; i++) {
  //           name.push(ifCheck[i].innerText);
  //         }
  //       }
  //       dropDownBtn.innerText = name.length ? name.join(", ") : "Metro";
  //       if (dropDownBtn.innerText == "Metro") {
  //         document.querySelector("#Metro-btn").style.backgroundColor =
  //           "#f7f5f562";
  //       }
  //       if (dropDownBtn.innerText.length > 20) {
  //         dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
  //       }
  //       dropDownBtn.focus();
  //       dropDownInput.value = dropDownInput.value.length
  //         ? dropDownInput.value + this.dataset.value
  //         : dropDownInput.value;
  //       document
  //         .querySelector("#emlak_all_reset_btn")
  //         .addEventListener("click", () => {
  //           dropDownBtn.innerText = "Metro";
  //           name = [];
  //           ifCheck = [];
  //         });
  //     });
  //   });
  //   p.addEventListener("click", () => {
  //     dropDownBtn.textContent = "Metro";
  //     document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
  //     dropDownListItems.forEach(function (listItem) {
  //       listItem.classList.remove("added_model");
  //       document.querySelector("#metro-btn").classList.add("empty");
  //       dropDownListMetro.textContent = "";
  //     });
  //   });
  //   document.addEventListener("click", function (e) {
  //     if (e.target !== dropDownBtn) {
  //       dropDownBtn.classList.remove("dropdown__button--active");
  //       dropDownListMetro.classList.remove("dropdown__list--visible");
  //     }
  //   });

  //   // Нажатие на Tab или Escape. Закрыть дропдаун
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "Tab" || e.key === "Escape") {
  //       dropDownBtn.classList.remove("dropdown__button--active");
  //       dropDownListMetro.classList.remove("dropdown__list--visible");
  //     }
  //   });
  //   const removeEventButton = () => {
  //     dropDownBtn.textContent = "Metro";
  //     document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
  //     dropDownListItems.forEach(function (listItem) {
  //       listItem.classList.remove("added_model");
  //       document.querySelector("#metro-btn").classList.add("empty");
  //       dropDownListMetro.textContent = "";
  //     });
  //   };
  // }
  function fillMetros() {
    document
      .querySelector("#emlak_metro .drop_arrow")
      .classList.remove("rotate");
    let filteredMetro = citiesArr.filter((city) => city.city == selectedCity);
    const dropDownList = document.querySelector("#metros");
    const dropDownBtn = document.querySelector("#metro-btn");
    dropDownBtn.innerText = "Metro";
    if (filteredMetro[0]?.metro?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    // const itemsResetBtn = document.getElementById("models_reset_btn");
    // console.log(itemsResetBtn)
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const handleBtn = (e) => {
      if (filteredMetro[0]?.metro?.length > 0) {
        document
          .querySelector("#emlak_metro .drop_arrow")
          .classList.add("rotate");
        const dropDownList = document.querySelector("#metros");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
      } else {
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
        document
          .querySelector("#emlak_metro .drop_arrow")
          .classList.remove("rotate");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    filteredMetro[0]?.metro?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Metro";
        if (dropDownBtn.innerText == "Metro") {
          document.querySelector("#metros-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
        selectedMetro = name;
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#metro-btn").innerText = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      document.querySelector("#metros").innerText = "";
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Metro";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_metro .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_metro .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
  function fillMetrosMob() {
    document
      .querySelector("#emlak_metro-mob .drop_arrow")
      .classList.remove("rotate");
    let filteredMetro = citiesArr.filter((city) => city.city == selectedCity);
    const dropDownList = document.querySelector("#metros-mob");
    const dropDownBtn = document.querySelector("#metro-btn-mob");
    dropDownBtn.innerText = "Metro";
    if (filteredMetro[0]?.metro?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    // const itemsResetBtn = document.getElementById("models_reset_btn");
    // console.log(itemsResetBtn)
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const handleBtn = (e) => {
      if (filteredMetro[0]?.metro?.length > 0) {
        document
          .querySelector("#emlak_metro-mob .drop_arrow")
          .classList.add("rotate");
        const dropDownList = document.querySelector("#metros-mob");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
      } else {
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
        document
          .querySelector("#emlak_metro-mob .drop_arrow")
          .classList.remove("rotate");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    filteredMetro[0]?.metro?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Metro";
        selectedMetro = name;
        if (dropDownBtn.innerText == "Metro") {
          document.querySelector("#metro-btn-mob").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#metro-btn-mob").innerText = "Metro";
      document.querySelector("#metro-btn-mob").style.backgroundColor =
        "#f7f5f562";
      document.querySelector("#metros-mob").innerText = "";
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Metro";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_metro-mob .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_metro-mob .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
  function fillNisangahs() {
    document
      .querySelector("#emlak_nisangah .drop_arrow")
      .classList.remove("rotate");
    let filteredNisangah = citiesArr.filter(
      (city) => city.city == selectedCity
    );
    const dropDownList = document.querySelector("#nisangahs");
    dropDownList.innerHTML = "";
    const dropDownBtn = document.querySelector("#nisangah-btn");
    dropDownBtn.innerText = "Nişangah";
    if (filteredNisangah[0]?.nisangah?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    // const itemsResetBtn = document.getElementById("models_reset_btn");
    // console.log(itemsResetBtn)
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const dropArrow = dropDownWrapper.querySelector("i");

    const handleBtn = (e) => {
      dropArrow.classList.toggle("rotate");
      if (filteredNisangah[0]?.nisangah?.length > 0) {
        dropArrow.classList.toggle("rotate");
        const dropDownList = document.querySelector("#nisangahs");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
        document
          .querySelector("#emlak_nisangah .drop_arrow")
          .classList.add("rotate");
      } else {
        const dropDownList = document.querySelector("#nisangahs");
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    filteredNisangah[0]?.nisangah?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Nişangah";
        // if (dropDownBtn.innerText == "Nişangah") {
        //   document.querySelector("#nisangah-btn").style.backgroundColor =
        //     "#f7f5f562";
        // }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
        selectedNisangah = name;
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#nisangah-btn").innerText = "Nişangah";
      document.querySelector("#nisangah-btn").style.backgroundColor =
        "#f7f5f562";
      document.querySelector("#nisangahs").innerHTML = "";
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Nişangah";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_nisangah .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_nisangah .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
  function fillNisangahsMob() {
    document
      .querySelector("#emlak_nisangah-mob .drop_arrow")
      .classList.remove("rotate");
    let filteredNisangah = citiesArr.filter(
      (city) => city.city == selectedCity
    );
    const dropDownList = document.querySelector("#nisangahs-mob");
    dropDownList.innerHTML = "";
    const dropDownBtn = document.querySelector("#nisangah-btn-mob");
    dropDownBtn.innerText = "Nişangah";
    if (filteredNisangah[0]?.nisangah?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    // const itemsResetBtn = document.getElementById("models_reset_btn");
    // console.log(itemsResetBtn)
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const dropArrow = dropDownWrapper.querySelector("i");

    const handleBtn = (e) => {
      dropArrow.classList.toggle("rotate");
      if (filteredNisangah[0]?.nisangah?.length > 0) {
        dropArrow.classList.toggle("rotate");
        const dropDownList = document.querySelector("#nisangahs-mob");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
        document
          .querySelector("#emlak_nisangah-mob .drop_arrow")
          .classList.add("rotate");
      } else {
        const dropDownList = document.querySelector("#nisangahs-mob");
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    filteredNisangah[0]?.nisangah?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        selectedNisangah = name;

        dropDownBtn.innerText = name.length ? name.join(", ") : "Nişangah";
        // if (dropDownBtn.innerText == "Nişangah") {
        //   document.querySelector("#nisangah-btn").style.backgroundColor =
        //     "#f7f5f562";
        // }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
        selectedNisangah = name;
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#nisangah-btn-mob").innerText = "Nişangah";
      document.querySelector("#nisangah-btn-mob").style.backgroundColor =
        "#f7f5f562";
      document.querySelector("#nisangahs-mob").innerHTML = "";
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Nişangah";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_nisangah-mob .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_nisangah .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
  function fillRayons() {
    let filteredRayon = citiesArr.filter((city) => city.city == selectedCity);
    const dropDownList = document.querySelector("#rayons");
    dropDownList.innerHTML = "";
    const dropDownBtn = document.querySelector("#rayon-btn");
    dropDownBtn.innerText = "Rayon və Qəsəbələr";
    if (filteredRayon[0]?.rayon?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const handleBtn = (e) => {
      if (filteredRayon[0]?.rayon?.length > 0) {
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.add("rotate");
        const dropDownList = document.querySelector("#rayons");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
      } else {
        const dropDownList = document.querySelector("#rayons");
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.remove("rotate");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    const li2 = document.createElement("li");
    li2.classList.add("dropdown__list-item", "dropdown__list-item-heading");
    li2.textContent = "Rayon";
    dropDownList.append(li2);
    filteredRayon[0]?.rayon?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const li3 = document.createElement("li");
    li3.classList.add("dropdown__list-item", "dropdown__list-item-heading");
    li3.textContent = "Qəsəbə";
    dropDownList.append(li3);
    filteredRayon[0]?.qesebe?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        if (listItem.classList.contains("dropdown__list-item-heading")) {
          return;
        }
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        selectedRayon = name;

        dropDownBtn.innerText = name.length
          ? name.join(", ")
          : "Rayon və Qəsəbələr";
        if (dropDownBtn.innerText == "Rayon və Qəsəbələr") {
          document.querySelector("#metros-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Rayon və Qəsəbələr";
      document.querySelector("#rayon-btn").innerText = "Rayon və Qəsəbələr";
      document.querySelector("#rayon-btn").style.backgroundColor = "#f7f5f562";
      document.querySelector("#rayons").innerHTML = "";
      document
        .querySelector("#emlak_rayon .drop_arrow")
        .classList.remove("rotate");
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Rayon və Qəsəbələr";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
  function fillRayonsMob() {
    let filteredRayon = citiesArr.filter((city) => city.city == selectedCity);
    const dropDownList = document.querySelector("#rayons-mob");
    dropDownList.innerHTML = "";
    const dropDownBtn = document.querySelector("#rayons-btn-mob");
    dropDownBtn.innerText = "Rayon və Qəsəbələr";
    if (filteredRayon[0]?.rayon?.length > 0) {
      dropDownBtn.style.backgroundColor = "#fff";
    } else {
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    }
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownList.append(p);
    const handleBtn = (e) => {
      if (filteredRayon[0]?.rayon?.length > 0) {
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.add("rotate");
        const dropDownList = document.querySelector("#rayons-mob");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownList.classList.add("dropdown__list--visible");
        e.currentTarget.classList.toggle("dropdown__button--active");
        dropDownBtn.setAttribute("listener", "true");
      } else {
        const dropDownList = document.querySelector("#rayons-mob");
        dropDownList.classList.remove("dropdown__list--visible");
        e.currentTarget.classList.remove("dropdown__button--active");
        document
          .querySelector("#emlak_rayon-mob .drop_arrow")
          .classList.remove("rotate");
      }
    };
    dropDownBtn.addEventListener("click", handleBtn);
    const li2 = document.createElement("li");
    li2.classList.add("dropdown__list-item", "dropdown__list-item-heading");
    li2.textContent = "Rayon";
    dropDownList.append(li2);
    filteredRayon[0]?.rayon?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const li3 = document.createElement("li");
    li3.classList.add("dropdown__list-item", "dropdown__list-item-heading");
    li3.textContent = "Qəsəbə";
    dropDownList.append(li3);
    filteredRayon[0]?.qesebe?.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        if (listItem.classList.contains("dropdown__list-item-heading")) {
          return;
        }
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length
          ? name.join(", ")
          : "Rayon və Qəsəbələr";
        if (dropDownBtn.innerText == "Rayon və Qəsəbələr") {
          document.querySelector("#metros-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        // document
        //   .querySelector(".filter_reset_btn")
        //   .addEventListener("click", () => {
        //     dropDownBtn.innerText = "Model";
        //     name = [];
        //     ifCheck = [];
        //   });
        selectedRayon = name;
      });
    });
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Rayon və Qəsəbələr";
      document.querySelector("#rayons-btn-mob").innerText =
        "Rayon və Qəsəbələr";
      document.querySelector("#rayons-btn-mob").style.backgroundColor =
        "#f7f5f562";
      document.querySelector("#rayons-mob").innerHTML = "";
      document
        .querySelector("#emlak_rayon-mob .drop_arrow")
        .classList.remove("rotate");
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Rayon və Qəsəbələr";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        document
          .querySelector("#emlak_rayon .drop_arrow")
          .classList.remove("rotate");
      }
    });
    emlakAllResetBtn.addEventListener("click", (e) => {
      dropDownBtn.removeEventListener("click", handleBtn);
      dropDownBtn.style.backgroundColor = "#f7f5f562";
    });
  }
});

document
  .querySelectorAll(".unersal_inputs")
  .forEach(function (universalInputs) {
    const labels = universalInputs.querySelectorAll("label");
    labels.forEach((label) => {
      const input = label.querySelector("input");
      const p = label.querySelector("p");
      input.addEventListener("focus", () => {
        p.classList.add("active_p");
      });
      document.addEventListener("click", function (e) {
        if (e.target !== input && input.value == "") {
          p.classList.remove("active_p");
        }
        document
          .querySelector(".emlakMobiSearchDropdown_reset")
          .addEventListener("click", () => {
            p.classList.remove("active_p");
            input.value = "";
          });
      });
    });
  });

document.querySelectorAll(".emlak_mobi_buy.n2 input").forEach((input) => {
  input.addEventListener("click", (e) => {
    if (
      (e.currentTarget.id == "emlak_mobi_alqi_input") &
      e.currentTarget.checked
    ) {
      selectedBuyType = "buy";
    } else {
      selectedBuyType = "rent";
    }
  });
});
document.querySelectorAll("#mean_buy input").forEach((input) => {
  input.addEventListener("click", (e) => {
    if (
      (e.currentTarget.id == "emlak_mobi_alqi_input_mean") &
      e.currentTarget.checked
    ) {
      selectedBuyType = "buy";
    } else {
      selectedBuyType = "rent";
    }
  });
});
document.querySelector(".emlakMobiSearchBtn").addEventListener("click", () => {
  document
    .querySelector(".emlakMobiSearchDropdown")
    .classList.add("emlakMobiSearchDropdown_visible");

  if (selectedBuyType == "buy") {
    document.querySelector("#emlak_mobi_alqi_input_mean").checked = true;
    document.querySelector("#emlak_mobi_kiraye_input_mean").checked = false;
  } else if (selectedBuyType == "rent") {
    document.querySelector("#emlak_mobi_alqi_input_mean").checked = false;
    document.querySelector("#emlak_mobi_kiraye_input_mean").checked = true;
  }
});
document
  .querySelector(".emlakMobiSearchDropdown_header i")
  .addEventListener("click", () => {
    document
      .querySelector(".emlakMobiSearchDropdown")
      .classList.remove("emlakMobiSearchDropdown_visible");
  });

const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
document.getElementById("emlak_mobi_alqi_input_mean").checked = true;
console.log(document.getElementById("emlak_mobi_alqi_input_mean").checked);
document.querySelector(".month").classList.add("dnone");
document
  .querySelector(".emlak_ipoteka_cixarish_mobi")
  .classList.remove("dnone");
document.querySelector(".floor_check").classList.remove("dnone");
document.querySelector(".floor_floor").classList.remove("dnone");
document.querySelector(".sand_place").classList.add("dnone");
document.querySelector(".emlak_biznes").classList.add("dnone");
document.querySelector(".floor_all").classList.remove("dnone");
document.querySelector(".sand_metr").classList.remove("dnone");

alqiSatqi.addEventListener("change", () => {
  if (alqiSatqi.checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
});
kiraye.addEventListener("change", () => {
  document.querySelector(".month").classList.remove("dnone");
  document.querySelector(".emlak_ipoteka_cixarish_mobi").classList.add("dnone");
});

document.querySelectorAll(".emlak_checks2 label").forEach((input) => {
  input.addEventListener("click", (e) => {
    const value = e.currentTarget.innerText;
    if (SelectedRoomCount.includes(value)) {
      const index = SelectedRoomCount.indexOf(value);
      SelectedRoomCount.splice(index, 1);
    } else {
      SelectedRoomCount.push(value);
    }
  });
});

const checksHome = document.getElementById("checks_home");
const checksNewHome = document.getElementById("checks_Newhome");
const checksOldHome = document.getElementById("checks_Oldhome");
const checksGarden = document.getElementById("checks_garden");
const checksOffice = document.getElementById("checks_ofise");
const checksQarage = document.getElementById("checks_qaraje");
const checksLand = document.getElementById("checks_land");
const checksObject = document.getElementById("checks_object");

checksHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksNewHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOldHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksGarden.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOffice.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.remove("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksQarage.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksLand.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksObject.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});

const additional = [
  "1ci olmasın",
  "Ən üst olmasın",
  "Yalnız ən üst",
  "İpoteka var",
  "Çıxarış var",
  "Barter var",
];
const additionalChekings = document.querySelector(".additional_chekings_emlak");
additional.map((a, i) => {
  const div = document.createElement("div");
  div.classList.add("additional_chekings_item");
  const label = document.createElement("label");
  label.textContent = a;
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `additional_chekings_input${i}`);
  label.setAttribute("for", `additional_chekings_input${i}`);
  div.append(input);
  div.append(label);
  additionalChekings.append(div);
});

const emlakResetBtn = document.querySelector(".emlakMobiSearchDropdown_reset");

emlakResetBtn.addEventListener("click", () => {
  const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
  const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
  alqiSatqi.checked = true;
  kiraye.checked = false;
  document.querySelector(".month").classList.add("dnone");
  document
    .querySelector(".emlak_ipoteka_cixarish_mobi")
    .classList.remove("dnone");

  const checksHome = document.getElementById("checks_home");
  const checksNewHome = document.getElementById("checks_Newhome");
  const checksOldHome = document.getElementById("checks_Oldhome");
  const checksGarden = document.getElementById("checks_garden");
  const checksOffice = document.getElementById("checks_ofise");
  const checksQarage = document.getElementById("checks_qaraje");
  const checksLand = document.getElementById("checks_land");
  const checksObject = document.getElementById("checks_object");
  checksHome.checked = true;
  checksNewHome.checked = false;
  checksOldHome.checked = false;
  checksGarden.checked = false;
  checksOffice.checked = false;
  checksQarage.checked = false;
  checksLand.checked = false;
  checksObject.checked = false;
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
  document.getElementById("checks_1").checked = false;
  document.getElementById("checks_2").checked = false;
  document.getElementById("checks_3").checked = false;
  document.getElementById("checks_4").checked = false;
  document.getElementById("checks_5").checked = false;
  document.getElementById("emlak_cixarish3").checked = false;
  document.getElementById("emlak_ipoteka4").checked = false;
  document.getElementById("emlak_cixarish5").checked = false;
  document.getElementById("emlak_ipoteka5").checked = false;
  const emlakFloorNotOneInput1 = document.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = document.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = document.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;
  selectedBuyType = null;
  selectedBuildingType = null;
  SelectedRoomCount = [];
  selectedPrice = {
    min: 0,
    max: 0,
  };
  selectedArea = {
    min: 0,
    max: 0,
  };
  selectedFloor = {
    min: 0,
    max: 0,
  };
  selectedCity = "Bakı";
  selectedMetro = [];
  selectedNisangah = [];
  selectedRayon = [];
  filteredMetro = [];
  selectedAdditional = [];
});
document.getElementById("emlak_mobi_alqi_input").checked = true;
document.getElementById("emlak_mobi_kiraye_input").checked = false;

const emlakAllResetBtn = document.getElementById("emlak_all_reset_btn");

emlakAllResetBtn.addEventListener("click", () => {
  const additionalCheckings = document.querySelectorAll(
    ".additional_chekings_emlak div"
  );
  additionalCheckings.forEach((item) => {
    item.querySelector("input").checked = false;
  });
  document.querySelectorAll("#emlakRoom").forEach(function (room) {
    room
      .querySelectorAll('.emlak_room_dropdown input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.style.backgroundColor = "";
        checkbox.style.color = "";
        checkbox.parentNode.classList.remove("checked");
      });
    room
      .querySelectorAll('.mobile_emlak_room input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.style.backgroundColor = "";
        checkbox.style.color = "";
        checkbox.parentNode.classList.remove("checked");
      });
  });
  document.getElementById("emlakBuy").querySelector("button").textContent =
    "Alış";
  document.getElementById("emlakHouse").querySelector("button").textContent =
    "Yeni tikili";
  document.getElementById("checkedEmlakRoom").textContent = "Otaq sayı";
  document
    .getElementById("emlakRoom")
    .querySelectorAll("input")
    .forEach((input) => {
      input.checked = false;
    });
  document
    .querySelectorAll(".unersal_inputs")
    .forEach(function (universalInputs) {
      const labels = universalInputs.querySelectorAll("label");
      labels.forEach((label) => {
        const input = label.querySelector("input");
        const p = label.querySelector("p");
        p.classList.remove("active_p");
        input.value = "";
      });
    });

  document.getElementById("hamisi_input").checked = true;
  document.getElementById("temirli_input").checked = false;
  document.getElementById("temirsiz_input").checked = false;
  document.getElementById("emlak_city").querySelector("button").textContent =
    "Şəhər";
  document.getElementById("emlak_metro").querySelector("button").textContent =
    "Metro";
  document.getElementById("emlak_rayon").querySelector("button").textContent =
    "Rayon və Qəsəbələr";

  document
    .getElementById("emlak_nisangah")
    .querySelector("button").textContent = "Nişangah";
  document.querySelectorAll(".added_model").forEach((item) => {
    item.classList.remove("added_model");
  });
  selectedBuyType = null;
  selectedBuildingType = null;
  SelectedRoomCount = [];
  selectedPrice = {
    min: 0,
    max: 0,
  };
  selectedArea = {
    min: 0,
    max: 0,
  };
  selectedFloor = {
    min: 0,
    max: 0,
  };
  selectedCity = "";
  selectedMetro = [];
  selectedNisangah = [];
  selectedRayon = [];
  filteredMetro = [];
  selectedAdditional = [];
});

const emlakSubmitBtnDesktop = document.querySelector("#emlak_submit_desktop");
const emlakSubmitBtnMobile = document.querySelector("#emlak_submit_mob");
document.querySelectorAll(".additional_chekings_item").forEach((item) => {
  item.addEventListener("click", (e) => {
    const value = e.target.parentElement.querySelector("label").innerText;
    if (selectedAdditional.includes(value)) {
      const index = selectedAdditional.indexOf(value);
      selectedAdditional.splice(index, 1);
    } else {
      selectedAdditional.push(value);
    }
  });
});

document.querySelectorAll(".unersal_inputs input").forEach((input) => {
  if (input.id === "price_input_min") {
    input.addEventListener("keyup", (e) => {
      selectedPrice.min = e.target.value;
    });
  }
  if (input.id === "price_input_max") {
    input.addEventListener("keyup", (e) => {
      selectedPrice.max = e.target.value;
    });
  }
  if (input.id === "area_input_min") {
    input.addEventListener("keyup", (e) => {
      selectedArea.min = e.target.value;
    });
  }
  if (input.id === "area_input_max") {
    input.addEventListener("keyup", (e) => {
      selectedArea.max = e.target.value;
    });
  }
  if (input.id === "floor_input_min") {
    input.addEventListener("keyup", (e) => {
      selectedFloor.min = e.target.value;
    });
  }
  if (input.id === "floor_input_max") {
    input.addEventListener("keyup", (e) => {
      selectedFloor.max = e.target.value;
    });
  }
});

emlakSubmitBtnDesktop.addEventListener("click", (e) => {
  let postData = {
    buyType: selectedBuyType,
    buildingType: selectedBuildingType,
    roomCount: SelectedRoomCount,
    price: selectedPrice,
    area: selectedArea,
    floor: selectedFloor,
    city: selectedCity,
    metro: selectedMetro,
    nisangah: selectedNisangah,
    rayon: selectedRayon,
    additional: selectedAdditional,
  };
  console.log(postData);
});
emlakSubmitBtnMobile.addEventListener("click", (e) => {
  let postData = {
    buyType: selectedBuyType,
    buildingType: selectedBuildingType,
    roomCount: SelectedRoomCount,
    price: selectedPrice,
    area: selectedArea,
    floor: selectedFloor,
    city: selectedCity,
    metro: selectedMetro,
    nisangah: selectedNisangah,
    rayon: selectedRayon,
    additional: selectedAdditional,
  };
  console.log(postData);
});
