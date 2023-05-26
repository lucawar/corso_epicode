//INTERFACCIA
interface Smartphone {
    numeroRicarica: number;
    numeroChiamate: number;

    ricarica(unaRicarica:number):void;
    chiamata(minutiDurata:number):void;
    numero404():number;
    getNumeroChiamata():number;
    azzeraChiamate():void;
   
  }
  
//CREO CLASSE E IMPLEMENTO L'INTERFACCIA
  class User implements Smartphone {
    public numeroRicarica: number
    public numeroChiamate: number 
  
    constructor(_numeroRicarica: number, _numeroChiamate: number) {
      this.numeroRicarica = _numeroRicarica;
      this.numeroChiamate = _numeroChiamate;
    }

//ASSEGNO METODI ALLA CLASSE
    public ricarica(unaRicarica:number):void{
      this.numeroRicarica += unaRicarica;
      }
    
    public chiamata(minutiDurata:number): void {
        const costo = minutiDurata * 0.2;
        if (this.numeroRicarica >= costo) {
          this.numeroRicarica -= costo;
          this.numeroChiamate++;
        } else {
          console.log("Credito insufficiente per effettuare la chiamata");
        }
      }
    
    public numero404():number {
        return this.numeroRicarica;
      }
    
    public getNumeroChiamata():number {
        return this.numeroChiamate;
      }
    
    public azzeraChiamate(): void {
       this.numeroChiamate = 0;
      }
    }

//ISTANZIO 3 CLASSI + CONSOLE LOG
  const firstUser = new User(10,0);
  console.log("PRIMO UTENTE")
  console.log("-------------------------")
  firstUser.ricarica(50)
  firstUser.chiamata(20.5)
  console.log(`CREDITO RESIDUO : ${firstUser.numero404()}`);
  console.log(`NUMERO CHIAMATE : ${firstUser.getNumeroChiamata()} `);
  firstUser.azzeraChiamate()
  console.log(`CHIAMATE AZZERATE : ${firstUser.getNumeroChiamata()}`);

  console.log(" ");

  const secondUser = new User(20,0);
  console.log("SECONDO UTENTE")
  console.log("-------------------------")
  secondUser.ricarica(100)
  secondUser.chiamata(40.3)
  console.log(`CREDITO RESIDUO : ${secondUser.numero404()}`);
  console.log(`NUMERO CHIAMATE : ${secondUser.getNumeroChiamata()} `);
  secondUser.azzeraChiamate()
  console.log(`CHIAMATE AZZERATE : ${secondUser.getNumeroChiamata()}`);

  console.log(" ");


  const thirdUser = new User(30,0);
  console.log("TERZO UTENTE")
  console.log("-------------------------")
  thirdUser.ricarica(35)
  thirdUser.chiamata(10)
  console.log(`CREDITO RESIDUO : ${thirdUser.numero404()}`);
  console.log(`NUMERO CHIAMATE : ${thirdUser.getNumeroChiamata()}`);
  thirdUser.azzeraChiamate()
  console.log(`CHIAMATE AZZERATE : ${thirdUser.getNumeroChiamata()}`);
