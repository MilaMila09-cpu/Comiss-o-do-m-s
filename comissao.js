function calcularSalario() {
  const salarioFixo = 1518.00;
  const valorComissao = 40.00;

  const vendas = parseInt(document.getElementById('vendas').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(vendas) || vendas < 0) {
    resultado.innerHTML = `<span style="color:red">Por favor, insira um número válido de vendas.</span>`;
    return;
  }

  const comissaoTotal = vendas * valorComissao;
  const salarioTotal = salarioFixo + comissaoTotal;

  resultado.innerHTML = `
    <p>Comissão total: <strong>R$ ${comissaoTotal.toFixed(2)}</strong></p>
    <p>Salário total com comissões: <strong>R$ ${salarioTotal.toFixed(2)}</strong></p>
  `;
}
