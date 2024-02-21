using {prodDetails as pd} from '../db/schema';
using {NorthWind as external} from './external/NorthWind.csn';

service ProductDetails {
    entity ProductDetailsHANA as projection on pd.ProductDetails;
    entity ProductDetailsNorthwind as projection on external.Products;
}