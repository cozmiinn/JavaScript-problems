/**
 * Într-o clasă sunt F fete și B băieți.
 *  Fiecare fată citește 3 pagini pe zi și fiecare băiat citește 2 
 * pagini pe zi. Câte pagini vor citi copiii în n zile?
 */

const numarFete = +prompt('nr fete');
const numarBaieti = +prompt('nr baieti');
const numarZile = +prompt('nr zile');
const paginiCitiePerZiB = 2;
const paginiCitiePerZiF = 3;

const paginiCitetePerBaiat = numarBaieti * paginiCitiePerZiB * numarZile
const pagCitPF = numarFete * paginiCitiePerZiB * numarZile

console.log("In ultimile " + numarZile + " zile, baietii au citit " + paginiCitetePerBaiat + " pagini, iar fetele " + pagCitPF +" pagini.")
