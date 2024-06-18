document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Wooden Car',
            price: 29.99,
            image: 'images/car1.jpg',
            description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
            rating: '⭐⭐⭐⭐⭐',


        },
        {
            id: 2,
            name: 'Wooden Airplane',
            price: 39.99,
            image: 'images/plane1.jpg',
            description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
            rating: '⭐⭐⭐⭐',

        },
        {
            id: 3,
            name: 'Wooden Train Set',
            price: 49.99,
            image: 'images/train2.jpg',
            description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.',
            rating: '⭐⭐⭐⭐⭐',
        },
        {
            id: 4,
            name: 'Wooden Boat',
            price: 39.99,
            image: 'images/boat2.jpg',
            description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
            rating: '⭐⭐⭐⭐⭐',

        },
        {
            id: 5,
            name: 'Wooden Block Set ',
            price: 29.99,
            image: 'images/block2.jpg',
            description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).',
            rating: '⭐⭐⭐⭐⭐',

        },
        {
            id: 6,
            name: 'Product 6',
            price: 19.99,
            image: '',
            description: 'COMING SOON',
            rating: '',

        },
    ];
    const productCarousel = document.getElementById('product-carousel');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <p>${product.rating}</p>

            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productCarousel.appendChild(productCard);
    });
});

function addToCart(productId) {
    console.log(`Product ${productId} added to cart!`);
    alert(`Product ${productId} added to cart!`);
}

let currentPosition = 0;

function moveCarousel(direction) {
    const carousel = document.getElementById('product-carousel');
    const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // card width + gap
    const visibleCards = 3;
    const totalCards = carousel.children.length;
    const maxPosition = totalCards - visibleCards;

    currentPosition += direction;

    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition > maxPosition) {
        currentPosition = maxPosition;
    }

    const newTransform = -currentPosition * cardWidth;
    carousel.style.transform = `translateX(${newTransform}px)`;
}


// - add age
// - add background
// -make size responsive 