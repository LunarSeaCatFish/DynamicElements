class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
window.onload = function () {
    let submitButton = document.querySelector('button[type=submit]');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let p = getProduct();
        displayProduct(p);
    });
};
function displayProduct(prod) {
    let displayDiv = document.querySelector("#productDisplay");
    displayDiv.innerHTML +=
        `
        <div class="col-sm-12 col-md-6 col-lg-4 mx-auto mb-3">
            <div class="card" style="width: 18rem;">
                <img src="https://placehold.co/250" class="card-img-top" alt="Just a placeholder image">
                <div class="card-body">
                    <h5 class="card-title">${prod.title}</h5>
                    <p class="card-text">This product is being sold for ${prod.price}</p>
                </div>
            </div>
        </div>
        `;
}
function getProduct() {
    const productTitleTextBox = document.querySelector("#productTitle");
    let title = productTitleTextBox.value;
    const productPriceTextBox = document.querySelector("#productPrice");
    let price = parseFloat(productPriceTextBox.value);
    let p = new Product(title, price);
    return p;
}
