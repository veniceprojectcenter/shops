app.init_map = function (ctl) {
  ctl.dataset_errors = [];
  ctl.groupInterest = [];
  ctl.init_map = function () {
    console.log("init map!");
    ctl.map = L.map("map", {
      zoomControl: false,
      center: [45.436, 12.334],
      zoom: 13,
    });
    var zoomButton = L.control.zoom({ position: "bottomright" }).addTo(ctl.map);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VyZW5kcHQiLCJhIjoiY2pubHE4MTBqMTUxcTNrbDc4czB0ZDUwcSJ9.ZIV2n4CBDs6xw_iIu4Sfrw",
      {
        id: 'mapbox/streets-v11',
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      }
    ).addTo(ctl.map);
    $(window)
      .on("resize", function () {
        $("#map").height($(window).height());
        ctl.map.invalidateSize();
      })
      .trigger("resize");
    ctl.apply();
  };

  ctl.addMarker = function (item) {
    for (el in item) {
      for (i in item[1]) {
        if (item[1][i].birth_certificate.lat == null) {
          console.log("errore lat => ", item);
          ctl.dataset_errors.push(item);
        }
      }
    }
    var iconurl;
    for (thing in item[1]) {
      if (item[1][thing].icon) {
        iconurl = item[1][thing].icon;
      }
      var icon = L.icon({
        iconUrl: ctl.getIcon(item[1][thing].ateco_code.substr(0, 5)),
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 16], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });
      var new_marker = L.marker(
        [
          item[1][thing].birth_certificate.lat,
          item[1][thing].birth_certificate.lng,
        ],
        {
          customID: item[1][thing].birth_certificate.ck_id,
          item: item[1][thing],
          icon: icon,
        }
      );
      new_marker.on("click", ctl.opendetail);
      for (mark in ctl.markers) {
        if (
          ctl.markers[mark][0] == new_marker.options.item.store_type &&
          new_marker.options.item.store_name != ""
        ) {
          ctl.markers[mark][1].push(new_marker);
        }
      }
    }
  };

  /*
   * This method crates and return the data structure
   * @data   the actual data that need to be sorted
   * @types  an array in which the shop_types are collected
   */

  function fixData(data, types) {
    var testing = new Array(0);
    for (info in data) {
      //adding sthe store tyes to the list
      if (!types.includes(data[info].store_type)) {
        types.push(data[info].store_type);
        testing.push(new Array(data[info].store_type, []));
        ctl.markers.push(new Array(data[info].store_type, []));
      }
      //changing the value of the years
      if (parseInt(data[info].opened_in_year) < ctl.min_year) {
        ctl.min_year = parseInt(data[info].opened_in_year);
      }
      if (parseInt(data[info].opened_in_year) > ctl.max_year) {
        ctl.max_year = parseInt(data[info].opened_in_year);
      }
      //adding the shops to the shop type to which they belong
      for (el in testing) {
        if (testing[el][0] == data[info].store_type) {
          testing[el][1].push(data[info]);
        }
      }
    }
    return testing;
  }

  /*
   * This method creates the data structure that contains all the shops.
   * Elements are sorted by shop_type and the data structure is like this example
   *
   *   dataStructure = [0]                  |[1]                   |[2]                     |[3]
   *                   [bakery][listOfShops]|[butcher][listOfShops]|[nail shop][listOfShops]|[hotel][listOfShops]
   *                                        |                      |                        |
   */

  ctl.addData = function (data) {
    var types = [];
    ctl.max_year = 0;
    ctl.min_year = 3000;
    var show = fixData(data, types);
    console.log(ctl.markers);

    ctl.shop_type = Array.from(new Set(types));
    ctl.marker_year = show;

    for (key in show) {
      ctl.ateco.push(data[key].ateco_code.substr(0, 5));
      ctl.addMarker(show[key]);
    }

    ctl.original_markers = ctl.markers;
    app.init_menu(ctl);
    app.init_slider_time(ctl);
  };

  /*
   * This method opens a window with the information about the marker that has been selected
   */

  ctl.opendetail = function (event) {
    var item = event.sourceTarget.options.item;
    var html = "";
    var row = 1;
    document.getElementById("storename").innerHTML = "";
    for (key in ctl.group_keys) {
      if (
        key != null &&
        key != "" &&
        key != "birth_certificate" &&
        key != "shape" &&
        !key.toLowerCase().includes("photo") &&
        item[key] != "" &&
        item[key] != null
      ) {
        if (key == "store_name") {
          document.getElementById("storename").innerHTML =
            "<b>" + item[key] + "</br>";
        }
        html += "<div class=''>";
        html +=
          "<div class='item-lab' style='grid-row:" +
          row +
          "'>" +
          key.charAt(0).toUpperCase() +
          key.slice(1).replace(/_/g, " ") +
          "</div>";
        html +=
          "<div class='item-content' style='grid-row:" +
          row +
          "'>" +
          item[key] +
          "</div>";
        html += "</div>";
      }
    }
    if (document.getElementById("storename").innerHTML == "") {
      document.getElementById("storename").innerHTML = "Closed store";
    }
    document.getElementById("content").innerHTML = html;
    $("#detail").show();
  };

  /*
   * This method looks for the right icon to use and returns it's path
   */

  ctl.getIcon = function (ateco) {
    switch (ateco) {
      case "00.00":
        return "public/generic.png";
      case "10.71":
        return "public/pins/bread.png";
      case "11.02":
        return "public/pins/bevande.png";
      case "14.13":
        return "public/pins/vestiti.png";
      case "14.19":
        return "public/pins/vestiti.png";
      case "16.23":
        return "public/pins/homecenter.png";
      case "24.41":
        return "public/pins/tools.png";
      case "27.51":
        return "public/pins/poweroutage.png";
      case "31.01":
        return "public/pins/homecenter.png";
      case "32.11":
        return "public/pins/jewelry.png";
      case "32.12":
        return "public/pins/jewelry.png";
      case "33.12":
        return "public/pins/workshop.png";
      case "46.16":
        return "public/pins/vestiti.png";
      case "46.33":
        return "public/pins/grocery.png";
      case "46.33":
        return "public/pins/bevande.png";
      case "46.37":
        return "public/pins/grocery.png";
      case "46.38":
        return "public/pins/grocery.png";
      case "46.41":
        return "public/pins/textiles.png";
      case "46.42":
        return "public/pins/vestiti.png";
      case "46.43":
        return "public/pins/poweroutage.png";
      case "46.45":
        return "public/pins/perfumery.png";
      case "46.46":
        return "public/pins/medicalstore.png";
      case "46.49":
        return "public/pins/supermarket.png";
      case "46.51":
        return "public/pins/computers.png";
      case "46.74":
        return "public/pins/tools.png";
      case "47.11":
        return "public/pins/supermarket.png";
      case "47.22":
        return "public/pins/alimentari.png";
      case "47.24":
        return "public/pins/candy.png";
      case "47.26":
        return "public/pins/grocery.png";
      case "47.29":
        return "public/pins/grocery.png";
      case "47.65":
        return "public/pins/toys.png";
      case "47.65":
        return "public/pins/textiles.png";
      case "47.71":
        return "public/pins/vestiti.png";
      case "47.73":
        return "public/pins/medicalstore.png";
      case "47.76":
        return "public/pins/pets.png";
      case "47.78":
        return "public/pins/artgallery.png";
      case "47.79":
        return "public/pins/vestiti.png";
      case "47.82":
        return "public/pins/vestiti.png";
      case "49.32":
        return "public/pins/ferry.png";
      case "49.39":
        return "public/pins/ferry.png";
      case "52.22":
        return "public/pins/ferry.png";
      case "55.10":
        return "public/pins/hotel.png";
      case "55.20":
        return "public/pins/hotel.png";
      case "56.10":
        return "public/pins/restaurant.png";
      case "56.29":
        return "public/pins/burger.png";
      case "56.21":
        return "public/pins/burger.png";
      case "56.30":
        return "public/pins/bevande.png";
      case "64.11":
        return "public/pins/bank.png";
      case "64.30":
        return "public/pins/bank.png";
      case "64.99":
        return "public/pins/bank.png";
      case "66.19":
        return "public/pins/bank.png";
      case "74.10":
        return "public/pins/vestiti.png";
      case "74.20":
        return "public/pins/photography.png";
      case "79.11":
        return "public/pins/travel.png";
      case "90.04":
        return "public/pins/artgallery.png";
      case "93.13":
        return "public/pins/arena.png";
      case "93.19":
        return "public/pins/arena.png";
      case "96.01":
        return "public/pins/vestiti.png";
      case "96.02":
        return "public/generic.png";
      case "96.03":
        return "public/generic.png";
      case "96.04":
        return "public/pins/spa.png";
    }
  };
};
