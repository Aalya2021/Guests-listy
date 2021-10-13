names_of_people = [];

function submit() {
    var GuestName = document.getElementById("s1").value;
    names_of_people.push(GuestName);

    console.log(GuestName);
    console.log(names_of_people);

    var length_of_name = names_of_people.length;
    
    console.log(length_of_name);

    document.getElementById("DisplayName").innerHTML=names_of_people.toString();
}

function sorting() {
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML= i.toString();
}

function search() {
    var s= document.getElementById("s1").value;
    var found= 0;
    var j;
    for(j=0; j<names_of_people.length; j++) {
        if (s== names_of_people[j]){
            found= found+1;
        }
    }

    document.getElementById("p").innerHTML="namefound"+found+"times";
    console.log("namefound"+found+"times");
}

function show() { var i= names_of_people.join(""); 
console.log(names_of_people); 
document.getElementById("p2").innerHTML=i.toString(); 
document.getElementById("show").style.display="inline block";
}