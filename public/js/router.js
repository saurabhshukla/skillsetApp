define(function (require) {

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"": 				require("routes/home"),
            "another-screen":   require("routes/another-screen"),
            "user-dashboard":   require("routes/user-dashboard"),            
            "user/:id/dashboard": 		require("routes/dashboard"),
            "user/:id/skills": 		require("routes/user-skills-list"),
            "user/:id/certificates": 		require("routes/user-certificates-list")
        }
    });

    var router = new AppRouter();
    return router;
});