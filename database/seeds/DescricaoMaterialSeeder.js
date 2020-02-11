'use strict'

/*
|--------------------------------------------------------------------------
| DescricaoMaterialSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class DescricaoMaterialSeeder {
  async run () {
    const desc_material = await Database.from('description_materials').insert([
      {
        num_ng: "1",
        cod_material: "6772371",
        desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
        unid_material: "PEÇ",
        qntd_material_ng: "0.15"
    },
    {
        num_ng: "1",
        cod_material: "6781666",
        desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "1",
        cod_material: "6772367",
        desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "1",
        cod_material: "4545652",
        desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "1",
        cod_material: "4545653",
        desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
        unid_material: "PEÇ",
        qntd_material_ng: "2"
    },
    {
        num_ng: "1",
        cod_material: "6776693",
        desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "2",
        cod_material: "6774691",
        desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "2",
        cod_material: "6772313",
        desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "2",
        cod_material: "6772066",
        desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
        unid_material: "PEÇ",
        qntd_material_ng: "2"
    },
    {
        num_ng: "2",
        cod_material: "4555435",
        desc_material: "BUCHA PLÁSTICA S8.",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "2",
        cod_material: "6791080",
        desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
        unid_material: "M",
        qntd_material_ng: "25"
    },
    {
        num_ng: "2",
        cod_material: "1000000",
        desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
        qntd_material_ng: "6"
    },
    {
        num_ng: "2",
        cod_material: "4555433",
        desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "2",
        cod_material: "6776693",
        desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
        unid_material: "PEÇ",
        qntd_material_ng: "3"
    },
    {
        num_ng: "2",
        cod_material: "6774180",
        desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
        unid_material: "PEÇ",
        qntd_material_ng: "4"
    },
    {
        num_ng: "3",
        cod_material: "6772322",
        desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "3",
        cod_material: "6772371",
        desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
        unid_material: "PEÇ",
        qntd_material_ng: "0.3"
    },
    {
        num_ng: "3",
        cod_material: "4545652",
        desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "3",
        cod_material: "4545650",
        desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
        unid_material: "PEÇ",
        qntd_material_ng: "3"
    },
    {
        num_ng: "3",
        cod_material: "6772395",
        desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
        unid_material: "PEÇ",
        qntd_material_ng: "2"
    },
    {
        num_ng: "3",
        cod_material: "6776693",
        desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
        unid_material: "PEÇ",
        qntd_material_ng: "3"
    },
    {
        num_ng: "4",
        cod_material: "6772322",
        desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    {
        num_ng: "4",
        cod_material: "6772367",
        desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
        unid_material: "PEÇ",
        qntd_material_ng: "1"
    },
    // {
    //     num_ng: "4",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "4",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "4",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "4",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "4",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "5",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "6",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "7",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "8",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "9",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "10",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "11",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "12",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "13",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "14",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "15",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "16",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "17",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "18",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "19",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "20",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "20",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "22",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772067",
    //     desc_material: "ARMAÇÃO SEC SIMP C/ HASTE 350MM DDT-1741",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772312",
    //     desc_material: "CAIXA CONEX P/ LIG. CONSUMIDOR DDT-1748",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "23",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772067",
    //     desc_material: "ARMAÇÃO SEC SIMP C/ HASTE 350MM DDT-1741",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "21",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772312",
    //     desc_material: "CAIXA CONEX P/ LIG. CONSUMIDOR DDT-1748",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "4544661",
    //     desc_material: "POSTE, PADRÃO 7,0M X 300DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "24",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772312",
    //     desc_material: "CAIXA CONEX P/ LIG. CONSUMIDOR DDT-1748",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6789091",
    //     desc_material: "POSTE BIPARTID,PART SUPERIOR 5M-PM2216I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "25",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772312",
    //     desc_material: "CAIXA CONEX P/ LIG. CONSUMIDOR DDT-1748",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "4544704",
    //     desc_material: "POSTE ACO L7000MM, 30daN,2 ENT,PM1744 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "26",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "27",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "27",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "27",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "27",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "28",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "29",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "30",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "31",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "32",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "33",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "34",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "35",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "36",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "37",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "38",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "39",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "40",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "41",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "42",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "43",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "44",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "45",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "46",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "46",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "47",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "47",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "48",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "50",
    //     cod_material: "6772391",
    //     desc_material: "LUVA, P/PARAF.SEGURANÇA, DQN-1973 R2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "50",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "51",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "52",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "53",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "55",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "56",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "56",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "56",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "56",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "57",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "58",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "61",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "61",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "61",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "61",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "61",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "62",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "63",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "64",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "65",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "66",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "67",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "68",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "69",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "70",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "71",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "72",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "73",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "74",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "75",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "76",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "77",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "78",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "79",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "80",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "80",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "80",
    //     cod_material: "6772352",
    //     desc_material: "TAMPA SEG;CX MED BI-TRI;DED-1830",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "81",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "82",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "83",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "4544661",
    //     desc_material: "POSTE, PADRÃO 7,0M X 300DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "84",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "85",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "85",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "85",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "85",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "85",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "86",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "87",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "88",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "89",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "90",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "91",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "92",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "93",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "94",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "95",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "96",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "97",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "98",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "99",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "100",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "101",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "102",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772409",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 50A PM1715 I5 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "103",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "104",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "105",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "106",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "107",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "107",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "107",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "107",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "107",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "108",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "109",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "109",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "109",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "109",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "110",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "111",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "112",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "113",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "114",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "115",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "116",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "117",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "118",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "119",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "120",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "121",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "122",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "123",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "124",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "125",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "126",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "127",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "128",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "129",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "130",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "131",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "132",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "133",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "134",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "135",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "136",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "137",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "138",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "139",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "140",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "141",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "142",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "143",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "144",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772320",
    //     desc_material: "CURVA PVC RÍG.50MM,90° CLASSE A DDT-1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "145",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772320",
    //     desc_material: "CURVA PVC RÍG.50MM,90° CLASSE A DDT-1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "146",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "147",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "148",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "4544703",
    //     desc_material: "POSTE AÇO L5000MM,30daN,2 ENT,PM-1744 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "149",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772093",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA DUPLA,DED-0035 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "4544704",
    //     desc_material: "POSTE ACO L7000MM, 30daN,2 ENT,PM1744 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "150",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "151",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "152",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "153",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "4544661",
    //     desc_material: "POSTE, PADRÃO 7,0M X 300DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "154",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "155",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "156",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "157",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "4544661",
    //     desc_material: "POSTE, PADRÃO 7,0M X 300DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "158",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "159",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "159",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "159",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "159",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "160",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "161",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "162",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "163",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "164",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "165",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "166",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "167",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "168",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "169",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "170",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "171",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "172",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "173",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "174",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "175",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "176",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "177",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "178",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "179",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "180",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "181",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "182",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "183",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "184",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "185",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "186",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "187",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "188",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "189",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "190",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "191",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "192",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "193",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "194",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "195",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "196",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772413",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 63A PM1715 I9",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "4544703",
    //     desc_material: "POSTE AÇO L5000MM,30daN,2 ENT,PM-1744 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "197",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772092",
    //     desc_material: "ARMAÇÃO SECUNDÁRIA SIMPLES, DED-0034 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6782623",
    //     desc_material: "CABO DE AÇO COBREADO DE 16mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772397",
    //     desc_material: "DISJ TERM TRI 100A 10KA, FPM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772266",
    //     desc_material: "ISOLADOR ROLDANA, PM-0064 R6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772156",
    //     desc_material: "PARAF.CAB.QUA.150X80X16MM,DED-0045 I3 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772176",
    //     desc_material: "PORCA DE AÇO CARBONO, DED-0047 R.4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "198",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "199",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "200",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "201",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "202",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "202",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "202",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "202",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "203",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "204",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "205",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "206",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772056",
    //     desc_material: "ALÇA,PREF AÇO,CB PRE-REUN 25MM²,PM1958I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772321",
    //     desc_material: "CURVA PVC RÍG. 50MM,180° CLASSE ADDT1760",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772323",
    //     desc_material: "ELETRODUTO PVC,SOLD,50MM, DDT1740I2R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "207",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "210",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "212",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "213",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6772314",
    //     desc_material: "ABRAÇADEIRA NYLON 760mm DDT-1750 I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "214",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "217",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "221",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "221",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "221",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "221",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "221",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "222",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "222",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "223",
    //     cod_material: "4544703",
    //     desc_material: "POSTE AÇO L5000MM,30daN,2 ENT,PM-1744 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "224",
    //     cod_material: "4544704",
    //     desc_material: "POSTE ACO L7000MM, 30daN,2 ENT,PM1744 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "225",
    //     cod_material: "6771959",
    //     desc_material: "POSTE CONCRETO 5MX100DAN DED-1739 I1 R1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "226",
    //     cod_material: "4544661",
    //     desc_material: "POSTE, PADRÃO 7,0M X 300DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "227",
    //     cod_material: "6772404",
    //     desc_material: "BARRAMENTO TRIFÁSICO DED-1842 R2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "227",
    //     cod_material: "6772326",
    //     desc_material: "CAIXA DERIVAÇÃO DED-1905 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "227",
    //     cod_material: "6772052",
    //     desc_material: "CINTA AJUST.POSTE,BAP2,800MM-DDT1742I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "227",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "227",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "6772404",
    //     desc_material: "BARRAMENTO TRIFÁSICO DED-1842 R2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "6772326",
    //     desc_material: "CAIXA DERIVAÇÃO DED-1905 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "6772052",
    //     desc_material: "CINTA AJUST.POSTE,BAP2,800MM-DDT1742I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "228",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "229",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "232",
    //     cod_material: "6772338",
    //     desc_material: "TOMADA P/RELE FOTOELÉTRICO, DED-0066 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0"
    // },
    // {
    //     num_ng: "233",
    //     cod_material: "6772404",
    //     desc_material: "BARRAMENTO TRIFÁSICO DED-1842 R2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "233",
    //     cod_material: "6772326",
    //     desc_material: "CAIXA DERIVAÇÃO DED-1905 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "233",
    //     cod_material: "6772052",
    //     desc_material: "CINTA AJUST.POSTE,BAP2,800MM-DDT1742I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "233",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "233",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "6772404",
    //     desc_material: "BARRAMENTO TRIFÁSICO DED-1842 R2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "6772326",
    //     desc_material: "CAIXA DERIVAÇÃO DED-1905 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "6772052",
    //     desc_material: "CINTA AJUST.POSTE,BAP2,800MM-DDT1742I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "234",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "4574294",
    //     desc_material: "CAIXA P/MEDIDOR MONOF. VISOR,DQN-2150 R3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "248",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6776602",
    //     desc_material: "DISJUNTOR TERM BIPOLAR 40A PM1715 I4 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "249",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "250",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4574294",
    //     desc_material: "CAIXA P/MEDIDOR MONOF. VISOR,DQN-2150 R3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "251",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "5"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "26"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "7"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "252",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "253",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "253",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "255",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "255",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "255",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "256",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "256",
    //     cod_material: "4574294",
    //     desc_material: "CAIXA P/MEDIDOR MONOF. VISOR,DQN-2150 R3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "256",
    //     cod_material: "4545991",
    //     desc_material: "CINTA, METÁLICA 12,5MM - ROLO DE 30,5M",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.05"
    // },
    // {
    //     num_ng: "256",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "256",
    //     cod_material: "4545992",
    //     desc_material: "PRESILHA, METÁLICA CINTA 12,5MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "257",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "257",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "257",
    //     cod_material: "6772081",
    //     desc_material: "CONECTOR PERFURANTE, DED-1851 I4 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "258",
    //     cod_material: "6771219",
    //     desc_material: "CONJ,ADAP;INST PARAF SEG;TIPO 2;ET-195",
    //     unid_material: "UN",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "258",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "258",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "258",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "MT",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6789873",
    //     desc_material: "CABO DE AÇO COBREADO DE 6mm²",
    //     unid_material: "KG",
    //     qntd_material_ng: "0.11"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772334",
    //     desc_material: "CAIXA ATERRAMENTO DED-1855",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772312",
    //     desc_material: "CAIXA CONEX P/ LIG. CONSUMIDOR DDT-1748",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772109",
    //     desc_material: "CONEC PARAF.FEND;P/COND.CU 6-10MM FP",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772307",
    //     desc_material: "ELETRODUTO PVC,SOLD,20MM, DDT1740I1R7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.5"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772285",
    //     desc_material: "HASTE ATERRAMENTO GALVANIZADA, DED-1944",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "4544658",
    //     desc_material: "POSTE, PADRÃO 5,0M X 150DAN P/UMA CAIXA",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "262",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6774691",
    //     desc_material: "ABRAÇADEIRA NYLON 203mm DDT-1750 I.3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "1000000",
    //     desc_material: "CONECTOR - VALOR MÉDIO PARA PERDAS",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6772371",
    //     desc_material: "FITA ISOL PVC 0,18X19MMX20M,NBR60454-3-1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0.3"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "267",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "334",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "335",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "336",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "337",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "338",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "339",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "340",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "341",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "4545972",
    //     desc_material: "CAIXA, PASSAGEM 150X150MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "10"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "342",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "6"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6772057",
    //     desc_material: "ALCA,PREF ACO,CB CONC TRIP 10MM,PM1958I5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6791081",
    //     desc_material: "CABO CONCÊNTRICO BIPOLAR DE AL.16mm² ",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6775806",
    //     desc_material: "DISJUNTOR TERM TRIPOLAR 40A PM1715 I7",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "343",
    //     cod_material: "6774180",
    //     desc_material: "SUPORTE PARAFUSO,ABRAÇAD NYLON,PM1994I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "346",
    //     cod_material: "6772240",
    //     desc_material: "CONECT CUNH DERIV,VII-BRN,VERM,PM1786I10",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "346",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "346",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "346",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "347",
    //     cod_material: "6774159",
    //     desc_material: "CORDOALHA AÇO ZINC.7,9MM, PM-1903 I1 R4",
    //     unid_material: "M",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "347",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "347",
    //     cod_material: "4546408",
    //     desc_material: "TAMPA, VIDRO P/MED FAE POLIF. MOD-MF120G",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "0"
    // },
    // {
    //     num_ng: "348",
    //     cod_material: "4544703",
    //     desc_material: "POSTE AÇO L5000MM,30daN,2 ENT,PM-1744 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "350",
    //     cod_material: "6772233",
    //     desc_material: "CONECTOR CUNHA DERIV,A/VIOLETA,PM1786I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "350",
    //     cod_material: "6776481",
    //     desc_material: "RELÉ FOTOELÉTRICO 220V - DED-0073 R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "351",
    //     cod_material: "4545988",
    //     desc_material: "ELETRODUTO, PVC RÍGIDO 48MM X 3M ROSQUEÁ",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "352",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "352",
    //     cod_material: "4545986",
    //     desc_material: "ELETRODUTO, PVC RÍGIDO 26MM X 3M ROSQUEÁ",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "358",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "359",
    //     cod_material: "6794396",
    //     desc_material: "MEDIDOR ELETR BIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6772066",
    //     desc_material: "ALCA,PREF ACO,CB CONC BIP 6MM²,PM-1958I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6791080",
    //     desc_material: "CABO CONCENTRICO BIP AL 6MM,PM2234 I1 R3",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6772322",
    //     desc_material: "CX MEDIDOR MONOFASICO, PM-1946 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6772406",
    //     desc_material: "DISJUNTOR TERM MONOP 40A PM1715 I1 R11",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "362",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "363",
    //     cod_material: "6781666",
    //     desc_material: "MED ELETR,CHIP ADE7755,COMPLANT",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "6772058",
    //     desc_material: "ALCA,PREF ACO,CB PRE-REUN 16MM,PM-1958I6",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "6772392",
    //     desc_material: "CX MEDIDOR POLIFASICO, PM-1943 R4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "6794397",
    //     desc_material: "MEDIDOR ELETR TRIF,MED DIR,15(120)A,120V",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "377",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "378",
    //     cod_material: "6772395",
    //     desc_material: "PRENSA-CABO ROSQ;CB 6-12MM,PM-1749 I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "380",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "380",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "384",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "6783483",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA,VISOR-PM 2187",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "391",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "392",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "6783483",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA,VISOR-PM 2187",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "393",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "394",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6772053",
    //     desc_material: "CINTA AJUST.POSTE,BAP3,1200MM-DDT1742I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6791081",
    //     desc_material: "CONDUTOR CONC. BIPOLAR DE AL. DE 16mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6780524",
    //     desc_material: "CONEC PERF ISOL,CB 16-95/4-35MM;DED1851",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "408",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6772313",
    //     desc_material: "ABRAÇADEIRA NYLON 390MM DDT-1750 I4",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "4"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6772053",
    //     desc_material: "CINTA AJUST.POSTE,BAP3,1200MM-DDT1742I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6780524",
    //     desc_material: "CONEC PERF ISOL,CB 16-95/4-35MM;DED1851",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "409",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "410",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6772319",
    //     desc_material: "CAIXA DISJ BT100A,SUP FIX HORIZ,PM1759I1",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "411",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "4555435",
    //     desc_material: "BUCHA PLÁSTICA S8.",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "4555433",
    //     desc_material: "PARAF.FENDA,CAB.PLANA 5,0X50MMP/BUCHA S8",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "412",
    //     cod_material: "6772999",
    //     desc_material: "PRENSA-CABO ROSQ,CB 13-18MM,PM-1749 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "413",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6779848",
    //     desc_material: "CABO PRÉ-REUNIDO DE AL. 3X35+1X50mm²",
    //     unid_material: "M",
    //     qntd_material_ng: "25"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6780524",
    //     desc_material: "CONEC PERF ISOL,CB 16-95/4-35MM;DED1851",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "8"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6773387",
    //     desc_material: "PARAF ROSC DUPL 450X200X16MM DQN-1990 I2",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "4545682",
    //     desc_material: "PARAFUSO C. QUAD ACO ZINCADO 1/2    X",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "418",
    //     cod_material: "6776881",
    //     desc_material: "SUPORTE FIXAÇÃO;CX DERIVAÇÃO;DQN-2122 R3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "4558465",
    //     desc_material: "CX MEDIDOR POLIF.C/VISOR;PM-2093",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "6772405",
    //     desc_material: "DISJUNTOR, TERMOMAGNÉTICO MONOPOLAR, CAI",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "4545682",
    //     desc_material: "PARAFUSO C. QUAD ACO ZINCADO 1/2    X",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "419",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "437",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "510",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "6783483",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA,VISOR-PM 2187",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "511",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "6779723",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA-PM 2157",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "512",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "6783483",
    //     desc_material: "CX.MEDID.POLIF+TRAVA,TAMPA,VISOR-PM 2187",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "6772367",
    //     desc_material: "PARAF SEGUR P/CX MEDIDOR, DED-1934 R.5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "4545652",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X1\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "4545653",
    //     desc_material: "PARAF.C.LIMÃO C/FENDA FE ZINC.3/16X3/8\"",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "2"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "4545650",
    //     desc_material: "PARAF.CABÇ.CILÍND.FENDA FE ZINC.6,3X16MM",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "6774165",
    //     desc_material: "PRENSA-CABO ROSQ;CB3X7,9-9,6MM;PM-1749I3",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "1"
    // },
    // {
    //     num_ng: "513",
    //     cod_material: "6776693",
    //     desc_material: "SELO,SEGUR;CB AÇO;LARANJA;DQN-1992 I3R5",
    //     unid_material: "PEÇ",
    //     qntd_material_ng: "3"
    // }
    ])
  }
}

module.exports = DescricaoMaterialSeeder
