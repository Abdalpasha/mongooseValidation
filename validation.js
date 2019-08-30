"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
// var schema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true
//     }
//   });
//   var Cat = mongoose.model('Cat', schema);
//   // This cat has no name :(
//   var cat = new Cat();
//   cat.save(function(error) {
//     console.log(error.errors['name'].message);
//     error = cat.validateSync();
//     console.log(error.errors['name'].message);
//   });
// var breakfastSchema = new mongoose.Schema({
//     eggs: {
//       type: Number,
//       min: [6, 'Too few eggs'],
//       max: [12, 'Too many Eggs!!111']
//     },
//     bacon: {
//       type: Number,
//       required: [true, 'Why no bacon?']
//     },
//     drink: {
//       type: String,
//       enum: ['Coffee', 'Tea'],
//       required: function() {
//         return this.bacon > 3;
//       }
//     }
//   });
//   var Breakfast = mongoose.model('Breakfast', breakfastSchema);
//   var badBreakfast = new Breakfast({
//     eggs: 2,
//     bacon: null,
//     drink: "milk"
//   });
//   console.log(badBreakfast);
//   var error = badBreakfast.validateSync();
//   console.log(error.errors["eggs"].message);
//   console.log(error.errors["bacon"].message);
//   console.log(error.errors["drink"].message);
//DB connection:-->
var Db = /** @class */ (function () {
    function Db() {
    }
    Db.connectToMongoDb = function () {
        mongoose.connect(this.connectionString, { useNewUrlParser: true })
            .then(function () { console.log("Db connection success"); })["catch"](function (err) {
            console.log("Db connection failed");
            console.log(err);
        });
    };
    ;
    Db.connectionString = "mongodb://localhost:27017/mongooseValidation";
    return Db;
}());
;
Db.connectToMongoDb();
var Schema = mongoose.Schema;
// let uniqueUsernameSchema = new Schema({
//   username: {
//     type: String,
//     unique: true
//   }
// });
// var U1 = mongoose.model('U1', uniqueUsernameSchema);
// var U2 = mongoose.model('U2', uniqueUsernameSchema);
// var dup = [{ username: 'Val' }, { username: 'Val' }];
// U1.create(dup, function(error) {
//   console.log(error)
//   // Race condition! This may save successfully, depending on whether
//   // MongoDB built the index before writing the 2 docs.
// });
// // U2.once('index', function(error) {
// //   console.log(error);
// //   U2.create(dup, function(error) {
// //     // Will error, but will *not* be a mongoose validation error, it will be
// //     // a duplicate key error.
// //     console.log(error);
// //     console.log(!error.errors);
// //     console.log(error.message.indexOf('duplicate key error') !== -1);
// //   });
// // });
// U2.init().then(function() {
//   U2.create(dup, function(error) {
//     // Will error, but will *not* be a mongoose validation error, it will be
//     // a duplicate key error.
//     console.log(error);
//     console.log(!error.errors);
//     console.log(error.message.indexOf('duplicate key error') !== -1);
//   });
// });
// var userSchema = new Schema({
//   phone: {
//     type: String,
//     validate: {
//       validator: function(v) {
//         return /\d{3}-\d{3}-\d{4}/.test(v);
//       },
//       message: props => `${props.value} is not a valid phone number!`
//     },
//     required: [true, 'User phone number required']
//   }
// });
// var User = mongoose.model('user', userSchema);
// var user :any = new User();
// var error;
// user.phone = '222-555-0123';
// error = user.validateSync();
// console.log(error.errors['phone'].message,
//   '555.0123 is not a valid phone number!');
// var userSchema = new Schema({
//   name: {
//     type: String,
//     // You can also make a validator async by returning a promise. If you
//     // return a promise, do **not** specify the `isAsync` option.
//     validate: () => Promise.reject(new Error('Oops!'))
//   },
//   email: {
//     type: String,
//     // There are two ways for an promise-based async validator to fail:
//     // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
//     // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
//     validate: {
//       validator: () => Promise.resolve(false),
//       message: 'Email validation failed'
//     }
//   },
//   // Your async validator may use callbacks as an alternative to promises,
//   // but only if you specify `isAsync: true`.
//   phone: {
//     type: String,
//     validate: {
//       isAsync: true,
//       validator: function(v, cb) {
//         setTimeout(function() {
//           var phoneRegex = /\d{3}-\d{3}-\d{4}/;
//           var msg = v + ' is not a valid phone number!';
//           // First argument is a boolean, whether validator succeeded
//           // 2nd argument is an optional error message override
//           cb(phoneRegex.test(v), msg);
//         }, 5);
//       },
//       // Default error message, overridden by 2nd argument to `cb()` above
//       message: 'Default error message'
//     },
//     required: [true, 'User phone number required']
//   }
// });
// var User = mongoose.model('User', userSchema);
// var user = new User();
// var error;
// user.phone = '555.0123';
// user.email = 'test@test.co';
// user.name = 'test';
// user.validate(function(error) {
//   console.log(error);
//   console.log(error.errors['name'].message, 'Oops!');
//   console.log(error.errors['email'].message, 'Email validation failed');
//   console.log(error.errors['phone'].message,
//     '555.0123 is not a valid phone number!');
// });
// const vehicleSchema = new mongoose.Schema({
//   numWheels: { type: Number, max: 18 , required:true}
// });
// const Vehicle = mongoose.model('Vehicle', vehicleSchema);
// const doc = new Vehicle({ numWheels: null });
// const err = doc.validateSync();
// console.log(err.errors['numWheels'].name); // 'CastError'
// // 'Cast to Number failed for value "not a number" at path "numWheels"'
// console.log(err.errors['numWheels'].message);
// console.log(err.errors['numWheels'].kind);
// console.log(err.errors['numWheels'].value);
// console.log(err.errors['numWheels'].path);
// var nameSchema = new Schema({
//   first: String,
//   last: String
// });
// // let personSchema = new Schema({
// //   name: {
// //     type: nameSchema,
// //     required: true
// //   }
// // });
// var personSchema = new Schema({
//   name: {type:nameSchema,required:true}
// });
// var Person = mongoose.model('Person', personSchema);
// var person = new Person();
// var error = person.validateSync();
// console.log(error.errors['name']);
// var toySchema = new Schema({
//   color: String,
//   name: String
// });
// var Toy = mongoose.model('Toys', toySchema);
// Toy.schema.path('color').validate(function (value) {
//   return /red|green|blue/i.test(value);
// }, 'Invalid color');
// var opts = { runValidators: true };
// Toy.updateOne({}, { color: 'not a color' }, opts, function (err) {
//   console.log(err.errors.color.message);
// });
var animalSchema = new Schema({ name: String, type: String });
animalSchema.methods.findSimilarTypes = function (cb) {
    return this.model('Animal').find({ type: this.type }, cb);
};
var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({ type: 'dog' });
dog.findSimilarTypes(function (err, dogs) {
    console.log(dogs); // woof
});
