/*
Used to specify the html, js and css of various templates that have to be made available for loading.
A view’s template is loaded dynamically using the html, js and css that is specified in this file.
*/
define(function (require) {
    
    return {
        "templates/header/header": {
            "load": ["html", "css", "js"],
            "viewPath": "views/header/header"
        },
        "templates/content/menu-items": {
            "viewPath": "views/content/menu-items"
        },
        "templates/footer/footer": {
            "viewPath": "views/footer/footer"
        },
        "templates/content/landing-page": {
            "load": ["html", "js"],
            "viewPath": "views/content/landing-page"
        },
        "templates/content/introduction": {
            "viewPath": "views/content/introduction"
        },
        "templates/content/user-dashboard": {
            "viewPath": "views/content/user-dashboard"
        },
        "templates/content/login/login": {
            "viewPath": "views/content/login/login"
        },
        "templates/content/user/dashboard": {
            "viewPath": "views/content/user/dashboard"
        },
        "templates/content/user/skills-list": {
            "viewPath": "views/content/user/skills-list"
        },
        "templates/content/user/certificates-list": {
            "viewPath": "views/content/user/certificates-list"
        }

    };
});