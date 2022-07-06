//V1 SE AÑADE CICLO
try {
    if(IDPAGO.GetValue() !== null){
        const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const CALC_NROCUOTA = document.getElementById("CALC_NROCUOTA_I");
        const CALC_IDCUOTA_I = document.getElementById("CALC_IDCUOTA_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        ( CALC_NROCUOTA != null && (CALC_NROCUOTA.style.height = "28.8px") );
        ( CALC_CICLO_I != null && (CALC_CICLO_I.style.height = "28.8px") );

        const invalidarFormulario = (mostrarAlerta = true, eInvalidar = true, msg) => {
            ( ELIMINAR_BTN != null && (ELIMINAR_BTN.style.display = "none") );
            ( mostrarAlerta && alert(msg) );
            if(eInvalidar){
                ( e != null && (e.isValid = false) );
            }
        }
        
        if(CALC_IDCUOTA_I != null){
            if(CALC_IDCUOTA_I.innerHTML != null && CALC_IDCUOTA_I.innerHTML != ""){
                const items = [{Key: "IDCUOTA", Value: CALC_IDCUOTA_I.innerHTML}];
                OcultarFila("SEC_DG", "CALC_IDCUOTA", true);
                let arrRes = InvocarComando("FNE_CMD_TRAMITEPAGOCUOTA_ALLOWDELETE", items, false);
                if(arrRes.length > 0){
                    let r = arrRes[0].RESPUESTA;
                    if(r == 'NO'){
                        invalidarFormulario(false, false, null);
                    }
                }else{
                    invalidarFormulario(msg = 'No se ha podido conectar con el servidor.');
                }
            }else{
                invalidarFormulario(msg = 'Algo ha salido mal.');
            }
        }
    }else if(IDPAGO.GetValue() === null){
        const IDCUOTA_EXTENDBTN = document.getElementById("IDCUOTA_B-1");
        const CICLO_EXTENDBTN = document.getElementById("CICLO_B-1");
        ( IDCUOTA_EXTENDBTN != null && (IDCUOTA_EXTENDBTN.style.display = "none") );
        ( CICLO_EXTENDBTN != null && (CICLO_EXTENDBTN.style.display = "none") );
    }
} catch (err) {
    alert(err);
}

//V0
try {
    if(IDPAGO.GetValue() !== null){
        const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const CALC_NROCUOTA = document.getElementById("CALC_NROCUOTA_I");
        const CALC_IDCUOTA_I = document.getElementById("CALC_IDCUOTA_I");
        ( CALC_NROCUOTA != null && (CALC_NROCUOTA.style.height = "28.8px") );

        const invalidarFormulario = (mostrarAlerta = true, eInvalidar = true, msg) => {
            ( ELIMINAR_BTN != null && (ELIMINAR_BTN.style.display = "none") );
            ( mostrarAlerta && alert(msg) );
            if(eInvalidar){
                ( e != null && (e.isValid = false) );
            }
        }
        
        if(CALC_IDCUOTA_I != null){
            if(CALC_IDCUOTA_I.innerHTML != null && CALC_IDCUOTA_I.innerHTML != ""){
                const items = [{Key: "IDCUOTA", Value: CALC_IDCUOTA_I.innerHTML}];
                OcultarFila("SEC_DG", "CALC_IDCUOTA", true);
                let arrRes = InvocarComando("FNE_CMD_TRAMITEPAGOCUOTA_ALLOWDELETE", items, false);
                if(arrRes.length > 0){
                    let r = arrRes[0].RESPUESTA;
                    if(r == 'NO'){
                        invalidarFormulario(false, false, null);
                    }
                }else{
                    invalidarFormulario(msg = 'No se ha podido conectar con el servidor.');
                }
            }else{
                invalidarFormulario(msg = 'Algo ha salido mal.');
            }
        }
    }else if(IDPAGO.GetValue() === null){
        const IDCUOTA_EXTENDBTN = document.getElementById("IDCUOTA_B-1");
        ( IDCUOTA_EXTENDBTN != null && (IDCUOTA_EXTENDBTN.style.display = "none") );
    }
} catch (err) {
    alert(err);
}