

$(document).ready(function(){

    var watchID;

    $("#clickAccel").on("click",function(){

        function accelerometerSuccess(acceleration) {
                $("#accelResult").html("<ul>"+
                    "<li> en X: "+acceleration.x+"</li>"+
                    "<li> en Y: "+acceleration.y+"</li>"+
                    "<li> en Z: "+acceleration.z+"</li>"+
                    "</ul>")
            }

            function accelerometerError() {
                alert('onError!');
            }

            watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                       accelerometerError,
                                                       {frequency:1000});
    })


    $("#clearWatch").on("click",function(){
        navigator.accelerometer.clearWatch(watchID);
    })



})