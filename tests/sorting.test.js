import test from 'node:test';
import assert from 'node:assert/strict';
import { sortProducts } from '../src/catalog.js';

test('orders newest first without changing the source or sorting by screen size', () => {
  const products = [
    { id: 'old', releaseDate: '2024-03-01', screenInches: 13.3 },
    { id: 'new', releaseDate: '2026-08-11', screenInches: 3.7 },
    { id: 'middle', releaseDate: '2025-05-01', screenInches: 7.8 },
  ];
  assert.deepEqual(sortProducts(products).map(p => p.id), ['new', 'middle', 'old']);
  assert.deepEqual(products.map(p => p.id), ['old', 'new', 'middle']);
});

test('keeps year-only releases in their year, stable ties and unknown dates last', () => {
  const products = [
    { id: 'unknown' },
    { id: 'year-a', releaseYear: 2025 },
    { id: 'older', releaseDate: '2024-12-31' },
    { id: 'dated', releaseDate: '2025-06-01' },
    { id: 'year-b', releaseYear: 2025 },
    { id: 'invalid', releaseDate: 'invalid' },
  ];
  assert.deepEqual(sortProducts(products).map(p => p.id), ['dated', 'year-a', 'year-b', 'older', 'unknown', 'invalid']);
  assert.equal(products[1].releaseDate, undefined);
});
