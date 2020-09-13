//지도를 삽입할 HTML 요소 또는 HTML 요소의 id를 지정합니다.
let mapDiv = document.getElementById('map'); // 'map'으로 선언해도 동일

//옵션 없이 지도 객체를 생성하면 서울 시청을 중심으로 하는 16 레벨의 지도가 생성됩니다.
/*
let mapOptions = {
    center: new naver.maps.LatLng(37.5571, 126.9414)
}*/
let map = new naver.maps.Map(mapDiv , mapOptions);

/*
function onSuccessGeolocation(position) {
    let location = new naver.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

    map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
    //map.setZoom(10); // 지도의 줌 레벨을 변경합니다.

    //infowindow.setContent('<div style="padding:20px;">' + 'geolocation.getCurrentPosition() 위치' + '</div>');

    //infowindow.open(map, location);
    console.log('Coordinates: ' + location.toString());
}

function onErrorGeolocation() {
    let center = map.getCenter();

    infowindow.open(map, center);
}

 window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
    if (navigator.geolocation) {
         //navigator depricated라서 나중에 수정..
        navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
        
    } else {
        let center = map.getCenter();
        infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
        infowindow.open(map, center);
    }
  });

  */