import request from '../lib/request';

export const getDataTest = async () => {
  return request.get(`/api/hello`);
}