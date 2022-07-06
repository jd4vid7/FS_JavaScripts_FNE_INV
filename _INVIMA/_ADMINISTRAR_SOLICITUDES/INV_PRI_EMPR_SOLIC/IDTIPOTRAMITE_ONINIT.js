try{
    /*
        Si IDTRAMITE es nulo, se trata de inserción de registro
    */
    if (IDTRAMITE.GetValue() == null){
        const IDENTIDAD_ExtendBtn = document.getElementById("IDENTIDAD_B-1");
        const IDCLASETRAMITE_ExtendBtn = document.getElementById("IDCLASETRAMITE_B-1");
        const IDESTADOTRAMITE_ExtendBtn = document.getElementById("IDESTADOTRAMITE_B-1");
        const USUARIOACTUAL_ExtendBtn = document.getElementById("USUARIOACTUAL_B-1");

        IDENTIDAD_ExtendBtn.style.display = "none";
        IDCLASETRAMITE_ExtendBtn.style.display = "none";
        IDESTADOTRAMITE_ExtendBtn.style.display = "none";
        USUARIOACTUAL_ExtendBtn.style.display = "none";

        /*
            Asignar valor de estado trámite según Tipo Trámite seleccionado.
                -IDs TIPO TRÁMITE según Nombre: {
                    Fabricación de Derivados No Psicoactivos de Cannabis: 6,
                    Fabricación de Derivados de Cannabis: 4
                }
                -IDs ESTADO TRÁMITE según relación con Tipo Trámite: {
                    Creado (Asociado A F.D.No Psicoactivos.Cann.): 6
                    Creado (Asociado A F.D.Cann.): 1
                }
        */
        if(s.GetValue() == 6){
            IDESTADOTRAMITE.SetValue(6);
            IDESTADOTRAMITE.SetText("Creado");
        }else if (s.GetValue() == 4){
            IDESTADOTRAMITE.SetValue(1);
            IDESTADOTRAMITE.SetText("Creado");
        }
        alert(IDESTADOTRAMITE.GetValue());

        /*
            Comando para obtener Valor(ID) y Nombre de Usuario Actual para asociarlo a la inserción del registro
        */
        let items = [{}];
        let arrRes = InvocarComando("INV_CMD_UsuarioAct_Valor_Texto", items, false);

        if (arrRes.length > 0) {
            USUARIOACTUAL.SetValue(arrRes[0].ID);
            USUARIOACTUAL.SetText(arrRes[0].NOMBRE);
        }else{
            USUARIOACTUAL.SetValue(null);
            USUARIOACTUAL.SetText("");
            e.isValid = false;
            alert("ERROR: Usuario no se ha podido identificar.");
        }
    }
}catch(err){
    alert(err);
}