import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SlackMessage } from './slack-message';
export declare class SlackNotificationService {
    private http;
    private slackUrl;
    constructor(http: HttpClient, slackUrl: string);
    /**
     * Send notification to slack
     *
     * you could subscribe directly on this Observable
     *
     * returns 200 with message "ok" if success
     * throw HttpErrorResponse 400
     */
    sendNotification(message: string): Observable<string>;
    /**
     * Main function to send notification to slack
     */
    notify(slackMessage: SlackMessage): void;
}
