sap.ui.define([
    'sap/m/Button',
    'sap/m/MessageToast'
], function(Button, MessageToast) {
    'use strict';
    new Button({
        text:'Toast button',
        press:function(){
            MessageToast.show('Hello Amrendra SAPUI5 developer')
        }

    }).placeAt('content')
});