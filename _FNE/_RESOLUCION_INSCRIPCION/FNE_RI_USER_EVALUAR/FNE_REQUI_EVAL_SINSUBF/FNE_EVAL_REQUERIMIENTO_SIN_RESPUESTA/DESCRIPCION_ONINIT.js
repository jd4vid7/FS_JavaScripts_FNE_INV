try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
    if(IDTRAMITEREQUERIMIENTO.GetValue() === null){
        const IDESTADOTRAMITE_EXPANDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIO_EXPANDBTN = document.getElementById("USUARIOCREACIONREQUERIMIENTO_B-1");
        cambiarEstiloCtrls([IDTRAMITE_EXPANDBTN, IDESTADOTRAMITE_EXPANDBTN, USUARIO_EXPANDBTN], "display", "none");
    }else{
        cambiarEstiloCtrls([IDTRAMITE_EXPANDBTN], "display", "none");
    }
}catch(err){
    alert(err);
}