import { Request, Response, NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errs = validationResult(req);

    if (errs.isEmpty()) return next();

    res.status(400).json({ errors: errs.array() });
  };
};
