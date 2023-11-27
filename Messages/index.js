
const verses = ['1 Thessalonians 5:18 18 Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.',
'Nahum 1:3 3 The LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished. His way is in the whirlwind and the storm, and clouds are the dust of his feet.',
'Proverbs 29:11 11 Fools give full vent to their rage, but the wise bring calm in the end.']

let rVerse = verses[Math.floor(Math.random()*verses.length)];

let text =  ("Your message for today is: " + rVerse);

console.log(text);

function mixedMessage(){
document.createElementByTagName("h2").innerText

text.appendChild("h2");

mixedMessage(text);
}