let obj = {
    "name":"Siddhesh",
    age: 19,
    weight:62,
    Height: "5ft 9 in",
    greet: function(){
        console.log("Hello guys how are you!");
    }
};
console.log(obj);
obj.greet();

let obj2 = obj; //Shallow copy creates a reference 