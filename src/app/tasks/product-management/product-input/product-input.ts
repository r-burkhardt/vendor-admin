import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  Product,
  ProductCodeTypes, ProductConditions,
  ProductDimUnits,
  ProductValidation, ProductWeightUnits
} from '@app/core/models/product';
import {ProductConst} from '@app/core/constants/product.const';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {ApiController} from "@app/core/services/api-controller";

@Component({
  selector: 'ysa-product-input',
  templateUrl: './product-input.ng.html',
  styleUrls: ['./product-input.scss']
})
export class ProductInput implements OnInit, OnChanges {

  errorMessage: string;
  inputProduct: Product = new Product();
  productCode: string;
  productCodeType: string;
  pkgDimensionUnit: string;
  pkgWeightUnit: string;
  productCodeError = false;
  productCodeTypes = ProductCodeTypes;
  productDimUnits = ProductDimUnits;
  productWeightUnits = ProductWeightUnits;
  productConditions = ProductConditions;
  productForm = new FormGroup(
      {
        FCProductCode: new FormControl(
          '',
          [Validators.required, Validators.minLength(8)]
        ),
        FCProductCodeType: new FormControl('upc'),
        FCProductName: new FormControl('', Validators.required),
        FCProductShortDesc: new FormControl('', Validators.required),
        FCProductDesc: new FormControl('', Validators.required),
        FCProductSearchTags: new FormControl('', Validators.required),
        FCProductCondition: new FormControl('new'),
        FCProductBrand: new FormControl('', Validators.required),
        FCProductCategoryId: new FormControl('', Validators.required),
        FCProductAddCatId: new FormControl('', Validators.required),
        FCProductPkgWeight: new FormControl(
          '',
          [
            Validators.required,
            Validators.min(1)
          ]),
        FCProductPkgWeightUnit: new FormControl('lbs'),
        FCProductPkgDimHeight: new FormControl(
          '',
          [
            Validators.required,
            Validators.min(1)
          ]),
        FCProductPkgDimWidth: new FormControl(
          '',
          [
            Validators.required,
            Validators.min(1)
          ]),
        FCProductPkgDimDepth: new FormControl(
          '',
          [
            Validators.required,
            Validators.min(1)
          ]),
        FCProductPkgDimUnit: new FormControl('inch'),
        FCProductSku: new FormControl('', Validators.required),
      }, { validators: this.productCodeValidator });

  constructor(private apic: ApiController) {}
  // constructor() {}

  ngOnInit(): void {
    console.log('UPC', Product.upcValidation('094841255170'));
    // console.log(Product.upcValidation('853923002909'));
    // console.log(Product.upcValidation('853923002909'));
    // console.log(Product.eanValidation('51547790'));
    // console.log(Product.eanValidation('27533888'));
    console.log(Product.eanValidation('5694110250568'));
    // console.log(Product.janValidation('4514392200031'));
    // console.log(Product.janValidation('4902506304919'));
    // console.log(Product.janValidation('4965957350423'));
    // console.log(Product.isbnValidation('9780824835927'));
    // console.log(Product.metricImperialConversion(1));
    // console.log(Product.metricImperialConversion(2.54, 'in'));
    // console.log(Product.createVerifySearchTags(
    //     'Dark Chocolate Cherry Granola Bar, Kellogg\'s Cereal',
    //     'cherry,chocolate,snackbar'
    // ));
    this.apic.status().then((data) => {
      console.log(data);
    });
  }

  ngOnChanges (changes: SimpleChanges): void {
    // console.log('product code', this.productCode);
    // console.log('product code type', this.productCode);
    // console.log('product input product', this.productCode);
    // console.log('pkg dimensions unit', this.productCode);
    // console.log('pkg weight units', this.productCode);
  }

  productCodeValidator(control: FormGroup): ValidationErrors | null {
    const code = control.get('FCProductCode');
    const type = control.get('FCProductCodeType');
    let validation: ProductValidation;
    if (!code.value ) {
      return { productCode: {
          message: 'Must enter a value for Product Code.',
          valid: false
        } }
    }
    switch (type.value) {
      case ProductConst.PC_UPC:
        validation = Product.upcValidation(code.value);
        break;
      case ProductConst.PC_EAN:
        validation = Product.eanValidation(code.value);
        break;
      case ProductConst.PC_JAN:
        validation = Product.janValidation(code.value);
        break;
      case ProductConst.PC_ISBN:
        validation = Product.isbnValidation(code.value);
        break;
      default:
        validation = {
          message: 'undefined',
          valid: true
        };
    }
    if (validation.valid) {
      return null;
    }
    return { productCode: validation };
  }

  validateProductCode(): void {
    let validation: ProductValidation;
    if (this.productCode && this.productCodeType) {
      switch (this.productCodeType) {
        case ProductConst.PC_UPC:
          validation = Product.upcValidation(this.productCode);
          break;
        case ProductConst.PC_EAN:
          validation = Product.upcValidation(this.productCode);
          break;
        case ProductConst.PC_JAN:
          validation = Product.upcValidation(this.productCode);
          break;
        case ProductConst.PC_ISBN:
          validation = Product.upcValidation(this.productCode);
          break;
        default:
          validation = {
            message: 'undefined',
            valid: true
          };
      }
      if (!validation.valid) {
        this.errorMessage = validation.message;
      }
      console.log(validation);
    }
  }

  prefillSearchTags() {
    this.productForm
        .patchValue(
            {
              'FCProductSearchTags':
                 Product.createVerifySearchTags(this.inputProduct.name)
            });
  }

  onLog() {
    console.log('valid', this.productForm.valid);
    console.log(this.productForm.errors);
  }

  onSubmit() {
    console.log(this.productForm.valid);
    console.log(this.productForm.errors);
    console.log(this.productForm.dirty)
    console.log(this.productForm.value);
    // console.log(this.productCode);
    // console.log(this.productCodeType);
    // console.log(this.pkgDimensionUnit);
    // console.log(this.pkgWeightUnit);
    // console.log(this.inputProduct);
  }

  resetProduct() {
    this.productForm.reset();
    // this.inputProduct = new Product();
    // this.productCode = undefined;
    // this.productCodeType = undefined;
    // this.pkgWeightUnit = undefined;
    // this.pkgDimensionUnit = undefined;
  }

}
