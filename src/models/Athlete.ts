type NewAthleteArgs = {
  id?: string,
  lastName: string,
  firstName: string,
  chronologicalAge?: number,
  trainingAge?: number,
  phone?: string,
  email?: string,
};

export class Athlete {
  #id: string | undefined;
  #lastName: string;
  #firstName: string;
  #chronologicalAge: number;
  #trainingAge: number;
  #phone: string;
  #email: string;

  constructor(args: NewAthleteArgs) {
    this.#id = args.id || undefined;
    this.#lastName = args.lastName ?? '';
    this.#firstName = args.firstName ?? '';
    this.#chronologicalAge = args.chronologicalAge ?? 0;
    this.#trainingAge = args.trainingAge ?? 0;
    this.#phone = args.phone ?? '';
    this.#email = args.email ?? '';

    if (this.#chronologicalAge < this.#trainingAge)
      throw new Error('Athlete chronologicalAge must be >= trainingAge');
  }

  get id() {
    return this.#id;
  };

  set id(newId: string | undefined) {
    if (!newId?.trim()) throw new Error('Athlete ID cannot be null, undefined or empty strings');
    this.#id = newId.trim() || undefined;
  };

  get lastName(): string {
    return this.#lastName;
  };

  set lastName(newLastName: string) {
    if (!newLastName.trim()) throw new Error('Athlete lastName cannot be null, undefined or empty strings');
    this.#lastName = newLastName.trim();
  };
  
  get firstName(): string {
    return this.#firstName;
  };

  set firstName(newFirstName: string) {
    if (!newFirstName.trim()) throw new Error('Athlete firstName cannot be null, undefined or empty strings');
    this.#firstName = newFirstName.trim();
  };

  get chronologicalAge(): number {
    return this.#chronologicalAge;
  };

  set chronologicalAge(newAge: number) {
    if (newAge < 1) throw new Error('Athlete chronologicalAge must be >= 1');
    this.#chronologicalAge = newAge;
  };

  get trainingAge(): number {
    return this.#trainingAge;
  };

  set trainingAge(newAge: number) {
    if (newAge < 1) throw new Error('Athlete trainingAge must be >= 1');
    this.#trainingAge = newAge;
  };
  get phone(): string {
    return this.#phone;
  };

  set phone(newPhone: string) {
    this.#phone = newPhone.trim();
  };

  get email(): string {
    return this.#email;
  };

  set email(newEmail: string) {
    this.#email = newEmail.trim();
  };
};
