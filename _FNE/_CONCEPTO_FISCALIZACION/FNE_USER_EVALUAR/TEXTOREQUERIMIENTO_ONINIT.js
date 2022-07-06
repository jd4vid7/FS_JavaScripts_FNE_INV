try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
    cambiarEstiloCtrls([IDTRAMITE_ExpandirBtn], "display", "none");
    /*
        Si ID es nulo, se trata de un insert. => Asignar Ciclo del tramite a Ciclo del nuevo requerimiento
    */
    if(IDTRAMITEREQUERIMIENTO.GetValue() === null){
        const IDESTADOTRAMITE_ExpandirBtn = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIO_ExpandirBtn = document.getElementById("USUARIOCREACIONREQUERIMIENTO_B-1");
        const CICLO_ExpandirBtn = document.getElementById("CICLO_B-1");
        cambiarEstiloCtrls([IDESTADOTRAMITE_ExpandirBtn, USUARIO_ExpandirBtn, CICLO_ExpandirBtn], "display", "none");
    /*
        Si ID NO es nulo, se trata de actualizacion. No permitir actualizacion ni eliminacion de registros historicos (cuyo ciclo sea menor al ciclo actual)
    */
    }else{
        const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
        const TEXTOREQUERIMIENTO_CTRL = document.getElementById("TEXTOREQUERIMIENTO_I");
        const invalidarFormulario = () => {
            cambiarEstiloCtrls([ELIMINAR_BTN, ACTUALIZAR_BTN], "display", "none");
            s.SetEnabled(false);
            cambiarEstiloCtrls([TEXTOREQUERIMIENTO_CTRL], "color", "black");
            cambiarEstiloCtrls([TEXTOREQUERIMIENTO_CTRL], "backgroundColor", "#dcdcdc");
            (e.isValid && e.isValid(false));
        }
        /*
        Comando para obtener CICLO actual del tramite
        */
        let items = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
        
        if(arrRes.length > 0){
            const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
            let cicloTramite = parseInt(arrRes[0].RESPUESTA);
            let cicloRequer = parseInt( (CALC_CICLO_I !== null ? CALC_CICLO_I.innerHTML : 0) );
            if(cicloRequer < cicloTramite){
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








//CODIGO DEPRECADO
try{
    /*
        Comando para obtener CICLO actual del tramite
    */
    const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
    IDTRAMITE_ExpandirBtn.style.display = "none";
    let items = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
    let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
    let Rta = null;
    if(arrRes.length > 0){
        Rta = arrRes[0].RESPUESTA;
    }
    /*
        Si ID es nulo, se trata de un insert. => Asignar Ciclo del tramite a Ciclo del nuevo requerimiento
    */
    if(IDTRAMITEREQUERIMIENTO.GetValue() == null){
        const IDESTADOTRAMITE_ExpandirBtn = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIOCREACIONREQUERIMIENTO_ExpandirBtn = document.getElementById("USUARIOCREACIONREQUERIMIENTO_B-1");
        
        IDESTADOTRAMITE_ExpandirBtn.style.display = "none";
        USUARIOCREACIONREQUERIMIENTO_ExpandirBtn.style.display = "none";

        (Rta != null && CICLO.SetValue(Rta));
    /*
        Si ID NO es nulo, se trata de actualizacion. No permitir actualizacion ni eliminacion de registros historicos (cuyo ciclo sea menor al ciclo actual)
    */
    }else if(IDTRAMITEREQUERIMIENTO.GetValue() != null){
        if( Rta == null || (Rta != null && parseInt(CICLO.GetValue()) < parseInt(Rta)) ){
            const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
            
            (ELIMINAR_BTN != null && (ELIMINAR_BTN.style.display = "none") );
            (ACTUALIZAR_BTN != null && (ACTUALIZAR_BTN.style.display = "none") );

            s.SetEnabled(false);
            const TEXTOREQUERIMIENTO_CTRL = document.getElementById("TEXTOREQUERIMIENTO_I");
            (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.backgroundColor = "#dcdcdc") );
            (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.color = "black") );
            e.isValid = false;
        }
    }
}catch(err){
    alert(err);
}