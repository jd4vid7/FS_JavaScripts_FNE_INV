//TEXTO RTA ONINIT

try{
    /*
        Codigo Inicializacion en Vista Listar para mostrar Advertencia
    */
    if(IDTRAMITEREQUERIMIENTO.GetValue() == null){
        MostrarMensaje('ADVERTENCIA$|$ Texto de Respuesta es requerido para avanzar trámite. Opcionalmente es posible adjuntar Documentos a cada requerimiento mediante el subformulario \'Adjuntar Documentos\'');
    }
    /*
        Actualizacion de registro:
        Si Ciclo del Requerimiento es menor al Ciclo en que se asignó el requerimiento más proximo (CICLO_TRAMITE - 1),
        Registro de Respuesta es historico, y por lo tanto no permitir actualizacion
    */
    if(IDTRAMITEREQUERIMIENTO.GetValue() != null){
        /*
        Comando para obtener CICLO actual del tramite
        */
        const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
        IDTRAMITE_ExpandirBtn.style.display = "none";
        let items = [{Key: "Val_IdTramite", Value: IDTRAMITE.GetValue()}];
        let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
        let Rta = null;
        if(arrRes.length > 0){
            Rta = arrRes[0].RESPUESTA;
        }
        if( Rta == null || ( Rta != null && parseInt(CICLO.GetValue()) < (parseInt(Rta)-1) ) ){
            const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
            (ACTUALIZAR_BTN != null && (ACTUALIZAR_BTN.style.display = "none") );

            s.SetEnabled(false);
            e.isValid = false;
        }
    }
}catch(err){
    alert(err);
}