import { Request, Response, NextFunction } from "express";

export const urlVersioning =
  (version: string) => (req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith(`/api/${version}`)) {
      next();
    } else {
      res.status(404).json({
        success: false,
        error: "API version is not supported",
      });
    }
  };
