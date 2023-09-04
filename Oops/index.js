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
// console.log(user1.changeName('John'));


class CreateUser {
    constructor(name, score = 0){
        this.name = name;
        this.score = score;
    }

    increaseScore (val) {
        this.score += val
        return this.score
    }
    
    decreaseScore(value) {
        this.score -= value
        return this.score
    }
    
    changeName(val) {
        this.name = val;
        return this.name;
    }
}

const user2 = new CreateUser('John Snow', 34);
console.log(user2.increaseScore(10));