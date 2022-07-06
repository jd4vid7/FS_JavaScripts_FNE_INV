try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');
        const CALC_NOMBREEMPRESA_I = document.getElementById('CALC_NOMBREEMPRESA_I');
        const CALC_NROCUOTA_I = document.getElementById('CALC_NROCUOTA_I');
        const CALC_TOT_REQ_I = document.getElementById('CALC_TOT_REQ_I');
        const RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I');
        const PADRE_RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I').parentElement;
        cambiarEstiloCtrls([fechaRadExpandirBtn, claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, TramModifExpandirBtn], "display", "none");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_NROCUOTA_I, CALC_TOT_REQ_I], "height", "28.8px");
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}