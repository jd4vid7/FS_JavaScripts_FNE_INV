try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const FECHARADICADOENTRADA_EXTENDBTN = document.getElementById("FECHARADICADOENTRADA_B-1");
        const IDENTIDAD_EXTENDBTN = document.getElementById("IDENTIDAD_B-1");
        const IDTIPOTRAMITE_EXTENDBTN = document.getElementById("IDTIPOTRAMITE_B-1");
        const IDCLASETRAMITE_EXTENDBTN = document.getElementById("IDCLASETRAMITE_B-1");
        cambiarEstiloCtrls([FECHARADICADOENTRADA_EXTENDBTN, IDENTIDAD_EXTENDBTN, IDTIPOTRAMITE_EXTENDBTN, IDCLASETRAMITE_EXTENDBTN], "display", "none");

        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

    }
}catch(err){
    alert(err);
}