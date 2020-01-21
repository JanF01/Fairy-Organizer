
export class UserInfoModel {

    userId: string;

    userLogin: string;

    email:string;

    password: number;

    passwordRepeat: string;

    constructor(obj: any = null){
          if(obj != null){
               Object.assign(this,obj);
          }
    }




}