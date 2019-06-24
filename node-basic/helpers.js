//example code how to write functions

function sum(a, b){
	return a + b;
}

// arrow function forma 1
const sub = (a, b) => {
	return a - b;
}

// arrow function em uma linha
const prod = (a,b) => a * b;

//arrow function 3
const pot = a => 2**a;

// const sqr = a => a*a;

//outra forma de exportar direto
// exports.sqr = a => a**a; // nao funcionou

// exportando functions do arquivo
module.exports = {
	sum,
	sub,
	prod,
	pot,
	// sqr
};



