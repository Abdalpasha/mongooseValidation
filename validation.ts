import * as mongoose from "mongoose";

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


var breakfastSchema = new mongoose.Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: [12, 'Too many Eggs!!111']
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea'],
      required: function() {
        return this.bacon > 3;
      }
    }
  });
  var Breakfast = mongoose.model('Breakfast', breakfastSchema);
  
  var badBreakfast = new Breakfast({
    eggs: 2,
    bacon: null,
    drink: "milk"
  });

  console.log(badBreakfast);
  var error = badBreakfast.validateSync();
  console.log(error.errors["eggs"].message);
  console.log(error.errors["bacon"].message);
  console.log(error.errors["drink"].message);