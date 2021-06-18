export const base64decode = (toDecode: string): string => {
  const buff = Buffer.from(toDecode, 'base64');

  return buff.toString('utf-8');
};
