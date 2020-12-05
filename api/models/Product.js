/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      defaultsTo: 0,
    },
    image: {
      type: 'string',
      required: true
    }


  },

};

