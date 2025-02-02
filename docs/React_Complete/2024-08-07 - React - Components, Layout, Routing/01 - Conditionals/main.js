if(f1() && f2() && f3() && f4()) {
    console.log("True 1");
}
else {
    console.log("False 1");
}

if(f1() || f2() || f3() || f4()) {
    console.log("True 2");
}
else {
    console.log("False 2");
}

function f1() {
    console.log("f1");
    return true;
}

function f2() {
    console.log("f2");
    return true;
}

function f3() {
    console.log("f3");
    return false;
}

function f4() {
    console.log("f4");
    return true;
}
