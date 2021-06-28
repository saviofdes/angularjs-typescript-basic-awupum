import { IHttpPromise, IHttpService, IPromise } from 'angular';
import { User } from './user/user';

class HomeService {
  private $inject: string[] = ['$http'];
  constructor(private $http: IHttpService) {}
  public fetchData(): IHttpPromise<User[]> {
    return this.$http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
export { HomeService };
