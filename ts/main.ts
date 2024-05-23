// /** Represents an individual product for sale */
class Product {
    /** The name of the product */
    title: string;

    /** The retail price of the product */
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

window.onload = function () {
    // Declare a variable to hold the submit button element
    let submitButton: HTMLButtonElement = document.querySelector('button[type=submit]');
    // Add a click event listener to the submit button
    submitButton.addEventListener('click', (event: Event) => {
        // Prevent the default form submission action
        event.preventDefault();

        // Get Product from the form
        let p = getProduct();

        displayProduct(p);
    });
}

function displayProduct(prod:Product) {
    // Get the product display div
    let displayDiv = document.querySelector("#productDisplay") as HTMLDivElement;
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
    const productTitleTextBox = <HTMLInputElement>document.querySelector("#productTitle");
    let title: string = productTitleTextBox.value;

    const productPriceTextBox = <HTMLInputElement>document.querySelector("#productPrice");
    let price: number = parseFloat(productPriceTextBox.value);

    let p = new Product(title, price);
    return p;
}

