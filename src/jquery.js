// window.onload = function (){
//   alert("Thermostat!!!");
// };

$(document).ready(function() {
    var thermostat = new Thermostat();

    $("#temp").text(
        thermostat.getTemp()
    );

    $("#energy_usage").text(
        thermostat.energyUsage()
    );

    $("#Off").css("visibility", "visible");
    $("#On").css("visibility", "hidden");


    $( "#add" ).click(function() {
        thermostat.up()
            $("#temp").text(
                thermostat.getTemp()
            );
            $("#energy_usage").text(
                thermostat.energyUsage()
            );
    });

    $("#subtract").click(function(){
        thermostat.down()
            $("#temp").text(
                thermostat.getTemp()
            );
            $("#energy_usage").text(
                thermostat.energyUsage()
            );
            if($("#energy_usage") === 'low-usage'){
                $("#energy_usage").css("color", "green");
            }
    });

    $("#reset").click(function(){
        thermostat.resetTemp()
            $("#temp").text(
                thermostat.getTemp()
            );
            $("#energy_usage").text(
                thermostat.energyUsage()
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

    // if($("#energy_usage").text === "low-usage"){
    //     $("#energy_usage").css("color", "green")
    // }
});
