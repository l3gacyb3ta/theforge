var Airtable = require('airtable');

/**
 * The Airtable API key
 * @type {string}
*/
const KEY = process.env.AIRTABLE_KEY;

/**
 * The Airtable database
 * @type {object}
*/
var base = new Airtable({ apiKey: KEY }).base('appuvfB7PfQfd76kg');

/**
 * The raw airtable table instance
 * @type {object}
*/
const table = base('datatable');

/**
 * Maps over the records, calling minifyRecord, giving us required data
*/
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

/**
 * Squooshes down a record
 * @param {record} object - The record you want to minify
*/
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

/**
 * Grabs the airtable data
*/
export default async function getPosts() {

  /**
   * The record data from airtable
   * @type {object}
  */
  const records = await table.select({}).all();

  /**
   * The minified records
   * @type {object}
  */
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}