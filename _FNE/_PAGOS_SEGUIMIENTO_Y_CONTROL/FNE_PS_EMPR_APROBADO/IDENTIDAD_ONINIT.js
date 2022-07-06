//v1
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
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const IDTIPOTRAMITE_EXPANDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXPANDBTN = document.getElementById("IDENTIDAD_B-1");
        const FECHARADICADOENTRADA_EXPANDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_EXPANDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, IDTIPOTRAMITE_EXPANDBTN, IDENTIDAD_EXPANDBTN, FECHARADICADOENTRADA_EXPANDBTN, IDCLASETRAMITE_EXPANDBTN], "display", "none");

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        s.SetEnabled(false);
        cambiarEstiloCtrls([RADENTRADA_CTRL, IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL, IDENTIDAD_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
        
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
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDTIPOTRAMITE_EXPANDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDENTIDAD_EXPANDBTN = document.getElementById("IDENTIDAD_B-1");
        const FECHARADICADOENTRADA_EXPANDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDCLASETRAMITE_EXPANDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        cambiarEstiloCtrls([IDTIPOTRAMITE_EXPANDBTN, IDENTIDAD_EXPANDBTN, FECHARADICADOENTRADA_EXPANDBTN, IDCLASETRAMITE_EXPANDBTN], "display", "none");

        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        s.SetEnabled(false);
        cambiarEstiloCtrls([RADENTRADA_CTRL, IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL, IDENTIDAD_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
        
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_NROCUOTA_I = document.getElementById("CALC_NROCUOTA_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_NROCUOTA_I], "height", "28.8px");
    }
}catch (err){
    alert(err);
}