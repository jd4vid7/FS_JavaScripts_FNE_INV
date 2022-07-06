try {
    e.isValid = true;
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    /*
        Si hay un inmueble seleccionado, su valor de Area es requerido
    */
    let vSeleccionado = document.getElementById("grdGeneralEdicionMultiple_SELECCIONADO_" + Nro + "_S").value;
    if (vSeleccionado == "C" && s.GetText() == "") {
      e.isValid = false;
      s.Focus();
      MostrarMensaje('ADVERTENCIA$|$ Valor área de uso requerido.');
    }
} catch (err) {
    alert(err);
}