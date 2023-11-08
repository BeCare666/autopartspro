		
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
                productList.innerHTML = ""; // Effacez le contenu précédent
                var Canvas =  document.getElementById('canvas');
                var SameToBody =  document.getElementById('sameToBody');
                Canvas.style.display = "block"
                SameToBody.style.display = "none"
                snapshot.forEach((productSnapshot) => {
                    const productData = productSnapshot.val();
                   // var myCatory = productData.Category

                    //const productId = productSnapshot.key;
                  
                        var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                        var BreadcrumbId = document.getElementById('breadcrumbId');
                        //BreadcrumbId.innerHTML = `${myCatory} `  
                        // Générez le HTML pour chaque produit
                        const productHTML = `
                            <div class="isotope-item col-lg-3 col-md-4 col-sm-6 fashion" >
                                <div class="vertical-item content-absolute" style="border: solid 1px rebeccapurple !important;">
                                    <div class="item-media">
                                        <img src="${photoDataUrl}" alt="${productData.NameOfstd}" style="height: 50vh; width:100%">
                                        <div class="media-links">
                                            <div class="links-wrap">
                                            <a href="https://wa.me/+22951455930?text=Salut AutoPartsPro,%20comment%20allez-vous%20?%20Vous%20êtes%20${snapshot.val().MONTRAVAILLEOUOCCUPATION}%20et%20je%20suis%20vraiment%20intéressé%20par%20votre%20cet article%20que%20j'ai%20vu%20sur%20votre%20site. 
                                            J'aimerais en savoir plus s'ils vous plaît. Voici le lien du produit  : ${encodeURIComponent('https://becare666.github.io/-illicolove/userdetails&.html?id=' + `${productData.Idproduct}`)}"
                                            class="p-view"  
                                            >
                                              <i class="fab fa-whatsapp"></i> 
                                              </a>
                                                <a class="snipcart-add-item p-view"
                                                style="display:none;"
                                                   data-item-id="${productData.Idproduct}"
                                                   data-item-name="${productData.NameOfstd}"
                                                   data-item-price="${productData.Prix}"
                                                   data-item-url="model.html"
                                                   data-item-image="${photoDataUrl}"
                                                   data-item-custom1-name="Plastic cutlery"
                                                   data-item-description="${productData.Genboxtextarea} "
                                                   data-item-custom1-options="Non|Oui[+1.00]|Jamais[+1.00]"
                                                   >
                                                    <i class="fas fa-cart-plus"></i>
                                                </a>
                                                <a class="p-link" title="" href="produitdetails.html?id=${productData.Idproduct}"><i class="fas fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-title text-center" style="border: solid 1px rebeccapurple !important;">
                                    <h4><a href="model.html">${productData.NameOfstd}</a></h4>
                                    <div class = "product-price">
                                    <p class = "last-price" style="color: black !important;"><strong>Nouveau prix : </strong>  <span>${productData.PrixPromo} $</span></p>
                                    <p class = "new-price" style="color: black !important;"><strong>Ancien prix : </strong>  <s><span> ${productData.PrixNormo} $</s></span></p>
                                  </div>
                                </div>
                            </div>
                        `;
        
                        productList.innerHTML += productHTML;   
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

      

       

    
    