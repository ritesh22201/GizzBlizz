function createUser(name, score = 0) {
    let obj = Object.create({});
    obj.name = name;
    obj.score = score;

    return obj;
}

createUser.prototype.userMethods = {
    increaseScore : function (value) {
        this.score += value
    },
    
    decreaseScore : function (value) {
        this.score -= value
    },
    
    changeName : function (val) {
        this.name = val;
    }
}

const user1 = createUser('Arya', 10);
console.log(user1);