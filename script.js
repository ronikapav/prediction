const btn = document.querySelector('.user');
const message = document.querySelector('.message');
const pictures = document.querySelector('.profile');
const block = document.querySelector('.none');
const button = document.querySelector('.btn');


const quotes = ['Стремитесь не к успеху, а к ценностям, которые он дает.',
'Начинай уже сейчас жить той жизнью, какой ты хотел бы видеть ее в конце.',
'Лучший способ предсказать своё будущее – стать его создателем.',
'Не думай о том, правильно ли это или нет.. Делай то, что делает тебя счастливым!',
'Танцуй, словно тебя никто не видит, пой, словно тебя никто не слышит, люби, словно тебе не причиняли боль, и живи, словно рай уже на земле.'
];
const picture = ['https://images.unsplash.com/photo-1576208260304-8bf8f7f531fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'https://images.unsplash.com/photo-1515592614568-6b5248d804a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1572691485055-5eefb3648051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', 'https://images.unsplash.com/photo-1433878455169-4698e60005b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'];

button.addEventListener('click', () => {
    let randomQuote = quotes [Math.floor(Math.random() * quotes.length)];
    block.style.display = 'block';
    message.textContent = randomQuote;

    let randomPicture = picture [Math.floor(Math.random() * picture.length)];
    pictures.style.display = 'block';
    pictures.src = randomPicture;
    button.style.display = 'none';
})

btn.addEventListener('click', () => {
    block.style.display = 'none';
    pictures.style.display = 'none';
    button.style.display = 'block';
})