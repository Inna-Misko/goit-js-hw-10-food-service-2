
export function setDataLocalStorage(key, data) {
    localStorage.setItem(key, data);
};

export function getDataLocalStorage(key) {
    return localStorage.getItem(key);

};