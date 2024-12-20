import { Application } from '@nativescript/core';
import { registerElements } from './register-elements';

registerElements();
Application.run({ moduleName: 'app-root' });