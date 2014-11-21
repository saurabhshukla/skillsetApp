define(function (require) {
	var Events = require("constants/events");
    return {
        className: "introduction",
        initialize: function(){
        	this.once(Events.afterRender, this.afterRender);
        },
        events: {

        },

        afterRender: function(){
        	$.material.init();
        }
    };
});