try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro)
    */
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_ExpandirBtn = document.getElementById("IDENTIDAD_B-1");
        const FECHARADICADOENTRADA_ExpandirBtn = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");
        cambiarEstiloCtrls([IDTIPOTRAMITE_ExpandirBtn, IDENTIDAD_ExpandirBtn, FECHARADICADOENTRADA_ExpandirBtn, IDCLASETRAMITE_ExpandirBtn], "display", "none");

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");
        
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_NROCUOTA_I = document.getElementById("CALC_NROCUOTA_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_NROCUOTA_I], "height", "28.8px");
    }
}catch (err){
    alert(err);
}


//v0
try {
    /*
        Si IDTRAMITE no es nulo (es decir es actualización de registro)
    */
    if(IDTRAMITE.GetValue() != null){
        const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_ExpandirBtn = document.getElementById("IDENTIDAD_B-1");
        const FECHARADICADOENTRADA_ExpandirBtn = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");

        ( IDTIPOTRAMITE_ExpandirBtn != null && (IDTIPOTRAMITE_ExpandirBtn.style.display = "none") );
        ( IDENTIDAD_ExpandirBtn != null && (IDENTIDAD_ExpandirBtn.style.display = "none") );
        ( FECHARADICADOENTRADA_ExpandirBtn != null && (FECHARADICADOENTRADA_ExpandirBtn.style.display = "none") );
        ( IDCLASETRAMITE_ExpandirBtn != null && (IDCLASETRAMITE_ExpandirBtn.style.display = "none") );

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
        RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL.style.color = 'black';
        RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
        RADENTRADA_CTRL_PADRE.style.color = 'black';
    }
}catch (err){
    alert(err.message);
}