const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const repiceId = card.getAttribute('id');
        const recipeName = card.querySelector('h3').innerHTML;
        const recipeChef = card.querySelector('p').innerHTML;

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `assets/${repiceId}.png`;
        modalOverlay.querySelector('img').alt = repiceId;
        modalOverlay.querySelector('h3').innerHTML = recipeName;
        modalOverlay.querySelector('p').innerHTML = recipeChef;
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector('iframe').src = "";
})