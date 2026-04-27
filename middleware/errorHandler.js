// module.exports = (err, req, res, next) => {
//   if (err.isJoi) {
//     return res.status(400).json({
//       error: 'ValidationError',
//       message: err.details.map(d => d.message).join('; ')
//     });
//   }
//   if (err.name === 'ValidationError') {
//     return res.status(400).json({
//       error: 'ValidationError',
//       message: err.message
//     });
//   }
//   res.status(err.status || 500).json({
//     error: err.name || 'InternalServerError',
//     message: err.message || 'An unexpected error occurred'
//   });
// };





const errorHandler = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({
      error: 'ValidationError',
      message: err.details.map(d => d.message).join("; ")
    })
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'ValidationError',
      message: err.message
    })
  }

  res.status(err.status || 500).json({
    error: err.name || "InternalServerError",
    message: err.message || "An unexpected error occurred"
  })
}

module.exports = errorHandler;