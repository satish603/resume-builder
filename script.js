function addNewTechSkill() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");
  newNode.classList.add("techSkillsField");
  newNode.setAttribute("placeholder", "C/C++/Java/etc");
  let techSkillButtonOb = document.getElementById("techSkillButton");
  let technicalDivOb = document.getElementById("techSkillsDiv");

  technicalDivOb.insertBefore(newNode, techSkillButtonOb);
}

function addNewStrength() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("mt-2");
  newNode.classList.add("strengthsField");
  newNode.setAttribute("placeholder", "Hardworking");
  let strengthsButtonOb = document.getElementById("strengthButton");
  let strengthsDivOb = document.getElementById("strengthsDiv");

  strengthsDivOb.insertBefore(newNode, strengthsButtonOb);
}

function aqGenerate(){
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Add next Qualification");
  newNode.setAttribute("rows", 3);
  let aqButtonOb = document.getElementById("aqButton");
  let aqDivOb = document.getElementById("aq1");

  aqDivOb.insertBefore(newNode, aqButtonOb);
}

function projectGenerate() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Add next Project");
  newNode.setAttribute("rows", 4);
  let projectButtonOb = document.getElementById("projectButton");
  let projectDivOb = document.getElementById("projectDiv");

  projectDivOb.insertBefore(newNode, projectButtonOb);
}

function generateResume() {

    document.getElementById("nameT").innerHTML = document.getElementById("nameField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("phT").innerHTML = document.getElementById("phnField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("mailField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    document.getElementById("emailT").innerHTML = document.getElementById("mailField").value;

    document.getElementById("expT").innerHTML = document.getElementById("expField").value;

    document.getElementById("declarationT").innerHTML = document.getElementById("declarationField").value;


    let techSkillsss = document.getElementsByClassName("techSkillsField");

    let str = "";

    for(let e of techSkillsss)
    {
      str = str + `<li> ${e.value} </li>` ;
    }

    document.getElementById("techSkillsT").innerHTML = str;




    let strengthsob = document.getElementsByClassName("strengthsField");

    let str1 = "";

    for(let e of strengthsob)
    {
      str1 = str1 + `<li> ${e.value} </li>` ;
    }

    document.getElementById("strengthsT").innerHTML = str1;



    let projectsOb = document.getElementsByClassName("projectField");

    let str2 = "";

    for(let e of projectsOb)
    {
      str2 = str2 + `<li> ${e.value} </li>` ;
    }

    document.getElementById("projectsT").innerHTML = str2;



    let aqOb = document.getElementsByClassName("aqField");

    let str3 = "";

    for(let e of aqOb)
    {
      str3 = str3 + `<li> ${e.value} </li>` ;
    }

    document.getElementById("aqT").innerHTML = str3;


    document.getElementById("container").style.display = "none";
    document.getElementById("template").style.display = "block";
    document.getElementById("downloadButton").style.display = "block";
}


window.onload = function () {
    document.getElementById("downloadButton")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.2,
                filename: 'Resume.pdf',
                image: { type: 'jpeg', quality: 3 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
