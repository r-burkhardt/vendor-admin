import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Tasks} from './tasks';
import {OrderManagement} from '@app/tasks/order-management/order-management';
import {TasksHome} from "@app/tasks/tasks-home/tasks-home";


const routes: Routes = [
  {
    path: '', component: Tasks,
    children: [
      {path: '', component: TasksHome},
      {
        path: 'product-management',
        loadChildren: () => import(`./product-management/product-management.module`).then(
            m => m.ProductManagementModule),
      },
      {path: 'order-management', component: OrderManagement},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {

}
