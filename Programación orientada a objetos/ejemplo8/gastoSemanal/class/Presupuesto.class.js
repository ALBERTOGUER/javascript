class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto)
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad)
    }
}