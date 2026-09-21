document.write("<center><u><b>INTRODUCTION</b></u><br>");
        document.write("Name : Sushant <br>" );
        document.write("course : BTECH <br>");
        document.write("Branch : cse ds <br>");
        document.write("Section : c<br>");
        document.write("College : ABES Engineering college <br></center>");
    let a = parseFloat(prompt("enter 1st digit: "));
    let b = prompt("enter opration : ");
    let c = parseFloat(prompt("enter 2nd digit: "));
    switch(b){
        case '+': document.write(a+c);
        break;
        case '-': document.write(a-b);
        break;
        case '*': document.write(a*b);
        break;
        case '/': document.write(a/b);
        break;

    }
    function about(){
        document.write("");
       }
    function add(a,b){
        return a+b;
    }
    let x=19;
    let y=12;
    console.log(add(x,y));
    
    let array = [2,3,4,5,6];
    array.shift();
    console.log(array);
    array.splice(1,2);
    console.log(array);