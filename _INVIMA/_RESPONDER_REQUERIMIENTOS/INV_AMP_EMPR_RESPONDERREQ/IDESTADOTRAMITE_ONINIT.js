//v1
try{
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDEMPRESA_ExpandirBtn = document.getElementById('IDEMPRESA_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const IDTRAMITEMODIFICADO_ExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');
        cambiarEstiloCtrls([IDEMPRESA_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn, IDTRAMITEMODIFICADO_ExpandirBtn], "display", "none");
      
        const RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I');
        const PADRE_RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I').parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        if(IDDOCUMENTOAUTOREQ_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOAUTOREQ_txtEscanear_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtNuevo_.SetVisible(false);
        }

        let blankSpace = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_");
        ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");

        RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}

//v0
RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);