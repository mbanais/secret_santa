
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
    for(let intPart=0; intPart<arrParticipants.length; intPart++){
        strHtml2=`<p class="santa${intPart+1}"><strong>${arrParticipants[intPart].value}</strong> &rarr; </p><input id="paire${intPart+1}">`
        refPaire.innerHTML+=strHtml2;
    }
}

function pigerPaires(){
    const arrInputParticipants=document.querySelectorAll(".participant");
    /* Création du tableau */
    const arrParticipants=[];
    let intCptPart=0;
    while(intCptPart<arrInputParticipants.length){
        arrParticipants[intCptPart]=document.querySelectorAll(".participant")[intCptPart].value;
        intCptPart=intCptPart+1;
    }

    /*On récupère le nombre de participants */
    let intNbParticipant=parseInt(refInputNbPart.value);
    let intcpt=1;
    
    for(let intCompteur=intNbParticipant; intCompteur>0; intCompteur--){
        /*On choisit un numéro au hasard entre 1 et longueur du tableau */
        let intNbHasard=Math.floor(Math.random()*arrParticipants.length-1 +1);
        refNomSanta=document.querySelector(".santa"+intcpt+ "> strong");
        refParticipant=document.getElementById("paire"+intcpt);
        if(arrParticipants[intNbHasard]!==refNomSanta.innerText){
            /* Si le nom choisi est différent de celui qui offre */
            refParticipant.value=arrParticipants[intNbHasard];
            arrParticipants.splice(intNbHasard, 1)
            intcpt+=1;
        }else{
            /* Si le nom est identique à celui qui offre */
            intCompteur++;
        }
    }
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