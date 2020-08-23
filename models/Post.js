/*  This is schema uses the NeDB local database which follows the
    MongoDB API (https://www.npmjs.com/package/nedb). The 'vertex-camo' library
    is an ORM for the NeDB implementation. */

const Document = require('vertex-camo').Document
const props = {
  image: { type: String, default: '' },
  title: { type: String, default: '', display: true },
  preview: { type: String, default: '', trim: true },
  category: { type: String, default: '', lowercase: true, trim: true },
  text: { type: String, default: '', isHtml: true },
  author: { type: Object, default: {}, immutable: true },
  slug: { type: String, default: '', immutable: true },
  type: { type: String, default: '', immutable: true }, // original or link
  numReplies: { type: Number, default: 0, immutable: true },
  isPublic: { type: String, default: 'no', immutable: true },
  schema: { type: String, default: 'post', immutable: true },
  dateString: { type: String, default: '', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Post extends Document {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Post