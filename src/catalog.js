/** Sort a copy; missing metadata stays last in either direction. */
export function sortProducts(products, order = 'date-desc') {
  const bySize = order.startsWith('size-');
  const direction = order.endsWith('desc') ? -1 : 1;
  const value = product => bySize ? product.screenInches : product.releaseDate ? Date.parse(product.releaseDate) : product.releaseYear ? Date.UTC(product.releaseYear, 0, 1) : null;
  return [...products].sort((a, b) => {
    const av = value(a), bv = value(b);
    const missingA = av == null || !Number.isFinite(av);
    const missingB = bv == null || !Number.isFinite(bv);
    if (missingA || missingB) return Number(missingA) - Number(missingB);
    return (av - bv) * direction;
  });
}

export function formatDate(date) {
  return date ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date)) : 'Not announced';
}
