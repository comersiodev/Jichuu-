let selectedCard = null;

function selectCard(card){

  // klik 2x = cancel
  if(selectedCard === card){

    card.classList.remove("active");

    selectedCard = null;

    return;
  }

  // reset semua
  document
  .querySelectorAll(".arcCard")
  .forEach(c => {
    c.classList.remove("active");
  });

  // aktifkan card
  card.classList.add("active");

  selectedCard = card;
}

function startArc(event){

  event.stopPropagation();

  alert("STARTING ARC ");
}