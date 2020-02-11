'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TechnicalServicesSchema extends Schema {
  up () {
    this.create('technical_services', (table) => {
      table.increments()
      table.string('descricao')
      table.string('num_ng')
      table.string('localidade')
      table.timestamps()
    })
  }

  down () {
    this.drop('technical_services')
  }
}

module.exports = TechnicalServicesSchema
