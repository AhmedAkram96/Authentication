var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique :true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstname: {
    type:String,
    required:true
  },
  lastname: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique: true,
    trim: true,
    lowercase: true
  }
});

if (!userSchema.options.toObject) {
    userSchema.options.toObject = {};
  }
  userSchema.options.toObject.transform = (document, transformedDocument) => {
    delete transformedDocument.password;
    return transformedDocument;
  };

mongoose.model('User',userSchema);
