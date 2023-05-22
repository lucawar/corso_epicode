const btnVerifica = document.getElementById('verifica') as HTMLButtonElement;
const btnReset = document.getElementById('reset') as HTMLButtonElement;
const giocatore1 = document.getElementById('giocatore1') as HTMLInputElement;
const giocatore2 = document.getElementById('giocatore2') as HTMLInputElement;
let valore1: number;
let valore2: number;
const messaggio = document.getElementById('risultato') as HTMLElement;
let estratto: number;

window.addEventListener('load', function () {
	btnReset.setAttribute('disabled', 'true');
	btnReset.style.backgroundColor = 'red';
	btnReset.style.color = 'white';
});

btnVerifica.addEventListener('click', function () {
	valore1 = Number(giocatore1.value);
    console.log(valore1)
	valore2 = Number(giocatore2.value);
    console.log(valore2)
	verifica();
});

const verifica = (): void => {
	if (!valore1 || !valore2) {
		messaggio.innerHTML =
			'Attenzione! Entrambi i giocatori devono inserire un valore!';
		return;
	} else if (valore1 < 1 || valore2 < 1 || valore1 > 100 || valore2 > 100) {
		messaggio.innerHTML =
			'Attenzione! Inserire un valore numerico tra 1 e 100!';
		return;
	} else if (valore1 === valore2) {
		messaggio.innerHTML = 'Attenzione! Inserire valori diversi!';
		return;
	} else {
		estrai();
		calcola();
	}
};

const estrai = (): void => {
	estratto = Math.floor(Math.random() * 100 + 1);
};

const calcola = (): void => {
	btnReset.removeAttribute('disabled');
	btnReset.style.backgroundColor = 'green';
	giocatore1.setAttribute('disabled', 'true');
	giocatore1.style.backgroundColor = 'lightgray';
	giocatore2.setAttribute('disabled', 'true');
	giocatore2.style.backgroundColor = 'lightgray';

	document.getElementById('estratto')!.innerHTML = `Numero estratto: ${estratto}`;
    console.log(`Numero inserito dal giocatore 1: ${valore1}`);
	console.log(`Numero inserito dal giocatore 2: ${valore2}`);

	switch (true) {
		case valore1 === estratto:
			messaggio.innerHTML = 'Il giocatore 1 ha indovinato!';
            console.log('Il giocatore 1 ha indovinato!')
			break;

		case valore2 === estratto:
			messaggio.innerHTML = 'Il giocatore 2 ha indovinato!';
            console.log('Il giocatore 2 ha indovinato!');
			break;

		case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
			messaggio.innerHTML =
				'Nessuno ha vinto ma il giocatore 1 si è avvicinato di più';
                console.log('Nessuno ha vinto ma il giocatore 1 si è avvicinato di più')
			break;

		case Math.abs(estratto - valore2) < Math.abs(estratto - valore1):
			messaggio.innerHTML =
				'Nessuno ha vinto ma il giocatore 2 si è avvicinato di più';
                console.log('Nessuno ha vinto ma il giocatore 2 si è avvicinato di più');
			break;

		default:
			messaggio.innerHTML = 'Pareggio!';
            console.log('Pareggio!');
			break;
	}

	btnVerifica.setAttribute('disabled', 'true');
	btnVerifica.style.backgroundColor = 'red';
	btnVerifica.style.color = 'white';
};

btnReset.addEventListener('click', function () {
	btnVerifica.removeAttribute('disabled');
	btnVerifica.removeAttribute('style');
	giocatore1.removeAttribute('disabled');
	giocatore1.removeAttribute('style');
	giocatore2.removeAttribute('disabled');
	giocatore2.removeAttribute('style');
	giocatore1.value = '';
	giocatore2.value = '';
	messaggio.innerHTML = '';
	document.getElementById('estratto')!.innerHTML = '';
	btnReset.setAttribute('disabled', 'true');
});