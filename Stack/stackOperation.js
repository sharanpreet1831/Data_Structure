class Stack {
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if (this.isEmpty()){
            return "stack is empty "
        }
        this.stack.pop();

    }
    isEmpty(){
        return this.size() === 0;
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



// const mystack = new Stack();
// mystack.push(10);
// mystack.push(13);
// mystack.push(9);
// mystack.push(2);
// console.log(mystack.peek());
// console.log(mystack.size());


const reverse = function(s){
    const splits = s.split(" ");
    const stack = [];
    for ( let i of splits){
        stack.push(i);
    }
    let  final = "";
    while(stack.length){
        const current = stack.pop();
        if (current){
            final += " "+ current;
        }
    }
    return final.trim();
};
console.log(reverse("hello world"));