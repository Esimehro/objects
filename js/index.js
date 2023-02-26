/*
Using the constructor method, create an InstagramPost() constructor function 
that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes,
*/

function instagramPost(authorHandle, content, imageLink, views, likes){
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}

// Create 2 Instagram post objects from the constructor function you created above

let myPost = new instagramPost('lloys', "This is the day Jesus gave me to you all😌🥳🎈", "https://instagram.flos5-2.fna.fbcdn.net/v/t51.2885…Fxjv2AFhfjTIjhDmF29IaA&oe=63FF9467&_nc_sid=1527a3" , "1,438 views", '852 likes');
console.log(myPost);

let anotherPost = new instagramPost('Peterobigregory', 'PO-ssible - We dare to dream', 'https://instagram.flos5-2.fna.fbcdn.net/v/t51.2885…Os2pA_5OZypGfZNTXuSiaA&oe=63FF39B5&_nc_sid=6136e7', '34.9k views', '33.9k likes');
console.log(anotherPost);

// question 3

// 3a  
// A createPerson() factory function that takes name, age and location as arguments.

function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
};

// create an object representing Musa from the factory function. 

const person1 = createPerson('Musa Dawodu', 19,  'Lekki, Lagos-state');
console.log(person1);

// 3b 
// A factory function createJambScores() that takes eng, govt, lit, crk as arguments

function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
};

const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores);

// Add the object as a property to Musa object you created above in (a) above

const person2 = {name: 'Musa Dawodu', age: 19, location: 'Lekki, Lagos-state'};
const musaJambScores1 = {eng: 70, govt: 85, lit: 82, crk: 94};

const newMusaObj = Object.assign(person2, musaJambScores1);
console.log(newMusaObj);

// 4 different ways you can clone an object and example
// - Using Object.assign()

const firstPhone = {
    model: "iphone 13",
    color: "Blue",
    yearReleased:'September 14, 2023',
  };

  const secondPhone = Object.assign({}, firstPhone);
  secondPhone.model = "iphone 13 pro";
  console.log({secondPhone});

  // - Using spread syntax i.e, ...

  const thirdPhone = { ...firstPhone };
  thirdPhone.model = "iphone 13 pro max";
  console.log({ thirdPhone });

  // - Using the method JSON.parse(JSON.stringify())

  const fourthPhone = JSON.parse;
  fourthPhone.model = "iphone 14";
  console.log({ fourthPhone });


//   5 enumeration method for…in loops

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 };


 for (const key in presidentialCandidates) {
    console.log(key);
    console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + key);
  };

 
