package BWentities;

import java.util.Set;
import java.util.UUID;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import BWenum.StatoMezzo;
import BWenum.TipoMezzo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Entity
@Getter
@Setter
@NoArgsConstructor

public class Mezzo {

	@Id
	@GeneratedValue
	private UUID idMezzo;
	@Enumerated(EnumType.STRING)
	private StatoMezzo statoMezzo;
	@Enumerated(EnumType.STRING)
	private TipoMezzo tipoMezzo;
	private int capienza;
	private int corse;

	@OneToMany
	private Set<Manutenzione> manutenzioni;

	@OneToMany
	private Set<StoricoTratta> soricoTratta;

	public Mezzo(StatoMezzo statoMezzo, TipoMezzo tipoMezzo, int capienza, int corse) {
		this.statoMezzo = statoMezzo;
		this.tipoMezzo = tipoMezzo;
		this.capienza = capienza;
		this.corse = corse;
	}

	@Override
	public String toString() {
		return "Mezzo [id=" + idMezzo + ", statoMezzo=" + statoMezzo + ", tipoMezzo=" + tipoMezzo + ", capienza="
				+ capienza + ", corse=" + corse + "]";
	}

}
