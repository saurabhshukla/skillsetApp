define(function (require) {

    var appState = require("singletons/app-state");
    
    return function () {
            appState.set({
                "view:/content": {
                    templatePath: "templates/content/login/login",
                    viewData: {
                    }
                }
            });
    };
});