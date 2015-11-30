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

var reds =
[ 'The worst thing\nthat happened\nto Quebec is ___.',
'How to get rid\nof 50 years of\nsocial-democracy\n?',
'What is the moral\ndebt of zero deficit\n?',
'Austerity is ___.',
'We are butchering\npublic function\nbecause ___.',
'What should we\nfinance instead of\neducation and\nhealthcare?',
'This is what\ndemocracy looks\nlike. And it\nlooks like ___.',
'What Would\nJean Lesage Do?',
'How can we\ncut expenses?',
'Who’s the best\nMember of\nParliament?',
'How much does\nQuébec owe?',
'1, 2, 3, 4,\nthis is ___\n5, 6, 7, 8,\norganize and ___.',
'___ + ___ =\na balance budget.',
'Let\'s start with a\ngo-around:\nName, preferred\npronoun, and ___.',
'No Justice, No ___.',
'Don\'t worry,\nthe Unions will\nhave our back\nand call for a ___.',
'What\'s Philippe\nCouillard’s worst\nnightmare? ',
'What was Philippe\nCouillard doing\nin Saudi Arabia?',
'The worst thing\nabout austerity\nis ___.',
'Why cut in\nsocial welfare?',
'UQAM expels\n9 students\nbecause of ___.',
'In today\'s press\nconference,\nMartin Coiteux\nannounces ___.',
'I\'m against striking\nbecause ___.',
'The next step in\nthe escalation\nof our pressure\ntactic is ___.',
'The favorite hobby\nof Matricule 728\nis ___.',
'Our budget for\nmobilization is\nas big as ___.',
'10 billion\nsolutions are\nan alternative\nto___.',
'What does PKP\ndream about\nat night?',
'What would save\nus from austerity?',
'Strategic voting\nleads to ___.',
'Less funding for\nCLSCs means ___.',
'The most recent\nreason that people\nhate ASSÉ is ___.',
'Increasing tax\nbrackets from 4\nto 10 would allow\nus to ___.',
'Underneath the\nAnarchopanda\ncostume is\nactually ___.',
'___,\nonly for the 1%.',
'David Heurtel +\nTranscanada +\na beluga nursery\n= ___.' ];


var whites = [ 'Bombardier\nC Series',
'A police officer \nwearing clown\npants',
'No kids will die\nof this, there is\nalready enough\nbook in school’s\nlibrary',
'Only private\ncompanies will\nnow benefit from\nsocial welfare',
'We prefer the term\n“budgetary rigor”',
'Because I\'m Leitao\nintolerant',
'Sam Hamad',
'Arthur Porter ',
'Invest in social\nillfare',
'Poëti\'s poesy',
'Because I must\ncontribute my\nfair share',
'Tightening our\nbelts',
'Philippe\nCouillard\'s years\nin Saudi Arabia',
'A really respectful\nstrip search ',
'(Nous)\nOn a rien volé',
'A strategic\nwithdrawal',
'The Charbonneau\nCommision',
'Les vraies affaires',
'The Black Bloc is\nrecruiting',
'Printemps 2015',
'Anarchopanda',
'Policemen on\nmountain bikes',
'En français SVP',
'Indexation',
'A student boycott',
'Gaétan Barette',
'François Blais',
'Pier-Karl Péladeau',
'A trickle-down\neconomy',
'The sound of\nsocial fabric\ntearing apart',
'Éric Duhaime',
'Expelling 2\nor 3 students\na day',
'Legalizing illegal\nfees in the health\nsystem ',
'Increasing the\nnumber of tax\nbrackets ',
'Increasing\ncorporate tax rates ',
'Fuck Toute',
'A tear gas grenade',
'The silent majority ',
'Police brutality ',
'Matricule 728',
'Give the\nitinerary to the\npolice',
'Gabriel\nNadeau-Dubois',
'The riot police',
'Plan Nord',
'A 3% raise in 5\nyears',
'A direct action',
'Free education',
'The bourgeoisie',
'The working class',
'Citing Marx\nwithout reasons',
'The\ndemonstrators/riot\npolice ratio',
'The 1%',
'The Energy East\npipeline',
'An SPVM\nanti-austerity\ndemonstration',
'Justin Trudeau\ndeclaring martial\nlaw on Quebec',
'A public-private-\npartnership for\na new refugee\ndetention center',
'An eternal freeze\non real wages' ];


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
  redCard.graphics.setStrokeStyle(2).beginStroke("black").beginFill("#F63F48").drawRect(0, 0, 175,175);
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
