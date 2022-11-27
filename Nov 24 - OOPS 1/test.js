function createOBJ(){
    this.x = 37;
    this.a = function forza(){console.log("hello")}
}
obj2 = new createOBJ();
obj2.a();

obj = {
    x : 377 ,
    a : function forza(){console.log(this.x)}
}

obj.a();