try{
    /* Si ID Registro NO es nulo, es actualización de registro */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        /* Mostrar Auto Requerimiento si aplica */
        if(IDDOCUMENTOAUTOREQ_HFValorID_.Get("ID") == ""){
            OcultarFila("SEC_EV", "IDDOCUMENTOAUTOREQ", true);
        }else{
            IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
            const blankSpace = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_").parentElement.previousElementSibling;
            cambiarEstiloCtrls([blankSpace], "display", "none");
        }
        
        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_J_PEND_I = document.getElementById("CALC_J_PEND_I");
        const CALC_SOLREQJ_I = document.getElementById("CALC_SOLREQJ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_J_PEND_I, CALC_SOLREQJ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN], "display", "none");

        InvocarComandoLista(IDESTADOTRAMITE, null, "INV_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);  
    }
}catch(err){
    alert(err);
}