class CapoAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string,
              prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {


    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }

  getsaldocapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }

  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

let capo1 = new CapoAbbigliamento(
  1,2121,"primavera","cardigan",1231,5,"nero",18.5, 22.57,"negozio",45);

let capo2 = new CapoAbbigliamento(
  2,4111,"estate","t-shirt",1251,5,"rosso",5.50, 6.71,"magazzino",30);

let capo3 = new CapoAbbigliamento(
  3,1181,"inverno","felpa",1229,8,"beige",17.50,21.35,"negozio",50);
        
let capo4 = new CapoAbbigliamento(
  4,1111,"estate","maglione",1221,4,"verde",20, 24.40,"negozio",50);

let capo5 = new CapoAbbigliamento(
  5,6111,"primavera","maglia",1021,5,"blu",11, 13.42,"magazzino",60);



console.log("ABBIGLIAMENTO");
console.log(capo1);
let primocapo = capo1.getacquistocapo();
console.log("totale capo:" + primocapo + "$");

console.log(capo2);
let secondocapo = capo2.getacquistocapo();
console.log("totale capo:" + secondocapo + "$");

console.log(capo3);
let terzocapo = capo3.getacquistocapo();
console.log("totale capo:" + terzocapo + "$");

console.log(capo4);
let quartocapo = capo4.getacquistocapo();
console.log("totale capo:" + quartocapo + "$");

console.log(capo5);
let quintocapo = capo5.getacquistocapo();
console.log("totale capo:" + quintocapo + "$");









