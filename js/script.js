const apiURL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let date = [];

async function fetchCards() {
    return await fetch(apiURL)
        .then(async (resposta) => await resposta.json())
}

function renderCards(cards) {
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card) {
    const div = document.createElement("div");
//    div.style.width ="25rem";
 //   div.style.margin = "2rem";
    div.name = "cards";
    div.innerHTML = `
    <div class="row">
        <div class="col-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" 
        height="225" src="${card.photo.toString()}" alt="Card image Top">
            <div class="card-body">
                <h5 class="card-title">${card.property_type}</h5>
                <p class="card-text">${card.name}</p>
                <a href="#" class="btn btn-primary">R$ ${card.price},00</a>
            </div>
        </div>
    </div>
    `;
    cardsContainer.appendChild(div);
}

async function main(){
    data = await fetchCards();
    if(data[0]){
        renderCards(data);
    }
}

main();