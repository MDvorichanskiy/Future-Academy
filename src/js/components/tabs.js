import '../plugins/tabsPlugin'

export default function initTabs () {
  jQuery('.age-selection__categories').tabset({
    tabLinks: 'a',
    defaultTab: true,
    activeClass: 'age-selection__link--active'
  });
}
