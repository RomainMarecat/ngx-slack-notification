import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable, defineInjectable, inject, InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockSlackNotificationService = /** @class */ (function () {
    function MockSlackNotificationService() {
    }
    /**
     * Mock void function
     */
    /**
     * Mock void function
     * @return {?}
     */
    MockSlackNotificationService.prototype.notify = /**
     * Mock void function
     * @return {?}
     */
    function () {
    };
    /**
     * Mock an Observable of success callback
     */
    /**
     * Mock an Observable of success callback
     * @return {?}
     */
    MockSlackNotificationService.prototype.sendNotification = /**
     * Mock an Observable of success callback
     * @return {?}
     */
    function () {
        return of('ok');
    };
    return MockSlackNotificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ SlackNotificationService.ngInjectableDef = defineInjectable({ factory: function SlackNotificationService_Factory() { return new SlackNotificationService(inject(HttpClient), inject("slackUrl")); }, token: SlackNotificationService, providedIn: "root" });
    return SlackNotificationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Injection Token URL
/** @type {?} */
var SLACK_URL_TOKEN = new InjectionToken('slackUrl');
// AOT factory function
/**
 * @param {?} httpClient
 * @param {?} slackUrl
 * @return {?}
 */
function createNotificationFactory(httpClient, slackUrl) {
    return new SlackNotificationService(httpClient, slackUrl);
}
var SlackModule = /** @class */ (function () {
    function SlackModule() {
    }
    /**
     * Initialize SlackModule
     */
    /**
     * Initialize SlackModule
     * @param {?} slackUrl
     * @return {?}
     */
    SlackModule.forRoot = /**
     * Initialize SlackModule
     * @param {?} slackUrl
     * @return {?}
     */
    function (slackUrl) {
        return {
            ngModule: SlackModule,
            providers: [{
                    provide: SlackNotificationService,
                    useFactory: createNotificationFactory,
                    deps: [HttpClient, SLACK_URL_TOKEN]
                },
                { provide: SLACK_URL_TOKEN, useValue: slackUrl },
            ]
        };
    };
    SlackModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        HttpClientModule,
                    ]
                },] }
    ];
    return SlackModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MockSlackNotificationService, SlackNotificationService, createNotificationFactory, SLACK_URL_TOKEN, SlackModule };

//# sourceMappingURL=romainmarecat-ngx-slack-notification.js.map