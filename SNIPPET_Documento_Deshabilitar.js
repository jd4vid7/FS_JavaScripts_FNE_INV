const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
    for(ctrl of arrCtrls){
        ( ctrl != null && (ctrl.style[estilo] = valor) );
    }
}

if(IDDOCUMENTOAUTOREQ_HFValorID_.Get("ID") != ""){
    IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
    IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
}else{
    IDDOCUMENTOAUTOREQ_txtEscanear_.SetVisible(false);
    IDDOCUMENTOAUTOREQ_txtNuevo_.SetVisible(false);
}

//para display none
const blankSpace2 = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_").parentElement.previousElementSibling;

let blankSpace = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_");
( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
cambiarEstiloCtrls([blankSpace], "display", "none");


//random snippet
const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I], "height", "28.8px");