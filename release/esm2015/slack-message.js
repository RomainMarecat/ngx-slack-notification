/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SlackMessage() { }
if (false) {
    /**
     * Minimum required field to send valid message
     * Text with a link example : "Hello World <https://alert-system.com/alerts/1234|Click here> ! Bye."
     * @type {?}
     */
    SlackMessage.prototype.text;
    /**
     * username personalization
     * "username": "Milou"
     * @type {?|undefined}
     */
    SlackMessage.prototype.username;
    /**
     * Send a icon slack like ":ghost:"
     * @type {?|undefined}
     */
    SlackMessage.prototype.icon_emoji;
    /**
     * Send a direct message to user or on a channel
     * example :
     *
     * "channel": "#public-channel"
     * "channel": "#dev"
     *
     * or
     *
     *  "channel": "\@username"
     *  "channel": "\@tintin"
     * @type {?|undefined}
     */
    SlackMessage.prototype.channel;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhY2stbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Byb21haW5tYXJlY2F0L25neC1zbGFjay1ub3RpZmljYXRpb24vIiwic291cmNlcyI6WyJzbGFjay1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxrQ0FvQ0M7Ozs7Ozs7SUEvQkMsNEJBQXVDOzs7Ozs7SUFNdkMsZ0NBQWtCOzs7OztJQUtsQixrQ0FBb0I7Ozs7Ozs7Ozs7Ozs7O0lBY3BCLCtCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgU2xhY2tNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gcmVxdWlyZWQgZmllbGQgdG8gc2VuZCB2YWxpZCBtZXNzYWdlXG4gICAqIFRleHQgd2l0aCBhIGxpbmsgZXhhbXBsZSA6IFwiSGVsbG8gV29ybGQgPGh0dHBzOi8vYWxlcnQtc3lzdGVtLmNvbS9hbGVydHMvMTIzNHxDbGljayBoZXJlPiAhIEJ5ZS5cIlxuICAgKi9cbiAgdGV4dDogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHVzZXJuYW1lIHBlcnNvbmFsaXphdGlvblxuICAgKiBcInVzZXJuYW1lXCI6IFwiTWlsb3VcIlxuICAgKi9cbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBpY29uIHNsYWNrIGxpa2UgXCI6Z2hvc3Q6XCJcbiAgICovXG4gIGljb25fZW1vamk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBkaXJlY3QgbWVzc2FnZSB0byB1c2VyIG9yIG9uIGEgY2hhbm5lbFxuICAgKiBleGFtcGxlIDpcbiAgICpcbiAgICogXCJjaGFubmVsXCI6IFwiI3B1YmxpYy1jaGFubmVsXCJcbiAgICogXCJjaGFubmVsXCI6IFwiI2RldlwiXG4gICAqXG4gICAqIG9yXG4gICAqXG4gICAqICBcImNoYW5uZWxcIjogXCJAdXNlcm5hbWVcIlxuICAgKiAgXCJjaGFubmVsXCI6IFwiQHRpbnRpblwiXG4gICAqL1xuICBjaGFubmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbm90aGVyIGtleXMgdG8gc2VuZCBpZiBpdCdzIGV4aXN0IGluIHNsYWNrIGFwaVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIl19