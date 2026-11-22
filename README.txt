1) إعداد Firebase (مجاني):
 - console.firebase.google.com ← إنشاء مشروع.
 - Authentication ← Sign-in method ← Google ← تفعيل.
 - Firestore Database ← إنشاء قاعدة بيانات ← تبويب Rules ← الصق محتوى ملف firestore.rules ← Publish.
 - Project settings ← Your apps ← Web ← انسخ قيم apiKey و authDomain و projectId و appId.
 - Authentication ← Settings ← Authorized domains ← أضف دومين استضافتك.
2) افتح firebase-config.js والصق القيم مكان PASTE.
3) ارفع المجلد كله على netlify.com/drop أو GitHub Pages، ثم ثبّت التطبيق (مشاركة ← إضافة للشاشة الرئيسية في آيفون، أو تثبيت التطبيق في أندرويد/كروم).
