var benefitsData = [
    {
        title: 'УСТРОЙСТВА ВВОДА-ВЫВОДА ИНФОРМАЦИИ',
        text: 'клавиатура, мышь, световое перо, сканер, цифровая видеокамера микрофон, монитор, принтер. Устройства ввода и вывода являются непременным и обязательным элементом любой ЭВМ, начиная с самой первой и заканчивая современными ПК, поскольку именно эти устройства обеспечивают взаимодействие пользователя с вычислительной системой',
        imgUrl: 'http://www.portafolio.andrezgalviz.com/img/mouse.png',
        color: '#3a3a3a'
    },
    {
        title: 'УСТРОЙСТВА ОБРАБОТКИ ИНФОРМАЦИИ',
        text: 'микропроцессор, сопроцессор. Главным устройством вычислительной машины является микропроцессор, обеспечивающий в наиболее общем случае управление всеми устройствами и обработку информации. Для решения специфических задач, например, математических вычислений современные персональные компьютеры оснащаются сопроцессорами.  ',
        imgUrl: 'https://cdn.freebiesupply.com/logos/large/2x/celeron-processor-1-logo-black-and-white.png',
        color: '#dbcf00'
    },
    {
        title: 'УСТРОЙСТВА ПЕРЕДАЧИ И ПРИЕМА ИНФОРМАЦИИ',
        text: 'Модем, сетевая карта являются непременными атрибутами современных информационных систем, которые все больше приобретают черты распределенных информационных систем, в которых информация хранится не в одном месте, а распределена в пределах некоторой сети ',
        imgUrl: 'http://chittagongit.com/download/269331',
        color: '#ff188f'
    },
    {
        title: 'УСТРОЙСТВА ХРАНЕНИЯ ИНФОРМАЦИИ',
        text: 'Магнитные диски, лазерные диски, флэшки. Используются для временного (непродолжительного) или длительного хранения обрабатываемой и накапливаемой информации',
        imgUrl: 'http://www.sclance.com/pngs/google-drive-png/google_drive_png_594260.png',
        color: '#07bbff'
    }
];

function addBenefits (element) {
    for (var i = 0; i < benefitsData.length; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'typ-benefit-div';

        var newDivImg = document.createElement('div');
        newDivImg.style.backgroundColor = benefitsData[i].color;
        newDivImg.className = 'typ-benefit-div-img';

        var newImage = document.createElement('img');
        newImage.src = benefitsData[i].imgUrl;
        newDivImg.appendChild(newImage);
        newDiv.appendChild(newDivImg);

        var newH = document.createElement('h2');
        newH.innerHTML = benefitsData[i].title;
        newDiv.appendChild(newH);

        var newP = document.createElement('p');
        newP.innerHTML = benefitsData[i].text;
        newDiv.appendChild(newP);

        element.appendChild(newDiv);
    }
};

var benefitsContainer = document.getElementById('benefits-container');
addBenefits(benefitsContainer);

function scrollToSection (id) {
    document.getElementById(id).scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
};

var showScrollTopButton = false;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 200 && !showScrollTopButton) {
        showScrollTopButton = true;
        document.getElementById('scroll-top-button').style.display = 'block';
    }
    if (scrolled < 200 && showScrollTopButton) {
        showScrollTopButton = false;
        document.getElementById('scroll-top-button').style.display = 'none';
    }
};

function logout () {
    window.localStorage.removeItem('login');
    checkIsAuth();
};

function checkIsAuth () {
    if (!window.localStorage.login) window.open('./login.html', '_self');
    // if (window.localStorage.login) window.open('./tests.html', '_self');
};

function openTestPage () {
    window.open('./tests.html', '_self');
};

checkIsAuth();
