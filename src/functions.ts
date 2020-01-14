export interface MathFunction {
	name: string;
	identifier: string;
	usage: string;
	func: (values: Array<number>) => number;
}

let functions: Array<MathFunction> = [];

export function getFunctions(): Array<MathFunction> {
	return functions;
}

export function addFunction(name: string, identifier: string, usage: string, func: (values: Array<number>) => number) {
	functions.push({
		name: name,
		identifier: identifier,
		usage: usage,
		func: func
	})
}

export function getFunction(identifier: string): MathFunction | null {
	const func_list = getFunctions();
	let func: MathFunction;
	for (let i = 0; i < func_list.length; i++) {
		func = func_list[i];
		if (func.identifier == identifier) {
			return func;
		}
	}
	return null;
}

export function fetchValue(arr: Array<any>, index: number): number {
	if (typeof arr[index] == "number") {
		return arr[index];
	} else {
		return 0;
	}
}

addFunction("Cosinus", "cos", "cos(degrees)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.cos(num);
});

addFunction("Random", "rand", "rand(min, max)", (values: Array<number>) => {
	const min = fetchValue(values, 0);
	const max = fetchValue(values, 1);
	return Math.floor(Math.random() * (max - min)) + min;
});