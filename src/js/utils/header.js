import nineHeader from 'nine-immersive-header';

export default function initNineHeader() {
  nineHeader({
    headerConfig: {
      logoColor: "#fff",
      bgColor: "#000",
      textColor: "#fff",
      css: {
        position: "fixed",
      }
    },
    footerConfig: {
      bgColor: "#000",
      textColor: "#fff",
      logoColor: "#fff",
    }
  });
}
