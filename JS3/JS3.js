function inc(value) {
	var secretValue = value;
	let newValue = function incr(){
		secretValue++
		return secretValue;
	}

	return newValue;
}

var valor = inc(1);
console.log(valor());
console.log(valor());
console.log(valor());