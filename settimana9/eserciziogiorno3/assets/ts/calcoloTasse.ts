class Lavoratori{
     professione:string;
     codRedd: number;
     redditoAnnuoLordo: number;
     tasseInps: number = 26.23;
     tasseIrpef: number = 15;

     constructor(_professione:string, _codRedd: number, _redditoAnnuoLordo: number){
        this.professione = _professione
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        
     }
     getUtileTasse():number {
        return this.redditoAnnuoLordo * this.codRedd / 100
     }

     getTasseInps():number {
        return this.getUtileTasse() * this.tasseInps / 100
     }

     getTasseIrpef():number {
        return this.getUtileTasse() * this.tasseIrpef / 100
     }

     getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef() / 100)
     }
}

let professionista = new Lavoratori('Medico', 41, 100000)
console.log(`PROFESSIONISTA : ${professionista.professione} / ALIQUOTA : ${professionista.codRedd}% / REDDITO ANNUO LORDO : ${professionista.redditoAnnuoLordo} $`);
console.log('Utile tasse professionista :', professionista.getUtileTasse());
console.log('Tasse inps professionista :', professionista.getTasseInps());
console.log('Tasse irpef professionista :', professionista.getTasseIrpef());
console.log('Reddito annuo netto professionista :', professionista.getRedditoAnnuoNetto());

let artigiano = new Lavoratori('Falegname', 38 , 50000)
console.log(`ARTIGIANO : ${artigiano.professione} / ALIQUOTA : ${artigiano.codRedd}% / REDDITO ANNUO LORDO : ${artigiano.redditoAnnuoLordo} $`);
console.log('Utile tasse artigiano :', artigiano.getUtileTasse());
console.log('Tasse inps artigiano :', artigiano.getTasseInps());
console.log('Tasse irpef artigiano :', artigiano.getTasseIrpef());
console.log('Reddito annuo netto artigiano :', artigiano.getRedditoAnnuoNetto());

let commerciante = new Lavoratori('Giolielliere', 41, 70000)
console.log(`COMMERCIANTE : ${commerciante.professione} / ALIQUOTA : ${commerciante.codRedd}% / REDDITO ANNUO LORDO : ${commerciante.redditoAnnuoLordo} $`);
console.log('Utile tasse commerciante :', commerciante.getUtileTasse());
console.log('Tasse inps commerciante :', commerciante.getTasseInps());
console.log('Tasse irpef commerciante :', commerciante.getTasseIrpef());
console.log('Reddito annuo netto commerciante :', commerciante.getRedditoAnnuoNetto());
