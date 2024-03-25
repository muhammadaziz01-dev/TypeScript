//String------------------------------------------

let color: string = "blue";
color = 'red'; 
// console.log(color);


// Number------------------------------------------

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// console.log(decimal, hex, binary, octal);


// Boolean --------------------------------

let isTrue: boolean = true;
let isFalse: boolean = false;

// console.log(isTrue, isFalse);


// Null and Undefined --------------------------------

let u: undefined = undefined;
let n: null = null;
// console.log(u, n); 

// Symbol -----------------------------------

let sym1 = Symbol();
let sym2 = Symbol("key");
// console.log(sym1, sym2);

//BigInteger --------------------------------

let bi: bigint = 1234567890123456789012345678901234567890n;

// console.log(typeof bi);


// Any --------------------------------

let a: any = 1234;
let b: any = "1234";
let c: any = true;
let d: any = null;
let e: any = undefined;

// console.log(a, b, c, d, e);


// ====== UNION , TUPLES ,  LITERAL =================================================

// UNION --------------------------------
let unionId: string | number |boolean;

unionId = "1234567890"; //string
unionId=122222;         //number
unionId=false;          //boolean

// console.log(unionId);

// TUPLES --------------------------------

let tupleId: [string, number, boolean];

tupleId = ["1234567890", 122222, false];

// console.log(tupleId);

// LITERALS --------------------------------

let literalId: "1234567890" | 122222 | false | 12344n;

literalId = "1234567890"; //to'gri
literalId = 122222;       //to'gri
literalId = false;        //to'gri

//literalId = undefined;    //hatolik

// console.log(literalId);



// ====== TYPE OBJECT , ARRAY  =================================================

//  OBJECT --------------------------------

let user: {
    name: string;
    age: number;
    stodent: boolean;
};

user = {
    name: "Muhammadaziz",
    age: 22,
    stodent: true
};

// console.log(user); //{ name: 'Muhammadaziz', age: 22, stodent: true }

// ARRAY --------------------------------

let list: number[] = [1, 2, 3];
// console.log(list); // [1, 2, 3]

let names: Array<string> = ['John', 'Doe'];
// console.log(names); // ['John', 'Doe']

let list2 : (number|string)[] = [1, 2, 3 , 'John', 'Doe'];
// console.log(list2); //[ 1, 2, 3, 'John', 'Doe' ]

//TYPE Aliases----------------------------------------------

type stringOrNumber = string | number;

let strOrNum: stringOrNumber = "1234";

// console.log(strOrNum); // 1234

//=====Function =================================================

function add(a: number, b: number): number {
    return a + b;
}

//console.log(add(1, 2)); // 3

function add2(a: number, b: number): void {
    console.log(a+b); 
}

//add2(1, 2);

//==============ITERFACE============================

interface User {
    name: string;
    age: number;
    stodent: boolean;
}

let user1: User = {
    name: "Muhammadaziz",
    age: 22,
    stodent: true
};
//console.log(user1); // { name: 'Muhammadaziz', age: 22, stodent: true }

let user2: User = {
    name: "Aziz",
    age: 21,
    stodent: false
};
//console.log(user2); // { name: 'Aziz', age: 21, stodent: false }

// ======QO'SHIMCHA ==================================================

interface industryIdentifiers{
    type: string;
    identifier: string;
}

interface readingModes{
    text: boolean;
    image: boolean;
}

interface panelizationSummary{
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

interface imageLinks{
    smallThumbnail: string;
    thumbnail: string;
}
interface volumeInfo{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description:string;
    industryIdentifiers: industryIdentifiers[];
    readingModes: readingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating:string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: panelizationSummary;
    imageLinks: imageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}



interface fullInfoBook{
    kind: string;
    id:string;
    etag:string;
    selfLink:string;
    volumeInfo: volumeInfo;
    
}


let bookInfo: fullInfoBook= {
    "kind": "books#volume",
    "id": "MaWmtb0gQVQC",
    "etag": "TtT3MD+Yjdc",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/MaWmtb0gQVQC",
    "volumeInfo": {
        "title": "My Little Brother Chrisno",
        "authors": [
            "Drake Gunnell",
            "Darlene Gunnell"
        ],
        "publisher": "Innovo Publishing, LLC",
        "publishedDate": "2010-05-03",
        "description": "ABOUT THE BOOK: This book is to help children understand adoption, bring awareness to the good works of Angel Missions Haiti, and give acknowledgement to the healthcare workers who go above and beyond to save lives through their charitable acts of compassion and love for all people. \"Generous hands are blessed hands because they give bread to the poor.\" -Proverbs 22:9 ----ABOUT THE AUTHORS: Author and illustrator Drake Gunnell is on the \"A\" honor roll at his elementary school. He loves to draw and enjoys playing soccer, piano, and guitar. Darlene Ingram Gunnell, Drake's mom, works full-time as a Physical Therapist Assistant and is a part-time student pursuing a biomedical degree. She is co-owner of Ratatat Sounds Recording Studio. In 2010, Darlene and her husband of 21 years adopted 3-year-old Chrisno from Haiti. The Gunnell Family-William, Darlene, Drew, Derrick, Drake, and Chrisno-currently reside in Ringgold, Virginia.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9781936076222"
            },
            {
                "type": "ISBN_10",
                "identifier": "1936076225"
            }
        ],
        "readingModes": {
            "text": true,
            "image": true
        },
        "pageCount": 27,
        "printType": "BOOK",
        "categories": [
            "Education"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.3.3.0.preview.3",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=MaWmtb0gQVQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=MaWmtb0gQVQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "ru",
        "previewLink": "http://books.google.co.uz/books?id=MaWmtb0gQVQC&pg=PA8&dq=my&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.uz/books?id=MaWmtb0gQVQC&dq=my&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/My_Little_Brother_Chrisno.html?hl=&id=MaWmtb0gQVQC"
    }

}
