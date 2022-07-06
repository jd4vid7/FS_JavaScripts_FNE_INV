try{
    /*
        Si ID registro NO es nulo, es actualización de registro.
    */
    if(IDTRAMITEDOCUMENTO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        /* Ocultar ExpandirBtn de FechaCargue, y Botón Actualizar */
        const FECHACARGUE_EXPANDBTN = document.getElementById("FECHACARGUE_B-1");
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        cambiarEstiloCtrls([FECHACARGUE_EXPANDBTN, ACTUALIZAR_BTN], "display", "none");

        /* Corregir altura de Calculados */
        const CALC_USUARIOCARGUE_I = document.getElementById("CALC_USUARIOCARGUE_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([CALC_USUARIOCARGUE_I, CALC_CICLO_I], "height", "28.8px");

        /* Deshabilitar este control (COMENTARIO) y pintar de Solo Lectura */
        s.SetEnabled(false);
        const COMENTARIO_I = document.getElementById("COMENTARIO_I");
        cambiarEstiloCtrls([COMENTARIO_I], "color", "black");
        cambiarEstiloCtrls([COMENTARIO_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}

try{
    /*
        Si ID registro NO es nulo, es actualización de registro.
    */
    if(IDTRAMITEDOCUMENTO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        /* Ocultar ExpandirBtn de FechaCargue, y Botón Actualizar */
        const FECHACARGUE_EXPANDBTN = document.getElementById("FECHACARGUE_B-1");
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        if(IDDOCUMENTOFS_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOFS_txtEditar_.SetVisible(false);
            IDDOCUMENTOFS_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOFS_txtEscanear_.SetVisible(false);
            IDDOCUMENTOFS_txtNuevo_.SetVisible(false);
        }
        let blankSpace = document.getElementById("IDDOCUMENTOFS_lnkDescripcion__ET");
        ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([FECHACARGUE_EXPANDBTN, ACTUALIZAR_BTN, blankSpace], "display", "none");

        /* Corregir altura de Calculados */
        const CALC_USUARIOCARGUE_I = document.getElementById("CALC_USUARIOCARGUE_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([CALC_USUARIOCARGUE_I, CALC_CICLO_I], "height", "28.8px");

        /* Deshabilitar este control (COMENTARIO) y pintar de Solo Lectura */
        s.SetEnabled(false);
        const COMENTARIO_I = document.getElementById("COMENTARIO_I");
        cambiarEstiloCtrls([COMENTARIO_I], "color", "black");
        cambiarEstiloCtrls([COMENTARIO_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}