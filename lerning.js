const test = (...args) => {
    let msg = `length: ${args.length}, args: `;
    args.forEach(arg => { msg += ` ${arg} ` });
    console.log(msg);
}
console.log(test("Welcome"));