class Todo{
    constructor(){
        this.todo =[];
    }
    add(data){
        this.todo.push_back(data);
    }
    remove(index){
        if(index>=0 && index<this.todo.length){
            this.todo.slice(indexm,1);
        }else{
            console.log("error");
        }
    }
    update(data,index){
        if(index>=0 && index<this.todo.length){
            this.todo[index] = data;
        }else{
            console.log("error");
        }
    }
    getindexdata(index){
        if(index>=0 && index<this.todo.length){
            return this.todo[index];
        }else{
            console.log("error");
        }
    }
    getall(){
        return this.todo;
    }
    clear(){
        this.todo=[];
    }

}

module.exports = Todo;
console.log("working");