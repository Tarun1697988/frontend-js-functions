function getMaxValue (prevValue, currentValue) {
	return prevValue > currentValue ? prevValue : currentValue;
}

function getMinValue (prevValue, currentValue) {
	return prevValue < currentValue ? prevValue : currentValue;
}

function getSum (prevValue, currentValue) {
	return prevValue + currentValue;
}

function getNumber (number) {
	return typeof number === 'number';
}

export function max (numbers = []) {
	return numbers
      .filter(getNumber)
      .reduce(getMaxValue, undefined);
}

export function min (numbers = []) {
	return numbers
      .filter(getNumber)
      .reduce(getMinValue, undefined);
}

export function sum (... array) {
	return array
      .filter(getNumber)
      .reduce(getSum, 0);
}