import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { InMemoryRepository } from "../../repositories/implementations/InMemoryRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapMailProvider();
const inMemoryRepository = new InMemoryRepository();

const createUserUseCase = new CreateUserUseCase(
  inMemoryRepository,
  mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
