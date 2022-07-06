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
            tabTablaDatosR.GetItemByName("SECCION_SEC_EV").SetVisible(false);
        }else{
            IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
            let blankSpace = document.getElementById("IDDOCUMENTOAUTOREQ_lnkDescripcion_");
            ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
            cambiarEstiloCtrls([blankSpace], "display", "none");
        }

        IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false);
        IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false);
        let blankSpace2 = document.getElementById("IDDOCUMENTOBORRADOR_lnkDescripcion__ET");
        ( blankSpace2 !== null && (blankSpace2 = blankSpace2.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace2], "display", "none");

        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_CANTMODALIDAD_I, CALC_CANTINMUEBLE_I, CALC_CANTREPRESENTANTE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue());
    }
}catch(err){
    alert(err);
}



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
            tabTablaDatosR.GetItemByName("SECCION_SEC_EV").SetVisible(false);
        }else{
            IDDOCUMENTOAUTOREQ_txtEditar_.SetVisible(false);
            IDDOCUMENTOAUTOREQ_txtEditarEscanear_.SetVisible(false);
        }

        IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false);
        IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false);

        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_CANTMODALIDAD_I, CALC_CANTINMUEBLE_I, CALC_CANTREPRESENTANTE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue());
    }
}catch(err){
    alert(err);
}