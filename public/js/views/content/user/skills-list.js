define(function (require) {
	var events = require("constants/events"),
        appState = require("singletons/app-state"),
        uiUtils = require("utils/ui");
    return {
        className: "skills-list",
        initialize: function(){
            this.once(events.afterRender, this.afterRender);
        },
        events: {

        },

        afterRender: function(){
        	$.material.init();
        }
    };
});