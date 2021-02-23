require([
  "esri/intl",
  "esri/WebScene",
  "esri/views/SceneView",
  "modules/Dashboard.js",
  "modules/maskinTracks.js",
  "esri/layers/Layer",
  "esri/config",
  //"esri/widgets/LayerList"
], function (intl, WebScene, SceneView, Dashboard, maskinTracks, Layer, config) {

  // Set app locale to Norwegian
  //intl.setLocale('nb');

  /****************************************************************************
   *  Create Web Scene and View
   ***************************************************************************/

  config.apiKey = "2l9eiA2MyuzVV_iIP5xDRDZ78JOpAf5Sd5e6ZMMPq56hV0SErg2BNjor_8mf2lTuQnTgL_8wMyWig5XsHhNpFp7dWlkrnLjzAFgM8LlUhuvPUlCjwCzkFrUn8Z2_yK8tGeoVaaKjpS7Jhi_7Z4beBW6iJQu5e0pMQ2DNFk-p6J2BGQCHNdiYY43BqdYZrgD1GeGSEwSQBMOwZvb47x_n7Q.."//"AAPK27ff1ed33b254bbab8ec0655be1ac40drB_LqWFg1AC70zIVzC0V7bK0vrxP6hnV1fRH_gvaJHn7VWlY6KIDBmlBrqILGK34";
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

  });


});