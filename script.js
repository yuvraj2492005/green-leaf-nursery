document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GREEN LEAF PLANTS
    ===================================================== */

    const plants = [

        {
            id: 1,
            name: "Snake Plant",
            category: "Indoor Plants",
            price: 299,
            oldPrice: 399,
            image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=80",
            description: "Easy-care indoor plant suitable for homes and offices."
        },

        {
            id: 2,
            name: "Money Plant",
            category: "Indoor Plants",
            price: 199,
            oldPrice: 299,
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
            description: "Beautiful green plant that adds freshness to your space."
        },

        {
            id: 3,
            name: "Peace Lily",
            category: "Indoor Plants",
            price: 349,
            oldPrice: 449,
            image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
            description: "Elegant flowering indoor plant for homes and offices."
        },

        {
            id: 4,
            name: "Areca Palm",
            category: "Indoor Plants",
            price: 499,
            oldPrice: 599,
            image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
            description: "Popular tropical palm perfect for bright indoor spaces."
        },

        {
            id: 5,
            name: "Rose Plant",
            category: "Flower Plants",
            price: 249,
            oldPrice: 349,
            image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800&q=80",
            description: "Beautiful rose plant with attractive colourful flowers."
        },

        {
            id: 6,
            name: "Jasmine Plant",
            category: "Flower Plants",
            price: 229,
            oldPrice: 299,
            image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
            description: "Fragrant flowering plant for your balcony or garden."
        },

        {
            id: 7,
            name: "Hibiscus Plant",
            category: "Flower Plants",
            price: 199,
            oldPrice: 279,
            image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80",
            description: "Colourful flowering plant suitable for outdoor gardens."
        },

        {
            id: 8,
            name: "Marigold Plant",
            category: "Flower Plants",
            price: 149,
            oldPrice: 199,
            image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80",
            description: "Bright flowering plant that brings colour to your garden."
        },

        {
            id: 9,
            name: "Mango Plant",
            category: "Fruit Plants",
            price: 399,
            oldPrice: 499,
            image: "https://images.unsplash.com/photo-1605027990121-cbae9c3c9f31?auto=format&fit=crop&w=800&q=80",
            description: "Healthy mango plant suitable for outdoor gardens."
        },

        {
            id: 10,
            name: "Guava Plant",
            category: "Fruit Plants",
            price: 299,
            oldPrice: 399,
            image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=80",
            description: "Easy-to-grow fruit plant for home gardens."
        },

        {
            id: 11,
            name: "Lemon Plant",
            category: "Fruit Plants",
            price: 249,
            oldPrice: 349,
            image: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80",
            description: "Compact citrus plant perfect for home gardens."
        },

        {
            id: 12,
            name: "Tulsi Plant",
            category: "Outdoor Plants",
            price: 99,
            oldPrice: 149,
            image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=800&q=80",
            description: "Traditional and useful plant for your home."
        }

    ];


    /* =====================================================
       CART
    ===================================================== */

    let cart = JSON.parse(
        localStorage.getItem("greenLeafCart")
    ) || [];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const plantsContainer =
        document.getElementById("plantsContainer");

    const homePlants =
        document.getElementById("homePlants");

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const plantSearch =
        document.getElementById("plantSearch");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const sortPlants =
        document.getElementById("sortPlants");

    const navbar =
        document.getElementById("navbar");

    const menuBtn =
        document.getElementById("menuBtn");

    const cartSidebar =
        document.getElementById("cartSidebar");

    const cartOverlay =
        document.getElementById("cartOverlay");


    /* =====================================================
       PRICE FORMAT
    ===================================================== */

    function formatPrice(price) {

        return "₹" + Number(price).toLocaleString("en-IN");

    }


    /* =====================================================
       RENDER PLANTS
    ===================================================== */

    function renderPlants(list, container) {

        if (!container) return;


        if (list.length === 0) {

            container.innerHTML = `

                <div class="no-plants">

                    <i class="fa-solid fa-seedling"></i>

                    <h3>No plants found</h3>

                    <p>
                        Try another search or category.
                    </p>

                </div>

            `;

            return;

        }


        container.innerHTML = list.map(plant => `

            <div class="plant-card">

                <div class="plant-image">

                    <img
                        src="${plant.image}"
                        alt="${plant.name}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80';"
                    >

                    <span class="plant-category">
                        ${plant.category}
                    </span>

                </div>


                <div class="plant-info">

                    <h3>
                        ${plant.name}
                    </h3>

                    <p>
                        ${plant.description}
                    </p>


                    <div class="plant-price">

                        <span class="price">
                            ${formatPrice(plant.price)}
                        </span>

                        <span class="old-price">
                            ${formatPrice(plant.oldPrice)}
                        </span>

                    </div>


                    <button
                        type="button"
                        class="btn btn-primary"
                        onclick="addToCart(${plant.id})"
                    >

                        <i class="fa-solid fa-cart-plus"></i>

                        Add to Cart

                    </button>

                </div>

            </div>

        `).join("");

    }


    /* =====================================================
       HOME PAGE PRODUCTS
    ===================================================== */

    if (homePlants) {

        renderPlants(
            plants.slice(0, 4),
            homePlants
        );

    }


    /* =====================================================
       SEARCH + CATEGORY + SORT
    ===================================================== */

    function updatePlants() {

        if (!plantsContainer) return;


        let result = [...plants];


        const search = plantSearch
            ? plantSearch.value.toLowerCase().trim()
            : "";


        if (search) {

            result = result.filter(plant =>

                plant.name
                    .toLowerCase()
                    .includes(search)

                ||

                plant.category
                    .toLowerCase()
                    .includes(search)

                ||

                plant.description
                    .toLowerCase()
                    .includes(search)

            );

        }


        const category = categoryFilter
            ? categoryFilter.value
            : "all";


        if (category !== "all") {

            result = result.filter(
                plant => plant.category === category
            );

        }


        const sort = sortPlants
            ? sortPlants.value
            : "default";


        if (sort === "low") {

            result.sort(
                (a, b) => a.price - b.price
            );

        }


        if (sort === "high") {

            result.sort(
                (a, b) => b.price - a.price
            );

        }


        if (sort === "name") {

            result.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );

        }


        renderPlants(
            result,
            plantsContainer
        );

    }


    if (plantsContainer) {

        updatePlants();

    }


    if (plantSearch) {

        plantSearch.addEventListener(
            "input",
            updatePlants
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            updatePlants
        );

    }


    if (sortPlants) {

        sortPlants.addEventListener(
            "change",
            updatePlants
        );

    }


    /* =====================================================
       ADD TO CART
    ===================================================== */

    window.addToCart = function(id) {

        const plant =
            plants.find(
                item => item.id === id
            );


        if (!plant) return;


        const existing =
            cart.find(
                item => item.id === id
            );


        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                ...plant,

                quantity: 1

            });

        }


        saveCart();

        updateCartUI();

        showNotification(
            plant.name + " added to cart"
        );

    };


    /* =====================================================
       REMOVE FROM CART
    ===================================================== */

    window.removeFromCart = function(id) {

        cart = cart.filter(
            item => item.id !== id
        );


        saveCart();

        updateCartUI();

    };


    /* =====================================================
       CHANGE QUANTITY
    ===================================================== */

    window.changeQuantity = function(
        id,
        change
    ) {

        const item =
            cart.find(
                product => product.id === id
            );


        if (!item) return;


        item.quantity += change;


        if (item.quantity <= 0) {

            cart = cart.filter(
                product => product.id !== id
            );

        }


        saveCart();

        updateCartUI();

    };


    /* =====================================================
       SAVE CART
    ===================================================== */

    function saveCart() {

        localStorage.setItem(
            "greenLeafCart",
            JSON.stringify(cart)
        );

    }


    /* =====================================================
       UPDATE CART
    ===================================================== */

    function updateCartUI() {

        const quantity =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );


        if (cartCount) {

            cartCount.textContent =
                quantity;

        }


        if (!cartItems) return;


        if (cart.length === 0) {

            cartItems.innerHTML = `

                <div class="cart-empty">

                    <i class="fa-solid fa-cart-shopping"></i>

                    <h3>
                        Your cart is empty
                    </h3>

                    <p>
                        Add some beautiful plants.
                    </p>

                </div>

            `;


            if (cartTotal) {

                cartTotal.textContent =
                    "₹0";

            }


            return;

        }


        cartItems.innerHTML = cart.map(item => `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80';"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                    </p>


                    <div class="quantity-controls">

                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>


                        <strong>
                            ${item.quantity}
                        </strong>


                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>


                        <button
                            type="button"
                            onclick="removeFromCart(${item.id})"
                            class="delete-btn"
                            title="Remove"
                        >

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                </div>

            </div>

        `).join("");


        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.price *
                    item.quantity,
                0
            );


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(total);

        }

    }


    /* =====================================================
       OPEN CART
    ===================================================== */

    window.openCart = function() {

        if (cartSidebar) {

            cartSidebar.classList.add("active");

        }


        if (cartOverlay) {

            cartOverlay.classList.add("active");

        }


        document.body.classList.add(
            "cart-open"
        );

    };


    /* =====================================================
       CLOSE CART
    ===================================================== */

    window.closeCart = function() {

        if (cartSidebar) {

            cartSidebar.classList.remove("active");

        }


        if (cartOverlay) {

            cartOverlay.classList.remove("active");

        }


        document.body.classList.remove(
            "cart-open"
        );

    };


    /* =====================================================
       WHATSAPP CHECKOUT
    ===================================================== */

    window.checkout = function() {

        if (cart.length === 0) {

            alert(
                "Your cart is empty."
            );

            return;

        }


        let message =
            "GREEN LEAF NURSERY\n\n";


        message +=
            "Hello, I want to order:\n\n";


        let total = 0;


        cart.forEach(item => {

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            message +=
                `${item.name}\n`;

            message +=
                `Quantity: ${item.quantity}\n`;

            message +=
                `Price: ${formatPrice(itemTotal)}\n\n`;

        });


        message +=
            `Total: ${formatPrice(total)}\n\n`;


        message +=
            "Delivery Location: Nashik";


        /*
           WhatsApp Number
           इथे तुमचा actual number टाकू शकता.
           Country code 91 सोबत.
        */

        const whatsappNumber =
            "9272122472";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );

    };


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuBtn && navbar) {

        menuBtn.addEventListener(
            "click",
            () => {

                navbar.classList.toggle(
                    "active"
                );

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    if (navbar) {

        const navLinks =
            navbar.querySelectorAll("a");


        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navbar.classList.remove(
                        "active"
                    );

                }
            );

        });

    }


    /* =====================================================
       NOTIFICATION
    ===================================================== */

    function showNotification(message) {

        const notification =
            document.createElement("div");


        notification.className =
            "green-notification";


        notification.innerHTML = `

            <i class="fa-solid fa-circle-check"></i>

            <span>
                ${message}
            </span>

        `;


        notification.style.cssText = `

            position:fixed;

            top:90px;

            right:20px;

            z-index:99999;

            display:flex;

            align-items:center;

            gap:10px;

            background:#2e7d32;

            color:#fff;

            padding:14px 20px;

            border-radius:10px;

            font-size:14px;

            font-weight:600;

            box-shadow:
                0 8px 30px
                rgba(0,0,0,.20);

            animation:
                slideIn .3s ease;

        `;


        document.body.appendChild(
            notification
        );


        setTimeout(() => {

            notification.style.opacity =
                "0";

            notification.style.transform =
                "translateX(30px)";

            notification.style.transition =
                "all .3s ease";


            setTimeout(() => {

                notification.remove();

            }, 300);

        }, 2000);

    }


    /* =====================================================
       ESC KEY CLOSE CART
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

            }

        }
    );


    /* =====================================================
       INITIAL CART LOAD
    ===================================================== */

    updateCartUI();

});