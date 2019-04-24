const FontFaceObserver = require("fontfaceobserver");

export const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Open+Sans:400,400italic,600,600italic,800,800italic";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const openSans = new FontFaceObserver("Open Sans");

  openSans.load().then(() => {
    document.documentElement.classList.add("open-sans");
  });
};
