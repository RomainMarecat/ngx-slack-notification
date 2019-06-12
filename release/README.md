# NGX Slack Notification
[![Maintainability](https://api.codeclimate.com/v1/badges/4fa7ca6b97de97497658/maintainability)](https://codeclimate.com/github/RomainMarecat/ngx-slack-notification/maintainability)
## Installation 

```npm i --save @romainmarecat/ngx-slack-notification```

## Usage 

```javascript

import { SlackModule } from '@romainmarecat/ngx-slack-notification';

@NgModule({
  imports: [
    SlackModule.forRoot('HTTPS://YOUR-SLACK-WEBHOOKS')
  ]
})

```

```javascript

import { SlackNotificationService } from '@romainmarecat/ngx-slack-notification';

export class ExampleComponent extends OnInit {
            
    constructor(private slackNotificationService: SlackNotificationService) {
    }   
    
    ngOnInit() {
        this.slackNotificationService.notify({
            text: 'Hello World <https://alert-system.com/alerts/1234|Click here> ! Bye.', 
            username: 'System', 
            icon_emoji: ':camel:'
        });
    }
}
```
