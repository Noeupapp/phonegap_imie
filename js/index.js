

$(document).ready(function(){

    $("#clickAccel").on("click",function(){

        function onSuccess(acceleration) {
                $("#accelResult").html("<ul>"+
                    "<li> en X: "+acceleration.x+"</li>"+
                    "<li> en Y: "+acceleration.y+"</li>"+
                    "<li> en Z: "+acceleration.z+"</li>"+
                    "</ul>")
            }

            function onError() {
                alert('onError!');
            }

            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    })



})