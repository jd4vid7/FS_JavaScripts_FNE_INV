try{
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    /*
        Ocultar botones extender de Lista Externa de Modalidades
    */
    const ModalidExtendBtn = document.getElementById("grdGeneralEdicionMultiple_IDMODALIDAD_" + Nro + "_B-1");
    ( ModalidExtendBtn != null && (ModalidExtendBtn.style.display = "none") );

    /*
        Pintar controles de Solo Lectura
    */
    const IDMODALIDAD_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDMODALIDAD_" + Nro + "_I");
    const PADRE_IDMODALIDAD_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDMODALIDAD_" + Nro + "_I").parentElement;

    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEMODALIDAD_" + Nro + "_I");
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEMODALIDAD_" + Nro + "_I").parentElement;

    ( IDMODALIDAD_CTRL != null && (IDMODALIDAD_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_IDMODALIDAD_CTRL != null && (PADRE_IDMODALIDAD_CTRL.style.backgroundColor = "#dcdcdc") );

    ( ID_CTRL != null && (ID_CTRL.style.color = "black") );
    ( ID_CTRL != null && (ID_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_ID_CTRL != null && (PADRE_ID_CTRL.style.backgroundColor = "#dcdcdc") );
}catch(err){
    alert(err);
}