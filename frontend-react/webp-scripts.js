const webp = require("webp-converter");

const imagesToConvert = [
  "src/assets/main-logo.jpg",
  "src/assets/main-logo-clean.png",
  "src/assets/email.png",
  "src/assets/mobile.png",
  "src/assets/api.png",
  "src/assets/cpp.png",
  "src/assets/css.png",
  "src/assets/figma.png",
  "src/assets/flutter.png",
  "src/assets/git.png",
  "src/assets/graphql.png",
  "src/assets/html.png",
  "src/assets/javascript.png",
  "src/assets/mu5.png",
  "src/assets/node.png",
  "src/assets/python.png",
  "src/assets/react.png",
  "src/assets/redux.png",
  "src/assets/sass.png",
  "src/assets/typescript.png",
  "src/assets/vue.png",
  "src/assets/compose.png",
  "src/assets/unity.png",
  "src/assets/java.png",
  "src/assets/mysql.png",
  "src/assets/csharp.png",
  "src/assets/profile.png",
  "src/assets/spotify.png",
  // Note: SVG and already WebP files are excluded
];

const convertToWebp = (inputPath, outputPath) => {
  webp
    .cwebp(inputPath, outputPath, "-q 80")
    .then((response) => {
      if (response === "100") {
        console.log(`Converted ${inputPath} to WebP format.`);
      } else {
        console.error(`Failed to convert ${inputPath}`);
      }
    })
    .catch((error) => {
      console.error(`Error in converting ${inputPath}: ${error}`);
    });
};

imagesToConvert.forEach((imagePath) => {
  const outputImagePath = imagePath.replace(/\.(jpg|png)$/, ".webp");
  convertToWebp(imagePath, outputImagePath);
});
