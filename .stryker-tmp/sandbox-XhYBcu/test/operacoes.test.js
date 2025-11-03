// @ts-nocheck
const {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  raizQuadrada,
  restoDivisao,
  fatorial,
  mediaArray,
  somaArray,
  maximoArray,
  minimoArray,
  valorAbsoluto,
  arredondar,
  isPar,
  isImpar,
  calcularPorcentagem,
  aumentarPorcentagem,
  diminuirPorcentagem,
  inverterSinal,
  seno,
  cosseno,
  tangente,
  logaritmoNatural,
  logaritmoBase10,
  arredondarParaBaixo,
  arredondarParaCima,
  hipotenusa,
  grausParaRadianos,
  radianosParaGraus,
  mdc,
  mmc,
  isPrimo,
  fibonacci,
  produtoArray,
  clamp,
  isDivisivel,
  celsiusParaFahrenheit,
  fahrenheitParaCelsius,
  inverso,
  areaCirculo,
  areaRetangulo,
  perimetroRetangulo,
  isMaiorQue,
  isMenorQue,
  isEqual,
  medianaArray,
  dobro,
  triplo,
  metade,
} = require("../src/operacoes");

// SUÍTE DE TESTES FORTALECIDA (vFinal)
// Esta suíte inclui testes para caminhos de erro (NoCoverage)
// e corrige testes fracos (Arrays ordenados).
describe("Suíte de Testes Fortalecida para 50 Operações Aritméticas", () => {
  // === Testes para o Bloco 1 (1-10) ===
  test("1. deve somar dois números positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });
  test("2. deve subtrair dois números positivos", () => {
    expect(subtracao(5, 2)).toBe(3);
  });
  test("3. deve multiplicar dois números positivos", () => {
    expect(multiplicacao(3, 4)).toBe(12);
  });

  test("4. deve dividir e lançar erro para divisão por zero", () => {
    expect(divisao(10, 2)).toBe(5);
    // TESTE CORRIGIDO: Verifica a mensagem de erro específica (Mata Mutante #10)
    expect(() => divisao(5, 0)).toThrow("Divisão por zero não é permitida.");
  });

  test("5. deve calcular a potência com expoente positivo", () => {
    expect(potencia(2, 3)).toBe(8);
  });
  test("6. deve calcular a raiz quadrada de um quadrado perfeito", () => {
    expect(raizQuadrada(16)).toBe(4);
  });

  // TESTE ADICIONADO: Testa o caso de borda 'n = 0' (Mata Mutantes #15, #16)
  test("6b. deve calcular a raiz quadrada de 0", () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #18 - NoCoverage)
  test("6c. deve lançar erro para raiz de número negativo", () => {
    expect(() => raizQuadrada(-1)).toThrow(
      "Não é possível calcular a raiz quadrada de um número negativo."
    );
  });

  test("7. deve retornar o resto da divisão", () => {
    expect(restoDivisao(10, 3)).toBe(1);
  });
  test("8. deve calcular o fatorial de um número maior que 1", () => {
    expect(fatorial(4)).toBe(24);
  });

  // TESTES ADICIONADOS: Testa casos de borda 0 e 1 (Mata Mutantes #28, #29, #30, #32)
  test("8b. deve calcular o fatorial de 0", () => {
    expect(fatorial(0)).toBe(1);
  });
  test("8c. deve calcular o fatorial de 1", () => {
    expect(fatorial(1)).toBe(1);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #26 - NoCoverage)
  test("8d. deve lançar erro para fatorial de número negativo", () => {
    expect(() => fatorial(-1)).toThrow(
      "Fatorial não é definido para números negativos."
    );
  });

  test("9. deve calcular a média de um array com múltiplos elementos", () => {
    expect(mediaArray([10, 20, 30])).toBe(20);
  });

  // TESTE ADICIONADO: Testa o caminho do array vazio (Mata Mutante #42)
  test("9b. deve retornar 0 para a média de um array vazio", () => {
    expect(mediaArray([])).toBe(0);
  });

  test("10. deve somar um array com múltiplos elementos", () => {
    expect(somaArray([1, 2, 3])).toBe(6);
  });

  // === Testes para o Bloco 2 (11-20) ===
  test("11. deve encontrar o valor máximo em um array", () => {
    expect(maximoArray([1, 50, 10])).toBe(50);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #52 - NoCoverage)
  test("11b. deve lançar erro ao buscar máximo de array vazio", () => {
    expect(() => maximoArray([])).toThrow(
      "Array vazio não possui valor máximo."
    );
  });

  test("12. deve encontrar o valor mínimo em um array", () => {
    expect(minimoArray([10, 2, 100])).toBe(2);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #58 - NoCoverage)
  test("12b. deve lançar erro ao buscar mínimo de array vazio", () => {
    expect(() => minimoArray([])).toThrow(
      "Array vazio não possui valor mínimo."
    );
  });

  test("13. deve retornar o valor absoluto de um número negativo", () => {
    expect(valorAbsoluto(-5)).toBe(5);
  });
  test("14. deve arredondar um número para cima", () => {
    expect(arredondar(9.8)).toBe(10);
  });
  test("15. deve retornar true para um número par", () => {
    expect(isPar(100)).toBe(true);
  });
  test("16. deve retornar true para um número ímpar", () => {
    expect(isImpar(7)).toBe(true);
  });
  test("17. deve calcular uma porcentagem simples", () => {
    expect(calcularPorcentagem(50, 200)).toBe(100);
  });
  test("18. deve aumentar um valor em uma porcentagem", () => {
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
  });
  test("19. deve diminuir um valor em uma porcentagem", () => {
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
  });
  test("20. deve inverter o sinal de um número positivo", () => {
    expect(inverterSinal(42)).toBe(-42);
  });

  // === Testes para o Bloco 3 (21-30) ===
  test("21. deve calcular o seno de 0", () => {
    expect(seno(0)).toBe(0);
  });
  test("22. deve calcular o cosseno de 0", () => {
    expect(cosseno(0)).toBe(1);
  });
  test("23. deve calcular a tangente de 0", () => {
    expect(tangente(0)).toBe(0);
  });
  test("24. deve calcular o logaritmo natural de Euler", () => {
    expect(logaritmoNatural(Math.E)).toBe(1);
  });
  test("25. deve calcular o logaritmo na base 10", () => {
    expect(logaritmoBase10(100)).toBe(2);
  });
  test("26. deve arredondar para baixo", () => {
    expect(arredondarParaBaixo(5.9)).toBe(5);
  });
  test("27. deve arredondar para cima", () => {
    expect(arredondarParaCima(5.1)).toBe(6);
  });
  test("28. deve calcular a hipotenusa de um triângulo retângulo", () => {
    expect(hipotenusa(3, 4)).toBe(5);
  });
  test("29. deve converter graus para radianos", () => {
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
  });
  test("30. deve converter radianos para graus", () => {
    expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
  });

  // === Testes para o Bloco 4 (31-40) ===
  test("31. deve calcular o MDC de dois números", () => {
    expect(mdc(10, 5)).toBe(5);
  });
  test("32. deve calcular o MMC de dois números", () => {
    expect(mmc(10, 5)).toBe(10);
  });

  test("33. deve verificar que um número é primo", () => {
    expect(isPrimo(7)).toBe(true);
  });

  // TESTES ADICIONADOS: Testa casos de borda e não-primos (Mata Mutantes #110, #111, #112, #114, #116, #118, #120, #122)
  test("33b. deve verificar que 1 não é primo", () => {
    expect(isPrimo(1)).toBe(false);
  });
  test("33c. deve verificar que 0 não é primo", () => {
    expect(isPrimo(0)).toBe(false);
  });
  test("33d. deve verificar que 4 não é primo", () => {
    expect(isPrimo(4)).toBe(false);
  });

  test("34. deve calcular o 10º termo de Fibonacci", () => {
    expect(fibonacci(10)).toBe(55);
  });
  test("35. deve calcular o produto de um array", () => {
    expect(produtoArray([2, 3, 4])).toBe(24);
  });

  test("36. deve manter um valor dentro de um intervalo (clamp)", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  // TESTES ADICIONADOS: Testa os limites (Mata Mutantes #145, #146)
  test('36b. deve "clampar" um valor abaixo do mínimo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test('36c. deve "clampar" um valor acima do máximo', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test('36d. deve "clampar" um valor igual ao mínimo', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });
  test('36e. deve "clampar" um valor igual ao máximo', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  test("37. deve verificar se um número é divisível por outro", () => {
    expect(isDivisivel(10, 2)).toBe(true);
  });

  // TESTE ADICIONADO: Testa o caso não-divisível (Mata Mutante #149)
  test("37b. deve verificar se um número não é divisível por outro", () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  test("38. deve converter Celsius para Fahrenheit", () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
  });

  // TESTE ADICIONADO: Testa outro valor (Mata Mutantes #155, #156)
  test("38b. deve converter 100 Celsius para Fahrenheit", () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });

  test("39. deve converter Fahrenheit para Celsius", () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
  });

  // TESTE ADICIONADO: Testa outro valor (Mata Mutantes #158, #159)
  test("39b. deve converter 212 Fahrenheit para Celsius", () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  test("40. deve calcular o inverso de um número", () => {
    expect(inverso(4)).toBe(0.25);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #165 - NoCoverage)
  test("40b. deve lançar erro ao inverter zero", () => {
    expect(() => inverso(0)).toThrow("Não é possível inverter o número zero.");
  });

  // === Testes para o Bloco 5 (41-50) ===
  test("41. deve calcular a área de um círculo", () => {
    expect(areaCirculo(10)).toBeCloseTo(314.159);
  });
  test("42. deve calcular a área de um retângulo", () => {
    expect(areaRetangulo(5, 4)).toBe(20);
  });
  test("43. deve calcular o perímetro de um retângulo", () => {
    expect(perimetroRetangulo(5, 4)).toBe(18);
  });

  test("44. deve verificar se um número é maior que outro", () => {
    expect(isMaiorQue(10, 5)).toBe(true);
  });

  // TESTE ADICIONADO: Testa o caso de igualdade (Mata Mutante #177)
  test("44b. deve retornar false se os números são iguais em isMaiorQue", () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  test("45. deve verificar se um número é menor que outro", () => {
    expect(isMenorQue(5, 10)).toBe(true);
  });

  // TESTE ADICIONADO: Testa o caso de igualdade (Mata Mutante #182)
  test("45b. deve retornar false se os números são iguais em isMenorQue", () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  test("46. deve verificar se dois números são iguais", () => {
    expect(isEqual(7, 7)).toBe(true);
  });

  // TESTE ADICIONADO: Testa o caso falso (Mata Mutantes #185, #187)
  test("46b. deve verificar se dois números são diferentes", () => {
    expect(isEqual(7, 8)).toBe(false);
  });

  // TESTE CORRIGIDO: Usa array desordenado (Mata Mutantes #193, #195, #196)
  test("47. deve calcular a mediana de um array ímpar e desordenado", () => {
    expect(medianaArray([5, 1, 3, 4, 2])).toBe(3);
  });

  // TESTE CORRIGIDO: Usa array desordenado (Mata Mutantes #193, #195, #196)
  test("47b. deve calcular a mediana de um array par e desordenado", () => {
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
  });

  // TESTE ADICIONADO: Testa o caminho de erro (Mata Mutante #192 - NoCoverage)
  test("47c. deve lançar erro ao calcular mediana de array vazio", () => {
    expect(() => medianaArray([])).toThrow("Array vazio não possui mediana.");
  });

  test("48. deve calcular o dobro de um número", () => {
    expect(dobro(10)).toBe(20);
  });
  test("49. deve calcular o triplo de um número", () => {
    expect(triplo(10)).toBe(30);
  });
  test("50. deve calcular a metade de um número", () => {
    expect(metade(20)).toBe(10);
  });
});
