window.onload = () => {
fetch("https://striveschool-api.herokuapp.com/books")
.then((raw)=> {return raw.json()})  //versione lunga ma si può fare anche con la funzione freccia per evitare di scrivere il return, in quanto già è compreso nelle funzioni freccia
.then((books) => {
    const arrayNormale = books
    for(const book of arrayNormale) {
        document.querySelector("#books-wrapper").innerHTML += `
        <div class="col-4">
         <div class="card">
        <img src="${book.img}" class="img-fluid card-img-top" alt="bookImg" />
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text badge rounded-pill bg-dark mb-2">${book.category}</p>
          <p class="fs-4">${book.price}€</p>
        </div>
        <div class="container text-center">
        <button class="btn btn-danger" onclick="addToCart(event, '${book.asin}')">Compra ora</button>
        <button class="btn btn-outline-danger" onclick="skipMe(event)">Scarta</button>
        </div>
      </div>
      </div>`
       
    }
})
.catch(err => console.log(err))
}
    
const skipMe = (event) => {            //Funzione bottone che rimuove i film dalla lista
  event.target.closest('.col-4').remove()
}



