import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { SlackNotificationService } from './slack-notification.service';
export declare const SLACK_URL_TOKEN: InjectionToken<string>;
export declare function createNotificationFactory(httpClient: HttpClient, slackUrl: string): SlackNotificationService;
export declare class SlackModule {
    /**
     * Initialize SlackModule
     */
    static forRoot(slackUrl: string): {
        ngModule: typeof SlackModule;
        providers: ({
            provide: typeof SlackNotificationService;
            useFactory: typeof createNotificationFactory;
            deps: (InjectionToken<string> | typeof HttpClient)[];
            useValue?: undefined;
        } | {
            provide: InjectionToken<string>;
            useValue: string;
            useFactory?: undefined;
            deps?: undefined;
        })[];
    };
}
