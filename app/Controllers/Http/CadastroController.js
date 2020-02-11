'use strict'

let BaseController = require("./BaseController");

const Route = use('Route');
const Logger = use('Logger');

const DescricaoMaterial = use('App/Models/DescriptionMaterial');
const ServicoTecnico = use('App/Models/TechnicalService');

class CadastroController extends BaseController {

  async atividade({
    route,
    request,
    response,
    session,
    view
  }) {
    var breadcrumb = [{
        name: 'Cadastro',
        url: Route.url('/atividade'),
        icon: 'fa-dashboard',
        class: '',
      },
      {
        name: 'Cadastro',
        url: Route.url('CadastroController.atividade'),
        icon: '',
        class: '',
      }
    ];
    view.share({
      title: 'Cadastro de Atividades',
      breadcrumb: breadcrumb
    });
    let descricaoMateriais = await DescricaoMaterial.all();
    let ServicosTecnicos = await ServicoTecnico.all();
    return view.render('cadastro.atividade', {
      desc_materiais: descricaoMateriais.rows,
      servicos_tecnicos: ServicosTecnicos.rows,
    });
  }

  async exportToExcel() {

    //CommonJS
    let {
      json2excel,
      excel2json
    } = require('js2excel');

    // excel's data will be exports, which you probably get it from server.
    let data = [{
        "userId": 1,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": '2013/09/10 09:10' // string
      },
      {
        "userId": 2,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": new Date()
      },
      {
        "userId": 3,
        "userPhoneNumber": 1888888888,
        "userAddress": 'xxxx',
        "date": new Date()
      }
    ];

    // this will be export a excel and the file's name is user-info-data.xlsx
    // the default file's name is excel.xlsx
    try {
      json2excel({
        data,
        name: 'user-info-data',
        formateDate: 'yyyy/mm/dd'
      });
    } catch (e) {
      console.error(e, 'export error');
    }

  }

}

module.exports = CadastroController
