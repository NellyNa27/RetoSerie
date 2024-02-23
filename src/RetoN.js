//Desarrollar una "clase" con un método que entregue el término n de la serie.
class RetoPrimo {
    // Realizar cada una de las Series numéricas
    // Serie 1: Número primo - true

    //El número primo tiene dos divisores: 1 y él mismo (ejemplo: 2-3-5)
            seriePrimo(valorNumero) {
                // valorNumero es un núm mayor que 1 (para que sea primo)
            if (valorNumero <= 1) {
                return false;
            }
            //Vemos si tiene un divisor entre dos y la raiz cuadrada de valorNumero
            for (let i = 2; i <= Math.sqrt(valorNumero); i++) {
                //división exacta
                if (valorNumero % i === 0 ) 
                return false; // si valorNumero tiene otro divisor, no es primo
            }
        
                return true;
            }
        }
        //Instancia de una clase
        const nPrimo = new RetoPrimo();
    console.log ("Número 1= " + nPrimo.seriePrimo(1));
    console.log ("Número 2= " + nPrimo.seriePrimo(2));
    console.log ("Número 3= " + nPrimo.seriePrimo(3));
    console.log ("Número 4= " + nPrimo.seriePrimo(4));
    console.log ("Número 5= " + nPrimo.seriePrimo(5));
    console.log ("Número 6= " + nPrimo.seriePrimo(6));
    console.log ("Número 7= " + nPrimo.seriePrimo(7));
    console.log ("Número 8= " + nPrimo.seriePrimo(8));
    console.log ("Número 9= " + nPrimo.seriePrimo(9));
    console.log ("Número 10= " + nPrimo.seriePrimo(10));
    /*
    // Serie 2: Número Fibonacci
    // Recursividad o recurrencia
    //sucesión infinita de la suma de dos número anteriores naturales (ejemplo: 1,1,2,3,5,8,12,21,34)
        serieFibonacci(n1, n2)
            let result = 0;
            for (let i = 0; i <= 10; i++) {
                result = (n1 + n2);
                n1 == n2;
                n2 == result;
                console.log ("mi numero fibonacci es= " +serieFibonacci());
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