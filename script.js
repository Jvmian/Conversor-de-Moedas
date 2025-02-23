async function converter() {
    const valor = document.getElementById("valor").value;
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    
    if (!valor) {
        alert("Por favor, insira um valor.");
        return;
    }
    
    const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const taxa = data.rates[moedaDestino];
        const resultado = (valor * taxa).toFixed(2);
        document.getElementById("resultado").innerText = `${valor} ${moedaOrigem} = ${resultado} ${moedaDestino}`;
    } catch (error) {
        alert("Erro ao obter a taxa de câmbio. Tente novamente mais tarde.");
    }
}

