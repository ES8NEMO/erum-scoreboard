// ============================================================
// عمّر هاد المعلومات من Firebase Console ديالك
// Firebase Console → Project settings → أسفل الصفحة "Your apps" → Config
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAECGILb3WzxpQDfwe3KvKqzw6pBKa2lZo",
  authDomain:  "scoreboard-421a9.firebaseapp.com",
  projectId: "scoreboard-421a9",
  storageBucket: "scoreboard-421a9.firebasestorage.app",
  messagingSenderId: "307064133825",
  appId: "1:307064133825:web:9dfa1db2308eee1f821c40",
  
};

// المفتاح السري لصفحة الأدمين — بدّلو بشي حاجة خاصة بيك
// (هادشي حماية بسيطة فقط، ماشي حماية كاملة — شوف README)
export const ADMIN_KEY = "magasin2026";

// اسم الوثيقة فقاعدة البيانات (ماشي خاصك تبدلها)
export const DOC_PATH = { collection: "leaderboard", doc: "current" };
