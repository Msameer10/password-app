import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key';

export const encrypt = (text) => CryptoJS.AES.encrypt(text, SECRET_KEY).toString();

export const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
