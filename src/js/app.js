import ready, { HTML } from './utils';
import 'core-js';
import '@babel/polyfill';
import './utils/polyfills';
import './utils/responsiveHelperPlugin';
import initCounter from './components/counter'
import initMobileNav from './components/mobileNav'
import initAccordion from './components/initAccordion'
import initSlick from './components/slick'
import initAOS from './components/aos'
import initFancybox from './components/fancybox'



ready(() => {
  HTML.classList.add('is-loaded');
  initCounter();
  initMobileNav();
  initAccordion();
  initSlick();
  initAOS();
  initFancybox();
});
