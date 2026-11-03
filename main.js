import products from './data/data-minifed.json' with { type: 'json' };

// Set the number of products we want to display, or less if there aren't enough products
const numberOfProductsToDisplay = (products.length>=20)? 20 : products.length;
console.log(products.length, numberOfProductsToDisplay);

/* -= TailwindCSS Stylings =- */
/*
<li class="bg-gray-700 w-50 p-3 rounded-lg border border-white">
    <img src="" alt="" class="bg-white rounded-md border border-white">
    <div class="grid grid-cols-4 mt-2 p-1 rounded-md border border-white">
        <p class="col-span-3 row-span-1">Title</p>
        <p class="col-span-3 row-start-2">$pri.ce</p>
        <p class="row-span-2 text-center flex justify-center items-center text-gray-200 bg-gray-500 border border-blue-300 rounded-md">+</p>
    </div>
</li>
*/
const liStyles = ["bg-gray-700",
                        "w-50",
                        "p-3",
                        "rounded-lg",
                        "border",
                        "border-white"];
const imgStyles = ["bg-white",
                        "rounded-md",
                        "border",
                        "border-white"];

const divStyles = ["grid",
                        "grid-cols-4",
                        "mt-2",
                        "p-1",
                        "rounded-md",
                        "border",
                        "border-white"];

const titleStyles = ["col-span-3",
                        "row-span-1"];

const priceStyles = ["col-span-3",
                        "row-start-2"];

const buttonStyles = ["row-span-2",
                            "text-center",
                            "flex",
                            "justify-center",
                            "items-center",
                            "text-gray-200",
                            "bg-gray-500",
                            "border",
                            "border-blue-300",
                            "rounded-md"];



// Get node to insert under
const myNode = document.querySelector("ul#productShelf");

// Loop through products (up to specified amount)
for(let i = 0; i < numberOfProductsToDisplay; i++){
    myNode.appendChild(createCard(products[i].thumbnail, products[i].title, products[i].price));
}

function createCard(imgSource, title, price){
    const li = document.createElement("li");
    for(let c of liStyles){ li.classList.add(c); }







/*                                                                      !!!!!!
Code untouched past this point.                                         !!!!!!
Changes still need to made for assignment 1                             !!!!!!
*/







    li.appendChild(createCardImage(imgSource));

    const div = createCardBody();
    div.appendChild(createCardTitle(title));
    div.appendChild(createCardPrice(price));

    li.appendChild(div);

    return li;
}

function createCardImage(source){
    const img = document.createElement("img");
    img.classList.add("product-card__image");
    img.src = source;

    return img;
}

function createCardBody(){
    const div = document.createElement("div");
    div.classList.add("product-card__body");

    return div;
}

function createCardTitle(text){
    const h3 = document.createElement("h3");
    h3.classList.add("product-card__title");
    h3.textContent = text;

    return h3;
}

function createCardPrice(price){
    const p = document.createElement("p");
    p.classList.add("product-card__price");
    p.textContent = price;

    return p;
}