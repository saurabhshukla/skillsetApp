define(function (require) {
    
    return Backbone.Model.extend({
        url: require("constants/url").mockUserData
    });
});