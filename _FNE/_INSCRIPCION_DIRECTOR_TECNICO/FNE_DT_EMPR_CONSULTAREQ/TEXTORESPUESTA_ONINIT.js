try{
    /*
        Actualizacion de registro:
        Si Ciclo del Requerimiento es menor al Ciclo en que se asignó el requerimiento más proximo (CICLO_TRAMITE - 1),
        Registro de Respuesta es historico, y por lo tanto no permitir actualizacion
    */
    if(IDTRAMITEREQUERIMIENTO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
        const CALC_ESTADOTRAMITE_ACTUALIZAR_I = document.getElementById("CALC_ESTADOTRAMITE_ACTUALIZAR_I");
        cambiarEstiloCtrls([IDTRAMITE_ExpandirBtn], "display", "none");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_ACTUALIZAR_I], "height", "28.8px");
        
        const invalidarFormulario = () => {
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const TEXTORESPUESTA_CTRL = document.getElementById("TEXTORESPUESTA_I");
            cambiarEstiloCtrls([ACTUALIZAR_BTN], "display", "none");
            s.SetEnabled(false);
            cambiarEstiloCtrls([TEXTORESPUESTA_CTRL], "color", "black");
            cambiarEstiloCtrls([TEXTORESPUESTA_CTRL], "backgroundColor", "#dcdcdc");
            (e.isValid && e.isValid(false));
        }

        /*
        Comando para obtener CICLO actual del tramite
        */
        const items = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
        if(arrRes.length > 0){
            const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
            let cicloTramite = parseInt(arrRes[0].RESPUESTA);
            let cicloReq = parseInt( (CALC_CICLO_I !== null ? CALC_CICLO_I.innerHTML : 0) );
            /* requerimientos de ciclo (cicloTramite-1) se consideran actuales */
            if(cicloReq < (cicloTramite-1) ){
                invalidarFormulario();
            }
        }else{
            alert("No se ha podido conectar con el servidor.");
            invalidarFormulario();
        }
    }
}catch(err){
    alert(err);
}