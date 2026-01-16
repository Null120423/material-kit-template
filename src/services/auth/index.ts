import { toast } from 'react-toastify';
import { handleErrorApi, saveAccessToken, saveRefreshToken } from 'src/helper';
import { endpoints } from '../endpoints';
import rootApi from '../root-api';

export const login = async (loginDTO: unknown) =>
  handleErrorApi(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await rootApi.post<any, any>(endpoints.sign_in, loginDTO);
    if (!res) {
      toast.error('Login failed! Try again!');
      return null;
    }
    saveAccessToken(res?.accessToken);
    saveRefreshToken(res?.refreshToken);
    setTimeout(() => {}, 1000);
    const user = await rootApi.get<unknown, unknown>(endpoints.get_profile);

    return {
      loginResponse: res,
      user,
    };
  });

export const getProfileUser = () =>
  handleErrorApi(() => rootApi.get(endpoints.get_profile));
