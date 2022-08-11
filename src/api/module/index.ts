import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  username: string;
  password: string;
}
export const getCatalogs = () => {
  return request({
    url: '/api/mobileWeb/catalogs',
    method: 'get',
  });
};
