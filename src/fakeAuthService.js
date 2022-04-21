/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthService = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthService.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthService.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthService };
