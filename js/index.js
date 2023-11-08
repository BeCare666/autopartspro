		
        // Récupérer l'ID du produit depuis l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");
        // Récupérez une référence à la base de données Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyDREUJMl3o4ZpZxSDt3zpkBMeYxCfM20-8",
            authDomain: "autopartspro-d52e8.firebaseapp.com",
            databaseURL: "https://autopartspro-d52e8-default-rtdb.firebaseio.com",
            projectId: "autopartspro-d52e8",
            storageBucket: "autopartspro-d52e8.appspot.com",
            messagingSenderId: "1047825650618",
            appId: "1:1047825650618:web:0f620729931670e64b4383"
            };
            firebase.initializeApp(firebaseConfig);
            const database = firebase.database();
    
            // Récupérez les données des produits depuis Firebase
            const productRef = database.ref("Thedatas");
            productRef.on("value", (snapshot) => { 
                const productList = document.getElementById("product-list");
                const bestproductI1 = document.getElementById("bestproductI1");
                const bestproductI2 = document.getElementById("bestproductI2");
                const bestproductI3 = document.getElementById("bestproductI3");
                const bestproductI4 = document.getElementById("bestproductI4");
                const bestproductI5 = document.getElementById("bestproductI5");
                const bestproductI6 = document.getElementById("bestproductI6");

                const bestproductI1a = document.getElementById("bestproductI1a");
                const bestproductI2x = document.getElementById("bestproductI2x");
                const bestproductI3x = document.getElementById("bestproductI3x");
                const bestproductI4x = document.getElementById("bestproductI4x");
                const bestproductI5x = document.getElementById("bestproductI5x");
                const bestproductI6x = document.getElementById("bestproductI6x");

                const bestproductI1y = document.getElementById("bestproductI1y");
                const bestproductI2y = document.getElementById("bestproductI2y");
                const bestproductI3y = document.getElementById("bestproductI3y");
                const bestproductI4y = document.getElementById("bestproductI4y");
                const bestproductI5y = document.getElementById("bestproductI5y");
                const bestproductI6y = document.getElementById("bestproductI6y");

                const bestproductI1z = document.getElementById("bestproductI1z");
                const bestproductI2z = document.getElementById("bestproductI2z");
                const bestproductI3z = document.getElementById("bestproductI3z");
                const bestproductI4z = document.getElementById("bestproductI4z");
                const bestproductI5z = document.getElementById("bestproductI5z");
                const bestproductI6z = document.getElementById("bestproductI6z");

                const bestproductI1t = document.getElementById("bestproductI1t");
                const bestproductI2t = document.getElementById("bestproductI2t");
                const bestproductI3t = document.getElementById("bestproductI3t");
                const bestproductI4t = document.getElementById("bestproductI4t");
                const bestproductI5t = document.getElementById("bestproductI5t");
                const bestproductI6t = document.getElementById("bestproductI6t");

                productList.innerHTML = ""; // Effacez le contenu précédent
    
                snapshot.forEach((productSnapshot) => {
                    const productData = productSnapshot.val();
                    var bestProduct = productData.addtocard
                    //const productId = productSnapshot.key;
                    var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                    if(bestProduct = true){
                        
                    }
                  
                });
            });

        // Sélectionnez l'élément d'entrée de recherche par son ID
        const searchInput = document.getElementById("orderby1");

        // Écoutez l'événement d'entrée utilisateur dans l'input
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase(); // Obtenez le terme de recherche en minuscules

            // Récupérez tous les éléments produits
            const products = document.querySelectorAll(".isotope-item");
            // Parcourez les produits et filtrez-les en fonction du terme de recherche
            products.forEach((product) => {
                const productName = product.querySelector(".item-title a").textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = "block"; // Affichez le produit s'il correspond au terme de recherche
                } else {
                    product.style.display = "none"; // Masquez le produit s'il ne correspond pas
                }
            });
        });

