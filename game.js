/**
 * Created by paulcook on 1/19/16.
 */
$(function() {
    var gameboard = [20,30];
    var gameboardContainer = $(".gameboard");
    for(var x =0; x < 20; x++)
    {
        for(var y =0; y < 30; y++)
        {
            gameboard[x,y] = $('<div class="tile"></div>');
            if(Math.random() > .7)
                gameboard[x,y].addClass("mine");
            gameboardContainer.append(gameboard[x,y]);
        }
    }

    $(".tile").click(function(e) {
        if( $(this).hasClass("mine") )
        {
            console.log("You died!!!");
            $(this).css("background-color", "red");
        }
        else
        {
            console.log("There was no mine");
            $(this).css("background-color", "green");
        }


    });




});