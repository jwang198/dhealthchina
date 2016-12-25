'use strict';

try {
  angular.module('shoutoutGetSubscriberPreload');
} catch (e) {
  angular.module('shoutoutGetSubscriberPreload', []);
}

angular.module('shoutoutGetSubscriberPreload').run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('modules/widget/upgrade-view.html',
    "<div class='upgrade-app-container' ng-if='main.isInNeedOfUpgrade()'>\n" +
    "  <span class='overlay-view-wrapper'>\n" +
    "    <span class='upgrade-app-picture'></span>\n" +
    "    <p class='upgrade-app-text'>{{ 'widget.notification.demo_mode_editor.title' | translate }}</p>\n" +
    "    <p class='upgrade-app-text'>{{ 'widget.notification.demo_mode_editor.subtitle' | translate }}</p>\n" +
    "  </span>\n" +
    "</div>\n"
  );
}]);