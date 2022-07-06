try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
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
            } else {
                ( e.isValid && (e.isValid = true) );
            }
        }else{
            alert("No se ha podido conectar con el servidor");
            ( e.isValid && (e.isValid = false) );
        }
    }
}catch (err){
    alert(err.message);
}