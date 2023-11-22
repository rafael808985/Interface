//exemplo 1
var tabela = document.getElementById("table");
var atributosTabela = tabela.attributes; // interface Node/Element
for (var i = 0; i < atributosTabela.length; i++) {
  // interface HTMLTableElement: atributo border
  if (atributosTabela[i].nodeName.toLowerCase() == "border")
    tabela.border = "1";
}
//interface HTMLTableElement: atributo summary
table.summary = "nota: aumento de borda";


//exemplo 2
var paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
