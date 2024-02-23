class Persona {
    // Attributo statico.
    static attributoStatico = 10;

    // Attributo standard.
    attributoStandard = 20;
    
    // Attributo privato. --> Mettere "#" prima del metodo/attributo.
    #attributoPrivato = 30;

    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }

    saluta() { // Non scrivere function *nomeFunzione*, SOLO *nomeFunzione*.
        console.log("Ciao mi chiamo " + this.nome + " " + this.cognome);
    }

    // Metodo statico.
    static cammina() {
        return "Sto camminando";
    }

    //GETTERS
    get getNome() {
        return this.nome;
    }

    get getCognome() {
        return this.cognome;
    }

    get getAttributoPrivato() {
        return this.#attributoPrivato; // Mettere "#".
    }

    //SETTERS
    set setNome(valore) {
        this.nome = valore;
    }

    set setCognome(valore) {
        this.cognome = valore;
    }
}

const persona1 = new Persona("Mario", "Rossi");
const persona2 = new Persona("Giovanni", "Verdi");

persona1.saluta();
persona2.saluta();

console.log("Nome persona1: " + persona1.getNome);

persona1.setNome = "Francesco"; // Cambio il nome di persona1 con il setter.

console.log("Nome persona1 dopo setNome: " + persona1.getNome); // Stampo il cambiamento di nome di persona1.

console.log(Persona.cammina()); // Utilizzo il metodo "cammina" senza istanziare oggetti.

console.log(Persona.attributoStatico); // Ottengo il numero 10 senza istanziare oggetti.

console.log(Persona.attributoStandard); // Non ottengo il valore 20 perché l'attributo non è statico. 
// Bisogna istanziare un oggetto. Ottengo "undefined".

console.log(persona1.getAttributoPrivato); // Ottengo il numero 30. Devo usare per forza il getter perché è privato.