var munchkins = ["kim", "tim", "sim", "bim", "whim"] ;
$("#cats2_image").hide();
$("#catsfilter2_image").hide();
$("#catsreduce2_image").hide();
$("#catsmap2_image").hide();

$("#munchies1trigger").on("click", function (){
    $("#cats1_image").show();
    $("#cats2_image").hide();

    //clear out existing feedback div.
    $("#munchies1div").html("");

    var truck = [];
    // var user_input = $("#munchies1").val();
    var user_input = editorBatch1.getDoc().getValue();
    console.log(user_input);

    if(user_input.length < 1){
      $("#munchies1div").html("you must enter some code");
      return;
    }

    try {
      truck.push(eval(user_input));
      if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
        truck.forEach(function(thing){
          $("#munchies1div").html("ready to roll");
          $("#cats1_image").hide();
          $("#cats2_image").show();
        });
      } else {
        $("#munchies1div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies1div").html("syntax error:  try again");
   }
});
