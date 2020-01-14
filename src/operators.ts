export interface MathOperator {
	name: string;
	identifying_symbol: string;
	usage: string;
	priority: number;
	func: (a: number, b: number) => number;
}

let operators: Array<MathOperator> = [];

export function getOperators() {
	return operators;
}

export function addOperator(name: string, identifying_symbol: string, usage: string, priority: number, func: (a: number, b: number) => number) {
	operators.push({
		name: name,
		identifying_symbol: identifying_symbol,
		usage: usage,
		priority: priority,
		func: func
	});
}

export function getOperator(identifying_symbol: string): MathOperator | null {
	const operator_list = getOperators();
	let operator: MathOperator;
	for (let i = 0; i < operator_list.length; i++) {
		operator = operator_list[i];
		if (operator.identifying_symbol == identifying_symbol) {
			return operator;
		}
	}
	return null;
}

addOperator("Addition", "+", "A + B", 0, (a, b) => {
	return a + b;
});

addOperator("Subtraction", "-", "A - B", 0, (a, b) => {
	return a - b;
});

addOperator("Multiplication", "*", "A * B", 1, (a, b) => {
	return a * b;
});

addOperator("Division", "/", "A / B", 1, (a, b) => {
	return a / b;
});