const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tut){ // freeCodeCamp had example to upcase using for loop
    tut = tut.split(' ')
    for (let i = 0; i < tut.length; i++) {
      tut[i] = tut[i].charAt(0).toUpperCase() + tut[i].slice(1)
    }
    return tut.join(' ')
  })
}
