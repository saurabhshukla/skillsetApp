define(function (require) {

    var appState = require("singletons/app-state");
    
    return function () {
        var ViewListCollection = require("collections/view-list"),
            viewList = new ViewListCollection();

        viewList.fetch({
            success: function () {
                appState.set({
                    "view:/content": {
                        templatePath: "templates/content/another-screen",
                        viewData: {
                            viewList: viewList.toJSON()
                        }
                    }
                });
            }
        });
    };
});
