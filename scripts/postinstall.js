const fs = require("fs");
const path = require("path");

const componentsPath = path.join(__dirname, "../../../src", "components"); // Caminho para a pasta components
const formikDataPath = path.join(componentsPath, "FormikData"); // Caminho para a pasta FormikData dentro de components
const srcPath = path.join(__dirname, "..", "src"); // Caminho para a pasta src

// Verifica se a pasta components existe, se não, cria
if (!fs.existsSync(componentsPath)) {
  fs.mkdirSync(componentsPath);
}

// Verifica se a pasta FormikData existe, se não, cria
if (!fs.existsSync(formikDataPath)) {
  fs.mkdirSync(formikDataPath);
}

// Função para copiar arquivos recursivamente
function copyFiles(src, dest) {
  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.statSync(srcFile).isDirectory()) {
      fs.mkdirSync(destFile);
      copyFiles(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

// Executa a cópia recursiva
copyFiles(srcPath, formikDataPath);
