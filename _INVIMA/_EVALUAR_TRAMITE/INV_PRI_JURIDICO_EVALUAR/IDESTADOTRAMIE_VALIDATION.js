try {
    /* Si ID Registro NO es nulo, es actualización de registro */
    if (IDTRAMITE.GetValue() !== null && s.GetValue() !== null) {
      let ID = IDTRAMITE.GetValue();
      let vEstadoAsignado = s.GetValue();
      const items = [
        { Key: "IDTRAMITE", Value: ID },
        { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado },
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
        alert("No se ha podido conectar con el servidor.");
        e.isValid = false;
      }
    }
} catch (err) {
    alert(err);
}







//LEGACY
try {
    if (s.GetValue() !== null) {
      var Id = "0";
      if (IDTRAMITE.GetText() != "") {
        Id = IDTRAMITE.GetText();
      }
      var vEstadoAsignado = s.GetValue();
      var items = [
        { Key: "IDTRAMITE", Value: Id },
        { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado },
      ];
      var arrValidarEnvio = InvocarComando(
        "ENT_CMD_ValidarMovimientoFlujo",
        items,
        false
      );
  
      if (arrValidarEnvio.length > 0) {
        if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
          var msg = arrValidarEnvio[0].RESPUESTA;
          alert(msg);
          e.isValid = false;
        } else {
          e.isValid = true;
        }
      }
    }
  } catch (err) {
    alert(err.message);
  }