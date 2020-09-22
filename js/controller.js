app.controller("MainCtrl", function (
  $scope,
  $route,
  $rootScope,
  $http,
  $location,
  $timeout,
  $q
) {
  var ctl = this;
  app.ctl = ctl;

  ctl.request =
    "https://ckdata.herokuapp.com/api/v1/datasets.json?group_name=Merge%20Stores";
  ctl.shop_data = null;
  ctl.activeShop = 0;
  ctl.group_config = null;
  ctl.group_keys = null;
  ctl.original_markers = null;
  ctl.markers = [];
  ctl.visibleShops = [];
  ctl.shop_type = null;
  /* tirare fuori macrocategorie */
  ctl.ateco = [];
  //["16", "64", "47", "46", "55", "00", "27", "32", "96", "56", "11", "10", "14", "90", "33", "49", "66", "31", "24", "74", "79", "93"]
  app.init_map(ctl);
  app.init_layer(ctl, $http);

  ctl.apply = function () {
    setTimeout(function () {
      $scope.$apply();
    }, 50);
  };
  ctl.closePop = function () {
    $("#detail").hide();
  };
  //main
  // $rootScope.$on('$locationChangeSuccess', ctl.loadView);
});
