export function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

export function errorHandler(error, _req, res, _next) {
  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({ success: false, message: 'Invalid JSON body' });
  }

  const response = { success: false, message: 'Internal server error' };
  if (process.env.NODE_ENV === 'development') {
    response.error = error.message;
  }
  return res.status(500).json(response);
}
