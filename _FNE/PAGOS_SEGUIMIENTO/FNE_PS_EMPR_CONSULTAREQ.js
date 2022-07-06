//IDESTADOTRAMITE VALIDATION
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
        let ID = IDTRAMITE.GetValue();
        const items = [
            { Key: "IDTRAMITE", Value: ID },
            { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
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
        }
    }
}catch (err){
    alert(err.message);
}

//IDESTADOTRAMITE ONINIT
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