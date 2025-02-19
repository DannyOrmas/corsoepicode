const cardContainer = document.querySelector(".card-container");
const cardsData = [
    {
        img: "https://images.pexels.com/photos/5737242/pexels-photo-5737242.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Food"
    },
    {
        img: "https://images.pexels.com/photos/5737242/pexels-photo-5737242.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Food"
    },
    {
        img: "https://images.pexels.com/photos/5737242/pexels-photo-5737242.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Food"
    },
    {
        img: "https://images.pexels.com/photos/5737242/pexels-photo-5737242.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Food"
    },
    {
        img: "https://images.pexels.com/photos/5737242/pexels-photo-5737242.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Food"
    },
]

const generateCard = (card) => {
    const cardCol = document.createElement("div");
    cardCol.classList.add("col-6" , "col-md-4", "col-lg-3", "p-3");

    const cardContent = document.createElement("div");
    cardContent.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-center", "gap-2");

    const img = document.createElement("img");
    img.classList.add("category-img");
    img.src = card.img;

    const p = document.createElement("p");
    p.innerText = card.title;

    cardContent.appendChild(img);
    cardContent.appendChild(p);

    cardCol.appendChild(cardContent);

    return cardCol;
}

cardsData.forEach(card => {
    const newCard = generateCard(card);
    cardContainer.appendChild(newCard);
})