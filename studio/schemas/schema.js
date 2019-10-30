// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
// import page from './documents/page'
// import route from './documents/route'
// import siteConfig from './documents/siteConfig'

// // Object types
// import cta from './objects/cta'
// import embedHTML from './objects/embedHTML'
// import figure from './objects/figure'
// import internalLink from './objects/internalLink'
// import link from './objects/link'
// import portableText from './objects/portableText'
// import simplePortableText from './objects/simplePortableText'

// // Landing page sections
// import hero from './objects/hero'
// import imageSection from './objects/imageSection'
// import mailchimp from './objects/mailchimp'
// import textSection from './objects/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'plant',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    { 
      title: 'Plant',
      name: 'plant',
      type: 'document',
      fields: [
        {
          title: 'Plant Details',
          name:'plantDetails',
          type: 'string'
        },
        { title: 'Category',
      name: 'category',
      type: 'string'
    },
    {
      title: 'Low Zone',
      name: 'lowZone',
      type: 'number'},
    {
      title: 'High Zone',
      name: 'highZone',
      type: 'number'
    }, {
      title: 'Common Name',
      name: 'commonName',
      type: 'string'
    }, {
      title: 'Regional Name',
      name: 'regionalName',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    }, {
      title: 'Notes',
      name: 'notes',
      type: 'string'
    },
    {
      title: 'Soil PH',
      name: 'soilPH',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Soil Type',
      name: 'soilType',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Water',
      name: 'water',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Sunlight',
      name: 'sunlight',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Foliage',
      name: 'foliage',
      type: 'array',
      of: [{type: 'string'}]
    },
    

      ]
 }])
})
