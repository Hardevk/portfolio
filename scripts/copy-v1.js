import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '..', 'v1');
const destDir = path.resolve(__dirname, '..', 'dist', 'v1');

if (fs.existsSync(srcDir)) {
  fs.cpSync(srcDir, destDir, { recursive: true });
  console.log('✓ Successfully mirrored v1 archive into dist/v1');
} else {
  console.warn('! Warning: v1 directory not found at', srcDir);
}
