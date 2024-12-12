class Stack {
    constructor(){
        this.stack = []
    };
    push (ele){
        this.stack.push(ele);

    }
    pop(){
        if (this.isEmpty()){
            return "stack is empty "
        }
        return this.stack.pop();

    }
    isEmpty(){
      return this.size() === 0
    }
    peek(){
        if (this.isEmpty()){
            return "stack is empty "
        }
        return this.stack[this.size()-1];

    }
    size(){
        return this.stack.length;
    }
}
const mystack = new Stack();

const arr = [1,2,3,34,221];
for (let i of arr ){
    mystack.push(i);
}
var max = 0 ;
while (mystack.size() != 0){
    let curr = mystack.pop();
    if (max < curr ){
        max = curr ;
    }
    
}
console.log(max);