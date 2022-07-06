try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
        let vEstadoAsignado = s.GetValue();
        /*
            Estados trámite que requieren validación (89=>Rev. Profesional)
        */
        if(vEstadoAsignado == 89){
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                    let msg = arrValidarEnvio[0].RESPUESTA;
                    alert(msg);
                    ( e.isValid && (e.isValid = false) );
                    return;
                } else {
                    ( e.isValid && (e.isValid = true) );
                }
            }else{
                alert("No se ha podido conectar con el servidor.");
                ( e.isValid && (e.isValid = false) );
            }
        }
    }
}catch (err){
    alert(err);
}



//CODIGO DEPRECADO
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite asignado es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite que requieren validación (89=>Rev. Profesional)
        */
        if(vEstadoAsignado == 89){
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
            Estados trámite asignados que puede que permitan Asignación de Usuario (89=>Rev. Profesional, 91=>Requer. Abogado, 95=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 89 || vEstadoAsignado == 91 || vEstadoAsignado == 95){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
               Si Array de Comando válido y Estados trámite actuales son autorizados para Asignar Usuario (90=>Req. Prof. Filtro, 94=>Aprob. Prof. Filtro, 92=>Requer. Coord, 96=> Aprob. Coord.)
            */
            if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 90 || arrRes[0].IDESTADOTRAMITE == 94 || arrRes[0].IDESTADOTRAMITE == 92 || arrRes[0].IDESTADOTRAMITE == 96) ){
                OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                /*
                    Si el evento Validation no fue llamado desde el botón Actualizar, Recargar Lista
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