class cuerpo {
    parte = "";


    coordenada(coordenadax, coordenaday) {
    // event.prevenDefault();


        if (coordenadax > 160 && coordenadax < 210 && coordenaday > 60 && coordenaday < 115 || coordenadax > 150 && coordenadax < 220 && coordenaday > 130 && coordenaday < 170) {
            let parte = "mano derecha";
            return parte;

        } else if (coordenadax > 580 && coordenadax < 660 && coordenaday > 65 && coordenaday < 105 || coordenadax > 590 && coordenadax < 650 && coordenaday > 130 && coordenaday < 170) {
            let parte = "mano izquierda";
            return parte;

        } else if (coordenadax > 500 && coordenadax < 585 && coordenaday > 500 && coordenaday < 550) {
            let parte = "pie izquierdo";
            return parte;


        } else if (coordenadax > 235 && coordenadax < 275 && coordenaday > 490 && coordenaday < 535) {
            let parte = "pie derecho";
            return parte;

        } else if (coordenadax > 380 && coordenadax < 430 && coordenaday > 250 && coordenaday < 340) {
            let parte = "nepe";
            return parte;
        } else if (coordenadax > 360 && coordenadax < 450 && coordenaday > 60 && coordenaday < 140) {
            let parte = "cabeza";
            return parte;
        }
        
    }


    partedelcuerpo(idioma, parte) {
        switch (parte) {
            case 'cabeza':
                if (idioma == "eng") {
                    parte = "head"
                }

                break;
            case 'nepe':
                if (idioma == "eng") {
                    parte = "penus"
                }
                break;
            case 'pie derecho':
                if (idioma == "eng") {
                    parte = "right foot"
                }
                break;
            case 'mano izquierda':
                if (idioma == "eng") {
                    parte = "left hand"
                }
                break;
            case 'pie izquierdo':
                    if (idioma == "eng") {
                        parte = "left foot"
                    }
                break;
            case 'mano derecha':
                if (idioma == "eng") {
                    parte = "right hand"
                }
                break;
        }

        return parte
    }
}