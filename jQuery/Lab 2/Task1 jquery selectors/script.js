$("#start").click(function (event) {
  start();
});
$("#reset").click(function (event) {
  reset();
});
function reset() {
  $("#img1").css("left", "0px").stop();
  $("#img2").css("left", "0px").stop();
  $("#result").html("winner: ");
}
function start() {
  var randomForImg1 = Math.floor(Math.random() * 2001) + 1300;
  var randomForImg2 = Math.floor(Math.random() * 2001) + 1300;
  $(function () {
    $("#img1").animate({ left: "650px" }, randomForImg1, displayWinner);
  });
  $(function () {
    $("#img2").animate({ left: "650px" }, randomForImg2, displayWinner);
  });
  function displayWinner() {
    if (randomForImg1 > randomForImg2) {
      //car 2 faster
      $("#result").html("winner:car 2");
    } else if (randomForImg1 < randomForImg2) {
      $("#result").html("winner:car 1");
    } else if (randomForImg1 === randomForImg2) {
      $("#result").html("no one is winner click for restart ");
      $("#result")
        .append("<button>restart</button>")
        .click(function () {
          reset();
          start();
        });
    }
  }
}
