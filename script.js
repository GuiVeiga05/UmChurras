function calcular() {
  const homens = parseInt(document.getElementById('homens').value) || 0;
  const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
  const criancas = parseInt(document.getElementById('criancas').value) || 0;

  // Quantidades por pessoa
  const carnePorHomem = 0.5; // 500g de carne por homem
  const carnePorMulher = 0.4; // 400g de carne por mulher
  const carnePorCrianca = 0.2; // 200g de carne por criança

  const frangoPorHomem = 0.3; // 300g de frango por homem
  const frangoPorMulher = 0.2; // 200g de frango por mulher
  const frangoPorCrianca = 0.1; // 100g de frango por criança

  const linguicaPorHomem = 0.2; // 200g de linguiça por homem
  const linguicaPorMulher = 0.15; // 150g de linguiça por mulher
  const linguicaPorCrianca = 0.1; // 100g de linguiça por criança

  const paoPorHomem = 2; // 2 pães de alho por homem
  const paoPorMulher = 1.5; // 1.5 pães de alho por mulher
  const paoPorCrianca = 1; // 1 pão de alho por criança

  const cervejaPorHomem = 2.5; // 2.5 litros de cerveja por homem
  const cervejaPorMulher = 1.5; // 1.5 litro de cerveja por mulher
  const cervejaPorCrianca = 0; // Crianças não consomem cerveja

  const refriPorHomem = 0.5; // 0.5 litros de refrigerante por homem
  const refriPorMulher = 0.5; // 0.5 litros de refrigerante por mulher
  const refriPorCrianca = 1; // 1 litro de refrigerante por criança

  const carvaoPorPessoa = 0.5; // 0.5 kg de carvão por pessoa

  // Calcula as quantidades totais
  const carneTotal = (homens * carnePorHomem) + (mulheres * carnePorMulher) + (criancas * carnePorCrianca);
  const frangoTotal = (homens * frangoPorHomem) + (mulheres * frangoPorMulher) + (criancas * frangoPorCrianca);
  const linguicaTotal = (homens * linguicaPorHomem) + (mulheres * linguicaPorMulher) + (criancas * linguicaPorCrianca);
  const paoTotal = (homens * paoPorHomem) + (mulheres * paoPorMulher) + (criancas * paoPorCrianca);
  const cervejaTotal = (homens * cervejaPorHomem) + (mulheres * cervejaPorMulher) + (criancas * cervejaPorCrianca);
  const refriTotal = (homens * refriPorHomem) + (mulheres * refriPorMulher) + (criancas * refriPorCrianca);
  const carvaoTotal = (homens + mulheres + criancas) * carvaoPorPessoa;

  // Atualiza os resultados na página
  document.getElementById('carne').textContent = `${carneTotal.toFixed(1)} kg`;
  document.getElementById('frango').textContent = `${frangoTotal.toFixed(1)} kg`;
  document.getElementById('linguica').textContent = `${linguicaTotal.toFixed(1)} kg`;
  document.getElementById('pao').textContent = `${paoTotal.toFixed(1)} unidades`;
  document.getElementById('cerveja').textContent = `${cervejaTotal.toFixed(1)} litros`;
  document.getElementById('refri').textContent = `${refriTotal.toFixed(1)} litros`;
  document.getElementById('carvao').textContent = `${carvaoTotal.toFixed(1)} kg`;
}
