function calc() {
    var grades = [];

    var grade1 = document.getElementById('g1').value;
    grades.push(grade1);
    var grade2 = document.getElementById('g2').value;
    grades.push(grade2);
    var grade3 = document.getElementById('g3').value;
    grades.push(grade3);
    var grade4 = document.getElementById('g4').value;
    grades.push(grade4);
    var grade5 = document.getElementById('g5').value;
    grades.push(grade5);
    var grade6 = document.getElementById('g6').value;
    grades.push(grade6);

    var gpa = (grade1+grade2+grade3+grade4+grade5+grade6) / 6;
    
    for (let i = 0; i < grades.length; i++) {
    
        if(grades[i] == 0 || grades[i] == "")
        {
             return false;
        }
    }
    

    var final;
        if (gpa >= 90) final = "A";
        else if (gpa >= 80) final = "B";
        else if (gpa >= 60) final = "C";
        else if (gpa >= 50) final = "D";
        else final = "F";
    return final;
}

function openPop() {
    let final = calc();
    let pp = document.getElementById("pop");
    if(final){
        var Name = document.getElementById('n2').value;
        document.querySelector('.result .name2').textContent = Name;
        document.querySelector('.result .gpa').textContent = final;

        pp.classList.add("openPop");}
    else{
        window.alert("fill all of the data");
    }
}

function closePop() {
    let pp = document.getElementById("pop");
    pp.classList.remove("openPop");
}
