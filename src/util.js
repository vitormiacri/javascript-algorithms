export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  }
  if (item === undefined) {
    return 'UNDEFINED';
  }
  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export function djb2HashCode(key, toStrFn) {
  const tableKey = toStrFn(key);
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i);
  }
  return hash % 1013;
}
