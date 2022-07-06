try{
    if(IDTRAMITE.GetValue() === null){
        const items = [{Key: "IDTRAM", Value: s.GetValue()}];
        let arrRes = InvocarComando("FNE_CMD_IDEMPRESA_DESDE_TRAMITE_VAL", items, false);
        if(arrRes.length > 0){
            IDEMPRESA.SetValue(arrRes[0].IDEMPRESA);
            IDEMPRESA.SetText(arrRes[0].NOMBRE);
        }else{
            IDEMPRESA.SetValue(null);
            IDEMPRESA.SetText("");
            alert("No se ha podido conectar con el servidor.");
            ( e != null && (e.isValid = false) );
        }

        RecargarLista(IDTRAMITECUOTA, s.GetValue());
    }
}catch(err){
    alert(err);
}