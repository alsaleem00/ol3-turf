
/*globals document, ol, ol3turf, turf */

//==================================================
// default callback handler
//--------------------------------------------------
(function (ol3turf) {

    "use strict";

    /**
     * Callback handler
     * @constructor
     * @param toolbar ol3-turf toolbar
     * @private
     */
    var Handler = function (toolbar) {

        this.toolbar = toolbar;

    };

    /**
     * Default function called by each control when turf function is completed.
     * @param name Name of ol3-turf control being handled
     * @param output Output of turf function
     * @param inputs Object with inputs provided to turf function as properties
     * @private
     */
    Handler.prototype.callback = function (name, output, inputs) {

        var control = this.toolbar.ol3turf.controls[name];

        // First handle controls with custom messages
        // then handle controls that add output features to map
        if (name === "area") {
            control.showMessage("area = " + output + " msq");
        } else if (name === "bearing") {
            control.showMessage("bearing = " + output + " degrees");
        } else if (name === "distance") {
            control.showMessage("distance = " + output + " " + inputs.units);
        } else if (name === "inside") {
            var message = "Point is";
            if (output === false) {
                message += " not";
            }
            message += " inside polygon.";
            control.showMessage(message);
        } else if (name === "line-distance") {
            control.showMessage("length = " + output + " " + inputs.units);
        } else if (name === "planepoint") {
            control.showMessage("z = " + output);
        } else {
            control.addFeatures(output);
        }

    };

    ol3turf.Handler = Handler;

    return ol3turf;

}(ol3turf || {}));
