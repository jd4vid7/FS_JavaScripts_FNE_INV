//v1
if (IDTRAMITE.GetValue() != null) {
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDEMPRESA_ExpandirBtn = document.getElementById("IDEMPRESA_B-1");
    const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");
    const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");
    const CALC_LICENCIAAMPLIAR = document.getElementById("CALC_TRAMITEMODIFICADO_ACTUALIZAR_I");
    cambiarEstiloCtrls([IDEMPRESA_ExpandirBtn, IDCLASETRAMITE_ExpandirBtn, IDTIPOTRAMITE_ExpandirBtn], "display", "none");
    cambiarEstiloCtrls([CALC_LICENCIAAMPLIAR], "height", "28.8px");

    RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
}

//v0
if (IDTRAMITE.GetValue() != null) {
    const IDEMPRESA_ExpandirBtn = document.getElementById("IDEMPRESA_B-1");
    const IDCLASETRAMITE_ExpandirBtn = document.getElementById("IDCLASETRAMITE_B-1");
    const IDTIPOTRAMITE_ExpandirBtn = document.getElementById("IDTIPOTRAMITE_B-1");

    IDEMPRESA_ExpandirBtn.style.display = "none";
    IDCLASETRAMITE_ExpandirBtn.style.display = "none";
    IDTIPOTRAMITE_ExpandirBtn.style.display = "none";

    RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
}