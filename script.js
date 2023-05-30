var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }

function selectTopic(){
    var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
} 

   }
var topics= ['javascript','HTML','CSS','Git'];
console.log(topics[1])
var randomTopics = topics[Math.floor(Math.random() * topics.length)];
console.log(randomTopics);
function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
 }
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();



