
let prodotto = {
    "name": "app test 1",  
    "description": "somthing longer",
    "brand": "nokia", 
    "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", 
    "price": 100, 
     }



let getData = async() => {
    try{
       const row = await fetch("https://striveschool-api.herokuapp.com/api/product/",{
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
            "Content-type": "application/json"
        },
        body: JSON.stringify(prodotto)
       })
       if(row.ok) {
        console.log(row)
        const pro = await row.json()
       }
    } catch (error) {

    }
}

async function caricaDati() {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/product/",{
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
            "Content-type": "application/json"
        }
       });
      const dati = await response.json();
      console.log(dati)
      mostraDati(dati);
    } catch (error) {
      console.error(error);
    }
  }

  function mostraDati(dati) {
    for (var i = 0; i < dati.length; i++) {
        document.querySelector("#sezione-prodotti").innerHTML += `
        <div class="col-4">
         <div class="card shadow border rounded mt-3">
        <img src="${dati[i].imageUrl}" class="img-fluid card-img-top" alt="datiImg" />
        <hr>
        <div class="card-body">
          <h5 class="card-title">${dati[i].name}</h5>
          <p class="card-text badge rounded-pill bg-dark mb-2">${dati[i].brand}</p>
          <hr>
          <p><strong>${dati[i].price}€</strong></p>
          <hr>
          <p class="description">${dati[i].description}</p>
          <hr  class="text-primary">
        </div>
        <div class="container text-center">
        <button class="btn btn-primary bottone-dettagli" onclick="dettagliProdotto( '${dati[i]._id}' )">Dettagli</button>
        <button class="btn btn-primary bottone-dettagli" onclick="modificaProdotto()">Modifica</button>
        </div>
      </div>
      </div>`
    }
  }
 
function dettagliProdotto(prodotto)
{
    let oggettoProdotto = prodotto;
    localStorage.setItem("oggettoProdotto", oggettoProdotto);
    window.location.href = "Pagedetails.html";
    
}


let modificaProdotto = async() => {
  try{
     const row = await fetch("https://striveschool-api.herokuapp.com/api/product/",{
      method: "PUT",
      headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
          "Content-type": "application/json"
      },
      body: JSON.stringify(prodotto)
     })
     if(row.ok) {
      console.log(row)
      const pro = await row.json()
     }
  } catch (error) {

  }

let modProdotto = prodotto;
localStorage.getItem("modProdotto", modProdotto);
window.location.href= "backOffice.html"
}
