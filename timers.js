"use strict";

const timer = {
    seconds: 0,
    id: undefined,
    $timer: $("#timer"),
    $reset: $("#reset"),
    $start: $("#start"),
    $pause: $("#pause"),
    update: function() {
        this.seconds += 1;
        this.$timer.text(this.seconds);
    },
};

$(function() {
    timer.$reset.on("click", function(event) {
        clearInterval(timer.id);
        timer.seconds = 0;
        timer.$timer.text("Stop Watch");
    });

    timer.$start.on("click", function(event) {
        timer.id = setInterval(timer.update.bind(timer), 1000);
    });

    timer.$pause.on("click", function(event) {
        clearInterval(timer.id);
    });
});
