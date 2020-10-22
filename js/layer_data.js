app.init_layer = function (ctl, $http) {
  var url = "";
  $http({
    url: ctl.request,
  }).then(
    function (msg) {
      if (!msg) return;
      ctl.shop_data = msg.data;
      ctl.group_config = msg.data.group_config;
      ctl.group_keys = msg.data.group_config.schema.properties;
      console.log("Aggiunto");
      ctl.addData(ctl.shop_data.dataset);
    },
    function (error) {
      console.log("an error has occurred", error);
    }
  );
};
