




// let url12 = 'http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd';
// let urlStart = url.indexOf("filter");
// url = url.slice(urlStart);
// console.log(url);

let url = new URL('http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd');
console.log(url.protocol);
console.log(url.host);
let size = url.searchParams.getAll("size");
let collor = url.searchParams.getAll("color");
let manufacturer = url.searchParams.getAll("manufacturer");

let obj = {
    size,collor,manufacturer,
}


console.log(obj.size);


obj.collor.forEach(function (element) {


    let check = document.getElementById(`color-${element}`);
    check.checked = "true";
    console.log(check)


})
obj.size.forEach(function (element) {

console.log(element)
    let loverCaseElem = element.toLocaleLowerCase();

    let check = document.getElementById(`size-${loverCaseElem}`);
    check.checked = "true";
    console.log(check)


})

console.log(url);
obj.manufacturer.forEach(function (element) {
    console.log(url);
    console.log(element)
    let check = document.querySelector(`#manufacturer option[value="${element}"]`);
    // let loverCaseElem = element.toLocaleLowerCase();

    // let check = document.getElementById(`size-${loverCaseElem}`);
    check.selected = "true";
    console.log(check)


})

let elemSize = document.getElementsByClassName('size-el');

    [].forEach.call(elemSize, function (item, i) {
        item.addEventListener('click',function () {

            let value = item.id;

            let valueTrim = value.slice(5).toUpperCase();
            // console.log(url.searchParams.entries('size'));

            // url.searchParams.set("size", valueTrim);
            // console.log( url);



            var searchParams = new URLSearchParams("size=M&key2=value2");
            var paramsString = "?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd"
            var searchParams = new URLSearchParams(paramsString);
            for (let p of searchParams) {
                console.log(p);
            }

                // Display the key/value pairs
            for(var url of searchParams.entries()) {
                console.log(url[0]+ ', '+ url[1]);
            }
        })

    })



