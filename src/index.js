export function min (array) {

	if (!arguments.length) {
		return;
	}
	let numberArrray = array.filter(number => typeof number === 'number');

	if (!numberArrray.length) {
		return;
	}

	return numberArrray.reduce((acc, currenValue) => (acc > currenValue ? currenValue : acc));
}


export function max (array) {

	if (!arguments.length) {
		return;
	}

	let numberArrray = array.filter(number => typeof number === 'number');

	if (!numberArrray.length) {
		return;
	}

	return numberArrray.reduce((acc, currenValue) => (acc < currenValue ? currenValue : acc));
}

max();

export function sum (... array) {

	let numberArrray = array.filter(number => typeof number === 'number');

	return arguments.length > 0 && numberArrray.length
	> 0 ? numberArrray.reduce((acc, currenValue) => acc + currenValue) : 0;
}