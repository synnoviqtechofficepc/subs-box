(function () {
    const page = location.pathname.split('/').pop();

    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');

    const adminPages = [
        'admin-dashboard.html',
        'admin-users.html',
        'admin-orders.html',
        'admin-inventory.html',
        'admin-messages.html'
    ];

    const userPages = [
        'subscriber-dashboard.html',
        'dashboard-my-boxes.html',
        'dashboard-billing.html',
        'dashboard-settings.html',
        'dashboard-referrals.html'
    ];

    if (!loggedIn) {
        window.location.replace('auth.html');
        return;
    }

    if (adminPages.includes(page) && role !== 'admin') {
        window.location.replace('subscriber-dashboard.html');
    }

    if (userPages.includes(page) && role !== 'user') {
        window.location.replace('admin-dashboard.html');
    }
})();
