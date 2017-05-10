var map;

$(document).ready(function(){

    var watchID;

    $("#clickAccel").on("click",function(){

        console.log("navigator.accelerometer",navigator.accelerometer)

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

    $("#whereiam").on("click",function(){
            navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    })

function onSuccessGeo(position) {
        map.setCenter( {lat: position.coords.latitude, lng: position.coords.longitude});
        var marker = new google.maps.Marker({
          position: {lat: position.coords.latitude, lng: position.coords.longitude},
          map: map
        });
    };

            // onError Callback receives a PositionError object
            //
function onErrorGeo(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

})






function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru
    });

    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map
    // });
}