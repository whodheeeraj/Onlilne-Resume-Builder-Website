// function addNewAQ() {
//     let newNode = document.createElement("textarea")
//     newNode.classList.add('form-control');
//     newNode.classList.add('aqField');
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("placeholder", "Enter Here")
//     newNode.setAttribute("rows", 1);


//     let aqOb = document.getElementById("aq");
//     let aqAddButtonOb = document.getElementById("aqAddButton");

//     aqOb.insertBefore(newNode, aqAddButtonOb);
// }

// function addNewWE() {

//     let newNode = document.createElement("textarea")
//     newNode.classList.add('form-control');
//     newNode.classList.add('weField');
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("placeholder", "Enter Here")
//     newNode.setAttribute("rows", 1);

//     let weOb = document.getElementById("we");
//     let weAddButtonOb = document.getElementById("weAddButton");

//     weOb.insertBefore(newNode, weAddButtonOb);
// }

// function addNewSK() {

//     let newNode = document.createElement("textarea")
//     newNode.classList.add('form-control');
//     newNode.classList.add('skillsField');
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("placeholder", "Enter Here")
//     newNode.setAttribute("rows", 1);

//     let skOb = document.getElementById("sk");
//     let skAddButtonOb = document.getElementById("skAddButton");

//     skOb.insertBefore(newNode, skAddButtonOb);
// }






// // generateCV

// function generateCV() {


//     let nameField = document.getElementById("nameField").value;

//     let nameT = document.getElementById("nameT");
//     nameT.innerHTML = nameField;

//     // let nameT2 = document.getElementById("nameT2");
//     // nameT2.innerHTML = nameField;


//     let contactField = document.getElementById("contactField").value;

//     // let contactT = document.getElementById("contactT");

//     // contactT.innerHTML = contactField;

//     let addressField = document.getElementById("addressField").value;
//     // let addressT = document.getElementById("addressT");
//     // addressT.innerHTML = addressField;

//     // let jpField = document.getElementById("jpField").value;
//     let emailField = document.getElementById("emailField").value;
//     // let aboutField = document.getElementById("aboutField").value;

//     document.getElementById("nameT").innerHTML = nameField;
//     document.getElementById("contactT").innerHTML = contactField;
//     document.getElementById("addressT").innerHTML = addressField;
//     // document.getElementById("jpT").innerHTML = jpField;
//     document.getElementById("emailT").innerHTML = emailField;
//     // document.getElementById("aboutT").innerHTML = aboutField;
//     document.getElementById("FatherField").innerHTML = FatherField;
//     document.getElementById("dobField").innerHTML = dobField;
//     document.getElementById("genderField").innerHTML = genderField;
//     document.getElementById("msField").innerHTML = msField;
//     document.getElementById("langField").innerHTML = langField;
//     document.getElementById("hobbyField").innerHTML = hobbyField;



//     // let fbField = document.getElementById("fbField").value;
//     // document.getElementById("fbT").innerHTML = fbField;

//     // let twitterField = document.getElementById("twitterField").value;
//     // document.getElementById("twitterT").innerHTML = twitterField;

//     // let githubField = document.getElementById("githubField").value;
//     // document.getElementById("githubT").innerHTML = githubField;

//     // let liField = document.getElementById("liField").value;
//     // document.getElementById("liT").innerHTML = liField

//     let objectiveField = document.getElementById("objectiveField").value;
//     document.getElementById("objectiveT").innerHTML = objectiveField;


//     // AQ
//     let aqs = document.getElementsByClassName("aqField");

//     let str1 = ''

//     for (let e of aqs) {
//         str1 = str1 + `<li> ${e.value} </li>`;
//     }

//     document.getElementById("aqT").innerHTML = str1;


//     // we 
//     let wes = document.getElementsByClassName("weField");

//     let str = ''

//     for (let e of wes) {
//         str = str + `<li> ${e.value} </li>`;
//     }

//     document.getElementById("weT").innerHTML = str;

//     // skills
//     let sk = document.getElementsByClassName("skillsField");

//     let str2 = ''

//     for (let e of sk) {
//         str = str + `<li> ${e.value} </li>`;
//     }

//     document.getElementById("skillsT").innerHTML = str;

//     document.getElementById("cv-form").style.display = "none";
//     document.getElementById("cv-template").style.display = "block";

// }



// function printCV() {
//     window.print();
// }