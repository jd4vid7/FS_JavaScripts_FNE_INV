try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
        const MapaEstadosV = {
            37: {
                Abreviatura: "FEVPRO",
                EstadoReqObserv: true
            },
            49: {
                Abreviatura: "FEQLIC",
                EstadoReqObserv: false
            },
            67: {
                Abreviatura: "FNOTASIPRO",
                EstadoReqObserv: true
            },
            140: {
                Abreviatura: "FEJEPRO",
                EstadoReqObserv: true
            },
            76: {
                Abreviatura: "FNOTENVLIC",
                EstadoReqObserv: false
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