"use strict";
//String------------------------------------------
let color = "blue";
color = 'red';
// console.log(color);
// Number------------------------------------------
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// console.log(decimal, hex, binary, octal);
// Boolean --------------------------------
let isTrue = true;
let isFalse = false;
// console.log(isTrue, isFalse);
// Null and Undefined --------------------------------
let u = undefined;
let n = null;
// console.log(u, n); 
// Symbol -----------------------------------
let sym1 = Symbol();
let sym2 = Symbol("key");
// console.log(sym1, sym2);
//BigInteger --------------------------------
let bi = 1234567890123456789012345678901234567890n;
// console.log(typeof bi);
// Any --------------------------------
let a = 1234;
let b = "1234";
let c = true;
let d = null;
let e = undefined;
// console.log(a, b, c, d, e);
// ====== UNION , TUPLES ,  LITERAL =================================================
// UNION --------------------------------
let unionId;
unionId = "1234567890"; //string
unionId = 122222; //number
unionId = false; //boolean
// console.log(unionId);
// TUPLES --------------------------------
let tupleId;
tupleId = ["1234567890", 122222, false];
// console.log(tupleId);
// LITERALS --------------------------------
let literalId;
literalId = "1234567890"; //to'gri
literalId = 122222; //to'gri
literalId = false; //to'gri
//literalId = undefined;    //hatolik
// console.log(literalId);
// ====== TYPE OBJECT , ARRAY  =================================================
//  OBJECT --------------------------------
let user;
user = {
    name: "Muhammadaziz",
    age: 22,
    stodent: true
};
// console.log(user); //{ name: 'Muhammadaziz', age: 22, stodent: true }
// ARRAY --------------------------------
let list = [1, 2, 3];
// console.log(list); // [1, 2, 3]
let names = ['John', 'Doe'];
// console.log(names); // ['John', 'Doe']
let list2 = [1, 2, 3, 'John', 'Doe'];
let strOrNum = "1234";
// console.log(strOrNum); // 1234
//=====Function =================================================
function add(a, b) {
    return a + b;
}
//console.log(add(1, 2)); // 3
function add2(a, b) {
    console.log(a + b);
}
let user1 = {
    name: "Muhammadaziz",
    age: 22,
    stodent: true
};
//console.log(user1); // { name: 'Muhammadaziz', age: 22, stodent: true }
let user2 = {
    name: "Aziz",
    age: 21,
    stodent: false
};
let bookInfo = {
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
};
