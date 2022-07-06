//v1
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite que requieren validación (117=>Rev. Profesional, 118=>Requer. Prof. Filtro, 122=>Aprob. Prof. Filtro)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 118 || vEstadoAsignado == 122){
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                    OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                    let msg = arrValidarEnvio[0].RESPUESTA;
                    alert(msg);
                    e.isValid = false;
                } else {
                    e.isValid = true;
                }
            }else{
                e.isValid = false;
            }
        }
    }
}catch (err){
    alert(err);
}


//v0
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite asignados que requieren validación (117=>Rev. Profesional, 118=>Requer. Prof. Filtro, 122=>Aprob. Prof. Filtro)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 118 || vEstadoAsignado == 122){
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                    OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                    let msg = arrValidarEnvio[0].RESPUESTA;
                    alert(msg);
                    e.isValid = false;
                    return;
                } else {
                    e.isValid = true;
                }
            }
        }
        
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario (117=>Rev. Profesional, 119=>Requer. Abogado, 123=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 119 || vEstadoAsignado == 123){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
               Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario (118=>Req. Prof. Filtro, 122=>Aprob. Prof. Filtro, 120=>Requer. Coord, 124=> Aprob. Coord.)
            */
            if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 118 || arrRes[0].IDESTADOTRAMITE == 122 || arrRes[0].IDESTADOTRAMITE == 120 || arrRes[0].IDESTADOTRAMITE == 124) ){
                OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                /*
                    Si el evento Validation no fue llamado desde el botón Actualizar, Recargar Lista de Usuarios
                */
                ( !event.path.includes(ACTUALIZAR_BTN) && RecargarLista(USUARIOACTUAL, s.GetValue(), false) );
            }else{
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
            }
        }else{
            OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        }
    }
}catch (err){
    alert(err.message);
}