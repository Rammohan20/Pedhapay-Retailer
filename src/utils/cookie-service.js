import moment from 'moment';
import Cookies from 'js-cookie';

export const setCookie = (name, value, expiry = 30) => {
    const cookies = new Cookies();
    cookies.set(name, value, { path: '/', expires: moment().add(expiry, 'days').toDate() });
}

export const getCookie = (name) => {
    const cookies = new Cookies();
    return cookies.get(name);
}

export const removeCookie = (name) => {
    const cookies = new Cookies();
    cookies.remove(name, { path: '/' });
}

export const removeAllCookie = () => {
    const cookies = new Cookies();
    cookies.remove();
}