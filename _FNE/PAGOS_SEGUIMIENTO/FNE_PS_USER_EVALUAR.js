//Usuario (nombre USER refiere a que SI hay filtro de USUARIOACTUAL = $UserId$ en el formulario) evalua tramite y requisitos

//(IDESTADOTRAMITE)

//ONINIT
try{
  /*
    Ocultar botones expandir de listas externas y ocultar Texto Notificacion inicialmente
  */
  const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
  const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
  const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
  const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');

  IDENTIDAD_ExpandirBtn.style.display = 'none';
  TIPOTRAMITE_ExpandirBtn.style.display = 'none';
  CLASETRAMITE_ExpandirBtn.style.display = 'none';
  FECHARADENTR_ExpandirBtn.style.display = 'none';

  const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
  const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
  RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
  RADENTRADA_CTRL.style.color = 'black';
  RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
  RADENTRADA_CTRL_PADRE.style.color = 'black';

  OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
}catch(err){
  alert(err);
}


//VALIDATION
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








  // ON CHANGE DEPRECATED
try{
    if(s.GetValue() == 118){
        OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
    }else{
        OcultarFila("SEC_AT", "TEXTONOTIFICACION", false);
        TEXTONOTIFICACION.Focus();
    }
}catch(err){
    alert(err);
}