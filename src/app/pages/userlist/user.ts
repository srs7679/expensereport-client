import { Identifiers } from '@angular/compiler';
import { UserType } from './usertype';
export class User {
    
    id: number;
    firstname: string;
    lastname:string;
    email:string;
    mobile:string;
    status:string;
    usertype:UserType[];
 
}