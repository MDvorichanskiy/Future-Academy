import ready, { HTML } from './utils';
import 'core-js';
import '@babel/polyfill';
import './utils/polyfills';
import initCounter from './components/counter'



ready(() => {
  HTML.classList.add('is-loaded');
 initCounter()
});
