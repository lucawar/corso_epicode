//ESERCIZIO TIMER

let timer = document.querySelector(".timer span")
let tempo = 0
if (sessionStorage.getItem("timer")) {
  tempo = Number(sessionStorage.getItem("timer"))
} else {
  tempo = Number(timer.innerHTML)
}
timer.innerHTML = tempo

setInterval(() => {
  tempo++
  sessionStorage.setItem("timer", tempo)
  timer.innerHTML = tempo
}, 1000)

// let arr = JSON.parse(localStorage.getItem("arrayDiUtente"))
// arr.pop()
// localStorage.setItem("arrDayUtent", JSON.stringify(arr))


// ESERCIZIO 1


const salvaDati = (event) => {
  event.preventDefault()
  const utente = {}
  console.log({ target: event.target })
  for (let i = 0; i < event.target.children.length; i++) {
    const element = event.target.children[i]
    if (element.localName !== "button") {
      console.log(element.name)
      // utente.nome
      //utente[pincopallino] //=> prima controlla il contenuto di pincopallino
      //lo usa come proprieta'
      //pincopallino === "nome"
      //utente["nome"]

      //iterazione 1 => input name='nome' => utente ha scritto "pino"
      //utente["nome"] = "pino"
      utente[element.name] = element.value
    }
  }
  console.log(utente)
}