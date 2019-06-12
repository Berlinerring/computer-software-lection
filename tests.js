var TESTS = [
    {
        question: '1. Что не относится к техническим средствам информатизации',
        answers: [
            'модем',
            'принтер',
            'табличный процессор',
            'клавиатура'
        ],
        rightAnswer: 2
    },
    {
        question: '2. Выберите правильный ответ:',
        answers: [
            'серверы – это специальные программы для управления компьютерными сетями',
            'серверы – это персональные компьютеры',
            'серверы – это автоматизированные рабочие местa',
            'серверы – это вычислительные машины, управляющие определенным видом ресурсов сети'
        ],
        rightAnswer: 3
    },
    {
        question: '3. Мини-ЭВМ – это:',
        answers: [
            'настольные калькуляторы',
            'наиболее эффективные системы обработки информации',
            'портативные ПК',
            'ноутбуки'
        ],
        rightAnswer: 1
    },
    {
        question: '4. К особенностям ЭВМ первого поколения не относят:',
        answers: [
            'машина управляется с использованием перфокарт',
            'элементная база – электронные лампы',
            'ЭВМ имели небольшие размеры',
            'быстродействие не превышало 3 тысяч операций в секунду'
        ],
        rightAnswer: 2
    },
    {
        question: '5. АЛГОЛ использовался:',
        answers: [
            'в ЭВМ первого поколения',
            'в ЭВМ второго поколения',
            'в ЭВМ третьего поколения',
            'в ЭВМ четвертого поколения'
        ],
        rightAnswer: 1
    },
    {
        question: '6. Транзисторы являлись элементной базой:',
        answers: [
            'в ЭВМ первого поколения',
            'в ЭВМ второго поколения',
            'в ЭВМ третьего поколения',
            'в ЭВМ четвертого поколения'
        ],
        rightAnswer: 1
    },
    {
        question: '7. К языкам высокого уровня не относят:',
        answers: [
            'Бэйсик',
            'Фортран',
            'Ассемблер',
            'Алгол'
        ],
        rightAnswer: 2
    },
    {
        question: '8. К устройствам обработки информации не относят:',
        answers: [
            'магнитные диски',
            'ПК',
            'ноутбуки',
            'серверы'
        ],
        rightAnswer: 0
    }
];

var answers = {};

function clickRadio (i, j) {
    return function () {
        answers[i] = j;
    };
};

function addTest (element) {
    for (var i = 0; i < TESTS.length; i++) {
        let test = TESTS[i];
        var testDiv = document.createElement('div');
        testDiv.className = 'typ-test-item';
        var testTitle = document.createElement('p');
        testTitle.innerHTML = test.question;
        testDiv.appendChild(testTitle);
        for (var j = 0; j < test.answers.length; j++) {

            var answerDiv = document.createElement('div');
            answerDiv.className = 'custom-control custom-radio';
    
            var testInput = document.createElement('input');
            testInput.type = "radio";
            testInput.id = "testRadio" + i + j; 
            testInput.name = "testRadio" + i;
            testInput.className = 'custom-control-input';
            testInput.addEventListener("change", clickRadio(i, j));
    
            var testLabel = document.createElement('label');
            testLabel.innerHTML = test.answers[j];
            testLabel.className = 'custom-control-label';
            testLabel.setAttribute("for","testRadio" + i + j);
    
            answerDiv.appendChild(testInput);
            answerDiv.appendChild(testLabel);
    
            testDiv.appendChild(answerDiv);
        }
        element.appendChild(testDiv);
    }
    var result = document.createElement('p');
    result.id = "typ-test-result";
    element.appendChild(result);
};

function checkAnswers () {
    console.log(answers);
    var rightAnswers = 0;
    TESTS.forEach( function(test, index) {
        if (test.rightAnswer === answers[index]) rightAnswers++;
    })

    var result = document.getElementById('typ-test-result');
    result.innerHTML = "Ваш результат составил " + rightAnswers + " верных вопросов из " + TESTS.length;
};

var testContainer = document.getElementById('typ-test-container');
addTest(testContainer);

function backToIndex () {
    window.open('./index.html', '_self');
};