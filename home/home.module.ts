import angular, { IModule } from 'angular';

let homeModule: IModule = angular.module('homeApp', []);

import { UserDetail } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';
import { HomeService } from './home.service';

homeModule.component('home', HomeComponent);
homeModule.component('child', ChildComponent);
homeModule.component('userDetail', UserDetail);
homeModule.service('homeService', HomeService);

export { homeModule };
