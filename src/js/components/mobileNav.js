import '../plugins/mobileNavPlugin'

// mobile menu init
export default function initMobileNav () {
  jQuery('body').mobileNav({
    menuActiveClass: 'nav-active',
    menuOpener: '.nav-opener',
    menuDrop: '.header-drop',
  });
}
