import { IComponentOptions, IController } from 'angular';
import { HomeService } from './home.service';
import { User } from './user/user';
class HomeController implements IController {
  private name = {
    firstName: 'Home',
    lastName: 'Component'
  };
  private idFromChild: number = 0;
  private users: User[] = [];

  private static $inject: string[] = ['homeService'];

  constructor(private homeService: HomeService) {}

  $onInit() {
    console.log('in on init');
    this.homeService.fetchData().then(response => {
      this.users = response.data;
      console.log('data fetched');
      console.log('users', this.users.length);
    });
    console.log('executed from init');
    for (const user of this.users) {
      console.log(user.address.city);
    }
    console.log('users', this.users.length);
  }

  private onCallParentCallback = id => {
    this.idFromChild = id;
  };
}

const HomeComponent: IComponentOptions = {
  controller: HomeController,
  template: require('./home.template.html'),
  bindings: {}
};
export { HomeComponent };
