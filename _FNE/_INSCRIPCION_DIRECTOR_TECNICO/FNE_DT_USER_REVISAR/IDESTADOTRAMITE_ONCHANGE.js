try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        let vEstadoAsignado = s.GetValue();
        /*
        Estados trámite asignados que puede que permitan Asignación de Usuario (89=>Rev. Profesional, 91=>Requer. Abogado, 95=>Aprob. Abogado)
        */
        if(vEstadoAsignado == 89 || vEstadoAsignado == 91 || vEstadoAsignado == 95){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
                Si Array de Comando válido y Estados trámite actuales son autorizados para Asignar Usuario (90=>Req. Prof. Filtro, 94=>Aprob. Prof. Filtro, 92=>Requer. Coord, 96=> Aprob. Coord.)
            */
            if( arrRes.length > 0 && (arrRes[0].IDESTADOTRAMITE == 90 || arrRes[0].IDESTADOTRAMITE == 94 || arrRes[0].IDESTADOTRAMITE == 92 || arrRes[0].IDESTADOTRAMITE == 96) ){
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