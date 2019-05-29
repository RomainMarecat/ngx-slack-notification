import { Observable, of } from 'rxjs';

export class MockSlackNotificationService {
  /**
   * Mock void function
   */
  notify(): void {
  }

  /**
   * Mock an Observable of success callback
   */
  sendNotification(): Observable<string> {
    return of('ok');
  }
}
