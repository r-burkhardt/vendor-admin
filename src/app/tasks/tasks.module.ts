import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks-routing.module';
import {Tasks} from './tasks';
import {ProductManagementModule} from '@app/tasks/product-management/product-management.module';
import { OrderManagement } from './order-management/order-management';
import { TasksHome } from './tasks-home/tasks-home';


@NgModule({
  declarations: [
    Tasks,
    OrderManagement,
    TasksHome,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ProductManagementModule
  ],
  providers: [],
  bootstrap: []
})
export class TasksModule {}
