const add = (a,b) => {
    // console.log(arguments) ; 
    return (a+b) ; 
};

console.log(add(3,4,33));

const user = {
    name: 'andrew',
    cities: ['delhi' , 'wb' , 'kt'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());