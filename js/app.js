var personages = [
    {
        id: 'twilight_sparkle',
        name: 'Twilight Sparkle',
        img: '/mlp/img/personages/twilight_sparkle.png'
    },
    {
        id: 'spike',
        name: 'Spike',
        img: '/mlp/img/personages/spike.png'
    },
    {
        id: 'rainbow_dash',
        name: 'RainbowDash',
        img: '/mlp/img/personages/rainbow_dash.png'
    },
    {
        id: 'rarity',
        name: 'RainbowDash',
        img: '/mlp/img/personages/rarity.png'
    },
    {
        id: 'fluttershy',
        name: 'Fluttershy',
        img: '/mlp/img/personages/fluttershy.png'
    },
    {
        id: 'pinkie_pie',
        name: 'Pinkamina Diane "Pinkie" Pie',
        img: '/mlp/img/personages/pinkie_pie.png'
    },
    {
        id: 'applejack',
        name: 'Applejack',
        img: '/mlp/img/personages/applejack.png'
    }
];

var questions = [
    {
        question: 'If you had a power of one of the elements of harmony, which one would you have?',
        answers: [
            {
                answer: 'Magic',
                personages: ['twilight_sparkle', 'rarity'],
                background: '#d81b60'
            },
            {
                answer: 'Honesty',
                personages: ['twilight_sparkle'],
                background: '#536dfe'
            },
            {
                answer: 'Generosity',
                personages: ['rainbow_dash', 'pinkie_pie'],
                background: '#388e3c'
            },
            {
                answer: 'Fire',
                personages: ['spike'],
                background: '#24b2ca'
            },
            {
                answer: 'Kindness',
                personages: ['applejack'],
                background: '#4caf50'
            },
            {
                answer: 'Loyalty',
                personages: ['fluttershy'],
                background: '#ffab40'
            }

        ]
    },
    {
        question: 'What describes you best?',
        answers: [
            {
                answer: 'Smart',
                personages: ['twilight_sparkle'],
                background: '#37474f'
            },
            {
                answer: 'Race',
                personages: ['rainbow_dash'],
                background: '#e64a19'
            },
            {
                answer: 'Party',
                personages: ['pinkie_pie'],
                background: '#1b5e20'
            },
            {
                answer: 'Fashion',
                personages: ['rarity'],
                background: '#d81b60'
            },
            {
                answer: 'Farming',
                personages: ['applejack'],
                background: '#6a1b9a'
            },
            {
                answer: 'Shy',
                personages: ['fluttershy', 'spike'],
                background: '#c62828'
            }
        ]
    },
    {
        question: 'What is your favorite food?',
        answers: [
            {
                answer: 'Beer',
                personages: ['pinkie_pie'],
                background: '#512da8'
            },
            {
                answer: 'Apples',
                personages: ['applejack'],
                background: '#558b2f'
            },
            {
                answer: 'Rainbow chocolate chips',
                personages: ['rainbow_dash'],
                background: '#d84315'
            },
            {
                answer: 'Carrot dogs',
                personages: ['spike'],
                background: '#795548'
            },
            {
                answer: 'Salad',
                personages: ['rarity', 'fluttershy'],
                background: '#d81b60'
            },
            {
                answer: 'Something that will make me strong',
                personages: ['twilight_sparkle'],
                background: '#1e88e5'
            }
        ]
    },
    {
        question: 'What do you want to be when you grow up?',
        answers: [
            {
                answer: 'A big, mighty dragon',
                personages: ['spike'],
                background: '#1b5e20'
            },
            {
                answer: 'A comedian',
                personages: ['pinkie_pie'],
                background: '#8c0188'
            },
            {
                answer: 'A teacher',
                personages: ['twilight_sparkle'],
                background: '#24b2ca'
            },
            {
                answer: 'A princess',
                personages: ['rarity'],
                background: '#795548'
            },
            {
                answer: 'A farmer',
                personages: ['applejack', 'fluttershy'],
                background: '#536dfe'
            },
            {
                answer: 'A model',
                personages: ['rarity'],
                background: '#d84315'
            },
            {
                answer: 'A racer',
                personages: ['rainbow_dash'],
                background: '#388e3c'
            }
        ]
    },
    {
        question: 'What is your casual outfit?',
        answers: [
            {
                answer: 'A mustache',
                personages: ['pinkie_pie', 'spike'],
                background: '#ffab40'
            },
            {
                answer: 'Long, flowing hair',
                personages: ['fluttershy'],
                background: '#d84315'
            },
            {
                answer: 'A cowboy/cowgirl hat',
                personages: ['applejack'],
                background: '#24b2ca'
            },
            {
                answer: 'A slim outfit to help me fly faster',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A rarity tight dress',
                personages: ['rarity'],
                background: '#536dfe'
            },
            {
                answer: 'A beautiful, long and silky gown',
                personages: ['twilight_sparkle'],
                background: '#d81b60'
            }
        ]
    }
];


document.addEventListener("DOMContentLoaded", function(){
    var block = document.getElementById('block');
    new Test(block, questions, personages);
});