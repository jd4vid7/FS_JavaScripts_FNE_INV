

//ONINIT TEXTO REQUERIMIENTO
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


















//ONINIT TEXTO REQUERIMIENTO LEGACY

try{
    if(IDTRAMITEREQUERIMIENTO.GetValue() == null){
        console.log("Inicia Comando en INSERT");
        let items = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
        let Rta = 0;
        if(arrRes.length > 0){
            Rta = arrRes[0].RESPUESTA;
        }

        console.log("Rta: " + Rta);
        console.log("vCICLO: " + CICLO.GetValue());
        console.log("vIDTRAMITE: " + IDTRAMITE.GetValue());

        const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
        const IDESTADOTRAMITE_ExpandirBtn = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIOCREACIONREQUERIMIENTO_ExpandirBtn = document.getElementById("USUARIOCREACIONREQUERIMIENTO_B-1");
    
        IDTRAMITE_ExpandirBtn.style.display = "none";
        IDESTADOTRAMITE_ExpandirBtn.style.display = "none";
        USUARIOCREACIONREQUERIMIENTO_ExpandirBtn.style.display = "none";

        (Rta != null && CICLO.SetValue(Rta));
    }else if(IDTRAMITEREQUERIMIENTO.GetValue() != null){
        const REGRESAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI2_");
        if(!event.path.includes(REGRESAR_BTN)){
            console.log("Inicia Comando en ACTUALIZAR");
            let items2 = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
            let arrRes2 = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items2, false);
            let Rta2 = 0;
            if(arrRes2.length > 0){
                Rta2 = arrRes2[0].RESPUESTA;
            }
            console.log("Rta2: " + Rta2);
            console.log("vCICLO: " + CICLO.GetValue());
            console.log("vIDTRAMITE: " + IDTRAMITE.GetValue());
            console.log("items2:");
            console.log(items2);
            console.log("arrRes2:");
            console.log(arrRes2);
    
            if(Rta2 != null && ( parseInt(CICLO.GetValue()) < parseInt(Rta2) )){
                const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
                const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
            
                ELIMINAR_BTN.style.display = "none";
                ACTUALIZAR_BTN.style.display = "none";
    
                s.SetEnabled(false);
                e.isValid = false;
            }else{
                e.isValid = true;
            }
        }
    }
}catch(err){
    alert(err);
}