# 🚀 راهنمای آپلود مینی اپ به GitHub Pages

این راهنما مراحل کامل آپلود مینی اپ به GitHub و فعال‌سازی GitHub Pages را توضیح می‌دهد.

## ✅ آماده‌سازی (انجام شده)

- ✅ Git repository ایجاد شد
- ✅ فایل‌ها commit شدند
- ✅ پروژه آماده push است

---

## 📋 مراحل آپلود

### قدم 1: ساخت Repository در GitHub

1. به [github.com](https://github.com) برو و وارد حساب کاربری‌ات شو
2. روی دکمه **"New"** یا **"+"** در گوشه بالا کلیک کن
3. **"New repository"** را انتخاب کن
4. اطلاعات زیر را وارد کن:
   - **Repository name**: `bale-miniapp-refahi` (یا هر اسم دیگه‌ای که دوست داری)
   - **Description**: "مینی اپ مراکز رفاهی و خدماتی بله"
   - **Public** را انتخاب کن (برای GitHub Pages رایگان الزامی است)
   - **هیچ چیزی دیگه‌ای اضافه نکن** (نه README، نه .gitignore، نه License)
5. روی **"Create repository"** کلیک کن

### قدم 2: اتصال به Repository

بعد از ساخت repository، GitHub یک صفحه با دستورات نمایش می‌دهد. در **ترمینال** (همینجا) این دستورات رو اجرا کن:

**گزینه A: با HTTPS (پیشنهادی برای اکثر کاربران)**

```bash
# جایگزین کردن YOUR_USERNAME با نام کاربری GitHub
git remote add origin https://github.com/YOUR_USERNAME/bale-miniapp-refahi.git
git branch -M main
git push -u origin main
```

**گزینه B: با SSH (اگر SSH key داری)**

```bash
# جایگزین کردن YOUR_USERNAME با نام کاربری GitHub
git remote add origin git@github.com:YOUR_USERNAME/bale-miniapp-refahi.git
git branch -M main
git push -u origin main
```

### قدم 3: فعال‌سازی GitHub Pages

1. در صفحه repository خودت در GitHub:
2. به تب **"Settings"** برو (در بالای صفحه)
3. از منوی سمت چپ **"Pages"** را انتخاب کن
4. در قسمت **"Source"**:
   - **Branch**: `main` را انتخاب کن
   - **Folder**: `/ (root)` را انتخاب کن
5. روی **"Save"** کلیک کن
6. صبر کن تا GitHub Pages فعال بشه (معمولاً 1-2 دقیقه)
7. یک پیغام سبز رنگ ظاهر می‌شه که لینک مینی اپت رو نشون میده:

```
Your site is published at https://YOUR_USERNAME.github.io/bale-miniapp-refahi/
```

---

## 🔗 استفاده از لینک در بله

بعد از فعال شدن GitHub Pages:

### 1. ثبت مینی اپ در بله

1. به [@botfather](https://ble.ir/botfather) در بله برو
2. دستور `/newapp` یا `/myapps` رو ارسال کن
3. بازوی خودت رو انتخاب کن
4. **URL مینی اپ** را وارد کن:
   ```
   https://YOUR_USERNAME.github.io/bale-miniapp-refahi/
   ```
5. اسم مینی اپ: `مراکز رفاهی`
6. توضیحات: `مراکز رفاهی و خدماتی طرف قرارداد`

### 2. تنظیم دکمه منو (اختیاری)

در @botfather:
```
/setmenubutton
# انتخاب بازو
# وارد کردن متن دکمه: مراکز رفاهی
# وارد کردن URL مینی اپ
```

### 3. تست مینی اپ

لینک مستقیم:
```
https://ble.ir/YOUR_BOT_USERNAME?startapp
```

یا از داخل چت با بازو روی دکمه منو کلیک کن.

---

## 🔄 آپدیت کردن مینی اپ

هر وقت فایل‌هایت رو تغییر دادی، با این دستورات به GitHub پوش کن:

```bash
git add .
git commit -m "توضیحات تغییرات"
git push
```

GitHub Pages خودکار آپدیت می‌شه (1-2 دقیقه طول می‌کشه).

---

## 🆘 رفع مشکلات رایج

### ❌ خطا: "remote origin already exists"

```bash
git remote remove origin
# سپس دوباره دستور git remote add رو اجرا کن
```

### ❌ خطا: "Authentication failed"

اگر از HTTPS استفاده می‌کنی:
- از Personal Access Token به جای password استفاده کن
- [راهنمای ساخت Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### ❌ مینی اپ در بله باز نمی‌شه

1. چک کن که GitHub Pages فعال باشه
2. مطمئن شو URL صحیح هست (باید با `/` تموم بشه)
3. در مرورگر صفحه رو باز کن و ببین لود می‌شه یا نه
4. چک کن که repository روی **Public** باشه

### ❌ فایل‌ها 404 می‌دن

مطمئن شو که:
- همه فایل‌ها commit و push شدن
- نام فایل‌ها دقیقاً `index.html`, `style.css`, `app.js` هستن
- در root پوشه repository هستن

---

## 📞 کمک بیشتر

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [مستندات مینی اپ بله](https://docs.bale.ai/)

---

## 🎉 تبریک!

حالا مینی اپت به صورت رایگان روی GitHub Pages هست و در بله قابل استفاده است! 🚀

**لینک نهایی شما:**
```
https://YOUR_USERNAME.github.io/bale-miniapp-refahi/
```
