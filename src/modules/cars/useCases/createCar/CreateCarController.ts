import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
      category_id,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      brand,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
      category_id,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
