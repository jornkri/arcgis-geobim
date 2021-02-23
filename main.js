require([
  "esri/intl",
  "esri/WebScene",
  "esri/views/SceneView",
  "modules/Dashboard.js",
  "modules/maskinTracks.js",
  "esri/layers/Layer",
  "esri/config",
  "esri/widgets/LayerList"
], function (intl, WebScene, SceneView, Dashboard, maskinTracks, Layer, config, LayerList) {

  // Set app locale to Norwegian
  //intl.setLocale('nb');

  /****************************************************************************
   *  Create Web Scene and View
   ***************************************************************************/

  config.portalUrl = "https://velocity-gbd.maps.arcgis.com/"
  config.apiKey = "oMmmJP6f08bAH00_JhxR2qpWjK71ZNe-tYrvVb1xJUKfNOKiRcr5PZSpRgzz7kgagoWxIWBlOgUZ0sTj0tfzJvt-bXVWyKtKo95x1VBw_lW_S2ClLHekLB_-13s-ojPoS_A9jZj3zyD0qWQ4z9_4G5OAcU5kh93hH3pMlwRV1fAAZPq6PZaQ05L2EsbZA6MJoo43RKa4epFTZ5-kGDbGUw.."//"AAPK27ff1ed33b254bbab8ec0655be1ac40drB_LqWFg1AC70zIVzC0V7bK0vrxP6hnV1fRH_gvaJHn7VWlY6KIDBmlBrqILGK34";
  let webscene = new WebScene({
    portalItem: {
      id: "6633c8f8fe0643d0a23e46447bc5339b"
      // id: "4528ab4efb1a41bf947dcbf71686c431"
    }
  });

  let view = new SceneView({
    container: "GISViewer",
    qualityProfile: "high",
    environment: {
      atmosphere: {
        quality: "high"
      },
      lighting: {
        date: new Date(),
        directShadowsEnabled: true
      }
    },
    map: webscene
  });

  loadBIMViewer();
  Dashboard.drawChart();

  /****************************************************************************
   *  Create widgets and add to UI
   ***************************************************************************/



  view.when(function () {

    maskinTracks.addlayer(webscene)

    view.on("click", function (event) 
    { console.log("click event: ", event.mapPoint); 
  });

  });
});