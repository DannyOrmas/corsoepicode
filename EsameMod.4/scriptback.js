const API = "https://striveschool-api.herokuapp.com/api/product/";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VkNDc5YjFkNDM2ZTAwMTVkYTI2YzIiLCJpYXQiOjE3NDM2MDM2MTEsImV4cCI6MTc0NDgxMzIxMX0.9dUK80nTEVmP2fgGG058FgkLhbgNKFnlLwCz8llbR5A";

const nameInput = document.getElementById('name-product')
const descriptionInput = document.getElementById('description-product')
const brandInput = document.getElementById('brand-product')
const imgInput = document.getElementById('img-product')
const priceInput = document.getElementById('price-product')
const addBtn = document.getElementById('add-btn')
const tbody = document.getElementById('table-body')
const editModal = document.getElementById('edit-modal')
const editForm = document.getElementById('edit-form')

const createProduct = async (product) => {
    try {
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        })
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}
addBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const payload = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl: imgInput.value,
        price: Number(priceInput.value)
    }
    await createProduct(payload)
        .then(res => console.log(res))
})

const generateTableRow = async (product) => {
    const tr = document.createElement('tr')
    const tdName = document.createElement('td')
    const tdDescription = document.createElement('td')
    const tdBrand = document.createElement('td')
    const tdImgUrl = document.createElement('td')
    const tdPrice = document.createElement('td')
    const tdEdit = document.createElement('td')
    const tdDelete = document.createElement('td')

    tdName.innerText = product.name
    tdDescription.innerText = product.description
    tdBrand.innerText = product.brand
    tdImgUrl.innerText = product.imageUrl.slice(0, 5)
    tdPrice.innerText = product.price
    const editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'btn btn-info')
    editBtn.setAttribute('data-product-id', product._id)
    editBtn.setAttribute('type', 'button')
    editBtn.setAttribute('data-bs-toggle', 'modal')
    editBtn.setAttribute('data-bs-target', '#edit-modal')
    editBtn.innerText = 'Edit'
    tdEdit.appendChild(editBtn)
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn btn-danger')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', () => deleteProduct(product._id))
    tdDelete.appendChild(deleteBtn)
    tr.append(tdName, tdDescription, tdBrand, tdImgUrl, tdPrice, tdEdit, tdDelete)
    tbody.appendChild(tr)

}

const getAllProducts = async () => {
    try {
        const response = await fetch(API, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}

getAllProducts()
    .then(res => res.forEach(product => {
        generateTableRow(product)
    }))

const deleteProduct = async (productid) => {
    try {
        const response = await fetch(`${API}${productid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })

        return await response.json()

    } catch (error) {
        console.log(error)
    }
}

const singleProduct = async (productid) => {
    try {
        const response = await fetch(`${API}${productid}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}

editModal.addEventListener('show.bs.modal', async (event) => {
    const button = event.relatedTarget
    const productid = button.getAttribute('data-product-id')
    const productData = await singleProduct(productid)
    if (productData) {
        const inputs = editForm.querySelectorAll('input')
        inputs.forEach(input => {
            const inputName = input.name
            input.value = productData[inputName]
        })
    }
    editForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const inputs = editForm.querySelectorAll('input')
        const payload = {}
        inputs.forEach(input => {
            const inputName = input.name
            payload[input.name] = input.value
        })

        await editProduct(productid, payload)

    })

})

const editProduct = async (productid, product) => {
    try {
        const response = await fetch(`${API}/${productid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        })
        return await response.json()

    } catch (error) {
        console.log(error)
    }
}
