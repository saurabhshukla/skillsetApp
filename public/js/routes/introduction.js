define(function (require) {

    var appState = require("singletons/app-state");
    
    return function () {
        var ViewSetsCollection = require("collections/view-sets"),
            viewSets = new ViewSetsCollection();

        viewSets.fetch({
            success: function () {
                appState.set({
                    "view:/content": {
                        templatePath: "templates/content/introduction",
                        viewData: {
                            viewSets: viewSets.toJSON()
                        }
                    }
                });
            }
        });
    };
});