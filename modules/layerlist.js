define([
    "esri/widgets/LayerList"

], function (
    LayerList
) {

    var layerList = new LayerList({ view: view });


    return {
        layerlist: (view) => {
            view.ui.add(layerList, { position: "top-left" });
        },
    }


});