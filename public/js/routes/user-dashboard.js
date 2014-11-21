define(function (require) {

    var appState = require("singletons/app-state");
    
    return function () {
        var User = require("models/user"),
            user = new User();

        user.fetch({
            success: function () {
                appState.set({
                    "view:/content": {
                        templatePath: "templates/content/user-dashboard",
                        viewData: user.toJSON()
                    }
                });
            }
        });
    };
});
