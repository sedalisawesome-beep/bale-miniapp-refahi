// API Configuration
const API_CONFIG = {
    // آدرس API خود را اینجا وارد کنید
    // مثال: 'https://yourdomain.com/api.php'
    API_URL: window.location.origin + '/api.php',

    // در صورت استفاده از localhost
    // API_URL: 'http://localhost/miniapbale/api.php',

    // فعال/غیرفعال کردن حالت آفلاین
    USE_OFFLINE_MODE: true,
};

// API Helper Functions
const API = {
    // Get centers data
    async getCenters() {
        if (API_CONFIG.USE_OFFLINE_MODE) {
            // Use localStorage in offline mode
            const data = localStorage.getItem('centers_data');
            return data ? JSON.parse(data) : {};
        }

        try {
            const response = await fetch(API_CONFIG.API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.centers || {};
        } catch (error) {
            console.error('Error fetching centers:', error);
            // Fallback to localStorage
            const data = localStorage.getItem('centers_data');
            return data ? JSON.parse(data) : {};
        }
    },

    // Save centers data
    async saveCenters(centers) {
        if (API_CONFIG.USE_OFFLINE_MODE) {
            // Use localStorage in offline mode
            localStorage.setItem('centers_data', JSON.stringify(centers));
            return { success: true };
        }

        try {
            const response = await fetch(API_CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ centers })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            // Also save to localStorage as backup
            localStorage.setItem('centers_data', JSON.stringify(centers));

            return result;
        } catch (error) {
            console.error('Error saving centers:', error);
            // Fallback to localStorage
            localStorage.setItem('centers_data', JSON.stringify(centers));
            throw error;
        }
    }
};
