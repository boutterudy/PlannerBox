function removeAfterSemicolon(str: string): string {
  const index = str.indexOf(';');
  if (index !== -1) {
    return str.substring(0, index);
  }
  return str;
}

export { removeAfterSemicolon };
