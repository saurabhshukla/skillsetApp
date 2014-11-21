define(function (require) {
	var events = require("constants/events"),
        appState = require("singletons/app-state");
    return {
        className: "login",
        initialize: function(){
        	this.once(events.afterRender, this.afterRender);
        },
        events: {
        	'click .btn-login' : 'authenticateUser'
        },

        authenticateUser: function(){
        	//validate user credentials
        	if(true) {
        		require(["router"], function (router) {
	                router.navigate("user/2336/dashboard", {
	                    trigger: true
	                });
	            });

                appState.set({
                    menuItems : [
                        {name: "My Skills", id:"skills"},
                        {name: "My Certificates", id:"certificates"},
                        {name: "Logout", id:"logout"}
                    ]
                });
        	}
        },

        afterRender: function(){
        	$.material.init();
        }
    };
});