'use strict'

/*
|--------------------------------------------------------------------------
| ServicosTecnicoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ServicosTecnicoSeeder {
  async run() {
    const servicos_tecnicos = await Database.from('technical_services').insert([{
        num_ng:"1",
        descricao:" Instalação de medidor monofásico",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"2",
        descricao:" Instalação de ramal monofásico",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"3",
        descricao:" Instal caixa medidor monofásico em poste",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"4",
        descricao:" Instal caixa medidor monofá em alvenaria",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"5",
        descricao:" Instalação de disjuntor monofásico",
        localidade:""
      },
      {
        num_ng:"6",
        descricao:" Instalação de medidor e ramal monofásico",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"7",
        descricao:" Instalação de medidor e disjuntor monofá",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"8",
        descricao:" Inst de medidor e caixa monofás em poste",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"9",
        descricao:" Inst medidor e caixa mono em alvenaria",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"10",
        descricao:" Inst de ramal e disjuntor monofásico",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"11",
        descricao:" Instalaçã de ramal e caixa mono em poste",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"12",
        descricao:" Inst de ramal e caixa mono em alvenaria",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"13",
        descricao:" Inst de disjuntor e caixa mono em poste",
        localidade:""
      },
      {
        num_ng:"14",
        descricao:" Inst disjuntor e caixa mono em alvenaria",
        localidade:""
      },
      {
        num_ng:"15",
        descricao:" Inst de medidor ramal e disjuntor mono",
        localidade:"Med/Ramal"
      },
      {
        num_ng:"16",
        descricao:" Inst medidor disjuntor caixa mono poste",
        localidade:"Med/Ramal"
      },
      // {
      //   num_ng:"17",
      //   descricao:" Inst medi disjuntor caixa mono alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"18",
      //   descricao:" Inst ramal disjuntor caixa monof poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"19",
      //   descricao:" Inst ramal disjuntor caixa mono alvenari",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"20",
      //   descricao:" Inst tampa de caixa de medidor monofásic",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"21",
      //   descricao:" Inst Comp M sem poste med ramal cx disj",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"22",
      //   descricao:" Ins Com M s poste med ramal cx disj alve",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"23",
      //   descricao:" I Co M med raml cx dis posteconcr5m ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"24",
      //   descricao:" I Co M med raml cx dis posteconcr7m ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"25",
      //   descricao:" In Co M med ramal cx dis posteaço5m ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"26",
      //   descricao:" In Co M med ramal cx dis posteaço7m ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"27",
      //   descricao:" Substituição de medidor monofásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"28",
      //   descricao:" SUBSTITUIÇÃO DE RAMAL MONOFÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"29",
      //   descricao:" Substituição caixa medidor mono em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"30",
      //   descricao:" Subst caixa medidor mono em alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"31",
      //   descricao:" Substituição de disjuntor monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"32",
      //   descricao:" Substituição de medidor e ramal mono",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"33",
      //   descricao:" Subst de medidor e caixa mono em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"34",
      //   descricao:" Subst medidor e caixa mono em alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"35",
      //   descricao:" Subst de medidor e disjuntor monofásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"36",
      //   descricao:" Subst de ramal e disjuntor monofásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"37",
      //   descricao:" Subst ramal e caixa monofásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"38",
      //   descricao:" Subst de ramal e caixa mono em alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"39",
      //   descricao:" Subst medidor ramal e disjuntor mono",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"40",
      //   descricao:" Subst medi disjuntor e caixa mono poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"41",
      //   descricao:" Subst medi disjuntor caixa mono alvenari",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"42",
      //   descricao:" Subst ramal disjuntor caixa mono poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"43",
      //   descricao:" Subst ramal disjuntor caixa mono alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"44",
      //   descricao:" Subst disjuntor caixa mono em poste",
      //   localidade:""
      // },
      // {
      //   num_ng:"45",
      //   descricao:" Subst disjuntor e caixa mono alvenaria",
      //   localidade:""
      // },
      // {
      //   num_ng:"46",
      //   descricao:" Subst de tampa de caixa de medidor mono",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"47",
      //   descricao:" Corte cx barramento retirada ramal mono",
      //   localidade:""
      // },
      // {
      //   num_ng:"48",
      //   descricao:" Corte no medidor monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"49",
      //   descricao:" Corte no poste monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"50",
      //   descricao:" Inst dispositi antifurto cx medidor mono",
      //   localidade:""
      // },
      // {
      //   num_ng:"51",
      //   descricao:" Mudança de local de medidor - monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"52",
      //   descricao:" MUDANÇA DE LOCAL DE PADRÃO MONOFÁSICO",
      //   localidade:""
      // },
      // {
      //   num_ng:"53",
      //   descricao:" Religação com instalação ramal monofásic",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"54",
      //   descricao:" Relig de fornecimento poste monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"55",
      //   descricao:" Religação no medidor monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"56",
      //   descricao:" Relig com inst. medidor monofásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"57",
      //   descricao:" Relig com inst medidor ramal monofásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"58",
      //   descricao:" Retirada de medidor monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"59",
      //   descricao:" Retirada de medidor e ramal monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"60",
      //   descricao:" Retirada de ramal monofásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"61",
      //   descricao:" Instalação de medidor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"62",
      //   descricao:" Instalação de ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"63",
      //   descricao:" Instalação caixa medidor bifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"64",
      //   descricao:" Inst caixa medidor bifásico em alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"65",
      //   descricao:" Instalação de disjuntor bifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"66",
      //   descricao:" Instalação de medidor e ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"67",
      //   descricao:" Instalação medidor e disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"68",
      //   descricao:" Instalação medidor caixa bifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"69",
      //   descricao:" Inst medidor caixa bifásico alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"70",
      //   descricao:" Instalação de ramal e disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"71",
      //   descricao:" Instalação ramal caixa bifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"72",
      //   descricao:" Inst ramal e caixa bifásico alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"73",
      //   descricao:" Inst disjuntor e caixa bifásico em poste",
      //   localidade:""
      // },
      // {
      //   num_ng:"74",
      //   descricao:" Inst disjuntor caixa bifásico alvenaria",
      //   localidade:""
      // },
      // {
      //   num_ng:"75",
      //   descricao:" Inst medidor ramal disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"76",
      //   descricao:" Inst medidor disjuntor e caixa bif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"77",
      //   descricao:" Inst medi disjuntor caixa bif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"78",
      //   descricao:" Inst ramal disjuntor caixa bif em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"79",
      //   descricao:" Inst ramal disjuntor caixa bif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"80",
      //   descricao:" Inst tampa cx medi bif inst disp antifur",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"81",
      //   descricao:" In Co B sem poste med ramal cx disj alve",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"82",
      //   descricao:" I Co B med ramal cx disj poste existente",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"83",
      //   descricao:" ICoB med raml cx disj posteconcr5m ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"84",
      //   descricao:" ICoB med raml cx disj posteconcr7m Ater",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"85",
      //   descricao:" SUBSTITUIÇÃO DE MEDIDOR BIFÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"86",
      //   descricao:" Substituição de ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"87",
      //   descricao:" Subst caixa para medidor bifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"88",
      //   descricao:" Subst caixa para medidor bif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"89",
      //   descricao:" Substituição de disjuntor bifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"90",
      //   descricao:" Substituição de medidor e ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"91",
      //   descricao:" Subst medidor e disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"92",
      //   descricao:" Subst medidor e caixa bifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"93",
      //   descricao:" Subst medidor e caixa bifásico alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"94",
      //   descricao:" Subst ramal e disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"95",
      //   descricao:" Subst ramal e caixa bifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"96",
      //   descricao:" SUBST RAMAL E CAIXA BIFÁSICO ALVENARIA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"97",
      //   descricao:" Subst disjuntor caixa bifásico em poste",
      //   localidade:""
      // },
      // {
      //   num_ng:"98",
      //   descricao:" Subst disjuntor caixa bifásico alvenaria",
      //   localidade:""
      // },
      // {
      //   num_ng:"99",
      //   descricao:" Subst medidor ramal e disjuntor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"100",
      //   descricao:" Subst medidor disjuntor caixa bif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"101",
      //   descricao:" Subst medid disjuntor caixa bif alvenari",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"102",
      //   descricao:" Subst ramal disjuntor caixa bif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"103",
      //   descricao:" Subst ramal disjuntor caixa bif alvenari",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"104",
      //   descricao:" Substituição eletroduto e ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"105",
      //   descricao:" Subst tampa de caixa de medidor bifásic",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"106",
      //   descricao:" Relig com instalação de ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"107",
      //   descricao:" Religação com inst. medidor bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"108",
      //   descricao:" Relig com inst. medidor e ramal bifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"109",
      //   descricao:" INSTALAÇÃO DE MEDIDOR TRIF ELETROMECANIC",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"110",
      //   descricao:" INSTALAÇÃO DE RAMAL (15KVA) TRIFÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"111",
      //   descricao:" Instalação de ramal (27KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"112",
      //   descricao:" Instalação de ramal (35KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"113",
      //   descricao:" Inst caixa medidor trifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"114",
      //   descricao:" Inst caixa medidor trifásico alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"115",
      //   descricao:" Instalação de disjuntor trifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"116",
      //   descricao:" Instalação medidor e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"117",
      //   descricao:" Inst medidor e caixa trifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"118",
      //   descricao:" Inst medidor e caixa trifásico alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"119",
      //   descricao:" Inst disjuntor e caixa trifásico poste",
      //   localidade:""
      // },
      // {
      //   num_ng:"120",
      //   descricao:" Inst disjuntor e caixa trif alvenaria",
      //   localidade:""
      // },
      // {
      //   num_ng:"121",
      //   descricao:" Inst medidor e ramal (15KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"122",
      //   descricao:" Inst ramal (15KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"123",
      //   descricao:" Inst ramal (15KVA) caixa trifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"124",
      //   descricao:" Inst ramal 15KVA e caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"125",
      //   descricao:" Inst medidor e ramal (27KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"126",
      //   descricao:" Inst ramal (27KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"127",
      //   descricao:" Inst ramal (27KVA) e caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"128",
      //   descricao:" Inst ramal 27KVA e caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"129",
      //   descricao:" Inst medidor e ramal (35KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"130",
      //   descricao:" Inst ramal (35KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"131",
      //   descricao:" Inst ramal 35KVA e caixa trifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"132",
      //   descricao:" Inst ramal 35KVA e caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"133",
      //   descricao:" Inst medidor disjuntor caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"134",
      //   descricao:" Inst medi disjuntor caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"135",
      //   descricao:" Inst medidor ramal 15KVA disjuntor trif",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"136",
      //   descricao:" Inst ramal 15KVA disjun caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"137",
      //   descricao:" Inst ramal 15KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"138",
      //   descricao:" Inst medidor ramal 27KVA disjuntor trifá",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"139",
      //   descricao:" Inste ramal 27KVA disj  caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"140",
      //   descricao:" Inst ramal 27KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"141",
      //   descricao:" Inst ramal 35KVA disj caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"142",
      //   descricao:" Inst ramal 35KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"143",
      //   descricao:" Inst medidor ramal 35KVA disjuntor trif",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"144",
      //   descricao:" INST TAMPA CX MED TRIF E DISP ANTIFURTO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"145",
      //   descricao:" Inst ramal 35KVA cx eletroduto trif post",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"146",
      //   descricao:" Inst ramal 35KVA cx eletroduto trif alve",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"147",
      //   descricao:" ICoT s poste med raml 27KVA cx disj alve",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"148",
      //   descricao:" ICoT med ramal 27KVA cx disj poste exist",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"149",
      //   descricao:" ICoTmed ramal27KVA cx dis postconc5m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"150",
      //   descricao:" ICoT med raml27KVA cx dis postconc7m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"151",
      //   descricao:" ICoT s poste med ramal15KVA cx disj alve",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"152",
      //   descricao:" InCo T med ramal15KVA cx disj poste exis",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"153",
      //   descricao:" ICoT med raml15KVA cx dis postconc5m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"154",
      //   descricao:" ICoT med ram15KVA cx dis postconc7m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"155",
      //   descricao:" ICoT s poste med raml35KVA cx dis alvena",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"156",
      //   descricao:" ICoT med ramal35KVA cx disj poste existe",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"157",
      //   descricao:" ICoT med raml35KVA cx dis postconc5m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"158",
      //   descricao:" ICoTmed raml35KVA cx dis postconc7m ate",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"159",
      //   descricao:" SUBST MEDIDOR TRIFÁSICO ELETROMECANICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"160",
      //   descricao:" Substituição de ramal (15KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"161",
      //   descricao:" Substituição de ramal (27KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"162",
      //   descricao:" Substituição de ramal (35KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"163",
      //   descricao:" Subst de caixa medidor trifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"164",
      //   descricao:" Subst caixa para medidor trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"165",
      //   descricao:" Substituição de disjuntor trifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"166",
      //   descricao:" Substitui medidor e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"167",
      //   descricao:" Subst medidor e caixa trifásico em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"168",
      //   descricao:" Subst medidor e caixa trifási alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"169",
      //   descricao:" Subst disjuntor e caixa trifásico poste",
      //   localidade:""
      // },
      // {
      //   num_ng:"170",
      //   descricao:" Subst disjuntor e caixa trif alvenaria",
      //   localidade:""
      // },
      // {
      //   num_ng:"171",
      //   descricao:" Subst medidor e ramal (15KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"172",
      //   descricao:" Subst ramal(15KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"173",
      //   descricao:" Subst ramal(15KVA) e caixa trif em poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"174",
      //   descricao:" Subst ramal15KVA e caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"175",
      //   descricao:" Subst medidor e ramal (27KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"176",
      //   descricao:" Subst ramal(27KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"177",
      //   descricao:" Subst ramal27KVA e caixa trifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"178",
      //   descricao:" Subst ramal27KVA e caixa trif alvennaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"179",
      //   descricao:" Subst medidor e ramal (35KVA) trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"180",
      //   descricao:" Subst ramal(35KVA) e disjuntor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"181",
      //   descricao:" Subst ramal35KVA e caixa trifásico poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"182",
      //   descricao:" Subst ramal35KVA e caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"183",
      //   descricao:" Subst medidor disjuntor caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"184",
      //   descricao:" Subst med disjuntor caixa trif alvenaria",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"185",
      //   descricao:" Subst medidor ramal15KVA disjuntor trif",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"186",
      //   descricao:" Subst ramal15KVA disj caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"187",
      //   descricao:" Subst ramal15KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"188",
      //   descricao:" Subst ramal27KVA disj caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"189",
      //   descricao:" Subst ramal27KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"190",
      //   descricao:" Subst medidor ramal27KV e disj trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"191",
      //   descricao:" Subs medidor ramal35KVA e disjuntor trif",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"192",
      //   descricao:" Subst ramal 35KVA disju caixa trif poste",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"193",
      //   descricao:" Subst ramal35KVA disj caixa trif alvenar",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"194",
      //   descricao:" Subst tampa de caixa de medidor trifásic",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"195",
      //   descricao:" Subst eletroduto e ramal trifásico 35KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"196",
      //   descricao:" Aument carga com conexão ramal trif15KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"197",
      //   descricao:" Aument carga com conexão ramal trif27KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"198",
      //   descricao:" Aument carga com conexão ramal trif35KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"199",
      //   descricao:" Relig com instalação ramal trifásic15KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"200",
      //   descricao:" Relig com instalação ramal trifásic27KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"201",
      //   descricao:" Relig com instalação ramal trifásic35KVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"202",
      //   descricao:" Religação com inst. medidor trifásico",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"203",
      //   descricao:" Relig com inst medido e ramal trif15 kVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"204",
      //   descricao:" Relig com inst medido e ramal trif 27kVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"205",
      //   descricao:" Relig com inst medidor e ramal trif35kVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"206",
      //   descricao:" Norma tub sangr troc tub ramal trif35kVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"207",
      //   descricao:" Nor tub sang troc tub ramltri35k repalve",
      //   localidade:""
      // },
      // {
      //   num_ng:"208",
      //   descricao:" Construção mureta padrão polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"209",
      //   descricao:" Cort cx barr ret raml poli entre cx med",
      //   localidade:""
      // },
      // {
      //   num_ng:"210",
      //   descricao:" Corte no medidor polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"211",
      //   descricao:" Corte no poste polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"212",
      //   descricao:" Inst disp antifurto caixa medidor poli",
      //   localidade:""
      // },
      // {
      //   num_ng:"213",
      //   descricao:" Mudança de local de medidor - polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"214",
      //   descricao:" Mudança de local de padrão polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"215",
      //   descricao:" Relig fornecimento em poste (polifásico)",
      //   localidade:""
      // },
      // {
      //   num_ng:"216",
      //   descricao:" Relig no medidor polifásico",
      //   localidade:""
      // },
      // {
      //   num_ng:"217",
      //   descricao:" Retirada de medidor e ramal polifasico",
      //   localidade:""
      // },
      // {
      //   num_ng:"218",
      //   descricao:" RETIRADA DE MEDIDOR POLIFÁSICO",
      //   localidade:""
      // },
      // {
      //   num_ng:"219",
      //   descricao:" Retirada de ramal polifasico",
      //   localidade:""
      // },
      // {
      //   num_ng:"220",
      //   descricao:" Aferição de Medidor",
      //   localidade:""
      // },
      // {
      //   num_ng:"221",
      //   descricao:" Aterramento",
      //   localidade:""
      // },
      // {
      //   num_ng:"222",
      //   descricao:" Fechamento de caixa DAE com fita de aço",
      //   localidade:""
      // },
      // {
      //   num_ng:"223",
      //   descricao:" Instalação poste padrão de aço 5mt",
      //   localidade:""
      // },
      // {
      //   num_ng:"224",
      //   descricao:" Instalação poste padrão de aço 7mt",
      //   localidade:""
      // },
      // {
      //   num_ng:"225",
      //   descricao:" Instalação poste padrão de concreto 5mt",
      //   localidade:""
      // },
      // {
      //   num_ng:"226",
      //   descricao:" Instalação poste padrão de concreto 7 mt",
      //   localidade:""
      // },
      // {
      //   num_ng:"227",
      //   descricao:" Instalação de caixa DAE e DAC",
      //   localidade:""
      // },
      // {
      //   num_ng:"228",
      //   descricao:" Inst caixa de distribuição (Barramento)",
      //   localidade:""
      // },
      // {
      //   num_ng:"229",
      //   descricao:" Inst dispositivo antifurto em barramento",
      //   localidade:""
      // },
      // {
      //   num_ng:"230",
      //   descricao:" Retirada de luminária particular - Corte",
      //   localidade:""
      // },
      // {
      //   num_ng:"231",
      //   descricao:" RET LIGAÇÃO CLANDESTINA DIRETA NA REDE",
      //   localidade:""
      // },
      // {
      //   num_ng:"232",
      //   descricao:" Normalização de relé fotoelétrico",
      //   localidade:""
      // },
      // {
      //   num_ng:"233",
      //   descricao:" Substituição de caixa DAE",
      //   localidade:""
      // },
      // {
      //   num_ng:"234",
      //   descricao:" Subst caixa de distribuição (barramento)",
      //   localidade:""
      // },
      // {
      //   num_ng:"235",
      //   descricao:" Visita sem execução de tarefa",
      //   localidade:""
      // },
      // {
      //   num_ng:"236",
      //   descricao:" Preenchimento para cadastro de clientes",
      //   localidade:""
      // },
      // {
      //   num_ng:"237",
      //   descricao:" Confirmação código irregulari de leitura",
      //   localidade:""
      // },
      // {
      //   num_ng:"238",
      //   descricao:" Confi leitura med energi elétric grupAeB",
      //   localidade:""
      // },
      // {
      //   num_ng:"239",
      //   descricao:" Entrega de correspondência Cartas",
      //   localidade:""
      // },
      // {
      //   num_ng:"240",
      //   descricao:" Ret Rede Clandest Caminhão Guinda+motori",
      //   localidade:""
      // },
      // {
      //   num_ng:"241",
      //   descricao:" Serv viatura leve motorista eletricista",
      //   localidade:""
      // },
      // {
      //   num_ng:"242",
      //   descricao:" Serv viat leve motorista eletric+eletric",
      //   localidade:""
      // },
      // {
      //   num_ng:"243",
      //   descricao:" Serv transp mat viat leve motori eletric",
      //   localidade:""
      // },
      // {
      //   num_ng:"244",
      //   descricao:" Serv tran mat viat pes motorieletric+aju",
      //   localidade:""
      // },
      // {
      //   num_ng:"245",
      //   descricao:" OT ADMINISTRATIVA",
      //   localidade:""
      // },
      // {
      //   num_ng:"246",
      //   descricao:" NORM DE RAMAL PELA PARTE SUP DA CX MONO",
      //   localidade:""
      // },
      // {
      //   num_ng:"247",
      //   descricao:" ATENDIMENTO ANEEL",
      //   localidade:""
      // },
      // {
      //   num_ng:"248",
      //   descricao:" INST COMP MONO CX COM LENTE POSTE CERJ",
      //   localidade:"Poste ; Med/Ramal"
      // },
      // {
      //   num_ng:"249",
      //   descricao:" INST COMP BIF CX LENTE POSTE CERJ",
      //   localidade:"Poste ; Med/Ramal"
      // },
      // {
      //   num_ng:"250",
      //   descricao:" INST COMP TRIF CX LENTE POSTE CERJ",
      //   localidade:"Poste ; Med/Ramal"
      // },
      // {
      //   num_ng:"251",
      //   descricao:" MUD LOCAL PADRAO MONO POST CERJ CX LENT",
      //   localidade:"Poste"
      // },
      // {
      //   num_ng:"252",
      //   descricao:" MUD LOCAL POLI POSTE CERJ CX COM LENTE",
      //   localidade:"Poste"
      // },
      // {
      //   num_ng:"253",
      //   descricao:" NORMALIZ CX POR FURTO- CV OU BORNER MEDI",
      //   localidade:""
      // },
      // {
      //   num_ng:"254",
      //   descricao:" NORMALIZAÇÃO NA INSPEÇÃO",
      //   localidade:"Ato"
      // },
      // {
      //   num_ng:"255",
      //   descricao:" INST CX COM LENTE POSTE MONO E POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"256",
      //   descricao:" INST CX, MED E RAMAL POSTE MONO E POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"257",
      //   descricao:" RAMAL TETRAPOLAR",
      //   localidade:""
      // },
      // {
      //   num_ng:"258",
      //   descricao:" INST ADAPTADORES NAS PARTES SUP DA CAIXA",
      //   localidade:""
      // },
      // {
      //   num_ng:"259",
      //   descricao:" MOTOQUEIRO ELETRICISTA HH",
      //   localidade:""
      // },
      // {
      //   num_ng:"260",
      //   descricao:" MOTOQUEIRO LEITURISTA HH",
      //   localidade:""
      // },
      // {
      //   num_ng:"261",
      //   descricao:" PICK UP LEVE STRADA HH",
      //   localidade:""
      // },
      // {
      //   num_ng:"262",
      //   descricao:" INST COMP MONO PST ZINCO-REDE DAT",
      //   localidade:""
      // },
      // {
      //   num_ng:"263",
      //   descricao:" INST MONO(MED,RAMAL) - REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"264",
      //   descricao:" INST RAMAL CONCÊNTRICO MONO-REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"265",
      //   descricao:" INST/TROCRAMDESDEMEDAOPNTSUPDOPSTCLREDAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"266",
      //   descricao:" TROCRAMMONODESDECXDAEAOPSTDECLI-REDEDAT",
      //   localidade:""
      // },
      // {
      //   num_ng:"267",
      //   descricao:" TROC RAMAL MONO POR CONCÊNTRICO-REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"268",
      //   descricao:" TROC DE MED E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"269",
      //   descricao:" TROCA CX E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"270",
      //   descricao:" TRCA DISJ E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"271",
      //   descricao:" TROCA MED,DISJ E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"272",
      //   descricao:" TROC DE MED, CX E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"273",
      //   descricao:" TROCA DISJ, CX E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"274",
      //   descricao:" TROC MED,DISJ,CX E RAMAL MONO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"275",
      //   descricao:" INST RAMAL BIFASICO CONCENTRICO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"276",
      //   descricao:" TRCA RAMAL BIFASICO CONCENTRICO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"277",
      //   descricao:" INST DE RAMAL TRI CONCENTRICO REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"278",
      //   descricao:" TRCA DE RAMAL TRI POR CONCENT REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"279",
      //   descricao:" INST COMP POLI PST CONCRETO REDE DAT",
      //   localidade:""
      // },
      // {
      //   num_ng:"280",
      //   descricao:" INST POLI(MED, RAMAL) REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"281",
      //   descricao:" INST/TROCRAMPOLDOMEDAOPNTSUPDOPSTCLRDAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"282",
      //   descricao:" TROCRAMPOLIDACXDAEAOPST CLIREDEDAT",
      //   localidade:""
      // },
      // {
      //   num_ng:"283",
      //   descricao:" TROC RAMAL POLI ENTRE 25E 35MM2 REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"284",
      //   descricao:" TROC RAM POLI ENTRE 50 E95MM2REDE DAT",
      //   localidade:""
      // },
      // {
      //   num_ng:"285",
      //   descricao:" TROCA DE MED RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"286",
      //   descricao:" TROCA DE CX E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"287",
      //   descricao:" TROCA DISJ E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"288",
      //   descricao:" TROCA MED, DISJ E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"289",
      //   descricao:" TROCA MED,CX E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"290",
      //   descricao:" TROCA DISJ,CX E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"291",
      //   descricao:" TROCA MED,DISJ,CX E RAMAL POLI REDE DAT",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"292",
      //   descricao:" INST DA MEDIÇÃO DOS TRANFORMADORES",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"293",
      //   descricao:" INST DA MEDIÇ DOSTRANSFORMADORES COM TCS",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"294",
      //   descricao:" INST DE TCS P MEDIÇÃO DOSTRANSFORMADORES",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"295",
      //   descricao:" RETIRADA DE CX DE PROTEÇÃO E MEDIÇÃO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"296",
      //   descricao:" INSTCOMPMONOPSTZINCO REDE DAT NEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"297",
      //   descricao:" INST MONO (MED,RAMAL) REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"298",
      //   descricao:" INST RAMAL CONCENTRICO MONO REDEDAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"299",
      //   descricao:" TROCRAMALMONOPDESDECXDAEAOPSTCLIREDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"300",
      //   descricao:" TROCA RAMAL MONO POR CONCENTRICO RDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"301",
      //   descricao:" TROCA DE MED E RAMAL MONO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"302",
      //   descricao:" TROCA DE CX E RAMAL MONO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"303",
      //   descricao:" TROCA DISJ E RAMAL MONO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"304",
      //   descricao:" TROC MED, DISJ E RAMAL MONO REDEDAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"305",
      //   descricao:" TOCA MED, CX E RAMAL MONO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"306",
      //   descricao:" TROCA DISJ, CX E RAMAL MONO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"307",
      //   descricao:" TROC DE MED,DISJ,CX E RAMAL MONO RDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"308",
      //   descricao:" INST RAMAL BI CONCENTRICO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"309",
      //   descricao:" TROC RAMAL BI CONCENTRICO REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"310",
      //   descricao:" INSTDE RAMAL TRI CONCENTRICO REDE DATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"311",
      //   descricao:" TROC DE RAM TRI POR CONCENTRICO RDAT NEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"312",
      //   descricao:" INST COMP POLI PST CONCRETO RDATNEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"313",
      //   descricao:" INST POLI(MED, RAMAL)REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"314",
      //   descricao:" TROCRAMPOLIDACXDAEAOPSTCLIREDEDATNEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"315",
      //   descricao:" TROCRAMALPOLIENTRE25 E35MM2REDEDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"316",
      //   descricao:" TROCRAMALPOLIENTRE 50 E 95MM2REDEDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"317",
      //   descricao:" TROC DE MED E RAM POLI REDEDATNEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"318",
      //   descricao:" TROCA DE CX E RAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"319",
      //   descricao:" TROC DISJ E RAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"320",
      //   descricao:" TROC MED DIJS ERAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"321",
      //   descricao:" TROC MED CX DE RAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"322",
      //   descricao:" TROC DISJ CX E RAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"323",
      //   descricao:" TROC MED DJ CX E RAMAL POLI REDE DAT NEO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"324",
      //   descricao:" INST DE MED POLI E DISJ",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"325",
      //   descricao:" INST MED POLI, CX E DISJ",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"326",
      //   descricao:" INST CX DE MED,DISJ E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"327",
      //   descricao:" INST POLI(MED, RAMAL)",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"328",
      //   descricao:" INST COMP POLI POSTE CONCRETO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"329",
      //   descricao:" INST COMPLETA POLI POSTE DE ZINCO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"330",
      //   descricao:" TROC CX DE MED POLI EM ALVENARIA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"331",
      //   descricao:" TROC RAMAL POLI ENTRE 25E35MM2",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"332",
      //   descricao:" TROC RAM POLI ENTRE 50 E 95MM2",
      //   localidade:""
      // },
      // {
      //   num_ng:"333",
      //   descricao:" TROC MED E DISJ POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"334",
      //   descricao:" TROC MED E CX POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"335",
      //   descricao:" TROCA MED E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"336",
      //   descricao:" TROC CX E DISJ POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"337",
      //   descricao:" TROCA CX E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"338",
      //   descricao:" TROC DISJ E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"339",
      //   descricao:" TROC MED,CX DISJ POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"340",
      //   descricao:" TROCA MED DISJ E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"341",
      //   descricao:" TROCA  MED ,CX E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"342",
      //   descricao:" TROCA DISJ CX E RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"343",
      //   descricao:" TROCA MED,DISJE RAMAL POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"344",
      //   descricao:" RET DE PADRAO POLIC/PSTDE CONCRETO",
      //   localidade:""
      // },
      // {
      //   num_ng:"345",
      //   descricao:" ALVENA POLI P MURO DANIFIC AO RET A CX",
      //   localidade:""
      // },
      // {
      //   num_ng:"346",
      //   descricao:" RELIG NO PST C INS DE MED POLI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"347",
      //   descricao:" SUBST OU INST DE TAMPA DE BORNES TRI",
      //   localidade:""
      // },
      // {
      //   num_ng:"348",
      //   descricao:" TOCA DE PST ZINCADO MONO",
      //   localidade:""
      // },
      // {
      //   num_ng:"349",
      //   descricao:" TROCA DE PST DE CONCRETO POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"350",
      //   descricao:" SUBST DE RELESBASES OURECONEXAONEUTRO",
      //   localidade:""
      // },
      // {
      //   num_ng:"351",
      //   descricao:" NORNTUBOSANGCREPAROSEM ALVENARIA",
      //   localidade:""
      // },
      // {
      //   num_ng:"352",
      //   descricao:" SUBST DE TUBO E RAMAL",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"353",
      //   descricao:" REPARO ALVENAPOR SUSP TUBO SANG",
      //   localidade:""
      // },
      // {
      //   num_ng:"354",
      //   descricao:" RELIG NO PST PARA NORMALIZAÇÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"355",
      //   descricao:" RETIRADA DE POSTE",
      //   localidade:""
      // },
      // {
      //   num_ng:"356",
      //   descricao:" RETIRADA DE RAMAL TRI ATE 25MM2",
      //   localidade:""
      // },
      // {
      //   num_ng:"357",
      //   descricao:" RET DE RAMAL BITOLA MAIOR OU A50MM2",
      //   localidade:""
      // },
      // {
      //   num_ng:"358",
      //   descricao:" TROC AMED CX E RAMAL MONO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"359",
      //   descricao:" SUBST OU INST TAMPA DE BORNES BI",
      //   localidade:""
      // },
      // {
      //   num_ng:"360",
      //   descricao:" ALVENA MONO PARA MURO DANIF AO RET A CX",
      //   localidade:""
      // },
      // {
      //   num_ng:"361",
      //   descricao:" RET DE PADRAO COMP MONO",
      //   localidade:""
      // },
      // {
      //   num_ng:"362",
      //   descricao:" TROC MED,DISJ,CX E RAMAL MONO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"363",
      //   descricao:" TROC OU INS DE TAMPA DE BORNES MONO",
      //   localidade:""
      // },
      // {
      //   num_ng:"364",
      //   descricao:" VIAT LEVE + MOT ELETR+ELETR(R$/H)",
      //   localidade:""
      // },
      // {
      //   num_ng:"365",
      //   descricao:" VIAT LEVE+MOT ELETR(R$/H)",
      //   localidade:""
      // },
      // {
      //   num_ng:"366",
      //   descricao:" ALUGUEL DE CAMINHÃO CAÇAMBA-HOMEM- HORA",
      //   localidade:""
      // },
      // {
      //   num_ng:"367",
      //   descricao:" ELETRICISTAS DE REDES (R$/H)",
      //   localidade:""
      // },
      // {
      //   num_ng:"368",
      //   descricao:" INSTAL CONC PRIMARIO OU SEC(MOD  LANDIS)",
      //   localidade:""
      // },
      // {
      //   num_ng:"369",
      //   descricao:" INST ADICIONAL DECABO DE COMUNICAÇÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"370",
      //   descricao:" INST DE CONCENTRADOR CAM",
      //   localidade:""
      // },
      // {
      //   num_ng:"371",
      //   descricao:" INST ACOPLADOR CAPACITIVO+EXT DE VÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"372",
      //   descricao:" INST COMPLETA MONO NEO SEM POSTE",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"373",
      //   descricao:" INST COMPLETA POLI NEO SEM POSTE",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"374",
      //   descricao:" TROC DE CX E RAM MONO NEO COM MUD DE LOC",
      //   localidade:""
      // },
      // {
      //   num_ng:"375",
      //   descricao:" TROC DE CX E RAM POLI NEO COM MUD DE LOC",
      //   localidade:""
      // },
      // {
      //   num_ng:"376",
      //   descricao:" TROC CX,MED E RAM MONO NEO CMUD DE LOCAL",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"377",
      //   descricao:" TROC CX,MEDE RAMPOLINEOCOM MUD DE LOCAL",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"378",
      //   descricao:" ALVENARIAP/ENTRADADECABOCONCSEMTROCDECX",
      //   localidade:""
      // },
      // {
      //   num_ng:"379",
      //   descricao:" RELOCAÇÃO E CONEXÃO DE RAMAL NEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"380",
      //   descricao:" FIXAÇÃO DE CAIXA DE MEDIDOR",
      //   localidade:""
      // },
      // {
      //   num_ng:"381",
      //   descricao:" TROCA DE CONCENT. SECUNDARIO MOD. LANDIS",
      //   localidade:""
      // },
      // {
      //   num_ng:"382",
      //   descricao:" INSTAL SHUNT DE MEDIÇÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"383",
      //   descricao:" TROCA DE CABO DE COMUNICAÇÃO (VÃO)",
      //   localidade:""
      // },
      // {
      //   num_ng:"384",
      //   descricao:" INSTALACAO DE CAIXA FALLOW-UP ALVENARIA",
      //   localidade:""
      // },
      // {
      //   num_ng:"385",
      //   descricao:" INSTAL DE MEDIDOR TRIF ELETRONICO MD",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"386",
      //   descricao:" INSTAL MEDIDOR TRI ELETRONICO MI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"387",
      //   descricao:" SUBST MEDIDOR TRI ELETRONICO MD",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"388",
      //   descricao:" SUBST MEDIDOR TRI ELETRONICO MI",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"389",
      //   descricao:" INSTAL DISPOSITIVO ANTIFURTO CAIXA MEDID",
      //   localidade:""
      // },
      // {
      //   num_ng:"390",
      //   descricao:" INSTAL DISPOSITIVO ANTIFURTO CAIXA TC",
      //   localidade:""
      // },
      // {
      //   num_ng:"391",
      //   descricao:" INSTAL CAIXA FOLLOW-UP POSTE",
      //   localidade:"Poste"
      // },
      // {
      //   num_ng:"392",
      //   descricao:" SUBSTITUIÇÃO CAIXA FOLLOW-UP ALVENARIA",
      //   localidade:""
      // },
      // {
      //   num_ng:"393",
      //   descricao:" SUBSTITUIÇÃO CAIXA FOLLOW-UP POSTE",
      //   localidade:"Poste"
      // },
      // {
      //   num_ng:"394",
      //   descricao:" RELOCA PADRÃO MONO COM INSTAL FOLLOW-UP",
      //   localidade:""
      // },
      // {
      //   num_ng:"395",
      //   descricao:" RELOCA PADRÃO BI COM INSTAL FOLLOW-UP",
      //   localidade:""
      // },
      // {
      //   num_ng:"396",
      //   descricao:" RELOCA PADRÃO TRI COM INSTAL FOLLOW-UP",
      //   localidade:""
      // },
      // {
      //   num_ng:"397",
      //   descricao:" RETIRADA DE CAIXA DAE",
      //   localidade:""
      // },
      // {
      //   num_ng:"398",
      //   descricao:" Ret cx Dae c/ reloc de tod ram p/concLAN",
      //   localidade:""
      // },
      // {
      //   num_ng:"399",
      //   descricao:" Ret cx Dae c/ reloc de tod ramp/concCAM",
      //   localidade:""
      // },
      // {
      //   num_ng:"400",
      //   descricao:" TROCA DE SHUNT DE MEDIÇÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"401",
      //   descricao:" NÃO EXECUTADA DECISÃO AMPLA",
      //   localidade:""
      // },
      // {
      //   num_ng:"402",
      //   descricao:" MEDIDOR RETIRADO PROJ MEDIÇÃO ELETRÔNICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"403",
      //   descricao:" INST CONCENT. PRIM OU SECUND MOD. LANDIS",
      //   localidade:""
      // },
      // {
      //   num_ng:"404",
      //   descricao:" RELOC E CONEXÃO RAMAL-REDE ANT. P CX DAE",
      //   localidade:""
      // },
      // {
      //   num_ng:"405",
      //   descricao:" RELOC E CONEXÃO RAMAL- CX DAE P/ CONCENT",
      //   localidade:""
      // },
      // {
      //   num_ng:"406",
      //   descricao:" NORM DE RAMAL PELA PARTE SUP DA CX BIFAS",
      //   localidade:""
      // },
      // {
      //   num_ng:"407",
      //   descricao:" NORM DE RAMAL PELA PARTE SUP DA CX TRIFA",
      //   localidade:""
      // },
      // {
      //   num_ng:"408",
      //   descricao:" INST CX COM LENTE POSTE BIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"409",
      //   descricao:" INST CX COM LENTE POSTE TRIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"410",
      //   descricao:" INSTAL CX FALLOW-UP ALVENARIA BIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"411",
      //   descricao:" INSTAL CX FALLOW-UP ALVENARIA TRIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"412",
      //   descricao:" SUBSTIT CX FOLLOW-UP ALVENARIA BIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"413",
      //   descricao:" SUBSTIT CX FOLLOW-UP ALVENARIA TRIFASICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"414",
      //   descricao:" INST.CONC.PRIM./SEC.MOD.LAND-RF C/ATERR",
      //   localidade:""
      // },
      // {
      //   num_ng:"415",
      //   descricao:" NORMALIZAÇÃO COM LAUDO",
      //   localidade:""
      // },
      // {
      //   num_ng:"416",
      //   descricao:" MEDIÇÃO COMPARATIVA",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"417",
      //   descricao:" EFICIENCIA ENERGETICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"418",
      //   descricao:" INSTALAÇÃO DE CAIXA COM LENTE NA CRUZETA",
      //   localidade:""
      // },
      // {
      //   num_ng:"419",
      //   descricao:" SUBSTITUIÇÃO DE CAIXA C LENTE NA CRUZETA",
      //   localidade:""
      // },
      // {
      //   num_ng:"420",
      //   descricao:" SMC RETIRADA DE LIGAÇÃO DIRETA",
      //   localidade:""
      // },
      // {
      //   num_ng:"421",
      //   descricao:" SMC RETIRADA DE BY PASS",
      //   localidade:""
      // },
      // {
      //   num_ng:"422",
      //   descricao:" SMC RETIRADA DE BY PASS INTERNO",
      //   localidade:""
      // },
      // {
      //   num_ng:"423",
      //   descricao:" SMC TROCA DE MEDIDOR ELTRÔNICO QUEIMADO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"424",
      //   descricao:" SMC TROCA DE MED ELETRÔNICO DEFEITUOSO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"425",
      //   descricao:" SMC RECOLOCAÇÃO DE SHUNT NO SLOT",
      //   localidade:""
      // },
      // {
      //   num_ng:"426",
      //   descricao:" SMC TROCA DE EPROM",
      //   localidade:""
      // },
      // {
      //   num_ng:"427",
      //   descricao:" SMC TROCA DE CONCENTRADOR SECUNDÁRIO",
      //   localidade:""
      // },
      // {
      //   num_ng:"428",
      //   descricao:" SMC CORREÇÃO NO ARQUIVO DE CONFIG DO CP",
      //   localidade:""
      // },
      // {
      //   num_ng:"429",
      //   descricao:" SMC UNIDADE CONSUMIDORA VAZIA",
      //   localidade:""
      // },
      // {
      //   num_ng:"430",
      //   descricao:" SMC CLIENTE SEM ANORMALIDADE",
      //   localidade:""
      // },
      // {
      //   num_ng:"431",
      //   descricao:" SMC NORMALIZAÇÃO DE COMUNICAÇÃO SERIAL",
      //   localidade:""
      // },
      // {
      //   num_ng:"432",
      //   descricao:" SMC TROCA DO MÓDULO DE CONTROLE",
      //   localidade:""
      // },
      // {
      //   num_ng:"433",
      //   descricao:" SMC TROCA DO CP",
      //   localidade:""
      // },
      // {
      //   num_ng:"434",
      //   descricao:" SMC MANUTENÇÃO DE CONCENTRADORES",
      //   localidade:""
      // },
      // {
      //   num_ng:"435",
      //   descricao:" TROCA DE FUSÍVEL",
      //   localidade:""
      // },
      // {
      //   num_ng:"436",
      //   descricao:" GNT INSTALACAO DE DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"437",
      //   descricao:" INSTALAÇÃO DE LACRES DE AÇO",
      //   localidade:""
      // },
      // {
      //   num_ng:"438",
      //   descricao:" INSTALAÇÃO DE ANGELINHO",
      //   localidade:""
      // },
      // {
      //   num_ng:"439",
      //   descricao:" SMC RETIRADA DE LIGAÇÃO DIRETA -  ASF",
      //   localidade:""
      // },
      // {
      //   num_ng:"440",
      //   descricao:" GNT - INSTALAÇÃO DE CAIXA E DISPLAY SMC",
      //   localidade:""
      // },
      // {
      //   num_ng:"441",
      //   descricao:" RETIRADA DE BYPASS DO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"442",
      //   descricao:" NORMALIZAÇÃO DO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"443",
      //   descricao:" SUBSTITUIÇÃO DA CAIXA DO DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"444",
      //   descricao:" SUBSTITUIÇÃO DA TAMPA DA CAIXA",
      //   localidade:""
      // },
      // {
      //   num_ng:"445",
      //   descricao:" SUBSTITUIÇÃO DA BATERIA DO DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"446",
      //   descricao:" SUBSTITUIÇÃO DO DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"447",
      //   descricao:" NORMALIZAÇÃO DA FIBRA OPTICA",
      //   localidade:""
      // },
      // {
      //   num_ng:"448",
      //   descricao:" INSTALAÇÃO DE DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"449",
      //   descricao:" RETIRADA DE BY-PASS",
      //   localidade:""
      // },
      // {
      //   num_ng:"450",
      //   descricao:" SUBST REDE BT PRÉ POR CABO CONC TETRA",
      //   localidade:""
      // },
      // {
      //   num_ng:"451",
      //   descricao:" INST. COMPLETA CX VIDEO CÂMERA C/MEDIDOR",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"452",
      //   descricao:" TROCA DA CAIXA DE VIDEO CAMERA",
      //   localidade:""
      // },
      // {
      //   num_ng:"453",
      //   descricao:" TROCA MEDIDOR, RAMAL,CX DISPLAY (VIDEO)",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"454",
      //   descricao:" TROCA MEDIDOR, RAMAL, TAMPA CX (VIDEO)",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"455",
      //   descricao:" TROCA RAMAL, CX C/REAPROVEIT. DO MEDIDOR",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"456",
      //   descricao:" TROCA RAMAL, TAMPA CX C/REAP. DO MEDIDOR",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"457",
      //   descricao:" TROCA DO DISPLAY GNT",
      //   localidade:""
      // },
      // {
      //   num_ng:"458",
      //   descricao:" INST. RAMAL MULTIPLEX AL MONOFÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"459",
      //   descricao:" INST. RAMAL MULTIPLEX AL BIFÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"460",
      //   descricao:" INST. RAMAL MULTIPLEX AL TRIÁSICO",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"461",
      //   descricao:" RET.CABO E INSTL RAMAL MULTIPLEX AL MONO",
      //   localidade:""
      // },
      // {
      //   num_ng:"462",
      //   descricao:" RET.CABO E INSTL RAMAL MULTIPLEX AL BIF.",
      //   localidade:""
      // },
      // {
      //   num_ng:"463",
      //   descricao:" RET.CABO E INSTL RAMAL MULTIPLEX AL TRIF",
      //   localidade:""
      // },
      // {
      //   num_ng:"464",
      //   descricao:" INSTALAÇÃO DE SENTINELA BIFASICO PGC",
      //   localidade:""
      // },
      // {
      //   num_ng:"465",
      //   descricao:" INSTALAÇÃO DE SENTINELA TRIFASICO PGC",
      //   localidade:""
      // },
      // {
      //   num_ng:"466",
      //   descricao:" NORM DA CONEXAO DE TENSAO NO MCC SENT",
      //   localidade:""
      // },
      // {
      //   num_ng:"467",
      //   descricao:" RESET NO MCC SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"468",
      //   descricao:" SUBST DA FONTE AC/DC SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"469",
      //   descricao:" SUBST DA OPERADORA SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"470",
      //   descricao:" SUBST DO CABO OPTICO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"471",
      //   descricao:" SUBST DO CABO Y SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"472",
      //   descricao:" SUBST DO CONVERSOR OPTICO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"473",
      //   descricao:" SUBST DO MCC SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"474",
      //   descricao:" RECONEXAO DO CABO OPTICO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"475",
      //   descricao:" INSTALACAO DE TELEMEDICAO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"476",
      //   descricao:" SUBST DA ANTENA SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"477",
      //   descricao:" RETIRADA DA TELEMEDICAO SENTINELA",
      //   localidade:""
      // },
      // {
      //   num_ng:"478",
      //   descricao:" INSTALACAO DE LIMITADOR DE CORRENTE",
      //   localidade:""
      // },
      // {
      //   num_ng:"479",
      //   descricao:" INDIVIDUALIZAÇÃO DE RAMAL",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"480",
      //   descricao:" INDICAÇÃO SAMURAI",
      //   localidade:""
      // },
      // {
      //   num_ng:"481",
      //   descricao:" INSTALAÇÃO DE CABO DO SINAL DE VIDEO",
      //   localidade:""
      // },
      // {
      //   num_ng:"482",
      //   descricao:" INSTALAÇÃO DE CAIXA PARA TELA LCD",
      //   localidade:""
      // },
      // {
      //   num_ng:"483",
      //   descricao:" INST CAIXA DE VIDEOCAMERA COM MEDIDOR",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"484",
      //   descricao:" SENTINELA SUBSTITUIÇÃO DE TC",
      //   localidade:""
      // },
      // {
      //   num_ng:"485",
      //   descricao:" SENTINELA SUBSTITUIÇÃO SENSOR DE ALARME",
      //   localidade:""
      // },
      // {
      //   num_ng:"486",
      //   descricao:" SENTINELA NORM LIGAÇÃO INVERTIDA",
      //   localidade:""
      // },
      // {
      //   num_ng:"487",
      //   descricao:" SENTINELA SUBST DO MEDIDOR",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"488",
      //   descricao:" SENTINELA NORM DO CABO SECUNDARIO DO TC",
      //   localidade:""
      // },
      // {
      //   num_ng:"489",
      //   descricao:" SENTINELA SUBST DE RAMAL",
      //   localidade:"Med/Ramal"
      // },
      // {
      //   num_ng:"490",
      //   descricao:" SENTINELA SUBST DE CAIXA DO MEDIDOR",
      //   localidade:""
      // },
      // {
      //   num_ng:"491",
      //   descricao:" RELOCAÇÃO DO DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"492",
      //   descricao:" SENTINELA SUBST DA TRANCA DA CAIXA",
      //   localidade:""
      // },
      // {
      //   num_ng:"493",
      //   descricao:" SENTINELA INSTALAÇÃO DE LACRE",
      //   localidade:""
      // },
      // {
      //   num_ng:"494",
      //   descricao:" SENTINELA CONEXÃO DE MCC",
      //   localidade:""
      // },
      // {
      //   num_ng:"495",
      //   descricao:" RESET NO DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"496",
      //   descricao:" SENTINELA RETIRADA DE LIGAÇÃO DIRETA",
      //   localidade:""
      // },
      // {
      //   num_ng:"497",
      //   descricao:" SENTINELA ISOLAMENTO LINHA OU CARGA",
      //   localidade:""
      // },
      // {
      //   num_ng:"498",
      //   descricao:" SENTINELA SUBST SUPORTE DE FIXAÇÃO CAIXA",
      //   localidade:""
      // },
      // {
      //   num_ng:"499",
      //   descricao:" SENTINELA REPROGRAMAÇÃO DE MEDIDOR",
      //   localidade:""
      // },
      // {
      //   num_ng:"500",
      //   descricao:" Troca de cabo do sinal de vídeo",
      //   localidade:""
      // },
      // {
      //   num_ng:"501",
      //   descricao:" Troca de caixa para tela de LCD",
      //   localidade:""
      // },
      // {
      //   num_ng:"502",
      //   descricao:" TROCA CABO SINAL VIDEO E CAIXA TELA LCD",
      //   localidade:""
      // },
      // {
      //   num_ng:"503",
      //   descricao:" INST CABO SINAL VIDEO E TROC CX TELA LCD",
      //   localidade:""
      // },
      // {
      //   num_ng:"504",
      //   descricao:" NORMALIZAÇÃO IP ACESA",
      //   localidade:""
      // },
      // {
      //   num_ng:"505",
      //   descricao:" GNT - INST DE CAIXA DAE - CONSTRUÇÃO",
      //   localidade:""
      // },
      // {
      //   num_ng:"506",
      //   descricao:" BLINDAGEM DE TRAFO",
      //   localidade:""
      // },
      // {
      //   num_ng:"507",
      //   descricao:" BLINDAGEM DE CS",
      //   localidade:""
      // },
      // {
      //   num_ng:"508",
      //   descricao:" ACERTO DE VINCULO",
      //   localidade:""
      // },
      // {
      //   num_ng:"509",
      //   descricao:" Retirada de Ligação Direta na Caixa",
      //   localidade:""
      // },
      // {
      //   num_ng:"510",
      //   descricao:" INSTAL CX C/ TRAVA ALVENARIA MONO/POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"511",
      //   descricao:" INSTAL CX C/ TRAVA POSTE MONO/POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"512",
      //   descricao:" SUBST CX C/ TRAVA ALVENARIA MONO/POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"513",
      //   descricao:" SUBST CX C/ TRAVA POSTE MONO/POLI",
      //   localidade:""
      // },
      // {
      //   num_ng:"514",
      //   descricao:" IND EXTERIORIZACAO DE CLIENTE",
      //   localidade:""
      // },
      // {
      //   num_ng:"515",
      //   descricao:" INST DE ALIMENTAÇÃO AC DISPLAY LEITURA",
      //   localidade:""
      // },
      // {
      //   num_ng:"516",
      //   descricao:" CONEXAO DE CLIENTE NO CS",
      //   localidade:""
      // },
      // {
      //   num_ng:"517",
      //   descricao:" CONFIGURAÇÃO DE DISPLAY",
      //   localidade:""
      // },
      // {
      //   num_ng:"518",
      //   descricao:" INSTALAÇÃO DE FIBRA OPTICA REFORÇADA",
      //   localidade:""
      // },
      // {
      //   num_ng:"519",
      //   descricao:" INST. DE CB PP COM LIMITADOR DE CARGA",
      //   localidade:""
      // },
      // {
      //   num_ng:"520",
      //   descricao:" INST CB PP C/LIMIT DE CARGA ENTRE POSTE",
      //   localidade:""
      // },
      // {
      //   num_ng:"521",
      //   descricao:" INSTAL. BRAÇO DE IP NA METRÓPOLE 1 METRO",
      //   localidade:""
      // },
      // {
      //   num_ng:"522",
      //   descricao:" INSTAL. BRAÇO DE IP NO INTERIOR 1 METRO",
      //   localidade:""
      // },
      // {
      //   num_ng:"523",
      //   descricao:" SUBST./MANUT BRAÇO IP  METRÓPOLE 1 METRO",
      //   localidade:""
      // },
      // {
      //   num_ng:"524",
      //   descricao:" SUBST/MANUT BRAÇO IP NO INTERIOR 1 METRO",
      //   localidade:""
      // },
      // {
      //   num_ng:"525",
      //   descricao:" INSTAL BRAÇO DE IP NA METRÓPOLE 3 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"526",
      //   descricao:" INSTAL BRAÇO DE IP NO INTERIOR 3 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"527",
      //   descricao:" SUBST/MANUT BRAÇO IP METRÓPOLE 3 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"528",
      //   descricao:" SUBST/MANUT BRAÇO IP INTERIOR 3 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"529",
      //   descricao:" INSTAL BRAÇO IP NA METRÓPOLE 3,5 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"530",
      //   descricao:" INSTAL BRAÇO IP NO INTERIOR 3,5 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"531",
      //   descricao:" SUBST/MANUT BRAÇO IP METRÓPOLE 3,5 MTS",
      //   localidade:""
      // },
      // {
      //   num_ng:"532",
      //   descricao:" SUBST/MANUT BRAÇO IP INTERIOR 3,5 METROS",
      //   localidade:""
      // },
      // {
      //   num_ng:"533",
      //   descricao:" INSTAL  ADAPT P/EQUIP DE IP NA METRÓPOLE",
      //   localidade:""
      // },
      // {
      //   num_ng:"534",
      //   descricao:" INSTAL  ADAPT P/EQUIP DE IP NO INTERIOR",
      //   localidade:""
      // }
    ])
  }
}

module.exports = ServicosTecnicoSeeder
