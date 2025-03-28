let zIndexCounter = 1;

function bringToFront(cardId) {
    let card = document.getElementById(cardId);
    zIndexCounter++;
    card.style.zIndex = zIndexCounter;
    card.style.transform = "scale(1.1)";
    
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 500);
}
