try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
        let vEstadoAsignado = parseInt(s.GetValue());
        /*
            Estados trámite que requieren validación (129 => Rev. Profesional)
        */
        if(vEstadoAsignado === 129){
            const invalidarFormulario = (mensaje) => {
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                alert(mensaje);
                e.isValid = false;
            }
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                let rta = arrValidarEnvio[0].RESPUESTA
                if (rta != "COMPLETA") {
                    invalidarFormulario(rta);
                } else {
                    e.isValid = true;
                }
            }else{
                invalidarFormulario("No se ha podido conectar con el servidor.");
            }
        }
    }
}catch (err){
    alert(err);
}






//CODIGO DEPRECADO
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite que requieren validación (129 => Rev. Profesional)
        */
        if(vEstadoAsignado == 129){
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
            Estados trámite asignados que puede que permitan Asignación de Usuario (129=>Rev. Profesional, 131=>Requer. Abogado, 135=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 129 || vEstadoAsignado == 131 || vEstadoAsignado == 135){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
               Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario (130=>Req. Prof. Filtro, 134=>Aprob. Prof. Filtro, 132=>Requer. Coord, 136=> Aprob. Coord.)
            */
            if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 130 || arrRes[0].IDESTADOTRAMITE == 134 || arrRes[0].IDESTADOTRAMITE == 132 || arrRes[0].IDESTADOTRAMITE == 136) ){
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