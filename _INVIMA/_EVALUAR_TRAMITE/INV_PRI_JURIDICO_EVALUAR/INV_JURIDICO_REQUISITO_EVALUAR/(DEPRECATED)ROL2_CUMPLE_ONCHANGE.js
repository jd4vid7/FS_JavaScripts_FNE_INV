//CODIGO ORIGINAL DEPRECADO
try {
    function getElID() {
      const Nro = s.name.split("_");
      return Nro[Nro.length - 1];
    }
    var vID = getElID();
    var vROL2_COMENTARIO = ASPxClientControl.GetControlCollection().GetByName(
      "grdGeneralEdicionMultiple_ROL2_COMENTARIO_" + vID
    );
    vROL2_COMENTARIO.isValid = true;
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
          AsignarValorCambiado("ROL2_CUMPLE_" + vID, s.GetValue());
        } else if (parseInt(arrRes[0].RESPUESTA) === 1 && s.GetValue() === 2) {
          MostrarMensaje(
            'ADVERTENCIA$|$ Evaluación "No Cumple" no válida para trámites en primer ciclo.'
          );
          s.SetValue(3);
          AsignarValorCambiado("ROL2_CUMPLE_" + vID, s.GetValue());
        }
      }
    }else{
      AsignarValorCambiado("ROL2_CUMPLE_" + vID, null);
    }
  } catch (err) {
    alert(err.message);
  }