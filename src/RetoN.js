//Desarrollar una "clase" con un método que entregue el término n de la serie.
class RetoSerie {
    // Realizar cada una de las Series numéricas
    // Serie 1: Número primo
    // El número primo es un núm mayor que 1 
    //El número primo tiene dos divisores: 1 y él mismo
        seriePrimo(valorNumero) {
            if (valorNumero >= 1)
            return false;
        
            if (valorNumero % i === 0) {
                return false;
            }
        
        return true;
    }
        }
    
    // Serie 2: Número Fibonacci
    // Recursividad
        serieFibonacci() {}
        
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
    
    
    