import api from '../http/connect';

export const getAuthorizedUserRequest = async (userName: string) => {
  try {
    const res = await api.get(`user/?userName=${userName}`);
    return res.data;
  } catch (err: any) {
    return { err, status: err?.status ?? err.response?.status };
  }
};