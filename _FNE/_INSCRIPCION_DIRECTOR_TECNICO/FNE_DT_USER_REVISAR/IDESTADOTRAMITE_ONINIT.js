try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I], "height", "28.8px");
        
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