/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SlackNotificationService } from './slack-notification.service';
/** @type {?} */
export var SLACK_URL_TOKEN = new InjectionToken('slackUrl');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJvbWFpbm1hcmVjYXQvbmd4LXNsYWNrLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbInNsYWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRXhFLE1BQU0sS0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsVUFBVSxDQUFDOzs7Ozs7QUFFckUsTUFBTSxVQUFVLHlCQUF5QixDQUFDLFVBQXNCLEVBQUUsUUFBZ0I7SUFDaEYsT0FBTyxJQUFJLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQ7SUFBQTtJQXdCQSxDQUFDO0lBZkM7O09BRUc7Ozs7OztJQUNJLG1CQUFPOzs7OztJQUFkLFVBQWUsUUFBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7aUJBQ3BDO2dCQUNDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO2FBQy9DO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXZCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOztJQWtCRCxrQkFBQztDQUFBLEFBeEJELElBd0JDO1NBakJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTbGFja05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NsYWNrLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFNMQUNLX1VSTF9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdzbGFja1VybCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uRmFjdG9yeShodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBzbGFja1VybDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgU2xhY2tOb3RpZmljYXRpb25TZXJ2aWNlKGh0dHBDbGllbnQsIHNsYWNrVXJsKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNsYWNrTW9kdWxlIHtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBTbGFja01vZHVsZVxuICAgKi9cbiAgc3RhdGljIGZvclJvb3Qoc2xhY2tVcmw6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2xhY2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IFNsYWNrTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlTm90aWZpY2F0aW9uRmFjdG9yeSxcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnQsIFNMQUNLX1VSTF9UT0tFTl1cbiAgICAgIH0sXG4gICAgICAgIHtwcm92aWRlOiBTTEFDS19VUkxfVE9LRU4sIHVzZVZhbHVlOiBzbGFja1VybH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19