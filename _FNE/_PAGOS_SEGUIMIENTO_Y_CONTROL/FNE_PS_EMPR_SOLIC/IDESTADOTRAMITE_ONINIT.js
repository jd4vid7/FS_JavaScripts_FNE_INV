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
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');
        const CALC_ESTADOTRAMITE_I = document.getElementById('CALC_ESTADOTRAMITE_I');
        const CALC_NROCUOTA_I = document.getElementById('CALC_NROCUOTA_I');
        const CALC_NOMBREEMPRESA_I = document.getElementById('CALC_NOMBREEMPRESA_I');

        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, TramModifExpandirBtn], "display", "none");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NROCUOTA_I, CALC_NOMBREEMPRESA_I], "height", "28.8px");
    }
}catch(err){
    alert(err);
}