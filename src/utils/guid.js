let lastId = 0;

export const newGUID = (prefix = 'id') => {
  let id = `${prefix}${lastId}`
  lastId += 1
  return id
}
