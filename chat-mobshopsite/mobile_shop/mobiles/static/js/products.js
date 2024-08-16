// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/products/') // Assuming this endpoint returns a list of products
//       .then(response => response.json())
//       .then(data => {
//         const productsContainer = document.getElementById('products');
//         productsContainer.innerHTML = ''; // Clear existing content
  
//         data.forEach(product => {
//           const productCard = `
//             <div class="card mb-4" style="width: 18rem;">
//               <img src="${product.image}" class="card-img-top" alt="${product.name}">
//               <div class="card-body">
//                 <h5 class="card-title">${product.name}</h5>
//                 <p class="card-text">${product.description}</p>
//                 <p class="card-text">$${product.price}</p>
//                 <a href="/products/${product.pk}/" class="btn btn-primary">View Details</a>
//               </div>
//             </div>
//           `;
  
//           productsContainer.innerHTML += productCard;
//         });
//       })
//       .catch(error => console.error('Error fetching products:', error));
//   });
  
fetch("/products/")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(products => {
        console.log(products); // Log products to check the data
        let placeholder = document.querySelector("#products");
        placeholder.classList.add("row");

        products.forEach(product => {
            let productFields = product.fields; // Access the fields object

            if (productFields) { // Check if product is defined
                const divCol = document.createElement("div");
                divCol.classList.add("col", "mb-4"); // Div column

                const divCard = document.createElement("div"); // Div Card
                divCard.classList.add("card", "h-100");
                divCard.style.width = "18rem";

                const imageElement = document.createElement("img");
                imageElement.classList.add("card-img-top");
                imageElement.src = `/media/${productFields.image}`;
                imageElement.alt = productFields.name || 'No image'; // Use a default alt text if undefined

                const divCardBody = document.createElement("div");
                divCardBody.classList.add("card-body");

                const titleElement = document.createElement("h5");
                titleElement.classList.add("card-title");
                titleElement.innerText = productFields.name || 'No Name'; // Use a default name if undefined

                const descriptionElement = document.createElement("p");
                descriptionElement.classList.add("card-text");
                descriptionElement.innerText = productFields.description || 'No Description'; // Use a default description if undefined

                const buttonElement = document.createElement("a");
                buttonElement.classList.add("btn", "btn-primary");
                buttonElement.innerText = "View Details";
                buttonElement.href = `/products/${product.pk}/`; // Link to detail view using product ID

                // Card body elements
                divCardBody.appendChild(titleElement);
                divCardBody.appendChild(descriptionElement);
                divCardBody.appendChild(buttonElement);

                divCard.appendChild(imageElement);
                divCard.appendChild(divCardBody);

                divCol.appendChild(divCard);

                placeholder.appendChild(divCol);
            } else {
                console.error('Product data is undefined or invalid:', productFields);
            }
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// // fetch("/products/")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse JSON response
//     })
//     .then(products => {
//         console.log(products); // Log products to check the data
//         let placeholder = document.querySelector("#products");
//         placeholder.classList.add("row");

//         // Log to verify the structure of each product
//         products.forEach(product => {
//             console.log(product);
//         });

//         for (let i = 0; i < products.length; i++) {
//             let product = products[i].fields; // Access the fields object

//             if (product) { // Check if product is defined
//                 const divCol = document.createElement("div");
//                 divCol.classList.add("col"); // Div column

//                 const divCard = document.createElement("div"); // Div Card
//                 divCard.classList.add("card");
//                 divCard.style.width = "18rem";

//                 const imageElement = document.createElement("img");
//                 imageElement.classList.add("card-img-top");
//                 imageElement.src = `/media/${product.image}`; // Use a default image if undefined
//                 imageElement.alt = product.name || 'No image'; // Use a default alt text if undefined

//                 const divCardBody = document.createElement("div");
//                 divCardBody.classList.add("card-body");

//                 const titleElement = document.createElement("h5");
//                 titleElement.classList.add("card-title");
//                 titleElement.innerText = product.name || 'No Name'; // Use a default name if undefined

//                 const descriptionElement = document.createElement("p");
//                 descriptionElement.classList.add("card-text");
//                 descriptionElement.innerText = product.description || 'No Description'; // Use a default description if undefined

//                 const buttonElement = document.createElement("a");
//                 buttonElement.classList.add("btn", "btn-primary");
//                 buttonElement.innerText = "Buy for $" + (product.price || '0'); // Use a default price if undefined
//                 buttonElement.href = "#";

//                 // Card body elements
//                 divCardBody.appendChild(titleElement);
//                 divCardBody.appendChild(descriptionElement);
//                 divCardBody.appendChild(buttonElement);

//                 divCard.appendChild(imageElement);
//                 divCard.appendChild(divCardBody);

//                 divCol.appendChild(divCard);

//                 placeholder.appendChild(divCol);
//             } else {
//                 console.error('Product data is undefined or invalid:', product);
//             }
//         }
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });



// fetch("products/").then(function(response) {
//     console.log(response.json());
//     return response.json();
// }).then(function(response) {
//     console.log(response);
//     const products = JSON.parse(response);
//     console.log(products);
//     let placeholder = document.querySelector("#products");
//     placeholder.classList.add("row");

//     for(let i = 0; i < products.length; i++) {

//         let product = products[i];

//         const divCol = document.createElement("div");
//         divCol.classList.add("col"); // Div column

//         const divCard = document.createElement("div"); // Div Card
//         divCard.classList.add("card");
//         divCard.style.width = "18rem";

//         const imageElement = document.createElement("img");
//         imageElement.classList.add("card-img-top");
//         imageElement.src = product.image;
//         imageElement.alt = product.title;

//         const divCardBody = document.createElement("div");
//         divCardBody.classList.add("card-body");

//         const titleElement = document.createElement("h5");
//         titleElement.classList.add("card-title");
//         titleElement.innerText = product.title;

//         const descriptionElement = document.createElement("p");
//         descriptionElement.classList.add("card-text");
//         descriptionElement.innerText = product.description;

//         const buttonElement = document.createElement("a");
//         buttonElement.classList.add("btn", "btn-primary");
//         buttonElement.innerText = "Buy for $" + product.price;
//         buttonElement.href = "#";


        // Card body elements
//         divCardBody.appendChild(titleElement);
//         divCardBody.appendChild(descriptionElement);
//         divCardBody.appendChild(buttonElement);

//         divCard.appendChild(imageElement);
//         divCard.appendChild(divCardBody);

//         divCol.appendChild(divCard);

//         placeholder.appendChild(divCol);
//     }
// });

// fetch("products/")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();  // Parse the JSON from the response
//     })
//     .then(data => {
//         // `data` is a JSON string, so we need to parse it again
//         const products = JSON.parse(data);

//         // The `products` array should contain objects with `fields` properties
//         const productsList = products.map(item => item.fields);
//         console.log(productsList);

//         let placeholder = document.querySelector("#products");
//         placeholder.classList.add("row");

//         productsList.forEach(product => {
//             const divCol = document.createElement("div");
//             divCol.classList.add("col"); // Div column

//             const divCard = document.createElement("div"); // Div Card
//             divCard.classList.add("card");
//             divCard.style.width = "18rem";

//             const imageElement = document.createElement("img");
//             imageElement.classList.add("card-img-top");
//             imageElement.src = product.image; // Ensure this path is correct
//             imageElement.alt = product.name;

//             const divCardBody = document.createElement("div");
//             divCardBody.classList.add("card-body");

//             const titleElement = document.createElement("h5");
//             titleElement.classList.add("card-title");
//             titleElement.innerText = product.name;

//             const descriptionElement = document.createElement("p");
//             descriptionElement.classList.add("card-text");
//             descriptionElement.innerText = product.description;

//             const buttonElement = document.createElement("a");
//             buttonElement.classList.add("btn", "btn-primary");
//             buttonElement.innerText = "Buy for $" + product.price;
//             buttonElement.href = "#";

//             // Card body elements
//             divCardBody.appendChild(titleElement);
//             divCardBody.appendChild(descriptionElement);
//             divCardBody.appendChild(buttonElement);

//             divCard.appendChild(imageElement);
//             divCard.appendChild(divCardBody);

//             divCol.appendChild(divCard);

//             placeholder.appendChild(divCol);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching products:', error);
//     });
