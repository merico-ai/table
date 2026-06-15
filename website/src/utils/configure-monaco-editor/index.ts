import { loader } from '@monaco-editor/react';
import { MonacoPath } from '../config';
import { configureDiffLanguage } from './custom-diff-language';

const cleanURL = (str: string) => {
  return str.replace(/([^:])(\/\/+)/g, '$1/');
};
const path = cleanURL(MonacoPath);
loader.config({ paths: { vs: path } });
loader.init().then((monaco) => {
  configureDiffLanguage(monaco);
});
