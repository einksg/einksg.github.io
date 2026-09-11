/** Newest releases first; year-only entries follow dated entries in that year. */
export function sortProducts(products) {
  const value = product => product.releaseDate ? Date.parse(product.releaseDate) : product.releaseYear ? Date.UTC(product.releaseYear, 0, 1) : null;
  return [...products].sort((a, b) => {
    const av = value(a), bv = value(b);
    const missingA = av == null || !Number.isFinite(av);
    const missingB = bv == null || !Number.isFinite(bv);
    if (missingA || missingB) return Number(missingA) - Number(missingB);
    return bv - av;
  });
}

export function formatDate(date) {
  return date ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date)) : 'Not announced';
}
