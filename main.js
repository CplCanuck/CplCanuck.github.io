import data from './data/data-minifed.json' with { type: 'json' };
const products = data.products

document.addEventListener("DOMContentLoaded", main);

function main(){
    // Set the number of products we want to display, or less if there aren't enough products
    const numberOfProductsToDisplay = (products.length>=20)? 20 : products.length;

    /* -= TailwindCSS Stylings =- */
    /*
   <li class="flex flex-col bg-gray-700 w-50 p-3 rounded-lg border border-white">
        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" class="bg-white rounded-md border border-white">
        <div class="flex mt-2 p-1 rounded-md border border-white grow">
            <div class="flex flex-col grow">
                <p class="font-bold">Title</p>
                <p class="font-thin">$pri.ce</p>
            </div>
            <button class="w-10 h-10 text-gray-200 bg-gray-500 border border-blue-300 rounded-md">+</button>
        </div>
    </li>
    */
    const liStyles = ["flex", "flex-col", "bg-mist-800", "w-50", "p-4", "rounded-xl", "border", "border-mist-700", "shadow-md"];

    const imgStyles = ["bg-neutral-50", "rounded-lg", "overflow-hidden", "object-cover"];

    const div1Styles = ["flex", "mt-3", "p-1.5", "rounded-lg", "bg-mist-300", "border", "border-mist-700/50", "grow"];

    const div2Styles = ["flex", "flex-col", "grow", "mr-1"];

    const titleStyles = ["font-semibold", "text-mist-900", "tracking-tight"];

    const priceStyles = ["font-medium", "text-mist-600", "text-sm"];

    const buttonStyles = ["flex-none", "w-10", "h-10", "text-white", "bg-emerald-700", "hover:bg-emerald-600", "active:bg-emerald-800", "transition-colors", "border", "border-emerald-400/30", "rounded-lg", "flex", "items-center", "center", "justify-center"];



    // Get node to insert under
    const productShelf = document.querySelector("ul#productShelf");

    // Loop through products (up to specified amount)
    for(let i = 0; i < numberOfProductsToDisplay; i++){
        productShelf.appendChild(createCard(products[i]));
    }

    function createCard(product){
        const li = document.createElement("li");
        for(let c of liStyles){ li.classList.add(c); }

        li.appendChild(createCard_Image(product.thumbnail));
        li.appendChild(createCard_Div1(product));

        return li;
    }

    function createCard_Image(source){
        const img = document.createElement("img");
        for(let c of imgStyles){ img.classList.add(c); }
        img.src = source;

        return img;
    }

    function createCard_Div1(product){
        const div = document.createElement("div");
        for(let c of div1Styles){ div.classList.add(c); }

        div.appendChild(createCard_Div2(product));
        div.appendChild(createCard_Button("+"));

        return div;
    }

    function createCard_Div2(product){
        const div = document.createElement("div");
        for(let c of div2Styles){ div.classList.add(c); }

        div.appendChild(createCard_Title(product.title));
        div.appendChild(document.createElement("hr"));
        div.appendChild(createCard_Price(product.price));

        return div;
    }

    function createCard_Title(text){
        const p = document.createElement("p");
        for(let c of titleStyles){ p.classList.add(c); }
        p.textContent = text;

        return p;
    }

    function createCard_Price(price){
        const p = document.createElement("p");
        for(let c of priceStyles){ p.classList.add(c); };
        p.textContent = "$" + price;

        return p;
    }

    function createCard_Button(text){
        const btn = document.createElement("button");
        for(let c of buttonStyles){ btn.classList.add(c); }
        btn.textContent = text;
        btn.addEventListener("click", buttonAlert);

        return btn;
    }

    function buttonAlert(){
        alert("Click");
    }
}