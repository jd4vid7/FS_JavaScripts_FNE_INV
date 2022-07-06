// COMENTARIO ONINIT
try{
    if(IDTRAMITEDOCUMENTO.GetValue() == null){
        OcultarFila("SEC_DG", "IDTRAMITEREQUERIMIENTO", true);
    }else{
        const FECHACARGUE_ExpandirBtn = document.getElementById('FECHACARGUE_B-1');
        const Actualizar_Btn = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
    
        FECHACARGUE_ExpandirBtn.style.display = 'none';
        Actualizar_Btn.style.display = 'none';
        s.SetEnabled(false);
    }
}catch(err){
    alert(err);
}



// COMENTARIO ONINITv2
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