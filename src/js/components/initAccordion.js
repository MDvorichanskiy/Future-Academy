import '../plugins/accordionPlugin'

// accordion menu init
export default function initAccordion () {
  window.ResponsiveHelper.addRange({
    '..1023': {
      on: function () {
        jQuery('.menu').slideAccordion({
          opener: '.menu__link',
          slider: '.menu__drop',
          animSpeed: 300
        });
      },
      off: function () {
        jQuery('.menu').slideAccordion('destroy');
      }
    }
  });
}
