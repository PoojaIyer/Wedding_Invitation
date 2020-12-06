// Initialize and add the map
function initMap() {
  // The location of Uluru
  const myLatlng = { lat: 15.843932385682134, lng: 74.5073498 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
  });
}
