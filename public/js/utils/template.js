define(function (require) {    
    return {        
        compileAll: function (obj) {
            Object.keys(obj).forEach(function (key) {
                obj[key] = Handlebars.compile(obj[key]);
            });
            return obj;
        }
    };
});