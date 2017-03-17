var Test = function (block, questions, personages) {
    this.block = block;
    this.questions = questions;
    this.question_index = 0;
    this.answers = [];
    this.personages = personages;
    this.time = null;

    this.init()
};

Test.prototype.onAnswerClick = function () {
    var personages = JSON.parse(event.target.getAttribute('data-personages'));

    for (var i = 0, length = personages.length; i < length; i++) {
        this.answers.push(personages[i]);
    }

    console.info(this.personages);

    if (++this.question_index >= this.questions.length) {
        this.showPersonage();

        return false;
    }

    this.askQuestion();
};

Test.prototype.init = function () {

    this.answers = [];

    var play = document.createElement('DIV');

    play.className = 'play';
    play.innerText = 'start';

    this.block.appendChild(play);

    play.addEventListener('click', function () {
        this.askQuestion();
    }.bind(this));
};

Test.prototype.showPersonage = function () {

    var div = this.block.querySelector('.wrapper');

    div.style.opacity = 0;

    div.addEventListener("transitionend", function () {

        this.block.style.background = 'none';
        this.block.style.height = 'inherit';
        this.block.style.marginTop = '-45px';

        while (this.block.firstChild) {
            this.block.removeChild(this.block.firstChild);
        }

        var personage = this.mathPersonageByAnswers();

        var block = document.createElement('DIV');
        block.style.opacity = 0;

        var text = document.createElement('H2');

        text.innerHTML = 'Congratulations! <br> Your pony is "' + personage.name + '"';

        var image = document.createElement('IMG');

        image.src = personage.img;

        console.info('DONE');

        block.appendChild(text);
        block.appendChild(image);

        this.block.appendChild(block);


        setTimeout(function () {
            block.style.opacity = 1;
        }, 1);

    }.bind(this));

};

Test.prototype.mathPersonageByAnswers = function () {
    var personages = [];

    for (var i = 0, length = this.answers.length; i < length; i++) {
        var answer = this.answers[i];
        if ('undefined' === typeof personages[answer]) {
            personages[answer] = 1;
        }

        personages[answer]++;
    }

    console.info(personages);

    var max = 0;
    var personage = null;

    for (var key in personages) {
        if (personages[key] > max) {
            max = personages[key];
            personage = key;
        }
    }

    console.info(personage);

    for (var i = 0, length = this.personages.length; i < length; i++) {

        if (this.personages[i].id === personage) {
            return this.personages[i];
        }
    }

    return null;
};

Test.prototype.askQuestion = function () {

    this.time = new Date().getTime();
    if (this.question_index == 0) {

        this.rebderQuestion();

    } else {
        var div = this.block.querySelector('.wrapper');

        div.style.opacity = 0;

        div.addEventListener("transitionend", function () {

            this.rebderQuestion();

        }.bind(this));
    }
};

Test.prototype.rebderQuestion = function () {
    while (this.block.firstChild) {
        this.block.removeChild(this.block.firstChild);
    }

    var block_question = document.createElement('DIV');

    block_question.className = 'wrapper';
    block_question.style.opacity = 0;

    var div_question = document.createElement('DIV');

    var question = this.questions[this.question_index];

    div_question.innerText = '[' + (this.question_index + 1) + '/' + (this.questions.length) + '] ' + question.question;
    div_question.className = 'question';

    block_question.appendChild(div_question);
    var answers = [];
    for (var i = 0, length = question.answers.length; i < length; i++) {

        var answer = question.answers[i];

        var div_answer = document.createElement('DIV');
        div_answer.innerText = answer.answer;
        div_answer.setAttribute('data-personages', JSON.stringify(answer.personages));
        div_answer.className = 'answer';
        div_answer.style.background = answer.background;
        div_answer.addEventListener('click', function (event) {

            console.info('TIME: ' + (new Date().getTime() - this.time));

            if (new Date().getTime() - this.time < 300) {
                return false;
            }

            this.onAnswerClick(event);
        }.bind(this));

        answers.push(div_answer);
        block_question.appendChild(div_answer);
    }

    this.block.appendChild(block_question);

    setTimeout(function () {
        block_question.style.opacity = 1;
    }, 1);
};