//Desarrollar una "clase" con un método que entregue el término n de la serie.
class RetoSerie {
    // Realizar cada una de las Series numéricas
    // Serie 1: Número primo - true
    // El número primo es un núm mayor que 1 
    //El número primo tiene dos divisores: 1 y él mismo (ejemplo: 2-3-5)
        seriePrimo(valorNumero) {
            if (valorNumero <= 0) return false;
            //creamos variable para que nos diga cuantas veces divimos el numero
            let contador = 0;
            for (var i = 1; i <= valorNumero ; i++) {
                //división exacta
                if (valorNumero % i === 0) valorNumero++;
            }
            if (valorNumero === 2) return true;
                    return false;
            }
    }

    console.log ("Número 1= " + seriePrimo(1));
    console.log ("Número 1= " + seriePrimo(2));
    console.log ("Número 1= " + seriePrimo(3));
    console.log ("Número 1= " + seriePrimo(4));
    console.log ("Número 1= " + seriePrimo(5));
    console.log ("Número 1= " + seriePrimo(6));
    console.log ("Número 1= " + seriePrimo(7));
    console.log ("Número 1= " + seriePrimo(8));
    console.log ("Número 1= " + seriePrimo(9));    
    console.log ("Número 1= " + seriePrimo(10));

        
    /*
    // Serie 2: Número Fibonacci
    // Recursividad
        serieFibonacci() {

        }
        
    // Serie 3: Número Triangular
        serieTriangular(n) {
            const aux = n + 1;
            return n * aux / 2
            // En la parte de arriba desglosamos cada una de las partes de la fórmula
            // return (n*(n + a))/2;
            
            }
        }
    // Juntar las tres series para calcular n
        calcularNSerie(n) {
            return (
              (this.seriePrimo(n + 3) * this.serieTriangular(n - 1)) / this.serieFibonacci(n - 2)
            );
            }
        // instancia para REACT
        const instancia = new Reto();
        instancia.calcularNSerie();
    
    
    */