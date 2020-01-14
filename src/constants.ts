export interface MathConstant {
	name: string;
	identifier: string;
	value: number;
}

let constants: Array<MathConstant> = [];

export function getConstants() {
	return constants;
}

export function addConstant(name: string, identifier: string, value: number) {
	constants.push({
		name: name,
		identifier: identifier,
		value: value
	});
}

export function getConstant(identifier: string): MathConstant | null {
	const constant_list = getConstants();
	let constant: MathConstant;
	for (let i = 0; i < constant_list.length; i++) {
		constant = constant_list[i];
		if (constant.identifier == identifier) {
			return constant;
		}
	}
	return null;
}

addConstant("Pie", "PI", Math.PI);
addConstant("Euler's number", "e", 2.71828182846);
addConstant("Zero", "Zero", 0);
addConstant("One", "One", 1);