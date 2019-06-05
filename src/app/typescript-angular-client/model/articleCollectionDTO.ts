/**
 * Angular Tutorial REST API
 * This is the REST API that is to be used during the Angular Basics course. The API provides the basic functions and elements to build a simple blog. <br/>Building parts of a simple blog webpage are PAGE, ARTICLE and FILE. For simplicity only IMAGES are allowed to be saved. <br/>Usually all methods that don't modify the content will be accessible without authentication. In order to change the content you will have to be authenticated and have the respective user rights to modify the content. User authentication is done via keycloak - an open source user management server. Detailed description will be added later
 *
 * OpenAPI spec version: 1.0
 * Contact: martin.dobrev@akros.ch
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ArticleDTO } from './articleDTO';


export interface ArticleCollectionDTO { 
    articles?: Array<ArticleDTO>;
}
