var tblServicos = $('.tblServicos').DataTable({
  "searching": false,
  columns: [
  {data: 'atividade'},
  {data: 'quantidade'},
  {data: 'opcoes'}],
  "language": { "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json" }
});

$("#btnAdicionarServico").click(function () {
  var txtServico = $("#selectAdicionarServicos option:selected").text();
  var txtServicoVal = $("#selectAdicionarServicos option:selected").val();
  if (txtServico == "Selecione") return;
  tblServicos.row.add({
    "atividade": txtServico,
    "quantidade": "<input type='text' class='form-control'>",
    "opcoes": "<div class='btn-group'>" +
      "<button title='Excluir' class='btn btn-sm btn-danger btnRemoveServico'><span class='glyphicon glyphicon-trash' /></button>" +
      "<button title='Opções' data-material='"+txtServicoVal+"' class='btn btn-sm  btn-warning btnViewMateriais'><span class='glyphicon glyphicon-eye-open' /></button>" +
      "</div>"
  }).draw()
});

$('body').on('click', '.btnRemoveServico', function(){
  tblServicos.row( $(this).parents('tr') ).remove().draw()
});

$('body').on('click', '.btnViewMateriais', function() {
  let _this = $(this);  
  $("#idTextServico").val(_this.attr('data-material'))

  fetch("http://localhost:3333/cadastro/descricao_material/" + _this.attr('data-material'))
  .then(data => data.json())
  .then(data => {
    $(".modalDescMateriais .modal-body tr").remove()
    data.forEach(element => {
      $(".modalDescMateriais .modal-body").append(
        "<tr style='border-bottom: 1px solid'><td>" + element.desc_material + "</td></tr>"
      )
    });
    $(".modalDescMateriais").modal('show');
  })
});

$("#selectAdicionarServicos").select2()