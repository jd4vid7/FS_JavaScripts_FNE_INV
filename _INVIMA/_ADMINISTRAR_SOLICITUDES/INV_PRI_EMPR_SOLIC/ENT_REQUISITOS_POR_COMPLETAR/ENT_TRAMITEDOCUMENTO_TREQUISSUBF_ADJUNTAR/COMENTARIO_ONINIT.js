try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDTRAMITEREQUISITO_EXPANDBTN = document.getElementById("IDTRAMITEREQUISITO_B-1");
    cambiarEstiloCtrls([IDTRAMITEREQUISITO_EXPANDBTN], "display", "none");

    /*
        Si ID registro es nulo, es inserción de registro. Caso contrario, es actualización.
    */
    if(IDTRAMITEDOCUMENTO.GetValue() === null){
        const USUARIOCARGUE_EXPANDBTN = document.getElementById('USUARIOCARGUE_B-1');
        const CICLO_EXPANDBTN = document.getElementById("CICLO_B-1");
        cambiarEstiloCtrls([USUARIOCARGUE_EXPANDBTN, CICLO_EXPANDBTN], "display", "none");

        const REQUI_PLACEHOLDER_I = document.getElementById("REQUI_PLACEHOLDER_I");
        const items = [{ Key: "IDTR", Value: IDTRAMITEREQUISITO.GetValue() }];
        let arrRes = InvocarComando("ENT_REQUISITO_DESCRIPCION_DESDEDOCS", items, false);
        if(arrRes.length > 0){
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = arrRes[0].DESCRIPCION) );
        }else{
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = "Descripción No Encontrada") );
        }
    }else{
        /* Ajustar altura de Calculados correctamente */
        const CALC_USUARIOCARGUE_I = document.getElementById("CALC_USUARIOCARGUE_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([CALC_USUARIOCARGUE_I, CALC_CICLO_I], "height", "28.8px");
    }
}catch(err){
    alert(err);
}




//LEGACY
try{
    const USUARIOCARGUE_ExpandirBtn = document.getElementById('USUARIOCARGUE_B-1');
    const IDTRAMITEREQUISITO_EXTENDBTN = document.getElementById("IDTRAMITEREQUISITO_B-1");
    ( USUARIOCARGUE_ExpandirBtn != null && (USUARIOCARGUE_ExpandirBtn.style.display = 'none') );
    ( IDTRAMITEREQUISITO_EXTENDBTN != null && (IDTRAMITEREQUISITO_EXTENDBTN.style.display = "none") );
    /* Si ID registro es nulo, es inserción de registro */
    if(IDTRAMITEDOCUMENTO.GetValue() == null){
        const REQUI_PLACEHOLDER_I = document.getElementById("REQUI_PLACEHOLDER_I");
        

        const items = [{ Key: "IDTR", Value: IDTRAMITEREQUISITO.GetValue() }];
        let arrRes = InvocarComando("ENT_REQUISITO_DESCRIPCION_DESDEDOCS", items, false);
        if(arrRes.length > 0){
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = arrRes[0].DESCRIPCION) );
        }else{
            ( REQUI_PLACEHOLDER_I != null && (REQUI_PLACEHOLDER_I.innerHTML = "Descripción No Encontrada") );
        }
    }
}catch(err){
    alert(err);
}