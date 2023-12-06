


//数据存储结构
    class MyQueue {
          constructor() {
            this.pushStack = [];
            this.popStack = [];
          }
        // 行为？
          push(x) {
            this.pushStack.push(x);
          }
        
          pop() {
            if (this.popStack.length === 0) {
              while (this.pushStack.length !== 0) {
                this.popStack.push(this.pushStack.pop());
              }
            }
            return this.popStack.pop();
          }
        // 拿到front 的值
          peek() {
            if (this.popStack.length === 0) {
              while (this.pushStack.length !== 0) {
                this.popStack.push(this.pushStack.pop());
              }
            }
            return this.popStack[this.popStack.length - 1];
          }
        
          empty() {
            return this.pushStack.length === 0 && this.popStack.length === 0;
          }
        }
        