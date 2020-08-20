import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('itinerary', table => {
        table.integer('bus_id').notNullable()
            .references('id').inTable('bus')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.string('lat').notNullable();
        table.string('lng').notNullable();    
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('itinerary');
}