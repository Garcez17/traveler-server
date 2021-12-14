import { FakeHashProvider } from '@shared/container/providers/hashProvider/fakes/FakeHashProvider';
import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { CreateUserService } from './CreateUserService';

let createUserService: CreateUserService;
let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to create a user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@test.com');
    expect(user).toHaveProperty('id');
  });
});
