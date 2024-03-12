var resume = {
    "profile": "I am a person who is positive about every aspect of life.There are many things I like to do, to see, and to experience.I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean",
    "name": "dishnu S",
    "dob": "16-12-2003",
    "education": {
        "bsc": "8.1",
        "hsc": "64",
        "sslc": "84",
    },
    "phone": "7449249324",
    "email": "dishnusrinivasan16@gmail.com",
    "certifications": "digitalmarketing",
    "skills": "OOPs",
}

//for
var length = Object.keys(resume);
for (let i = 0; i < length.length; i++) {
    let key = length[i];
    console.log(key + " : " + resume[key]);
}

//for in
for (let i in resume) {
    console.log(resume[i]);
}

//for of
var len = Object.entries(resume);
for(let i of len){
    console.log(i);
}

//for each
len.forEach(function(i){
    console.log(i);
})