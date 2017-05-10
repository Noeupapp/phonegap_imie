

$(document).ready(function(){

    var watchID;

    $("#clickAccel").on("click",function(){

        console.log("navigator.accelerometer",navigator.accelerometer)

        // function accelerometerSuccess(acceleration) {
        //         $("#accelResult").html("<ul>"+
        //             "<li> en X: "+acceleration.x+"</li>"+
        //             "<li> en Y: "+acceleration.y+"</li>"+
        //             "<li> en Z: "+acceleration.z+"</li>"+
        //             "</ul>")
        //     }

        //     function accelerometerError() {
        //         alert('onError!');
        //     }

        //     watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
        //                                                accelerometerError,
        //                                                {frequency:1000});
    })


    $("#clearWatch").on("click",function(){
        navigator.accelerometer.clearWatch(watchID);
    })

    $("#takePhoto").on("click",function(){
            navigator.camera.getPicture(onSuccessCamera, onFailCamera, { quality: 25,correctOrientation:true,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccessCamera(imageData) {
                var image = document.getElementById('ImageIn');
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFailCamera(message) {
                alert('Failed because: ' + message);
            }
    })



})