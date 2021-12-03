/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './adapters/db';
import functions from './functions';
import cities from './cities_us.json';

dotenv.config();
const { NODE_PORT, DOMAIN_DRIVEN_DINGTOI } = process.env;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const states = {
    AL: 'Alabama',
    AK: 'Alaska',
    AS: 'American Samoa',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    DC: 'District Of Columbia',
    FM: 'Federated States Of Micronesia',
    FL: 'Florida',
    GA: 'Georgia',
    GU: 'Guam',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MH: 'Marshall Islands',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    MP: 'Northern Mariana Islands',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PW: 'Palau',
    PA: 'Pennsylvania',
    PR: 'Puerto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VI: 'Virgin Islands',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
  };

  const rows = [];
  const date = new Date();

  // for (const [key, value] of Object.entries(states)) {
  //   rows.push({
  //     country_id: 2,
  //     created_at: date,
  //     updated_at: date,
  //     code: key,
  //     name: value,
  //   });
  // }

  // cities.map((city) => {
  //   rows.push({
  //     created_at: date,
  //     updated_at: date,
  //     country_id: 1,
  //     name: city[0],
  //     state_code: city[1],
  //   });
  // });

  // for (const [key, cts] of Object.entries(cities)) {
  //   cts.map((city) => {
  //     rows.push({
  //       created_at: date,
  //       updated_at: date,
  //       country_id: 2,
  //       name: city,
  //       state_code: key,
  //     });
  //   });
  // }

  try {
    await db.schema.alterTable('orders', (table) => {
      // table.string('bill_name', 255);
      // table.string('bill_address', 255);
      // table.string('bill_zip', 100);
      // table.integer('bill_city_id');
      // table.string('bill_state_code', 10);
      // table.string('bill_country_code', 2);
      table.foreign('bill_city_id').references('id').inTable('cities');
      table.foreign('bill_state_code').references('code').inTable('states');
      table.foreign('bill_country_code').references('country_code_alpha2').inTable('countries');
    });

    // await db.schema.alterTable('countries', (table) => {
    //   table.unique('country_code_alpha2');
    // });

    // await db.schema.createTable('device_exchanges', (table) => {
    //   table.increments('id').primary();
    //   table.uuid('model_id');
    //   table.uuid('device_id');
    //   table.uuid('color_id');
    //   table.uuid('capacity_id');
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.createTable('open_dispute_questions', (table) => {
    //   table.increments('id').primary();
    //   table.string('question', 255);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });
    // await db.schema.alterTable('available_devices_accessories', (table) => {
    //   // table.increments('id').primary();
    //   // table.decimal('money', 13, 2);
    //   // table.string('type', 100);
    //   // table.uuid('user_id');
    //   // table.timestamp('created_at', { useTz: true }).notNullable();
    //   // table.timestamp('updated_at', { useTz: true }).notNullable();
    //   table.foreign('available_device_id').references('id').inTable('available_devices');
    //   table.foreign('accessory_id').references('id').inTable('accessories');
    // });

    // await db.transaction(async (trx) => {
    //   await trx.batchInsert('cities', rows, 1000000);
    // });
    // await db.transaction(async (trx) => {
    //   await trx.batchInsert('states', rows, 100000);
    // });

    // await db.schema.alterTable('billings', (table) => {
    //   // table.string('state_code', 10).notNullable();
    //   table.foreign('state_code').references('code').inTable('states');
    // });

    // await db.schema.alterTable('cities', (table) => {
    //   // table.foreign('country_id').references('id').inTable('countries');
    //   // table.foreign('state_code').references('code').inTable('states');
    // });

    // await db.schema.createTable('cities', (table) => {
    //   table.increments('id').primary();
    //   table.string('state_code', 10);
    //   table.integer('country_id');
    //   table.string('name', 255).notNullable();
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });
    // await db.schema.createTable('states', (table) => {
    //   table.increments('id').primary();
    //   table.integer('country_id', 255);
    //   table.string('code', 10);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.alterTable('states', (table) => {
    //   // table.foreign('country_id').references('id').inTable('countries');
    //   // table.string('name', 255).notNullable();
    //   // table.unique(['code']);
    // });
    // await db.schema.createTable('shippings', (table) => {
    //   table.uuid('id').primary();
    //   table.string('first_name', 255);
    //   table.string('last_name', 255);
    //   table.string('address', 255);
    //   table.string('zip', 255);
    //   table.string('phone', 255);
    //   table.integer('city_id', 10);
    //   table.integer('state_id', 10);
    //   table.integer('country_id', 10);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.createTable('billings', (table) => {
    //   table.uuid('id').primary();
    //   table.string('first_name', 255);
    //   table.string('last_name', 255);
    //   table.string('address', 255);
    //   table.string('zip', 255);
    //   table.string('phone', 255);
    //   table.integer('city_id', 10);
    //   table.integer('state_id', 10);
    //   table.integer('country_id', 10);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.createTable('settings', (table) => {
    //   table.increments('id').primary();
    //   table.string('key', 255).notNullable();
    //   table.string('value', 255).notNullable();
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.createTable('questions', (table) => {
    //   table.increments('id').primary();
    //   table.string('name', 255);
    //   table.string('type', 255);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });

    // await db.schema.alterTable('questions', (table) => {
    //   table.integer('order');
    // });

    // await db.schema.alterTable('transactions_exchange', (table) => {
    //   table.jsonb('questions');
    // });

    // await db.schema.createTable('notifications', (table) => {
    //   table.increments('id').primary();
    //   table.string('name', 255);
    //   table.string('type', 255);
    //   table.string('links', 255);
    //   table.string('status', 100);
    //   table.string('email', 100);
    //   table.timestamp('created_at', { useTz: true }).notNullable();
    //   table.timestamp('updated_at', { useTz: true }).notNullable();
    // });
    res.json('hehe');
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/up`, async (req, res) => {
  try {
    // await functions.tableRefreshTokens(db, true);
    // await functions.tableAccessTokens(db, true);
    // await functions.tableClients(db, true);
    // await functions.tableSocials(db, true);
    // await functions.tableUsers(db, true);
    // await functions.tableSettings(db, true);
    // await functions.tableDeviceScans(db, true);
    // await functions.tableApiGroup(db, true);
    // await functions.tableApis(db, true);
    await functions.tableAvailabledevices(db, true);
    // await functions.tableBanners(db, true);
    // await functions.tableBillingAdress(db, true);
    // await functions.tableBrands(db, true);
    // await functions.tableCapacities(db, true);
    // await functions.tableCarts(db, true);
    // await functions.tableCategories(db, true);
    // await functions.tableColors(db, true);
    // await functions.tableCommissions(db, true);
    // await functions.tableCountries(db, true);
    // await functions.tableCreditCards(db, true);
    // await functions.tableDeviceImages(db, true);
    // await functions.tableDevices(db, true);
    // await functions.tableImeis(db, true);
    // await functions.tableModelDetailImages(db, true);
    // await functions.tableModelDetail(db, true);
    // await functions.tableModel(db, true);
    // await functions.tableScopes(db, true);
    // await functions.tableOrders(db, true);
    // await functions.tablePaypalPayment(db, true);
    // await functions.tablePermissions(db, true);
    // await functions.tableProposalExchangeSnapshots(db, true);
    // await functions.tableProposalexchanges(db, true);
    // await functions.tableProposalSaleSnapshots(db, true);
    // await functions.tableProposalSales(db, true);
    // await functions.tableRams(db, true);
    // await functions.tableRecommendDevices(db, true);
    // await functions.tableShippingAddress(db, true);
    // await functions.tableTracingCart(db, true);
    // await functions.tableTracingWishlists(db, true);
    // await functions.tableTransactions(db, true);
    // await functions.tableWishlistAvailableDevices(db, true);
    // await functions.tableWarranties(db, true);
    // await functions.tableAccessories(db, true);

    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});

app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/down`, async (req, res) => {
  try {
    // await functions.tableRefreshTokens(db, false);
    // await functions.tableWarranties(db, false);
    // await functions.tableAccessTokens(db, false);
    // await functions.tableClients(db, false);
    // await functions.tableSocials(db, false);
    // await functions.tableUsers(db, false);
    // await functions.tableSettings(db, false);
    // await functions.tableDeviceScans(db, false);
    // await functions.tableApiGroup(db, false);
    // await functions.tableApis(db, false);
    await functions.tableAvailabledevices(db, false);
    // await functions.tableBanners(db, false);
    // await functions.tableBillingAdress(db, false);
    // await functions.tableBrands(db, false);
    // await functions.tableCapacities(db, false);
    // await functions.tableCarts(db, false);
    // await functions.tableCategories(db, false);
    // await functions.tableColors(db, false);
    // await functions.tableCommissions(db, false);
    // await functions.tableCountries(db, false);
    // await functions.tableCreditCards(db, false);
    // await functions.tableDeviceImages(db, false);
    // await functions.tableDevices(db, false);
    // await functions.tableImeis(db, false);
    // await functions.tableModelDetailImages(db, false);
    // await functions.tableModelDetail(db, false);
    // await functions.tableModel(db, false);
    // await functions.tableScopes(db, false);
    // await functions.tableOrders(db, false);
    // await functions.tablePaypalPayment(db, false);
    // await functions.tablePermissions(db, false);
    // await functions.tableProposalExchangeSnapshots(db, false);
    // await functions.tableProposalexchanges(db, false);
    // await functions.tableProposalSaleSnapshots(db, false);
    // await functions.tableProposalSales(db, false);
    // await functions.tableRams(db, false);
    // await functions.tableRecommendDevices(db, false);
    // await functions.tableShippingAddress(db, false);
    // await functions.tableTracingCart(db, false);
    // await functions.tableTracingWishlists(db, false);
    // await functions.tableTransactions(db, false);
    // await functions.tableWishlistAvailableDevices(db, false);
    // await functions.tableAccessories(db, false);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});

app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update1`, async (req, res) => {
  try {
    // await functions.tableUpdateDeviceScans(db);
    await functions.tableModel(db);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update2`, async (req, res) => {
  try {
    await functions.tableAuthUserUpdate(db, true);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update3`, async (req, res) => {
  try {
    await functions.tableUpdateColors(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update4`, async (req, res) => {
  try {
    await functions.tableUpdateRams(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update5`, async (req, res) => {
  try {
    await functions.tableUpdateCapacity(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update6`, async (req, res) => {
  try {
    await functions.tableUpdateCategory(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update7`, async (req, res) => {
  try {
    await functions.tableUpdateBrand(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update8`, async (req, res) => {
  try {
    await functions.tableUpdateModel(db);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    return res.status(500, error);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update9`, async (req, res) => {
  try {
    await functions.tableModelDetailImageUpdate(db, true);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});
app.get(`${DOMAIN_DRIVEN_DINGTOI}/migration/update10`, async (req, res) => {
  try {
    await functions.tableUpdateImei(db);
    res.status(200).json({ message: 'success' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`error ${error}`);
  }
});
app.listen(NODE_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`app is listening to port ${NODE_PORT}`);
});
