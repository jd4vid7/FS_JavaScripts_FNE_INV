try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        let vEstadoAsignado = parseInt(s.GetValue());
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario (129=>Rev. Profesional, 131=>Requer. Abogado, 135=>Aprob. Abogado)
        */
        if(vEstadoAsignado === 129 || vEstadoAsignado === 131 || vEstadoAsignado === 135){
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
               Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario (130=>Req. Prof. Filtro, 134=>Aprob. Prof. Filtro, 132=>Requer. Coord, 136=> Aprob. Coord.)
            */
            if(arrRes.length > 0){
                let rta = parseInt(arrRes[0].IDESTADOTRAMITE);
                if(rta === 130 || rta === 134 || rta === 132 || rta === 136){
                    OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                    RecargarLista(USUARIOACTUAL, s.GetValue(), false);
                }
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