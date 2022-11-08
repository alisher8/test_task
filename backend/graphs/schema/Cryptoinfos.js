cube(`Cryptoinfos`, {
  sql: `SELECT * FROM cryptoinfo.cryptoinfos`,
  
  preAggregations: {
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdat, updatedat, date]
    },
    
    beginPrice: {
      sql: `begin_price`,
      type: `sum`
    },
    
    endPrice: {
      sql: `end_price`,
      type: `sum`
    },
    
    maxPrice: {
      sql: `max_price`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    },
    
    date: {
      sql: `date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
