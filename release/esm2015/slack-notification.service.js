/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SlackNotificationService {
    /**
     * @param {?} http
     * @param {?} slackUrl
     */
    constructor(http, slackUrl) {
        this.http = http;
        this.slackUrl = slackUrl;
    }
    /**
     * Send notification to slack
     *
     * you could subscribe directly on this Observable
     *
     * returns 200 with message "ok" if success
     * throw HttpErrorResponse 400
     * @param {?} message
     * @return {?}
     */
    sendNotification(message) {
        // Add custom header and charset UTF-8
        /** @type {?} */
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
            .post(this.slackUrl, message, {
            headers: headers,
            responseType: 'text'
        });
    }
    /**
     * Main function to send notification to slack
     * @param {?} slackMessage
     * @return {?}
     */
    notify(slackMessage) {
        /** @type {?} */
        const message = `payload=${JSON.stringify(slackMessage)}`;
        this.sendNotification(message).subscribe();
    }
}
SlackNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlackNotificationService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: ['slackUrl',] }] }
];
/** @nocollapse */ SlackNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function SlackNotificationService_Factory() { return new SlackNotificationService(i0.inject(i1.HttpClient), i0.inject("slackUrl")); }, token: SlackNotificationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlackNotificationService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    SlackNotificationService.prototype.slackUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acm9tYWlubWFyZWNhdC9uZ3gtc2xhY2stbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVuQyxZQUFvQixJQUFnQixFQUNJLFFBQWdCO1FBRHBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQ3hELENBQUM7Ozs7Ozs7Ozs7O0lBVUQsZ0JBQWdCLENBQUMsT0FBZTs7O2NBRXhCLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM5QixHQUFHLENBQUMsY0FBYyxFQUFFLGtEQUFrRCxDQUFDO1FBRTFFLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQ0gsSUFBSSxDQUFDLFFBQVEsRUFDYixPQUFPLEVBQ1A7WUFDRSxPQUFPLEVBQUUsT0FBTztZQUNoQixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQUMsWUFBMEI7O2NBQ3pCLE9BQU8sR0FBRyxXQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdDLENBQUM7OztZQXhDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxVQUFVO3lDQVdKLE1BQU0sU0FBQyxVQUFVOzs7Ozs7OztJQURsQix3Q0FBd0I7Ozs7O0lBQ3hCLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTbGFja01lc3NhZ2UgfSBmcm9tICcuL3NsYWNrLW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbGFja05vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgQEluamVjdCgnc2xhY2tVcmwnKSBwcml2YXRlIHNsYWNrVXJsOiBzdHJpbmcpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIG5vdGlmaWNhdGlvbiB0byBzbGFja1xuICAgKlxuICAgKiB5b3UgY291bGQgc3Vic2NyaWJlIGRpcmVjdGx5IG9uIHRoaXMgT2JzZXJ2YWJsZVxuICAgKlxuICAgKiByZXR1cm5zIDIwMCB3aXRoIG1lc3NhZ2UgXCJva1wiIGlmIHN1Y2Nlc3NcbiAgICogdGhyb3cgSHR0cEVycm9yUmVzcG9uc2UgNDAwXG4gICAqL1xuICBzZW5kTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gQWRkIGN1c3RvbSBoZWFkZXIgYW5kIGNoYXJzZXQgVVRGLThcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KFxuICAgICAgICB0aGlzLnNsYWNrVXJsLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZnVuY3Rpb24gdG8gc2VuZCBub3RpZmljYXRpb24gdG8gc2xhY2tcbiAgICovXG4gIG5vdGlmeShzbGFja01lc3NhZ2U6IFNsYWNrTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgcGF5bG9hZD0ke0pTT04uc3RyaW5naWZ5KHNsYWNrTWVzc2FnZSl9YDtcblxuICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19