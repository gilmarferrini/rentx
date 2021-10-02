import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseUse } from "./AuthenticateUserUseCase";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseUse = container.resolve(AuthenticateUserUseUse);

    const token = await authenticateUserUseUse.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateController };
