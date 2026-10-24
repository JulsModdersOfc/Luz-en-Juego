/* Reutiliza la configuración del proyecto Firebase existente.
 * Sustituye los valores por los de Firebase Console > Configuración del proyecto > Tus apps.
 * No pongas aquí claves privadas de servidor o cuentas de servicio.
 */
import { initializeApp, getApps, getApp } from 'firebase/app';
export const firebaseConfig = {
  apiKey: 'REEMPLAZAR_API_KEY',
  authDomain: 'REEMPLAZAR_PROJECT_ID.firebaseapp.com',
  projectId: 'REEMPLAZAR_PROJECT_ID',
  storageBucket: 'REEMPLAZAR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'REEMPLAZAR_SENDER_ID',
  appId: 'REEMPLAZAR_APP_ID'
};
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
