// function to send mail for elasticMail

var SEND = document.getElementById('contact_form_submitID');
SEND.addEventListener('click', function(){
var Name = document.getElementById('name').value;
var Email = document.getElementById('email').value;
var Phone = document.getElementById('phone').value;
var Theme = document.getElementById('theme').value; 
var Message = document.getElementById('message').value;
if(Name && Email && Phone && Theme && Message){
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('phone').value = "";
document.getElementById('theme').value = "";
document.getElementById('message').value = "";
    
// statr envoi de mail de validation
const apiKey = "D43BE64CAF6D9846D08EB39BC697AF795F475475D355B4B2F3091DED1C669B35C76AEE7C8FA3CBB754FF80604C2FCFE0";
const apiUrl = "https://api.elasticemail.com/v2/email/send";

// Définir les paramètres de l'e-mail
const emailParams = {
  apiKey: apiKey,
  subject: "Demande",
  from: "glamourchicopro@gmail.com",
  fromName:`${Name}`,
  to: "glamourchicopro@gmail.com",
  bodyHtml: `
  <table cellpadding="10" cellspacing="0" style="background-color: #f1f1f1; padding: 20px;">
  <tr>
      <td>
      <h1 style="color: #333;">GlamourChicoPro !</h1>
      <p style="font-size: 16px; color: #666;">
       ${Message}  
      </p>
      <ul>
          <li>Objet : ${Theme} </li>
          <li>Nom : ${Name} </li>
          <li>Email : ${Email}</li>
          <li>Phone : ${Phone}</li>
          
      </ul>
      <p style="font-size: 14px; color: #999;">
         <strong>NB : </strong> Ce mail est un mail automatique
         envoyé lorsqu'un client vous contact sur <a href="glamourchicopro.com">glamourchicopro.com</a> !     
      </p>
      <p style="font-size: 14px; color: #999;">
         La boutique glamourchicopro.com     
      </p>
      </td>
  </tr>
  </table>
  `
};
     // Effectuer une requête POST vers l'API ElasticEmail
     fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(emailParams)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Afficher la réponse de l'API ElasticEmail
          if (data.success) {
            document.getElementById('smsSuccess').style.display = "block"
            //console.log("E-mail envoyé avec succès.");
          } else {
            document.getElementById('smsErrors').style.display = "block"
           //console.error("Erreur lors de l'envoi de l'e-mail.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête API :", error);
        });
       // end envoi de mail de validation
}
})
                