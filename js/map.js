function initMap() {
  var uluru = {
    lat: 37.0902,
    lng: -95.7129
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.5,
    center: uluru
  });

  var seattle = {
    lat: 47.6062,
    lng: -122.3321
  };
  var marker1 = new google.maps.Marker({
    position: seattle,
    map: map,
    title: "Seattle WA"
  });

  var portland = {
    lat: 45.5122,
    lng: -122.6587
  };
  var marker2 = new google.maps.Marker({
    position: portland,
    map: map,
    title: "Portland OR"
  });

  var sturgis = {
    lat: 44.4097,
    lng: -103.5091
  };
  var marker3 = new google.maps.Marker({
    position: sturgis,
    map: map,
    title: "Sturgis South Dakota"
  });

  var chicago = {
    lat: 41.8781,
    lng: -87.6298
  };
  var marker4 = new google.maps.Marker({
    position: chicago,
    map: map,
    title: "Chicago IL"
  });

  var cleveland = {
    lat: 41.4993,
    lng: -81.6944
  };
  var marker5 = new google.maps.Marker({
    position: cleveland,
    map: map,
    title: "Cleveland OH"
  });

  var detroit = {
    lat: 43.3314,
    lng: -83.6944
  };
  var marker6 = new google.maps.Marker({
    position: detroit,
    map: map,
    title: "Detroit MI"
  });

  var minneapolis = {
    lat: 44.9778,
    lng: -93.2650
  };
  var marker7 = new google.maps.Marker({
    position: minneapolis,
    map: map,
    title: "Minneapolis MN"
  });

  var milwaukee = {
    lat: 43.0389,
    lng: -87.9065
  };
  var marker8 = new google.maps.Marker({
    position: milwaukee,
    map: map,
    title: "Milwaukee WI"
  });

  var pittsburgh = {
    lat: 40.4406,
    lng: -79.9959
  };
  var marker9 = new google.maps.Marker({
    position: pittsburgh,
    map: map,
    title: "Pittsburgh PA"
  });

  var glacier = {
    lat: 48.7596,
    lng: -113.7870
  };
  var marker10 = new google.maps.Marker({
    position: glacier,
    map: map,
    title: "Glacier National Park"
  });

  var yellowstone = {
    lat: 44.4280,
    lng: -110.5885
  };
  var marker11 = new google.maps.Marker({
    position: yellowstone,
    map: map,
    title: "Yellow Stone National Park"
  });

  var grandteton = {
    lat: 43.7904,
    lng: -110.6818
  };
  var marker12 = new google.maps.Marker({
    position: grandteton,
    map: map,
    title: "Grand Teton National Park"
  });

  var badlands = {
    lat: 43.8554,
    lng: -102.3397
  };
  var marker13 = new google.maps.Marker({
    position: badlands,
    map: map,
    title: "Bad Lands National Park"
  });
  var boise = {
    lat: 43.6150,
    lng: -116.2023
  };
  var marker14 = new google.maps.Marker({
    position: boise,
    map: map,
    title: "Bosie ID"
  });



  var infowindow1 = new google.maps.InfoWindow({
    content: "Seattle, WA. I lived here for 2 years, before moving to Chicago on July 1 2018."
  });
  marker1.addListener('click', function () {
    infowindow1.open(map, marker1);
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: "Portland, OR. June 05-09, I also lived here for 20 years."
  });
  marker2.addListener('click', function () {
    infowindow2.open(map, marker2);
  });

  var infowindow3 = new google.maps.InfoWindow({
    content: "Sturgis SD. 6/26/2018."
  });
  marker3.addListener('click', function () {
    infowindow3.open(map, marker3);
  });

  var infowindow4 = new google.maps.InfoWindow({
    content: "Chicago, my new temporary home."
  });
  marker4.addListener('click', function () {
    infowindow4.open(map, marker4);
  });

  var infowindow5 = new google.maps.InfoWindow({
    content: "Cleveland, OH. 08/12/2018 and 11/21/2018"
  });
  marker5.addListener('click', function () {
    infowindow5.open(map, marker5);
  });

  var infowindow6 = new google.maps.InfoWindow({
    content: "Detroit, MI. 09/05/2018"
  });
  marker6.addListener('click', function () {
    infowindow6.open(map, marker6);
  });

  var infowindow7 = new google.maps.InfoWindow({
    content: "Minneapolis, MN. 06/29/2018"
  });
  marker7.addListener('click', function () {
    infowindow7.open(map, marker7);
  });

  var infowindow8 = new google.maps.InfoWindow({
    content: "Milwaukee, WI. 7/15/2018"
  });
  marker8.addListener('click', function () {
    infowindow8.open(map, marker8);
  });

  var infowindow9 = new google.maps.InfoWindow({
    content: "Pittsburgh, PA. 10/18/2018"
  });
  marker9.addListener('click', function () {
    infowindow9.open(map, marker9);
  });

  var infowindow10 = new google.maps.InfoWindow({
    content: "Glacier National Park, 06/22/2018"
  });
  marker10.addListener('click', function () {
    infowindow10.open(map, marker10);
  });
  
  var infowindow11 = new google.maps.InfoWindow({
    content: "Yellow Stone National Park, 6/23/2018"
  });
  marker11.addListener('click', function () {
    infowindow11.open(map, marker11);
  });
  
  var infowindow12 = new google.maps.InfoWindow({
    content: "Grand Teton National Park, 6/24/2018"
  });
  marker12.addListener('click', function () {
    infowindow12.open(map, marker12);
  });
  
  var infowindow13 = new google.maps.InfoWindow({
    content: "Bad Lands National Park, 6/26/2018"
  });
  marker13.addListener('click', function () {
    infowindow13.open(map, marker13);
  });
  
  var infowindow14 = new google.maps.InfoWindow({
    content: "Boise, ID. 6/23/2018"
  });
  marker14.addListener('click', function () {
    infowindow14.open(map, marker14);
  });
}
