define(function (require) {
    
    return Backbone.Collection.extend({
        url: require("constants/url").viewList
    });
});