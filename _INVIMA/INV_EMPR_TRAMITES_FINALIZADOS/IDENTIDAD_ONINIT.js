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
        let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion__ET");
        ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_CANTMODALIDAD_I, CALC_CANTINMUEBLE_I, CALC_CANTREPRESENTANTE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura, y Botón Actualizar */
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        const IDESTADOTRAMITE_EXTENDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN,IDESTADOTRAMITE_EXTENDBTN], "display", "none");

        /* Arreglar color de campo tipo Texto Solo Lectura, y Control del evento (IDENTIDAD) */
        s.SetEnabled(false);
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I, PADRE_RADICADOENTRADA_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
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

        IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
        IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);

        /* Arreglar altura campos Calculados Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_CANTMODALIDAD_I, CALC_CANTINMUEBLE_I, CALC_CANTREPRESENTANTE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura, y Botón Actualizar */
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        const IDESTADOTRAMITE_EXTENDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN,IDESTADOTRAMITE_EXTENDBTN], "display", "none");

        /* Arreglar color de campo tipo Texto Solo Lectura, y Control del evento (IDENTIDAD) */
        s.SetEnabled(false);
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I, PADRE_RADICADOENTRADA_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}