import { Loader } from "@googlemaps/js-api-loader"

export default function initGoogleMaps () {
  const loader = new Loader({
    apiKey: "AIzaSyCHQPTiOI1KxFEVt5ssNzsYoYSOKnbvIkA",
    version: "weekly",
  });

  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.0013528, lng: 2420593.17 },
      zoom: 3,
    });
  });
  console.log(111);
}
