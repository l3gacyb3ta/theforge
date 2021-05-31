var Airtable = require('airtable');

const KEY = process.env.AIRTABLE_KEY;
var base = new Airtable({ apiKey: KEY }).base('appuvfB7PfQfd76kg');
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
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  return minifiedRecords;
}

/**
 * Grab the data for a specefic ID
 * @param {id} string - ID of the data you want
*/
export async function getPostData(id) {
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);
}