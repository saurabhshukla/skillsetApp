define(function (require) {
	var events = require("constants/events"),
        appState = require("singletons/app-state");
    return {
        className: "menu-items",
        initialize: function(){
        	this.once(events.afterRender, this.afterRender);
            this.listenTo(appState, "change:menuItems", this.render);
        },

        events: {
            'click .link-navigate' : 'navigateMenu'
        },

        navigateMenu: function(event){
            switch(event.currentTarget.id) {
                case "about":
                    this.showAbout();
                    break;
                case "skills":
                    this.showUserSkills();
                    break;
                case "certificates":
                    this.showUserCertificates();
                    break;
                case "logout":
                    this.logout();
                    break;
            }
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

        logout: function(){
            require(["router"], function (router) {
                router.navigate("", {
                    trigger: true
                });
            });
            appState.set({
                menuItems : [
                    {name: "About", id:"about"}
                ]
            });
        },

        showAbout: function(){
            alert("TODO about");
        },

        render: function(){
            this.viewData.menuItems = appState.get("menuItems");
            this.$el.empty();
            return this.$el.append(this.template(this.viewData));
        },

        afterRender: function(){
        	$.material.init();
        }
    };
});