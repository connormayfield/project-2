$(function(){
    $("#accordion").accordion();
    $("#init").click();

    $(document).on("keypress",function(e) {
        if(e.which === 13) {
            $("#submit").click();
        }
    });

    // $("#submit").on("click", function(e){

    //     // e.preventDefault;

    //     if($("#food").val()==="") {
    //         return $("#food").focus();
    //     }

    //     var diet="";
    //     var health="";
    //     //var arr = [];
    //     $("#result").empty();
       
    //     if($("[name='health']:checked").length !== 0) {
    //         $.each($("[name='health']:checked"), function(i, element) {
    //             health=health+"&health="+element.value;
    //         });
    //     }

    //     if($("#diet").val() !== "") {
    //         diet="&diet=";
    //         diet=diet+$(":selected").val();
    //     }

    //     var query = {
    //         food: $("#food").val().trim(),
    //         health: health,
    //         diet: diet
    //     };

    //     console.log(diet + " " + health);
        
    //     // $.ajax("/api/recipe/", {
    //     //     type:"POST",
    //     //     data: query
    //     // }).then(function(result) {
    //     //     console.log(result);
    //     // });  

    // });
});

$("#result").on("click", ".btn-favorite", function() {

    var mealData = {
        name: $(this).data("title"),
        image: $(this).data("image"),
        servings: $(this).data("servings"),
        dietLabels: $(this).data("diet"),
        healthLabels: $(this).data("health"),
        ingredients: $(this).data("ingredients"),
        calories: $(this).data("calories"),
        time: $(this).data("time"),
    };

    console.log(mealData);

    $.ajax("/api/meals", {
        method: "POST",
        data: {
            url: $(this).data("url"),
            data: mealData,
            table: "favorite"
        }
    }).then( function(results){
        console.log(results);
        if(results.status === "not logged in") {
            window.location.replace("/");
        }
    });
});

$(document).on("click", ".recipe", function(){
    $("#recipe").click();
    $("iframe").attr("src",$(this).data("url"));
});