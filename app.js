// Bale WebApp Instance
let webapp = window.Bale?.WebApp;

// Province Labels
const PROVINCE_LABELS = {
    tehran: 'تهران',
    gilan: 'گیلان',
    azarbayjan_sharghi: 'آذربایجان شرقی',
    azarbayjan_gharbi: 'آذربایجان غربی',
    kermanshah: 'کرمانشاه',
    khuzestan: 'خوزستان',
    fars: 'فارس',
    esfahan: 'اصفهان',
    khorasan_razavi: 'خراسان رضوی',
    qazvin: 'قزوین',
    semnan: 'سمنان',
    qom: 'قم',
    markazi: 'مرکزی',
    zanjan: 'زنجان',
    mazandaran: 'مازندران',
    golestan: 'گلستان',
    ardabil: 'اردبیل',
    yazd: 'یزد',
    kerman: 'کرمان',
    hormozgan: 'هرمزگان',
    lorestan: 'لرستان',
    ilam: 'ایلام',
    kohgiluyeh: 'کهگیلویه و بویراحمد',
    bushehr: 'بوشهر',
    sistan: 'سیستان و بلوچستان',
    kurdistan: 'کردستان',
    hamedan: 'همدان',
    chaharmahal: 'چهارمحال و بختیاری',
    khorasan_shomali: 'خراسان شمالی',
    khorasan_jonubi: 'خراسان جنوبی',
    alborz: 'البرز'
};

// Load centers from API or use default data
async function loadCentersData() {
    try {
        const centers = await API.getCenters();
        // If empty, return default data
        if (!centers || Object.keys(centers).length === 0) {
            return getDefaultData();
        }
        return centers;
    } catch (e) {
        console.error('Error loading data from API:', e);
        return getDefaultData();
    }
}

// Default Data Structure - مراکز رفاهی و خدماتی
function getDefaultData() {
    return {
    tehran: {
        restaurant: [
            {
                name: 'کافه رستوران دیبارو',
                url: 'https://ble.ir/refah014/-322532761545487303/1760446102660',
                // می‌تونی برای هر مرکز آدرس و تلفن اختصاصی اضافه کنی:
                // address: 'آدرس دقیق این مرکز',
                // phone: '021-12345678'
            },
            {
                name: 'رستوران مخبرالدوله',
                url: 'https://ble.ir/refah014/277381666708229803/1759566428339',
                address: 'تهران، خیابان فردوسی، نرسیده به میدان بهارستان',
                phone: '021-33445566'
            },
            { name: 'فست فود گامبالو', url: 'https://ble.ir/refah014/-1518217144440737200/1759569915463' },
            { name: 'طباخی کاج تهران', url: 'https://ble.ir/refah014/7476715751840451443/1756902107663' },
            { name: 'کافه فست فود ال سی', url: 'https://ble.ir/refah014/3843225674709020542/1756199560528' },
            { name: 'رستوران فیروزه آجودانیه', url: 'https://ble.ir/refah014/-7585562198480880305/1759330765263' },
            { name: 'رستوران های هانی', url: 'https://ble.ir/refah014/-9186052789725386084/1752167325477' },
            { name: 'رستوران مضراب', url: 'https://ble.ir/refah014/-7761685810847793064/1740562153655' },
            { name: 'رستوران ملی', url: 'https://ble.ir/refah014/2358656238920851/1739908307849' },
            { name: 'شرکت هتل پارسیان استقلال', url: 'https://ble.ir/refah014/-5885690774591849356/1748067029811' }
        ],
        clothing: [
            { name: 'پوشاک بگوتا', url: 'https://ble.ir/refah014/5562332622048501043/1747654082738' },
            { name: 'پوشاک پاتیس', url: 'https://ble.ir/refah014/4926070722731387/1745816840920' },
            { name: 'پوشاک بهپوشان', url: 'https://ble.ir/refah014/7899347095913747/1745816657439' }
        ],
        medical: [
            { name: 'بیمارستان‌های طرف قرارداد (بستری)', url: 'https://drive.google.com/file/d/1JjA91EJ7f_FZHqtHv41fxkHL5WFeuful/view?usp=drive_link' },
            { name: 'فیزیوتراپی‌های طرف قرارداد', url: 'https://drive.google.com/file/d/1tX1nr9BkJkJ51rZQwwhNCFxegKsG5S4m/view?usp=drive_link' },
            { name: 'بیمارستان‌های طرف قرارداد (سرپایی)', url: 'https://drive.google.com/file/d/1BEBlCe_4Hycbs1DIGjVvGm3gtgTgScG_/view?usp=drive_link' },
            { name: 'آزمایشگاه‌های طرف قرارداد', url: 'https://drive.google.com/file/d/1wlhH9NwHlKDfw4zU4pewJHjwuBQR7OcG/view?usp=drive_link' },
            { name: 'داروخانه‌های طرف قرارداد', url: 'https://drive.google.com/file/d/1WjX83zqfroRCm8GTwvqdRID35_gKQlsN/view?usp=sharing' },
            { name: 'مراکز تصویربرداری طرف قرارداد', url: 'https://drive.google.com/file/d/1L0j12VWuCkMFSsbWZ-wjFwbC2xBk9hH2/view?usp=sharing' },
            { name: 'مطب و درمانگاه‌های طرف قرارداد', url: 'https://drive.google.com/file/d/1osfHevokzeAzZQCsW_v4oNLi89mURBjG/view?usp=sharing' },
            { name: 'مراکز دندانپزشکی طرف قرارداد', url: 'https://drive.google.com/file/d/1oDDf0GsR5bsoZDuIGdJAfn8ZqE8prNm0/view?usp=sharing' }
        ],
        welfare: [
            { name: 'پلتفرم خرید انتخابم', url: 'https://ble.ir/refah014/-874405462146013767/1755615801085' },
            { name: 'مرکز آموزشی و کنکور تام لند', url: 'https://ble.ir/refah014/2926273423154987/1748068505531' },
            { name: 'مرکز آموزشی و کنکور تخته سیاه', url: 'https://ble.ir/refah014/-5626163856305045045/1756541073355' },
            { name: 'فرش مشهد اردهال', url: 'https://ble.ir/refah014/-7155075224441813134/1744989632439' },
            { name: 'صنایع چوب لاوین', url: 'https://ble.ir/refah014/6866748335490201399/1756293268358' },
            { name: 'منسوجات لایکو', url: 'https://ble.ir/refah014/3575001565156099841/1740741717470' }
        ],
        optical: [
            { name: 'عینک سرا', url: 'https://ble.ir/refah014/-7660460385583291214/1744719226509' },
            { name: 'عینک مرسدس', url: 'https://ble.ir/refah014/2318235402653722320/1738094116987' },
            { name: 'عینک بنیامین', url: 'https://ble.ir/refah014/3516972074228637506/1740665493980' }
        ],
        pool: [
            { name: 'استخر دلفین آبی آقایان و بانوان (رایگان)', url: 'https://ble.ir/refah014/6980408245386692986/1753094396850' },
            { name: 'استخر شهدای آتش‌نشانی آقایان و بانوان (رایگان)', url: 'https://ble.ir/refah014/-4263468185523523203/1753091745618' },
            { name: 'استخر یاد یاران (دو قلو)', url: 'https://ble.ir/refah014/-4979067419578332567/1759836035148' },
            { name: 'استخر برق آلستوم', url: 'https://ble.ir/refah014/7055876056501284516/1759905141708' },
            { name: 'استخر موج طلایی آقایان و بانوان (رایگان)', url: 'https://ble.ir/refah014/-3720189860497842002/1752949462459' },
            { name: 'استخر گل نرگس آقایان', url: 'https://ble.ir/refah014/-1517978691331451659/1747483942429' },
            { name: 'استخر چاپ و نشر بانک ملی (60% تخفیف)', url: 'https://ble.ir/refah014/2935590745734183898/1741359516917' },
            { name: 'استخر آزادی (50% تخفیف)', url: 'https://ble.ir/refah014/6765200943410615199/1741417584362' },
            { name: 'استخر درفشی فر (50% تخفیف)', url: 'https://ble.ir/refah014/-5530858750612864048/1741417527464' }
        ]
    }
};
}

// Initialize centers data
let centersData = {};

// Load data asynchronously
async function initializeCentersData() {
    centersData = await loadCentersData();
    console.log('Centers data loaded:', Object.keys(centersData).length, 'provinces');
}

// Category metadata
const categories = {
    restaurant: { title: 'رستوران‌ها', icon: '🍽️' },
    clothing: { title: 'پوشاک', icon: '👔' },
    medical: { title: 'مراکز درمانی', icon: '🏥' },
    welfare: { title: 'رفاهی و خدماتی', icon: '🏪' },
    optical: { title: 'عینک فروشی‌ها', icon: '👓' },
    pool: { title: 'استخرها', icon: '🏊' }
};

// State
let currentProvince = 'all';
let currentCategory = 'all';
let searchQuery = '';

// Initialize App
async function initApp() {
    console.log('initApp() called');

    // Re-check webapp in case SDK loaded after initial page load
    webapp = window.Bale?.WebApp;

    if (!webapp) {
        console.warn('Bale WebApp SDK not available - running in browser mode');
        await showApp();
        return;
    }

    console.log('Bale SDK available - initializing...');

    try {
        // Apply theme colors
        applyTheme();

        // Setup Back Button
        webapp.BackButton.onClick(() => {
            webapp.close();
        });
        webapp.BackButton.show();

        // Expand to full height
        webapp.expand();

        // Set header color
        if (webapp.setHeaderColor) {
            webapp.setHeaderColor('secondary_bg_color');
        }

        // Enable closing confirmation
        webapp.enableClosingConfirmation();

        // Notify Bale that the app is ready
        webapp.ready();

        console.log('Bale SDK initialized successfully');
    } catch (error) {
        console.error('Error initializing Bale SDK:', error);
    }

    // Show app after initialization
    await showApp();
}

// Apply Bale Theme
function applyTheme() {
    if (!webapp || !webapp.themeParams) return;

    const theme = webapp.themeParams;
    const root = document.documentElement;

    // Apply CSS variables from Bale theme
    if (theme.bg_color) root.style.setProperty('--bg-color', theme.bg_color);
    if (theme.text_color) root.style.setProperty('--text-color', theme.text_color);
    if (theme.hint_color) root.style.setProperty('--hint-color', theme.hint_color);
    if (theme.link_color) root.style.setProperty('--link-color', theme.link_color);
    if (theme.button_color) root.style.setProperty('--button-color', theme.button_color);
    if (theme.button_text_color) root.style.setProperty('--button-text-color', theme.button_text_color);
    if (theme.secondary_bg_color) root.style.setProperty('--secondary-bg-color', theme.secondary_bg_color);
    if (theme.header_bg_color) root.style.setProperty('--header-bg-color', theme.header_bg_color);
    if (theme.accent_text_color) root.style.setProperty('--accent-text-color', theme.accent_text_color);
    if (theme.section_bg_color) root.style.setProperty('--section-bg-color', theme.section_bg_color);
    if (theme.section_header_text_color) root.style.setProperty('--section-header-text-color', theme.section_header_text_color);
    if (theme.section_separator_color) root.style.setProperty('--section-separator-color', theme.section_separator_color);
}

// Show App
async function showApp() {
    console.log('showApp() called');

    try {
        // Load centers data first
        await initializeCentersData();
        console.log('Centers data initialized');

        document.getElementById('loading').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        console.log('UI updated - loading hidden, app shown');

        renderContent();
        console.log('Content rendered');

        updateStats();
        console.log('Stats updated');

        setupEventListeners();
        console.log('Event listeners setup complete');

        setupModalListeners();
        console.log('Modal listeners setup complete');
    } catch (error) {
        console.error('Error in showApp():', error);
        // Show error message to user
        document.getElementById('loading').innerHTML = '<p style="color: #ed1a24;">خطا در بارگذاری داده‌ها</p>';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search input
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderContent();
    });

    // Province filter
    document.getElementById('provinceFilter').addEventListener('change', (e) => {
        currentProvince = e.target.value;
        renderContent();
    });

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        currentCategory = e.target.value;
        renderContent();
    });
}

// Get icon for each item
function getItemIcon(categoryKey, itemName) {
    const icons = {
        restaurant: ['🍽️', '🍔', '🍕', '☕', '🥘', '🍜', '🥗', '🍱', '🍛', '🥙'],
        clothing: ['👔', '👕', '👗', '🧥', '👖', '👞', '🥾', '🎽', '🧣'],
        medical: ['🏥', '⚕️', '💊', '🩺', '💉', '🏨', '🔬', '🧪'],
        welfare: ['🏪', '📚', '🎓', '🛒', '🏬', '🎁', '🪑'],
        optical: ['👓', '🕶️', '👁️'],
        pool: ['🏊', '💧', '🌊', '🏊‍♂️', '🏊‍♀️']
    };

    const categoryIcons = icons[categoryKey] || ['⭐'];
    const hash = itemName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return categoryIcons[hash % categoryIcons.length];
}

// Render Content
function renderContent() {
    const contentDiv = document.getElementById('content');
    const emptyState = document.getElementById('emptyState');
    contentDiv.innerHTML = '';

    let hasResults = false;

    // Get provinces to display
    const provincesToShow = currentProvince === 'all'
        ? Object.keys(centersData)
        : [currentProvince];

    provincesToShow.forEach(province => {
        const provinceData = centersData[province];

        // Skip if province has no data
        if (!provinceData) return;

        // Get categories to display
        const categoriesToShow = currentCategory === 'all'
            ? Object.keys(provinceData)
            : [currentCategory];

        categoriesToShow.forEach(categoryKey => {
            const categoryData = provinceData[categoryKey];
            if (!categoryData) return;

            // Filter items by search query
            const filteredItems = categoryData.filter(item =>
                item.name.toLowerCase().includes(searchQuery)
            );

            if (filteredItems.length === 0) return;

            hasResults = true;

            // Create category section
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';

            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <span class="category-icon">${categories[categoryKey].icon}</span>
                <h2 class="category-title">${categories[categoryKey].title}</h2>
            `;
            categoryDiv.appendChild(categoryHeader);

            const itemsList = document.createElement('div');
            itemsList.className = 'items-list';

            filteredItems.forEach(item => {
                const itemIcon = getItemIcon(categoryKey, item.name);
                const itemCard = document.createElement('div');
                itemCard.className = 'item-card';
                itemCard.innerHTML = `
                    <div class="item-link">
                        <div class="item-content">
                            <div class="item-image">${itemIcon}</div>
                            <span class="item-name">${item.name}</span>
                        </div>
                        <span class="item-arrow">◀</span>
                    </div>
                `;

                // Handle card clicks - show modal or table
                itemCard.addEventListener('click', () => {
                    if (item.type === 'table') {
                        showTableModal(item);
                    } else {
                        showCenterDetails(item, categoryKey);
                    }
                });

                itemsList.appendChild(itemCard);
            });

            categoryDiv.appendChild(itemsList);
            contentDiv.appendChild(categoryDiv);
        });
    });

    // Show/hide empty state
    if (hasResults) {
        emptyState.style.display = 'none';
        contentDiv.style.display = 'block';
    } else {
        emptyState.style.display = 'block';
        contentDiv.style.display = 'none';
    }

    updateStats();
}

// Open Link
function openLink(url) {
    if (webapp && webapp.openLink) {
        // Open in Bale internal browser
        webapp.openLink(url, { try_instant_view: true });
    } else {
        // Fallback to regular browser
        window.open(url, '_blank');
    }
}

// Update Stats
function updateStats() {
    const statsContainer = document.getElementById('statsContainer');
    const categoryCounts = {};

    // Get provinces to count based on filter
    const provincesToCount = currentProvince === 'all'
        ? Object.keys(centersData)
        : [currentProvince];

    provincesToCount.forEach(province => {
        const provinceData = centersData[province];
        if (!provinceData) return;

        Object.keys(provinceData).forEach(categoryKey => {
            const categoryData = provinceData[categoryKey];
            if (!categoryData || categoryData.length === 0) return;

            // Initialize category count
            if (!categoryCounts[categoryKey]) {
                categoryCounts[categoryKey] = 0;
            }

            // Count centers in this category
            categoryData.forEach(item => {
                if (item.type === 'table' && item.items) {
                    // For table items (medical centers), count the items inside
                    categoryCounts[categoryKey] += item.items.length;
                } else {
                    // For regular items, count as 1
                    categoryCounts[categoryKey] += 1;
                }
            });
        });
    });

    // Clear stats container
    statsContainer.innerHTML = '';

    // If no stats, show a message
    if (Object.keys(categoryCounts).length === 0) {
        statsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">موردی یافت نشد</p>';
        return;
    }

    // Create one card with all categories
    const statCard = document.createElement('div');
    statCard.className = 'stat-card stat-card-combined';

    let statsHTML = '';
    Object.keys(categoryCounts).forEach(categoryKey => {
        const count = categoryCounts[categoryKey];
        const categoryInfo = categories[categoryKey];

        statsHTML += `
            <div class="stat-item">
                <span class="stat-icon">${categoryInfo.icon}</span>
                <span class="stat-count">${count}</span>
                <span class="stat-name">${categoryInfo.title}</span>
            </div>
        `;
    });

    statCard.innerHTML = statsHTML;
    statsContainer.appendChild(statCard);
}

// Generate center details
function getCenterDetails(item, categoryKey) {
    const details = {
        description: `یکی از مراکز طرف قرارداد در دسته ${categories[categoryKey].title} که خدمات با کیفیت ارائه می‌دهد.`,
        discount: null,
        address: item.address || 'تهران، خیابان ولیعصر، پلاک 123', // استفاده از آدرس اختصاصی یا پیش‌فرض
        phone: item.phone || '021-12345678', // استفاده از تلفن اختصاصی یا پیش‌فرض
        features: []
    };

    // Add category-specific details
    if (categoryKey === 'restaurant') {
        details.description = 'رستوران با کیفیت و محیطی دنج برای پذیرایی از شما عزیزان. منوی متنوع ایرانی و فرنگی.';
        details.features = ['منوی متنوع', 'محیط دنج', 'قیمت مناسب', 'پارکینگ رایگان'];
        // اگر آدرس اختصاصی نداشته باشد، از آدرس پیش‌فرض دسته استفاده می‌شود
        if (!item.address) details.address = 'تهران، خیابان ولیعصر، نرسیده به میدان ونک';
        if (!item.phone) details.phone = '021-88123456';
        if (item.name.includes('کافه')) {
            details.features.push('نوشیدنی‌های متنوع');
            details.features.push('Wi-Fi رایگان');
        }
    } else if (categoryKey === 'pool') {
        details.description = 'استخری مجهز با امکانات کامل و کادر حرفه‌ای. آب تمیز و بهداشتی.';
        details.features = ['استخر تمیز', 'امکانات کامل', 'رختکن مجهز', 'مربی حرفه‌ای'];
        if (!item.address) details.address = 'تهران، خیابان انقلاب، جنب پارک لاله';
        if (!item.phone) details.phone = '021-66987654';
        if (item.name.includes('رایگان')) {
            details.discount = 'استفاده رایگان';
        } else if (item.name.includes('60%')) {
            details.discount = '60% تخفیف';
        } else if (item.name.includes('50%')) {
            details.discount = '50% تخفیف';
        }
    } else if (categoryKey === 'medical') {
        details.description = 'مرکز درمانی مجهز با پزشکان متخصص و کادر حرفه‌ای. خدمات با کیفیت.';
        details.features = ['خدمات پزشکی', 'کادر متخصص', 'تجهیزات مدرن', 'پذیرش 24 ساعته'];
        details.discount = 'تخفیف ویژه اعضا';
        if (!item.address) details.address = 'تهران، خیابان شریعتی، بالاتر از پل رومی';
        if (!item.phone) details.phone = '021-22334455';
    } else if (categoryKey === 'clothing') {
        details.description = 'فروشگاه پوشاک با برندهای معتبر و قیمت مناسب. تنوع بالا در محصولات.';
        details.features = ['کیفیت عالی', 'قیمت مناسب', 'برندهای معتبر', 'امکان تعویض'];
        details.discount = 'تخفیف ویژه 20%';
        if (!item.address) details.address = 'تهران، خیابان سعادت‌آباد، مجتمع تجاری کوروش';
        if (!item.phone) details.phone = '021-44556677';
    } else if (categoryKey === 'optical') {
        details.description = 'عینک فروشی با برندهای معتبر جهانی. مشاوره رایگان توسط متخصصین.';
        details.features = ['برندهای معتبر', 'تنوع بالا', 'مشاوره رایگان', 'گارانتی اصالت'];
        details.discount = 'تخفیف ویژه 15%';
        if (!item.address) details.address = 'تهران، خیابان نیاوران، نبش کوچه هشتم';
        if (!item.phone) details.phone = '021-22778899';
    } else if (categoryKey === 'welfare') {
        details.description = 'مرکز ارائه خدمات رفاهی با امکانات کامل و قیمت مناسب.';
        details.features = ['خدمات متنوع', 'کیفیت بالا', 'قیمت مناسب', 'کادر مجرب'];
        details.discount = 'تخفیف ویژه اعضا';
        if (!item.address) details.address = 'تهران، میدان تجریش، ابتدای خیابان شریعتی';
        if (!item.phone) details.phone = '021-22112233';
    }

    return details;
}

// Show Modal
function showCenterDetails(item, categoryKey) {
    const modal = document.getElementById('detailsModal');
    const details = getCenterDetails(item, categoryKey);
    const itemIcon = getItemIcon(categoryKey, item.name);

    // Set modal content
    document.getElementById('modalIcon').textContent = itemIcon;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = details.description;

    // Set image - use actual image if available, otherwise show placeholder
    const imageContainer = document.querySelector('.modal-image-container');
    const modalImage = document.getElementById('modalImage');
    const placeholder = document.getElementById('modalImagePlaceholder');

    if (item.image) {
        modalImage.src = item.image;
        modalImage.style.display = 'block';
        placeholder.style.display = 'none';
    } else {
        modalImage.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.textContent = itemIcon;
    }

    // Set details
    let detailsHTML = '';

    // Rating stars
    if (item.rating && item.rating > 0) {
        const fullStars = '★'.repeat(item.rating);
        const emptyStars = '☆'.repeat(5 - item.rating);
        detailsHTML += `
            <div class="modal-detail-item">
                <div class="modal-detail-icon">⭐</div>
                <div class="modal-detail-content">
                    <div class="modal-detail-label">امتیاز</div>
                    <div class="modal-detail-value" style="color: #faa627; font-size: 20px;">
                        ${fullStars}${emptyStars} <span style="color: #666; font-size: 14px;">(${item.rating}/5)</span>
                    </div>
                </div>
            </div>
        `;
    }

    if (details.discount) {
        detailsHTML += `
            <div class="modal-detail-item">
                <div class="modal-detail-icon">🎁</div>
                <div class="modal-detail-content">
                    <div class="modal-detail-label">تخفیف ویژه</div>
                    <div class="modal-detail-value">${details.discount}</div>
                </div>
            </div>
        `;
    }

    if (details.features.length > 0) {
        detailsHTML += `
            <div class="modal-detail-item">
                <div class="modal-detail-icon">⭐</div>
                <div class="modal-detail-content">
                    <div class="modal-detail-label">ویژگی‌ها</div>
                    <div class="modal-detail-value">${details.features.join(' • ')}</div>
                </div>
            </div>
        `;
    }

    detailsHTML += `
        <div class="modal-detail-item">
            <div class="modal-detail-icon">📍</div>
            <div class="modal-detail-content">
                <div class="modal-detail-label">آدرس</div>
                <div class="modal-detail-value">${details.address}</div>
            </div>
        </div>
    `;

    detailsHTML += `
        <div class="modal-detail-item">
            <div class="modal-detail-icon">📞</div>
            <div class="modal-detail-content">
                <div class="modal-detail-label">تلفن</div>
                <div class="modal-detail-value">${details.phone}</div>
            </div>
        </div>
    `;

    // Location
    if (item.location) {
        detailsHTML += `
            <div class="modal-detail-item">
                <div class="modal-detail-icon">🗺️</div>
                <div class="modal-detail-content">
                    <div class="modal-detail-label">موقعیت مکانی</div>
                    <div class="modal-detail-value">
                        <a href="${item.location}" target="_blank" style="color: #1976d2; text-decoration: none;">
                            📍 مشاهده در نقشه
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('modalDetails').innerHTML = detailsHTML;

    // Set visit button action
    const visitBtn = document.getElementById('modalVisitBtn');
    visitBtn.onclick = () => {
        closeModal();
        setTimeout(() => openLink(item.url), 300);
    };

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
}

// Setup modal close listeners
function setupModalListeners() {
    const modal = document.getElementById('detailsModal');
    const closeBtn = document.getElementById('modalClose');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Table Modal listeners
    const tableModal = document.getElementById('tableModal');
    const tableCloseBtn = document.getElementById('tableModalClose');
    const tableOverlay = tableModal.querySelector('.modal-overlay');

    tableCloseBtn.addEventListener('click', closeTableModal);
    tableOverlay.addEventListener('click', closeTableModal);

    // Close table modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tableModal.style.display === 'flex') {
            closeTableModal();
        }
    });
}

// Show Table Modal
function showTableModal(center) {
    const modal = document.getElementById('tableModal');
    const title = document.getElementById('tableModalTitle');
    const tbody = document.getElementById('centersTableBody');

    title.textContent = center.name;
    tbody.innerHTML = '';

    if (!center.items || center.items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px; color: #999;">اطلاعاتی ثبت نشده است</td></tr>';
    } else {
        center.items.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.city}</td>
                <td>${item.name}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
            `;
            tbody.appendChild(row);
        });
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Table Modal
function closeTableModal() {
    const modal = document.getElementById('tableModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Wait for Bale SDK to load (with shorter timeout)
function waitForBaleSDK() {
    console.log('Starting app initialization...');

    // If Bale SDK is already available
    if (window.Bale?.WebApp) {
        console.log('Bale SDK found immediately');
        initApp();
        return;
    }

    console.log('Bale SDK not found, waiting...');

    // Wait up to 1 second for SDK to load (shorter timeout)
    let attempts = 0;
    const maxAttempts = 10; // 10 * 100ms = 1 second

    const checkSDK = setInterval(() => {
        attempts++;
        console.log(`Checking for SDK... attempt ${attempts}/${maxAttempts}`);

        if (window.Bale?.WebApp) {
            clearInterval(checkSDK);
            console.log('Bale SDK loaded!');
            initApp();
        } else if (attempts >= maxAttempts) {
            // SDK didn't load, continue without it
            clearInterval(checkSDK);
            console.log('SDK timeout - loading without Bale SDK');
            initApp();
        }
    }, 100);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForBaleSDK);
} else {
    // DOM already loaded
    console.log('DOM already ready');
    waitForBaleSDK();
}
