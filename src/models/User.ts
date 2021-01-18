import { uuid } from 'uuidv4';

class Users {
  id: string;

  name: string;

  tpuser: string;

  email: string;

  password: string;

  constructor(name: string, tpuser: string, email: string, password: string) {
    this.id = uuid();
    this.name = name;
    this.tpuser = tpuser;
    this.email = email;
    this.password = password;
  }
}
export default Users;
