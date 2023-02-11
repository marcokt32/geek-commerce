const produtos = ["./assets/img/produtos/star wars 1.png","./assets/img/produtos/star wars 2.png","./assets/img/produtos/star wars 3.png","./assets/img/produtos/star wars 4.png","./assets/img/produtos/star wars 5.png","./assets/img/produtos/star wars 6.png","./assets/img/produtos/consoles 1.png","./assets/img/produtos/consoles 2.png","./assets/img/produtos/consoles 3.png","./assets/img/produtos/consoles 4.png","./assets/img/produtos/consoles 5.png","./assets/img/produtos/consoles 6.png","./assets/img/produtos/diversos 1.png","./assets/img/produtos/diversos 2.png","./assets/img/produtos/diversos 3.png","./assets/img/produtos/diversos 4.png","./assets/img/produtos/diversos 5.png","./assets/img/produtos/diversos 6.png"]

const criaProdutos = () => {

    const card = document.querySelector("[data-produtos-grid]")

    for(i = 0;i < produtos.length; i++){
        const conteudo = `
        <div class="produto starWars__${[i+1]}">
            <img src="${produtos[i]}" alt="foto do produto" class="produto__foto">
            <p class="produto__titulo">Produto XYZ</p>
            <p class="produto__preço">R$60,00</p>
            <a href="" class="produto__link">Ver produto</a>
        </div>
        `
        card.innerHTML += conteudo
    }
}

criaProdutos()
