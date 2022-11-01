export default class Medico {
    private nombre : string;
    private matricula: number;

    public constructor(nombre : string, matricula: number) {
        this.nombre = nombre,
        this.matricula = matricula;
    }

    public getMatricula() : number {
        return this.matricula;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public setNombre(nuevoNombre: string ) : void {
        this.nombre = nuevoNombre;
    }

}