try {
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    let msg = 'ADVERTENCIA$|$ ';
    let advertenciaNro = 1;
    /* Validación de valor Cumple, según ciclo trámite */
    if (s.GetValue() !== null) {
        const items = [{ Key: "IDTRAMITEREQUISITO", Value: Nro }];
        let arrRes = InvocarComando("INV_CMD_TRAMITECICLO_DESDEREQUISITO", items, false);
        if (arrRes.length > 0) {
            /* Cumple ID
                3 => Con Requerimiento 
                2 => No Cumple
            */
            if (parseInt(arrRes[0].RESPUESTA) > 1 && s.GetValue() === 3) {
                msg += String(advertenciaNro) + ". Evaluación \"Con Requerimiento\" no válida para trámites en ciclo mayor a uno (1). \n";
                advertenciaNro++;
                s.SetValue(2);
                AsignarValorCambiado("ROL2_CUMPLE_" + Nro, 2);
            } else if (parseInt(arrRes[0].RESPUESTA) === 1 && s.GetValue() === 2) {
                msg += String(advertenciaNro) + ". Evaluación \"No Cumple\" no válida para trámites en primer ciclo. \n";
                advertenciaNro++;
                s.SetValue(3);
                AsignarValorCambiado("ROL2_CUMPLE_" + Nro, 3);
            }
        }
    }else{
        s.SetValue(null);
        AsignarValorCambiado("ROL2_CUMPLE_" + Nro, null);
    }

    /* Validación de Comentario, según valor Cumple determinado */
    let ROL2_COMENTARIO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ROL2_COMENTARIO_" + Nro);
    ROL2_COMENTARIO.isValid = true;
    if( (s.GetValue() === 2 || s.GetValue() === 3) && ROL2_COMENTARIO.GetValue() === null ){
        ROL2_COMENTARIO.isValid = false;
        msg += String(advertenciaNro) + ". Comentario es requerido para evaluación No Cumple ó Con Requerimiento. \n";
        advertenciaNro++;
    }

    /* Mostrar Advertencia Si Aplica */
    if(msg != 'ADVERTENCIA$|$ '){
        MostrarMensaje(msg);
    }
} catch (err) {
    alert(err);
}