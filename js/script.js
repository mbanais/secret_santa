
const refSectionParticipant=document.querySelector(".nomParticipants");
const refInputNbPart=document.getElementById("participants");

function creerInputs(){
    let intNbParticipant=refInputNbPart.value;
    const refCtnParticipants=document.querySelector(".ctn_participants");
    let strHtml="";
    for(let intCpt=0; intCpt<intNbParticipant; intCpt++){
        strHtml=`<label for="participant${intCpt+1}">Participant ${intCpt+1}</label>
        <input class="participant" id="participant${intCpt+1}"><br>`;
        refCtnParticipants.innerHTML+=strHtml;
    }
}

function creerListe(){
    arrParticipants=document.querySelectorAll(".participant");
    const refPaire=document.querySelector(".ctn_paire");
    let strHtml2;
    //console.log(arrParticipants)
    for(let intPart=0; intPart<arrParticipants.length; intPart++){
        console.log(arrParticipants[intPart].value);
        strHtml2=`<p><strong>${arrParticipants[intPart].value} &rarr; </strong></p><input id="paire${intPart+1}">`
        refPaire.innerHTML+=strHtml2;
    }
}

function pigerPaires(){
    const arrListeParticipants=[];
    const arrDejaSelectionnes=[];
    const arrParticipants=document.querySelectorAll(".participant");
    const arrHasard=[]
    for(let intTableau=0; intTableau<arrParticipants.length; intTableau++){
        arrListeParticipants[intTableau]=arrParticipants[intTableau].value;
    }
    console.log(arrListeParticipants)

    

    /*for(let intParticipant=0; intParticipant<arrParticipants.length; intParticipant++){
        //let intNbHasard=Math.floor(Math.random()*arrParticipants.length-1)+1;
        let intNbHasard=Math.floor(Math.random()*(arrParticipants.length-1))+1;
        console.log("longueur du tableau: "+arrParticipants.length)
        console.log(Math.floor(Math.random()*(arrParticipants.length-1))+1)
        console.log("#hasard:"+intNbHasard);
        document.getElementById("paire"+(intParticipant+1)).value=arrListeParticipants[intNbHasard];
        arrDejaSelectionnes.push(arrListeParticipants[intNbHasard]);
        arrListeParticipants.splice(intNbHasard, 1);

        console.log("arrDejaSelectionnes: "+arrDejaSelectionnes);
        console.log("arrListeParticipants: "+arrListeParticipants);
    }*/



}


document.querySelector(".btn_suivant").addEventListener("click", function(){
    creerInputs();
});
document.querySelector(".btn_enregistrer").addEventListener("click", function(){
    creerListe();
});
document.querySelector(".btn_piger").addEventListener("click", function(){
    pigerPaires();
});