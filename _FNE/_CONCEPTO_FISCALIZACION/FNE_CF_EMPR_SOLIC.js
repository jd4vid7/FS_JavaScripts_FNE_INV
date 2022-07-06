//tramitemodificado oninit

try{
    /*
        Si IDTRAMITE es nulo, se trata de insercion
    */
    if(IDTRAMITE.GetValue() == null){
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

        /*
            Estado 127 => Creado, Concepto Fiscalizacion (FNE4CRE)
        */
        IDESTADOTRAMITE.SetValue(127);
        IDESTADOTRAMITE.SetText("Creado");

        /*
            Comando traer empresa asociada al TRAMITEMODIFICADO y copiarla
        */
        const items = [{Key: "IDTRAM", Value: s.GetValue()}];
        let arrRes;
        arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
        if(arrRes.length > 0){
            IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
            IDEMPRESA.SetText(arrRes[0].NOMBRE);
        }else{
            IDEMPRESA.SetValue(0);
            IDEMPRESA.SetText("Empresa no encontrada");
        }
    }
}catch(err){
    alert(err);
}

//tramitemodificado onchange

try{
    /*
        Comando traer empresa asociada al TRAMITEMODIFICADO y copiarla
    */
    const items = [{Key: "IDTRAM", Value: s.GetValue()}];
    let arrRes;
    arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
    if(arrRes.length > 0){
        IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
        IDEMPRESA.SetText(arrRes[0].NOMBRE);
    }else{
        IDEMPRESA.SetValue(0);
        IDEMPRESA.SetText("Empresa no encontrada");
    }
}catch(err){
    alert(err);
}

// idestadotramite oninit
try{
    /*
        Si IDTRAMITE NO es nulo, se trata de actualizacion
    */
    if(IDTRAMITE.GetValue() != null){
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');  

        claseTramiteExpandirBtn.style.display = 'none';
        EntidadExpandirBtn.style.display = 'none';
        TipoTramiteExpandirBtn.style.display = 'none';
        TramModifExpandirBtn.style.display = 'none';
    }
}catch(err){
    alert(err);
}

//idestadotramite validation
try {
    /*
        Si IDTRAMITE NO es nulo, se trata de actualizacion
    */
    if(IDTRAMITE.GetValue() != null){
        let ID = IDTRAMITE.GetValue();
        let items = [{ Key: "IDTRAMITE", Value: ID }];
        let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarEnvio", items, false);

        if (arrValidarEnvio.length > 0) {
            if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                alert(arrValidarEnvio[0].RESPUESTA);
                e.isValid = false;
            } else {
                e.isValid = true;
            }
        }
    }
} catch (err) {
  alert(err.message);
}