"use strict";
class sonAccount {
    balanceInit = 0;
    constructor(balanceInit) {
        this.balanceInit = balanceInit;
    }
    oneDeposit(versamento) {
        return this.balanceInit += versamento;
    }
    oneWithDraw(prelievo) {
        return this.balanceInit -= prelievo;
    }
}
class motherAccount {
    balanceInit = 0;
    constructor(balanceInit) {
        this.balanceInit = balanceInit;
    }
    twoDeposit(versamento) {
        return this.balanceInit += versamento;
    }
    twoWithDraw(prelievo) {
        return this.balanceInit -= prelievo;
    }
    calculateInterest() {
        const interestRate = 0.1;
        const interest = this.balanceInit * interestRate;
        return interest;
    }
}
const figlioAccount = new sonAccount(0); //conto iniziale figlio
console.log(figlioAccount);
console.log(figlioAccount.balanceInit);
figlioAccount.oneDeposit(100); //versamento soldi figlio
console.log(figlioAccount.balanceInit);
figlioAccount.oneWithDraw(25); //prelievo soldi + console.log di resoconto dopo le operazioni 
console.log(figlioAccount.balanceInit);
const madreAccount = new motherAccount(0); //conto iniziale madre
console.log(madreAccount);
console.log(madreAccount.balanceInit);
madreAccount.twoDeposit(300); //versamento soldi madre
console.log(madreAccount.balanceInit);
madreAccount.twoWithDraw(177); //prelievo soldi + console.log di resoconto dopo le operazioni 
console.log(madreAccount.balanceInit);
const interest = madreAccount.calculateInterest(); //interesse
console.log(interest);
const bilancioTotale = madreAccount.balanceInit + interest; //calcolo interesse sul deposito
console.log(bilancioTotale);
