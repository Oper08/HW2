function A(age, isStudent) {
    if (age > 65 || isStudent) {
        return true;
    } else {
        return false;
    }
}


let age = 70;           
let isStudent = false;  
console.log(A(age, isStudent)); 



