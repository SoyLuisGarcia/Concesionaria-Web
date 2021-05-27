'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoResponsableSchema extends Schema {
  up () {
    this.create('mecanico_responsables', (table) => {
      table.increments()
      table.string('nombre',45).notNullable()
      table.string('direccion',45).notNullable()
      table.string('tel',45).notNullable()
      table.float('costoXHora').notNullable()
      table.string('categoria',45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanico_responsables')
  }
}

module.exports = MecanicoResponsableSchema
