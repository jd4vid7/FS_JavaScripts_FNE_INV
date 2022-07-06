try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn], "display", "none");

        const CALC_ESTADOTRAMITE_I = document.getElementById('CALC_ESTADOTRAMITE_I');
        const CALC_NOMBREEMPRESA_I = document.getElementById('CALC_NOMBREEMPRESA_I');
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I], "height", "28.8px");

        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null);
    }
}catch(err){
    alert(err);
}