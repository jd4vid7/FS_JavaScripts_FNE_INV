try{
    /* Si es actualización de registros, ajustar estilos correctamente Y Recargar Lista de Estados segun Tipo Tramite */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDEMPRESA_EXPANDBTN = document.getElementById("IDEMPRESA_B-1");
        const FECHARADICADOENTRADA_EXPANDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_EXPANDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const IDTIPOTRAMITE_EXPANDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        if(IDDOCUMENTOAUTOREQ_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOAUTOREQ_txtEscanear_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtNuevo_.SetVisible(false);
        }
        const blankSpace = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_").parentElement.previousElementSibling;
        cambiarEstiloCtrls([IDEMPRESA_EXPANDBTN, FECHARADICADOENTRADA_EXPANDBTN, IDCLASETRAMITE_EXPANDBTN, IDTIPOTRAMITE_EXPANDBTN, blankSpace], "display", "none");
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
        
        RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}