import moment from 'moment';
import Cookies from 'js-cookie';

export const setCookie = (name, value, expiry = 30) => {
    Cookies.set(name, value, {
        path: '/',
        expires: moment().add(expiry, 'days').toDate(),
    });
};

export const getCookie = (name) => {
    return Cookies.get(name);
};

export const removeCookie = (name) => {
    Cookies.remove(name, { path: '/' });
};

export const removeAllCookie = () => {
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach(cookieName => Cookies.remove(cookieName, { path: '/' }));
};
