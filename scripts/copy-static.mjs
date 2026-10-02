import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const dist = resolve(root, 'dist');
mkdirSync(dist, { recursive: true });
cpSync(resolve(root, 'index.html'), resolve(dist, 'index.html'));
rmSync(resolve(dist, 'styles'), { recursive: true, force: true });
rmSync(resolve(dist, 'assets'), { recursive: true, force: true });
cpSync(resolve(root, 'src/styles'), resolve(dist, 'styles'), { recursive: true });
mkdirSync(resolve(dist, 'assets'), { recursive: true });
