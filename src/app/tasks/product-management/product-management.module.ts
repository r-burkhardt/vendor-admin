import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductManagementRoutingModule} from './product-management-routing.module';
import {ProductDefault} from './product-default/product-default';
import {ProductManagement} from './product-management';
import {ProductInput} from './product-input/product-input';
import {ProductAdjustment} from './product-adjustment/product-adjustment';
import {ProductLookup} from './product-lookup/product-lookup';
import {ProductImport} from './product-import/product-import';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductManagement,
    ProductDefault,
    ProductInput,
    ProductImport,
    ProductLookup,
    ProductAdjustment,
  ],
            imports: [
              CommonModule,
              ProductManagementRoutingModule,
              FormsModule,
              ReactiveFormsModule,
            ],
  providers: [],
  bootstrap: []
})
export class ProductManagementModule { }
