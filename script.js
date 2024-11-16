


// 1. შექმენით ფუნქცია, რომელიც იღებს ობიექტს და აბრუნებს ველის(key) მნიშვნელობას.

    function objectKeyValue(params) {
        return params.field        
    }


    const fieldOfProgramming = {
        field: "back-end developer"
    }

    console.log(objectKeyValue(fieldOfProgramming));
    

    //2. დაწერეთ ფუნქცია, რომელიც იღებს მასივს და აბრუნებს ყველა ლუწ რიცხვს.

    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenArr = [];

    numArr.forEach(evenNumsOfArr);
    
    

    function evenNumsOfArr(element) {
        if(element % 2 == 0) evenArr.push(element)
    }
    
    console.log(evenArr);
    

    // 3. შექმენით ფუნქცია, რომელიც იღებს მასივს და კრებს(აჯამებს) მასივში არსებულ ყველა რიცხვს.

    function sumArray(arr) {
        let sum = 0;
        arr.forEach(function (element) {
            sum += element; 
        });
        return sum;
    }
    
    let numsArr = [1, 2, 3, 4, 5];
    console.log(sumArray(numsArr)); 
    
    // 4. დაწერეთ პროგრამა, რომელიც იყენებს ობიექტს და შაბლონურ ლიტერალს(template literals) , რათა დაბეჭდოს "User: [name], Age: [age]".

    const person = {
        firstName: "nikoloz",
        age: 20
    }

    function someFun(param) {
        console.log(`User: ${param.firstName}, Age: ${param.age}`);
        
    }

    someFun(person)

    // 5. შექმენით ფუნქცია, რომელიც იღებს მასივს და ობიექტს, ამატებს ახალ ელემენტს მასივში და აბრუნებს განახლებულ ობიექტს.

    const car = {
        carName: "Toyota",
        carModel: "CH_R"
    }


    let arrOb = [car.carName, car.carModel]

    function addVal(params) {
        params.year = 2020;
        arrOb.push(params.year)
        return params
    }

    console.log(addVal(car));
    