import { User } from './user';

export class Expense{
    forEach(arg0: (detailRecord: any, j: any) => void) {
      throw new Error("Method not implemented.");
    }
    id:number;
    name:string;
    user:User[];
}