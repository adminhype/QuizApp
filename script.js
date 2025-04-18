const questions = [
    {
        "question": "Wie schnell war der erste Computer?",
        "answer_1": "Schneller als ein Handy",
        "answer_2": "Langsamer als ein Taschenrechner",
        "answer_3": "So schnell wie eine PS5",
        "answer_4": "Wie ein Taschenrechner",
        "right_answer": 2
    },
    {
        "question": "Wer war die erste Programmiererin?",
        "answer_1": "Steve Jobs",
        "answer_2": "Angela Merkel",
        "answer_3": "Marie Curie",
        "answer_4": "Ada Lovelace",
        "right_answer": 4
    },
    {
        "question": "Woraus bestand früher Computerspeicher?",
        "answer_1": "Magnetringe",
        "answer_2": "Zahnräder",
        "answer_3": "Plastikchips",
        "answer_4": "Wasserleitungen",
        "right_answer": 1
    },
    {
        "question": "Wie viel Code steckt in einem Auto?",
        "answer_1": "Über 100 Millionen Zeilen",
        "answer_2": "100.000 Zeilen",
        "answer_3": "1.000 Zeilen",
        "answer_4": "1 Million Zeilen",
        "right_answer": 1
    },
    {
        "question": "Was ist die 'Any'-Taste?",
        "answer_1": "Eine echte Taste auf der Tastatur",
        "answer_2": "Ein Support-Witz",
        "answer_3": "Jede beliebige Taste",
        "answer_4": "Die Escape-Taste",
        "right_answer": 3
    },
    {
        "question": "Was macht ein QR-Code?",
        "answer_1": "Lädt WLAN schneller",
        "answer_2": "Zeigt Webseiten",
        "answer_3": "Startet Apps automatisch",
        "answer_4": "Spielt Musik ab",
        "right_answer": 2
    },
    {
        "question": "Was wurde mal aus LEGO gebaut?",
        "answer_1": "Ein echter Drucker",
        "answer_2": "Ein funktionierendes Handy",
        "answer_3": "Ein WLAN-Router",
        "answer_4": "Ein Joystick",
        "right_answer": 1
    }
];

// zeigt den ersten objekt im array
let currentQuestion = 0;

let rightQuestions = 0;

// funktion erstellt zum inititalisieren b tag id all-question zugegriffen + die länge des arrays angegeben
function init() {
    document.getElementById('all-questions').innerHTML = questions.length;


    //funktion wird ausgeführt
    showQuestion();
};


// zeigt die aktuelle frage und antwort in html an
function showQuestion() {

    // zähler ab 7 frage abbrechen ( end-screen)
    if (currentQuestion >= questions.length) {
        // todo: show end screen
        // take step 1,2,3 from html & show quiz beendet after click last question
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        // wie viele fragen wurden beantwortet
        document.getElementById('amountOfQuestions').innerHTML = questions.length;

        // wie viele fragen wurden richtig beantwortet step 1
        // step 2 variable erstellen 
        document.getElementById('currentRightQuestion').innerHTML = rightQuestions;

    } else {
        //greift auf die aktuelle frage aus dem array 
        let question = questions[currentQuestion];

        //greifen auf die id questiontext + schreiben text der frage in dieses html aus dem frage object
        document.getElementById('questionText').innerHTML = question['question']

        // id anwser aus html ziehen + in object attribute zuweisen zur jeder id in html
        // suchen 4 html elemente mit ids + schreiben die antwort aus dem frage objekt
        document.getElementById('answer_1').innerHTML = question['answer_1']
        document.getElementById('answer_2').innerHTML = question['answer_2']
        document.getElementById('answer_3').innerHTML = question['answer_3']
        document.getElementById('answer_4').innerHTML = question['answer_4']

    }


};
// herausfinden beim clicken auf button richtig oder falsch 
// function wird aufgerufen wenn eine antwort ausgewählt wurde der parameter ist die id der angeklickten antwort
function answer(selection) {

    // aus dem array questions holen wir die aktuelle frage mit dem index currentquestion
    let question = questions[currentQuestion];
    // loggen die aktuelle auswahl aus
    // console.log('antwort', selection);
    //wir schneiden den letzten buchstaben/zahl aus dem string raus z.B answer_2 wird 2
    let selectedQuestionNumber = selection.slice(-1);
    // loggen z.B 2 aus 
    // console.log('ausgewählte antwort ist ', selectedQuestionNumber);
    // loggen aus welche antwort laut frage richtig wäre
    // console.log('korrekte antwort', question['right_answer']);


    //bei falscher antwort richtige antwort grün makieren

    // template literal hinzufügen um auf question['right_answer] den wert zu greifen im objekt question 
    // antwort z.b answer_2 (wird in selection beschrieben)
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    //vergleichen ob die antwort übereinstimmmt
    if (selectedQuestionNumber == question['right_answer']) {
        // loggen aus wenn die antwort übereinstimmt
        // console.log('Richtige Antwort!');

        // button wird grün wenn die antwort richtig ist / selber parameter
        // css classe hinzufügen mit classList.add mit string
        document.getElementById(selection).classList.add('bg-success');

        // wenn right answer true ist erhöhen wir currentrightquestion um 1
        rightQuestions++

        // wenn nicht 
    } else {
        // console.log('Falsche Antwort');
        // button wird rot wenn die antwort falsch ist /
        document.getElementById(selection).classList.add('bg-danger')

        // falls falsche antwort ausgabe grün makriert für richtige anwort weil zuvor falsche antwort
        document.getElementById(idOfRightAnswer).classList.add('bg-success')

    }
    // button disable aktivieren
    document.getElementById('next-btn').disabled = false;
};

function nextQuestion() {

    // variable wird um 1 erhöht z.B 0 auf 1
    currentQuestion++;

    // step1 button wieder disablen
    document.getElementById('next-btn').disabled = true;
    resetBtns();

    // function aufrufen 
    showQuestion();

    // step nummer der fragen anzeigen

    // step 1
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
};

function resetBtns() {
    // step 2 bereits ausgewählte antworten wieder entfernen
    document.getElementById('answer_1').classList.remove('bg-danger');
    document.getElementById('answer_1').classList.remove('bg-success');

    document.getElementById('answer_2').classList.remove('bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success');

    document.getElementById('answer_3').classList.remove('bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success');

    document.getElementById('answer_4').classList.remove('bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success');
}