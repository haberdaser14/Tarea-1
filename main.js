calcular_salario_mensual.onclick = function() {
    const calcular_salario_anual = document.querySelector("#salario_anual").value;
    let calcular_salario_mensual = calcular_salario_anual / 12;
    document.querySelector("#salario_mensual").value = calcular_salario_mensual;
    return false;
  }