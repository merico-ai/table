import { loader } from '@monaco-editor/react';
import { useEffect } from 'react';
import { configureSQLLanguage } from '../../utils/configure-monaco-editor';

const cleanURL = (str: string) => {
  return str.replace(/([^:])(\/\/+)/g, '$1/');
};

export function useLoadMonacoEditor(monacoPath: string) {
  useEffect(() => {
    const loaded = loader.__getMonacoInstance();
    if (loaded) {
      configureSQLLanguage(loaded);
      return;
    }

    console.log('loading monaco for @devtable/dashboard');
    const path = cleanURL(monacoPath);
    loader.config({ paths: { vs: path } });
    loader.init().then((monaco) => {
      configureSQLLanguage(monaco);
      console.log('monaco instance:', monaco);
    });
  }, []);
}
