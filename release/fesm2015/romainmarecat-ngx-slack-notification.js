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
class MockSlackNotificationService {
    /**
     * Mock void function
     * @return {?}
     */
    notify() {
    }
    /**
     * Mock an Observable of success callback
     * @return {?}
     */
    sendNotification() {
        return of('ok');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlackNotificationService {
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
/** @nocollapse */ SlackNotificationService.ngInjectableDef = defineInjectable({ factory: function SlackNotificationService_Factory() { return new SlackNotificationService(inject(HttpClient), inject("slackUrl")); }, token: SlackNotificationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Injection Token URL
/** @type {?} */
const SLACK_URL_TOKEN = new InjectionToken('slackUrl');
// AOT factory function
/**
 * @param {?} httpClient
 * @param {?} slackUrl
 * @return {?}
 */
function createNotificationFactory(httpClient, slackUrl) {
    return new SlackNotificationService(httpClient, slackUrl);
}
class SlackModule {
    /**
     * Initialize SlackModule
     * @param {?} slackUrl
     * @return {?}
     */
    static forRoot(slackUrl) {
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
    }
}
SlackModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                ]
            },] }
];

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