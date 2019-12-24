export function parse(str: string): Array<any> {
	str = str.replace(/\s/g, ""); // removes all white-space characters

	for (let i: number = 0; i < str.length; i++) {

	}
	return [];
}

const math: string = "5 + 5\n 5";
let parsed_math: Array<any> = parse(math);

console.log(parsed_math);