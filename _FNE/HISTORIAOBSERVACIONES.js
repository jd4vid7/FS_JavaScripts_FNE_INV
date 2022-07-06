//ciclo ONINIT

try {
    s.SetEnabled(false);
    const IDTRAMITE_ExpandirBtn = document.getElementById('IDTRAMITE_B-1');
    IDTRAMITE_ExpandirBtn.style.display = 'none';

    if(IDTRAMITEOBSERVACION.GetValue() == null){
        const USUARIOGENERA_ExpandirBtn = document.getElementById('USUARIOGENERA_B-1');
        const IDESTADOTRAMITE_ExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');

        USUARIOGENERA_ExpandirBtn.style.display = 'none';
        IDESTADOTRAMITE_ExpandirBtn.style.display = 'none';

        let items = [{ Key: "Val_IdTramite", Value: IDTRAMITE.GetValue() }];
        let arrRes = InvocarComando("ENT_CMD_TRAMITECICLO_DESDEHIJO", items, false);
        CICLO.SetValue(arrRes[0].RESPUESTA);
    }else{
        const FECHAOBSERVACION_ExpandirBtn = document.getElementById('FECHAOBSERVACION_B-1');
        const ACTUALIZAAR_BTN = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI1_');
        
        FECHAOBSERVACION_ExpandirBtn.style.display = 'none';
        ACTUALIZAAR_BTN.style.display = 'none';
    }
} catch (error) {
    console.log(error);
}