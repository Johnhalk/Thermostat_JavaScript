// window.onload = function (){
//   alert("Thermostat!!!");
// };

$(document).ready(function() {
    var thermostat = new Thermostat();

    $("#temp").text(
        thermostat.getTemp()
    );

    $("#Off").css("visibility", "hidden");
    $("#On").css("visibility", "visible");


    $( "#add" ).click(function() {
        thermostat.up()
            $("#temp").text(
                thermostat.getTemp()
            );
    });

    $("#subtract").click(function(){
        thermostat.down()
            $("#temp").text(
                thermostat.getTemp()
            );
    });

    $("#reset").click(function(){
        thermostat.resetTemp()
            $("#temp").text(
                thermostat.getTemp()
            );
    });

    $("#On").click(function(){
        $("#On").css("visibility", "hidden");
        thermostat.powerSaveOn();
        $("#Off").css("visibility", "visible");
    })

    $("#Off").click(function(){
        $("#Off").css("visibility", "hidden");
        thermostat.powerSaveOff();
        $("#On").css("visibility", "visible");
    })

});
