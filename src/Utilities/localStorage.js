const getLocalstorage = () => {
  const oldStrValue = localStorage.getItem("id");
  if (oldStrValue) {
    return JSON.parse(oldStrValue);
  }
  return [];
};

const setLocalstorage = (id) => {
  const oldStrvalue = getLocalstorage();
  const exists = oldStrvalue.find((exist) => exist === id);
  if (!exists) {
    oldStrvalue.push(id);
    localStorage.setItem("id", JSON.stringify(oldStrvalue));
  }
};

export { getLocalstorage, setLocalstorage };
