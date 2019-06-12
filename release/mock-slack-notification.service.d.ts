import { Observable } from 'rxjs';
export declare class MockSlackNotificationService {
    /**
     * Mock void function
     */
    notify(): void;
    /**
     * Mock an Observable of success callback
     */
    sendNotification(): Observable<string>;
}
