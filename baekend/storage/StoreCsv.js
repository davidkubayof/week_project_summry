import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '../data');

async function makeSureFileExists(fileName) {
  const filePath = path.join(dataDir, fileName);
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.readFile(filePath, 'utf-8');
  } catch (e) {
    await fs.writeFile(filePath, '', 'utf-8');
  }
}

export async function readAll(fileName) {
  await makeSureFileExists(fileName);
  const filePath = path.join(dataDir, fileName);
  const text = await fs.readFile(filePath, 'utf-8');
  if (!text.trim()) return [];
  const list = parse(text, { columns: true, skip_empty_lines: true });
  return list;
}

export async function writeAll(list, fileName) {
  await makeSureFileExists(fileName);
  const filePath = path.join(dataDir, fileName);
  const text = list.length === 0 ? '' : stringify(list, { header: true });
  await fs.writeFile(filePath, text, 'utf-8');
}
