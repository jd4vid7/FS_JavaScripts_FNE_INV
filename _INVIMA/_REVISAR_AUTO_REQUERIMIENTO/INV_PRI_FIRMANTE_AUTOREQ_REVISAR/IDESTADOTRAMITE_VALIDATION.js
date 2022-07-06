try {
  if ( IDTRAMITE.GetValue() !== null && s.GetValue() !== null) {
    if(s.GetValue() == 7 || s.GetValue() == 2){
      OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
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
          OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
          e.isValid = false;
        } else {
          e.isValid = true;
        }
      }else{
        alert("No se ha podido conectar con el servidor.");
        e.isValid = false;
      }
    }else{
      OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", false);
    }
  }
} catch (err) {
  alert(err);
}







//LEGACY
try {
    if (s.GetValue() !== null) {
      var ID = 0;
      ID = IDTRAMITE.GetValue();
      var vEstadoAsignado = s.GetValue();
      var items = [
        { Key: "IDTRAMITE", Value: ID },
        { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado },
      ];
      var arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
  
      if (arrValidarEnvio.length > 0) {
        if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
          var msg = arrValidarEnvio[0].RESPUESTA;
          alert(msg);
          OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
          e.isValid = false;
        } else {
          e.isValid = true;
          /*
            Si es devolucion a Asignar Evaluador (IDs 7 y 2), Ocultar Campo de Auto Requerimiento
          */
          if(s.GetValue() == 7 || s.GetValue() == 2){
              OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
          }else{
            OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", false);
          }
        }
      }
    }
} catch (err) {
    alert(err);
}