try{
    if(IDTRAMITE.GetValue() === null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const EmpresaExpandirBtn = document.getElementById('IDEMPRESA_B-1');
        const EstadoExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
        const UsuarioExpandirBtn = document.getElementById('USUARIOACTUAL_B-1');
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, EmpresaExpandirBtn, EstadoExpandirBtn, UsuarioExpandirBtn], "display", "none");

        IDESTADOTRAMITE.SetValue(114);
        IDESTADOTRAMITE.SetText("Creado");

        MostrarMensaje('ADVERTENCIA$|$ Para que una cuota esté disponible, dirigirse al menú FNE->Pagos Seguimiento->Listado Cuotas, y adjuntar documento(s) de Referencia de Pago. Adicionalmente, sólo se habilita la creación de un (1) registro por cuota.');

        const items = [{Key: "IDTRAM", Value: s.GetValue()}];
        let arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
        if(arrRes.length > 0){
            IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
            IDEMPRESA.SetText(arrRes[0].NOMBRE);
        }else{
            alert("No se ha podido conectar con el servidor.");
            ( e != null && (e.isValid = false) );
        }

        RecargarLista(IDTRAMITECUOTA, s.GetValue());
    }
}catch(err){
    alert(err);
}