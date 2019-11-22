class Evaluate{
    constructor(expression){
        this.expression = expression;
        this.infixArray = null;
        this.postfixArray = [];
        this.operation=[];
    }
    infix(){
        this.infixArray = this.expression
        .replace(/\^/g, " ^ ")
        .replace(/\%/g, " % ")
        .replace(/\+/g, " + ")
        .replace(/\-/g, " - ")
        .replace(/\*/g, " * ")
        .replace(/\//g, " / ")
        .replace(/\)/g, " ) ")
        .replace(/\(/g, " ( ")
        .replace(/  /g, " ")
        .trim()
        .split(" ");
        // for(let i=0;i<this.expression.length;i++){
        //     this.infixArray[i+1]=this.expression[i];
        // }
        // this.infixArray.push(')');
    }

    postfix(){
        let operation=[];
        let  precedence = function(operator){
            switch(operator){
            case "^":
                return 3;
            case "*":
            case "/":
                return 2;
            case "+":
            case "-":
                return 1;
            default:
                return 0;
            }
        }
        let peek = function(operation) {
            return (operation.length != 0)? operation[operation.length-1]: 0;
        }
        for(let i=0;i<this.infixArray.length;i++){
            let op = this.infixArray[i];
            if(op >= 0 || op <= 9){
                this.postfixArray.push(op);
            }   
            else{
                if(op === '+' || op === '-' || op === '*' || op === '/' || op === '^'){
                    let precedenceOfOp = precedence(op);
                    if(precedence(peek(operation)) < precedenceOfOp) {
                        operation.push(op);
                    }
                    else{
                        while(precedence(peek(operation)) >= precedenceOfOp && operation.length > 0){
                            this.postfixArray.push(operation.pop())
                        }
                        operation.push(op)
                    }
                }
            }
        }
        while (operation.length!= 0){
            this.postfixArray.push(operation.pop());
        }
    }
    calculate(){
        let a=null,b=null,r=null;
        // this.postfixArray=['4','3','*','5','+','6','-'];
        let result=[];
        for(let i=0;i<this.postfixArray.length;i++){
            
            switch(this.postfixArray[i]){
                case '+':
                    a=parseInt(result.pop());
                    b=parseInt(result.pop());
                    r=b+a;
                    result.push(r);
                    break;
                case '-':
                    a=parseInt(result.pop());
                    b=parseInt(result.pop());
                    r=b-a;
                    result.push(r);
                    break;
                case '*':
                    a=parseInt(result.pop());
                    b=parseInt(result.pop());
                    r=b*a;
                    result.push(r);
                    break;
                case '/':
                    a=parseInt(result.pop());
                    b=parseInt(result.pop());
                    r=b/a;
                    result.push(r);
                    break;
                case '^':
                    a=parseInt(result.pop());
                    b=parseInt(result.pop());
                    r=a^b;
                    result.push(r);
                    break;
                default:
                    result.push(this.postfixArray[i]);
                    
            }
        }
        return result;
    }
    getResult(){
        console.log(this.postfixArray);
        this.infix();
        console.log(this.infixArray);
        this.postfix();
        console.log(this.postfixArray);
        return this.calculate();
    }
}

export default Evaluate;