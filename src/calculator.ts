import { Operator, getOperator } from "./operators";

function charIsNumber(char: string) {
	if ("0" <= char && char <= "9") {
		return true;
	} else {
		return false
	}
}

function charIsLetter(char: string): boolean {
	const letter_regex = /\w(?<!\d)/g // finds letters in a string
	return letter_regex.test(char);
}

function charIsSymbol(char: string): boolean {
	const symbol_regex = /\W(?<!\s)/g // finds symbols in a string
	return symbol_regex.test(char);
}

function charIsWhitespace(char: string): boolean {
	const whitespace_regex = /\s/g // finds whitespace in a string
	return whitespace_regex.test(char);
}

/**
 * Allows you to find the index of the closing character when parsing 
 * a string with something like parantheses where you might want to nest
 * them within each other
 * - Return format => Array<number> = [opening_char_index, closing_char_index]
 * - Returns -1 if a value wasn't found, so if the opening char wasn't found => [-1, closing_char_index]
 * @param open opening character
 * @param close closing character
 * @param start index to start the search at
 * @param end index to end the search at
 * @param str string to analyze
 */
function findClosingCharacter(open: string, close: string, start: number, end: number, str: string): Array<number> {
	let char: string;
	let nesting_level = 0;
	let opening_char_index = -1;
	let closing_char_index = -1;
	for (let i = start; i <= end; i++) {
		char = str[i];
		if (char == open) {
			nesting_level++;
			if (nesting_level == 1) {
				opening_char_index = i;
			}
		} else if (char == close) {
			nesting_level--;
			if (nesting_level == 0) {
				closing_char_index = i;
				break;
			}
		}
	}

	return [opening_char_index, closing_char_index];
}

function conditionalReturn(condition: boolean, true_: any, false_: any): any {
	if (condition) {
		return true_;
	} else {
		return false_;
	}
}

export function parse(str: string, start?: number, end?: number): Array<any> {
	start = start || 0;
	end = end || (str.length - 1);

	let parsed_str_array: Array<any> = [];
	let char: string;
	let enclosure_data: Array<any>;
	let closing_char_index: number;
	let buffer = "";
	let buffer_type = "none";
	for (let i = start; i <= end; i++) {
		char = str[i];
		if (start == 18) {
			console.log(char);
		}
		if (charIsWhitespace(char)) {
			continue;
		} else if (charIsNumber(char) || char == ".") {
			if (buffer_type == "word") {
				parsed_str_array.push(buffer);
				buffer = ""
			}
			buffer += char;
			buffer_type = "number";
		} else if (charIsSymbol(char)) {
			if (buffer_type == "word") {
				parsed_str_array.push(buffer);
				buffer = ""
				buffer_type = "none";
			} else if (buffer_type == "number") {
				parsed_str_array.push(Number(buffer));
				buffer = ""
				buffer_type = "none";
			}
			if (char == "(") {
				enclosure_data = findClosingCharacter("(", ")", i, end, str);
				closing_char_index = enclosure_data[1];
				parsed_str_array.push(parse(str, i + 1, closing_char_index - 1));
				i = closing_char_index;
			} else if (char == ",") {
				if (buffer_type == "word") {
					parsed_str_array.push(buffer);
					buffer = ""
					buffer_type = "none";
				} else if (buffer_type == "number") {
					parsed_str_array.push(Number(buffer));
					buffer = ""
					buffer_type = "none";
				}
			} else {
				parsed_str_array.push(char);
			}
		} else if (charIsLetter(char)) {
			if (buffer_type == "number") {
				parsed_str_array.push(Number(buffer));
				buffer = ""
			}
			buffer += char;
			buffer_type = "word";
		}

		if (i == end) {
			if (buffer_type == "word") {
				parsed_str_array.push(buffer);
			} else if (buffer_type == "number") {
				parsed_str_array.push(Number(buffer));
			}
		}
	}

	return parsed_str_array;
}

export function calculate(math: Array<any>): any {
	math = [...math]

	let value: any;
	let operator: Operator | null;
	for (let i = 0; i < math.length; i++) {
		value = math[i];

		if (typeof value == "number") { continue; }
		
	}
	return math;
}

const math = "1 + cos (45, (5 + 5))";
const parsed_math = parse(math);
const math_result = calculate(parsed_math);

console.log("parse result:");
console.log(parsed_math);
console.log("result:");
console.log(math_result);