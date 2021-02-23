define([
  "esri/layers/FeatureLayer",
  "esri/layers/StreamLayer",
  "esri/renderers/UniqueValueRenderer"

], function (
  FeatureLayer,
  StreamLayer,
  UniqueValueRenderer
) {




  // var verticalOffset = {
  //     screenLength: 100,
  //     maxWorldLength: 10,
  //     minWorldLength: 2
  // };

  // function getUniqueValueSymbol(name, color) {
  //     return {
  //         type: "point-3d", // autocasts as new PointSymbol3D()
  //         symbolLayers: [{
  //             type: "icon", // autocasts as new IconSymbol3DLayer()
  //             resource: {
  //                 href: name
  //             },
  //             size: 40,
  //             outline: {
  //                 color: "white",
  //                 size: 8
  //             }
  //         }],

  //         verticalOffset: verticalOffset,

  //         callout: {
  //             type: "line", // autocasts as new LineCallout3D()
  //             color: "white",
  //             size: 3,
  //             border: {
  //                 color: color
  //             }
  //         }
  //     };
  // }

  // var pointsRenderer = {
  //     type: "unique-value", // autocasts as new UniqueValueRenderer()
  //     field: "Type",
  //     uniqueValueInfos: [{
  //         value: 1,
  //         symbol: getUniqueValueSymbol("data:image/png;base64,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", "black")

  //     }]

  // };



  var verticalOffset = {
    screenLength: 100,
    maxWorldLength: 10,
    minWorldLength: 2
};




function getUniqueValueSymbol(name, color) {
    return {
        type: "point-3d", // autocasts as new PointSymbol3D()
        symbolLayers: [{
            type: "icon", // autocasts as new IconSymbol3DLayer()
            resource: {
                href: name
            },
            size: 40,
            outline: {
                color: "white",
                size: 8
            }
        }],

        verticalOffset: verticalOffset,

        callout: {
            type: "line", // autocasts as new LineCallout3D()
            color: "white",
            size: 3,
            border: {
                color: color
            }
        }
    };
}




var pointsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Type",
    uniqueValueInfos: [{
        value: 1,
        symbol: getUniqueValueSymbol("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEVHcEw0cYAzcYAzcYEzcYA0cYEycYAzcYAzcYBBfYMzcYAycYAzcYAzcYYzcYAzcYA0coAzcYAzZpk7fYMzcYEzcYAzcoAzcYEzcYEzcYAzcYAycYAzcYAzcoEzcYAzcIE5cY4zcoEycoEwboMycoA0cYEycIAycYAzcIAzcoIzcYAwcIAzcYDbtibpwpzOnwm8iwDtySzgtQDv0E/Nngh/RwQ1cn/btSSZWwg4c3zowZtYgYWaiCaGTQTZsyN7hkjYsSDlwJukZDSseQfVriCXnpDryCjctF69jAKCSAU8dXqIk0FuhVrguF/Mpx7UqRXWrBnnwJjNohTSqxzjvijethHMnQjhtwK5rV7oyEHmwiqzfQWlbwaumiu0ojLPriaSkD1HeoNff1/PoQvPt5jRpA67rjbUsAk5dIFAdnfHmg1Ne4GUk1jSpxJGdnJKd3zDlQhhhGeNllCYm0rethbmv5G2ikXFlSvdtirXsiXJnhDXrx2Di0i8hVh/iEfmv4zvz0Zmg2C1q5Ttyi7WtY24lii/kASlurE/doK5v7tniIh5kIrnwIXlv3yXiG+gchDIpSDEqCp6jFPBoiKLkUiimjyOkkiKmI2NmY7QpxmsoSZcgGV/jWV2iVZFeXusp5OMlG97jnFagXVph1iVnUmuqJOgnC+/sDSWlkK1ek1rhGqnaDmwnyveuYOUlm5jhFzbvSretGSOkF/TuSygl13iuXeDkUXVrF+Jl06vmTNMenSKd2XQp17SqSzZuyrkvJWOWBSIUQnguIC5ihC0qzndsYnJtjK6jgvjuw2nmVt/fHhKRkDowRvuyzeulkOnZzi9po9bW1rCo4W+qUnPpSm2sYzZsGeNemZWe2aFd2q5mh6vnlO2tJeucUOCcWHtyS+wuqxAPTpMR0G8igDiuoXEp2K4vLG3kRdZgXvQsXzIqIjBq3TnwyqqkHiQkI/Pn3WupmmqcgTlvJawvr6naDOaj4PbsXKtcjXZtpTCjk62rXzClxfVq16mdS+gi26bZyY3Y6pBAAAALHRSTlMAy/hdziZR/e8D/qbREoTfgOIFB0DHkzpk8t1V0mj7fQlEPCXKT5gkli/VEH9p+MUAAARgSURBVFjDY2CgFeBlE+BmEeTg4uIQZOEWYOMlTTcrHwu7DgpgZ+FjJVa3EDOjDlYgysxJjHZZfh2cgF+WoBFKMjp4AY8SXu0Kalw6BACXhjCesONBVZy540jksW3rLVFFtTRx6VeURFFomeZmeNbY8IRRurcZioSkCHb9bEwoyrw2GBoaNhgbnjEyMpqF6ggmaWz6pdFiPs0QYoAb0AAjb7RUwYapXwTVfh0vN5ABxlAD0tHCgUkRI/wk0UJ7iSHUAEOQAUaL0aQ5lFH1C7OgR9dykP5muAHe6PIyCigGqGHE92a4AeEgA5ZhKBBDSX+Y6WcfyID7cAPWYKYocYR+Th502cLiipCQkKioyMg3UaGhoSUlLsWFGJ4Qghsgi2F8kS4GKMJQJAvPgJj5z6ys/EolQnPF3vIyMwxFUrCsyYyZZczOOzk5ffn+81tvb09PfaDe/pWrMQ3QYYYaoIIple/kdLf2/Sc9OAiszcdSwkDTEJZMm300EKjr7dcfenotNy+ATLDKxqIMUsrxYZHJAFv78F2fnt71i6fAnAwsyvjABvBgKzdSQHruPXqlp3fp9G4QOwWbKkZw+c2OTcpVDw24YlPFDirt2bCWXImOqPodE7EqA2VrAexl3wxUA6ZjVyUPNIAbu5TZUmT983EUsdxAA1hwyJm5WsG0W7ma4VAECkVBnCW4dRM4IBybrHEqEQQawIGnEujo6u7u6sCjgANogBwuyRt1NS+sQaDRp9EShxo53Abk+enqmreCvPC6WlfXbgVuA3B4Aahf18XjJTAIbgWAcvQ0nF7AHogJIE3BBs/19G7r+4PYlZa4AhF7NAaDNAUZGDxtqdLPBRcqk3BFI9aElATWU2VgcHynvn4qmBOHKyFhTcqxYD1ZBgYGJvr6+mBOPK6kjDUzTQDrKQAaANSvbwfi2GFTp4orO7uADfCAGuAA5uXhyM7YQtHLHGynAdQL4HjU9cFUp4KrSPMB63CBGQCOR90pmOoEcBWq4FSgO9MA6gVIPE7FVagyMOKIhCCYC3DFoyjOimUyPBbBBiSDuRNxViyYVZsfLBZbr4IM0DfHmhDgVRtm5QqJxTYDg847EZdh8ViJrkoCd/UO1mAO9MCzB+0RQAOqwXz06h2p2SuO2sCwNIfGokdne0QQPCFkoiYiceQmigaWrBRsYPDr8wdwGEASwmzcTRy0RlYNWP3vmP5/ff3OIHAYLDAXpdWtgKeZl+MOBH/+msLBgT3bfX195yAXRer4GpqrwLXBf08gsAWDg+AqYhG+hiZqU/cQqDaJtgACgzBQGOjXAwXW4m/qojS2NwFtfIJswFaggQsJNLaBvkAU0FtK9a49/hgTEw01YKNe6QKE/0VwdRiUEXGx6+Q5GzCosweBnHXz4FIs6ri7LMJiBLs87GLCeHtNmioEOl3ihLptnBJSuLVLSRDTc+RkFqWk4wnt+jKid30ZBZRJ7HyrynMz8nOws3PwM3LLq2rTrJcPAFLHdWYOUZ1KAAAAAElFTkSuQmCC", "black")

    }]

};


var objectSymbol = {
  type: "point-3d", // autocasts as new PointSymbol3D()
  symbolLayers: [
    {
      type: "object", // autocasts as new ObjectSymbol3DLayer()
      width: 70000,
      height: 100000,
      resource: {
        primitive: "cone"
      },
      material: {
        color: "#FFD700"
      }
    }
  ]
};

var objectSymbolRenderer = {
  type: "simple", // autocasts as new SimpleRenderer()
  symbol: objectSymbol
};







  var prosjektomriss = new FeatureLayer({
    url:
      "https://services.arcgis.com/2JyTvMWQSnM2Vi8q/arcgis/rest/services/kartlagOmriss/FeatureServer",
    //id: "ny-housing",
    //opacity: 0.9
  });

  var maskinTracks = new StreamLayer({
    url:
      "https://us-iot.arcgis.com/d8avj4l9dv7mdfsa/d8avj4l9dv7mdfsa/streams/arcgis/rest/services/JevnakerTestStream/StreamServer",
    //"https://us-iot.arcgis.com/d8avj4l9dv7mdfsa/d8avj4l9dv7mdfsa/streams/arcgis/rest/services/Gardermoen_Simulatorfil/StreamServer", 
    purgeOptions: {
      displayCount: 10000
  },
    //outFields: ["*"],

    renderer: objectSymbolRenderer,
    elevationInfo: {
      // elevation mode that will place points on top of the buildings or other SceneLayer 3D objects
      mode: "relative-to-ground",
      offset: 8.5,
      unit: "meters",
      
    },
    maxReconnectionAttempts: 100,
    maxReconnectionInterval: 10
    //opacity: 0.9
  });



  return {
    addlayer: (webscene) => {
      webscene.add(maskinTracks)
    },
    //asjlhdasd: (sads)=> {}

  }


});