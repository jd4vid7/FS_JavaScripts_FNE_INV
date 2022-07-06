try{
    /* Si IDTRAMITE NO nulo, es actualización de Registro */
    if(IDTRAMITE.GetValue() !== null){
        /*
            Estados Asignados que no preguntan por usuario
            111, 112 => En Requerimiento Firmante,
            19, 21 => Acto Administrativo
        */
        if(s.GetValue() == 111 || s.GetValue() == 112 || s.GetValue() == 19 || s.GetValue() == 21){
            USUARIOACTUAL.SetValue(null);
            OcultarFila("SEC_AV", "USUARIOACTUAL", true);
            OcultarFila("SEC_AV", "USUARIOPROXIMO", true);
        }else {
            const USUARIOACTUAL_CTRL = document.getElementById("USUARIOACTUAL_I");
            OcultarFila("SEC_AV", "USUARIOACTUAL", false);
            RecargarLista("USUARIOACTUAL", s.GetValue());
            /*
            Estados Asignados que permiten doble asignación de usuario
            4, 8 => En Verificación Técnica,
            por tanto, label de USUARIOACTUAL = Asignar Técnico
                (label de USUARIOPROXIMO está quemado en Asignar Jurídico)
            */
            if(s.GetValue() == 4 || s.GetValue() == 8){
                OcultarFila("SEC_AV", "USUARIOPROXIMO", false);
                USUARIOACTUAL_CTRL.labels[0].textContent = 'Asignar Técnico';
            }
            /* Si no permite doble asignación, se asigna solo Juridico, por tanto, label de USUARIOACTUAL = Asignar Jurídico */
            else{
                OcultarFila("SEC_AV", "USUARIOPROXIMO", true);
                USUARIOACTUAL_CTRL.labels[0].textContent = 'Asignar Jurídico';
            }
        }
    }
}catch(err){
    alert(err);
}




//LEGACY
try{
    if(s.GetValue() == 111 || s.GetValue() == 112 || s.GetValue() == 19 || s.GetValue() == 21){
      USUARIOACTUAL.SetValue(null);
      OcultarFila("SEC_AV", "USUARIOACTUAL", true);
      OcultarFila("SEC_AV", "USUARIOPROXIMO", true);
    }else {
      const USUARIOACTUAL_CTRL = document.getElementById("USUARIOACTUAL_I");
      console.log(USUARIOACTUAL_CTRL.labels);
  
      OcultarFila("SEC_AV", "USUARIOACTUAL", false);
      RecargarLista("USUARIOACTUAL", s.GetValue());
      if(s.GetValue() == 4 || s.GetValue() == 8){
        OcultarFila("SEC_AV", "USUARIOPROXIMO", false);
        USUARIOACTUAL_CTRL.labels[0].textContent = 'Asignar Técnico';
      }else{
        OcultarFila("SEC_AV", "USUARIOPROXIMO", true);
        USUARIOACTUAL_CTRL.labels[0].textContent = 'Asignar Jurídico';
      }
    }
  }catch(err){
    alert(err);
  }