const ob1 = {name: 'Ashish', city: 'Khurja', age: 22}

const ob2 = new Object()
const ob3 = {}
console.log(ob1)
ob1.Address=("N.H.24 Ghaziabad")
console.log(ob1)

let arr = [2,5,7,8,1,9]

arr.forEach(function () {
    console.log('hello')
});


delete ob1.city;
console.log(ob1);

ob1.name="Abhinav";
ob1.age=21;
console.log(ob1);