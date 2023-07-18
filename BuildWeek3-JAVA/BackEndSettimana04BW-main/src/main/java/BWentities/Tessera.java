package BWentities;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tessera {

	@Id
	@GeneratedValue
	private UUID numeroTessera;
	private LocalDate dataEmissioneTessera;

	@OneToMany(mappedBy = "tessera")
	private Set<Ticket> ticket;
	private LocalDate dateScadenzaTessera;

	@OneToOne
	private Utente utente;

	public Tessera(String dataEmissioneTessera, Utente utente) {

		this.dataEmissioneTessera = LocalDate.parse(dataEmissioneTessera);
		this.dateScadenzaTessera = this.dataEmissioneTessera.plusYears(1);
		this.utente = utente;
	}

	@Override
	public String toString() {
		return "Tessera [numeroTessera=" + numeroTessera + ", dataEmissioneTessera=" + dataEmissioneTessera
				+ " , dateScadenzaTessera=" + dateScadenzaTessera + ", utente=" + utente + "]";
	}

}
