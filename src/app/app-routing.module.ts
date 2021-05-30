import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SellerHome} from '@app/seller-home/seller-home';


const routes: Routes = [
  {path: '', component: SellerHome},
  {path: 'home', redirectTo: ''},
  {
    path: 'tasks',
    loadChildren: () => import(`./tasks/tasks.module`).then(m => m.TasksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
