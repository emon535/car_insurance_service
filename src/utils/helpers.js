export const generateUUID = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(32) +
      Math.random().toString(32)
  ).replace(/\./g, '');
