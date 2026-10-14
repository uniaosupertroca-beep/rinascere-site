// Gera public/og.png (prévia de link) e public/apple-touch-icon.png a partir dos HTML desta pasta.
// Só precisa rodar quando a arte mudar:  npx -y playwright@1.56.1 install chromium && node scripts/gerar-imagens.mjs
import { chromium } from "playwright";

const pasta = new URL("./", import.meta.url);
const publico = new URL("../public/", import.meta.url);
const navegador = await chromium.launch();

for (const [arquivo, saida, largura, altura] of [
  ["og.html", "og.png", 1200, 630],
  ["icone.html", "apple-touch-icon.png", 180, 180],
]) {
  const pagina = await navegador.newPage({ viewport: { width: largura, height: altura } });
  await pagina.goto(new URL(arquivo, pasta).href);
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.screenshot({ path: new URL(saida, publico).pathname });
  await pagina.close();
  console.log(`public/${saida}`);
}
await navegador.close();
