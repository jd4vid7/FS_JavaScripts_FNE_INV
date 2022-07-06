try{
    if(IDTRAMITEREQUERIMIENTO.GetValue() != null){
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");

        (ACTUALIZAR_BTN != null && (ACTUALIZAR_BTN.style.display = "none") );
        (IDTRAMITE_ExpandirBtn != null && (IDTRAMITE_ExpandirBtn.style.display = "none") );
        s.SetEnabled(false);
        const TEXTOREQUERIMIENTO_CTRL = document.getElementById("TEXTOREQUERIMIENTO_I");
        (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.backgroundColor = "#dcdcdc") );
        (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.color = "black") );
        e.isValid = false;
    }
}catch(err){
    alert(err);
}


try{
    /*
        Ocultamiento de Botones Expandir de Listas Externas y Estilos
    */
    const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');

    fechaRadExpandirBtn.style.display = 'none';
    claseTramiteExpandirBtn.style.display = 'none';
    EntidadExpandirBtn.style.display = 'none';
    TipoTramiteExpandirBtn.style.display = 'none';
    TramModifExpandirBtn.style.display = 'none';

    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
    RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL.style.color = 'black';
    RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL_PADRE.style.color = 'black';
}catch(err){
    alert(err);
}



try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() != null){
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
        /*
        Si trámite NO está en estados de notificación, ocultar Texto Notificación (130 => Req. Prof. Filtro, 131 => Req. Abog., 132 => Req. Coor.)
        */
        if(s.GetValue() == 130 || s.GetValue() == 131 || s.GetValue() == 132){
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





try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro)
    */
    if(IDTRAMITE.GetValue() != null){
        const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_ExpandirBtn = document.getElementById("IDENTIDAD_B-1");
        const FECHARADICADOENTRADA_ExpandirBtn = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");

        ( IDTIPOTRAMITE_ExpandirBtn != null && (IDTIPOTRAMITE_ExpandirBtn.style.display = "none") );
        ( IDENTIDAD_ExpandirBtn != null && (IDENTIDAD_ExpandirBtn.style.display = "none") );
        ( FECHARADICADOENTRADA_ExpandirBtn != null && (FECHARADICADOENTRADA_ExpandirBtn.style.display = "none") );
        ( IDCLASETRAMITE_ExpandirBtn != null && (IDCLASETRAMITE_ExpandirBtn.style.display = "none") );

        s.SetEnabled(false);
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
        RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL.style.color = 'black';
        RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL_PADRE.style.color = 'black';
    }
}catch (err){
    alert(err.message);
}





try{
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
  
    IDENTIDAD_ExpandirBtn.style.display = 'none';
    TIPOTRAMITE_ExpandirBtn.style.display = 'none';
    CLASETRAMITE_ExpandirBtn.style.display = 'none';
    FECHARADENTR_ExpandirBtn.style.display = 'none';
  
    OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);

    RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
}catch(err){
    alert(err);
}




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








try{
    const FECHARADICADOENTRADA_ExpandirBtn = document.getElementById("FECHARADICADOENTRADA_B-1");
    const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");
    const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");
    const IDENTIDAD_ExpandirBtn = document.getElementById("IDENTIDAD_B-1");
  
    FECHARADICADOENTRADA_ExpandirBtn.style.display = "none";
    IDCLASETRAMITE_ExpandirBtn.style.display = "none";
    IDTIPOTRAMITE_ExpandirBtn.style.display = "none";
    IDENTIDAD_ExpandirBtn.style.display = "none";
  
    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
    const IDENTIDAD_CTRL = document.getElementById("IDENTIDAD_I");
    const IDENTIDAD_CTRL_PADRE = document.getElementById("IDENTIDAD_I").parentElement;
    
    RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL.style.color = 'black';
    RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL_PADRE.style.color = 'black';

    s.SetEnabled(false);
    IDENTIDAD_CTRL.style.backgroundColor = '#dcdcdc';
    IDENTIDAD_CTRL.style.color = 'black';
    IDENTIDAD_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    IDENTIDAD_CTRL_PADRE.style.color = 'black';
}catch(err){
    alert(err);
}


try{
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const IDESTADOTRAMITE_ExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
    const actualizarBTN = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');

    actualizarBTN.style.display = 'none';
    IDENTIDAD_ExpandirBtn.style.display = 'none';
    TIPOTRAMITE_ExpandirBtn.style.display = 'none';
    CLASETRAMITE_ExpandirBtn.style.display = 'none';
    FECHARADENTR_ExpandirBtn.style.display = 'none';
    IDESTADOTRAMITE_ExpandirBtn.style.display = 'none';
  
    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;

    RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL.style.color = 'black';
    RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL_PADRE.style.color = 'black';

    s.SetEnabled(false);

    const IDENTIDAD_CTRL = document.getElementById("IDENTIDAD_I");
    const IDENTIDAD_CTRL_PADRE = document.getElementById("IDENTIDAD_I").parentElement;

    IDENTIDAD_CTRL.style.backgroundColor = '#dcdcdc';
    IDENTIDAD_CTRL.style.color = 'black';
    IDENTIDAD_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    IDENTIDAD_CTRL_PADRE.style.color = 'black';
}catch(err){
    alert(err);
}



const AddDoc_BTN = document.getElementById("IDDOCUMENTOBORRADOR_txtNuevo_").parentElement.parentElement.parentElement.parentElement.parentElement;
(AddDoc_BTN != null && (AddDoc_BTN.style.display = "none") );



if(IDFSDOCUMENTO_SOPORTE_HFValorID_.Get("ID") != ""){
    IDFSDOCUMENTO_SOPORTE_txtEditar_.SetVisible(false);
    IDFSDOCUMENTO_SOPORTE_txtEditarEscanear_.SetVisible(false);
    }
    else{
    IDFSDOCUMENTO_SOPORTE_txtEscanear_.SetVisible(false);
    IDFSDOCUMENTO_SOPORTE_txtNuevo_.SetVisible(false);
    }



try{
    const Actualizar_BTN = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
    Actualizar_BTN.style.display = 'none';

    const IDTRAMITE_ExpandirBtn = document.getElementById('IDTRAMITE_B-1');
    const IDPAIS_ExpandirBtn = document.getElementById('IDPAIS_B-1');
    IDTRAMITE_ExpandirBtn.style.display = 'none';
    IDPAIS_ExpandirBtn.style.display = 'none';

    const SUSTANCIA_CTRL = document.getElementById("SUSTANCIA_I");
    const PADRE_SUSTANCIA_CTRL = document.getElementById("SUSTANCIA_I").parentElement;
    const NOMBRECOMERCIAL_CTRL = document.getElementById("NOMBRECOMERCIAL_I");
    const PADRE_NOMBRECOMERCIAL_CTRL = document.getElementById("NOMBRECOMERCIAL_I").parentElement;
    const CASINVIMA_CTRL = document.getElementById("CASINVIMA_I");
    const PADRE_CASINVIMA_CTRL = document.getElementById("CASINVIMA_I").parentElement;

    SUSTANCIA_CTRL.style.backgroundColor = '#dcdcdc';
    SUSTANCIA_CTRL.style.color = 'black';
    PADRE_SUSTANCIA_CTRL.style.backgroundColor = '#dcdcdc';
    PADRE_SUSTANCIA_CTRL.style.color = 'black';

    NOMBRECOMERCIAL_CTRL.style.backgroundColor = '#dcdcdc';
    NOMBRECOMERCIAL_CTRL.style.color = 'black';
    PADRE_NOMBRECOMERCIAL_CTRL.style.backgroundColor = '#dcdcdc';
    PADRE_NOMBRECOMERCIAL_CTRL.style.color = 'black';

    CASINVIMA_CTRL.style.backgroundColor = '#dcdcdc';
    CASINVIMA_CTRL.style.color = 'black';
    PADRE_CASINVIMA_CTRL.style.backgroundColor = '#dcdcdc';
    PADRE_CASINVIMA_CTRL.style.color = 'black';

    s.SetEnabled(false);
    const CONCEPTOFINAL_ExpandirBtn = document.getElementById('CONCEPTOFINAL_B-1');
    CONCEPTOFINAL_ExpandirBtn.style.display = 'none';

    const CONCEPTOFINAL_CTRL = document.getElementById("CONCEPTOFINAL_I");
    const PADRE_CONCEPTOFINAL_CTRL = document.getElementById("CONCEPTOFINAL_I").parentElement;
    CONCEPTOFINAL_CTRL.style.backgroundColor = '#dcdcdc';
    CONCEPTOFINAL_CTRL.style.color = 'black';
    PADRE_CONCEPTOFINAL_CTRL.style.backgroundColor = '#dcdcdc';
    PADRE_CONCEPTOFINAL_CTRL.style.color = 'black';
}catch(err){
        alert(err);
}