function actualizarNumerosLinea() {
    var textarea = document.getElementById("consoleInput");
    var numerosLinea = document.getElementById("lineNumber");

    var lineas = textarea.value.split('\n');
    var numerosLineaHTML = '';

    for (var i = 1; i <= lineas.length; i++) {
        numerosLineaHTML += i + '<br>';
    }

    numerosLinea.innerHTML = numerosLineaHTML;
}

document.addEventListener('DOMContentLoaded', function() {
  var codigoTextarea = document.getElementById('consoleInput');
  var codigoResaltadoDiv = document.getElementById('codigo-resaltado');

  codigoTextarea.addEventListener('input', function() {
    resaltarSintaxis();
  });

  function resaltarSintaxis() {
    var codigo = codigoTextarea.value;

    var palabrasClave = ['valid', 'invalid', 'under', 'go', 'functie', 'number', 'text', 'binary', 'display','repeat'];
    var simbolosAgrupacion = ['\\(', '\\)', '\\[', '\\]', '\\{', '\\}'];

    var regexPalabrasClave = new RegExp('\\b(' + palabrasClave.join('|') + ')\\b', 'g');
    var regexSimbolosAgrupacion = new RegExp('(' + simbolosAgrupacion.join('|') + ')', 'g');
    codigo = codigo.replace(regexPalabrasClave, '<span class="keyword">$&</span>');

    codigo = codigo.replace(regexSimbolosAgrupacion, '<span class="symbol">$&</span>');
    codigoResaltadoDiv.innerHTML = codigo;
  }
});

  
  