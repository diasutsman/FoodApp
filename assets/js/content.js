const foodData = [
    {
        name: 'Rendang',
        desc: 'Rendang is often described as a rich dish of meat — most commonly beef (rendang daging)',
        img: './assets/image/rendang.webp'
    },
    {
        name: 'Nasi Goreng',
        desc: 'Nasi goreng is often referred to as the Indonesian version of fried rice. Although it is considered to be the national dish of Indonesia',
        img: './assets/image/nasgor.webp'
    },
    {
        name: 'Gudeg',
        desc: 'The main ingredient of Gudeg is young unripe jackfruit, known locally as gori',
        img: './assets/image/gudeg.webp',
    },
    {
        name: 'Ayam Goreng',
        desc: 'Ayam goreng is an Indonesian and Malaysian dish consisting of chicken deep fried in oil',
        img: './assets/image/ayam-goreng.webp'
    },
    {
        name: 'Omelette',
        desc: `An omelet is a dish you might order for breakfast or brunch`,
        img: './assets/image/omelet.webp'
    },
    {
        name: 'Burger',
        desc: 'A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll',
        img: './assets/image/burger.webp',
    },
]

const foodList = document.getElementById('foodList')
foodList.innerHTML = ''
foodData.forEach(food => {
    foodList.innerHTML += `
    <div class="food-item card">
        <img src="${food.img}" alt="${food.name}">
        <h3>${food.name}</h3>
        <p>${food.desc}</p>
    </div>
    `
})