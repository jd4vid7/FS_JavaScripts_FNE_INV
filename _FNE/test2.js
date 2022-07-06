try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
    if(IDTRAMITEREQUERIMIENTO.GetValue() === null){
        const IDESTADOTRAMITE_EXPANDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIO_EXPANDBTN = document.getElementById("USUARIOCREACIONREQUERIMIENTO_B-1");
        cambiarEstiloCtrls([IDTRAMITE_EXPANDBTN, IDESTADOTRAMITE_EXPANDBTN, USUARIO_EXPANDBTN], "display", "none");
    }else{
        cambiarEstiloCtrls([IDTRAMITE_EXPANDBTN], "display", "none");
        const CALC_USUARIORADICANTE = document.getElementById("CALC_USUARIORADICANTE_I");
        const CALC_ESTADOTRAMITE = document.getElementById("CALC_ESTADOTRAMITE_ACTUALIZAR_I");
        cambiarEstiloCtrls([CALC_USUARIORADICANTE, CALC_ESTADOTRAMITE], "height", "28.8px");
    }
}catch(err){
    alert(err);
}




try {
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
    const FECHARADICADOENTRADA_EXPANDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
    const IDTIPOTRAMITE_EXPANDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
    const IDENTIDAD_EXPANDBTN = document.getElementById("IDENTIDAD_B-1");
    const IDCLASETRAMITE_EXPANDBTN = document.getElementById("IDCLASETRAMITE_B-1");
    const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
    const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
    const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
    const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;

    cambiarEstiloCtrls([ACTUALIZAR_BTN, FECHARADICADOENTRADA_EXPANDBTN, IDTIPOTRAMITE_EXPANDBTN, IDENTIDAD_EXPANDBTN, IDCLASETRAMITE_EXPANDBTN], "display", "none");
    s.SetEnabled(false);
    cambiarEstiloCtrls([IDENTIDAD_I, RADICADOENTRADA_I], "color", "black");
    cambiarEstiloCtrls([IDENTIDAD_I, RADICADOENTRADA_I, PADRE_IDENTIDAD_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
    
    const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
    const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
    const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
    cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_ESTADOTRAMITE_I], "height", "28.8px");
} catch (err) {
    alert(err);
}



try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        cambiarEstiloCtrls([FECHARADICADOENTRADA_EXTENDBTN, IDENTIDAD_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDCLASETRAMITE_EXTENDBTN], "display", "none");

        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_ESTADOTRAMITE_I], "height", "28.8px");
    }
}catch(err){
    alert(err);
}


try{
    IDTRAMITE.SetText(IDTRAMITE.GetValue());
    const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
    ( IDTRAMITE_EXPANDBTN && (IDTRAMITE_EXPANDBTN.style.display = "none") );
}catch(err){
    alert(err);
}







try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITE_ExpandirBtn = document.getElementById('IDTRAMITE_B-1');
    const IDTIPOPROFESION_ExpandirBtn = document.getElementById('IDTIPOPROFESION_B-1');
    const FECHAFINCONTRATO_ExpandirBtn = document.getElementById('FECHAFINCONTRATO_B-1');
    const IDTIPOCONTRATO_ExpandirBtn = document.getElementById('IDTIPOCONTRATO_B-1');
    const FECHAINICIOCONTRATO_ExpandirBtn = document.getElementById('FECHAINICIOCONTRATO_B-1');
    const IDTIPOIDENTIFICACION_ExpandirBtn = document.getElementById('IDTIPOIDENTIFICACION_B-1');
    const ACTUALIZAR_Btn = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
    cambiarEstiloCtrls([IDTRAMITE_ExpandirBtn, IDTIPOPROFESION_ExpandirBtn, FECHAFINCONTRATO_ExpandirBtn, IDTIPOCONTRATO_ExpandirBtn, FECHAINICIOCONTRATO_ExpandirBtn, IDTIPOIDENTIFICACION_ExpandirBtn, ACTUALIZAR_Btn], "display", "none");

    s.SetEnabled(false);
    const IDENTIFICACION_I = document.getElementById('IDENTIFICACION_I');
    const NOMBRE_I = document.getElementById('NOMBRE_I');
    const TEXTOHORARIO_I = document.getElementById('TEXTOHORARIO_I');
    const IDTRAMITE_I = document.getElementById('IDTRAMITE_I');
    const PADRE_IDENTIFICACION_I = document.getElementById('IDENTIFICACION_I').parentElement;
    const PADRE_NOMBRE_I = document.getElementById('NOMBRE_I').parentElement;
    const PADRE_TEXTOHORARIO_I = document.getElementById('TEXTOHORARIO_I').parentElement;
    const PADRE_IDTRAMITE_I = document.getElementById('IDTRAMITE_I').parentElement;
    cambiarEstiloCtrls([IDENTIFICACION_I, NOMBRE_I, TEXTOHORARIO_I, IDTRAMITE_I], "color", "black");
    cambiarEstiloCtrls([IDENTIFICACION_I, NOMBRE_I, TEXTOHORARIO_I, PADRE_IDENTIFICACION_I, PADRE_NOMBRE_I, PADRE_TEXTOHORARIO_I, PADRE_IDTRAMITE_I], "backgroundColor", "#dcdcdc");
}catch(err){
    alert(err);
}


try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        const IDESTADOTRAMITE_EXTENDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, FECHARADICADOENTRADA_EXTENDBTN, IDENTIDAD_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDCLASETRAMITE_EXTENDBTN, IDESTADOTRAMITE_EXTENDBTN], "display", "none");

        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I], "height", "28.8px");

        s.SetEnabled(false);
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, IDENTIDAD_I, PADRE_RADICADOENTRADA_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}


//


try{
    IDTRAMITE.SetText(IDTRAMITE.GetValue());
    const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
    ( IDTRAMITE_EXPANDBTN && (IDTRAMITE_EXPANDBTN.style.display = "none") );
    if(IDDIRECTORTECNICO.GetValue() === null){
        MostrarMensaje('ADVERTENCIA$|$ Solo está habilitado un (1) registro de Director Técnico por trámite.');
    }else{
        
    }
}catch(err){
    alert(err);
}


console.log("VALIDACION EN PROGRESO");  
const insertarBTN = document.getElementById("splFormulario_cbpPrimario_FSToolbarListar_DXI0_");
const items = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
let arrRes = InvocarComando("FNE_EXISTE_DIRECTOR", items, false);
if(arrRes.length > 0 ){
    console.log(arrRes[0].RESPUESTA, "VAL rta");
    if(arrRes[0].RESPUESTA == 'SI'){
        console.log("VAL rta es si");
        ( insertarBTN && (insertarBTN.style.display = "none"));
    }else{
        ( insertarBTN && (insertarBTN.style.display = "block"));
    }
}else{
    alert("No se ha podido conectar con el servidor");
    ( insertarBTN && (insertarBTN.style.display = "none"));
}



try{
    console.log(s.GetValue(), typeof s.GetValue());
    if(s.GetValue() === true){
        const items = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("FNE_EXISTE_DTPRINCIPAL_DE_RESOLUCION", items, false);
        if(arrRes.length > 0 ){
            console.log(arrRes[0].RESPUESTA, "VAL rta");
            if(arrRes[0].RESPUESTA == 'SI'){
                alert("Ya existe un(a) Solicitud/Registro de Director Técnico principal asociado a la Resolución de Inscripción.");
                s.SetValue(false);
            }
        }else{
            alert("No se ha podido conectar con el servidor");
            s.SetValue(false);
        }
    }
}catch(err){
    alert(err);
}




try {
    if(IDTRAMITECUOTA.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const FECHAGENERADO_EXTENDBTN = document.getElementById("FECHAGENERADO_B-1");
        const FECHAESTIMADOPAGO_EXTENDBTN = document.getElementById("FECHAESTIMADOPAGO_B-1");
        const IDLICENCIAINVIMA_EXTENDBTN = document.getElementById("IDLICENCIAINVIMA_B-1");
        const IDRESOLUCIONFNE_EXTENDBTN = document.getElementById("IDRESOLUCIONFNE_B-1");
        const IDTIPOPAGO_EXTENDBTN = document.getElementById("IDTIPOPAGO_B-1");
        const IDTIPOTARIFA_EXTENDBTN = document.getElementById("IDTIPOTARIFA_B-1");
        const IDEMPRESA_EXTENDBTN = document.getElementById("IDEMPRESA_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, FECHAGENERADO_EXTENDBTN, FECHAESTIMADOPAGO_EXTENDBTN, IDLICENCIAINVIMA_EXTENDBTN, IDRESOLUCIONFNE_EXTENDBTN, IDTIPOPAGO_EXTENDBTN, IDTIPOTARIFA_EXTENDBTN, IDEMPRESA_EXTENDBTN],"display", "none");

        s.SetEnabled(false);
        const FECHAGENERADO_I = document.getElementById("FECHAGENERADO_I");
        const PADRE_FECHAGENERADO_I = document.getElementById("FECHAGENERADO_I").parentElement;
        const UNIDADVALOR_I = document.getElementById("UNIDADVALOR_I");
        const PADRE_UNIDADVALOR_I = document.getElementById("UNIDADVALOR_I").parentElement;
        cambiarEstiloCtrls([FECHAGENERADO_I, UNIDADVALOR_I], "color", "black");
        cambiarEstiloCtrls([FECHAGENERADO_I, PADRE_FECHAGENERADO_I, UNIDADVALOR_I, PADRE_UNIDADVALOR_I], "backgroundColor", "#dcdcdc");
    }
} catch (err) {
    alert(err);
}





try {
    if(IDPAGO.GetValue() !== null){
        const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const IDCUOTA_EXTENDBTN = document.getElementById("IDCUOTA_B-1");
        ( IDCUOTA_EXTENDBTN != null && (IDCUOTA_EXTENDBTN.style.display = "none") );

        const invalidarFormulario = (mostrarAlerta = true, eInvalidar = true, msg) => {
            ( ELIMINAR_BTN != null && (ELIMINAR_BTN.style.display = "none") );
            ( mostrarAlerta && alert(msg) );
            if(eInvalidar){
                ( e != null && (e.isValid = false) );
            }
        }

        if(IDCUOTA.GetValue() != null){
            const items = [{Key: "IDCUOTA", Value: IDCUOTA.GetValue()}];
            let arrRes = InvocarComando("FNE_CMD_TRAMITEPAGOCUOTA_ALLOWDELETE", items, false);
            if(arrRes.length > 0){
                let r = arrRes[0].RESPUESTA;
                if(r == 'NO'){
                    invalidarFormulario(false, false, null);
                }
            }else{
                invalidarFormulario(msg = 'No se ha podido conectar con el servidor.');
            }
        }else{
            invalidarFormulario(msg = 'Algo ha salido mal.');
        }
    }
} catch (err) {
    alert(err);
}





try{
    if(IDTRAMITE.GetValue() == null)
    {
      const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
      const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
      const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
      const EmpresaExpandirBtn = document.getElementById('IDEMPRESA_B-1');
      const EstadoExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
      const UsuarioExpandirBtn = document.getElementById('USUARIOACTUAL_B-1');
    
      claseTramiteExpandirBtn.style.display = 'none';
      EntidadExpandirBtn.style.display = 'none';
      TipoTramiteExpandirBtn.style.display = 'none';
      EmpresaExpandirBtn.style.display = 'none';
      EstadoExpandirBtn.style.display = 'none';
      UsuarioExpandirBtn.style.display = 'none';
  
      IDESTADOTRAMITE.SetValue(114);
      IDESTADOTRAMITE.SetText("Creado");
  
      const items = [{Key: "IDTRAM", Value: s.GetValue()}];
      let arrRes;
      arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
      if(arrRes.length > 0){
          IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
          IDEMPRESA.SetText(arrRes[0].NOMBRE);
      }
    }
  }catch(err){
    alert(err);
  }


try{
    if(IDTRAMITE.GetValue() == null)
    {
      const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
      const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
      const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
      const EmpresaExpandirBtn = document.getElementById('IDEMPRESA_B-1');
      const EstadoExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
      const UsuarioExpandirBtn = document.getElementById('USUARIOACTUAL_B-1');
    
      claseTramiteExpandirBtn.style.display = 'none';
      EntidadExpandirBtn.style.display = 'none';
      TipoTramiteExpandirBtn.style.display = 'none';
      EmpresaExpandirBtn.style.display = 'none';
      EstadoExpandirBtn.style.display = 'none';
      UsuarioExpandirBtn.style.display = 'none';
  
      IDESTADOTRAMITE.SetValue(114);
      IDESTADOTRAMITE.SetText("Creado");
  
      const items = [{Key: "IDTRAM", Value: s.GetValue()}];
      let arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
      if(arrRes.length > 0){
          IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
          IDEMPRESA.SetText(arrRes[0].NOMBRE);
      }

      RecargarLista(IDTRAMITECUOTA, s.GetValue());
    }
}catch(err){
    alert(err);
}



/* INV_DETALLE_LIC_PADRE, IDENTIDAD ON_INIT */
try{
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const actualizarBTN = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById('IDCLASETRAMITE_B-1');
        const IDENTIDAD_EXTENDBTN = document.getElementById('IDENTIDAD_B-1');
        const IDESTADOTRAMITE_EXTENDBTN = document.getElementById('IDESTADOTRAMITE_B-1');
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById('FECHARADICADOENTRADA_B-1');
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById('IDTIPOTRAMITE_B-1');
        cambiarEstiloCtrls([actualizarBTN, IDCLASETRAMITE_EXTENDBTN, IDENTIDAD_EXTENDBTN, IDESTADOTRAMITE_EXTENDBTN, FECHARADICADOENTRADA_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN], "display", "none");

        s.SetEnabled(false);
        const IDENTIDAD_I = document.getElementById('IDENTIDAD_I');
        const RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I');
        const PADRE_IDENTIDAD_I = document.getElementById('IDENTIDAD_I').parentElement;
        const PADRE_RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I').parentElement;
        cambiarEstiloCtrls([IDENTIDAD_I, RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([IDENTIDAD_I, RADICADOENTRADA_I, PADRE_IDENTIDAD_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
        
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_CANTMODALIDAD_I, CALC_CANTREPRESENTANTE_I, CALC_CANTINMUEBLE_I], "height", "28.8px");

        if(IDDOCUMENTOFINAL_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
            IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOFINAL_txtEscanear_.SetVisible(false);
            IDDOCUMENTOFINAL_txtNuevo_.SetVisible(false);
        }

        let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion_");
        ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");
    }
}catch(err){
    alert(err);
}