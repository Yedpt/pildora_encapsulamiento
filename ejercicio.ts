class animal {

    protected nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class perro extends animal {

    private raza: string;

    constructor(nombre: string , raza : string) {
        super(nombre);
        this.raza= raza;
    }

    public obtenerDatos() : string {
        return `Nombre: ${this.nombre}, Raza: ${this.raza}`;
    }
}

const Perrito = new perro("Firulais", "Pastor Aleman");
console.log(Perrito.obtenerDatos())
console.log(Perrito.nombre)