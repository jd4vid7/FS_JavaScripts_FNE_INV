/* DEPRECADO; CODIGO YA NO SE USA */
try {
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    let ROL1_COMENTARIO = ASPxClientControl.GetControlCollection().GetByName("grdGeneralEdicionMultiple_ROL1_COMENTARIO_" + Nro);
    ROL1_COMENTARIO.isValid = true;

    if (s.GetValue() !== null) {
        const items = [{ Key: "IDTRAMITEREQUISITO", Value: Nro }];
        let arrRes = InvocarComando("INV_CMD_TRAMITECICLO_DESDEREQUISITO", items, false);
        if (arrRes.length > 0) {
            /* Cumple ID
                3 => Con Requerimiento 
                2 => No Cumple
            */
            if (parseInt(arrRes[0].RESPUESTA) > 1 && s.GetValue() === 3) {
                MostrarMensaje('ADVERTENCIA$|$ Evaluación "Con Requerimiento" no válida para trámites en ciclo mayor a uno (1).');
                s.SetValue(2);
                AsignarValorCambiado("ROL1_CUMPLE_" + Nro, 2);
            } else if (parseInt(arrRes[0].RESPUESTA) === 1 && s.GetValue() === 2) {
                MostrarMensaje('ADVERTENCIA$|$ Evaluación "No Cumple" no válida para trámites en primer ciclo.');
                s.SetValue(3);
                AsignarValorCambiado("ROL1_CUMPLE_" + Nro, 3);
            }
        }
    }else{
        s.SetValue(null);
        AsignarValorCambiado("ROL1_CUMPLE_" + Nro, null);
    }
} catch (err) {
    alert(err.message);
}



//LEGACY
try {
    function getElID() {
      const Nro = s.name.split("_");
      return Nro[Nro.length - 1];
    }
    var vID = getElID();
    var vROL1_COMENTARIO = ASPxClientControl.GetControlCollection().GetByName(
      "grdGeneralEdicionMultiple_ROL1_COMENTARIO_" + vID
    );
    vROL1_COMENTARIO.isValid = true;
    if (String(s.GetValue()) != "null") {
      var items = [{ Key: "IDTRAMITEREQUISITO", Value: vID }];
      var arrRes = InvocarComando(
        "INV_CMD_TRAMITECICLO_DESDEREQUISITO",
        items,
        false
      );
      if (arrRes.length > 0) {
        if (parseInt(arrRes[0].RESPUESTA) > 1 && s.GetValue() === 3) {
          MostrarMensaje(
            'ADVERTENCIA$|$ Evaluación "Con Requerimiento" no válida para trámites en ciclo mayor a uno (1).'
          );
          s.SetValue(2);
          AsignarValorCambiado("ROL1_CUMPLE_" + vID, s.GetValue());
        } else if (parseInt(arrRes[0].RESPUESTA) === 1 && s.GetValue() === 2) {
          MostrarMensaje(
            'ADVERTENCIA$|$ Evaluación "No Cumple" no válida para trámites en primer ciclo.'
          );
          s.SetValue(3);
          AsignarValorCambiado("ROL1_CUMPLE_" + vID, s.GetValue());
        }
      }
    }else{
      AsignarValorCambiado("ROL1_CUMPLE_" + vID, null);
    }
} catch (err) {
    alert(err.message);
}