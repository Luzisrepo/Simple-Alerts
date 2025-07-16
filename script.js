function showNotification(type, title, message, icon) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
                <button class="close-button" onclick="removeNotification(this.parentElement)">×</button>
                <div class="notification-header">
                    <div class="notification-icon">${icon}</div>
                    <div class="notification-title">${title}</div>
                </div>
                <div class="notification-message">${message}</div>
            `;

  const existingNotifications = document.querySelectorAll('.notification');
  const topOffset = 30 + (existingNotifications.length * 136);

  notification.style.top = `${topOffset}px`;
  notification.style.right = '30px';

  document.body.appendChild(notification);

  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
}

function removeNotification(notification) {
  notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 300);
}

function showSuccessNotification() {
  showNotification('success', 'Success', 'Injection completed sucessfully. Press R-Shift to open menu.', '✓');
}

function showWarningNotification() {
  showNotification('warning', 'Warning', 'AntiVirus is still on! This can interfere with injection!', '⚠');
}

function showErrorNotification() {
  showNotification('error', 'Error', 'Injection Failed.', '✕');
}

function showInfoNotification() {
  showNotification('info', 'Information', 'New update available. Download it now!', 'i');
}

function showCreditsNotification() {
  showNotification('info', 'Credits', 'made by ._rayzz :)', ':3');
}