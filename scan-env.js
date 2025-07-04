// save as scan-env.js
import { readFileSync } from 'fs';

console.log('--- package.json ---\n');
console.log(readFileSync('package.json', 'utf-8'));

console.log('\n--- npm ls (depth 0) ---\n');
import { execSync } from 'child_process';
console.log(execSync('npm ls --depth=0 --json', { encoding: 'utf-8' }));