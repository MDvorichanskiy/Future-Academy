import '@fancyapps/fancybox'

export default function initFancybox () {
  jQuery('a.lightbox, [data-fancybox]').fancybox({
    parentEl: 'body',
  });
}
