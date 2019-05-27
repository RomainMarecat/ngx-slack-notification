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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acm9tYWlubWFyZWNhdC9uZ3gtc2xhY2stbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUVuQyxZQUFvQixJQUFnQixFQUNJLFFBQWdCO1FBRHBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQ3hELENBQUM7Ozs7Ozs7Ozs7O0lBVUQsZ0JBQWdCLENBQUMsT0FBZTs7Y0FDeEIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2FBQzlCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0RBQWtELENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FDSCxJQUFJLENBQUMsUUFBUSxFQUNiLE9BQU8sRUFDUDtZQUNFLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBQyxZQUEwQjs7Y0FDekIsT0FBTyxHQUFHLFdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUV6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFVBQVU7eUNBV0osTUFBTSxTQUFDLFVBQVU7Ozs7Ozs7O0lBRGxCLHdDQUF3Qjs7Ozs7SUFDeEIsNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNsYWNrTWVzc2FnZSB9IGZyb20gJy4vc2xhY2stbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsYWNrTm90aWZpY2F0aW9uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBASW5qZWN0KCdzbGFja1VybCcpIHByaXZhdGUgc2xhY2tVcmw6IHN0cmluZykge1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgbm90aWZpY2F0aW9uIHRvIHNsYWNrXG4gICAqXG4gICAqIHlvdSBjb3VsZCBzdWJzY3JpYmUgZGlyZWN0bHkgb24gdGhpcyBPYnNlcnZhYmxlXG4gICAqXG4gICAqIHJldHVybnMgMjAwIHdpdGggbWVzc2FnZSBcIm9rXCIgaWYgc3VjY2Vzc1xuICAgKiB0aHJvdyBIdHRwRXJyb3JSZXNwb25zZSA0MDBcbiAgICovXG4gIHNlbmROb3RpZmljYXRpb24obWVzc2FnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KFxuICAgICAgICB0aGlzLnNsYWNrVXJsLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZnVuY3Rpb24gdG8gc2VuZCBub3RpZmljYXRpb24gdG8gc2xhY2tcbiAgICovXG4gIG5vdGlmeShzbGFja01lc3NhZ2U6IFNsYWNrTWVzc2FnZSk6IHZvaWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgcGF5bG9hZD0ke0pTT04uc3RyaW5naWZ5KHNsYWNrTWVzc2FnZSl9YDtcblxuICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19