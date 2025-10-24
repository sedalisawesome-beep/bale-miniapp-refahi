// Admin Credentials (در محیط واقعی این باید در سرور باشد)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Storage Keys
const STORAGE_KEYS = {
    CENTERS: 'centers_data',
    SESSION: 'admin_session'
};

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

// Category Labels
const CATEGORY_LABELS = {
    restaurant: 'رستوران‌ها',
    clothing: 'پوشاک',
    medical: 'مراکز درمانی',
    pool: 'استخرها',
    welfare: 'رفاهی و خدماتی',
    optical: 'عینک فروشی'
};

// Initial Data from app.js
const INITIAL_DATA = {
    tehran: {
        restaurant: [
            {
                name: 'کافه رستوران دیبارو',
                url: 'https://ble.ir/refah014/-322532761545487303/1760446102660'
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

// State
let currentFilter = 'all';
let currentProvinceFilter = 'all';
let searchQuery = '';
let editingCenterId = null;
let currentImageBase64 = null;
let currentRating = 0;
let currentTableItems = [];  // For table-type centers

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    setupEventListeners();
});

// Check if user is logged in
function checkSession() {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION);
    if (session === 'active') {
        showAdminPanel();
    } else {
        showLoginScreen();
    }
}

// Show Login Screen
function showLoginScreen() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
}

// Show Admin Panel
function showAdminPanel() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    loadCenters();
}

// Setup Event Listeners
function setupEventListeners() {
    // Login Form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Add Center Button
    document.getElementById('addCenterBtn').addEventListener('click', () => {
        editingCenterId = null;
        openModal();
    });

    // Import Initial Data
    document.getElementById('importDataBtn').addEventListener('click', importInitialData);

    // Center Form
    document.getElementById('centerForm').addEventListener('submit', handleSaveCenter);

    // Modal Close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalCancel').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Filters
    document.getElementById('provinceFilterAdmin').addEventListener('change', (e) => {
        currentProvinceFilter = e.target.value;
        loadCenters();
    });

    document.getElementById('categoryFilterAdmin').addEventListener('change', (e) => {
        currentFilter = e.target.value;
        loadCenters();
    });

    document.getElementById('searchAdmin').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        loadCenters();
    });

    // Image Upload
    document.getElementById('centerImage').addEventListener('change', handleImageUpload);
    document.getElementById('removeImage').addEventListener('click', removeImage);

    // Rating Stars
    setupRatingStars();

    // Center Type Change
    document.getElementById('centerType').addEventListener('change', handleCenterTypeChange);

    // Table Management
    document.getElementById('manageTableBtn').addEventListener('click', openTableModal);
    document.getElementById('tableModalClose').addEventListener('click', closeTableModal);
    document.getElementById('saveTableBtn').addEventListener('click', closeTableModal);
    document.getElementById('addTableItemForm').addEventListener('submit', handleAddTableItem);
}

// Handle Center Type Change
function handleCenterTypeChange(e) {
    const type = e.target.value;
    const urlGroup = document.getElementById('urlGroup');
    const tableGroup = document.getElementById('tableGroup');
    const urlInput = document.getElementById('centerUrl');

    if (type === 'table') {
        urlGroup.style.display = 'none';
        tableGroup.style.display = 'block';
        urlInput.required = false;
    } else {
        urlGroup.style.display = 'block';
        tableGroup.style.display = 'none';
        urlInput.required = true;
    }
}

// Open Table Modal
function openTableModal() {
    document.getElementById('tableModal').style.display = 'flex';
    renderTableItems();
}

// Close Table Modal
function closeTableModal() {
    document.getElementById('tableModal').style.display = 'none';
}

// Handle Add Table Item
function handleAddTableItem(e) {
    e.preventDefault();

    const item = {
        city: document.getElementById('itemCity').value.trim(),
        name: document.getElementById('itemName').value.trim(),
        phone: document.getElementById('itemPhone').value.trim(),
        address: document.getElementById('itemAddress').value.trim()
    };

    currentTableItems.push(item);
    renderTableItems();
    e.target.reset();
}

// Render Table Items
function renderTableItems() {
    const tbody = document.getElementById('tableItemsBody');
    tbody.innerHTML = '';

    if (currentTableItems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #999;">هنوز موردی اضافه نشده است</td></tr>';
        document.getElementById('tableItemsCount').textContent = '0';
        document.getElementById('tableItemsCountModal').textContent = '0';
        return;
    }

    currentTableItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.city}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>
                <div class="table-item-actions">
                    <button class="btn-table-delete" onclick="deleteTableItem(${index})">🗑️ حذف</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('tableItemsCount').textContent = currentTableItems.length;
    document.getElementById('tableItemsCountModal').textContent = currentTableItems.length;
}

// Delete Table Item
function deleteTableItem(index) {
    if (confirm('آیا مطمئن هستید که می‌خواهید این مرکز را از جدول حذف کنید؟')) {
        currentTableItems.splice(index, 1);
        renderTableItems();
    }
}

// Setup Rating Stars
function setupRatingStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            document.getElementById('centerRating').value = rating;
            updateStarsDisplay(rating);
        });

        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
    });

    document.getElementById('starsDisplay').addEventListener('mouseleave', function() {
        updateStarsDisplay(currentRating);
    });
}

// Update Stars Display
function updateStarsDisplay(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.classList.add('filled');
        } else {
            star.textContent = '☆';
            star.classList.remove('filled');
        }
    });
}

// Highlight Stars on Hover
function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.classList.add('active');
        } else {
            star.textContent = '☆';
            star.classList.remove('active');
        }
    });
}

// Handle Image Upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('⚠️ حجم عکس نباید بیشتر از 2 مگابایت باشد');
        e.target.value = '';
        return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
        alert('⚠️ لطفاً فقط فایل تصویری انتخاب کنید');
        e.target.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        currentImageBase64 = event.target.result;
        showImagePreview(currentImageBase64);
    };
    reader.readAsDataURL(file);
}

// Show Image Preview
function showImagePreview(base64) {
    const preview = document.getElementById('imagePreview');
    const img = document.getElementById('previewImg');

    img.src = base64;
    preview.style.display = 'block';
}

// Remove Image
function removeImage() {
    currentImageBase64 = null;
    document.getElementById('centerImage').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('previewImg').src = '';
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem(STORAGE_KEYS.SESSION, 'active');
        showAdminPanel();
    } else {
        errorDiv.textContent = '❌ نام کاربری یا رمز عبور اشتباه است';
        errorDiv.style.display = 'block';
    }
}

// Handle Logout
function handleLogout() {
    if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
        localStorage.removeItem(STORAGE_KEYS.SESSION);
        showLoginScreen();
        document.getElementById('loginForm').reset();
    }
}

// Get Centers from API
async function getCenters() {
    try {
        return await API.getCenters();
    } catch (error) {
        console.error('Error getting centers:', error);
        return { tehran: {} };
    }
}

// Save Centers to API
async function saveCenters(centers) {
    try {
        await API.saveCenters(centers);
    } catch (error) {
        console.error('Error saving centers:', error);
        alert('⚠️ خطا در ذخیره‌سازی. لطفاً دوباره تلاش کنید.');
    }
}

// Import Initial Data
async function importInitialData() {
    if (confirm('آیا مطمئن هستید؟ این عملیات داده‌های فعلی را جایگزین می‌کند.')) {
        await saveCenters(INITIAL_DATA);
        await loadCenters();
        alert('✅ داده‌های اولیه با موفقیت بارگذاری شد');
    }
}

// Load and Display Centers
async function loadCenters() {
    const centers = await getCenters();
    const list = document.getElementById('centersList');
    list.innerHTML = '';

    let totalCount = 0;
    let filteredCenters = [];

    // Collect all centers
    Object.keys(centers).forEach(province => {
        Object.keys(centers[province]).forEach(category => {
            centers[province][category].forEach((center, index) => {
                const centerId = `${province}-${category}-${index}`;
                filteredCenters.push({
                    ...center,
                    category,
                    province,
                    id: centerId
                });
                totalCount++;
            });
        });
    });

    // Apply filters
    if (currentProvinceFilter !== 'all') {
        filteredCenters = filteredCenters.filter(c => c.province === currentProvinceFilter);
    }

    if (currentFilter !== 'all') {
        filteredCenters = filteredCenters.filter(c => c.category === currentFilter);
    }

    if (searchQuery) {
        filteredCenters = filteredCenters.filter(c =>
            c.name.toLowerCase().includes(searchQuery)
        );
    }

    // Update stats
    document.getElementById('totalCentersAdmin').textContent = totalCount;

    // Display centers
    if (filteredCenters.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">هیچ مرکزی یافت نشد</div>
            </div>
        `;
        return;
    }

    filteredCenters.forEach(center => {
        const card = createCenterCard(center);
        list.appendChild(card);
    });
}

// Create Center Card
function createCenterCard(center) {
    const card = document.createElement('div');
    card.className = 'center-card';

    // Generate stars HTML
    let starsHTML = '';
    if (center.rating && center.rating > 0) {
        const fullStars = '★'.repeat(center.rating);
        const emptyStars = '☆'.repeat(5 - center.rating);
        starsHTML = `
            <div class="center-rating">
                <span class="rating-stars">${fullStars}${emptyStars}</span>
                <span class="rating-number">(${center.rating}/5)</span>
            </div>
        `;
    }

    card.innerHTML = `
        ${center.image ? `<img src="${center.image}" alt="${center.name}" class="center-image">` : ''}
        <div class="center-header">
            <div class="center-info">
                <h3>${center.name}</h3>
                <span class="center-category">${PROVINCE_LABELS[center.province]} - ${CATEGORY_LABELS[center.category]}</span>
                ${starsHTML}
            </div>
            <div class="center-actions">
                <button class="btn-edit" onclick="editCenter('${center.id}')">✏️ ویرایش</button>
                <button class="btn-delete" onclick="deleteCenter('${center.id}')">🗑️ حذف</button>
            </div>
        </div>
        <div class="center-details">
            <div class="center-detail-item">
                <strong>🔗 لینک:</strong> <a href="${center.url}" target="_blank">${center.url.substring(0, 50)}...</a>
            </div>
            ${center.address ? `
                <div class="center-detail-item">
                    <strong>📍 آدرس:</strong> ${center.address}
                </div>
            ` : ''}
            ${center.phone ? `
                <div class="center-detail-item">
                    <strong>📞 تلفن:</strong> ${center.phone}
                </div>
            ` : ''}
            ${center.location ? `
                <a href="${center.location}" target="_blank" class="location-badge">
                    📍 مشاهده در نقشه
                </a>
            ` : ''}
        </div>
    `;

    return card;
}

// Open Modal
function openModal(center = null) {
    const modal = document.getElementById('centerModal');
    const form = document.getElementById('centerForm');

    if (center) {
        document.getElementById('modalTitle').textContent = 'ویرایش مرکز';
        document.getElementById('centerProvince').value = center.province || 'tehran';
        document.getElementById('centerName').value = center.name;
        document.getElementById('centerCategory').value = center.category;
        document.getElementById('centerType').value = center.type || 'single';
        document.getElementById('centerUrl').value = center.url || '';
        document.getElementById('centerAddress').value = center.address || '';
        document.getElementById('centerPhone').value = center.phone || '';
        document.getElementById('centerLocation').value = center.location || '';

        // Load type-specific data
        if (center.type === 'table') {
            currentTableItems = center.items || [];
            document.getElementById('urlGroup').style.display = 'none';
            document.getElementById('tableGroup').style.display = 'block';
            document.getElementById('centerUrl').required = false;
            document.getElementById('tableItemsCount').textContent = currentTableItems.length;
        } else {
            currentTableItems = [];
            document.getElementById('urlGroup').style.display = 'block';
            document.getElementById('tableGroup').style.display = 'none';
            document.getElementById('centerUrl').required = true;
        }

        // Load image
        if (center.image) {
            currentImageBase64 = center.image;
            showImagePreview(center.image);
        }

        // Load rating
        if (center.rating) {
            currentRating = center.rating;
            document.getElementById('centerRating').value = center.rating;
            updateStarsDisplay(center.rating);
        }
    } else {
        document.getElementById('modalTitle').textContent = 'افزودن مرکز جدید';
        form.reset();
        currentImageBase64 = null;
        currentRating = 0;
        currentTableItems = [];
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('urlGroup').style.display = 'block';
        document.getElementById('tableGroup').style.display = 'none';
        document.getElementById('centerUrl').required = true;
        document.getElementById('tableItemsCount').textContent = '0';
        updateStarsDisplay(0);
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    document.getElementById('centerModal').style.display = 'none';
    document.body.style.overflow = '';
    editingCenterId = null;
    currentImageBase64 = null;
    currentRating = 0;
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('centerImage').value = '';
    updateStarsDisplay(0);
}

// Handle Save Center
async function handleSaveCenter(e) {
    e.preventDefault();

    const centerType = document.getElementById('centerType').value;
    const centerData = {
        name: document.getElementById('centerName').value.trim(),
        type: centerType,
        address: document.getElementById('centerAddress').value.trim(),
        phone: document.getElementById('centerPhone').value.trim(),
        location: document.getElementById('centerLocation').value.trim(),
        image: currentImageBase64,
        rating: currentRating
    };

    // Add type-specific data
    if (centerType === 'table') {
        if (currentTableItems.length === 0) {
            alert('⚠️ لطفاً حداقل یک مرکز به جدول اضافه کنید');
            return;
        }
        centerData.items = currentTableItems;
        centerData.url = ''; // No URL for table type
    } else {
        centerData.url = document.getElementById('centerUrl').value.trim();
        if (!centerData.url) {
            alert('⚠️ لطفاً لینک کانال را وارد کنید');
            return;
        }
    }

    const category = document.getElementById('centerCategory').value;
    const province = document.getElementById('centerProvince').value;

    if (!province) {
        alert('⚠️ لطفاً استان را انتخاب کنید');
        return;
    }

    const centers = await getCenters();

    if (editingCenterId) {
        // Update existing center
        const [oldProvince, cat, index] = editingCenterId.split('-');

        // If province changed, remove from old location and add to new
        if (oldProvince !== province) {
            centers[oldProvince][cat].splice(parseInt(index), 1);
            if (!centers[province]) {
                centers[province] = {};
            }
            if (!centers[province][category]) {
                centers[province][category] = [];
            }
            centers[province][category].push(centerData);
        } else {
            centers[oldProvince][cat][parseInt(index)] = centerData;
        }
    } else {
        // Add new center
        if (!centers[province]) {
            centers[province] = {};
        }

        if (!centers[province][category]) {
            centers[province][category] = [];
        }

        centers[province][category].push(centerData);
    }

    await saveCenters(centers);
    closeModal();
    await loadCenters();

    alert(editingCenterId ? '✅ مرکز با موفقیت ویرایش شد' : '✅ مرکز جدید با موفقیت اضافه شد');
}

// Edit Center
async function editCenter(centerId) {
    editingCenterId = centerId;
    const [province, category, index] = centerId.split('-');
    const centers = await getCenters();
    const center = centers[province][category][parseInt(index)];

    openModal({
        ...center,
        province,
        category
    });
}

// Delete Center
async function deleteCenter(centerId) {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این مرکز را حذف کنید؟')) {
        return;
    }

    const [province, category, index] = centerId.split('-');
    const centers = await getCenters();

    centers[province][category].splice(parseInt(index), 1);

    // Remove category if empty
    if (centers[province][category].length === 0) {
        delete centers[province][category];
    }

    await saveCenters(centers);
    await loadCenters();

    alert('✅ مرکز با موفقیت حذف شد');
}
