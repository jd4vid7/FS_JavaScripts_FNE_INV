try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario (117=>Rev. Profesional, 119=>Requer. Abogado, 123=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 117 || vEstadoAsignado == 119 || vEstadoAsignado == 123){
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
                Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario (118=>Req. Prof. Filtro, 122=>Aprob. Prof. Filtro, 120=>Requer. Coord, 124=> Aprob. Coord.)
            */
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
}catch (err){
    alert(err);
}