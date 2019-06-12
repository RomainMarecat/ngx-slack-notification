/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlackNotificationService } from './slack-notification.service';
// Injection Token URL
/** @type {?} */
export var SLACK_URL_TOKEN = new InjectionToken('slackUrl');
// AOT factory function
/**
 * @param {?} httpClient
 * @param {?} slackUrl
 * @return {?}
 */
export function createNotificationFactory(httpClient, slackUrl) {
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
export { SlackModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJvbWFpbm1hcmVjYXQvbmd4LXNsYWNrLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbInNsYWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQUd4RSxNQUFNLEtBQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFTLFVBQVUsQ0FBQzs7Ozs7OztBQUdyRSxNQUFNLFVBQVUseUJBQXlCLENBQUMsVUFBc0IsRUFBRSxRQUFnQjtJQUNoRixPQUFPLElBQUksd0JBQXdCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRDtJQUFBO0lBd0JBLENBQUM7SUFmQzs7T0FFRzs7Ozs7O0lBQ0ksbUJBQU87Ozs7O0lBQWQsVUFBZSxRQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsVUFBVSxFQUFFLHlCQUF5QjtvQkFDckMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztpQkFDcEM7Z0JBQ0MsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7YUFDL0M7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjtxQkFDakI7aUJBQ0Y7O0lBa0JELGtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FqQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNsYWNrTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2xhY2stbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG4vLyBJbmplY3Rpb24gVG9rZW4gVVJMXG5leHBvcnQgY29uc3QgU0xBQ0tfVVJMX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ3NsYWNrVXJsJyk7XG5cbi8vIEFPVCBmYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uRmFjdG9yeShodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBzbGFja1VybDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgU2xhY2tOb3RpZmljYXRpb25TZXJ2aWNlKGh0dHBDbGllbnQsIHNsYWNrVXJsKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNsYWNrTW9kdWxlIHtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBTbGFja01vZHVsZVxuICAgKi9cbiAgc3RhdGljIGZvclJvb3Qoc2xhY2tVcmw6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2xhY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IFNsYWNrTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlTm90aWZpY2F0aW9uRmFjdG9yeSxcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnQsIFNMQUNLX1VSTF9UT0tFTl1cbiAgICAgIH0sXG4gICAgICAgIHtwcm92aWRlOiBTTEFDS19VUkxfVE9LRU4sIHVzZVZhbHVlOiBzbGFja1VybH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19