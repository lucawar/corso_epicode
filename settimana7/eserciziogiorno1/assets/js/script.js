//ESERCIZIO 1

class user {
  constructor(firstName, lastName, age, location) {
    this.nome = firstName;
    this.cognome = lastName;
    this.eta = age;
    this.localita = location;
  }

  compareAge = (anotherUser) => {
    if (this.eta < anotherUser.eta) {
      return `${anotherUser.nome} è più vecchio di ${this.nome}.`;
    } else if (this.eta > anotherUser.eta) {
      return `${anotherUser.nome} è più giovane di ${this.nome}.`;
    } else {
      return `${anotherUser.nome} è della stessa età di ${this.nome}.`;
    }
  };
}

const x = new user("Luca", "Guerra", 30, "Roma");
const y = new user("Mario", "Rossi", 25, "Lecce");

console.log(x.compareAge(y));
