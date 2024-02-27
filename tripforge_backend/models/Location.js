const mongoose = require('mongoose');
const {Schema} = mongoose;

const locationSchema = Schema({
    activity : {type : String},
    location : {type : [Schema.Types.Mixed]},
    latitude : {type : String, required : true},
    longitude : {type : String, required : true},
    notes : {type : [Schema.Types.Mixed]}
})

const virtual = tripSchema.virtual('id');
virtual.get(function(){
    return this._id;
})

locationSchema.set('toJSON', {
    virtuals : true,
    versionKey : false,
    transform : function (doc, ret) {delete ret._id}
})

exports.Location = mongoose.model('Location',locationSchema);