try{
    if(IDPLANFABRICACION.GetValue() != null){
        const POTENCIALPROVEEDOR_CTRL = document.getElementById("POTENCIALPROVEEDOR_I");
        const PADRE_POTENCIALPROVEEDOR_CTRL = document.getElementById("POTENCIALPROVEEDOR_I").parentElement;
        if(s.GetValue() == true){
            POTENCIALPROVEEDOR.SetValue("No Aplica");
            POTENCIALPROVEEDOR.SetEnabled(false);
            ( POTENCIALPROVEEDOR_CTRL != null && (POTENCIALPROVEEDOR_CTRL.style.color = "black") );
            ( POTENCIALPROVEEDOR_CTRL != null && (POTENCIALPROVEEDOR_CTRL.style.backgroundColor = "#dcdcdc") );

            ( PADRE_POTENCIALPROVEEDOR_CTRL != null && (PADRE_POTENCIALPROVEEDOR_CTRL.style.backgroundColor = "#dcdcdc") );
        }else if(s.GetValue() == false){
            POTENCIALPROVEEDOR.SetValue("");
            POTENCIALPROVEEDOR.SetEnabled(true);
            ( POTENCIALPROVEEDOR_CTRL != null && (POTENCIALPROVEEDOR_CTRL.style.color = "black") );
            ( POTENCIALPROVEEDOR_CTRL != null && (POTENCIALPROVEEDOR_CTRL.style.backgroundColor = "#ffffff") );

            ( PADRE_POTENCIALPROVEEDOR_CTRL != null && (PADRE_POTENCIALPROVEEDOR_CTRL.style.backgroundColor = "#ffffff") );
            ( PADRE_POTENCIALPROVEEDOR_CTRL != null && (PADRE_POTENCIALPROVEEDOR_CTRL.style.borderColor = "#f1f1f1") );
        }
    }
}catch(e){
    console.log(e);
}