export interface Function {
	name: string;
	identifier: string;
	func: (a: number, b: number) => number;
}

let functions: Array<Function>;

export function getFunctions(): Array<Function> {
	return functions;
}

export function addFunction(name: string, identifier: string, func: (a: number, b: number) => number) {
	functions.push({
		name: name,
		identifier: identifier,
		func: func
	})
}

export function getFunction(identifier: string): Function | null {
	const func_list = getFunctions();
	let func: Function;
	for (let i = 0; i < func_list.length; i++) {
		func = func_list[i];
		if (func.identifier == identifier) {
			return func;
		}
	}
	return null;
}