require.config({
    baseUrl: "js/",
    paths: {
        templates: "../templates",
        text: "lib/requirejs-text",
        css: "lib/requirejs-css",
        dist:"../dist"
    }
});

require([
    // App-wide, non-amd dependencies first
    "lib/handlebars",
    "lib/jquery",
    "lib/underscore"
], function () {
require([
    // Backbone depends on jquery and underscore
    "lib/bootstrap",
    "lib/backbone",
	"lib/jquery.hammer",
    // MockJSON depends on jquery
    "lib/jquery.mockjson"
], function () {
require([
    "lib/material.min",
    "lib/ripples.min"
], function () {
require([
    // App-level initializing code
    "views/app-view",
    "router",
    "mocks"
], function (AppView, user, router) {
    window.appView = new AppView({
        templatePath: "templates/app-view"
    });
});
});
});
});