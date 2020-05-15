/**
Se dă un vector cu n numere naturale.
 Să se determine câte dintre elemente au
  valoarea strict mai mare decât media aritmetică
 a elementelor vectorului.
 */



var numereNaturale= [1,2,3,4,5,6,7,8,12,14,16,18,1]
const lungimeVector = numereNaturale.length

let sumElemente = 0;
for(let i=0; i<lungimeVector; i++){
    sumElemente += numereNaturale[i]
}
const medieAritmetica = sumElemente / lungimeVector

let numerElemente = 0
for(let i=0; i<lungimeVector; i++){
    if(numereNaturale[i] > medieAritmetica){
        numerElemente ++;
    }
}

console.log(numerElemente)