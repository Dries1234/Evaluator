const Brainfuck = require("./brainfuck")
const triangle =` 
++++++++[>+>++++<<-]>++>>+<[-[>>+<<-]+>>]>+[
    -<<<[
        ->[+[-]+>++>>>-<<]<[<]>>++++++[<<+++++>>-]+<<++.[-]<<
    ]>.>+[>>]>+
]`
let bf = new Brainfuck();
const result = bf.evaluate(triangle);
console.log(result);
