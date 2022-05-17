import NotificationLink from './components/NotificationLink';
import NotificationItem from './components/NotificationItem';
import NotificationsDropdown from './components/NotificationsDropdown';

Nova.booting((Vue, router, store) => {
    Vue.component('notification-link', NotificationLink);
    Vue.component('notification-item', NotificationItem);
    Vue.component('notifications-dropdown', NotificationsDropdown);
});
