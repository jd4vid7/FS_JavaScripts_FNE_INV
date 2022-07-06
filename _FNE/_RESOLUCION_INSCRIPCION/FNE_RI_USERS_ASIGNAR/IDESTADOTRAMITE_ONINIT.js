try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    cambiarEstiloCtrls([fechaRadExpandirBtn, claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn], "display", "none");

    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
    cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
    cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

    const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
    const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
    cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I], "height", "28.8px");
}catch(err){
    alert(err);
}