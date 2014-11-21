define(function (require) {
	var Events = require("constants/events");
    return {
        className: "another-screen",
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