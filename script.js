
// const url = "https://restcountries.com/v3.1/all";
const productDiv = document.getElementById("all-products");

const url = "products.json";

fetch( url )
.then(function(response) {
    return response.json();
})
.then(function(data) {
console.log(data)
    for(let i=0; i < data.length; i++) {
        productDiv.innerHTML += `
        <div class="col-lg-4 mb-4 mb-lg-4">
                        <div class="single-products shadow-lg">
                            <img src="${data[i].url}" alt="${data[i].brand}" class="w-100 mb-2">
                            <div class="px-4 pb-4">
                                <h5>$<span id="product-price">${data[i].price}</span></h5>
                            <h3>${data[i].brand}</h3>
                            <p>${data[i].name}</p>
                            <button class="btn bdbtn">Add to Cart</button>
                            </div>
                        </div>
                    </div> <!-- end .col-lg-4 -->
        
        `;
    }
})
.catch(function(error) {
    console.log(error)
})


// preloader
window.onload = function() {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("page-loaded");

    setTimeout(function(){
        preloader.style.display = "none"
    }, 500);
    
    
}
