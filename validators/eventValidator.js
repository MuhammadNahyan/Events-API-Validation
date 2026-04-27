// const Joi = require('joi');

// // Validation schema for event input
// const eventSchema = Joi.object({
//   title: Joi.string().min(3).max(100).required(),
//   date: Joi.date().iso().greater('now').required(),
//   location: Joi.string().min(3).required(),
//   description: Joi.string().max(500).optional(),
//   attendees: Joi.array().items(Joi.string().email()).optional()
// });

// module.exports = (req, res, next) => {
//   const { error } = eventSchema.validate(req.body, {
//     abortEarly: false,
//     stripUnknown: true
//   });
//   if (error) {  
//     error.isJoi = true;
//     return next(error);
//   }
//   next();
// };






const Joi = require("joi");

const eventValidator = Joi.object({
  title: Joi.string().min(4).max(100).required(),
  date: Joi.date().iso().greater('now').required(),
  location: Joi.string().min(4).required(),
  description: Joi.string().max(500).required(),
  attendees: Joi.array().items(Joi.string().email()).optional()
})

module.exports = (req, res, next) => {
  const { error } = eventValidator.validate(req.body, {
    abortEarly: false,
    stripUnknown: true
  }) 

  if (error) {
    error.isJoi = true;
    return next(error);
  }

  next();
}