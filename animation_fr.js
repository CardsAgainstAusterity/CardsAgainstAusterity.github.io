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

var reds = [ 'Quelle est le\npire cauchemar de\nPhilippe Couillard? ',
'Le ___ nous\nfait la guerre,\nguerre au ___.',
'Qu’est que\nPhilippe Couillard\nfaisait en Arabie\nSaoudite ?',
'Pourquoi couper\ndans l’aide social?',
'Les jeunes de nos\njours sont ___.',
'L’UQAM expulse\nneuf étudiant en\nraison de ___.',
'En conférence de\npresse aujourd’hui,\nMartin Coiteux\nannonce ___.',
'Je ne suis contre\nla grève car ___.',
'Je demande la\nquestion préalable\nsur ___.',
'La prochaine étape\nde notre escalade\nde moyen de\npression est ___.',
'Le passe-temps\npréféré de\nMatricule 728\nest ___.',
'Notre budget de\nmobilisation est\naussi gros que ___.',
'Ni patron, ni état,\nni ___.',
'___, seulement\npour le 1%.',
'David Heurtel +\nTranscanda +\nUne pouponnière\nde béluga\n= ___.' ];

var whites = [ 'Les vraies affaires',
'Le Black Bloc\nrecrute',
'Printemps 2015',
'Anarchopanda',
'Des policiers\nen vélo de\nmontagne',
'Union Étudiante\ndu Québec ou la\nFEUQ 2.0',
'En français SVP',
'L’indexation',
'Un boycott\nétudiant',
'Gaétan Barette',
'François Blais',
'Pier-Karl Péladeau',
'Un emploi.\nDans le Nord\nautant que\npossible.',
'Le ruissellement\nde la richesse',
'Le son du tissu\nsocial qui se\ndéchire.',
'Privatiser les\nrevenus. Socialiser\nles coûts.',
'une GROSSE\nCRISS DE MANIF\nDE SOIR !!!',
'Le huis clos\nmédiatique de\nl’AGECVM',
'Une loi spéciale\ntrès respectueuse',
'Éric Duhaime',
'Expulser 2 ou 3\nétudiants par jour',
'La Privatisation\ntranquille',
'Légaliser les\nfrais illégaux\nen santé',
'Augmenter le\nnombre de paliers\nd’imposition',
'Lutter contre\nl’évasion fiscale',
'Rétablir la taxe sur\nle capital',
'Augmenter l’impôt\ndes entreprises',
'Abolir le crédit\nd’impôts sur le\ngain en capital',
'Des économies de\nbouts de chandelle',
'Fuck Toute',
'Le vote secret à\nmain levé',
'Une souricière très\nrespectueuse',
'Des gaz\nlacrymogène',
'La manif annuelle\ndu Collectif\nOpposé à la\nBrutalité Policière',
'La majorité\nsilencieuse',
'Le Bombardier\nC series',
'La brutalité\npolicière',
'Une entente\nà rabais',
'Matricule 728',
'Question privilège',
'L’argent et le vote\nethnique',
'Des gratteux de\nguitares',
'Parce que je dois\nfaire ma juste part',
'Un replis\nstratégique',
'La classe\nouvrière',
'Le Montréalo-\ncentrisme',
'Une Grève\ngénérale illimité',
'Des enfants gâtés        ',
'La fondation 1625',
'Donner son\nitinéraire à la\npolice',
'Un masque de\nGuy Fawkes',
'Gabriel\nNadeau-Dubois',
'La police\nantiémeute',
'Le syndicalisme\nde combat',
'Le Plan Nord',
'Une augmentation\nde 3% en 5 ans',
'Une action directe',
'La gratuité scolaire',
'Le camion de son\ndans un manif',
'La bourgeoisie',
'La classe ouvrière',
'Citer Marx sans\nraisons',
'Le ratio\nmanifestants /\npoliciers\nantiémeute',
'Le 1%',
'Le pipeline\nÉnergie est',
'Mobilisons-nous\ncontre Greenpeace\net les intellectuels\nde ce monde' ];

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
