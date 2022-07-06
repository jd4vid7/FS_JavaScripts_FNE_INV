try {
  /*
    Si es actualizacion y Estado Asignado no es nulo, Validar Movimiento Flujo
  */
  if(IDTRAMITE.GetValue() !== null && s.GetValue() !== null){
    let ID = IDTRAMITE.GetValue();
    let vEstadoAsignado = s.GetValue();
    let items = [
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
        /*
          Si es Movimiento valido, administrar visualizacion de documento segun Estado Asignado
          
          IDESTADOTRAMITE 54 > Resolucion Prof. Filtro,
          IDESTADOTRAMITE 42 > Requerimiento Prof. Filtro,
        */
        if(vEstadoAsignado == 54){
          tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(true);
          OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", false);
        }else if(vEstadoAsignado == 42){
          OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
          tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
        }
      }
    }else{
      alert("Algo ha salido mal.");
      ( e.isValid && (e.isValid = false) );
    }
  }
}catch (err) {
    alert(err);
}


//codigo DEPRECADO
try {
  /*
    Si es actualizacion y Estado Asignado no es nulo, Validar Movimiento Flujo
  */
  if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
    let ID = 0;
    ID = IDTRAMITE.GetValue();

    let vEstadoAsignado = s.GetValue();
    let items = [
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
        /*
          Si es Movimiento valido, administrar visualizacion de documento segun Estado Asignado
          
          IDESTADOTRAMITE 54 > Resolucion Prof. Filtro,
          IDESTADOTRAMITE 42 > Requerimiento Prof. Filtro,
        */
        if(s.GetValue() == 54){
          tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(true);
          OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", false);
        }else if(s.GetValue() == 42){
          OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
          tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
        }
      }
    }
  }
}catch (err) {
    alert(err);
}