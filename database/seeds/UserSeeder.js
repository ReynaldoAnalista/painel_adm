'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const Database = use('Database')
const uuid = use('uuid/v1')

class UserSeeder {
  async run () {
    const user = await Database.from('users').insert([
      {
        uid: uuid(),
        provider: 'local',
        first_name: 'Reynaldo',
        last_name: 'Souza',
        email: 'reynaldo.souza.3c@enel.com',
        phone_code: '55',
        phone_number: '21982875666',
        role: 'admin',
        confirmation_token: '',
        password: await Hash.make('199129')
      }
    ])

  }
}

module.exports = UserSeeder
