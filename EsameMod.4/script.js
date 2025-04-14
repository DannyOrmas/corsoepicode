const API = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VkNDc5YjFkNDM2ZTAwMTVkYTI2YzIiLCJpYXQiOjE3NDM2MDM2MTEsImV4cCI6MTc0NDgxMzIxMX0.9dUK80nTEVmP2fgGG058FgkLhbgNKFnlLwCz8llbR5A" ;
const productsContainer = document.getElementById('products');
const spinner = document.getElementById('spinner')

const showSpinner = () => {
    spinner.classList.remove('hidden');
};

const removeSpinner = () => {
    spinner.classList.add('hidden');
   
};

const generateCard = (product) => {
    const productContainer = document.createElement('div')
    productContainer.setAttribute ('class', 'card') 
    const cardImg = document.createElement('img')
    cardImg.src = product.imageUrl
    cardImg.setAttribute('class', 'card-img-top') 
    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    const title = document.createElement('h5')
    title.innerText = product.name
    const description = document.createElement('p')
    description.setAttribute('class', 'card-text')
    description.innerText = product.description
    const price = document.createElement('h3')
    price.innerText = product.price

    const cardButton = document.createElement('button');
    cardButton.setAttribute('class', 'btn btn-primary fw-bold p-2');
    cardButton.innerText = 'Buy';

    productContainer.appendChild(cardImg)
    productsContainer.appendChild(cardBody)

    productsContainer.appendChild(productContainer,)
    productContainer.append(title, description,price, cardButton, )


}




const getAllProducts = async () => {
    showSpinner();
    try {
        const response = await fetch(API, {
            headers: {
             'Content-Type': 'application/json', 
             'Authorization': `Bearer ${token}`
            }
        })

    const data = await response.json()
    return data
    } catch (error) {
        console.log(error.message)
    } finally {
        removeSpinner();
    }
}

getAllProducts()
.then (products => {
    products.map (product => generateCard(product)) 
})
