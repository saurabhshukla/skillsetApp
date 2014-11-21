define(function (require) {
	var EVENTS = require("constants/events"),
        appState = require("singletons/app-state"),
        uiUtils = require("utils/ui");
    return {
        className: "dashboard",
        initialize: function(){
            this.once(EVENTS.afterRender, this.afterRender);
            uiUtils.showHeader();
        },
        events: {

        },

        afterRender: function(){
        	$.material.init();
        }
    };
});