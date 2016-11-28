// let seconds = 0;
// let timerId = null;
//
// $("#start").on("click",function(){
//   timerId = setInterval(updateTime, 1000);
// });
//
// $("#reset").on("click",function(){
//   clearInterval(timerId);
//   seconds = 0;
//   $("#timer").text("Stop Watch");
// });
//
// $("#pause").on("click",function(){
//   clearInterval(timerId);
// });
//
// let updateTime = function() {
//   seconds++;
//   $("#timer").text("Time elapsed: "+seconds);
// };


let timer = {

    seconds: 0,
    timerId: null,

    updateTime() {
      this.seconds++;
      $("#timer").text("Time elapsed: "+this.seconds);
    },

    clickStart() {
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
    },

    clickPause() {
      clearInterval(this.timerId);
    },

    clickReset() {
      clearInterval(this.timerId);
      this.seconds = 0;
      $("#timer").text("Stop Watch");
    },

    go() {
      $("#start").on("click", () => {this.clickStart();} );
      $("#reset").on("click", () => {this.clickReset();} );
      $("#pause").on("click", () => {this.clickPause();} );
    }

};

timer.go();
