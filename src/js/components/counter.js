import 'waypoints/lib/noframework.waypoints.min.js';
import counterUp from 'counterup2'


/* eslint-disable */
export default function initCounter() {

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    counterUp(counter, {
      duration: 1000,
      delay: 16
    });
  });
}
