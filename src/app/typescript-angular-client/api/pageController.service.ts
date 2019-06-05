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

import { MenuDTO } from '../model/menuDTO';
import { Page } from '../model/page';
import { PageCollectionDTO } from '../model/pageCollectionDTO';
import { PageDTO } from '../model/pageDTO';
import { PageInfoDTO } from '../model/pageInfoDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PageControllerService {

    protected basePath = '';
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
     * createPage
     * 
     * @param page page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createPageUsingPOST(page: Page, observe?: 'body', reportProgress?: boolean): Observable<PageDTO>;
    public createPageUsingPOST(page: Page, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTO>>;
    public createPageUsingPOST(page: Page, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTO>>;
    public createPageUsingPOST(page: Page, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling createPageUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PageDTO>(`${this.basePath}/api/v1/pages`,
            page,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deletePage
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deletePageUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<PageDTO>;
    public deletePageUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTO>>;
    public deletePageUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTO>>;
    public deletePageUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePageUsingDELETE.');
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

        return this.httpClient.delete<PageDTO>(`${this.basePath}/api/v1/pages/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * editPage
     * 
     * @param id id
     * @param page page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editPageUsingPUT(id: number, page: Page, observe?: 'body', reportProgress?: boolean): Observable<PageDTO>;
    public editPageUsingPUT(id: number, page: Page, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTO>>;
    public editPageUsingPUT(id: number, page: Page, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTO>>;
    public editPageUsingPUT(id: number, page: Page, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling editPageUsingPUT.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling editPageUsingPUT.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<PageDTO>(`${this.basePath}/api/v1/pages/${encodeURIComponent(String(id))}`,
            page,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPageInfo
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageInfoUsingGET(observe?: 'body', reportProgress?: boolean): Observable<PageInfoDTO>;
    public getPageInfoUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageInfoDTO>>;
    public getPageInfoUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageInfoDTO>>;
    public getPageInfoUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageInfoDTO>(`${this.basePath}/api/v1/info/pages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPageMenu
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageMenuUsingGET(observe?: 'body', reportProgress?: boolean): Observable<MenuDTO>;
    public getPageMenuUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MenuDTO>>;
    public getPageMenuUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MenuDTO>>;
    public getPageMenuUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<MenuDTO>(`${this.basePath}/api/v1/menu`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPage
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<PageDTO>;
    public getPageUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTO>>;
    public getPageUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTO>>;
    public getPageUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPageUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
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

        return this.httpClient.get<PageDTO>(`${this.basePath}/api/v1/pages/single`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPage
     * 
     * @param slug slug
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPageUsingGET1(slug: string, observe?: 'body', reportProgress?: boolean): Observable<PageDTO>;
    public getPageUsingGET1(slug: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTO>>;
    public getPageUsingGET1(slug: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTO>>;
    public getPageUsingGET1(slug: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (slug === null || slug === undefined) {
            throw new Error('Required parameter slug was null or undefined when calling getPageUsingGET1.');
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

        return this.httpClient.get<PageDTO>(`${this.basePath}/api/v1/pages/${encodeURIComponent(String(slug))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPages
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPagesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<PageCollectionDTO>;
    public getPagesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageCollectionDTO>>;
    public getPagesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageCollectionDTO>>;
    public getPagesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageCollectionDTO>(`${this.basePath}/api/v1/pages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * reorderPages
     * 
     * @param pageCollection pageCollection
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reorderPagesUsingPOST(pageCollection: PageCollectionDTO, observe?: 'body', reportProgress?: boolean): Observable<PageCollectionDTO>;
    public reorderPagesUsingPOST(pageCollection: PageCollectionDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageCollectionDTO>>;
    public reorderPagesUsingPOST(pageCollection: PageCollectionDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageCollectionDTO>>;
    public reorderPagesUsingPOST(pageCollection: PageCollectionDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (pageCollection === null || pageCollection === undefined) {
            throw new Error('Required parameter pageCollection was null or undefined when calling reorderPagesUsingPOST.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<PageCollectionDTO>(`${this.basePath}/api/v1/pages/reorder`,
            pageCollection,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
