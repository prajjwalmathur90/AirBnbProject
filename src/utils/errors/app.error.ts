export interface AppError extends Error {
  statusCode: number;
}

export class notFound implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 404;
    this.message = message;
    this.name = "NotFound!";
  }
}

export class badRequest implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 400;
    this.message = message;
    this.name = "BadRequest!";
  }
}

export class internalServerError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 500;
    this.message = message;
    this.name = "InternalServerError!";
  }
}

export class conflictError implements AppError {
  statusCode: number;
  message: string;
  name: string;

  constructor(message: string) {
    this.statusCode = 409;
    this.message = message;
    this.name = "ConflictError!";
  }
}
