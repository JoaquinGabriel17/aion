import express from "express";
import type { Request, Response, NextFunction } from "express";

export const notFound = (req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({ message: `No encontrado - ${req.originalUrl}` });
};

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(err);
  res.status(res.statusCode === 200 ? 500 : res.statusCode).json({
    message: err.message
  });
};
