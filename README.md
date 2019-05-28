# NGX Slack Notification

[![Maintainability](https://api.codeclimate.com/v1/badges/e4829d29383bae5fcd96/maintainability)](https://codeclimate.com/github/RomainMarecat/ngx-slack-notification/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e4829d29383bae5fcd96/test_coverage)](https://codeclimate.com/github/RomainMarecat/ngx-slack-notification/test_coverage)

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
