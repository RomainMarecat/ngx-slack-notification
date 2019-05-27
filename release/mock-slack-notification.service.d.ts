import { Observable } from 'rxjs';
export declare class MockSlackNotificationService {
    notify(): void;
    sendNotification(): Observable<string>;
}
