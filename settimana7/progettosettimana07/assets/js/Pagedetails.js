let prodottoId = localStorage.getItem("oggettoProdotto");
let dato;
console.log(prodottoId);
window.onload = async () => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/" + prodottoId,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTNiOTg4Zjc0MDAwMTQyODc0MzEiLCJpYXQiOjE2ODM4NzQ3NDUsImV4cCI6MTY4NTA4NDM0NX0.ld4MBB_Xp-TruK9HHPUuAF60fs2LP74K3PzrK7X_xpU",
          "Content-type": "application/json",
        },
      }
    );
    info = await response.json();
    mostraDato(info);
    console.log(dato.name);
  } catch (error) {
    console.error(error);
  }
};

function mostraDato(dato) {
  document.querySelector("#sezione-prodotto").innerHTML += `
 <h3>${dato.name}</h3>
 <h5>${dato.description}</h5>
 <h5>${dato.price}€</h5>
 <h5>${dato.brand}</h5>
 <h5>${dato.imageUrl}`;
}
