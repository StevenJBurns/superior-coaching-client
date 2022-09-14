type NewAthleteArgs = {
  id: string,
  lastName: string,
  firstName: string,
};

export class Athlete {
  // private id: string;
  // private lastName: string;
  // private firstName: string;

  constructor(private args: NewAthleteArgs) {
  }

  get id() {
    return this.args.id;
  };

  get lastName() {
    return this.args.lastName;
  };
  
  get firstName() {
    return this.args.firstName;
  };
};
