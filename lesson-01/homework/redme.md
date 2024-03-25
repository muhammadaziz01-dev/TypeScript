##   TypeScript  Homework-1
### PRIMATIVE TYPES: 

- **PRIMATIVE -**  *JS dagi biz bilgan primativ tayplar yni: string , number , null , undefined , boolean , symbol , bigInt. Bularni misollar orqali yanaham yahshiroq tushunib olishligimiz mumkun quyda TypeScripda primatibv turdagi malumotlar qanday elon qilinishligi yoki aytishimiz mumkun qay tariqa yozilishi ko'rsatilgan. Biz har bir primativ typni JavaScripta bilganligimiz uchun ularga sharh yozmaymizda to'gridan to'gri misollarni ko'rib chiqamiz , bo'lmasam boshladik.*

1. **String** 
```
let color: string = "blue";
color = 'red'; 
console.log(color); // red
```
- **Eslatma :** *Biz boshida o'zgaruvchimizga qaysi tipni belgilagan bo'lsak unig qiymatini keginchalik faqat shu tiptagi giymatga o'zgartira olamiz , yani "string" dagi dep berilgan o'zgaruvchimizga hichqachon 'number' yoki 'boolen' tipidagi qiymatnga ozgartira olmaymiz.*

2. **Number** 

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal); // 6 61453 10 484
```

3. **Boolean**

```
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(isTrue, isFalse); // true and false
```

4. 5. **Null and Undefined**

```
let u: undefined = undefined;
let n: null = null;
console.log(u, n); // undefined null
```

6. **Boolean**

```
let sym1 = Symbol();
let sym2 = Symbol("key");
console.log(sym1, sym2); // Symbol() Symbol(key)
```

7. **BigInt**

```
let bi: bigint = 1234567890123456789012345678901234567890n;

console.log(bi); //1234567890123456789012345678901234567890n
console.log(typeof bi); // bigint
```

<hr>

### UNION , TUPLES , LITERAL  

- **UNION -** *Bunda biz o'zgaruvchimiz qaysi tiplarda bo'lishi mumkunligi desak ham bo'ladi yani "UNION" tipi odatda 2 yoku undan ortiq tipda bolishi mumkun bo'lgaan holatlarda qo'llaniladi , buni misol orqali ko'radigamn bo'lsak yanaham tushunarliroq bo'ladi.*

```
let unionId:string | number |boolean;

unionId = "1234567890"; //string
unionId=122222;         //number
unionId=false;          //boolean

console.log(unionId);
```
- **TUPLES -** *Misolda ko'rishligimiz mumkun "TUPLES" typiga ega boo'gan masiv , yani tartiblangan massiv o'z nomi bilan malumki bunda biz masivga berilgan typdagi qiymatlarni o'z tartibi bo'yicha , tartibini o'zgartirmagan holda va undan kam ham ko'pham bo'lmagan tartipda qiymat kiritishligimiz mumkun.*

```
let tupleId: [string, number, boolean];

tupleId = ["1234567890", 122222, false];

console.log(tupleId);
```

- **LITERAL -** *Bu typni ham qisman yuqoridagi "TUPLES" qiyoslasak bo'ladi farqli jihati shundaki bunda typlarni tayinlamaymiz balki qiymatlani tayinlaymiz yaniki biz o'zgaruvchimiz biz tayinlagan qiymatlarni gin qabul qiladi aksi boladigan bolsa hatolik keltirib chiqaradi , misolda yanaham yahshiroq tushunishligim mumkun.*

```
let literalId: "1234567890" | 122222 | false | 12344n;

literalId = "1234567890"; //to'gri
literalId = 122222;       //to'gri
literalId = false;        //to'gri

//literalId = undefined;    //hatolik

console.log(literalId);
```

<hr>

### TYPE OBJECT , ARRAY 

- **OBJECT -** *TypeScripda objectni yaratishlikni misol bilan ko'rsak tushunish osonroq bo'ladi , qisqa tiyoriya keltiradigan bo'lsak hudiki object uchun qolib yasab olinadi unig mavjud kylari hamda ular olishi mumkun bo'lgan qiymatlar typi beriladi va shu asniosida objject yasaladi , takidlab o'tishlik joyizki misoldaqgi qiyolagan qolibimizdagi birorta kyni yozmasdan ketsak ham hatolik beradi va undan mavjud bo'lmaga kyni "propportini" ham oshib yozadigan bo'lsak hatolik beradi objekt yasashlik vaqtida*

```
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

console.log(user); //{ name: 'Muhammadaziz', age: 22, stodent: true }
```

- **ARRAY -** *Massivlar, biror turdagi elementlarni o'z ichiga oladi. [1, 2, 3] yoki ['salom', 'dunyo'] kabi. Kelin buni misold ko'ramiz yanaham tushunarliroq bo'ladi , agar massivimizda 2 yoki undan ortiq typdagi malumot kiritilsa ularnig typi avalida beriladi.*

```
let list: number[] = [1, 2, 3];
console.log(list); // [1, 2, 3]

let names: Array<string> = ['John', 'Doe'];
console.log(names); // ['John', 'Doe']

let list2 : (number|string)[] = [1, 2, 3 , 'John', 'Doe'];
console.log(list2); //[ 1, 2, 3, 'John', 'Doe' ]
```

- **TYPE Aliases -** *Bunda biz o'zimiz uchin 2 yoku undan ortiq typlarni o'zida jamlab olgan bir typ yasab olamiz desak ham bo'ladi buni misolda ko'rsak yanaham tushunarliroq bo'ladi.*

```
type stringOrNumber = string | number;

let strOrNum: stringOrNumber = "1234";

console.log(strOrNum); // 1234
```
<hr>

### FUNCTIONS

- **Function -** *TypeScripda funcsiya yozishlikda unig parametiriga ke;adigan qiymatlarini typlari kiritiladi va agar funcsiyamiz retur qilsa yani nimanudur qaytarsa shu qaytariluvchi narsani typi ham kiritiladi agar funcsiyamiz returin qilmasa malum bir vazifanigina baarsa bunday funcsiyalarimizg "void" typi hisoblanadi , buni misolda ko'rsak yanaham tushunishlikka osonroq bo'ladi.* 

```
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2)); // 3

function add2(a: number, b: number): void {
    console.log(a+b); // 3
}

add2(1, 2);
```
<hr>

### ITERFACE

- **ITERFACE -** *TypeScriptda obyektlarning strukturini va xususiyatlarini aniqlash uchun ishlatiladi. Bu, bir obyektning qaysi maydonlarga ega bo'lishi kerakligini ifodalaydi. interfacelar to'g'ri yozuvni osonlashtirish uchun va kodni tuzatishda yordam beradi.*

```
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
console.log(user1); // { name: 'Muhammadaziz', age: 22, stodent: true }

let user2: User = {
    name: "Aziz",
    age: 21,
    stodent: false
};
console.log(user2); // { name: 'Aziz', age: 21, stodent: false }
```

<hr>

### **Nazaryi bilimni mustahkamlashlik ucun misol**

```
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
```
