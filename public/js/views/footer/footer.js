define(function (require) {
    
    return {
        events: {
            "click span": function () {
                alert("views/footer.js handled this");
            }
        }
    };
});