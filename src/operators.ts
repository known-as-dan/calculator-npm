export interface Operator {
	name: string;
	identifying_symbol: string;
	priority: number;
	func: (a: number, b: number) => number;
}

let operators: Array<Operator>;

export function getOperators() {
	return operators;
}

export function addOperator(name: string, identifying_symbol: string, priority: number, func: (a: number, b: number) => number) {
	operators.push({
		name: name,
		identifying_symbol: identifying_symbol,
		priority: priority,
		func: func
	})
}

export function getOperator(identifying_symbol: string): Operator | null {
	const operator_list = getOperators();
	let operator: Operator;
	for (let i = 0; i < operator_list.length; i++) {
		operator = operator_list[i];
		if (operator.identifying_symbol == identifying_symbol) {
			return operator;
		}
	}
	return null;
}

addOperator("Addition", "+", 0, (a, b) => {
	return a + b;
});