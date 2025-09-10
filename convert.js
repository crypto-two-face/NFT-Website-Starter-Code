const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "src/assets/GNfts";
const outputDir = "./webp";
const quality = 80;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);

    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${base}.webp`);

        sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath)
            .then(() => console.log(`${file} ✅ -> ${base}.webp`))
            .catch((err) => console.error(`❌ ${file}:`, err));
    }
});
