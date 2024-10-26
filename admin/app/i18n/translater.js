import config from '../config.js';
import * as en from './en/index.js';

const translations = {
  en
};

export const t = translations[config.locale];
