$(function() {
  $("#card-2").flip({
    axis: "y",
    reverse: true,
    trigger: "manual",
    speed: 1000
  });
});

function turnToRegister() {
  $("#card-2").flip(true);
}

function turnToLogin() {
  $("#card-2").flip(false);
}
