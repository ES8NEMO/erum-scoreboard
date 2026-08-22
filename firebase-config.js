// ============================================================
// عمّر هاد المعلومات من Firebase Console ديالك
// Firebase Console → Project settings → أسفل الصفحة "Your apps" → Config
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyD3I1FG96uLMHTGANQgdUe4RFdsFPbk4u8",
  authDomain: "factory-leaderboard-e5cee.firebaseapp.com",
  projectId: "factory-leaderboard-e5cee",
  storageBucket: "factory-leaderboard-e5cee.firebasestorage.app",
  messagingSenderId: "1068433444487",
  appId: "1:1068433444487:web:9056410354baf32cb87222"
};

// المفتاح السري لصفحة الأدمين — بدّلو بشي حاجة خاصة بيك
// (هادشي حماية بسيطة فقط، ماشي حماية كاملة — شوف README)
export const ADMIN_KEY = "magasin2026";

// اسم الوثيقة فقاعدة البيانات (ماشي خاصك تبدلها)
export const DOC_PATH = { collection: "leaderboard", doc: "current" };
