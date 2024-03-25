var str = "salom !!!";
var num = 1234;
var bool = false;
var arr = ["foo", "bar"];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr3 = ["foo", "bar", 1, 2, 3, 4, 5];
var person;
person = {
    name: "Aziz",
    age: 25
};
// console.log(person);
function getFullInfo(name, age, hobbis) {
    return name + " " + age + " " + hobbis.map(function (e) { return e + " hi"; });
}
// console.log(getFullInfo("Aziz",22 ,["fodbol", "bascetbol", "shahmat"]));
var text = document.querySelector("#text");
function getInfo(data) {
    console.log(data);
}
getInfo(text);
var sum = 1234;
console.log(sum);
var test = {
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
};
