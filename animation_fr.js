var canvas;
var stage;
var shape;
var radius = 50;
var rings = 40;


var current = 1;

var whiteCounter = 0;
var redCounter = 0;

var currentRed;
var currentWhite;

var reds = ["La pire chose à propos de l'austérité c'est ___.",
"L'austérité c'est ___.",
"_____ + La démocratie = ____.",
"Le ___ nous fait la guerre, guerre au ___.",
"___ + ___ = l'équilibre budgétaire.",
"Ne vous en faites pas, les syndicats seront mobilisés la prochaine fois et nous mèneront vers ___.",
"Quel est le pire cauchemar de Philippe Couillard?",
"L'UQAM expulse 9 étudiants en raison de ___.",
"En conférence de presse aujourd’hui, Martin Coiteux annonce  ___.",
"Je suis contre la grève parce que ___.",
"La prochaine étape dans notre escalade de moyens de pression est  ___.",
"Le passe-temps favori de Matricule 728 est ___.",
"10 milliards de solutions sont une alternative à ___.",
"Le vote stratégique mène à ___.",
"Moins d'argent pour les CLSC veut dire ___.",
"Quelle est la dernière raison pour laquelle les gens détestent l'ASSÉ?",
"Augmenter le nombre de paliers d'imposition de 4 à 10 nous permettrait de ___.",
"Sous le costume d'Anarchopanda se cache en fait ____",
"___, seulement pour le 1%.",
"David Heurtel + Transcanda + Une pouponnière de béluguas = ___."];

var whites = ["La C Series de Bombardier",
"Des policiers en pantalon de clown",
"“Il n’y a pas un enfant qui va mourir de ça et qui va s’empêcher de lire, parce qu’il existe déjà des livres dans les bibliothèques”",
"L'aide sociale (seulement pour les compagnies privées)",
"Tirer au visage d'un étudiant",
"“La rigueur budgétaire”",
"Parce que je suis intolérant au Leitao",
"Sam Hamad",
"Arthur Porter",
"Un recueil de poésie signé Robert Poëti",
"Faire sa juste part",
"Martin Coiteux, la marionnette du Conseil du patronat",
"Se serrer la ceinture",
"Les années de Philippe Couillard en Arabie Saoudite",
"“Une fouille à nu très respectueuse” -Yves Bolduc",
"(Nous) On a rien volé",
"Un repli stratégique",
"Essayer d'entasser plus d'étudiants dans moins de salles de classe",
"La Commission Charbonneau",
"Les vraies affaires",
"Le Black Bloc recrute",
"Printemps 2015",
"Anarchopanda",
"Des policiers en vélo de montagne",
"En français SVP",
"Indexation",
"Un boycott étudiant",
"Gaétan Barette",
"François Blais",
"Pier-Karl Péladeau",
"Le ruissellement de la richesse",
"Le son du filet social qui se déchire",
"UNE GROSSE CRISS DE MANIF DE SOIR !!!",
"Éric Duhaime",
"Expulser 2 ou 3 étudiants par jour",
"Légaliser les frais illégaux en santé",
"Augmenter le nombre de paliers d'imposition",
"Augmenter l'impôt aux entreprises",
"Fuck Toute",
"Des gaz lacrymogènes",
"La majorité silencieuse",
"La brutalité policière",
"Matricule 728",
"Donner l'itinéraire à la police",
"Un masque de Guy Fawkes",
"Gabriel Nadeau-Dubois",
"La police antiémeute",
"Le Plan Nord",
"Une hausse de 3% sur 5 ans",
"Une action directe",
"La gratuité scolaire",
"La bourgeoisie",
"La classe ouvrière",
"Citer Marx sans raison",
"Un nombre disproportionné de policiers de l’antiémeute par rapport au nombre de manifestants",
"Le 1%",
"Le pipeline Énergie Est",
"Une manifestation anti-austérité organisée par le SPVM ",
"Justin Trudeau qui déclare la Loi sur les mesures de guerre au Québec",
"Un PPP pour PKP",
"Qu'est-ce que Jean Lesage ferait…",
"Faire ce que fait la classe moyenne",
"Être un motherfucking libertarien",
"Un mauvais slogan de syndicat",
"#manifencours",
"Une grève sociale",
"Un caucus non mixte",
"Un enjeu de région",
"Le montréalocentrisme",
"L'Union Étudiante du Québec ou la FEUQ 2.0",
"Une proposition mise en dépôt",
"Un emploi. Dans le nord autant que possible.",
"Le huis clos médiatique de l’AGECVM",
"Une loi spéciale",
"Une démission, suivie d’une motion de blâme, suivie d’une destitution.",
"L’appel de l’est… ou pas",
"Le vote secret à main levée",
"La manif annuelle du COBP",
"L’argent et le vote ethnique",
"Des gratteux de guitares",
"La fondation 1625",
"La belle vie, quoi!",
"Le syndicalisme de combat",
"Le camion de son dans une manif",
"La faute de Greenpeace et des intellectuels",
"Infoman",
"Un bain par mois pour Grand-Maman",
"Mise en demeure",
"Injonction",
"Arielle Grenier",
"La question préalable",
"Privatisation tranquille",
"Lutter contre l’évasion fiscale",
"Point senti!",
"Saccager l'hôtel de ville",
"Confondre une dette publique avec une dette personnelle",
"Agir en bon père de famille",
"Étonnamment s'ennuyer de Jean Charest",
"Fermer les régions",
"Les radios poubelles"];

//document.body.addEventListener('load', function(){console.log("lol")});

$(document).ready(function() {
  // any code goes here
  init();
});

function init() {
  shuffle(reds);
  shuffle(whites);
  // create a new stage and point it at our canvas:
  canvas = document.getElementById("cardCanvas");
  stage = new createjs.Stage(canvas);

  // var redCard = getRedCard("My mom");
  // stage.addChild(redCard);
  //
  //
  // var whiteCard = getWhiteCard("The 1%");
  // stage.addChild(whiteCard);
  //
  // slide(whiteCard);
  next();

  // createjs.Tween.get(container, { loop: true })
  // .to({ x: 400, y: 100 }, 1000, createjs.Ease.getPowInOut(4)).call(function(){console.log(1)})
  // .to({ y: 175 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(2)})
  // .to({ x: 100 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(3)})
  // .to({ y: 100 }, 500, createjs.Ease.getPowInOut(2)).call(function(){console.log(4)})



  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
  //	stage.update();
}

function slide(card){
  createjs.Tween.get(card, { loop: false })
  .to({y: 100 }, 1000, createjs.Ease.getPowInOut(4))
  .wait(1150)
  .to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){next();});

}

function slideRed(card){
  createjs.Tween.get(card, { loop: false })
  .to({y: 100 }, 1000, createjs.Ease.getPowInOut(4)).call(function(){next();})
  //  .wait(1000)
  //.to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){console.log(2);next();});

}

function fadeRed(card){
  createjs.Tween.get(card, { loop: false })
  .wait(500)
  .to({ y: 500 }, 250, createjs.Ease.getPowInOut(2)).call(function(){next();});

}


function next(){
  if(current%6 == 1){
    if(typeof currentRed != 'undefined'){
      var index = stage.getChildIndex(currentRed);
      console.log(index);
      stage.removeChildAt(index);
    }
    var redCard = getRedCard(reds[redCounter]);
    currentRed = redCard;
    stage.addChild(redCard);
    slideRed(redCard);
    redCounter = (redCounter+1)%reds.length;
  }
  else if(current%6 == 0){
    fadeRed(currentRed);
  }
  else{
    if(typeof currentWhite != 'undefined'){
      var index = stage.getChildIndex(currentWhite);
      //  console.log(index);
      stage.removeChildAt(index);
    }
    var whiteCard = getWhiteCard(whites[whiteCounter]);
    currentWhite = whiteCard;
    stage.addChild(whiteCard);
    slide(whiteCard);
    whiteCounter = (whiteCounter+1)%whites.length;
  }
  current = (current+1)%6;


}

function getWhiteCard(content){

  var container = new createjs.Container();
  var card = new createjs.Shape();
  var w = 175;
  card.graphics.setStrokeStyle(2).beginStroke("black").beginFill("white").drawRect(0, 0, 175,175);
  var a = w/10;
  var x = w/10-w/20;
  var y = 0.70*w;

  var text = new createjs.Text(content, "18px Helvetica Neue", "#000000");
  text.lineWidth = 160;
  text.x = x;
  text.y = x;

  var logo1 = new createjs.Shape();
  logo1.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, a,a);
  logo1.x = x;
  logo1.y = y + a/10;
  logo1.rotation = -15;
  var logo2 = new createjs.Shape();
  logo2.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, a,a);
  logo2.x = x+(a/2);
  logo2.y = y;
  var logo3 = new createjs.Shape();
  logo3.graphics.beginStroke("black").beginFill("red").drawRect(0, 0, a,a);
  logo3.x = x+a;
  logo3.y = y;
  logo3.rotation = 15;
  var logoText = new createjs.Text("Cards Against Austerity", "10px Helvetica Neue", "#000000");
  logoText.x = x+(2*a);
  logoText.y = y+a/3;

  container.x = 205;
  container.y = -200;
  container.addChild(card);
  container.addChild(logo1);
  container.addChild(logo2);
  container.addChild(logo3);
  container.addChild(text);
  container.addChild(logoText);
  return container;
}

function getRedCard(content){
  var redCardContainer = new createjs.Container();
  var redCard = new createjs.Shape();
  var redW = 175;
  redCard.graphics.setStrokeStyle(2).beginStroke("black").beginFill("red").drawRect(0, 0, 175,175);
  var redA = redW/10;
  var redX = redW/10-redW/20;
  var redY = 0.70*redW;

  var redText = new createjs.Text(content, "18px Helvetica Neue", "#FFFFFF");
  redText.lineWidth = 160;
  redText.x = redX;
  redText.y = redX;

  var redLogo1 = new createjs.Shape();
  redLogo1.graphics.beginStroke("white").beginFill("red").drawRect(0, 0, redA,redA);
  redLogo1.x = redX;
  redLogo1.y = redY + redA/10;
  redLogo1.rotation = -15;
  var redLogo2 = new createjs.Shape();
  redLogo2.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, redA,redA);
  redLogo2.x = redX+(redA/2);
  redLogo2.y = redY;
  var redLogo3 = new createjs.Shape();
  redLogo3.graphics.beginStroke("black").beginFill("white").drawRect(0, 0, redA,redA);
  redLogo3.x = redX+redA;
  redLogo3.y = redY;
  redLogo3.rotation = 15;
  var redLogoText = new createjs.Text("Cards Against Austerity", "10px Helvetica Neue", "#FFFFFF");
  redLogoText.x = redX+(2*redA);
  redLogoText.y = redY+redA/3;

  redCardContainer.x = 5;
  redCardContainer.y = -200;
  redCardContainer.addChild(redCard);
  redCardContainer.addChild(redLogo1);
  redCardContainer.addChild(redLogo2);
  redCardContainer.addChild(redLogo3);
  redCardContainer.addChild(redText);
  redCardContainer.addChild(redLogoText);
  return redCardContainer;
}

function toggleCache(value) {
  // iterate all the children except the fpsLabel, and set up the cache:
  var l = stage.getNumChildren() - 1;

  for (var i = 0; i < l; i++) {
    var shape = stage.getChildAt(i);
    if (value) {
      shape.cache(-radius, -radius, radius * 2, radius * 2);
    } else {
      shape.uncache();
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
