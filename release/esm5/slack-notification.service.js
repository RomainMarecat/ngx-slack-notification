/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var SlackNotificationService = /** @class */ (function () {
    function SlackNotificationService(http, slackUrl) {
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
     */
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
    SlackNotificationService.prototype.sendNotification = /**
     * Send notification to slack
     *
     * you could subscribe directly on this Observable
     *
     * returns 200 with message "ok" if success
     * throw HttpErrorResponse 400
     * @param {?} message
     * @return {?}
     */
    function (message) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        return this.http
            .post(this.slackUrl, message, {
            headers: headers,
            responseType: 'text'
        });
    };
    /**
     * Main function to send notification to slack
     */
    /**
     * Main function to send notification to slack
     * @param {?} slackMessage
     * @return {?}
     */
    SlackNotificationService.prototype.notify = /**
     * Main function to send notification to slack
     * @param {?} slackMessage
     * @return {?}
     */
    function (slackMessage) {
        /** @type {?} */
        var message = "payload=" + JSON.stringify(slackMessage);
        this.sendNotification(message).subscribe();
    };
    SlackNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SlackNotificationService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: ['slackUrl',] }] }
    ]; };
    /** @nocollapse */ SlackNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function SlackNotificationService_Factory() { return new SlackNotificationService(i0.inject(i1.HttpClient), i0.inject("slackUrl")); }, token: SlackNotificationService, providedIn: "root" });
    return SlackNotificationService;
}());
export { SlackNotificationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acm9tYWlubWFyZWNhdC9uZ3gtc2xhY2stbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUluRDtJQUtFLGtDQUFvQixJQUFnQixFQUNJLFFBQWdCO1FBRHBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQ3hELENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILG1EQUFnQjs7Ozs7Ozs7OztJQUFoQixVQUFpQixPQUFlOztZQUN4QixPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDOUIsR0FBRyxDQUFDLGNBQWMsRUFBRSxrREFBa0QsQ0FBQztRQUUxRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUNILElBQUksQ0FBQyxRQUFRLEVBQ2IsT0FBTyxFQUNQO1lBQ0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCx5Q0FBTTs7Ozs7SUFBTixVQUFPLFlBQTBCOztZQUN6QixPQUFPLEdBQUcsYUFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBRztRQUV6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTs2Q0FXSixNQUFNLFNBQUMsVUFBVTs7O21DQVhoQztDQTZDQyxBQXhDRCxJQXdDQztTQXJDWSx3QkFBd0I7Ozs7OztJQUV2Qix3Q0FBd0I7Ozs7O0lBQ3hCLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTbGFja01lc3NhZ2UgfSBmcm9tICcuL3NsYWNrLW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbGFja05vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgQEluamVjdCgnc2xhY2tVcmwnKSBwcml2YXRlIHNsYWNrVXJsOiBzdHJpbmcpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIG5vdGlmaWNhdGlvbiB0byBzbGFja1xuICAgKlxuICAgKiB5b3UgY291bGQgc3Vic2NyaWJlIGRpcmVjdGx5IG9uIHRoaXMgT2JzZXJ2YWJsZVxuICAgKlxuICAgKiByZXR1cm5zIDIwMCB3aXRoIG1lc3NhZ2UgXCJva1wiIGlmIHN1Y2Nlc3NcbiAgICogdGhyb3cgSHR0cEVycm9yUmVzcG9uc2UgNDAwXG4gICAqL1xuICBzZW5kTm90aWZpY2F0aW9uKG1lc3NhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChcbiAgICAgICAgdGhpcy5zbGFja1VybCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGZ1bmN0aW9uIHRvIHNlbmQgbm90aWZpY2F0aW9uIHRvIHNsYWNrXG4gICAqL1xuICBub3RpZnkoc2xhY2tNZXNzYWdlOiBTbGFja01lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYHBheWxvYWQ9JHtKU09OLnN0cmluZ2lmeShzbGFja01lc3NhZ2UpfWA7XG5cbiAgICB0aGlzLnNlbmROb3RpZmljYXRpb24obWVzc2FnZSkuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==