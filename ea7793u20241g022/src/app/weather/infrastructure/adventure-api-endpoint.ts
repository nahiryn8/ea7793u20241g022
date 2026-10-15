import {BaseApiEndpoint} from '../../shared/infrastructure/base-api-endpoint';
// @ts-ignore
import {Category} from '../domain/model/adventure.entity';
// @ts-ignore
import {CategoriesResponse, CategoryResource} from './adventure-response';
// @ts-ignore
import {CategoryAssembler} from './adventure-assembler';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
/**
 * Endpoint client for category CRUD operations.
 */
export class CategoriesApiEndpoint extends BaseApiEndpoint<Category, CategoryResource, CategoriesResponse, CategoryAssembler> {
  /**
   * Creates an instance of CategoriesApiEndpoint.
   * @param http - The HttpClient to be used for making API requests.
   */
  constructor(http: HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.platformProviderCategoriesEndpointPath}`, new CategoryAssembler());
  }
}
