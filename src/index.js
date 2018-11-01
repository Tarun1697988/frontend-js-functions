function getMaxValue (prevValue, currentValue) {
	return prevValue > currentValue ? prevValue : currentValue;
}

function getMinValue (prevValue, currentValue) {
	return prevValue < currentValue ? prevValue : currentValue;
}

function getSum (prevValue, currentValue) {
	return prevValue + currentValue;
}


export function max (numbers = []) {
	return numbers
      .filter(number => typeof number === 'number')
      .reduce(getMaxValue, undefined);
}

export function min (numbers = []) {
	return numbers
      .filter(number => typeof number === 'number')
      .reduce(getMinValue, undefined);
}

export function sum (... array) {
	return array
      .filter(number => typeof number === 'number')
      .reduce(getSum, 0);
}