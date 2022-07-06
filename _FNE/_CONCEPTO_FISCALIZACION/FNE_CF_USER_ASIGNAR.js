//Prof. Filtro (nombre USER refiere a que SI hay filtro de USUARIOACTUAL = $UserId$ en el formulario) asigna Profesional

try{
    /*
        Ocultamiento de Botones Expandir de Listas Externas
    */
    const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');

    fechaRadExpandirBtn.style.display = 'none';
    claseTramiteExpandirBtn.style.display = 'none';
    EntidadExpandirBtn.style.display = 'none';
    TipoTramiteExpandirBtn.style.display = 'none';
    TramModifExpandirBtn.style.display = 'none';
}catch(err){
    alert(err);
}