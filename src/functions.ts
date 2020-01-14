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

addFunction("Absolute", "abs", "abs(num)", (values: Array<number>) => {
	const num = fetchValue(values, 0);
	return Math.abs(num);
});

addFunction("Square Root", "sqrt", "sqrt(num)", (values: Array<number>) => {
	const num = fetchValue(values, 0);
	return Math.sqrt(num);
});

addFunction("Cosine", "cos", "cos(degrees)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.cos(num * (Math.PI / 180));
});

addFunction("Sine", "sin", "sin(degrees)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.sin(num * (Math.PI / 180));
});

addFunction("Tangent", "tan", "tan(degrees)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.tan(num * (Math.PI / 180));
});

addFunction("Reverse Cosine", "acos", "acos(num)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.acos(num);
});

addFunction("Reverse Sine", "asin", "asin(num)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.asin(num);
});

addFunction("Reverse Tangent", "atan", "atan(num", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.atan(num);
});

addFunction("Round", "round", "round(num)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.round(num);
});

addFunction("Floor", "floor", "floor(num)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.floor(num);
});

addFunction("Ceiling", "ceil", "ceil(num)", (values: Array<number>) => {
	const num: number = fetchValue(values, 0);
	return Math.ceil(num);
});

addFunction("Random", "rand", "rand(min, max)", (values: Array<number>) => {
	const min = fetchValue(values, 0);
	const max = fetchValue(values, 1);
	return Math.floor(Math.random() * (max - min)) + min;
});

addFunction("Fixed Decimal Places", "toFixed", "toFixed(min, max)", (values: Array<number>) => {
	const num = fetchValue(values, 0);
	const decimal_places = fetchValue(values, 1);
	return Number(num.toFixed(decimal_places));
});