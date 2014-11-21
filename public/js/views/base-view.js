/*
BaseView
--------

The setView method (defined below) is used to set the template, events, and other initializations.
The childView method (defined below) is used to create a child view. It needs to be given a child name, a child selector class along with optional parameters – templatePath, viewPath and viewPath.

For example, the following code snippet can be used to create a child view of a sample view using header as the child name, .header as the child selector class along with optional parameters templatePath and viewData:
       sampleView.childView("header", ".header", {
           templatePath: "templates/header/header-option-1",
           viewData: {
               menuItems: [
                   { menuItemText: "Home" },
                   { menuItemText: "About" },
                   { menuItemText: "Contact" }
               ]
           }
      });
*/

// jQuery plugin required in BaseView definition
/*jshint asi:true */(function(e){e.fn.closestDescendant=function(t,n){if(!t||t===""){return e()}n=n?true:false;var r=e();this.each(function(){var i=e(this);var s=[];s.push(i);while(s.length>0){var o=s.shift();var u=o.children();for(var a=0;a<u.length;++a){var f=e(u[a]);if(f.is(t)){r.push(f[0]);if(!n){return false}}else{s.push(f)}}}});return r}})(jQuery);/*jshint asi:false */

define(function (require) {

    var appState = require("singletons/app-state"),
        events = require("constants/events"),
        templateConfig = require("template-config");

    var BaseView = Backbone.View.extend({
        initialize: function () {
            this.baseInitialize.apply(this, arguments);
        },

        baseInitialize: function (opts) {
            opts = opts || {};

            if (!opts.el && opts.selectorInParent) {
                this.selectorInParent = opts.selectorInParent;
            }
            this.viewName = opts.viewName || "/";
            this.viewData = opts.viewData || {};

            appState.on(
                "change:view:" + this.viewName,
                _.bind(function (appState, viewOptions) {
                    this.setView(viewOptions);
                }, this)
            );
            
            if (opts) {
                this.setView(opts);
            }
            appState.set("view:" + this.viewName, opts, { silent: true });
        },

        // To set template and events
        setView: function (opts) {
            var view = this,
                templatePath = opts.templatePath || this.templatePath,
                templateInfo = templateConfig[templatePath],
                viewPath = templateInfo && templateInfo.viewPath,
                load = (templateInfo && templateInfo.load) || ["html"];

            if (!templatePath) {       
                return;
            }

            _.extend(view.viewData, opts.viewData);

            var templateHtmlPath = templatePath + ".html";
            view.template = window.JST && window.JST[templateHtmlPath];
            
            var filePaths = [
                viewPath,
                (~load.indexOf("js") && templatePath),
                (view.template ? undefined : (~load.indexOf("html") && ("text!" + templateHtmlPath))),
                (~load.indexOf("css") && ("css!" + templatePath + ".css"))
            ];

            view.asyncLoadingInProgress = true;
            
            require(filePaths, function (viewOptions, templateViewOptions, templateHtml){
                if (!view.template) {
                    view.template = Handlebars.compile(templateHtml);
                }

                view.stopListening();
                if (viewOptions && typeof viewOptions !== "function") {
                    view.extendWithOptions(viewOptions);
                }

                if (templateViewOptions) {
                    view.extendWithOptions(templateViewOptions);
                }

                view.render();
                _.defer(function () {
                    view.asyncLoadingInProgress = false;
                    view.trigger(events.afterRender);
                });

            }, function () {
                alert("Error loading files: ", filePaths);
            });
            
        },

        extendWithOptions: function (opts) {
            var originalEvents = this.events || {},
                originalViewData = this.viewData || {};

            _.extend(originalEvents, opts.events);
            _.extend(originalViewData, opts.viewData);
            
            _.extend(this, opts);

            this.events = originalEvents;
            this.viewData = originalViewData;

            if (opts.className) {
                this.$el.addClass(opts.className);
            }

            if (opts.initialize) {
                opts.initialize.call(this, opts);
            }

            return this;
        },

        childView: function (childName, childSelector, viewOptions) {
            if (this[childName]) {
                this[childName].remove();
            }

            if (!childName) {
                throw new Error("Need childName in view.childView()");
            }
            if (!childSelector) {
                throw new Error("Need childSelector in view.childView()");
            }

            var opts = _.extend({
                viewName:
                    (this.viewName !== "/" ? this.viewName : "") +
                    "/" + childName,
                selectorInParent: childSelector
            }, viewOptions);
            
            var child = this[childName] = new BaseView(opts);
            if (this.asyncLoadingInProgress) {
                this.once(events.afterRender, attachChild);
            } else {
                attachChild.call(this);
            }

            function attachChild() {
                this.listenTo(child, events.afterRender, function () {
                    if (child.selectorInParent) {
                        this.$(child.selectorInParent).html(child.el);
                        child.delegateEvents();
                    }
                });
            }
        },

        render: function () {
            this.$el.html(this.template(this.viewData));
            return this;
        }
    });

    return BaseView;
});
