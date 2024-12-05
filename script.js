function seguirHistoria(escolha) {
    let resultado = document.getElementById("resultado");
    
    if (escolha === 'eficiencia') {
      resultado.innerHTML = "Você escolheu a eficiência, mas isso causou impactos negativos para a sociedade...";
    } else if (escolha === 'bemestar') {
      resultado.innerHTML = "Você escolheu o bem-estar humano, e as soluções foram mais lentas, mas a sociedade teve um impacto positivo.";
    } else if (escolha === 'dados') {
      resultado.innerHTML = "Você confiou nos dados, mas percebeu que nem todos os dados eram confiáveis...";
    } else if (escolha === 'intuicao') {
      resultado.innerHTML = "Você confiou na intuição humana, e foi uma escolha arriscada, mas que trouxe uma nova perspectiva.";
    }
  }
  