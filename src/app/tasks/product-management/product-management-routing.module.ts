import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductManagement} from './product-management';
import {ProductDefault} from './product-default/product-default';
import {ProductInput} from './product-input/product-input';
import {ProductImport} from './product-import/product-import';
import {ProductLookup} from './product-lookup/product-lookup';
import {ProductAdjustment} from './product-adjustment/product-adjustment';

const routes: Routes = [
  {
    path: '',
    component: ProductManagement,
    children: [
      {path: '', component: ProductDefault},
      {path: 'input', component: ProductInput},
      {path: 'import', component: ProductImport},
      {path: 'lookup', component: ProductLookup},
      {path: 'adjust', component: ProductAdjustment},
      // {path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
