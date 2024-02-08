// @ts-nocheck
//sap.ui.define([
//    "sap/ui/core/mvc/Controller"
//],
//    /**
//    * @param {typeof sap.ui.core.mvc.Controller} Controller
//    */
//    function (Controller) {
//        return Controller.extend("logaligroup.SAPUI5.controller.App", {
//            onShowHello: function () {
//                alert("Hello World");
//            }
//        });
//    });

// @ts-nocheck
//sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//    "sap/m/MessageToast"
//],
//    /**
//    * @param {typeof sap.ui.core.mvc.Controller} Controller
//    * @param {typeof sap.m.MessageToast} MessageToast
//    */
//    function (Controller, MessageToast) {
//        "use strict";
//        return Controller.extend("logaligroup.SAPUI5.controller.App", {
//            onShowHello: function () {
//                MessageToast.show("Hello World")
//            }
//        });
//    });
// @ts-nocheck
//sap.ui.define([
//    "sap/ui/core/mvc/Controller",
//    "sap/m/MessageToast",
//    "sap/ui/model/json/JSONModel"
//],
//    /**
//    * @param {typeof sap.ui.core.mvc.Controller} Controller
//    * @param {typeof sap.m.MessageToast} MessageToast
//    * @param {typeof sap.ui.model.json.JSONModel} JSONModel
//    */
//    function (Controller, MessageToast, JSONModel) {
//        "use strict";
//        return Controller.extend("logaligroup.SAPUI5.controller.App", {
//            onInit: function () {
//                var oData = {
//                    recipient: {
//                        name: "World"
//                    }
//                };
//                var oModel = new JSONModel(oData);
//                this.getView().setModel(oModel);
//            },
//            onShowHello: function () {
//                MessageToast.show("Hello World");
//            }
//        });
//    });
// @ts-nocheck
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "logaligroup/SAPUI5/model/Models"
// ],
//     /**
//     * @param {typeof sap.ui.core.mvc.Controller} Controller
//     * @param {typeof sap.m.MessageToast} MessageToast
//     */
//     function (Controller, MessageToast, Models) {
//         "use strict";
//         return Controller.extend("logaligroup.SAPUI5.controller.App", {
//             onInit: function () {
//                 this.getView().setModel(Models.createRecipient());
//             },
//             onShowHello: function () {
//                 MessageToast.show("Hello World")
//             }
//         });
//     });
// @ts-nocheck
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "logaligroup/SAPUI5/model/Models",
//     "sap/ui/model/resource/ResourceModel"
// ],
//     /**
//     * @param {typeof sap.ui.core.mvc.Controller} Controller
//     * @param {typeof sap.m.MessageToast} MessageToast
//     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
//     */
//     function (Controller, MessageToast, Models, ResourceModel) {
//         "use strict";
//         return Controller.extend("logaligroup.SAPUI5.controller.App", {
//             onInit: function () {
//                 // set data model on the view
//                 this.getView().setModel(Models.createRecipient());
//                 //set i18n model on the view
//                 var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
//                 this.getView().setModel(i18nModel, "i18n");
//             },
//             onShowHello: function () {
//                 //read text from i18n model
//                 var oBundle = this.getView().getModel("i18n").getResourceBundle();
//                 //read property from data model
//                 var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//                 var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//                 MessageToast.show(sMsg);
//             }
//         });
//     });
// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    * @param {typeof sap.m.MessageToast} MessageToast
    */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            onInit: function () {
            },
            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });