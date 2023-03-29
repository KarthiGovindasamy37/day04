let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload= function(){
    let countrydata = JSON.parse(this.response);
    for(let ele of countrydata){
        console.log("Names :",ele.name);
        console.log("Region :",ele.region);
        console.log("Sub-region :",ele.subregion);
        console.log("Population :",ele.population);
        console.log("Flag :",ele.flag)
    }
}

    let isEqualsJson = (obj1,obj2)=>{
        keys1 = Object.keys(obj1);
        keys2 = Object.keys(obj2);
    
            return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
    }
    var obj1 = { name: "Person 1", age:5 };
    var obj2 = { age:5, name: "Person 1" };
    console.log(isEqualsJson(obj1,obj2));