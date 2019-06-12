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
export const SLACK_URL_TOKEN = new InjectionToken('slackUrl');
// AOT factory function
/**
 * @param {?} httpClient
 * @param {?} slackUrl
 * @return {?}
 */
export function createNotificationFactory(httpClient, slackUrl) {
    return new SlackNotificationService(httpClient, slackUrl);
}
export class SlackModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJvbWFpbm1hcmVjYXQvbmd4LXNsYWNrLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbInNsYWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7OztBQUd4RSxNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFTLFVBQVUsQ0FBQzs7Ozs7OztBQUdyRSxNQUFNLFVBQVUseUJBQXlCLENBQUMsVUFBc0IsRUFBRSxRQUFnQjtJQUNoRixPQUFPLElBQUksd0JBQXdCLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFTRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBS3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSx3QkFBd0I7b0JBQ2pDLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7aUJBQ3BDO2dCQUNDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO2FBQy9DO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXZCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTbGFja05vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NsYWNrLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuLy8gSW5qZWN0aW9uIFRva2VuIFVSTFxuZXhwb3J0IGNvbnN0IFNMQUNLX1VSTF9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdzbGFja1VybCcpO1xuXG4vLyBBT1QgZmFjdG9yeSBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbkZhY3RvcnkoaHR0cENsaWVudDogSHR0cENsaWVudCwgc2xhY2tVcmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFNsYWNrTm90aWZpY2F0aW9uU2VydmljZShodHRwQ2xpZW50LCBzbGFja1VybCk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGFja01vZHVsZSB7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgU2xhY2tNb2R1bGVcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KHNsYWNrVXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNsYWNrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBTbGFja05vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZU5vdGlmaWNhdGlvbkZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50LCBTTEFDS19VUkxfVE9LRU5dXG4gICAgICB9LFxuICAgICAgICB7cHJvdmlkZTogU0xBQ0tfVVJMX1RPS0VOLCB1c2VWYWx1ZTogc2xhY2tVcmx9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==