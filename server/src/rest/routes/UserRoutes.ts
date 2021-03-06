import { UserController } from '../controller/UserController';
import { ProfileController } from '../controller/ProfileController';
import { checkJwt } from '../middleware/checkJwt';
import { checkRoles } from '../middleware/checkRoles';

export const UserRoutes = [
  {
    method: 'get',
    route: '/users/passwordResetToken',
    controller: UserController,
    action: 'passwordResetToken',
  },
  {
    method: 'post',
    route: '/users/passwordChange',
    controller: UserController,
    action: 'passwordChange',
  },
  {
    method: 'post',
    route: '/users/passwordReset',
    controller: UserController,
    action: 'passwordReset',
  },
  {
    method: 'post',
    route: '/users/updateProfilePic',
    controller: UserController,
    action: 'updateProfilePic',
  },
  {
    method: 'get',
    route: '/users',
    middleware: [checkJwt, checkRoles(['ADMIN'])],
    controller: UserController,
    action: 'all',
  },
  {
    method: 'get',
    route: '/users/:id',
    middleware: [checkJwt, checkRoles(['ADMIN'])],
    controller: UserController,
    action: 'one',
  },
  {
    method: 'post',
    route: '/users',
    middleware: [checkJwt, checkRoles(['ADMIN'])],
    controller: UserController,
    action: 'save',
  },
  {
    method: 'delete',
    route: '/users/:id',
    middleware: [checkJwt, checkRoles(['ADMIN'])],
    controller: UserController,
    action: 'remove',
  },
  {
    method: 'post',
    route: '/users/recaptcha',
    middleware: [],
    controller: UserController,
    action: 'recaptcha',
  },
  {
    method: 'get',
    route: '/users/profile',
    middleware: [],
    controller: ProfileController,
    action: 'getProfile',
  },
  {
    method: 'post',
    route: '/users/profile/imageUpload',
    middleware: [],
    controller: ProfileController,
    action: 'imageUpload',
  },
];
