fetch("https://api.pexels.com/v1/search?query=album", {
  headers: {
    Authorization: "opiF2auON2aoPr6dLk9u7rKdpOEhpXeOdFGiOijFMTYep7Clpqi2AJkM",
  },
})
.then(res => res.json())
.then(json => {
    const foto = json.photos
    for(const json of foto) {
       document.querySelector("#album-photo").innerHTML += `
       <div class="col-4">
        <div class="card">
       <img src="${json.src.original}" class="img-fluid card-img-top" alt="bookImg" />
       <div class="card-body">
         <h5 class="card-title"></h5>
         <p class="card-text badge rounded-pill bg-dark mb-2"></p>
         <p class="fs-4">€</p>
       </div>
       <div class="container text-center">
       <button class="btn btn-danger" onclick="addToCart(event,)">Compra ora</button>
       <button class="btn btn-outline-danger" onclick="skipMe(event)">Scarta</button>
       </div>
     </div>
     </div>`
    }

})
.catch(err => console.log(err))
