/***************************************************************************************************/
/*
  this is the top right slider that is used to see what shops are closed and what are open
  the code to create it is the same as the one that is above
*/
  
app.init_slider_time = function(ctl){
  var SliderControl = L.Control.extend({     
    initialize: function (object, position, modifyDiv) {
      // ...
      if(position){
        L.Util.setOptions(this, {position: 'topright'});
      }
      
      this.object = object;
      this.save = {};
      
      this.modifyDiv = modifyDiv;
      this.div = this.div || L.DomUtil.create('div', 'iconBox');
      
      //on click, stop propogation
      this.div.onclick = function(e){
        if(e.stopPropagation){
          e.stopPropagation();
        }
        return false;
      }
      //on double click, stop propogation
      this.div.ondblclick = function(e){
        if(e.stopPropagation){
          e.stopPropagation();
        }
        return false;
      }
    },
    
    minimized: false,
    
    options: {
        position: 'topright'
    },

    onAdd: function (map) {
      this.div = this.div || L.DomUtil.create('div', 'iconBox');
      //this.div.style.display = "inline";
      this.setObject();
      
      if(this.modifyDiv){
        this.modifyDiv(this.div);
      }
      return this.div;
    },
    
    
    setObject : function(){
      var that = this;
      this.div.innerHTML = '';
      this.div.style = "display: grid;width: 260px;margin-bottom: 15px;min-height: 44px;";
      var label = document.createElement("LABEL");
      label.id = "annoAC";
      label.textContent = "Open Store: " + ctl.activeShop + " Year: " + ctl.max_year;
      label.style = "color:#fff; font-size:16px; margin-right:10px;";
      this.div.appendChild(label);

      var slider = document.createElement("INPUT");
      slider.id = 'slidy';
      slider.type = 'range';
      slider.min = ctl.min_year;
      slider.max = ctl.max_year;
      //the value of the slider is set to the most recent year
      slider.defaultValue = ctl.max_year;

      this.functionSelect = slider
      //this.functionSelect.onchange = updateSelect;
      this.div.appendChild(this.functionSelect);
      //this.minimize(this.minimized);
    },

    minimize : function(bool){
      this.minimized = bool;

      this.div.innerHTML = '';
    }
    
  });

  /*
  *@year = a specific year used to compare the opened_in_year property of the markers
  * This method basically checks is a shop has been opened beforre a certain year and if so it draws
  * it on the map, if not it deletes it.
  */

  ctl.filterDataACA = function(year){
    var anno = year.toString();
    for(j in ctl.groupInterest){
      for (key in ctl.markers){
        if(ctl.markers[key][0]==ctl.groupInterest[j]){
          for (el in ctl.markers[key][1]){
            if(ctl.markers[key][1][el].options.item.opened_in_year >year){
              ctl.map.removeLayer(ctl.markers[key][1][el]);
            }else{
              ctl.markers[key][1][el].addTo(ctl.map);
            }
          }
        }
      }
    } 
  };


  ctl.slider = new SliderControl('topright',function(div){
    div.style.clear = 'both';
    div.style.zIndex = 1000;
  });
  ctl.map.addControl(ctl.slider);
  // ctl.menu.minimize(true);

  // Disable dragging when user's cursor enters the element
  ctl.slider.getContainer().addEventListener('mouseover', function () {
      ctl.map.dragging.disable();
  });

  // Re-enable dragging when user's cursor leaves the element
  ctl.slider.getContainer().addEventListener('mouseout', function () {
    ctl.map.dragging.enable();
  });

  //define onApply behavior
  $("#slidy").on("input change", function(e) {
    var val = document.getElementById("slidy").value;
    var length = 0;
    if ( ctl.marker_year[val] != null){
      length = ctl.marker_year[val].length
    }
    document.getElementById("annoAC").textContent = "Open Store: " + ctl.activeShop + " Year: " + val;
    ctl.filterDataACA(val);
  });

}


