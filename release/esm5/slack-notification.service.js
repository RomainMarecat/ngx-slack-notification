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
        // Add custom header and charset UTF-8
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Acm9tYWlubWFyZWNhdC9uZ3gtc2xhY2stbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUluRDtJQUtFLGtDQUFvQixJQUFnQixFQUNJLFFBQWdCO1FBRHBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQ3hELENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILG1EQUFnQjs7Ozs7Ozs7OztJQUFoQixVQUFpQixPQUFlOzs7WUFFeEIsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFO2FBQzlCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0RBQWtELENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FDSCxJQUFJLENBQUMsUUFBUSxFQUNiLE9BQU8sRUFDUDtZQUNFLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gseUNBQU07Ozs7O0lBQU4sVUFBTyxZQUEwQjs7WUFDekIsT0FBTyxHQUFHLGFBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUc7UUFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdDLENBQUM7O2dCQXhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7NkNBV0osTUFBTSxTQUFDLFVBQVU7OzttQ0FYaEM7Q0E4Q0MsQUF6Q0QsSUF5Q0M7U0F0Q1ksd0JBQXdCOzs7Ozs7SUFFdkIsd0NBQXdCOzs7OztJQUN4Qiw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2xhY2tNZXNzYWdlIH0gZnJvbSAnLi9zbGFjay1tZXNzYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2xhY2tOb3RpZmljYXRpb25TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIEBJbmplY3QoJ3NsYWNrVXJsJykgcHJpdmF0ZSBzbGFja1VybDogc3RyaW5nKSB7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBub3RpZmljYXRpb24gdG8gc2xhY2tcbiAgICpcbiAgICogeW91IGNvdWxkIHN1YnNjcmliZSBkaXJlY3RseSBvbiB0aGlzIE9ic2VydmFibGVcbiAgICpcbiAgICogcmV0dXJucyAyMDAgd2l0aCBtZXNzYWdlIFwib2tcIiBpZiBzdWNjZXNzXG4gICAqIHRocm93IEh0dHBFcnJvclJlc3BvbnNlIDQwMFxuICAgKi9cbiAgc2VuZE5vdGlmaWNhdGlvbihtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIC8vIEFkZCBjdXN0b20gaGVhZGVyIGFuZCBjaGFyc2V0IFVURi04XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChcbiAgICAgICAgdGhpcy5zbGFja1VybCxcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGZ1bmN0aW9uIHRvIHNlbmQgbm90aWZpY2F0aW9uIHRvIHNsYWNrXG4gICAqL1xuICBub3RpZnkoc2xhY2tNZXNzYWdlOiBTbGFja01lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYHBheWxvYWQ9JHtKU09OLnN0cmluZ2lmeShzbGFja01lc3NhZ2UpfWA7XG5cbiAgICB0aGlzLnNlbmROb3RpZmljYXRpb24obWVzc2FnZSkuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==