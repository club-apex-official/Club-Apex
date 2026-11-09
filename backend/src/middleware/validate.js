export function validate(schema) {
  return (req, res, next) => {
    if (req.body === null || Array.isArray(req.body) || typeof req.body !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: [{ field: 'body', message: 'Request body must be an object' }],
      });
    }

    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: result.error.issues.map((issue) => ({
          field: issue.path.join('.') || 'body',
          message: issue.message,
        })),
      });
    }

    req.body = result.data;
    return next();
  };
}
