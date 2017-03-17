var personages = [
    {
        id: 'twilight_sparkle',
        name: 'Twilight Sparkle',
        img: '/img/rarity.png'
    },
    {
        id: 'spike',
        name: 'Spike',
        img: '/img/rarity.png'
    },
    {
        id: 'rainbow_dash',
        name: 'RainbowDash',
        img: '/img/personages/fluttershy.png'
    },
    {
        id: 'rarity',
        name: 'RainbowDash',
        img: '/img/rarity.png'
    },
    {
        id: 'fluttershy',
        name: 'Fluttershy',
        img: '/img/rarity.png'
    },
    {
        id: 'pinkie_pie',
        name: 'Pinkamina Diane "Pinkie" Pie',
        img: '/img/rarity.png'
    },
    {
        id: 'applejack',
        name: 'Applejack',
        img: '/img/rarity.png'
    }
];

var questions = [
    {
        question: 'If you had a power of one of the elements of harmony, which one would you have?',
        answers: [
            {
                answer: 'Magic',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Honesty',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'Generosity',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Fire',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'Kindness',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Loyalty',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            }

        ]
    },
    {
        question: 'What describes you best?',
        answers: [
            {
                answer: 'Smart',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Quiet',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Confident',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'Teaching',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Girly',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Silly',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            }
        ]
    },
    {
        question: 'What is your favorite food?',
        answers: [
            {
                answer: 'Beer',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Apples',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Rainbow chocolate chips',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'Carrots',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Salad',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Something that will make me strong',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            }
        ]
    },
    {
        question: 'What do you want to be when you grow up?',
        answers: [
            {
                answer: 'A big, mighty dragon',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A comedian',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A teacher',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'A princess',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A farmer',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A model',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            }
        ]
    },
    {
        question: 'What is your casual outfit?',
        answers: [
            {
                answer: 'A mustache',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'Long, flowing hair',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A cowboy/cowgirl hat',
                personages: ['rainbow_dash'],
                background: '#24b2ca'
            },
            {
                answer: 'A slim outfit to help me fly faster',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A tight dress rarity slipped on me',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            },
            {
                answer: 'A beautiful, long and silky gown',
                personages: ['rainbow_dash'],
                background: '#8c0188'
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", function(){
    var block = document.getElementById('block');
    new Test(block, questions, personages);
});