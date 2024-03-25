let str:string = "salom !!!";
let num:number =1234;
let bool:boolean = false;
let arr:Array<string> =["foo", "bar"];
let arr2:number[]=[1,2,3,4,5,6,7,8,9];
let arr3: (string|number)[] = ["foo", "bar" , 1 , 2 , 3 , 4 , 5];

let person : {
    name: string;
    age: number;
};

person = {
    name: "Aziz",
    age: 25
};

// console.log(person);


function getFullInfo(name:string , age:number , hobbis:Array<string>):any{
     return name + " " + age + " " + hobbis.map((e) => e + " hi")
} 

// console.log(getFullInfo("Aziz",22 ,["fodbol", "bascetbol", "shahmat"]));


let text = document.querySelector("#text");  

function getInfo(data:any):void{
    console.log(data);
}

getInfo(text);

type unite = string | number;

let sum :unite= 1234;

console.log(sum);

interface obj {
    uz:string;
    cyr:string;
    ru:string; 
}

interface img {
    imeges:string;
}


interface getFullInfo {
    nam: obj;
    cotigory:string;
    subCotigory:string;
    mainImg:string;
    price:number;
    isHaveColor: boolean;
    imges:img[];
    deliveriInfo:obj;
    propertInfo:obj;
    finalPrasiInfo:obj;
    populPrasiInfo:obj;
    packageCode:string;
}

//============================================================================

interface objColors{
      name:string;
      color:string;
}
interface obgSize{
    name:string;
}

interface objUnits{
    title:string;
    sizes:obgSize[];
}

interface fullInfo{
    name:string;
    images:string[];
    price:string;
    shortDescription:string;
    longDescription:string;
    category:string;
    subCategory:string;
    brand:string;
    count:number;
    colors:objColors[];
    units:objUnits;
}

let test :fullInfo = {
    "name": "Smartfon iPhone 14 Pro 128GB Purple",
    "images": [
        "https://images.uzum.uz/ci1g91rltlh4bk4laa30/original.jpg",
        "https://images.uzum.uz/ci1g91r6edfostigj1u0/original.jpg",
        "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/original.jpg"
    ],
    "price": "15000000",
    "shortDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "longDescription": "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
    "category": "64c6de0d4d748db5916c3d30",
    "subCategory": "64c8d732b823d24b1c38835a",
    "brand": "64ca3c52afa7a02dcbcf49c6",
    "count": 10,
    "colors": [
        {
            "name": "Qora",
            "color": "#000"
        },
        {
            "name": "Oq",
            "color": "#fff"
        }
    ],
    "units": {
        "title": "Xotira",
        "sizes": [
            {
                "name": "128GB"
            },
            {
                "name": "256GB"
            }
        ]
    }
}
