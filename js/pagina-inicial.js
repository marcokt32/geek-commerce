const starWars = ["./assets/img/produtos/star wars 1.png","./assets/img/produtos/star wars 2.png","./assets/img/produtos/star wars 3.png","./assets/img/produtos/star wars 4.png","./assets/img/produtos/star wars 5.png","./assets/img/produtos/star wars 6.png"]
const consoles = ["./assets/img/produtos/consoles 1.png","./assets/img/produtos/consoles 2.png","./assets/img/produtos/consoles 3.png","./assets/img/produtos/consoles 4.png","./assets/img/produtos/consoles 5.png","./assets/img/produtos/consoles 6.png"]
const diversos = ["./assets/img/produtos/diversos 1.png","./assets/img/produtos/diversos 2.png","./assets/img/produtos/diversos 3.png","./assets/img/produtos/diversos 4.png","./assets/img/produtos/diversos 5.png","./assets/img/produtos/diversos 6.png"]


const criaProdutosStar = () => {

    const card = document.querySelector("[data-products-starwars]")

    for(i = 0;i < starWars.length; i++){
        const conteudo = `
        <div class="produto starWars__${[i+1]}">
            <img src="${starWars[i]}" alt="foto do produto" class="produto__foto">
            <p class="produto__titulo">Produto XYZ</p>
            <p class="produto__preço">R$60,00</p>
            <a href="" class="produto__link">Ver produto</a>
        </div>
        `
        card.innerHTML += conteudo
    }
}

const criaProdutosConsoles = () => {

    const card = document.querySelector("[data-products-consoles]")

    for(i = 0;i < consoles.length; i++){
        const conteudo = `
        <div class="produto starWars__${[i+1]}">
            <img src="${consoles[i]}" alt="foto do produto" class="produto__foto">
            <p class="produto__titulo">Produto XYZ</p>
            <p class="produto__preço">R$60,00</p>
            <a href="" class="produto__link">Ver produto</a>
        </div>
        `
        card.innerHTML += conteudo
    }
}

const criaProdutosDiversos = () => {

    const card = document.querySelector("[data-products-diversos]")

    for(i = 0;i < diversos.length; i++){
        const conteudo = `
        <div class="produto starWars__${[i+1]}">
            <img src="${diversos[i]}" alt="foto do produto" class="produto__foto">
            <p class="produto__titulo">Produto XYZ</p>
            <p class="produto__preço">R$60,00</p>
            <a href="" class="produto__link">Ver produto</a>
        </div>
        `
        card.innerHTML += conteudo
    }
}

criaProdutosStar()
criaProdutosConsoles()
criaProdutosDiversos()