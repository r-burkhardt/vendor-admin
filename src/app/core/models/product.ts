/**
 *
 */
import {Serializable} from '@app/core/interfaces/serializable';


const IgnoredWords = ['a', 'the', 'an', 'in', 'of'];
const CharRegEx = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g;

export const ProductCodeTypes = [
  ['upc', 'UPC'],
  ['ean', 'EAN'],
  ['jan', 'JAN'],
  ['isbn', 'ISBN']
];

export const ProductConditions = [
  ['new', 'New'],
  ['renewed', 'Renewed'],
  ['used', 'Used'],
  ['opened', 'Opened']
];

export const ProductWeightUnits = [
  ['lbs', 'LBS'],
  ['kg', 'KG']
];

export const ProductDimUnits = [
  ['inch', 'IN'],
  ['cm', 'CM']
];

export interface ProductValidation {
  valid: boolean;
  message: string;
}

/**
 *
 */
export class Product implements Serializable<Product>{
  constructor (
    private _id: string = undefined,
    private ysn: string = undefined,
    public name: string = undefined,
    private slug: string = undefined,
    public short_description: string = undefined,
    public description: string = undefined,
    public search_tags: string = undefined,
    public condition: string = undefined, // 'new','renewed','used','opened'
    public brand: string = undefined,
    public category_id: string = undefined, // 65535,
    public addl_category_id: string = undefined, // 65535,
    private map: number = undefined, // Minimum advertised price
    public weight: number = undefined,
    public pkg_dim_height: number = undefined,
    public pkg_dim_width: number = undefined,
    public pkg_dim_depth: number = undefined,
    public mpn: string = undefined,
    public upc: string = undefined,
    public ean_jan: string = undefined,
    public isbn: string = undefined,
    public sku: string = undefined,
    private active: boolean = undefined,
    public taxes: any[] = undefined,
    private updated_at: Date = undefined,
  ) {}

  serialize(): string {
    return '';
  }

  deserialize(json: object): Product {
    return new Product();
  }

  static createVerifySearchTags(productName: string, userTags = ''): string {
    // let nameArray =
    //     productName.replace(CharRegEx,'').toLowerCase().split(' ');
    // const userInput =
    //     userTags.replace(', ', ',').toLowerCase().split(',');
    // nameArray = nameArray.map((word) => {
    //   if (!IgnoredWords.includes(word)) return word;
    // });
    // if (userInput) {
    //   for (const word of nameArray) {
    //     if (!userInput.includes(word)) userInput.push(word);
    //   }
    //   return userInput.join(',');
    // }
    // return nameArray.join(',');
    return '';
  }

  /**
   * Convert metric to/from imperial units.
   * @param {number} value - length to be converted
   * @param {string} outputUnit - the unit the output is to be converted to.
   * @returns {number}
   */
  static metricImperialConversion(value: number, outputUnit: string = 'in'): number {
    switch (outputUnit) {
      case 'cm':
        return value * 2.54;
      case 'in':
        return value / 2.54;
      case 'kg':
        return value / 2.2046;
      case 'lb':
        return value / .45359237;
      default:
        return 0;
    }
  }

  static upcValidation(upc: string): ProductValidation {
    const rtrnValidation = {valid: false, message: 'Default Invalid UPC'};
    if (upc.length !== 12 && upc.length !== 8) {
      rtrnValidation.message = 'UPC is invalid length';
      return rtrnValidation;
    }
    console.log('Passed Length');
    if (!upc.match(/^[0-9]*$/)) {
      rtrnValidation.message = 'UPC is not numeric.';
      return rtrnValidation;
    }
    console.log('Passed numeric');
    if (this.verifyModulo10(upc)) {
      rtrnValidation.valid = true;
      rtrnValidation.message = 'Valid UPC';
    }
    console.log('Passed mod', this.verifyModulo10(upc));
    return rtrnValidation;
  }

  static eanValidation(ean: string): ProductValidation {
    const rtrnValidation = {valid: false, message: 'Invalid EAN'};
    if (ean.length !== 13 && ean.length !== 8) {
      rtrnValidation.message = 'EAN is invalid length';
      return rtrnValidation;
    }
    if (!ean.match(/^[0-9]*$/)) {
      rtrnValidation.message = 'EAN is not numeric.';
      return rtrnValidation;
    }
    if (this.verifyModulo10(ean)) {
      rtrnValidation.valid = true;
      rtrnValidation.message = 'Valid EAN';
    }
    return rtrnValidation;
  }

  static janValidation(jan: string): ProductValidation {
    const janPrefixes = ['45', '49'];
    const rtrnValidation = {valid: false, message: 'Invalid JAN'};
    if (jan.length !== 13 && jan.length !== 8) {
      rtrnValidation.message = 'JAN is invalid length';
      return rtrnValidation;
    }
    if (!jan.match(/^[0-9]*$/)) {
      rtrnValidation.message = 'JAN is not numeric.';
      return rtrnValidation;
    }
    const prefix = jan.substring(0,2)
    if (!janPrefixes.includes(prefix)) {
      rtrnValidation.message = `${prefix} is not a valid JAN prefix.`;
      return rtrnValidation;
    }
    if (this.verifyModulo10(jan)) {
      rtrnValidation.valid = true;
      rtrnValidation.message = 'Valid JAN';
    }
    return rtrnValidation;
  }

  static isbnValidation(isbn: string): ProductValidation {
    const rtrnValidation = {valid: false, message: 'Invalid ISBN'};
    if (isbn.length !== 13 && isbn.length !== 10) {
      rtrnValidation.message = 'ISBN is invalid length';
      return rtrnValidation;
    }
    if (!isbn.match(/^[0-9]*$/)) {
      rtrnValidation.message = 'ISBN is not numeric.';
      return rtrnValidation;
    }
    if (this.verifyValidIsbn(isbn)) {
      rtrnValidation.valid = true;
      rtrnValidation.message = 'Valid ISBN';
    }
    return rtrnValidation;
  }

  private static verifyModulo10(code: string): boolean {
    const check = code.substring(code.length - 1);
    console.log('check', check);
    const noCheck = code.substring(0, code.length - 1).split('');
    console.log('nocheck', noCheck);
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < noCheck.length; i++) {
      if (i % 2 === 0) sumOdd += parseInt(noCheck[i]);
      else sumEven += parseInt(noCheck[i]);
    }
    const calculated = ((sumOdd * 3) + sumEven) % 10;

    console.log(calculated);
    // console.log((10 - (totalSum % 10)));
    return ((calculated > 0) ? (10 - calculated) : calculated) ===
           parseInt(check);
    // return false;
  }

  private static verifyValidIsbn(code: string): boolean {
    let sum = 0;
    switch (code.length) {
      case 10:
        (code.split('')).map((char, index) => {
          sum += parseInt(char) * (10 - index);
        });
        return sum % 11 === 0;
        break;
      case 13:
        (code.split('')).map((char, index) => {
          if (index % 2 === 0) sum += parseInt(char);
          else sum += (parseInt(char) * 3);
        });
        return sum % 10 === 0;
      default:
        return false;
    }
  }
}
