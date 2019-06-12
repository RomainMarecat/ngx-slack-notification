(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@romainmarecat/ngx-slack-notification', ['exports', 'rxjs', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms'], factory) :
    (factory((global.romainmarecat = global.romainmarecat || {}, global.romainmarecat['ngx-slack-notification'] = {}),global.rxjs,global.ng.common,global.ng.common.http,global.ng.core,global.ng.forms));
}(this, (function (exports,rxjs,common,i1,i0,forms) { 'use strict';

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
                return rxjs.of('ok');
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
                var headers = new i1.HttpHeaders()
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SlackNotificationService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: String, decorators: [{ type: i0.Inject, args: ['slackUrl',] }] }
            ];
        };
        /** @nocollapse */ SlackNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function SlackNotificationService_Factory() { return new SlackNotificationService(i0.inject(i1.HttpClient), i0.inject("slackUrl")); }, token: SlackNotificationService, providedIn: "root" });
        return SlackNotificationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Injection Token URL
    /** @type {?} */
    var SLACK_URL_TOKEN = new i0.InjectionToken('slackUrl');
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
                            deps: [i1.HttpClient, SLACK_URL_TOKEN]
                        },
                        { provide: SLACK_URL_TOKEN, useValue: slackUrl },
                    ]
                };
            };
        SlackModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            i1.HttpClientModule,
                        ]
                    },] }
        ];
        return SlackModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MockSlackNotificationService = MockSlackNotificationService;
    exports.SlackNotificationService = SlackNotificationService;
    exports.createNotificationFactory = createNotificationFactory;
    exports.SLACK_URL_TOKEN = SLACK_URL_TOKEN;
    exports.SlackModule = SlackModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=romainmarecat-ngx-slack-notification.umd.js.map