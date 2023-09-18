// affiche des questions/réponses
// la structure de données utilisée est un tableau (questionsReponses)
function questionWithoutObject(){

    // le programme peut contenir un nombre variable de questions/réponses
    // il est préférable alors d'utiliser une variable de type tableau (array) dans ce cas là
    const allQuestionsReponses = [
        "question 1",
        "reponse 1",
        "question 2",
        "reponse 2",
        "question 3",
        "reponse 3",
    ];

    // je boucle autant de fois qu'il y a d'éléments dans le tableau allQuestionsReponses
    // à chaque tour de boucle : j'affiche la question puis la réponse de l'élément allQuestionsReponses numéro i
    for(let i = 0 ; i < allQuestionsReponses.length ; i++){
        console.log(i);
        console.log(allQuestionsReponses[i]);
        alert(allQuestionsReponses[i]);    
    }
}

// pareil que questionWithoutObject
// Mais ! la structure de données est sous la forme d'un tableau d'objets
function questionWithObject(){
    
    const questionsReponses1 = {
        question:"question 1",
        reponse:"reponse 1"
    }

    const questionsReponses2 = {
        question:"question 2",
        reponse:"reponse 2"
    }

    const questionsReponses3 = {
        question:"question 3",
        reponse:"reponse 3"
    }

    // j'ajoute 3 objects dans un tableau d'objet nommé allQuestionsReponses
    const allQuestionsReponses = [
        questionsReponses1,
        questionsReponses2,
        questionsReponses3
    ];

    // je boucle autant de fois qu'il y a d'object dans le tableau allQuestionsReponses
    // à chaque tour de boucle : j'affiche la question puis la réponse de l'élément allQuestionsReponses numéro i
    for(let i = 0 ; i < allQuestionsReponses.length ; i++){
        console.log(i);
        alert(allQuestionsReponses[i].question);
        alert(allQuestionsReponses[i].reponse);
    }
}

// une version encore plus robuste/propre : utilisation avancée en programmation :) 
function advancedQuestionWithObject(){

    // je crée un constructeur d'object nommé "questionReponse"
    const questionReponse = function(questionRenseignee, reponseRenseignee){
        return {
            question:questionRenseignee,
            reponse:reponseRenseignee
        }
    }

    // je crée 3 objects à l'aide de mon constructeur 
    // et je les stock dans un tableau d'objet nommé allQuestionsReponses 
    const allQuestionsReponses = [
        questionReponse("la question num 1", "la reponse num 1"),
        questionReponse("la question num 2", "la reponse num 2"),
        questionReponse("la question num 3", "la reponse num 3"),
    ];

    // je boucle sur chacun des objets contenu dans le tableau allQuestionsReponses  
    // pour chaque object ( = à chaque tour de boucle) : j'affiche la question puis la réponse
    allQuestionsReponses.forEach(function(questionReponseObject){
        alert(questionReponseObject.question);
        alert(questionReponseObject.reponse);
    });

}