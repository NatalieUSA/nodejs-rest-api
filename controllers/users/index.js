const { controllerWrapper } = require('../../helpers');

const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logout: controllerWrapper(logout),
  updateAvatar: controllerWrapper(updateAvatar),
  verifyEmail: controllerWrapper(verifyEmail),
  resendVerifyEmail: controllerWrapper(resendVerifyEmail),
};
