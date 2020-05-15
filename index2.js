/**
 * 2)  Se citesc de la tastatura numele si varsta unor 
  elevi, pana la citirea tastei p.
    Sa se afiseze numele elevilor cu varsta peste 15 ani.
    ex: 
    Andrei
    18
    Ionut
    11
    p
 */

var students = [];

let nume = '';

while(nume !== 'p'){
   nume = prompt("Name?");
   if(nume !== 'p'){
    const age = Number(prompt("Age?"));
        students.push({
            nume,
            age
        })
    }
 
}

for(let i=0;i < students.length; i++){
    if(students[i].age >= 15){
        console.log(students[i].nume)
    }
}
