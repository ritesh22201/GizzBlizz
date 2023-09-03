const userMethods = {
    increaseScore : function (value) {
        this.score += value
    },
    
    decreaseScore : function (value) {
        this.score -= value
    },
    
    changeName : function (val) {
        this.name = val;
        return this.name;
    }
}

function createUser(name, score = 0) {
    let obj = Object.create(userMethods);
    obj.name = name;
    obj.score = score;

    return obj;
}


const user1 = createUser('Arya', 10);
console.log(user1.changeName('John'));