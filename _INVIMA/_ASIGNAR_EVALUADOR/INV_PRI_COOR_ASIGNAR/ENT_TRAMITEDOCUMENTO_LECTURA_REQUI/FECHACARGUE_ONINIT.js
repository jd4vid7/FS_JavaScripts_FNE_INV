try{
    if(IDTRAMITEDOCUMENTO.GetValue() != null){
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        ( ACTUALIZAR_BTN != null && (ACTUALIZAR_BTN.style.display = "none") );

        const FECHACARGUE_EXPANDBTN = document.getElementById("FECHACARGUE_B-1");
        ( FECHACARGUE_EXPANDBTN != null && (FECHACARGUE_EXPANDBTN.style.display = "none") );
        s.SetEnabled(false);

        const FECHACARGUE_CTRL = document.getElementById("FECHACARGUE_I");
        const PADRE_FECHACARGUE_CTRL = document.getElementById("FECHACARGUE_I").parentElement;
        ( FECHACARGUE_CTRL != null && (FECHACARGUE_CTRL.style.color = "black") );
        ( FECHACARGUE_CTRL != null && (FECHACARGUE_CTRL.style.backgroundColor = "#dcdcdc") );
        ( PADRE_FECHACARGUE_CTRL != null && (PADRE_FECHACARGUE_CTRL.style.backgroundColor = "#dcdcdc") );
    }
}catch(err){
    alert(err);
}