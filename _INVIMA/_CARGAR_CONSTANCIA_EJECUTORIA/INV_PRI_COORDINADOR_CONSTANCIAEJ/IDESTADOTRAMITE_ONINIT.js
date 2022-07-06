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
        ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");

        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campo Calculado Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
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

        /* Arreglar color de campo tipo Texto Solo Lectura */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Arreglar altura campo Calculado Solo Lectura */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I], "height", "28.8px");

        /* Ocultar boton extender de Listas Externas Solo Lectura */
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        cambiarEstiloCtrls([IDCLASETRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN], "display", "none");

        RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}