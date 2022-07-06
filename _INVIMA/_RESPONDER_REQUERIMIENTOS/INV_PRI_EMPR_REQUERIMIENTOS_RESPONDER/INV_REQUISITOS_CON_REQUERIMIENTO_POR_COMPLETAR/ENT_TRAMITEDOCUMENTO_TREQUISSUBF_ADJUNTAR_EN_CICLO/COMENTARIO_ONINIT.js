/* Formulario que permite añadir documentos en ciclo actual, y sólamente editar y actualizar docs del mismo ciclo */


try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITEREQUISITO_EXPANDBTN = document.getElementById("IDTRAMITEREQUISITO_B-1");
    cambiarEstiloCtrls([IDTRAMITEREQUISITO_EXPANDBTN], "display", "none");

    /*
        Si ID registro es nulo, es inserción de registro. Caso contrario, es actualización.
    */
    if(IDTRAMITEDOCUMENTO.GetValue() === null){
        const USUARIOCARGUE_EXPANDBTN = document.getElementById('USUARIOCARGUE_B-1');
        const CICLO_EXPANDBTN = document.getElementById("CICLO_B-1");
        cambiarEstiloCtrls([USUARIOCARGUE_EXPANDBTN, CICLO_EXPANDBTN], "display", "none");

        const REQUI_PLACEHOLDER_I = document.getElementById("REQUI_PLACEHOLDER_I");
        const items = [{ Key: "IDTR", Value: IDTRAMITEREQUISITO.GetValue() }];
        let arrRes = InvocarComando("ENT_REQUISITO_DESCRIPCION_DESDEDOCS", items, false);
        if(arrRes.length > 0){
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = arrRes[0].DESCRIPCION) );
        }else{
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = "Descripción No Encontrada") );
        }
    }else{
        /* Ajustar altura de Calculados correctamente */
        const CALC_USUARIOCARGUE_I = document.getElementById("CALC_USUARIOCARGUE_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([CALC_USUARIOCARGUE_I, CALC_CICLO_I], "height", "28.8px");

        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
        const ELIMINAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI3_");
        const COMENTARIO_CTRL = document.getElementById("COMENTARIO_I");
        /* Función En caso que se bloqueen ediciones */
        const bloquearEdiciones = () => {
            cambiarEstiloCtrls([ACTUALIZAR_BTN, ELIMINAR_BTN], "display", "none");
            s.SetEnabled(false);
            cambiarEstiloCtrls([COMENTARIO_CTRL], "color", "black");
            cambiarEstiloCtrls([COMENTARIO_CTRL], "backgroundColor", "#dcdcdc");
            if(IDDOCUMENTOFS_HFValorID_.Get("ID") != ""){
                IDDOCUMENTOFS_txtEditar_.SetVisible(false);
                IDDOCUMENTOFS_txtEditarEscanear_.SetVisible(false);
            }else{
                IDDOCUMENTOFS_txtEscanear_.SetVisible(false);
                IDDOCUMENTOFS_txtNuevo_.SetVisible(false);
            }
            const blankSpace = document.getElementById("IDDOCUMENTOFS_lnkDescripcion__ET").parentElement.previousElementSibling;
            cambiarEstiloCtrls([blankSpace], "display", "none");
        }

        /* verificación de Ciclo actual del Trámite. Si Ciclo Registro es menor a Ciclo Tramite, no permitir ediciones. */
        const items2 = [{Key: "IDTRAMITEREQUISITO", Value: IDTRAMITEREQUISITO.GetValue()}];
        let arrRtaCicloTramite = InvocarComando("INV_CMD_TRAMITECICLO_DESDEREQUISITO", items2, false) ;
        if(arrRtaCicloTramite.length > 0){
            let cicloTramite = parseInt(arrRtaCicloTramite[0].RESPUESTA);
            let cicloDocumento = ( CALC_CICLO_I != null ? parseInt(CALC_CICLO_I.innerHTML) : 999 );
            if(cicloDocumento < cicloTramite){
                bloquearEdiciones();
            }
        }else{
            alert("Algo ha salido mal.");
            bloquearEdiciones();
        }
    }
}catch(err){
    alert(err);
}