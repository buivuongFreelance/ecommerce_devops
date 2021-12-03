const tableDeviceScans = async (db, isCreate) => {
  try {
    const t = 'device_scans';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.timestamp('timestamp', { useTz: true }).primary();
          table.uuid('auth_user_id').notNullable();
          table.jsonb('main_info').notNullable();
          table.string('type', 20).notNullable();
          table.string('main_url', 255).notNullable();
          table.string('device_id', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableSettings = async (db, isCreate) => {
  try {
    const t = 'settings';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('key', 255).notNullable();
          table.string('value', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
        const date = new Date();
        await db(t).insert([
          {
            key: 'timer',
            value: '15',
            created_at: date,
            updated_at: date,
          },
          {
            key: 'dingtoi_pro_price',
            value: '1.12',
            created_at: date,
            updated_at: date,
          },
          {
            key: 'twilio_number',
            value: '12345678',
            created_at: date,
            updated_at: date,
          },
          {
            key: 'dingtoi_pro_id',
            value: 'advanced_scan',
            created_at: date,
            updated_at: date,
          },
          {
            key: 'timer_basic',
            value: '15',
            created_at: date,
            updated_at: date,
          },
        ]);
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableRefreshTokens = async (db, isCreate) => {
  try {
    const t = 'auth_refresh_tokens';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('refresh_token', 255).notNullable();
          table.integer('auth_client_id').notNullable();
          table.uuid('auth_user_id').notNullable();
          table.string('ip_address', 255);
          table.string('user_agent', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableAccessTokens = async (db, isCreate) => {
  try {
    const t = 'auth_access_tokens';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('access_token', 255).notNullable();
          table.integer('auth_client_id').notNullable();
          table.uuid('auth_user_id').notNullable();
          table.string('ip_address', 255);
          table.string('user_agent', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableClients = async (db, isCreate) => {
  try {
    const t = 'auth_clients';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('client_public', 255).notNullable().unique();
          table.string('client_secret', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });

        const date = new Date();
        await db(t).insert([
          {
            client_public: 'dingtoi',
            client_secret: 'b8beaf678cdb',
            created_at: date,
            updated_at: date,
          },
          {
            client_public: 'dingtoiAdmin',
            client_secret: 'secretadmin',
            created_at: date,
            updated_at: date,
          },
          {
            client_public: 'dingtoiSocial',
            client_secret: 'secretsocial',
            created_at: date,
            updated_at: date,
          },
          {
            client_public: 'dingtoiPro',
            client_secret: 'dingtoiprosecret',
            created_at: date,
            updated_at: date,
          },
        ]);
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableSocials = async (db, isCreate) => {
  try {
    const t = 'auth_socials';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('name', 255).notNullable().unique();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
        const date = new Date();
        await db(t).insert([
          {
            name: 'dingtoi',
            created_at: date,
            updated_at: date,
          },
          {
            name: 'facebook',
            created_at: date,
            updated_at: date,
          },
          {
            name: 'google',
            created_at: date,
            updated_at: date,
          },
        ]);
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};

const tableUsers = async (db, isCreate) => {
  try {
    const t = 'auth_users';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('email', 255).unique();
          table.string('phone', 255).unique();
          table.string('password', 255).notNullable();
          table.uuid('password_reset_token');
          table.boolean('active').defaultTo(false).notNullable();
          table.uuid('active_code');
          table.string('image_url', 255);
          table.integer('auth_client_id').notNullable();
          table.integer('auth_social_id').notNullable();
          table.double('wallet', 2).defaultTo(0);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'succcess';
  } catch (error) {
    return error;
  }
};
const tableApiGroup = async (db, isCreate) => {
  try {
    const t = 'api_groups';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('name', 255).notNullable().unique();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'success';
  } catch (error) {
    return error;
  }
};

const tableApis = async (db, isCreate) => {
  try {
    const t = 'apis';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('method', 255).notNullable().unique();
          table.string('path', 255).notNullable().unique();
          table.integer('api_group_id').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'success';
  } catch (error) {
    return error;
  }
};
const tableAvailabledevices = async (db, isCreate) => {
  try {
    const t = 'available_devices';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('device_id').notNullable();
          table.double('sale_price');
          table.decimal('real_sale_price', 13, 2);
          table.double('exchange_price');
          table.decimal('real_exchange_price', 13, 2);
          table.uuid('exchange_model_id');
          table.jsonb('accessories');
          table.timestamp('warranty_expire_date', { useTz: true });
          table.text('additional_accessories');
          table.text('additional_warranty');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableBanners = async (db, isCreate) => {
  try {
    const t = 'banners';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('name', 255).notNullable();
          table.string('image_url', 255).notNullable();
          table.string('public_id', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'success';
  } catch (error) {
    return error;
  }
};
const tableBillingAdress = async (db, isCreate) => {
  try {
    const t = 'billing_address';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('userId');
          table.string('receiverName', 255).notNullable();
          table.string('streetAddress', 500).notNullable();
          table.string('extendedAddress').notNullable();
          table.integer('zipCode');
          table.string('cityName', 255).notNullable();
          table.string('stateName', 255).notNullable();
          table.integer('countryId');
          table.string('instruction', 1000).notNullable();
          table.string('securityCode', 255).notNullable();
          table.integer('weekendDeliverySaturday').notNullable();
          table.integer('weedDeliverySunday').notNullable();
          table.string('phoneNumber', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableBrands = async (db, isCreate) => {
  try {
    const t = 'brands';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('name', 255).notNullable();
          table.text('image_url').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCapacities = async (db, isCreate) => {
  try {
    const t = 'capacities';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.integer('value').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCarts = async (db, isCreate) => {
  try {
    const t = 'carts';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('userId');
          table.uuid('availableDeviceId').primary();
          table.string('name', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.uuid('tracingCartId').notNullable();
          table.integer('pending').notNullable();
          table.string('type');
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCategories = async (db, isCreate) => {
  try {
    const t = 'categories';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('name', 255).notNullable();
          table.text('image_url');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableColors = async (db, isCreate) => {
  try {
    const t = 'colors';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('name', 255).notNullable();
          table.string('color_code', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCommissions = async (db, isCreate) => {
  try {
    const t = 'commissions';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.double('percent').notNullable();
          table.double('amounts').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCountries = async (db, isCreate) => {
  try {
    const t = 'countries';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.string('name', 255).notNullable();
          table.string('countrycodealpha3', 3).notNullable();
          table.string('countrycodealpha2', 2).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableCreditCards = async (db, isCreate) => {
  try {
    const t = 'credit_cards';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('number', 19).notNullable();
          table.string('name', 255).notNullable();
          table.timestamp('expiry', { useTz: true }).notNullable();
          table.string('cvc', 3).notNullable();
          table.uuid('userId').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableDeviceImages = async (db, isCreate) => {
  try {
    const t = 'device_images';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.uuid('device_id').notNullable();
          table.text('url');
          table.string('main');
          table.string('public_id', 255).notNullable();
          table.text('thumbnail_url');
          table.string('thumbnail_public_id', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableDevices = async (db, isCreate) => {
  try {
    const t = 'devices';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('imei_id').notNullable();
          table.uuid('user_id').notNullable();
          table.string('physical_grading').notNullable();
          table.uuid('ram_id').notNullable();
          table.uuid('capacity_id').notNullable();
          table.uuid('color_id').notNullable();
          table.string('status').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};

const tableImeis = async (db, isCreate) => {
  try {
    const t = 'imeis';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('imei', 255).notNullable();
          table.uuid('model_id').notNullable();
          table.uuid('ram_id').notNullable();
          table.uuid('capacity_id').notNullable();
          table.uuid('color_id').notNullable();
          table.jsonb('other_detail');
          table.double('original_price');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};

const tableModelDetailImages = async (db, isCreate) => {
  try {
    const t = 'model_detail_images';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.text('url');
          table.string('public_id').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableModelDetail = async (db, isCreate) => {
  try {
    const t = 'model_details';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('modelId').notNullable();
          table.uuid('ramId').notNullable();
          table.uuid('capacityId').notNullable();
          table.uuid('colorId').notNullable();
          table.jsonb('otherDetails');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.string('name', 255).notNullable();
          table.double('originalPrice');
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableModel = async (db, isCreate) => {
  try {
    const t = 'models';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.string('name', 255).notNullable();
          table.text('image_url');
          table.uuid('brand_id').notNullable();
          table.uuid('category_id').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableScopes = async (db, isCreate) => {
  try {
    const t = 'scopes';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.string('scope', 255).notNullable();
          table.boolean('is_default');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableOrders = async (db, isCreate) => {
  try {
    const t = 'orders';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.double('totalMoney').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.uuid('userId').notNullable();
          table.string('status', 255);
          table.integer('pending').notNullable();
          table.uuid('shippingAddressId').notNullable();
          table.uuid('billingAddressId').notNullable();
          table.double('filnalMoney').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tablePaypalPayment = async (db, isCreate) => {
  try {
    const t = 'paypal_payment';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.string('id', 255).primary();
          table.string('type', 255).notNullable();
          table.string('currencylsoCode', 255).notNullable();
          table.double('amount').notNullable();
          table.uuid('orderId').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tablePermissions = async (db, isCreate) => {
  try {
    const t = 'permissions';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.integer('user_type_id').notNullable();
          table.integer('api_id', 255).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableProposalExchangeSnapshots = async (db, isCreate) => {
  try {
    const t = 'proposal_exchange_snapshots';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.uuid('proposal_exchange_id').notNullable();
          table.uuid('cart_id').notNullable();
          table.uuid('seller_id').notNullable();
          table.uuid('buyer_id').notNullable();
          table.double('propotal_exchange_price').notNullable();
          table.integer('type');
          table.string('status');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.integer('recommend_devices');
          table.uuid('proposal_exchange_devices').notNullable();
          table.double('buyer_price').notNullable();
          table.double('seller_price').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableProposalexchanges = async (db, isCreate) => {
  try {
    const t = 'proposal_exchanges';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('cart_id').notNullable();
          table.uuid('seller_id').notNullable();
          table.uuid('buyer_id').notNullable();
          table.double('proposal_exchange_price');
          table.integer('type');
          table.string('status', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.integer('recommend_devices');
          table.uuid('proposal_exchange_devices').notNullable();
          table.double('buyer_price').notNullable();
          table.double('seller_price').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableProposalSaleSnapshots = async (db, isCreate) => {
  try {
    const t = 'proposal_sale_snapshots';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.uuid('proposal_sale_id').notNullable();
          table.uuid('cart_id').notNullable();
          table.uuid('seller_id').notNullable();
          table.uuid('buyer_id').notNullable();
          table.double('sale_proposal_price').notNullable();
          table.integer('type').notNullable();
          table.string('status', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.double('buyer_price').notNullable();
          table.double('seller_price').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableProposalSales = async (db, isCreate) => {
  try {
    const t = 'proposal_sales';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('cart_id').notNullable();
          table.uuid('seller_id').notNullable();
          table.uuid('buyer_id').notNullable();
          table.double('sale_proposal_price').notNullable();
          table.integer('type').notNullable();
          table.string('status', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.double('buyer_price');
          table.double('seller_price').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableRams = async (db, isCreate) => {
  try {
    const t = 'rams';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.integer('value').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableRecommendDevices = async (db, isCreate) => {
  try {
    const t = 'recommend_devices';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.string('brand', 50).notNullable();
          table.string('category', 50).notNullable();
          table.string('model', 100).notNullable();
          table.jsonb('detail').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.string('image', 255);
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableShippingAddress = async (db, isCreate) => {
  try {
    const t = 'shipping_address';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('userId').notNullable();
          table.string('receiverName', 255).notNullable();
          table.string('streetAddress', 500).notNullable();
          table.string('extendedAddress', 500).notNullable();
          table.integer('zipCode').notNullable();
          table.string('cityName', 255);
          table.string('stateName', 255);
          table.integer('countryId');
          table.string('instruction', 1000);
          table.string('securityCode', 255);
          table.integer('weekendDeliverySaturday');
          table.integer('weekendDeliverySunday');
          table.string('phoneNumber');
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableTracingCart = async (db, isCreate) => {
  try {
    const t = 'tracing_cart';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('availableDeviceId').notNullable();
          table.uuid('token').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.integer('synchronous').notNullable();
          table.string('type', 255);
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableTracingWishlists = async (db, isCreate) => {
  try {
    const t = 'tracing_wishlists';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('availableDeviceId').notNullable();
          table.uuid('token').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.integer('synchronous').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableTransactions = async (db, isCreate) => {
  try {
    const t = 'transactions';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.uuid('id').primary();
          table.uuid('orderId').notNullable();
          table.uuid('proposalSaleId').notNullable();
          table.uuid('proposalExchangeId').notNullable();
          table.double('money');
          table.string('status', 255);
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.string('transactionCode').notNullable();
          table.double('finalMoney');
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableWishlistAvailableDevices = async (db, isCreate) => {
  try {
    const t = 'wishlist_available_devices';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.integer('id').primary();
          table.uuid('userId').notNullable();
          table.uuid('availableDeviceId').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
          table.timestamp('deleted_at', { useTz: true });
          table.uuid('tracingWishlistId').notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableAuthUserUpdate = async (db, isCreate) => {
  try {
    const t = 'auth_users';
    const exists = await db.schema.hasColumn(t, 'password_temp');
    if (isCreate) {
      if (!exists) {
        await db.schema.table(t, (table) => {
          table.string('password_temp', 255);
        });
      }
    } else if (exists) {
      await db.schema.dropColumn('password_temp');
    }

    return 'success';
  } catch (error) {
    return error;
  }
};
const tableUpdateColors = (db) => new Promise((resolve, reject) => {
  // const date = new Date();
  db('colors').insert(
    [
      // {
      //   id: 'b3cc040c-75b4-4575-bb92-fe212513bd9f',
      //   name: 'White',
      //   color_code: 'FFFFFF',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '8d4de479-b7b2-4cc1-a7ee-9e5b9dc69f36',
      //   name: 'Red',
      //   color_code: 'FF0000',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'b4c68383-5b60-4344-91c9-04d3eea9addf',
      //   name: 'Silver',
      //   color_code: 'C0C0C0',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '522bc1eb-9374-4816-9059-6fecab2e3508',
      //   name: 'Space Gray',
      //   color_code: 'a5adb0',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '83e192ef-aded-4635-b113-2a755cd2583e',
      //   name: 'Gold',
      //   color_code: 'FFDF00',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '13df10d2-7a5f-4c0d-8f55-796dc08741a1',
      //   name: 'Midnight Green',
      //   color_code: '4E5851',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '25e30279-a636-434d-a550-102a18881129',
      //   name: 'Green',
      //   color_code: '8db600',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '1f8bac35-db5d-4b9d-8c8b-9fae93fdd67e',
      //   name: 'Yellow',
      //   color_code: 'FFFF00',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'd24026f6-b4aa-4dff-b7f0-b21bba4f7cc4',
      //   name: 'Purple',
      //   color_code: '800080',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'e02a9cf6-ef5d-458e-a5fb-dd617e95bf44',
      //   name: 'Titanium frame: Space Black',
      //   color_code: '68686b',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '7efef29e-09f1-4b40-bbc5-d6962f738178',
      //   name: 'TitaniumCeramic frame: White',
      //   color_code: 'd6d1d1',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '17691a94-5d0b-4c3c-b437-e80b3a7cc882',
      //   name: 'Space Black',
      //   color_code: '343435',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'd5f88ec7-e229-4852-8dc2-09397f17c118',
      //   name: 'Coral',
      //   color_code: 'ff7f50',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '556e1975-f400-44dd-b90b-a0a3eacdf106',
      //   name: 'Blue',
      //   color_code: '0000FF',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '295e3012-9553-4f4e-bc3e-5c578a5f4e94',
      //   name: 'Rose Gold',
      //   color_code: 'b76e79',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'b0d9d85d-6fc9-4de5-8c30-402bc9b0367c',
      //   name: 'silver case',
      //   color_code: 'D1D3D4',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7ccaf8aa-b83a-41c0-b902-c6656e296a3d',
      //   name: 'black',
      //   color_code: '000000',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '2355d13a-1df9-437b-9bbf-4b55d4d1c07a',
      //   name: 'silver white',
      //   color_code: 'c0c0c0',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'd01bb716-4647-4787-a119-9886827b70be',
      //   name: 'brown',
      //   color_code: 'A52A2A',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7dc4b8d5-251c-4b69-bc66-3998b72baefd',
      //   name: 'rose white',
      //   color_code: 'ffebd7',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'bddd06b1-819f-4e31-9dc0-7dcb2caa90cf',
      //   name: 'blackLeather',
      //   color_code: '253529',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '36c5525f-45a6-48d3-a3eb-fe60e7fc8116',
      //   name: 'gray',
      //   color_code: '808080',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '2b27f000-fd38-4add-8db1-87c89672d70f',
      //   name: 'orange',
      //   color_code: 'FFA500',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '33c16f45-f82e-41f2-abc7-b7d4e81252f4',
      //   name: 'sport',
      //   color_code: 'ffc836',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '1e6d296d-287a-4b88-8e30-22fc839b7ab6',
      //   name: 'Jet Black',
      //   color_code: '0A0A0A',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '10be1880-0374-46ef-944b-ac1745ec5a23',
      //   name: 'Rose Gold',
      //   color_code: 'b76e79',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4c866f42-b988-4468-a944-7e9c8cb8348c',
      //   name: 'Yellow Gold',
      //   color_code: 'FFDF00',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '093d9869-adf5-4a59-8bcf-167023cdbe7c',
      //   name: 'Black Buckle',
      //   color_code: '8B2332',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7a1dc287-2f5a-4c0c-a74c-2ab1782c4640',
      //   name: 'Yellow Black',
      //   color_code: '9B870C',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '3186f578-d9af-4126-8017-beef30f61b93',
      //   name: 'Red Buckle',
      //   color_code: '365ebf',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'd836771d-2e62-463c-a754-23a436d02f13',
      //   name: 'Marine',
      //   color_code: '1e3f5a',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7c4c7348-0c67-4c7a-aed2-53c8f99a94ef',
      //   name: 'Stone',
      //   color_code: '888c8d ',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '1597ae2c-a62d-4c1b-be83-c15d0cf6f678',
      //   name: 'Storm',
      //   color_code: '747880',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'e00e606c-0a42-484e-9e34-3c07e71b67e5',
      //   name: 'Marigold',
      //   color_code: 'FBEA74',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'c32ee312-69da-4b0f-893f-726cdb696096',
      //   name: 'Jay ',
      //   color_code: '015d87',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'ccdcd60c-016e-441d-8b0d-6f1cb7dd88be',
      //   name: 'Stainless Steel/Red',
      //   color_code: '303B',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'a50db503-5e58-40da-beb3-b60c4efc60a0',
      //   name: 'Brown buckle',
      //   color_code: 'a48561',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'ae5012d6-1ed2-42e4-a9f0-e2237c9a4c6f',
      //   name: 'red buckle',
      //   color_code: '3c6ea8',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '9345b716-9d19-4e71-aee0-c90d0f64ce98',
      //   name: 'blue buckle',
      //   color_code: '3c6ea8',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'e96df095-9b3d-490b-b638-13fdc17acf9c',
      //   name: 'Marigold buckle',
      //   color_code: 'eaa221',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '86d186d2-fb0c-48c0-8775-33d766f6d5a1',
      //   name: 'Slate',
      //   color_code: '696969',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'bb558434-9c1f-4200-bbe6-00273b3f08c1',
      //   name: 'Prism Cube Black',
      //   color_code: '191919',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '0c429a02-05de-4ec2-9a52-8eea4516b908',
      //   name: 'Prism Cube Silver',
      //   color_code: 'E7EEE7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '3b248b65-e212-41fa-b666-71c86616b008',
      //   name: 'Prism Cube blue',
      //   color_code: 'E6E6FA',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'fe37b9e6-02be-4114-a39b-654b74f4b07b',
      //   name: 'Metallic Blue',
      //   color_code: '32527b',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '5bd5e757-1c31-4dd4-b167-01e22641101b',
      //   name: 'Violet',
      //   color_code: 'EE82EE',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '38b059bf-a82d-46ac-a66d-18ccb090e715',
      //   name: 'Chiffon Pink',
      //   color_code: 'eddce0',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'f9b6c238-1e44-4978-a56f-a8906cc0739e',
      //   name: 'Angora Blue',
      //   color_code: 'b9c7d8',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '540ca3e2-da5b-41e8-83e9-d6d0d6dea8d6',
      //   name: 'Oxford Gray',
      //   color_code: '616d71',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'a0b7f057-e533-4b54-b21e-ab9a05a2c1c0',
      //   name: 'Prism Crush Red',
      //   color_code: '8B0000',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'de70c9fb-9d24-49e2-9c42-e887f8ba13e5',
      //   name: 'Prism Crush black',
      //   color_code: '808080',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'f40dafee-19fb-4481-9ccb-184136049c21',
      //   name: 'Prism Crush blue',
      //   color_code: '6495ED',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '3c0fcaba-c148-4cfa-a946-83b5c3d516f1',
      //   name: 'Prism Crush white',
      //   color_code: 'FFF5EE',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '893aab04-de8d-4bce-b96f-ffbdd3fe18f1',
      //   name: 'Prism Crush silver',
      //   color_code: 'FFFAFA',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '55c37706-699a-49c9-98c1-cce0acb8d1c1',
      //   name: 'Midnight Blue',
      //   color_code: '191970',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '62877ec4-70fa-46e3-a33c-fcf73ffec3d5',
      //   name: 'Raven Black',
      //   color_code: '141a16',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '040102bd-0c40-4c97-9976-374aaa833985',
      //   name: 'Ocean Blue',
      //   color_code: '0077be ',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'a27d6eb9-fee4-4e09-a326-2ea2f1933c44',
      //   name: 'Cosmic Grey',
      //   color_code: 'b7b2af',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'db299d7c-2e8e-4739-abb1-fce820c8bbf7',
      //   name: 'Cosmic Black',
      //   color_code: '1C1C26',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'bf609d73-12b1-465c-b14a-0276a7563775',
      //   name: 'Cloud White',
      //   color_code: 'f0f5d8',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'c71a2e8d-b91d-4283-a2bc-181a6326c7a9',
      //   name: 'Cloud Blue',
      //   color_code: 'd0deec',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '71ee6e73-d644-4167-b511-852d9cc73758',
      //   name: 'Aura Red',
      //   color_code: '626c86',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7cc09cfa-0b29-484e-9883-56f2512ecd40',
      //   name: 'Aura blue',
      //   color_code: 'adc5dd',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'b5977070-cdf5-4835-b906-634f25585720',
      //   name: 'Cloud Pink',
      //   color_code: 'eed1c7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '29a86eb5-941c-4b72-a026-ada18229ab1b',
      //   name: 'Mirror Black',
      //   color_code: '00020C',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'dd1388f1-f4e5-4d0b-b251-9b658e9c904e',
      //   name: 'Mirror Purple',
      //   color_code: 'd4e1ec',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7ef803cf-0cac-487c-8e16-0978d6f62fdc',
      //   name: 'Mirror Gold',
      //   color_code: 'd4af37',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'af85b361-9f7f-4c6f-81e3-5e3a4e8fe259',
      //   name: 'Thom Browne Edition',
      //   color_code: 'FFF8DC',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'e89381d4-37eb-43fe-85aa-e34bb1718db5',
      //   name: 'Mountain Gray',
      //   color_code: '7a7372',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7f95ec23-5e54-41bc-ac3c-2065fc026014',
      //   name: 'Aura Glow',
      //   color_code: 'ffe5a9',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '3aa9b1b0-0d02-4bf4-8acd-4781e4bdd26d',
      //   name: 'Aura Black',
      //   color_code: '626c86',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'c8a78957-a8ae-49da-9b18-a4bf9ef6a207',
      //   name: 'Prism White',
      //   color_code: 'E1D8CB',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '6e492eee-447b-4934-a5d6-defdcaf4875a',
      //   name: 'Prism Black',
      //   color_code: 'b4dcf0',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4d951021-dd42-4cb0-af34-e3af2f2110ac',
      //   name: 'Prism Blue',
      //   color_code: 'e7eee7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9d21017b-d00d-4f8f-8399-1bab972c53e5',
      //   name: 'Crush Black',
      //   color_code: '80444c',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'ea5965ab-6d02-4f2d-b2ae-8079c41ae9f0',
      //   name: 'Prism',
      //   color_code: 'e7eee7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '50c6805e-1b72-45c0-823b-49b211fcc7f7',
      //   name: 'Opal Black',
      //   color_code: '2c3241',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'b689407d-cb68-4ba4-8ddc-a0e5dfd6be95',
      //   name: 'Sapphire Blue',
      //   color_code: '0f52ba',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '2b3978cb-2935-43dc-854c-0581bae37384',
      //   name: 'Pearl White',
      //   color_code: 'eeebd9',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'da679062-20f4-4bda-a188-284324cba0ab',
      //   name: 'Stone Blue',
      //   color_code: '759194',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '36564c52-9259-48d2-8b4f-cbf5137a275b',
      //   name: 'Piano Black',
      //   color_code: '464648',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7d8c19d0-b525-419b-a422-689e0f002131',
      //   name: 'Space Silver',
      //   color_code: 'aaa9ad',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '67473b38-226d-486e-8525-42321c59c94f',
      //   name: 'Cosmos Black',
      //   color_code: '95afd4',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9e58439f-62f0-4e65-ab61-29da9eedc394',
      //   name: 'Martian Green',
      //   color_code: 'b7d82c',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '21bdddbf-561b-4cc3-82a3-9d5270ab0aef',
      //   name: 'Astro Blue',
      //   color_code: '005897',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'ecee830c-d3e3-4807-9003-af9343f79f86',
      //   name: 'Prism Crush Green',
      //   color_code: 'e7eee7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '8a03fd0f-e79b-40b3-a694-eba0a8da40b4',
      //   name: 'Prism Crush Violet2',
      //   color_code: '9400D3',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '7aeb1d78-26ae-4e49-b601-8edc0afd7df5',
      //   name: 'Aura White',
      //   color_code: 'f2f2fa',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'd81bfd99-032d-4b39-97bc-cf7f97d543a4',
      //   name: 'Aura Pink',
      //   color_code: 'ffc0cb',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '64803f7c-7705-4888-afa0-10526dd75f91',
      //   name: 'Aqua Black',
      //   color_code: '00FFFF',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '2f9b71e9-eaa7-4247-837b-2ab27589d13c',
      //   name: 'Pink Gold',
      //   color_code: 'b76e79',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'f80f43b1-299e-4ed6-accd-bcb8c08fd357',
      //   name: 'Rose Blush',
      //   color_code: 'eacac2',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '26909da7-4e51-4aad-baab-0f33cb76f593',
      //   name: 'Carbon Black',
      //   color_code: '293542',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '50ddcffa-1ad5-4115-8081-adf67a1943e2',
      //   name: 'Silver Gray',
      //   color_code: 'D3D3D3',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'a275cd9f-9a93-464e-a7f8-c3da5d839fdd',
      //   name: 'Sea Green',
      //   color_code: '2e8b57',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '202bfda7-7ac0-47de-9682-b70d550017ac',
      //   name: 'Dark Grey',
      //   color_code: 'A9A9A9',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '10cddcbb-bb13-472f-b7c7-4a4104e62cac',
      //   name: 'Crown Silver',
      //   color_code: 'b1a5aa',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'bfad858a-5c7b-4bea-9e20-e3f0fb13cb4a',
      //   name: 'Majestic Black',
      //   color_code: 'NH-893P',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '1ecdcbaa-46f6-431a-b9c5-3b4c80767af4',
      //   name: 'Royal Gold',
      //   color_code: 'ffbd1b',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '59b5a4d5-2fd9-4bb1-b569-d7004e2ce6c3',
      //   name: 'Canary Yellow',
      //   color_code: 'ffef00',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'eb112bbe-218e-4cf3-832c-51f53ba51501',
      //   name: 'Flamingo Pink',
      //   color_code: 'fc8eac',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '26816599-8f6b-4467-8ed9-03bd43db2205',
      //   name: 'Ceramic white',
      //   color_code: 'd6d1d1',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9278c710-9bd8-4788-9bf4-1c17efe7c769',
      //   name: 'Ceramic black',
      //   color_code: 'FEFFFD',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '8ae5d8d1-e842-4633-a1e4-9418e424a974',
      //   name: 'Cardinal Red',
      //   color_code: 'BD2031',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4194af6a-a2e0-4fcd-b672-d653173159c4',
      //   name: 'Smoke Blue',
      //   color_code: '829ba6',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'cc5cb26d-f3f0-4c97-ae02-7b2cb7e6ff41',
      //   name: 'Seawater Blue',
      //   color_code: '0077be',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: 'bbe8480f-0d90-4aaa-b570-cc24a258b5aa',
      //   name: 'Midnight Blue',
      //   color_code: '191970',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9e4a0570-e304-4fa3-8fa4-e2935cfa6483',
      //   name: 'Cocktail Orange',
      //   color_code: 'fa9e49',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '18e95dac-00cc-4d91-b8b4-727eb039a386',
      //   name: 'Charcoal Black',
      //   color_code: '333333',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'dbfd98c6-6a0f-4600-8a2f-a319f9592750',
      //   name: 'Angel Gold',
      //   color_code: 'EEE8AA',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '731e3a9f-cad2-4ade-9442-3126a5479729',
      //   name: 'Ghost White',
      //   color_code: 'f8f8ff',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '3fa17491-62c5-456f-9aa8-ce8d378abbbe',
      //   name: 'Phantom Black',
      //   color_code: '2d3134',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '971ba2cd-5e1e-4294-9531-e7326f2290e7',
      //   name: 'Daybreak Black',
      //   color_code: 'f1eae7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '3fb9f398-3693-4a1b-b7d1-a8747ec3bed7',
      //   name: 'Peach Mist',
      //   color_code: 'FADAC6',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '89ec55e3-f020-435f-96e0-c18f41421e6a',
      //   name: 'Pink-Blue',
      //   color_code: 'FF1493',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '60e69130-bdc8-4ac8-be42-40fce328215a',
      //   name: 'Yellow-Pink',
      //   color_code: 'd0a946',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '2e459ad1-f281-4622-b6bb-9cb3bc672510',
      //   name: 'Caviar Black',
      //   color_code: '313031',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'cdfd6c25-84f4-4cdc-b81f-a47316b2723c',
      //   name: 'Lemonade Blue',
      //   color_code: '0063b2',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9f525245-241e-43fe-a7e9-7631620cac5d',
      //   name: 'Bubblegum Pink',
      //   color_code: 'ffc1cc',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '949951cc-1d43-445c-8836-7fd814ea1b40',
      //   name: 'Metallic Copper',
      //   color_code: 'b87333',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '5faa5cb8-72b9-4ec7-b4fe-27706b4ad02e',
      //   name: 'Lavender',
      //   color_code: 'E6E6FA',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '07f0491b-f52d-47d1-a67f-b72e80d6149e',
      //   name: 'Pure White',
      //   color_code: 'cfccc7',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '18ecaa19-d03d-462a-9005-dabd80fb33eb',
      //   name: 'Alpine White',
      //   color_code: 'fffee9',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'd95603c5-fe90-4d0e-b04b-e3a1baf7499f',
      //   name: 'Lavender purple',
      //   color_code: '800080',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'c9105c16-2c42-49aa-a4ee-19bd513b3e38',
      //   name: 'orchid grey',
      //   color_code: 'b7a8ba',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9b79a028-be00-4f68-b55b-c405d26d5027',
      //   name: 'Black Night',
      //   color_code: '1b1e23',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '6b2a1e5d-868d-4fd1-80d4-d85b022abcc4',
      //   name: 'Orchid Gray',
      //   color_code: 'b7a8ba',
      //   created_at: date,
      //   updated_at: date,
      // },
      // {
      //   id: '93066506-88ed-4989-9747-4df0e721a1c0',
      //   name: 'Titanium Gray',
      //   color_code: '565f6b',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'bee73f43-1f4e-496b-b3d0-cdd8e2f4ca66',
      //   name: 'Lilac Purple',
      //   color_code: 'C8A2C8',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4d3af9a4-1df0-4f98-afa9-10fc09d0efe2',
      //   name: 'Burgundy Red',
      //   color_code: '800020',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7c9aef2a-4f4a-4a65-90fe-2a97deb2c0bc',
      //   name: 'Sunrise Gold',
      //   color_code: '9a7149',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '12948b49-c6f7-42f1-8d89-35fb6573c836',
      //   name: 'Ice Blue',
      //   color_code: 'A5F2F3',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '465df3e1-4ba7-4809-8e1e-b27fdbac142b',
      //   name: 'Polaris Blue',
      //   color_code: '7d949f',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '7f8769d1-6ab0-4184-80c1-afe1a65814be',
      //   name: 'Maple Gold',
      //   color_code: 'b99111',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '5278451b-f0b6-4858-bf6d-fd23bd523049',
      //   name: 'Deep Sea Blue',
      //   color_code: '27028',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4036b9f2-8cca-4c86-b845-875b8fb764db',
      //   name: 'Star Pink',
      //   color_code: 'FF818B',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '6843a1ec-89b5-4a02-a20b-cfc682809005',
      //   name: 'Meteor Gray',
      //   color_code: '61616c',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '4e3062c6-f5a1-4767-85b6-1b9375638560',
      //   name: 'Tungsten Gold',
      //   color_code: 'FFD700',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '9b8c14d5-6f63-4140-8dd3-678117bf97bf',
      //   name: 'Black Onyx',
      //   color_code: '353839',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: '70241817-9d15-4fbf-bc2a-347aed830894',
      //   name: 'Gold Platinum',
      //   color_code: 'e5e4e2',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'b1048b53-638b-4ac8-b64e-643beddab879',
      //   name: 'Silver Titanium',
      //   color_code: 'c0c3c1',
      //   created_at: date,
      //   updated_at: date,
      // }, {
      //   id: 'f0857bd0-5f3d-46ee-9385-6df70eadfc47',
      //   name: 'Wine Red',
      //   color_code: 'b11226',
      //   created_at: date,
      //   updated_at: date,
      // },
    ],
  ).then(resolve).catch(reject);
});
const tableUpdateRams = (db) => new Promise((resolve, reject) => {
  const date = new Date();
  db('rams').insert(
    [
      {
        id: '04ada337-2825-4e0d-8f23-652c865c45e3',
        value: '1',
        created_at: date,
        updated_at: date,
      },
      {
        id: 'cecc9ed0-fb7f-40da-b50b-51053cabe4f3',
        value: '2',
        created_at: date,
        updated_at: date,
      }, {
        id: '7cfd0b2d-712f-4126-b578-e61ad97e3e38',
        value: '4',
        created_at: date,
        updated_at: date,
      }, {
        id: '630a4965-3c8b-441f-bd3f-5796498cc31b',
        value: '8',
        created_at: date,
        updated_at: date,
      }, {
        id: 'a1782cba-e420-41ff-9f21-ab03e8379cfa',
        value: '16',
        created_at: date,
        updated_at: date,
      }, {
        id: 'a67b12e5-c770-4da9-9185-394e45ba4518',
        value: '32',
        created_at: date,
        updated_at: date,
      },
    ],
  ).then(resolve).catch(reject);
});
const tableUpdateCapacity = (db) => new Promise((resolve, reject) => {
  const date = new Date();
  db('capacities').insert(
    [
      {
        id: '9c09bde1-5ac4-4b22-a49b-14894015b0f7',
        value: '16',
        created_at: date,
        updated_at: date,
      },
      {
        id: '33c2a6d4-e13c-41d5-ae4a-ef2bfa5d08f7',
        value: '32',
        created_at: date,
        updated_at: date,
      }, {
        id: '0d8ad19b-7c72-430b-a9e6-a62da76fab5d',
        value: '64',
        created_at: date,
        updated_at: date,
      }, {
        id: '7c323204-1f11-4151-878a-eb95b0bb2c38',
        value: '128',
        created_at: date,
        updated_at: date,
      }, {
        id: 'd57009b6-649c-4796-b5cd-ff8e96560e8a',
        value: '256',
        created_at: date,
        updated_at: date,
      },
    ],
  ).then(resolve).catch(reject);
});
const tableUpdateBrand = (db) => new Promise((resolve, reject) => {
  const date = new Date();
  db('brands').insert(
    [
      {
        id: 'db3554c6-1f40-4c01-8087-3507529d9512',
        name: 'Samsung',
        image_url: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/586028032.jpeg',
        created_at: date,
        updated_at: date,
      },
      {
        id: '954b2506-4f05-4c67-b5c5-ddafa612fd9a',
        name: 'Apple',
        image_url: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/586028032.jpeg',
        created_at: date,
        updated_at: date,
      },
    ],
  ).then(resolve).catch(reject);
});
const tableUpdateCategory = (db) => new Promise((resolve, reject) => {
  const date = new Date();
  db('categories').insert(
    [
      {
        id: '4063bdd7-9ceb-4698-8e25-bb1893ce864f',
        name: 'Smartphone',
        image_url: 'https://lh3.googleusercontent.com/proxy/ZijReZtvqZIGECbp4RKd-byCxsXmz8iUlRisEHs6CbiKDeYdeh9QaI-rpGGTkxe8HKsO3kH-uxyTVRGiotf3IFwvJ2LmHLxFkIfTx3nP7n0UULCUagJlVPQn',
        created_at: date,
        updated_at: date,
      },
    ],
  ).then(resolve).catch(reject);
});
const tableUpdateModel = (db) => new Promise((req, res) => {
  const date = new Date();

  db('models').insertMany(
    [
      {
        id: '5e24d697-783a-4781-8514-3a27c7bb6aa4',
        name: 'Iphone 6 plus',
        image_url: 'https://cdn.tgdd.vn/Products/Images/42/92962/iphone-6-32gb-gold-4-400x460.png',
        brand_id: '954b2506-4f05-4c67-b5c5-ddafa612fd9a',
        category_id: '4063bdd7-9ceb-4698-8e25-bb1893ce864f',
        created_at: date,
        updated_at: date,
      },
      {
        id: '2765ea5f-96c4-4bc9-8ff4-30047557f413',
        name: 'Samsung Galaxy J7 Prime',
        image_url: 'https://cdn.tgdd.vn/Products/Images/42/84798/samsung-galaxy-j7-prime-2-400x460.png',
        brand_id: 'db3554c6-1f40-4c01-8087-3507529d9512',
        category_id: '4063bdd7-9ceb-4698-8e25-bb1893ce864f',
        created_at: date,
        updated_at: date,
      },
      {
        id: 'cd23179e-048e-4f71-a50d-f525bfc7bfdc',
        name: 'Samsung Galaxy A20',
        image_url: 'https://cdn.tgdd.vn/Products/Images/42/198792/samsung-galaxy-a20-red-400x460-2-400x460.png',
        brand_id: 'db3554c6-1f40-4c01-8087-3507529d9512',
        category_id: '4063bdd7-9ceb-4698-8e25-bb1893ce864f',
        created_at: date,
        updated_at: date,
      },
    ],
  ).then(req).catch(res);
});
const tableUpdateImei = (db) => new Promise((resolve, reject) => {
  const date = new Date();
  db('imeis').insert(
    [
      {
        id: '68a4736a-25e4-4ed6-bd84-18aa7f843db5',
        imei: '354385062264699',
        model_id: '5e24d697-783a-4781-8514-3a27c7bb6aa4',
        ram_id: '04ada337-2825-4e0d-8f23-652c865c45e3',
        capacity_id: '9c09bde1-5ac4-4b22-a49b-14894015b0f7',
        color_id: 'b4c68383-5b60-4344-91c9-04d3eea9addf',
        other_detail: null,
        original_price: null,
        created_at: date,
        updated_at: date,
        deleted_at: null,
      },
      {
        id: '4178a81d-e815-4a39-aa59-9e0ba14d2af3',
        imei: '3557260903794',
        model_id: 'cd23179e-048e-4f71-a50d-f525bfc7bfdc',
        ram_id: 'a6962ba7-2a8e-4454-9f61-3fc66657fecc',
        capacity_id: '33c2a6d4-e13c-41d5-ae4a-ef2bfa5d08f7',
        color_id: '8d4de479-b7b2-4cc1-a7ee-9e5b9dc69f36',
        other_detail: null,
        original_price: null,
        created_at: date,
        updated_at: date,
        deleted_at: null,
      },
      {
        id: 'a9e0208b-7a6b-4a4a-986b-d92d2bfd82ab',
        imei: '359835100353669',
        model_id: '2765ea5f-96c4-4bc9-8ff4-30047557f413',
        ram_id: 'ffdfc6b6-420d-4eb4-87e4-c05acd426cd8',
        capacity_id: '33c2a6d4-e13c-41d5-ae4a-ef2bfa5d08f7',
        color_id: '8d4de479-b7b2-4cc1-a7ee-9e5b9dc69f36',
        other_detail: null,
        original_price: null,
        created_at: date,
        updated_at: date,
        deleted_at: null,
      },
    ],
  ).then(resolve).catch(reject);
});
const tableAccessories = async (db, isCreate) => {
  try {
    const t = 'accessories';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('key', 255).notNullable();
          table.text('value').notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'success';
  } catch (error) {
    return error;
  }
};
const tableWarranties = async (db, isCreate) => {
  try {
    const t = 'warranties';
    const exists = await db.schema.hasTable(t);
    if (isCreate) {
      if (!exists) {
        await db.schema.createTable(t, (table) => {
          table.increments('id').primary();
          table.string('key', 255).notNullable();
          table.text('value').notNullable();
          table.timestamp('expire_date', { useTz: true }).notNullable();
          table.timestamp('created_at', { useTz: true }).notNullable();
          table.timestamp('updated_at', { useTz: true }).notNullable();
        });
      }
    } else if (exists) {
      await db.schema.dropTable(t);
    }
    return 'success';
  } catch (error) {
    return error;
  }
};
export default {
  tableWarranties,
  tableAccessories,
  tableUpdateImei,
  tableUpdateModel,
  tableUpdateBrand,
  tableUpdateCategory,
  tableUpdateCapacity,
  tableUpdateRams,
  tableAuthUserUpdate,
  tableUpdateColors,
  tableSettings,
  tableRefreshTokens,
  tableAccessTokens,
  tableClients,
  tableSocials,
  tableUsers,
  tableDeviceScans,
  tableApiGroup,
  tableApis,
  tableAvailabledevices,
  tableBanners,
  tableBillingAdress,
  tableBrands,
  tableCapacities,
  tableCarts,
  tableCategories,
  tableColors,
  tableCommissions,
  tableCountries,
  tableCreditCards,
  tableDeviceImages,
  tableDevices,
  tableImeis,
  tableModelDetailImages,
  tableModelDetail,
  tableModel,
  tableScopes,
  tableOrders,
  tablePaypalPayment,
  tablePermissions,
  tableProposalExchangeSnapshots,
  tableProposalexchanges,
  tableProposalSaleSnapshots,
  tableProposalSales,
  tableRams,
  tableRecommendDevices,
  tableShippingAddress,
  tableTracingCart,
  tableTracingWishlists,
  tableTransactions,
  tableWishlistAvailableDevices,
};
