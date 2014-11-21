define(function (require) {
    return {
        events: {
            "click span": "spanClicked"
        },

        spanClicked: function () {
            alert("custom template events worked!");
        }
    };
});