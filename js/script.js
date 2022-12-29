
const refSectionParticipant=document.querySelector(".nomParticipants");
const refInputNbPart=document.getElementById("participants");
//let intNbParticipant=refInputNbPart.value;

function creerInputs(){
    let intNbParticipant=refInputNbPart.value;
    for(let intCpt=0; intCpt<intNbParticipant; intCpt++){
        let strHtml=`<label for="participant${intCpt+1}">Participant ${intCpt+1}</label>
        <input class="participant" id="participant${intCpt+1}"><br>`;
        refSectionParticipant.innerHTML+=strHtml;
    }
    refSectionParticipant.innerHTML+=`<button class="btn_enregistrer">Enregister</button>`;
}

function creerListe(){
    const arrParticipants=document.querySelectorAll(".participant");
    console.log(arrParticipants)
    for(let intPart=0; intPart<arrParticipants.length; intPart++){
        console.log(arrParticipants[intPart])
    }
}


document.querySelector(".btn_suivant").addEventListener("click", function(){
    creerInputs();
})
document.querySelector(".btn_enregistrer").addEventListener("click", function(){
    creerListe();
})