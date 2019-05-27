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
export const SLACK_URL_TOKEN = new InjectionToken('slackUrl');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJvbWFpbm1hcmVjYXQvbmd4LXNsYWNrLW5vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbInNsYWNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRXhFLE1BQU0sT0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsVUFBVSxDQUFDOzs7Ozs7QUFFckUsTUFBTSxVQUFVLHlCQUF5QixDQUFDLFVBQXNCLEVBQUUsUUFBZ0I7SUFDaEYsT0FBTyxJQUFJLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBU0QsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUt0QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxVQUFVLEVBQUUseUJBQXlCO29CQUNyQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO2lCQUNwQztnQkFDQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQzthQUMvQztTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF2QkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2xhY2tOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zbGFjay1ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTTEFDS19VUkxfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignc2xhY2tVcmwnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbkZhY3RvcnkoaHR0cENsaWVudDogSHR0cENsaWVudCwgc2xhY2tVcmw6IHN0cmluZykge1xuICByZXR1cm4gbmV3IFNsYWNrTm90aWZpY2F0aW9uU2VydmljZShodHRwQ2xpZW50LCBzbGFja1VybCk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGFja01vZHVsZSB7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgU2xhY2tNb2R1bGVcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KHNsYWNrVXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNsYWNrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBTbGFja05vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZU5vdGlmaWNhdGlvbkZhY3RvcnksXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50LCBTTEFDS19VUkxfVE9LRU5dXG4gICAgICB9LFxuICAgICAgICB7cHJvdmlkZTogU0xBQ0tfVVJMX1RPS0VOLCB1c2VWYWx1ZTogc2xhY2tVcmx9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==