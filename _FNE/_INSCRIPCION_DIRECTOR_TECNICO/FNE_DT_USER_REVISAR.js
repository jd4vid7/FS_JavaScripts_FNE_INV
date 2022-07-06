//oninit IDESTADOTRAMITE

try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() != null){
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        
        IDENTIDAD_ExpandirBtn.style.display = 'none';
        TIPOTRAMITE_ExpandirBtn.style.display = 'none';
        CLASETRAMITE_ExpandirBtn.style.display = 'none';
        FECHARADENTR_ExpandirBtn.style.display = 'none';

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
        RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL.style.color = 'black';
        RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL_PADRE.style.color = 'black';

        /*
        Si trámite NO está en estados de notificación, ocultar Texto Notificación (90=> Req. Prof. Filtro, 91=> Req. Abog., 92=> Req. Coor.)
        */
        if(s.GetValue() == 90 || s.GetValue() == 91 || s.GetValue() == 92){
            OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
        }

        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}



//VALIDATION IDESTADOTRAMITE
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro), ni Estado Trámite es nulo
    */
    if(IDTRAMITE.GetValue() != null && s.GetValue() != null){
        let vEstadoAsignado = s.GetValue();
            
        /*
            Estados trámite que requieren validación (89=>Rev. Profesional)
        */
        if(vEstadoAsignado == 89){
            let ID = IDTRAMITE.GetValue();
            const items = [
                { Key: "IDTRAMITE", Value: ID },
                { Key: "VALORIDESTADOASIGNADO", Value: vEstadoAsignado }
            ];
            let arrValidarEnvio = InvocarComando("ENT_CMD_ValidarMovimientoFlujo", items, false);
            if (arrValidarEnvio.length > 0) {
                if (arrValidarEnvio[0].RESPUESTA != "COMPLETA") {
                    OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                    let msg = arrValidarEnvio[0].RESPUESTA;
                    alert(msg);
                    e.isValid = false;
                    return;
                } else {
                    e.isValid = true;
                }
            }
        }
        
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
                /*
                    Si el evento Validation no fue llamado desde el botón Actualizar, Recargar Lista
                */
                ( !event.path.includes(ACTUALIZAR_BTN) && RecargarLista(USUARIOACTUAL, s.GetValue(), false) );
            }else{
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
            }
        }else{
            OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        }
    }
}catch (err){
    alert(err.message);
}