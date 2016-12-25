'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/main.html',
    "<div class='app-container' ng-class=\"[main.getStyle()['skin'], main.getStyle()['layout'], main.popupBackground()]\" ng-if='!main.hideFormIfPopupIsOpen() &amp;&amp; !main.hideForm'>\n" +
    "  <div class='layout-specific-attribute'></div>\n" +
    "  <div class='app-view' ng-class=\"{'success-view-shown': main.subscribeIsSuccessful}\">\n" +
    "    <div class='header-block' ng-class=\"main.getStyle()['headerAlignment']\">\n" +
    "      <i class='fa fa-times close-popup' ng-click='main.closePopup()' ng-if='main.isInPopup()'></i>\n" +
    "      <div class='title-row' ng-if='main.settings.signupForm.showTitle &amp;&amp; !main.isInPopup()'>\n" +
    "        {{main.settings.signupForm.titleText || \"popup.titlePlaceholder\" | translate}}\n" +
    "      </div>\n" +
    "      <div class='title-row' ng-if='main.isInPopup()'>\n" +
    "        {{main.settings.popup.popupTitleText || 'popup.titlePlaceholder' | translate}}\n" +
    "      </div>\n" +
    "      <div class='subtitle-row' ng-if='main.settings.signupForm.showSubtitle &amp;&amp; main.settings.signupForm.showTitle &amp;&amp; !main.isInPopup()'>\n" +
    "        {{main.settings.signupForm.subtitleText || 'formFields.subtitle.placeholder' | translate}}\n" +
    "      </div>\n" +
    "      <div class='subtitle-row' ng-if='main.settings.popup.showSubtitle &amp;&amp; main.isInPopup()'>\n" +
    "        {{main.settings.popup.popupSubtitleText || 'formFields.subtitle.placeholder' | translate}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class='collectable-info' ng-class=\"main.getStyle()['bodyAlignment']\">\n" +
    "      <div class='name-info-block' ng-if='main.settings.generalSettings.collectName'>\n" +
    "        <span class='label-block'>\n" +
    "          <label class='field-description-label name-label'>\n" +
    "            {{main.settings.generalSettings.namePlaceholder || 'formFields.name.placeholder' | translate}}\n" +
    "          </label>\n" +
    "        </span>\n" +
    "        <div class='name-block input-block' ng-class='{invalid: !main.validName}'>\n" +
    "          <i class='fa fa-user user-icon icon'></i>\n" +
    "          <input class='name-input info-input' ng-class='{invalid: !main.validName}' ng-model='main.subscriberName' placeholder=\"{{main.settings.generalSettings.namePlaceholder || 'formFields.name.placeholder' | translate}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='phone-info-block' ng-if='main.generalSettings.collectPhone'>\n" +
    "        <div class='phone-labels-block label-block'>\n" +
    "          <label class='field-description-label country-code'>Country Code</label>\n" +
    "          <label class='field-description-label phone-number-label'>{{main.settings.generalSettings.phonePlaceholder || 'formFields.mobile.label' | translate}}</label>\n" +
    "        </div>\n" +
    "        <div class='phone-block input-block'>\n" +
    "          <div class='prefix-block'>\n" +
    "            <i class='fa fa-mobile phone-icon icon'></i>\n" +
    "            <span class='dial-code'>{{main.dialCode}}</span>\n" +
    "            <select class='phone-prefix' ng-model='main.dialCode'>\n" +
    "              <option class='prefix' ng-repeat='phone in main.phones' ng-selected='main.dialCode == phone.dialCode' value='{{phone.dialCode}}'>{{phone.name}} ({{phone.dialCode}})</option>\n" +
    "            </select>\n" +
    "            <i class='fa fa-angle-down select-icon'></i>\n" +
    "          </div>\n" +
    "          <div class='phone-input-block input-block' ng-class=\"{'invalid': !main.validPhone}\">\n" +
    "            <input class='phone-number-input info-input' ng-class=\"{'invalid': !main.validPhone}\" ng-model='main.subscriberPhone' placeholder=\"{{main.settings.generalSettings.phonePlaceholder || 'formFields.mobile.placeholder' | translate}}\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='email-info-block'>\n" +
    "        <span class='label-block'>\n" +
    "          <label class='field-description-label email-label'>\n" +
    "            {{main.settings.generalSettings.emailPlaceholder || 'formFields.email.label' | translate}}\n" +
    "          </label>\n" +
    "        </span>\n" +
    "        <div class='email-block input-block' ng-class='{invalid: !main.validEmail}'>\n" +
    "          <i class='fa fa-envelope-o email-icon icon'></i>\n" +
    "          <input class='email-input info-input' ng-class='{invalid: !main.validEmail}' ng-model='main.subscriberEmail' placeholder=\"{{main.settings.generalSettings.emailPlaceholder || 'formFields.email.placeholder' | translate }}\" type='email'>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class='button-block' ng-class=\"main.getStyle()['buttonAlignment']\" ng-if='!main.isInPopup()'>\n" +
    "        <button class='wix-button subscribe-button' ng-click='main.subscribe()' ng-disabled='main.isPreview()'>\n" +
    "          {{main.signupForm.buttonText || 'formFields.button.placeholder' | translate}}\n" +
    "        </button>\n" +
    "      </div>\n" +
    "      <div class='button-block' ng-class=\"main.getStyle()['buttonAlignment']\" ng-if='main.isInPopup()'>\n" +
    "        <button class='wix-button subscribe-button' ng-click='main.subscribe()' ng-disabled='main.isPreview()'>\n" +
    "          {{main.popup.popupButtonText || 'formFields.button.placeholder' | translate}}\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ng-if='main.showError' ng-include=\"'modules/widget/errors.html'\"></div>\n" +
    "  </div>\n" +
    "  <div ng-include=\"'modules/widget/upgrade-view.html'\"></div>\n" +
    "  <div ng-include=\"'modules/widget/success-view.html'\"></div>\n" +
    "</div>\n"
  );
}]);