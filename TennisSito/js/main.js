const services = [
    {
        id: '01',
        title: 'title 01',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '02',
        title: 'title 02',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '03',
        title: 'title 03',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '04',
        title: 'title 04',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '05',
        title: 'title 05',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '06',
        title: 'title 06',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '07',
        title: 'title 07',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '08',
        title: 'title 08',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
    {
        id: '09',
        title: 'title 09',
        description: 'Lorem ipsum dolor sit amet consecteur..'
    },
];

const servicesContainer = document.querySelector('.services-container')

const createCard = (service) => {
    const serviceCard = document.createElement('div')
    serviceCard.classList.add('card', 'service-card')

    const serviceCardId = document.createElement('h4')
    serviceCardId.classList.add('service-id')
    serviceCardId.innerText = service.id

    const serviceCardTitle = document.createElement('h3')
    serviceCardTitle.classList.add('card-title', 'service-title')
    serviceCardTitle.innerText = service.title

    const serviceCardDescr = document.createElement('p')
    serviceCardDescr.classList.add('card.descr', 'service-descr')
    serviceCardDescr.innerText = service.description

    serviceCard.append(serviceCardId, serviceCardTitle, serviceCardDescr)

    return serviceCard;
};

const displayCards = () => {
  services.forEach(service => {
    const newCard = createCard(service)
   servicesContainer.appendChild(newCard)
  })
}

displayCards();