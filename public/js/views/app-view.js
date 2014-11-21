define(function (require) {

    window.log = console.log;
    var appState = require("singletons/app-state"),
        user = require("singletons/user"),
        events = require("constants/events");

    var BaseView = require("views/base-view");

    return BaseView.extend({
        el: "body",

        initialize: function (opts) {
            var appView = this;
            this.baseInitialize.apply(this, arguments);

            // The 3 child views - header, content & footer

            this.childView("header", ".header", {
                templatePath: "templates/header/header",
                viewData: {
                }
            });

            appState.set({
                menuItems : [
                    {name: "About", id:"about"}
                ]
            });

            this.childView("menu-items", ".menu-items", {
                templatePath: "templates/content/menu-items",
                viewData: {
                }
            });

            // Footer's View is defined in views/footer/footer.js
            // Would be extended by templates/footer/footer.js, if present
            this.childView("footer", ".footer", {
                templatePath: "templates/footer/footer"
            });

            //Setting the content view
            this.childView("content", ".content");

            this.viewData = {
                menuItems : [
                    {name: "About"}
                ]
            };

            this.once(events.afterRender, function () {               
                Backbone.history.start();
            });
        }
    });
});
