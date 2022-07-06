try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){

        const MapaEstadosV = {
            42: {   
                Abreviatura: "FREQPROFIL",
                EstadoReqObserv: false
            },
            47: {
                Abreviatura: "FREQABO",
                EstadoReqObserv: false
            },
            54: {
                Abreviatura: "FRESPROFIL",
                EstadoReqObserv: false
            },
            59: {
                Abreviatura: "FASIASEJ",
                EstadoReqObserv: false
            },
            62: {
                Abreviatura: "FREVPROJUR",
                EstadoReqObserv: true
            },
            64: {
                Abreviatura: "FREVPROJURP",
                EstadoReqObserv: false
            },
            65: {
                Abreviatura: "FREVASEJ",
                EstadoReqObserv: false
            },
            67: {
                Abreviatura: "FNOTASIPRO",
                EstadoReqObserv: true
            },
            69: {
                Abreviatura: "FNOTREVPROFIL",
                EstadoReqObserv: false
            },
            72: {
                Abreviatura: "FNOTASIABO",
                EstadoReqObserv: false
            },
            140: {
                Abreviatura: "FEJEPRO",
                EstadoReqObserv: true
            },
            82: {
                Abreviatura: "FEJEPROFIL",
                EstadoReqObserv: false
            },
            141: {
                Abreviatura: "FEJEABO",
                EstadoReqObserv: false
            },
            44: {
                Abreviatura: "FREQCOOR",
                EstadoReqObserv: false
            },
            66: {
                Abreviatura: "FFIRDIR",
                EstadoReqObserv: false
            },
            75: {
                Abreviatura: "FNOTREVCOO",
                EstadoReqObserv: false
            },
            83: {
                Abreviatura: "FEJEREVCOO",
                EstadoReqObserv: false
            },
            37: {
                Abreviatura: "FREVPRO",
                EstadoReqObserv: true
            }
        }

        let vEstadoAsignado = parseInt(s.GetValue());
        if(MapaEstadosV[vEstadoAsignado].EstadoReqObserv){
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


















































































try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
        let vEstadoAsignado = s.GetValue();  
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
}catch (err){
    alert(err);
}






//CODIGO DEPRECADO
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
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