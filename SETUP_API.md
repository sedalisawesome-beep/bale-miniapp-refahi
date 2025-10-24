# 🚀 راهنمای نصب و راه‌اندازی پنل ادمین تحت وب

## 📋 مراحل نصب

### مرحله 1: آپلود فایل‌ها

فایل‌های زیر را روی هاست خود آپلود کنید:

```
miniapbale/
├── index.html          (اپلیکیشن اصلی)
├── admin.html          (پنل ادمین)
├── app.js              (لاجیک اپلیکیشن)
├── admin.js            (لاجیک پنل ادمین)
├── config.js           (تنظیمات API)
├── api.php             (API Backend)
├── data.json           (فایل ذخیره داده)
├── style.css
├── admin.css
└── ADMIN_GUIDE.md
```

### مرحله 2: تنظیم مجوزهای فایل

مجوز فایل `data.json` را روی **666** یا **777** قرار دهید تا PHP بتواند در آن بنویسد:

```bash
chmod 666 data.json
```

یا از cPanel > File Manager:
1. روی `data.json` راست کلیک کنید
2. Permissions را انتخاب کنید
3. مقدار را روی **666** قرار دهید

### مرحله 3: تنظیم config.js

فایل `config.js` را باز کنید و آدرس API را تنظیم کنید:

```javascript
const API_CONFIG = {
    // آدرس هاست خود را وارد کنید
    API_URL: 'https://yourdomain.com/api.php',

    // حالت آفلاین را غیرفعال کنید
    USE_OFFLINE_MODE: false,
};
```

**مثال:**
```javascript
API_URL: 'https://mysite.com/miniapbale/api.php',
```

### مرحله 4: تست

1. **تست اپلیکیشن اصلی:**
   - برو به `https://yourdomain.com/index.html`
   - باید داده‌های پیش‌فرض نمایش داده شود

2. **تست پنل ادمین:**
   - برو به `https://yourdomain.com/admin.html`
   - ورود با:
     - نام کاربری: `admin`
     - رمز عبور: `admin123`
   - یک مرکز جدید اضافه کنید
   - بررسی کنید که در اپلیکیشن اصلی نمایش داده شود

---

## 🔧 راهنمای استفاده

### ورود به پنل ادمین

```
URL: https://yourdomain.com/admin.html
Username: admin
Password: admin123
```

⚠️ **حتماً رمز عبور را تغییر دهید!**

### افزودن مرکز جدید

1. کلیک روی "افزودن مرکز جدید"
2. فرم را پر کنید
3. کلیک روی "ذخیره"
4. تغییرات بلافاصله در سرور ذخیره می‌شود

### ویرایش مرکز

1. کلیک روی "ویرایش" کنار مرکز
2. اطلاعات را تغییر دهید
3. ذخیره

### حذف مرکز

1. کلیک روی "حذف"
2. تایید کنید

---

## 🛠 تنظیمات پیشرفته

### تغییر رمز عبور

فایل `admin.js` را باز کنید و خط 2-5 را تغییر دهید:

```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'YOUR_NEW_PASSWORD'
};
```

### استفاده از حالت آفلاین (بدون سرور)

اگر هاست ندارید، می‌توانید از حالت localStorage استفاده کنید:

در `config.js`:
```javascript
USE_OFFLINE_MODE: true
```

⚠️ **توجه:** در این حالت، داده‌ها فقط در مرورگر شما ذخیره می‌شود و برای سایر کاربران قابل مشاهده نیست.

---

## 🔒 امنیت

### محافظت از پنل ادمین

#### روش 1: .htaccess (Apache)

فایل `.htaccess` در کنار `admin.html` بسازید:

```apache
AuthType Basic
AuthName "Admin Panel"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

#### روش 2: محافظت از دایرکتوری

پنل ادمین را در یک پوشه جداگانه قرار دهید:

```
public_html/
├── miniapp/
│   ├── index.html (عمومی)
│   └── app.js
└── admin/
    ├── admin.html (محافظت شده)
    └── admin.js
```

---

## ❓ رفع مشکلات

### مشکل: تغییرات ذخیره نمی‌شود

**راه‌حل:**
1. مجوزهای `data.json` را چک کنید (باید 666 باشد)
2. Console مرورگر را باز کنید (F12) و خطاها را بررسی کنید
3. مطمئن شوید `API_URL` در `config.js` صحیح است

### مشکل: خطای CORS

**راه‌حل:**
فایل `api.php` قبلاً header های CORS را اضافه کرده، اما اگر مشکل دارید:

```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

### مشکل: 404 Not Found

**راه‌حل:**
- مطمئن شوید `api.php` در مسیر صحیح است
- آدرس `API_URL` در `config.js` را چک کنید

### مشکل: 500 Internal Server Error

**راه‌حل:**
1. مجوزهای فایل را چک کنید
2. Error log سرور را بررسی کنید
3. نسخه PHP را چک کنید (حداقل 7.0)

---

## 📱 استفاده در Bale Mini App

فایل `index.html` را در Bale Mini App قرار دهید:

```
https://yourdomain.com/miniapp/index.html
```

---

## 🎯 ویژگی‌ها

✅ پنل ادمین تحت وب
✅ ذخیره‌سازی در سرور (PHP + JSON)
✅ Real-time updates
✅ Fallback به localStorage
✅ امن با احراز هویت
✅ رابط کاربری فارسی
✅ Responsive
✅ سازگار با Bale SDK

---

## 📞 پشتیبانی

در صورت بروز مشکل:
1. Console مرورگر را چک کنید (F12)
2. فایل `data.json` را بررسی کنید
3. Network tab را چک کنید

---

✨ **موفق باشید!**
