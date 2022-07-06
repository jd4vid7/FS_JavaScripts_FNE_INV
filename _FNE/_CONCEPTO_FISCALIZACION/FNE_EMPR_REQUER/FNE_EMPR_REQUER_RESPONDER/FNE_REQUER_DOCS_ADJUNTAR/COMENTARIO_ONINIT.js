try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const COMENTARIO_CTRL = document.getElementById("COMENTARIO_I");
    const invalidarFormulario = (msg = null) => {
        const ActualizarOGuardarBtn = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
        const EliminarBtn = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const NuevoBtn = document.getElementById("splFormulario_cbpPrimario_FSToolbarListar_DXI0_");

        cambiarEstiloCtrls([ActualizarOGuardarBtn, EliminarBtn, NuevoBtn], "display", "none");
        COMENTARIO.SetEnabled(false);
        cambiarEstiloCtrls([COMENTARIO_CTRL], "color", "black");
        cambiarEstiloCtrls([COMENTARIO_CTRL], "backgroundColor", "#dcdcdc");
        ( msg !== null && MostrarMensaje('ADVERTENCIA$|$ ' + msg) );
        ( e.isValid && e.isValid(false) );
        if(IDDOCUMENTOFS_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOFS_txtEditar_.SetVisible(false);
            IDDOCUMENTOFS_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOFS_txtEscanear_.SetVisible(false);
            IDDOCUMENTOFS_txtNuevo_.SetVisible(false);
        }
    }
    let CICLOREQ;
    let CICLOMAX;
    if(IDTRAMITEREQUERIMIENTO.GetValue() !== null){
        const items = [{ Key: "IDTRAMITEREQUERIMIENTO", Value: IDTRAMITEREQUERIMIENTO.GetValue() }];
        let arrRes = InvocarComando("ENT_CMD_REQUER_CICLOS", items, false);
        if (arrRes.length > 0){
            CICLOREQ = parseInt(arrRes[0].CICLOREQ);
            CICLOMAX = parseInt(arrRes[0].CICLOMAX);
        }else{
            alert("Algo ha salido mal.");
            invalidarFormulario();
            return;
        }
        const REQUER_PLACEHOLDER_I = document.getElementById("REQUER_PLACEHOLDER_I");
        ( REQUER_PLACEHOLDER_I !== null && (REQUER_PLACEHOLDER_I.innerHTML = IDTRAMITEREQUERIMIENTO.GetText()) );
        OcultarFila("SEC_DG", "IDTRAMITEREQUERIMIENTO", true);
    }
    
    /* Si IDTRAMITEDOCUMENTO es nulo, es inserción de registro. De lo contrario, es actualización */
    if(IDTRAMITEDOCUMENTO.GetValue() === null){
        if(CICLOREQ < CICLOMAX){
            invalidarFormulario("Inserción de documentos inválida para Requerimientos pasados.");
        }
    }else{
        const FechaCargue_ExpandirBtn = document.getElementById("FECHACARGUE_B-1");
        cambiarEstiloCtrls([FechaCargue_ExpandirBtn], "display", "none");
        if(CICLOREQ < CICLOMAX){
            invalidarFormulario("Actualización de documentos inválida para Requerimientos pasados.");
        }
    }
}catch(err){
    alert(err);
}



//CODIGO DEPRECADO
try{
    let CICLOREQ;
    let CICLOMAX;
    if(IDTRAMITEREQUERIMIENTO.GetValue() != null){
        let items = [{ Key: "IDTRAMITEREQUERIMIENTO", Value: IDTRAMITEREQUERIMIENTO.GetValue() }];
        let arrRes = InvocarComando("ENT_CMD_REQUER_CICLOS", items, false);
        if (arrRes.length > 0){
            CICLOREQ = parseInt(arrRes[0].CICLOREQ);
            CICLOMAX = parseInt(arrRes[0].CICLOMAX);
        }
        const REQUER_PLACEHOLDER_I = document.getElementById("REQUER_PLACEHOLDER_I");
        ( REQUER_PLACEHOLDER_I != null && (REQUER_PLACEHOLDER_I.innerHTML = IDTRAMITEREQUERIMIENTO.GetText()) );
        OcultarFila("SEC_DG", "IDTRAMITEREQUERIMIENTO", true);
    }
    
    const COMENTARIO_CTRL = document.getElementById("COMENTARIO_I");
    if(IDTRAMITEDOCUMENTO.GetValue() == null){
        if(CICLOREQ < CICLOMAX){
            const GuardarBtn = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
            ( GuardarBtn != null && (GuardarBtn.style.display = "none") );
            COMENTARIO.SetEnabled(false);
            (COMENTARIO_CTRL != null && (COMENTARIO_CTRL.style.backgroundColor = "#dcdcdc") );
            (COMENTARIO_CTRL != null && (COMENTARIO_CTRL.style.color = "black") );
            MostrarMensaje('ADVERTENCIA$|$ Inserción de documentos inválida para Requerimientos pasados.');
            e.isValid = false;
        }else{
            CICLO.SetValue(CICLOREQ);
        }
    }else if (IDTRAMITEDOCUMENTO.GetValue() != null){
        const FechaCargue_ExpandirBtn = document.getElementById("FECHACARGUE_B-1");
        ( FechaCargue_ExpandirBtn != null && (FechaCargue_ExpandirBtn.style.display = "none") );
        if(CICLOREQ < CICLOMAX){
            const ActualizarBtn = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
            const EliminarBtn = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
            ( ActualizarBtn != null && (ActualizarBtn.style.display = "none") );
            ( EliminarBtn != null && (EliminarBtn.style.display = "none") );
            COMENTARIO.SetEnabled(false);
            (COMENTARIO_CTRL != null && (COMENTARIO_CTRL.style.backgroundColor = "#dcdcdc") );
            (COMENTARIO_CTRL != null && (COMENTARIO_CTRL.style.color = "black") );
            MostrarMensaje('ADVERTENCIA$|$ Actualización de documentos inválida para Requerimientos pasados.');
            e.isValid = false;
        }
    }
}catch(err){
    alert(err);
}