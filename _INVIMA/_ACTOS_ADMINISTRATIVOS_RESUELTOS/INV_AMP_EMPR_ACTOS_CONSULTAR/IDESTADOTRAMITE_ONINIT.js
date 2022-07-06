//V1
try{
    /* Si ID Registro NO es nulo, es actualización de registro */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
        IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);
        let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion_");
        ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");


        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_ESTADOTRAMITE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        /* Verificar si es posible avanzar o no. IDsESTADOTRAMITE: 24, 25 > Pre-firme. 28, 29 > Denegado */
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const bloquearAvance = () => {
            OcultarFila("SEC_AV", "IDESTADOTRAMITE", true);
            tabTablaDatosR.GetItemByName("SECCION_SEC_AV").SetVisible(false);
            cambiarEstiloCtrls([ACTUALIZAR_BTN], "display", "none");
        }
        const items = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items, false);
        if(arrRes.length > 0){
            let IDESTADOTRAMITE = parseInt(arrRes[0].IDESTADOTRAMITE);
            if(IDESTADOTRAMITE === 28 || IDESTADOTRAMITE === 29){
                bloquearAvance();
            }else if(IDESTADOTRAMITE === 24 || IDESTADOTRAMITE === 25){
                RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
            }else{
                alert("Algo ha salido mal.");
                bloquearAvance();
            }
        }else{
            alert("No se ha podido conectar con el servidor.");
            bloquearAvance();
        }
    }
}catch(err){
    alert(err);
}


//v0
try{
    /* Si ID Registro NO es nulo, es actualización de registro */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
        IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);

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
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_CANTMODALIDAD_I, CALC_CANTINMUEBLE_I, CALC_CANTREPRESENTANTE_I, CALC_TOT_REQ_I, CALC_ESTADOTRAMITE_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        /* Verificar si es posible avanzar o no. IDsESTADOTRAMITE: 24, 25 > Pre-firme. 28, 29 > Denegado */
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const bloquearAvance = () => {
            OcultarFila("SEC_AV", "IDESTADOTRAMITE", true);
            tabTablaDatosR.GetItemByName("SECCION_SEC_AV").SetVisible(false);
            cambiarEstiloCtrls([ACTUALIZAR_BTN], "display", "none");
        }
        const items = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items, false);
        if(arrRes.length > 0){
            let IDESTADOTRAMITE = parseInt(arrRes[0].IDESTADOTRAMITE);
            if(IDESTADOTRAMITE === 28 || IDESTADOTRAMITE === 29){
                bloquearAvance();
            }else if(IDESTADOTRAMITE === 24 || IDESTADOTRAMITE === 25){
                RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
            }else{
                alert("Algo ha salido mal.");
                bloquearAvance();
            }
        }else{
            alert("No se ha podido conectar con el servidor.");
            bloquearAvance();
        }
    }
}catch(err){
    alert(err);
}