define(function (require) {
	var events = require("constants/events");
    return {
        className: "app-header",
        initialize: function(){
        	this.once(events.afterRender, this.afterRender);
        },

        events: {
        	'click .link-my-skills' : 'showUserSkills',
        	'click .link-my-certificates' : 'showUserCertificates'
        },

        showUserSkills: function(){
    		require(["router"], function (router) {
                router.navigate("user/2336/skills", {
                    trigger: true
                });
            });
        },

        showUserCertificates: function(){
    		require(["router"], function (router) {
                router.navigate("user/2336/certificates", {
                    trigger: true
                });
            });
        },

        afterRender: function(){
        	$.material.init();
        }
    };
});