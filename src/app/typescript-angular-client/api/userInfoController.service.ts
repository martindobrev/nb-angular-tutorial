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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { UserDTO } from '../model/userDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserInfoControllerService {

    protected basePath = 'https://localhost:8000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * getUserInfo
     * 
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserInfoUsingGET(userId: string, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public getUserInfoUsingGET(userId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public getUserInfoUsingGET(userId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public getUserInfoUsingGET(userId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserInfoUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<UserDTO>(`${this.basePath}/api/v1/users/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
