$(document).ready(function(){
  scan();
  console.log("ready");
});

function scan(){
  $("#take-picture").on("click", function(){
    console.log("CLICKED");
    setTimeout(function(){
      window.location.replace("https://boiling-citadel-40388.herokuapp.com/monster/new");
    }, 5000)
  });
};