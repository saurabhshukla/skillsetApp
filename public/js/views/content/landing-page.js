define(function (require) {

    return {
        className: "landing-page",

        events: {
            "click .another-screen": function () {
                console.log("Clicked link for another screen");
            }
        }
    };
});