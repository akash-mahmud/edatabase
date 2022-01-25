import API from "./axios";

export const getRegister = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getUpload = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getVerified = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};


export const getCategories = (url) => {
  return new Promise(async (resolve, reject) => {
    await API.get(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getRegisterDetail = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getRegisterCmpDetail = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getRegisterProjects = (url,payload) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url,payload)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getCompaniesByUserId = (url) => {
  return new Promise(async (resolve, reject) => {
    await API.post(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getStates = (url) => {
  return new Promise(async (resolve, reject) => {
    await API.get(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getCities = (url) => {
  return new Promise(async (resolve, reject) => {
    await API.get(url)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

