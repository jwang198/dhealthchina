'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/success-view.html',
    "<div class='success-view-container'>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; !main.isInEditorOrPreviewMode() &amp;&amp; !main.isInPopup()'>\n" +
    "    <i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.settings.signupForm.thankYouTitleText || 'formFields.messages.thankYouTitle.placeholder' | translate }}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.settings.signupForm.thankYouSubtitleText || 'formFields.messages.thankyou.placeholder' | translate }}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()' ng-if='main.isInMobile()'>{{'widget.general.backToWebsite' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; main.isInEditorOrPreviewMode() &amp;&amp; !main.isInPopup()'>\n" +
    "    <i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.settings.signupForm.thankYouTitleText || 'widget.general.congrats' | translate}}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.settings.signupForm.thankYouSubtitleText || 'widget.general.subscribeOk' | translate}}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()'>{{'widget.general.back' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; main.isInEditorOrPreviewMode() &amp;&amp; main.isInPopup()'>\n" +
    "    <i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.settings.popup.popupThankYouTitle || 'widget.general.congrats' | translate}}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.settings.popup.popupThankYouSubtitle || 'widget.general.subscribeOk' | translate}}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()' ng-if='main.isInMobile()'>{{'widget.general.backToWebsite' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class='success-view' ng-if='main.subscribeIsSuccessful &amp;&amp; !main.isInEditorOrPreviewMode() &amp;&amp; main.isInPopup()'>\n" +
    "    <i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup() &amp;&amp; !main.isPreview()'></i>\n" +
    "    <span class='overlay-view-wrapper'>\n" +
    "      <h3 class='success-view-title'>{{ main.settings.popup.popupThankYouTitle || 'formFields.messages.thankYouTitle.placeholder' | translate}}</h3>\n" +
    "      <p class='success-view-subtitle'>{{ main.settings.popup.popupThankYouSubtitle || 'formFields.messages.thankyou.placeholder' | translate}}</p>\n" +
    "      <button class='success-back-to-editor' ng-click='main.returnToForm()' ng-if='main.isInMobile()'>{{'widget.general.backToWebsite' | translate}}</button>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );
}]);