import test from 'node:test';
import assert from 'node:assert/strict';
import { sortProducts } from '../src/catalog.js';
const products = [
 { id: 'big-old', screenInches: 13.3, releaseDate: '2024-03-01' },
 { id: 'small-new', screenInches: 3.7, releaseDate: '2026-08-11' },
 { id: 'medium', screenInches: 7.8, releaseDate: '2025-01-01' },
 { id: 'unknown', screenInches: null, releaseDate: null },
];
test('sorts numerically by screen size in both directions and puts unknown sizes last', () => {
 assert.deepEqual(sortProducts(products, 'size-asc').map(p=>p.id), ['small-new','medium','big-old','unknown']);
 assert.deepEqual(sortProducts(products, 'size-desc').map(p=>p.id), ['big-old','medium','small-new','unknown']);
 assert.equal(products[0].id, 'big-old');
});
test('year-only releases sort between earlier and later years without inventing a display date', () => {
 const partial = [...products, { id: 'year-only', releaseYear: 2023 }];
 assert.deepEqual(sortProducts(partial, 'date-desc').map(p=>p.id), ['small-new','medium','big-old','year-only','unknown']);
 assert.deepEqual(sortProducts(partial, 'date-asc').map(p=>p.id), ['year-only','big-old','medium','small-new','unknown']);
});
test('sorts chronologically by release date in both directions, with unknown dates last', () => {
 assert.deepEqual(sortProducts(products, 'date-desc').map(p=>p.id), ['small-new','medium','big-old','unknown']);
 assert.deepEqual(sortProducts(products, 'date-asc').map(p=>p.id), ['big-old','medium','small-new','unknown']);
});
