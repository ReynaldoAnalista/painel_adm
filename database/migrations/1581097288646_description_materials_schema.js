'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescriptionMaterialsSchema extends Schema {
  up () {
    this.create('description_materials', (table) => {
      table.increments()
      table.string('num_ng')
      table.string('cod_material')
      table.string('desc_material')
      table.string('unid_material')
      table.string('qntd_material_ng')
      table.timestamps()
    })
  }

  down () {
    this.drop('description_materials')
  }
}

module.exports = DescriptionMaterialsSchema