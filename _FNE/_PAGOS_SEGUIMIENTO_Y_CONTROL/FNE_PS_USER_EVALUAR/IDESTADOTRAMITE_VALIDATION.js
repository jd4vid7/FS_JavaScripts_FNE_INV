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
          /*
            Si el movimiento de flujo es valido, determinar si se requiere o no Texto Notificacion (estado 118 => Req. Pro. Fil.)
          */
          e.isValid = true;
          if(s.GetValue() == 118){
            OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
          }else{
            OcultarFila("SEC_AT", "TEXTONOTIFICACION", false);
            TEXTONOTIFICACION.Focus();
          }
        }
      }
    }
  }catch (err) {
      alert(err.message);
  }