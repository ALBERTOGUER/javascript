class votos {
    favor = 0;
    contra = 0;
    abstencion = 0;


    constructor() {


    }


    aumentar_favor() {
        this.favor++;
        return this.favor

    }
    aumentar_contra() {
        this.contra++;
        return this.contra
    }

    aumentar_abstencion() {
        this.abstencion++;
        return this.abstencion
    }

    comparar() {
        if (this.favor > this.contra) {
            Swal.fire({
                title: `El ganador es a favor con un total de:${this.favor} <br>En contra obtuvo ${this.contra} votos y en abstencion ${this.abstencion} votos`,
                animation: false,
                customClass: {
                    popup: ``
                }
            })
        }
        else if (this.favor < this.contra) {
            Swal.fire({
                title: `El ganador es en contra con un total de:${this.contra} <br>A favor obtuvo ${this.favor} votos y en abstencion ${this.abstencion} votos`,
                animation: false,
                customClass: {
                    popup: ``
                }
            })
        }


        else if (this.favor == this.contra) {
            let ganador = Math.round(Math.random());

            if (ganador == 1) {
                Swal.fire({
                    title: `El ganador es a favor con un total de:${this.favor} <br>En contra obtuvo ${this.contra} votos y en abstencion ${this.abstencion} votos`,
                    animation: false,
                    customClass: {
                        popup: ``
                    }
                })

            }
            else {
                Swal.fire({
                    title: `El ganador es en contra con un total de:${this.contra} <br>A favor obtuvo ${this.favor} votos y en abstencion ${this.abstencion} votos`,
                    animation: false,
                    customClass: {
                        popup: ``
                    }
                })

            }
        }
    }



}