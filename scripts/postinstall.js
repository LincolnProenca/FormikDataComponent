const fs = require("fs");
const path = require("path");

const componentsPath = path.join(__dirname, "..", "components"); // Caminho para a pasta components

// Verifica se a pasta components existe, se não, cria
if (!fs.existsSync(componentsPath)) {
  fs.mkdirSync(componentsPath);
}

// Cria um arquivo (pode ser um template ou qualquer coisa)
const content = "Seu conteúdo inicial aqui.";
const filePath = path.join(componentsPath, "seu-arquivo.txt");
fs.writeFileSync(filePath, content);

console.log("Arquivo criado em:", filePath);
