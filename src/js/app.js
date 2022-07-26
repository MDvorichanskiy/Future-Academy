import ready, { HTML } from './utils';
import 'core-js';
import '@babel/polyfill';
import './utils/polyfills';
import './utils/responsiveHelperPlugin';
import initCounter from './components/counter'
import initMobileNav from './components/mobileNav'
import initAccordion from './components/initAccordion'
import initSlick from './components/slick'



ready(() => {
  HTML.classList.add('is-loaded');
  initCounter();
  initMobileNav();
  initAccordion();
  initSlick()
});
