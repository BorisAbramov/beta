let phrases = [
    {text: 'Отправить другу гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'},
    {text: 'посмотреть скидки на авиабилеты', image:'https://code.s3.yandex.net/web-code/procrastinate/2.png'},
    {text: 'посмотреть Youtube', image:'https://code.s3.yandex.net/web-code/procrastinate/3.png'},
    {text: 'расставить книги на полке по цвету', image:'https://code.s3.yandex.net/web-code/procrastinate/4.png'},
    {text: 'налить себе чай', image:'https://code.s3.yandex.net/web-code/procrastinate/5.png'},
    {text: 'бесконечно долго смотреть в окно', image:'https://code.s3.yandex.net/web-code/procrastinate/6.png'},
    {text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image:'https://code.s3.yandex.net/web-code/procrastinate/7.png'},
    {text: 'прочитать новости в телеге и ужануться комментариям под ними', image:'https://code.s3.yandex.net/web-code/procrastinate/8.png'},
];

function getRandomElement(arr){
let randIndex = Math.floor(Math.random()*arr.length);

return arr[randIndex];
}

// let randomElement = getRandomElement(phrases);
// console.log(randomElement);

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');



button.addEventListener('click', function (){
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
    if (randomElement.length > 40){
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }  
});

for (let i=0; i<=2; i=i+1){
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
};

