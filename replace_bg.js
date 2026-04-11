import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // First, replace existing 200 with 300
  content = content.replace(/(?<!dark:)border-slate-200/g, 'border-slate-300');
  
  // Then replace existing 100 with 200
  content = content.replace(/(?<!dark:)border-slate-100/g, 'border-slate-200');
  
  // Replace bg-slate-100 with bg-slate-200
  content = content.replace(/(?<!dark:)bg-slate-100/g, 'bg-slate-200');
  
  // Replace bg-slate-50 with bg-slate-100
  content = content.replace(/(?<!dark:)bg-slate-50/g, 'bg-slate-100');
  
  fs.writeFileSync(filePath, content);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./src');
console.log('Done');
