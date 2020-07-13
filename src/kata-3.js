// Extracción de rango de números entre n y m
const range = (from, to) =>
    Array.from(
        // length es igual a to + 1 para incluir el número máximo en el array
        {length: to + 1},
        // solo los que superan el número mínimo son recuperados, el resto se queda como indefinido
        (val, i) => i >= from && i
        // filtro por valores falsos para obtener solo los números en el rango
    ).filter(Boolean);

export const kata3 = (n, m) =>
    // Obtengo el rango
    range(n, m).map(n => [
            // el resultado es un array de 2 elementos por cada número del rango que contiene el número como primer elemento
            n,
            // y la suma del cuadrado de los divisores
            Array.from(
                {length: n},
                (_, x) => n % (x + 1) === 0 ? Math.pow(x + 1, 2) : null
            )
            .reduce((acc, n) => acc + n, 0)
        ])
        // se filtra la lista para incluir unicamente los elementos cuya raíz cuadrada devuelve un número entero
        .filter(([n, v]) => Number.isInteger(Math.sqrt(v)));