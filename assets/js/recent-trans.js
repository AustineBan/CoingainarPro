const firstBody = document.querySelector(".first-tbody");
const secondBody = document.querySelector(".second-tbody");
let maxDataNum = 7;

let firstInter;
let firstInterTime = genRandomTiming()
function genFirstInter(){
    //Write code to generate and append for the first
    genFirstBodyContent()

    if(firstInter){
        clearInterval(firstInter);
    }
    firstInterTime = genRandomTiming();
    firstInter = setInterval(genFirstInter, firstInterTime)
}

function genFirstBodyContent(){
    let data = document.createElement("tr");
    data.innerHTML = `
<td>${genRandomName()} ${genRandomName()}</td>
<td><i class="fa fa-arrow-up" aria-hidden="true"></i> ${genRandomAmount()}</td>
    `
    prependElement(firstBody, data)
}


let secondInter;
let secondInterTime = genRandomTiming()
function genSecondInter(){
    //Write code to generate and append for the second
    genSecondBodyContent();

    if(secondInter){
        clearInterval(secondInter);
    }
    secondInterTime = genRandomTiming();
    secondInter = setInterval(genSecondInter, secondInterTime)
}

function genSecondBodyContent(){
    let data = document.createElement("tr");
    data.innerHTML = `
<td>${genRandomName()} ${genRandomName()}</td>
<td><i class="fa fa-arrow-down" aria-hidden="true"></i> ${genRandomAmount()}</td>
    `
    prependElement(secondBody, data)
}

function prependElement(element, data){
    element.prepend(data)
    element.scrollTop = 0;
    
    element.children.length > maxDataNum && element.lastElementChild.remove();
    //
}


function genRandomTiming(){
    return (Math.floor(Math.random() * 30) + 5) * 1000;
}


let tranNames = [
    // United Kingdom
    "Oliver", "Harry", "George", "Jack", "Jacob", "Charlie", "Thomas", "Oscar", "William", "James",
    "Emily", "Olivia", "Ava", "Isla", "Mia", "Amelia", "Sophia", "Charlotte", "Isabella", "Grace",

    // Germany
    "Max", "Paul", "Leon", "Lukas", "Felix", "Jonas", "Elias", "Noah", "Luca", "David",
    "Mia", "Emma", "Hannah", "Sofia", "Lea", "Anna", "Lena", "Emilia", "Marie", "Luisa",

    // USA
    "James", "John", "Robert", "Michael", "William", "David", "Joseph", "Charles", "Thomas", "Daniel",
    "Mary", "Jennifer", "Linda", "Patricia", "Elizabeth", "Susan", "Jessica", "Sarah", "Ashley", "Emily",

    // France
    "Louis", "Gabriel", "Jules", "Léo", "Raphaël", "Hugo", "Arthur", "Ethan", "Lucas", "Mathis",
    "Camille", "Sophie", "Léa", "Chloé", "Manon", "Alice", "Clara", "Lina", "Zoé", "Inès",

    // Spain
    "Antonio", "José", "Manuel", "Francisco", "David", "Juan", "Daniel", "Javier", "Carlos", "Andrés",
    "María", "Carmen", "Laura", "Marta", "Ana", "Isabel", "Sara", "Patricia", "Lucía", "Sofía",

    // Italy
    "Giovanni", "Francesco", "Antonio", "Marco", "Giuseppe", "Matteo", "Alessandro", "Luca", "Andrea", "Paolo",
    "Giulia", "Sofia", "Aurora", "Martina", "Chiara", "Alice", "Greta", "Francesca", "Sara", "Beatrice",

    // Sweden
    "Liam", "William", "Noah", "Lucas", "Oscar", "Elias", "Emil", "Hugo", "Oliver", "Theo",
    "Alice", "Maja", "Ella", "Wilma", "Sofia", "Alma", "Elsa", "Stella", "Ebba", "Agnes",

    // Russia
    "Alexander", "Dmitry", "Maxim", "Sergey", "Ivan", "Andrei", "Mikhail", "Yuri", "Nikolai", "Vladimir",
    "Anastasia", "Maria", "Olga", "Ekaterina", "Tatiana", "Irina", "Elena", "Daria", "Victoria", "Natalia",

    // Japan
    "Hiroshi", "Takashi", "Yuki", "Sho", "Kaito", "Ren", "Haruto", "Sota", "Riku", "Yuto",
    "Yui", "Hina", "Sakura", "Miku", "Aya", "Riko", "Yuna", "Haruka", "Nanami", "Saki",

    // Brazil
    "Miguel", "Gabriel", "Lucas", "Pedro", "Matheus", "Arthur", "Rafael", "Felipe", "Guilherme", "Vitor",
    "Ana", "Beatriz", "Juliana", "Camila", "Isabela", "Larissa", "Gabriela", "Fernanda", "Amanda", "Clara",

    // Canada
    "William", "James", "Liam", "Benjamin", "Lucas", "Henry", "Daniel", "Oliver", "Jack", "Mason",
    "Charlotte", "Amelia", "Sophia", "Olivia", "Isabella", "Mia", "Evelyn", "Harper", "Ella", "Scarlett",

    // Australia
    "Oliver", "Noah", "Jack", "William", "Leo", "Thomas", "James", "Lucas", "Charlie", "Isaac",
    "Charlotte", "Amelia", "Olivia", "Mia", "Grace", "Ava", "Ella", "Sophie", "Isla", "Zoe",

    // India
    "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Krishna", "Ishaan", "Kabir", "Aryan",
    "Aadhya", "Ananya", "Saanvi", "Diya", "Myra", "Aarohi", "Ira", "Pari", "Vanya", "Kiara",

    // China
    "Wei", "Wang", "Li", "Chen", "Zhang", "Liu", "Yang", "Huang", "Zhao", "Wu",
    "Xiao", "Mei", "Li", "Lan", "Fang", "Ling", "Jia", "Hua", "Yan", "Shan",

    // Nigeria
    "Emeka", "Chinedu", "Ifeanyi", "Chukwuemeka", "Tunde", "Kunle", "Segun", "Ayo", "Tope", "Uche",
    "Ngozi", "Chioma", "Amaka", "Aisha", "Funke", "Tosin", "Yemi", "Bukky", "Zainab", "Kemi",

    // South Africa
    "Thabo", "Siyabonga", "Sipho", "Kagiso", "Themba", "Lerato", "Tshepo", "Sibusiso", "Katlego", "Lunga",
    "Naledi", "Thandi", "Zanele", "Nomvula", "Ayanda", "Bokang", "Karabo", "Gugu", "Nandi", "Precious",

    // Mexico
    "Santiago", "Mateo", "Sebastián", "Leonardo", "Matías", "Emiliano", "Diego", "Daniel", "Miguel", "Ángel",
    "Sofía", "Valentina", "Camila", "Regina", "María José", "Ximena", "Ana Sofía", "Andrea", "Renata", "Alexa"
];

let tranAmount = [
    150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250,
    260, 270, 280, 290, 300, 310, 320, 330, 340, 350,
    360, 370, 380, 390, 400, 410, 420, 430, 440, 450,
    460, 470, 480, 490, 500, 510, 520, 530, 540, 550,
    560, 570, 580, 590, 600, 620, 640, 660, 680, 700,
    720, 740, 760, 780, 800, 820, 840, 860, 880, 900,
    920, 940, 960, 980, 1000, 1050, 1100, 1150, 1200, 1250,
    1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750,
    1800, 1850, 1900, 1950, 2000, 2100, 2200, 2300, 2400, 2500,
    2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500,
    3600, 3700, 3800, 3900, 4000, 4200, 4400, 4600, 4800, 5000,
    5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000,
    7200, 7400, 7600, 7800, 8000, 8200, 8400, 8600, 8800, 9000,
    9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000,
    14500, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000,
    24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000,
    34000, 35000, 36000, 37000, 38000, 39000, 40000, 42000, 44000, 46000,
    48000, 50000, 52000, 54000, 56000, 58000, 60000, 62000, 64000, 66000,
    68000, 70000, 72000, 74000, 76000, 78000, 80000, 82000, 84000, 86000,
    88000, 90000, 92000, 94000, 96000, 98000, 100000, 105000, 110000, 115000,
    120000, 125000, 130000, 135000, 140000, 145000, 150000, 160000, 170000, 180000,
    190000, 200000, 210000, 220000, 230000, 240000, 250000, 275000, 300000, 325000,
    350000, 375000, 400000, 425000, 450000, 475000, 500000, 525000, 550000, 575000,
    600000, 625000, 650000, 675000, 700000, 725000, 750000, 775000, 800000, 825000,
    850000, 875000, 900000, 925000, 950000, 975000, 1000000
];

function genRandomName(){
    return genRandomFromList(tranNames)
}
function genRandomAmount(){
    let randomFigure = genRandomFromList(tranAmount)
    randomFigure = formatCurrency(randomFigure);
    return randomFigure;
}

function genRandomFromList(list){
    randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex];
}

function formatCurrency(amount) {
    return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}


(function(){
    for(i = 0; i < 5; i++){
        console.log("Loop times")
        genFirstBodyContent();
        genSecondBodyContent();
    }
    genFirstInter();
    genSecondInter();
})();