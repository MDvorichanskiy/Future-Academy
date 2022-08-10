import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

export default function initFancybox () {
  window.Fancybox = Fancybox;
  jQuery('a.lightbox, [data-fancybox]').fancybox({
    parentEl: 'body',
  });
}
