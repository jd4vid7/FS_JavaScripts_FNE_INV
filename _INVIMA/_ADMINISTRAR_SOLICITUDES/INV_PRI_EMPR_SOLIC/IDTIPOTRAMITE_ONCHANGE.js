try{
    /*
    Si IDTRAMITE es nulo, se trata de inserción de registro
    */
    if (IDTRAMITE.GetValue() == null){
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
            alert("6, No Psico");
        }else if (s.GetValue() == 4){
            IDESTADOTRAMITE.SetValue(1);
            IDESTADOTRAMITE.SetText("Creado");
            alert("1, Si Psico");
        }
    }
}catch(err){
    alert(err);
}