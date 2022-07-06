//Coordiandor y delegados (nombre USERS refiere a que NO hay filtro de USUARIOACTUAL = $UserId$ en el formulario) revisan tramite


//ONINIT ASIGNAR ESTADO
try{
    /*
    Si IDTRAMITE es nulo (es decir es inserción de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');

        IDENTIDAD_ExpandirBtn.style.display = 'none';
        TIPOTRAMITE_ExpandirBtn.style.display = 'none';
        CLASETRAMITE_ExpandirBtn.style.display = 'none';
        FECHARADENTR_ExpandirBtn.style.display = 'none';

        /*
        Si trámite NO está en estados de notificación, ocultar Texto Notificación (118=> Req. Prof. Filtro, 119=> Req. Abog., 120=> Req. Coor.)
        */
        if(s.GetValue() == 118 || s.GetValue() == 119 || s.GetValue() == 120){
            OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
        }
        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}

//VALIDATION ASIGNAR ESTADO
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite asignados que requieren validación (117=>Rev. Profesional, 118=>Requer. Prof. Filtro, 122=>Aprob. Prof. Filtro)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 118 || vEstadoAsignado == 122){
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                    OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                    let msg = arrValidarEnvio[0].RESPUESTA;
                    alert(msg);
                    e.isValid = false;
                    return;
                } else {
                    e.isValid = true;
                }
            }
        }
        
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario (117=>Rev. Profesional, 119=>Requer. Abogado, 123=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 119 || vEstadoAsignado == 123){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
               Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario (118=>Req. Prof. Filtro, 122=>Aprob. Prof. Filtro, 120=>Requer. Coord, 124=> Aprob. Coord.)
            */
            if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 118 || arrRes[0].IDESTADOTRAMITE == 122 || arrRes[0].IDESTADOTRAMITE == 120 || arrRes[0].IDESTADOTRAMITE == 124) ){
                OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                /*
                    Si el evento Validation no fue llamado desde el botón Actualizar, Recargar Lista de Usuarios
                */
                ( !event.path.includes(ACTUALIZAR_BTN) && RecargarLista(USUARIOACTUAL, s.GetValue(), false) );
            }else{
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
            }
        }else{
            OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        }
    }
}catch (err){
    alert(err.message);
}




//ONCHANGE ASIGNAR ESTADO (DEPRECATED)
try{
    if(IDTRAMITE.GetValue() !== null){
      if(s.GetValue() == 117 || s.GetValue() == 119 || s.GetValue() == 123){
        const items = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items, false);
        if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 118 || arrRes[0].IDESTADOTRAMITE == 122 || arrRes[0].IDESTADOTRAMITE == 120 || arrRes[0].IDESTADOTRAMITE == 124) ){
          OcultarFila("SEC_AT", "USUARIOACTUAL", false);
          RecargarLista(USUARIOACTUAL, s.GetValue(), false);
        }else{
          OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        }
      }else{
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
      }
    }
}catch(err){
    alert(err);
}