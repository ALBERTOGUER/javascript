class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;

    }


    cotizarseguro() {
        /* ===============
           1=americano 1.15;
    
           2=asiatico=1.05;
    
           3= europeo 1.35;
        ================ */

        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break

            case '3':
                cantidad = base * 1.35;
                break
        }
        const diferencia = new Date().getFullYear() - this.anio;
        cantidad -=((diferencia*3)*cantidad)/100;

        if(this.tipo ==='basico'){
            cantidad *= 1.30;
        }else{
            cantidad *= 1.50;

        }

        return cantidad;


    }

}