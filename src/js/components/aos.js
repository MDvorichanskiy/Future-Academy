import AOS from 'aos';

export default function initAOS () {
  AOS.init({
    once: true,
    offset: 120,
    duration: 700,
    easing: 'ease-in-out-cubic',
  });
}
