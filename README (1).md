# 🌅 FAJR Store — v2.0 Production Ready

**المالك:** مازن أحمد محمد أبوشرحه  
**الجوال:** 0548659564  
**البريد:** fajr38799@gmail.com

---

## 📁 هيكل المشروع

```
fajr-store/
├── index.html          ← الصفحة الرئيسية (HTML نظيف بدون inline styles أو scripts)
├── css/
│   └── style.css       ← جميع أنماط CSS
├── js/
│   ├── products.js     ← بيانات المنتجات والثوابت
│   ├── cart.js         ← منطق السلة والدفع
│   └── main.js         ← المنطق الرئيسي + Firebase stub
├── assets/
│   └── images/         ← صور المنتجات (استبدل الملفات هنا)
└── README.md
```

---

## 📄 شرح كل ملف

### `index.html`
- HTML نظيف بدون أي inline CSS أو JavaScript
- يتضمن جميع meta tags للـ SEO
- Open Graph tags للمشاركة على السوشيال ميديا
- يُحمّل الـ scripts بـ `defer` لأداء أسرع
- يتضمن تعليقات Firebase جاهزة للتفعيل

### `css/style.css`
- جميع أنماط التصميم
- متغيرات CSS للألوان والثيم
- Responsive design لجميع الشاشات
- Animations وتأثيرات بصرية

### `js/products.js` ← **يُحمَّل أولاً**
- `LAUNCH_PRICE`, `SHIPPING_FEE`, `FREE_SHIPPING_THRESHOLD` — الثوابت
- `WA_NUMBER` — رقم واتساب الطلبات
- `PRODS[]` — قائمة المنتجات الكاملة
- `INGRS[]` — قائمة المكونات
- `GREVS[]` — التقييمات

### `js/cart.js` ← **يُحمَّل ثانياً**
- `addCart(id)` — إضافة منتج للسلة
- `renderCart()` — عرض السلة
- `openCO()` / `closeCO()` — فتح/إغلاق الدفع
- `placeOrder()` — تأكيد الطلب وإرساله لواتساب
- `doTrack()` — تتبع الطلبات

> **الأمان:** الأسعار تُقرأ من `PRODS` مباشرة ولا يمكن تعديلها من الواجهة.

### `js/main.js` ← **يُحمَّل أخيراً**
- `initFirebase(config)` — تهيئة Firebase (stub جاهز)
- `saveOrderToFirebase(data)` — حفظ الطلبات في Firestore
- `loadProductsFromFirebase()` — قراءة المنتجات من Firebase
- منطق العرض والبحث والفلترة
- نظام اللغة (عربي/إنجليزي)
- التنقل بين الصفحات

---

## 🖼️ الصور المطلوبة

ضع هذه الملفات في مجلد `assets/images/`:

| اسم الملف | الوصف |
|-----------|-------|
| `product-0-1.jpg` | الكل في واحد (All in One) |
| `product-1-2.jpg` | آيسي فريش (Icy Fresh) |
| `product-2-3.jpg` | FAJR GOLD |
| `product-3-4.jpg` | المؤسس (The Founder) |
| `product-4-5.jpg` | صورة بديلة 1 |
| `product-5-6.jpg` | صورة بديلة 2 |
| `product-6-7.jpg` | صورة بديلة 3 |
| `product-7-8.jpg` | صورة بديلة 4 |
| `og-image.jpg` | صورة المشاركة (1200×630) |

---

## 🔥 ربط Firebase

### الخطوات:

1. أنشئ مشروعاً في [Firebase Console](https://console.firebase.google.com)
2. فعّل **Firestore Database**
3. في `index.html`، أزل التعليق عن Firebase SDKs وأضف إعداداتك:

```html
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.x.x/firebase-firestore-compat.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "...",
    projectId: "...",
    // الباقي من Firebase Console
  };
  initFirebase(firebaseConfig);
</script>
```

4. في `main.js`، الدالة `saveOrderToFirebase()` ستحفظ الطلبات تلقائياً.

### هيكل بيانات الطلبات في Firestore:

```
orders/
  {orderId}/
    id: "FAJR-1234"
    name: "مازن أبوشرحه"
    phone: "0548659564"
    city: "الرياض"
    district: "..."
    street: "..."
    items: [{id, name, price, qty}]
    subtotal: 135
    shipping: 35
    total: 170
    paymentMethod: "cod"
    status: "pending"
    createdAt: Timestamp
```

---

## 📦 رفع المشروع

### على أي استضافة ثابتة:
```bash
# Netlify / Vercel / GitHub Pages
# فقط ارفع المجلد كاملاً
```

### على استضافة عادية (cPanel):
```bash
# ارفع المحتويات إلى public_html/
```

---

## ✅ ما تم تحسينه

| البند | قبل | بعد |
|-------|-----|-----|
| حجم الملف | ~820 KB | ~25 KB HTML |
| الصور | Base64 مضمّنة | ملفات خارجية + lazy loading |
| JavaScript | Inline | 3 ملفات منفصلة |
| CSS | Inline `<style>` | `css/style.css` |
| SEO | أساسي | meta + OG + canonical |
| أمان الأسعار | قابل للتعديل | محمي من PRODS |
| تحميل السكريبتات | متزامن | defer |
| Firebase | غير موجود | Stub جاهز للربط |
