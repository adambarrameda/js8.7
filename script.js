// Skillcrush JS 8.7
// Looping Arrays

// Starter Code
var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// Output Strings with a for...of Loop
console.log(programmingLanguages);

for (lang of programmingLanguages){
  console.log(`I want to learn ${lang}!`)
};

// Create a Numbered List with forEach()
programmingLanguages.forEach(function(lang, index){
  console.log(`${index+1}. ${lang.toUpperCase()}`);
});

// Filter Elements by a String
var updatedLanguages = programmingLanguages.filter(function(item){
  return item.includes("y");
});