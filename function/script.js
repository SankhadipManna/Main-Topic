// const api = 'https://jsonplaceholder.typicode.com/users';
//  fetch(api).then(response => response.json()).then(data=>{
//     console.log(data);
//     const information = data.filter(function (user){
//         if(user.name.startsWith('C') && user.email.endsWith('.net')){
//             return user;
//         } else{
//             return false;
//         }
//     } );
//     console.log(information);
// });

const api = fetch('https://aareguru.existenz.ch/v2018/widget')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // Check if data is an array before using filter
    if (Array.isArray(data)) {
      const weather = data.filter(function(item) {
        if (item.name === 'Zürich' && item.country === 'Switzerland') {
          return item;
        }
      });
      console.log(weather);
    } else {
      console.log('Data is not an array, cannot filter:', data);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
// 1. Store API data in a variable
async function fetchAndProcessData() {
    try {
        // Fetch data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const apiData = await response.json(); // Store API data in variable
        
        console.log('Original API data:', apiData);
        
        // 2. Use FILTER - Get users from specific city
        const usersFromCity = apiData.filter(user => user.city === 'San Francisco');
        
        // 3. Use MAP - Extract specific fields
        const userNames = apiData.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));
        
        // 4. Chain FILTER + MAP - Users with specific condition
        const activeUsers = apiData
            .filter(user => user.id <= 5) // Filter first 5 users
            .map(user => user.name.toUpperCase()); // Map to uppercase names
        
        console.log('Users from San Francisco:', usersFromCity);
        console.log('User names & emails:', userNames);
        console.log('Active users (uppercase):', activeUsers);
        
        return {
            filtered: usersFromCity,
            mapped: userNames,
            activeUsers: activeUsers
        };
        
    } catch (error) {
        console.log('Error fetching API:', error);
    }
}

// Call the function
fetchAndProcessData();

// Store API data and process
async function processProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json(); // API data stored in 'products'

        if (!Array.isArray(products)) {
            throw new Error('Unexpected API response: products is not an array');
        }

        // Filter: Get expensive products (> $100)
        const expensiveProducts = products.filter(product => Number(product.price) > 100);

        // Map: Get product titles and prices only
        const productSummary = products.map(product => ({
            title: String(product.title).slice(0, 30) + '...', // Short title
            price: `$${Number(product.price).toFixed(2)}`
        }));

        // Filter + Map: Electronics under $50
        const cheapElectronics = products
            .filter(product => product.category === 'electronics' && Number(product.price) < 50)
            .map(product => product.title);

        console.log('Expensive products:', expensiveProducts.length);
        console.log('Product summary:', productSummary.slice(0, 5));
        console.log('Cheap electronics:', cheapElectronics);

        return {
            expensiveProducts,
            productSummary,
            cheapElectronics
        };
    } catch (error) {
        console.log('Error processing products:', error);
    }
}

// processProducts()

// import React, { useState, useEffect } from 'react';

// function ProductList() {
//     const [products, setProducts] = useState([]); // Store API data in state
    
//     useEffect(() => {
//         // Fetch and store API data
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data); // Store in state variable
//             });
//     }, []);
    
//     // Filter and Map in component
//     const expensiveProducts = products.filter(p => p.price > 100);
//     const productPrices = products.map(p => p.price);
    
//     return (
//         <div>
//             <h2>All Products: {products.length}</h2>
//             <h3>Expensive: {expensiveProducts.length}</h3>
//             <ul>
//                 {expensiveProducts.map(product => (
//                     <li key={product.id}>{product.title} - ${product.price}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
