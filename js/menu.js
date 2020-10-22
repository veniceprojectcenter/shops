//code to make the selectoin menu
expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

app.init_menu = function (ctl) {
  /*
   * Here is where the label and the checkbox for the category are created and appended to the HTML
   */

  var select = document.createElement("LABEL");
  select.id = "All";
  select.for = "All";
  select.innerHTML = "All";
  var option = document.createElement("INPUT");
  option.type = "checkbox";
  option.addEventListener("click", takeSelect);
  option.id = "All";
  option.text = "All";
  option.value = "All";
  document.getElementById("checkboxes").appendChild(select);
  document.getElementById("All").appendChild(option);

  for (key in ctl.shop_type.sort()) {
    var select = document.createElement("LABEL");
    select.id = ctl.shop_type[key].toLowerCase();
    select.for = ctl.shop_type[key];
    select.innerHTML = ctl.shop_type[key];
    var option = document.createElement("INPUT");
    option.type = "checkbox";
    option.addEventListener("click", takeSelect);
    option.id = ctl.shop_type[key];
    option.text = ctl.shop_type[key];
    option.value = ctl.shop_type[key].toLowerCase().replace(/ /g, "_");
    document.getElementById("checkboxes").appendChild(select);
    document
      .getElementById(ctl.shop_type[key].toLowerCase())
      .appendChild(option);
  }

  /*
   * This is the callback method that is called when a category is choosen
   */
  function takeSelect() {
    if (this.checked) {
      //checking if the category has been checked or unchecked
      if (this.id == "All") {
        removeCheck();
        drawAllShops();
      }
      ctl.visibleShops.push(this.id);
      drawShops(this.id);
    } else if (this.id == "All") {
      ereaseAllShops();
    } else {
      ereaseShops(this.id);
    }
  }

  /*
   * This method draws the shops on the map based on the shop type
   */
  function drawShops(shop) {
    for (key in ctl.markers) {
      if (ctl.markers[key][0] == shop) {
        ctl.groupInterest.push(ctl.markers[key][0]);
        for (el in ctl.markers[key][1]) {
          ctl.markers[key][1][el].addTo(ctl.map);
        }
      }
    }
  }

  /*
   * This method deletes the shops on the map based on the shop type
   */
  function ereaseShops(shop) {
    for (key in ctl.markers) {
      if (ctl.markers[key][0] == shop) {
        for (el in ctl.markers[key][1]) {
          ctl.map.removeLayer(ctl.markers[key][1][el]);
        }
      }
    }
    for (el in ctl.groupInterest) {
      if (ctl.groupInterest[el] == shop) {
        ctl.groupInterest.splice(el, 1);
      }
    }
  }

  /*
   * This method draws all the shops on the map
   */
  function drawAllShops() {
    ctl.groupInterest = [];
    for (key in ctl.markers) {
      ctl.groupInterest.push(ctl.markers[key][0]);
      for (el in ctl.markers[key][1]) {
        ctl.markers[key][1][el].addTo(ctl.map);
      }
    }
  }

  /*
   * This method deletes all the shops on the map
   */
  function ereaseAllShops() {
    ctl.groupInterest = [];
    for (key in ctl.markers) {
      for (el in ctl.markers[key][1]) {
        ctl.map.removeLayer(ctl.markers[key][1][el]);
      }
    }
  }

  function removeCheck() {
    for (type in ctl.shop_type) {
      if (ctl.groupInterest.includes(ctl.shop_type[type])) {
        document.getElementById(ctl.shop_type[type]).checked = false;
      }
    }
  }

  setTimeout(function () {
    ctl.map.on("layeradd", function () {
      ctl.activeShop++;
    });
  }, 10);

  setTimeout(function () {
    ctl.map.on("layerremove", function () {
      ctl.activeShop--;
    });
  }, 10);
};
