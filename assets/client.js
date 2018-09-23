webpackJsonp([6],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_RUNTIME_VARIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OPEN_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLOSE_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IP; });
/* unused harmony export LOCAL_IP */
/* eslint-disable import/prefer-default-export */

var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

var TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
var OPEN_SIDEBAR = 'OPEN_SIDEBAR';
var CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
var IP = 'http://18.218.18.81:8080';
var LOCAL_IP = 'http://localhost:8080';

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Widget_scss__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Widget_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Widget_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Widget\\Widget.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Widget = function (_React$Component) {
  _inherits(Widget, _React$Component);

  function Widget() {
    _classCallCheck(this, Widget);

    return _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments));
  }

  _createClass(Widget, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: [__WEBPACK_IMPORTED_MODULE_3__Widget_scss___default.a.widget, this.props.className].join(' '), __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        this.props.title && (typeof this.props.title == 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { className: __WEBPACK_IMPORTED_MODULE_3__Widget_scss___default.a.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          this.props.title
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          { className: __WEBPACK_IMPORTED_MODULE_3__Widget_scss___default.a.title, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          this.props.title
        )),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          },
          this.props.children
        )
      );
    }
  }]);

  return Widget;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Widget.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node])
};
Widget.defaultProps = {
  title: null,
  className: ''
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Widget_scss___default.a)(Widget));

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_FAILURE; });
/* unused harmony export LOGOUT_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGOUT_SUCCESS; });
/* unused harmony export LOGOUT_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REGISTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_SUCCESS; });
/* unused harmony export receiveLogin */
/* unused harmony export receiveRegister */
/* unused harmony export receiveLogout */
/* harmony export (immutable) */ __webpack_exports__["k"] = logoutUser;
/* harmony export (immutable) */ __webpack_exports__["j"] = loginUser;
/* harmony export (immutable) */ __webpack_exports__["i"] = loginUserWithFacebook;
/* harmony export (immutable) */ __webpack_exports__["h"] = registerUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
var REGISTER_REQUEST = 'REGISTER_REQUEST';
var REGISTER_FAILURE = 'REGISTER_FAILURE';
var REGISTER_SUCCESS = 'REGISTER_SUCCESS';


// export const IP = 'http://127.0.0.1:8080';


function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: creds
  };
}

function requestRegister(creds, type) {
  return _defineProperty({
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds: creds
  }, 'type', type);
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token,
    userType: user.userType
  };
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    isRegistered: true
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message: message
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Logs the user out
function logoutUser() {
  return function (dispatch) {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    document.cookie = 'id_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(receiveLogout());
  };
}

function loginUser(creds) {
  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(creds)
  };

  return function (dispatch) {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/auth/token', config).then(function (response) {
      return response.json().then(function (user) {
        return { user: user, response: response };
      });
    }).then(function (_ref2) {
      var user = _ref2.user,
          response = _ref2.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(user.message));
        return Promise.reject(user);
      }
      // in posts create new action and check http status, if malign logout
      // If login was successful, set the token in local storage
      localStorage.setItem('id_token', user.data.token);
      // Dispatch the success action
      dispatch(receiveLogin(user.data));
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

function loginUserWithFacebook(creds, userType) {
  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: ''
  };
  var query = 'acessToken=' + creds.accessToken;
  if (userType) {
    query = query + '&type=' + userType;
  }
  return function (dispatch) {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/auth/facebook?' + query, config).then(function (response) {
      return response.json().then(function (user) {
        return { user: user, response: response };
      });
    }).then(function (_ref3) {
      var user = _ref3.user,
          response = _ref3.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(user.message));
        return Promise.reject(user);
      }
      // in posts create new action and check http status, if malign logout
      // If login was successful, set the token in local storage
      localStorage.setItem('id_token', user.data.token);
      // Dispatch the success action
      dispatch(receiveLogin(user.data));
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

// Register User

function registerUser(creds, type) {
  var config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(creds)
  };

  return function (dispatch) {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestRegister(creds, type));

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/auth/register?type=' + type, config).then(function (response) {
      return response.json().then(function (user) {
        return { user: user, response: response };
      });
    }).then(function (_ref4) {
      var user = _ref4.user,
          response = _ref4.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(registerError(user.message));
        return Promise.reject(user);
      }
      // in posts create new action and check http status, if malign logout
      // If login was successful, set the token in local storage
      // localStorage.setItem('id_token', user.data.token);
      // Dispatch the success action
      dispatch(receiveRegister(user.data));
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_POST_INITIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_POSTS_FAILURE; });
/* harmony export (immutable) */ __webpack_exports__["i"] = createPost;
/* harmony export (immutable) */ __webpack_exports__["h"] = fetchPosts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var CREATE_POST_INITIAL = 'CREATE_POST_INITIAL';
var CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
var CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
var CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
var FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
var FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';


// export const IP = 'http://127.0.0.1:8080';


function createPostInitial() {
  return {
    type: CREATE_POST_INITIAL,
    isFetching: false
  };
}

function requestCreatePost(post) {
  return {
    type: CREATE_POST_REQUEST,
    isFetching: true,
    post: post
  };
}

function createPostSuccess(post) {
  return {
    type: CREATE_POST_SUCCESS,
    isFetching: false,
    post: post
  };
}

function createPostError(message) {
  return {
    type: CREATE_POST_FAILURE,
    isFetching: false,
    message: message
  };
}

function requestFetchPosts() {
  return {
    type: FETCH_POSTS_REQUEST,
    isFetching: true
  };
}

function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    isFetching: false,
    posts: posts
  };
}

function fetchPostsError(message) {
  return {
    type: FETCH_POSTS_FAILURE,
    isFetching: false,
    message: message
  };
}

function createPost(post) {
  var config = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: 'mutation {\n                addPost(title: "' + post.title + '", content: "' + post.content + '"){\n                  id,\n                  title,\n                  content\n                }\n              }'
    }),
    credentials: 'include'
  };

  return function (dispatch) {
    // We dispatch requestCreatePost to kickoff the call to the API
    dispatch(requestCreatePost(post));

    return fetch('/graphql', config).then(function (response) {
      return response.json().then(function (post) {
        return { post: post, response: response };
      });
    }).then(function (_ref) {
      var post = _ref.post,
          response = _ref.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(createPostError(post.message));
        return Promise.reject(post);
      }
      // Dispatch the success action
      dispatch(createPostSuccess(post));
      setTimeout(function () {
        dispatch(createPostInitial());
      }, 5000);
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

function fetchPosts() {
  var config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',localStorage.setItem('id_token', user.data.token);
      // 'Authorization': 'YW1hcnZhaXNoLmlpdHJAZ21haWwuY29tOjE1MjQ1MDE0OTM0MzI=',
      'Authorization': localStorage.getItem('id_token')
    }
  };

  return function (dispatch) {
    dispatch(requestFetchPosts());

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/gym/search?areaPinCode=122001&page=0&size=10', config).then(function (response) {
      return response.json().then(function (response) {
        return { posts: response.data.content, response: response };
      });
    }).then(function (_ref2) {
      var posts = _ref2.posts,
          response = _ref2.response;

      if (!response.data.content) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(fetchPostsError(posts.message));
        return Promise.reject(posts);
      }
      // Dispatch the success action
      dispatch(fetchPostsSuccess(posts));
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer_scss__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Footer_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Footer\\Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'footer',
        { className: [__WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a.root, this.props.className].join(' '), __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            '\xA9 2017 \xA0Flatlogic LLC '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            '\xB7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
            { to: '/app/tos', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            'Terms of Service'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            },
            '\xB7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
            { to: '/app/privacy', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            'Privacy Policy'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a.spacer, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            '\xB7'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
            { to: '/not-found', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            'Support'
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Footer.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Footer.defaultProps = {
  className: ''
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Footer_scss___default.a)(Footer));

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_GYM_INITIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_GYM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_GYM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_GYM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_GYM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_GYM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_GYM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPLOAD_GYM_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UPLOAD_GYM_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPLOAD_GYM_IMAGES_SUCCESS; });
/* harmony export (immutable) */ __webpack_exports__["l"] = createGYM;
/* harmony export (immutable) */ __webpack_exports__["k"] = fetchGYM;
/* harmony export (immutable) */ __webpack_exports__["m"] = uploadImages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var CREATE_GYM_INITIAL = 'CREATE_GYM_INITIAL';
var CREATE_GYM_REQUEST = 'CREATE_GYM_REQUEST';
var CREATE_GYM_SUCCESS = 'CREATE_GYM_SUCCESS';
var CREATE_GYM_FAILURE = 'CREATE_GYM_FAILURE';
var FETCH_GYM_REQUEST = 'FETCH_GYM_REQUEST';
var FETCH_GYM_SUCCESS = 'FETCH_GYM_SUCCESS';
var FETCH_GYM_FAILURE = 'FETCH_GYM_FAILURE';
var UPLOAD_GYM_IMAGES_REQUEST = 'UPLOAD_GYM_IMAGES_REQUEST';
var UPLOAD_GYM_IMAGES_FAILURE = 'UPLOAD_GYM_IMAGES_FAILURE';
var UPLOAD_GYM_IMAGES_SUCCESS = 'UPLOAD_GYM_IMAGES_SUCCESS';



function createGYMInitial() {
  return {
    type: CREATE_GYM_INITIAL,
    isFetching: false
  };
}

function requestCreateGYM(GYM) {
  return {
    type: CREATE_GYM_REQUEST,
    isFetching: true,
    GYM: GYM
  };
}

function createGYMSuccess(GYM) {
  return {
    type: CREATE_GYM_SUCCESS,
    isFetching: false,
    GYM: GYM
  };
}

function createGYMError(message) {
  return {
    type: CREATE_GYM_FAILURE,
    isFetching: false,
    message: message
  };
}

function requestFetchGYM() {
  return {
    type: FETCH_GYM_REQUEST,
    isFetching: true
  };
}

function fetchGYMSuccess(GYM) {
  return {
    type: FETCH_GYM_SUCCESS,
    isFetching: false,
    GYM: GYM
  };
}

function fetchGYMError(message) {
  return {
    type: FETCH_GYM_FAILURE,
    isFetching: false,
    message: message
  };
}

function requestUploadImages() {
  return {
    type: UPLOAD_GYM_IMAGES_REQUEST,
    isUploading: true
  };
}

function uploadImagesError(message) {
  return {
    type: UPLOAD_GYM_IMAGES_FAILURE,
    isUploading: false,
    message: message
  };
}

function uploadImagesSuccess(GYM) {
  return {
    type: UPLOAD_GYM_IMAGES_SUCCESS,
    isUploading: false,
    GYM: GYM
  };
}

function createGYM(GYM) {
  var config = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('id_token')
    },
    body: JSON.stringify(GYM),
    credentials: 'include'
  };

  return function (dispatch) {
    // We dispatch requestCreateGYM to kickoff the call to the API
    dispatch(requestCreateGYM(GYM));

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/gym/details', config).then(function (response) {
      return response.json().then(function (GYM) {
        return { GYM: GYM, response: response };
      });
    }).then(function (_ref) {
      var GYM = _ref.GYM,
          response = _ref.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(createGYMError(GYM.message));
        return Promise.reject(GYM);
      }
      // Dispatch the success action
      dispatch(createGYMSuccess(GYM));
      setTimeout(function () {
        dispatch(createGYMInitial());
      }, 5000);
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

function fetchGYM() {
  var config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',localStorage.setItem('id_token', user.data.token);
      // 'Authorization': 'YW1hcnZhaXNoLmlpdHJAZ21haWwuY29tOjE1MjQ1MDE0OTM0MzI=',
      'Authorization': localStorage.getItem('id_token')
    }
  };

  return function (dispatch) {
    dispatch(requestFetchGYM());

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/gym/details', config).then(function (response) {
      return response.json().then(function (response) {
        return { gym: response.data, response: response };
      });
    }).then(function (_ref2) {
      var gym = _ref2.gym,
          response = _ref2.response;

      if (!response.data) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(fetchGYMError(gym.message));
        return Promise.reject(gym);
      }
      // Dispatch the success action
      dispatch(fetchGYMSuccess(gym));
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

function uploadImages(images) {
  var formData = new FormData();
  // Fields in the post
  var ins = images.length;
  for (var x = 0; x < ins; x++) {
    formData.append('files', images[x]);
  }

  var config = {
    method: 'POST',
    headers: {
      // Accept: 'application/json',
      // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      'Authorization': localStorage.getItem('id_token')
    },
    body: formData
  };

  return function (dispatch) {
    // We dispatch requestCreateGYM to kickoff the call to the API
    dispatch(requestUploadImages(images));

    return fetch(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* IP */] + '/gym/gymPics', config).then(function (response) {
      return response.json().then(function (GYM) {
        return { GYM: GYM, response: response };
      });
    }).then(function (_ref3) {
      var GYM = _ref3.GYM,
          response = _ref3.response;

      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(uploadImagesError(GYM.message));
        return Promise.reject(GYM);
      }
      // Dispatch the success action
      dispatch(uploadImagesSuccess(GYM));
      setTimeout(function () {
        dispatch(createGYMInitial());
      }, 5000);
    }).catch(function (err) {
      return console.log('Error: ', err);
    });
  };
}

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\core\\Bundle.js',
    _this3 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Bundle = function (_Component) {
  _inherits(Bundle, _Component);

  function Bundle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bundle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bundle.__proto__ || Object.getPrototypeOf(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bundle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        this.load(nextProps);
      }
    }
  }, {
    key: 'load',
    value: function load(props) {
      var _this2 = this;

      this.setState({
        mod: null
      });
      props.load(function (mod) {
        _this2.setState({
          // handle both es imports and cjs
          mod: mod.default ? mod.default : mod
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state.mod);
    }
  }]);

  return Bundle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Bundle.propTypes = {
  load: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

Bundle.generateBundle = function (loadModule) {
  return function () {
    return (
      /* eslint-disable */
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Bundle,
        { load: loadModule, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: _this3
        },
        function (Mod) {
          return Mod ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Mod, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: _this3
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { textAlign: 'center', paddingTop: '35vh' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: _this3
            },
            'Loading'
          );
        }
      )
      /* eslint-enable */

    );
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Bundle);

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(939));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fastclick__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createFetch__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_configureStore__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__devUtils__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__devUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__devUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_theme_scss__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styles_theme_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__styles_theme_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\client.js',
    _this = this;

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(location, action) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return');

          case 6:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* Router */],
              {
                history: __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */], { store: context.store, context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                },
                __self: this
              })
            ), container, function () {
              return onRenderComplete(location);
            });
            _context.next = 18;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 16;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__devUtils__["ErrorReporter"], { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }), container);
            throw _context.t0;

          case 16:

            console.error(_context.t0);

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */













// eslint-disable-next-line no-underscore-dangle
__WEBPACK_IMPORTED_MODULE_10__styles_theme_scss___default.a._insertCss();

// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Universal HTTP client
  fetch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createFetch__["a" /* default */])({
    baseUrl: window.App.apiUrl
  }),
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__store_configureStore__["a" /* default */])(window.App.state, { history: __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */] }),
  storeSubscription: null
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);

  // philip: this method updates scroll position and handles google analytics.
  // not related to actual rendering
  onRenderComplete = function renderComplete(location) {
    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    if (window.ga) {
      window.ga('send', 'pageview', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location));
    }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_3_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */].location;__WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__devUtils__["ErrorReporter"], { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./components/App', function () {
    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(643);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Register.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Register.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Bundle__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_register_Register__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_register_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_register_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_Layout__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_Login__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_Register__ = __webpack_require__(397);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\App.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








/* eslint-disable */


/* eslint-enable */





// import { auth } from '../config';

var RegisterBundle = __WEBPACK_IMPORTED_MODULE_4__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_register_Register___default.a);
var NotFoundBundle = __WEBPACK_IMPORTED_MODULE_4__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound___default.a);

var ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */].childContextTypes);

// let isAuthenticated = function() {
//   let t = jwt.verify(cookie.load('id_token'), auth.jwt.secret);
//
//   console.log(t);
//
//   return true;
// };


var PrivateRoute = function PrivateRoute(_ref) {
  var component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], _extends({}, rest, { render: function render(props) {
      return isAuthenticated ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, props) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["c" /* Redirect */], {
        to: {
          pathname: '/login',
          state: { from: props.location }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: _this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: _this
  }));
};

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // fixme. find better solution?
      return this.props.context || this.context.router.staticContext;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router__["d" /* Switch */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/', exact: true, render: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["c" /* Redirect */], { to: '/app', __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: _this3
            });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PrivateRoute, { isAuthenticated: this.props.isAuthenticated, path: '/app', component: __WEBPACK_IMPORTED_MODULE_7__components_Layout_Layout__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/login', exact: true, component: __WEBPACK_IMPORTED_MODULE_8__pages_login_Login__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/register', exact: true, component: __WEBPACK_IMPORTED_MODULE_9__pages_register_Register__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { component: NotFoundBundle, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(ContextType),
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
App.defaultProps = {
  context: null
};
App.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
App.childContextTypes = ContextType;


function mapStateToProps(store) {
  return {
    isAuthenticated: store.auth.isAuthenticated
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["e" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(App)));

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Header_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Header\\Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'doLogout',
    value: function doLogout() {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_user__["k" /* logoutUser */])());
    }
  }, {
    key: 'render',
    value: function render() {
      var loginId = this.props.loginId;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["n" /* Navbar */],
        { fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["o" /* Nav */],
          { pullLeft: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["p" /* NavItem */],
            { className: ['visible-xs', __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.menuButton].join(' '), eventKey: 1, href: '#', onClick: this.props.sidebarToggle, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["e" /* Glyphicon */], { glyph: 'menu-hamburger', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["o" /* Nav */],
          { pullRight: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["q" /* NavDropdown */],
            {
              eventKey: 1, title: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["e" /* Glyphicon */], { glyph: 'user', className: 'mr-sm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  { className: 'fw-semi-bold', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    },
                    __self: this
                  },
                  loginId
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["g" /* Badge */],
                  { className: 'ml-sm badge-warning', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  '4'
                )
              ), noCaret: true, id: 'basic-nav-dropdown',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["l" /* MenuItem */],
              { eventKey: 3.1, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              },
              'Notifications'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["l" /* MenuItem */],
              { eventKey: 3.2, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              'Action'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["l" /* MenuItem */],
              { eventKey: 3.3, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              },
              'Something else here'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["l" /* MenuItem */], { divider: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["l" /* MenuItem */],
              { eventKey: 3.4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              'Separated link'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["p" /* NavItem */],
            { className: 'hidden-xs', eventKey: 2, onClick: this.doLogout.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            },
            'Logout'
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Header.propTypes = {
  sidebarToggle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
Header.defaultProps = {
  sidebarToggle: function sidebarToggle() {}
};


function mapStateToProps(state) {
  return {
    init: state.runtime.initialNow,
    loginId: state.auth.user.email
  };
}
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a)(Header)));

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bundle_loader_lazy_pages_posts_Posts__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bundle_loader_lazy_pages_posts_Posts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bundle_loader_lazy_pages_posts_Posts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bundle_loader_lazy_pages_privacy_Privacy__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bundle_loader_lazy_pages_privacy_Privacy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bundle_loader_lazy_pages_privacy_Privacy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_profile_Profile__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_profile_Profile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_profile_Profile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bundle_loader_lazy_pages_gym_Gym__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bundle_loader_lazy_pages_gym_Gym___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bundle_loader_lazy_pages_gym_Gym__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Layout_scss__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Header__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Footer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_Bundle__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Sidebar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_Dashboard__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_customer_Customer__ = __webpack_require__(394);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Layout\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// an example of react-router code-splitting
/* eslint-disable */





/* eslint-enable */







// Dashboard component is loaded directly as an example of server side rendering



var PostsBundle = __WEBPACK_IMPORTED_MODULE_11__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_3_bundle_loader_lazy_pages_posts_Posts___default.a);
var PrivacyBundle = __WEBPACK_IMPORTED_MODULE_11__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_4_bundle_loader_lazy_pages_privacy_Privacy___default.a);
var ProfileBundle = __WEBPACK_IMPORTED_MODULE_11__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_5_bundle_loader_lazy_pages_profile_Profile___default.a);
var NotFoundBundle = __WEBPACK_IMPORTED_MODULE_11__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_6_bundle_loader_lazy_pages_notFound_NotFound___default.a);
var GymBundle = __WEBPACK_IMPORTED_MODULE_11__core_Bundle__["a" /* default */].generateBundle(__WEBPACK_IMPORTED_MODULE_7_bundle_loader_lazy_pages_gym_Gym___default.a);

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.state = {
      sidebarOpen: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__Layout_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Sidebar__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: [__WEBPACK_IMPORTED_MODULE_8__Layout_scss___default.a.wrap, this.state.sidebarOpen ? __WEBPACK_IMPORTED_MODULE_8__Layout_scss___default.a.sidebarOpen : ''].join(' '), __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Header__["a" /* default */], { sidebarToggle: function sidebarToggle() {
              return _this2.setState({ sidebarOpen: !_this2.state.sidebarOpen });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'main',
            { className: __WEBPACK_IMPORTED_MODULE_8__Layout_scss___default.a.content, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router__["d" /* Switch */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app', exact: true, component: __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_Dashboard__["a" /* default */], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/gym', exact: true, component: __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_Dashboard__["a" /* default */], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/customer', exact: true, component: __WEBPACK_IMPORTED_MODULE_14__pages_customer_Customer__["a" /* default */], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/posts', component: PostsBundle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/gym', component: GymBundle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/profile', exact: true, component: ProfileBundle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { path: '/app/privacy', exact: true, component: PrivacyBundle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["b" /* Route */], { component: NotFoundBundle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Footer__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router__["e" /* withRouter */])(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_8__Layout_scss___default.a)(Layout)));

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Sidebar\\LinksGroup\\LinksGroup.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var LinksGroup = function (_Component) {
  _inherits(LinksGroup, _Component);

  /* eslint-disable */
  function LinksGroup(props) {
    _classCallCheck(this, LinksGroup);

    var _this = _possibleConstructorReturn(this, (LinksGroup.__proto__ || Object.getPrototypeOf(LinksGroup)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }
  /* eslint-enable */

  _createClass(LinksGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.childrenLinks) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: [__WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.headerLink, this.props.className].join(' '), __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
            { to: this.props.headerLink, activeClassName: __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.headerLinkActive, exact: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon ' + this.props.iconName, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }),
            this.props.header
          )
        );
      }
      /* eslint-disable */
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["b" /* Route */], {
        path: this.props.headerLink,
        children: function children(_ref) {
          var match = _ref.match;

          var expanded = !!match || _this2.state.isOpen;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: [__WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.headerLink, _this2.props.className].join(' '), __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                className: match ? __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.headerLinkActive : '',
                onClick: function onClick() {
                  return _this2.setState({ isOpen: !_this2.state.isOpen });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'glyphicon ' + _this2.props.iconName, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: _this2
              }),
              _this2.props.header,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('b', { className: ['caret', __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.caret].join(' '), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: _this2
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["r" /* Panel */],
              { className: __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.panel, collapsible: true, expanded: expanded, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  },
                  __self: _this2
                },
                _this2.props.childrenLinks && _this2.props.childrenLinks.map(function (child) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: child.name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["c" /* NavLink */],
                      {
                        to: child.link, exact: true,
                        onClick: function onClick() {
                          return _this2.setState({ isOpen: false });
                        },
                        activeClassName: __WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a.headerLinkActive,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 69
                        },
                        __self: _this2
                      },
                      child.name
                    )
                  );
                })
              )
            )
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    }
  }]);

  return LinksGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

LinksGroup.propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  headerLink: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  childrenLinks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  iconName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
LinksGroup.defaultProps = {
  headerLink: null,
  childrenLinks: null,
  className: ''
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__LinksGroup_scss___default.a)(LinksGroup));

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Sidebar_scss__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Sidebar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Sidebar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LinksGroup_LinksGroup__ = __webpack_require__(389);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\components\\Sidebar\\Sidebar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { className: __WEBPACK_IMPORTED_MODULE_6__Sidebar_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'header',
          { className: __WEBPACK_IMPORTED_MODULE_6__Sidebar_scss___default.a.logo, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["a" /* Link */],
            { to: '/app', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'React Dashboard'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: __WEBPACK_IMPORTED_MODULE_6__Sidebar_scss___default.a.nav, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LinksGroup_LinksGroup__["a" /* default */], { header: 'Dashboard', headerLink: '/app', iconName: 'glyphicon-tree-conifer', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }),
          this.props.userType === 'ROLE_GYM' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LinksGroup_LinksGroup__["a" /* default */], {
            header: 'Gyms',
            headerLink: '/app/posts',
            childrenLinks: [{ name: 'Show all', link: '/app/posts' }, { name: 'Gym Details', link: '/app/gym/gymDetail' }, { name: 'Create new Gym Program', link: '/app/gym/gymProgram/new' }],
            iconName: 'glyphicon-list-alt',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LinksGroup_LinksGroup__["a" /* default */], {
            header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              'Profile',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'sup',
                { className: 'text-warning fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                },
                '\xA0new'
              )
            ), headerLink: '/app/profile', iconName: 'glyphicon-user',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__LinksGroup_LinksGroup__["a" /* default */], { className: 'visible-xs', header: 'Logout', headerLink: '/login', iconName: 'glyphicon-off', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          })
        )
      );
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Sidebar.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
Sidebar.defaultProps = {
  className: ''
};


function mapStateToProps(state) {
  return {
    sidebarOpened: state.navigation.sidebarOpened,
    sidebarStatic: state.navigation.sidebarStatic,
    userType: state.auth.userType
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["b" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Sidebar_scss___default.a)(Sidebar))));

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(_ref) {
  var baseUrl = _ref.baseUrl,
      cookie = _ref.cookie;

  // NOTE: Tweak the default options to suite your application needs
  var defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return function (url, options) {
    return url.startsWith('/graphql') || url.startsWith('/api') ? __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('' + baseUrl + url, _extends({}, defaults, options, {
      headers: _extends({}, defaults.headers, options && options.headers)
    })) : __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, options);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(913).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(777)
  };
}

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_posts__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_gym__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Customer_scss__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Customer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Customer_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\customer\\Customer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// import '../../css/switcher.css';
// import '../../css/animatec619.css';
// import '../../css/bootstrap.min.css';
// import '../../css/font-awesomec619.css';
// import '../../css/jquery.fancyboxc619.css';
// import '../../css/mediac619.css';
// import '../../css/owl.carousel.minc619.css';
// import '../../css/switcher/style1.css';

var Customer = function (_React$Component) {
    _inherits(Customer, _React$Component);

    function Customer(props) {
        _classCallCheck(this, Customer);

        var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, props));

        _this.state = {
            alert1Visible: true,
            alert2Visible: true,
            alert3Visible: true,
            alert4Visible: true
        };
        return _this;
    }

    _createClass(Customer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // this.props.dispatch(fetchPosts());
            this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_gym__["k" /* fetchGYM */])());
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'main', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'head_wrap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'top-head', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'container-fluid', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 46
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        { className: ' pull-right', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 48
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 49
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-clock-o', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 49
                                                },
                                                __self: this
                                            }),
                                            ' 8.00 am \u2013 10.00 pm '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 50
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 51
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 51
                                                    },
                                                    __self: this
                                                }),
                                                ' Register '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 53
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 54
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-lock', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 54
                                                    },
                                                    __self: this
                                                }),
                                                ' Login '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 56
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shopping-cart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 57
                                                    },
                                                    __self: this
                                                }),
                                                ' Cart '
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'header',
                        { id: 'header', className: 'float-panel', 'data-top': '0', 'data-scroll': '100', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'container-fluid', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 67
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12 main-menu', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 68
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'menuBar scrollbtn', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 69
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'nav',
                                            { className: 'navbar navbar-default', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 70
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'skewbox', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 71
                                                    },
                                                    __self: this
                                                },
                                                ' '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'container-fluid', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 72
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'navbar-header', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 74
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'button',
                                                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 75
                                                            },
                                                            __self: this
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'span',
                                                            { className: 'sr-only', __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 76
                                                                },
                                                                __self: this
                                                            },
                                                            'Toggle navigation'
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 77
                                                            },
                                                            __self: this
                                                        }),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 78
                                                            },
                                                            __self: this
                                                        }),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 79
                                                            },
                                                            __self: this
                                                        })
                                                    ),
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'div',
                                                        { className: 'logo', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 81
                                                            },
                                                            __self: this
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'a',
                                                            { className: 'navbar-brand', href: 'index-2.html', __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 82
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/logo.png', alt: 'logo', __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 82
                                                                },
                                                                __self: this
                                                            })
                                                        )
                                                    )
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 87
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'ul',
                                                        { className: 'nav navbar-nav navbar-right', __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 88
                                                            },
                                                            __self: this
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 89
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#about', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 89
                                                                    },
                                                                    __self: this
                                                                },
                                                                'About'
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 90
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#feature', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 90
                                                                    },
                                                                    __self: this
                                                                },
                                                                'Feature'
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 91
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#className', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 91
                                                                    },
                                                                    __self: this
                                                                },
                                                                'classNamees '
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 92
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#gallery', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 92
                                                                    },
                                                                    __self: this
                                                                },
                                                                'Gallery'
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 93
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#products', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 93
                                                                    },
                                                                    __self: this
                                                                },
                                                                'Shop'
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 94
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#plans', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 94
                                                                    },
                                                                    __self: this
                                                                },
                                                                'Pricing '
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 95
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: 'news.html', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 95
                                                                    },
                                                                    __self: this
                                                                },
                                                                'News'
                                                            )
                                                        ),
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'li',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 96
                                                                },
                                                                __self: this
                                                            },
                                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                                'a',
                                                                { href: '#footer', __source: {
                                                                        fileName: _jsxFileName,
                                                                        lineNumber: 96
                                                                    },
                                                                    __self: this
                                                                },
                                                                'Contact us'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { id: 'site-head', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { className: 'banner wow animated fadeInLeft', 'data-wow-delay': '0.5s', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 110
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'container pr', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 111
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'banskew', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 112
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 113
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 114
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'bannerText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 115
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h1',
                                            { className: 'slideout', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 116
                                                },
                                                __self: this
                                            },
                                            ' Strong '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h3',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 117
                                                },
                                                __self: this
                                            },
                                            ' Happens When ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 117
                                                },
                                                __self: this
                                            }),
                                            'You Run Out Of '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h1',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 118
                                                },
                                                __self: this
                                            },
                                            'Weak.'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'section',
                        { className: 'scrollDown scrollbtn', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 126
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h6',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 127
                                },
                                __self: this
                            },
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { href: '#boxes', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    },
                                    __self: this
                                },
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-long-arrow-left', 'aria-hidden': 'true', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 127
                                    },
                                    __self: this
                                }),
                                ' Scroll Down '
                            ),
                            ' '
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'boxes', className: 'boxes pad-top-120 pad-bottom-110', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 132
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 133
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 134
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 135
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'box box-1', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 136
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 137
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '../images/box-1.jpg', alt: 'image', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 137
                                            },
                                            __self: this
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'boxInfo', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 138
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h3',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 139
                                                },
                                                __self: this
                                            },
                                            ' Dite Tips '
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 143
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'box box-2', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 144
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 145
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/box-2.jpg', alt: 'image', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 145
                                            },
                                            __self: this
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'boxInfo', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 146
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h3',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 147
                                                },
                                                __self: this
                                            },
                                            ' Training Like a Pro '
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 151
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'box box-3', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 152
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 153
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '../../images/box-3.jpg', alt: 'image', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 153
                                            },
                                            __self: this
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'boxInfo', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 154
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h3',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 155
                                                },
                                                __self: this
                                            },
                                            ' Beauty Tips '
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'about', className: 'about pad-top-110 pad-bottom-120', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 163
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container-fluid no-padding', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 164
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row no-margin', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 165
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-6 col-md-6 col-sm-12 col-xs-12 wow animated fadeInLeft', 'data-wow-delay': '0.5s', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 166
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'figure',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 167
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/about_img.png', alt: 'image', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 167
                                        },
                                        __self: this
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'container', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 169
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'row', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 170
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right wow animated fadeInRight', 'data-wow-delay': '0.5s', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 171
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 172
                                                },
                                                __self: this
                                            },
                                            ' WELCOME TO Fitness point '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 173
                                                },
                                                __self: this
                                            },
                                            'WHat Is ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 173
                                                    },
                                                    __self: this
                                                },
                                                'Fitness point?'
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 174
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 175
                                                },
                                                __self: this
                                            },
                                            ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. '
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'feature', className: 'feature pad-top-115 pad-bottom-115', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 183
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 184
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 185
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 186
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 187
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-8 col-md-8 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 188
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 189
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 190
                                                },
                                                __self: this
                                            },
                                            'FOUR STEPS TO REACH YOUR GOAL'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle pad-bottom-60', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 191
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 191
                                                    },
                                                    __self: this
                                                },
                                                'Feature'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 196
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-8 col-md-8 col-sm-12 col-xs-12 wow fadeInUp animated', 'data-wow-delay': '0.5s', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 197
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-6 col-md-6 col-sm-6 col-xs-12 feBox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 198
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-fitness-bracelet', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 199
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 200
                                            },
                                            __self: this
                                        },
                                        ' Duis aute irure dolor in '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 201
                                            },
                                            __self: this
                                        },
                                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-6 col-md-6 col-sm-6 col-xs-12 feBox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 203
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-bosu-ball', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 204
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 205
                                            },
                                            __self: this
                                        },
                                        ' Duis aute irure dolor in '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 206
                                            },
                                            __self: this
                                        },
                                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-6 col-md-6 col-sm-6 col-xs-12 feBox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 208
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-waist', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 209
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 210
                                            },
                                            __self: this
                                        },
                                        ' Duis aute irure dolor in '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 211
                                            },
                                            __self: this
                                        },
                                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-6 col-md-6 col-sm-6 col-xs-12 feBox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 213
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-trainer-rod', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 214
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 215
                                            },
                                            __self: this
                                        },
                                        ' Duis aute irure dolor in '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 216
                                            },
                                            __self: this
                                        },
                                        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'className', className: 'className pad-top-115 pad-bottom-115', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 223
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 224
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 225
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 226
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 227
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 228
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 229
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 230
                                                },
                                                __self: this
                                            },
                                            'FOUR STEPS TO REACH YOUR GOAL'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 231
                                                },
                                                __self: this
                                            },
                                            'Our ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 231
                                                    },
                                                    __self: this
                                                },
                                                'classNamees'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row wow fadeInUp animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 236
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'tabs-header', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 237
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { id: 'filters', className: 'button-group isogrp', 'data-option-key': 'filter', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 238
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button is-checked', 'data-filter': '.sun', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 239
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 239
                                                },
                                                __self: this
                                            },
                                            'Sun'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.mon', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 240
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 240
                                                },
                                                __self: this
                                            },
                                            'Mon'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.tue', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 241
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 241
                                                },
                                                __self: this
                                            },
                                            'Tue'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.wed', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 242
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 242
                                                },
                                                __self: this
                                            },
                                            'Wed'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.thu', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 243
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 243
                                                },
                                                __self: this
                                            },
                                            'Thu'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.fri', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 244
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 244
                                                },
                                                __self: this
                                            },
                                            'Fri'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.sat', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 245
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 245
                                                },
                                                __self: this
                                            },
                                            'Sat'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'border-move border', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 246
                                        },
                                        __self: this
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { id: 'classNamebox', className: 'grid className-grids clickable clearfix', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 249
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 250
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 251
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 252
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 253
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-barbell', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 255
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 256
                                                },
                                                __self: this
                                            },
                                            ' barbell '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 257
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 258
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 258
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition mon sat sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 261
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 262
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 263
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 264
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-boxing-mannequin', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 266
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 267
                                                },
                                                __self: this
                                            },
                                            ' Boxing '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 268
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 269
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 269
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition tue fri sat sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 272
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 273
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 274
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 275
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-punching-bag', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 277
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 278
                                                },
                                                __self: this
                                            },
                                            ' punching bag '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 279
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 280
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 280
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition wed fri sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 283
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 284
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 285
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 286
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-treadmill', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 288
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 289
                                                },
                                                __self: this
                                            },
                                            ' treadmill '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 290
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 291
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 291
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition thu sat mon sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 294
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 295
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 296
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 297
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-brawn', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 299
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 300
                                                },
                                                __self: this
                                            },
                                            ' brawn '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 301
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 302
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 302
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition wed sat sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 305
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 306
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 307
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 308
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-exercise-bike', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 310
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 311
                                                },
                                                __self: this
                                            },
                                            ' exercising cycle '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 312
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 313
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 313
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition wed sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 316
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 317
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 318
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 319
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-gymnastic-roller', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 321
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 322
                                                },
                                                __self: this
                                            },
                                            ' gymnastic roller '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 323
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 324
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 324
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'elemnt celement col-lg-3 col-md-4 col-sm-4 col-xs-12 transition thu fri sat sun', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 327
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 328
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 329
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 330
                                                    },
                                                    __self: this
                                                },
                                                ' 07:00am - 12:00pm '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fIcons flaticon-horizontal-bar', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 332
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 333
                                                },
                                                __self: this
                                            },
                                            ' horizontal bar '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 334
                                                },
                                                __self: this
                                            },
                                            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'element-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 335
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'element-fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 335
                                                    },
                                                    __self: this
                                                },
                                                'Join this className'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'gallery', className: 'gallery pad-top-115 pad-bottom-115 parallax', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 343
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 344
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 345
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 346
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 347
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 348
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 349
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 350
                                                },
                                                __self: this
                                            },
                                            'FOUR STEPS TO REACH YOUR GOAL'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle pad-bottom-60', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 351
                                                },
                                                __self: this
                                            },
                                            'Our ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 351
                                                    },
                                                    __self: this
                                                },
                                                'Gallery'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row wow fadeInUp animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 356
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'gallery-isotope col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 357
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { id: 'gallery-filters', className: 'gallery-button-group isogrp', 'data-option-key': 'filter', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 358
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button is-checked', 'data-filter': '*', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 359
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 359
                                                },
                                                __self: this
                                            },
                                            'All'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.fitness', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 360
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 360
                                                },
                                                __self: this
                                            },
                                            'Fitness'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.gymn', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 361
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 361
                                                },
                                                __self: this
                                            },
                                            'Gym'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.yoga', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 362
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 362
                                                },
                                                __self: this
                                            },
                                            'Yoga'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.running', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 363
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 363
                                                },
                                                __self: this
                                            },
                                            'Running'
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { className: 'button', 'data-filter': '.workout', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 364
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 364
                                                },
                                                __self: this
                                            },
                                            'Workout'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { id: 'gallery-box', className: 'gallery-grid clickable clearfix', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 366
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition gymn yoga grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 367
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 368
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 369
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-1.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 370
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-1.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 372
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 373
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 373
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition fitness yoga grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 377
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 378
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 379
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-2.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 380
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-2.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 382
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 383
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 383
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition fitness running grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 387
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 388
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 389
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-3.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 390
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-3.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 392
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 393
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 393
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition workout gymn grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 397
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 398
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 399
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-4.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 400
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-4.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 402
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 403
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 403
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition running grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 407
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 408
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 409
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-5.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 410
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-5.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 412
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 413
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 413
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition fitness yoga grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 417
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 418
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 419
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-6.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 420
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-6.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 422
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 423
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 423
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition fitness gymn grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 427
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 428
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 429
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-7.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 430
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-7.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 432
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 433
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 433
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition workout running grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 437
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 438
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 439
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-8.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 440
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-8.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 442
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 443
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 443
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition workout grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 447
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 448
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 449
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-9.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 450
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-9.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 452
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 453
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 453
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition workout yoga grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 457
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 458
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 459
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-10.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 460
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-10.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 462
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 463
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 463
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition fitness running grid-item', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 467
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 468
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 469
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-11.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 470
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-11.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 472
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 473
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 473
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'elemnt transition grid-item grid-item--width2', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 477
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'gImg', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 478
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'gImgpath', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 479
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/gallery-12.jpg', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 480
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { className: 'grouped_gallery', href: 'images/gallery-12.jpg', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 482
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'circle-icon', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 483
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 483
                                                        },
                                                        __self: this
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'products', className: 'products pad-top-115 pad-bottom-115', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 493
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 494
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 495
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 496
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 497
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 498
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 499
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 500
                                                },
                                                __self: this
                                            },
                                            'FOUR STEPS TO REACH YOUR GOAL'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 501
                                                },
                                                __self: this
                                            },
                                            'Fitness ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 501
                                                    },
                                                    __self: this
                                                },
                                                'Products'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row wow animated fadeInUp', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 506
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 507
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    { className: 'procap', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 508
                                        },
                                        __self: this
                                    },
                                    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { id: 'owl-deal', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 510
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 511
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 512
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 513
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 514
                                                    },
                                                    __self: this
                                                },
                                                ' Sale ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 514
                                                        },
                                                        __self: this
                                                    },
                                                    '20%'
                                                ),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/product-1.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 516
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 517
                                                },
                                                __self: this
                                            },
                                            ' Cellucor C4, 30 Servings '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 518
                                                },
                                                __self: this
                                            },
                                            ' Advanced Pre-Workout for Increased Energy and Focus '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'priceBox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 519
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h4',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 520
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'del',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 520
                                                        },
                                                        __self: this
                                                    },
                                                    '$74.99'
                                                ),
                                                ' '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h4',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 521
                                                    },
                                                    __self: this
                                                },
                                                ' $60.00 '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'stars', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 523
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 524
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 525
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 525
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 527
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 528
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 528
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 530
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 531
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 531
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 533
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 534
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 534
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 536
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 537
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 537
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'buy-buttons', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 540
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 541
                                                    },
                                                    __self: this
                                                },
                                                'Buy Now'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 542
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 542
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 543
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shopping-cart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 543
                                                    },
                                                    __self: this
                                                })
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 547
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 548
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'blckbox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 549
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h6',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 550
                                                    },
                                                    __self: this
                                                },
                                                ' Sale ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 550
                                                        },
                                                        __self: this
                                                    },
                                                    '20%'
                                                ),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/product-2.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 552
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 553
                                                },
                                                __self: this
                                            },
                                            ' Mutant Muscle Mass '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 554
                                                },
                                                __self: this
                                            },
                                            ' Advanced Pre-Workout for Increased Energy and Focus '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'priceBox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 555
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h4',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 556
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'del',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 556
                                                        },
                                                        __self: this
                                                    },
                                                    '$90.45'
                                                ),
                                                ' '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h4',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 557
                                                    },
                                                    __self: this
                                                },
                                                ' $67.34 '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'stars', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 559
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 560
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 561
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 561
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 563
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 564
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 564
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 566
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 567
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 567
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 569
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 570
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 570
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 572
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 573
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 573
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'buy-buttons', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 576
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 577
                                                    },
                                                    __self: this
                                                },
                                                'Buy Now'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 578
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 578
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 579
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shopping-cart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 579
                                                    },
                                                    __self: this
                                                })
                                            )
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 583
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 584
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/product-3.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 585
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h4',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 586
                                                },
                                                __self: this
                                            },
                                            ' BPI Sports Best BCAA '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'p',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 587
                                                },
                                                __self: this
                                            },
                                            ' Advanced Pre-Workout for Increased Energy and Focus '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'priceBox', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 588
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h4',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 589
                                                    },
                                                    __self: this
                                                },
                                                ' $73.53 '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'stars', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 591
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 592
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 593
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 593
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 595
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 596
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 596
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 598
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 599
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 599
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 601
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 602
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 602
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 604
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'a',
                                                    { href: '#', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 605
                                                        },
                                                        __self: this
                                                    },
                                                    ' ',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 605
                                                        },
                                                        __self: this
                                                    }),
                                                    ' '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'buy-buttons', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 608
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 609
                                                    },
                                                    __self: this
                                                },
                                                'Buy Now'
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 610
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-heart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 610
                                                    },
                                                    __self: this
                                                })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'button',
                                                { type: 'button', className: 'fill-btn circled', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 611
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-shopping-cart', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 611
                                                    },
                                                    __self: this
                                                })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'call-to-action', className: 'call-to-action pad-top-115 pad-bottom-115', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 620
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'actionBg parallax', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 621
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 622
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 623
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 624
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 625
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-8 col-md-8 col-sm-8 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 626
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 627
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 628
                                                },
                                                __self: this
                                            },
                                            'hurry up'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 629
                                                },
                                                __self: this
                                            },
                                            '45% ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 629
                                                    },
                                                    __self: this
                                                },
                                                'Discount'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 634
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-8 col-md-8 col-sm-8 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 635
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    { className: 'procap', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 636
                                        },
                                        __self: this
                                    },
                                    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi t aliquip ex ea commodo consequat. '
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 wow animated fadeInUp', 'data-wow-delay': '0.5s', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 638
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    { type: 'button', className: 'fill-btn', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 639
                                        },
                                        __self: this
                                    },
                                    'Start Today'
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'plans', className: 'plans pad-top-115 pad-bottom-120', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 645
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 646
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 647
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 648
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 649
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 650
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 651
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 652
                                                },
                                                __self: this
                                            },
                                            'READY TO GO?'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 653
                                                },
                                                __self: this
                                            },
                                            'CHOOSE  ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 653
                                                    },
                                                    __self: this
                                                },
                                                'YOUR PLAN'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 658
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'pricing-tables pad-top-55', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 659
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding pricebox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 660
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 661
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-top', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 662
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h5',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 663
                                                    },
                                                    __self: this
                                                },
                                                ' Body Combat Program '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-side', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 665
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'skewback', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 666
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h2',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 667
                                                        },
                                                        __self: this
                                                    },
                                                    ' $25',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'sub',
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 667
                                                            },
                                                            __self: this
                                                        },
                                                        '/mo.'
                                                    )
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h6',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 668
                                                        },
                                                        __self: this
                                                    },
                                                    ' With Jon Deo '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'plan-list', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 671
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 672
                                                    },
                                                    __self: this
                                                },
                                                ' 10 Days a Week '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 673
                                                    },
                                                    __self: this
                                                },
                                                ' Dedicated Trainer Allocated '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 674
                                                    },
                                                    __self: this
                                                },
                                                ' Diet Plan Inculuded '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 675
                                                    },
                                                    __self: this
                                                },
                                                ' Morning and Evening Batches '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { type: 'button', className: 'fill-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 677
                                                },
                                                __self: this
                                            },
                                            'explore more'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding pricebox midprice', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 680
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element midelement', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 681
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-top', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 682
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h5',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 684
                                                    },
                                                    __self: this
                                                },
                                                ' Body Combat Program '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-side', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 686
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'skewback', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 687
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h2',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 688
                                                        },
                                                        __self: this
                                                    },
                                                    ' $25',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'sub',
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 688
                                                            },
                                                            __self: this
                                                        },
                                                        '/mo.'
                                                    )
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h6',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 689
                                                        },
                                                        __self: this
                                                    },
                                                    ' With Jon Deo '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'midIcon', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 692
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'flaticon-gym fIcons', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 692
                                                },
                                                __self: this
                                            })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'plan-list', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 693
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 694
                                                    },
                                                    __self: this
                                                },
                                                ' 10 Days a Week '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 695
                                                    },
                                                    __self: this
                                                },
                                                ' Dedicated Trainer Allocated '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 696
                                                    },
                                                    __self: this
                                                },
                                                ' Diet Plan Inculuded '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 697
                                                    },
                                                    __self: this
                                                },
                                                ' Morning and Evening Batches '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { type: 'button', className: 'fill-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 699
                                                },
                                                __self: this
                                            },
                                            'explore more'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-4 col-md-4 col-sm-4 col-xs-12 no-padding pricebox', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 702
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'element', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 703
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-top', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 704
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'h5',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 706
                                                    },
                                                    __self: this
                                                },
                                                ' Body Combat Program '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { className: 'plan-side', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 708
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'skewback', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 709
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h2',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 710
                                                        },
                                                        __self: this
                                                    },
                                                    ' $25',
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        'sub',
                                                        {
                                                            __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 710
                                                            },
                                                            __self: this
                                                        },
                                                        '/mo.'
                                                    )
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h6',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 711
                                                        },
                                                        __self: this
                                                    },
                                                    ' With Jon Deo '
                                                )
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'plan-list', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 714
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 715
                                                    },
                                                    __self: this
                                                },
                                                ' 10 Days a Week '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 716
                                                    },
                                                    __self: this
                                                },
                                                ' Dedicated Trainer Allocated '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 717
                                                    },
                                                    __self: this
                                                },
                                                ' Diet Plan Inculuded '
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'li',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 718
                                                    },
                                                    __self: this
                                                },
                                                ' Morning and Evening Batches '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { type: 'button', className: 'fill-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 720
                                                },
                                                __self: this
                                            },
                                            'explore more'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'testimonial', className: 'testimonial pad-top-115 pad-bottom-120', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 728
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'testimonialBg parallax', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 729
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 730
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 731
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12 wow animated fadeInUp', 'data-wow-delay': '0.5s', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 732
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'titleText', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 733
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h6',
                                        { className: 'titleTop', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 734
                                            },
                                            __self: this
                                        },
                                        'Our Clients'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h2',
                                        { className: 'sectionTitle pad-bottom-60', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 735
                                            },
                                            __self: this
                                        },
                                        'SUCCESS ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 735
                                                },
                                                __self: this
                                            },
                                            'STORIES'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-lg-1 col-md-1 col-sm-1 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 737
                                    },
                                    __self: this
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-10 col-md-10 col-sm-10 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 738
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'clientSlide', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 739
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'div',
                                            { id: 'owl-testimonial', className: 'testimonial-slider', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 740
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'item', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 741
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '../../images/testImg.png', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 742
                                                    },
                                                    __self: this
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'spacer left', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 743
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mask', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 744
                                                        },
                                                        __self: this
                                                    })
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'p',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 746
                                                        },
                                                        __self: this
                                                    },
                                                    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi t aliquip ex ea commodo consequat. '
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h4',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 747
                                                        },
                                                        __self: this
                                                    },
                                                    ' Aena Deo '
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h5',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 748
                                                        },
                                                        __self: this
                                                    },
                                                    ' Lost 20 LBS in 2 Months '
                                                )
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'div',
                                                { className: 'item', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 750
                                                    },
                                                    __self: this
                                                },
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/testImg-2.png', alt: 'images', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 751
                                                    },
                                                    __self: this
                                                }),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'div',
                                                    { className: 'spacer left', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 752
                                                        },
                                                        __self: this
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'mask', __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 753
                                                        },
                                                        __self: this
                                                    })
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'p',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 755
                                                        },
                                                        __self: this
                                                    },
                                                    ' In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. '
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h4',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 756
                                                        },
                                                        __self: this
                                                    },
                                                    ' Tami Flores '
                                                ),
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'h5',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 757
                                                        },
                                                        __self: this
                                                    },
                                                    ' Lost 25 LBS in 3 Months '
                                                )
                                            )
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-lg-1 col-md-1 col-sm-1 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 761
                                        },
                                        __self: this
                                    })
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'news', className: 'news products pad-top-115 pad-bottom-110', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 768
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container pr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 769
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'secHead wow fadeInLeft animated', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 770
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'skewpink', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 771
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 772
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 773
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'titleText', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 774
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h6',
                                            { className: 'titleTop', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 775
                                                },
                                                __self: this
                                            },
                                            'READY TO GO?'
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'h2',
                                            { className: 'sectionTitle', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 776
                                                },
                                                __self: this
                                            },
                                            'Latest ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 776
                                                    },
                                                    __self: this
                                                },
                                                'News'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row wow animated fadeInUp', 'data-wow-delay': '0.5s', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 781
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 782
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    { className: 'procap', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 783
                                        },
                                        __self: this
                                    },
                                    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { id: 'owl-news', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 785
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 786
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 787
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/news-1.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 787
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 788
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: 'news-detail.html', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 788
                                                },
                                                __self: this
                                            },
                                            ' Politicians seek '
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 789
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 790
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 790
                                                    },
                                                    __self: this
                                                },
                                                ' #photography '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 791
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 791
                                                    },
                                                    __self: this
                                                },
                                                ' #view '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 792
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 792
                                                    },
                                                    __self: this
                                                },
                                                ' #architecture'
                                            ),
                                            ' '
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'news-comments', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 794
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 795
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 795
                                                },
                                                __self: this
                                            }),
                                            ' 27 '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 796
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 796
                                                },
                                                __self: this
                                            }),
                                            ' 343 '
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 799
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 800
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/news-2.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 800
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 801
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: 'news-detail.html', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 801
                                                },
                                                __self: this
                                            },
                                            ' Politicians seek '
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 802
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 803
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 803
                                                    },
                                                    __self: this
                                                },
                                                ' #photography '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 804
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 804
                                                    },
                                                    __self: this
                                                },
                                                ' #view '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 805
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 805
                                                    },
                                                    __self: this
                                                },
                                                ' #architecture'
                                            ),
                                            ' '
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'news-comments', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 807
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 808
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 808
                                                },
                                                __self: this
                                            }),
                                            ' 27 '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 809
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 809
                                                },
                                                __self: this
                                            }),
                                            ' 343 '
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 812
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 813
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/news-3.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 813
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 814
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: 'news-detail.html', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 814
                                                },
                                                __self: this
                                            },
                                            ' Politicians seek '
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 815
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 816
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 816
                                                    },
                                                    __self: this
                                                },
                                                ' #photography '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 817
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 817
                                                    },
                                                    __self: this
                                                },
                                                ' #view '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 818
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 818
                                                    },
                                                    __self: this
                                                },
                                                ' #architecture'
                                            ),
                                            ' '
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'news-comments', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 820
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 821
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 821
                                                },
                                                __self: this
                                            }),
                                            ' 27 '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 822
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 822
                                                },
                                                __self: this
                                            }),
                                            ' 343 '
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'item', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 825
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 826
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/news-4.jpg', alt: 'images', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 826
                                            },
                                            __self: this
                                        }),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 827
                                            },
                                            __self: this
                                        },
                                        ' ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: 'news-detail.html', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 827
                                                },
                                                __self: this
                                            },
                                            ' Politicians seek '
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 828
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 829
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 829
                                                    },
                                                    __self: this
                                                },
                                                ' #photography '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 830
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 830
                                                    },
                                                    __self: this
                                                },
                                                ' #view '
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 831
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 831
                                                    },
                                                    __self: this
                                                },
                                                ' #architecture'
                                            ),
                                            ' '
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'news-comments', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 833
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 834
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-comment', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 834
                                                },
                                                __self: this
                                            }),
                                            ' 27 '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 835
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-eye', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 835
                                                },
                                                __self: this
                                            }),
                                            ' 343 '
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 839
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'news-fill-btn', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 840
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { href: 'news.html', className: 'fill-btn', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 841
                                            },
                                            __self: this
                                        },
                                        'View more article'
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'footer', className: 'footer pad-top-120 pad-bottom-120', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 848
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'footerBg', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 849
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 850
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 851
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 852
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'footer_logo', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 853
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'figure',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 854
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'images/footer_logo.png', alt: 'image', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 854
                                            },
                                            __self: this
                                        })
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 857
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'contact-form btm-brdr', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 858
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'form-Box', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 859
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Name', className: 'b_effect', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 860
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'focus-border', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 861
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 862
                                                },
                                                __self: this
                                            })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'form-Box', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 865
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Email', className: 'b_effect', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 866
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'focus-border', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 867
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 868
                                                },
                                                __self: this
                                            })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'form-Box', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 871
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { placeholder: 'Message', className: 'b_effect', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 872
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            { className: 'focus-border', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 873
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 874
                                                },
                                                __self: this
                                            })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'div',
                                        { className: 'form-Box', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 877
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Submit', className: 'fill-btn', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 878
                                            },
                                            __self: this
                                        })
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 882
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'contact-address btm-brdr', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 883
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        { className: 'fTitle', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 884
                                            },
                                            __self: this
                                        },
                                        ' Contact ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 884
                                                },
                                                __self: this
                                            },
                                            'Us'
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 885
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 886
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-phone', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 886
                                                },
                                                __self: this
                                            }),
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 886
                                                    },
                                                    __self: this
                                                },
                                                '1800 987 65 43'
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 887
                                                },
                                                __self: this
                                            },
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 887
                                                },
                                                __self: this
                                            }),
                                            ' ',
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'span',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 887
                                                    },
                                                    __self: this
                                                },
                                                '121 King St, Melbourne VIC 3000, Australia'
                                            ),
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 888
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '#', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 889
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-envelope-o', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 889
                                                    },
                                                    __self: this
                                                }),
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'span',
                                                    {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 889
                                                        },
                                                        __self: this
                                                    },
                                                    'info@gym.com'
                                                ),
                                                ' '
                                            )
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-4 col-md-4 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 894
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'subscribe btm-brdr', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 895
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        { className: 'fTitle', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 896
                                            },
                                            __self: this
                                        },
                                        ' Subscribe ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 896
                                                },
                                                __self: this
                                            },
                                            'Newsletter'
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'form',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 897
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Example@example.com', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 898
                                            },
                                            __self: this
                                        }),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'button',
                                            { type: 'button', className: 'fill-btn', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 899
                                                },
                                                __self: this
                                            },
                                            'Subscribe'
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'social-icons', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 902
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'h4',
                                        { className: 'fTitle', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 903
                                            },
                                            __self: this
                                        },
                                        ' Social ',
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'span',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 903
                                                },
                                                __self: this
                                            },
                                            'News'
                                        ),
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'ul',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 904
                                            },
                                            __self: this
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 905
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '%27.html#', target: '_blank', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 906
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 906
                                                    },
                                                    __self: this
                                                }),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 908
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '%27.html#', target: '_blank', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 909
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-twitter', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 909
                                                    },
                                                    __self: this
                                                }),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 911
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '%27.html#', target: '_blank', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 912
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-youtube-play', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 912
                                                    },
                                                    __self: this
                                                }),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 914
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '%27.html#', target: '_blank', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 915
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-instagram', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 915
                                                    },
                                                    __self: this
                                                }),
                                                ' '
                                            )
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'li',
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 917
                                                },
                                                __self: this
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                { href: '%27.html#', target: '_blank', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 918
                                                    },
                                                    __self: this
                                                },
                                                ' ',
                                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-google-plus', 'aria-hidden': 'true', __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 918
                                                    },
                                                    __self: this
                                                }),
                                                ' '
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'section',
                    { id: 'copyright', className: 'copyright', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 927
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container wow animated fadeInUp', 'data-wow-delay': '0.5s', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 928
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 929
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 930
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h6',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 931
                                        },
                                        __self: this
                                    },
                                    ' \xA9 2017 Fitness Point is powered by ',
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { href: 'https://store.multidots.com/', target: '_blank', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 931
                                            },
                                            __self: this
                                        },
                                        'DotStore.'
                                    ),
                                    ' '
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { href: 'javascript:void(0);', className: 'back-to-top', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 937
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-long-arrow-up', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 937
                        },
                        __self: this
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { id: 'style-switcher', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 940
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h4',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 941
                            },
                            __self: this
                        },
                        'Your Awesome Color',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            { href: '#', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 941
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-cog fa-spin', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 941
                                },
                                __self: this
                            })
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 942
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'ul',
                            { className: 'colors', id: 'color1', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 943
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 944
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style1', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 945
                                    },
                                    __self: this
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 947
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style2', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 948
                                    },
                                    __self: this
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 950
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style3', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 951
                                    },
                                    __self: this
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 953
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style4', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 954
                                    },
                                    __self: this
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 956
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style5', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 957
                                    },
                                    __self: this
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'li',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 959
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: '#', className: 'style6', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 960
                                    },
                                    __self: this
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Customer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
    return {
        isFetching: state.posts.isFetching,
        posts: state.posts.posts
    };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_8__Customer_scss___default.a)(Customer)));

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_posts__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Dashboard_scss__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Dashboard_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Dashboard_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\dashboard\\Dashboard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      alert1Visible: true,
      alert2Visible: true,
      alert3Visible: true,
      alert4Visible: true
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actions_posts__["h" /* fetchPosts */])());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__Dashboard_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ol',
          { className: 'breadcrumb', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'text-muted', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              },
              'YOU ARE HERE'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'active', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            },
            'Dashboard'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'mb-lg', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          },
          'Dashboard'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__components_Widget__["a" /* default */],
              { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'pull-right mt-n-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'search', placeholder: 'Search...', className: 'form-control input-sm', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    { className: 'mt-0', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'user', className: 'mr-xs opacity-70', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    }),
                    ' Users'
                  )
                ), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'table',
                { className: 'table mb-0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'thead',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 50
                        },
                        __self: this
                      },
                      'ID'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        },
                        __self: this
                      },
                      'Username'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 52
                        },
                        __self: this
                      },
                      'Email'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'th',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 53
                        },
                        __self: this
                      },
                      'Status'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 56
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 58
                        },
                        __self: this
                      },
                      '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59
                        },
                        __self: this
                      },
                      'Alice'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        },
                        __self: this
                      },
                      'alice@email.com'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'label label-success', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                          },
                          __self: this
                        },
                        'active'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 64
                        },
                        __self: this
                      },
                      '2'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 65
                        },
                        __self: this
                      },
                      'Bob'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        },
                        __self: this
                      },
                      'bob@email.com'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'label label-warning text-default', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          },
                          __self: this
                        },
                        'delayed'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70
                        },
                        __self: this
                      },
                      '3'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        },
                        __self: this
                      },
                      'Duck'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        },
                        __self: this
                      },
                      'duck@email.com'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'label label-success', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                          },
                          __self: this
                        },
                        'active'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        },
                        __self: this
                      },
                      '4'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        },
                        __self: this
                      },
                      'Shepherd'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 78
                        },
                        __self: this
                      },
                      'shepherd@email.com'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'label bg-dark', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          },
                          __self: this
                        },
                        'removed'
                      )
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            this.state.alert1Visible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
              { className: 'alert-sm', bsStyle: 'warning', onDismiss: function onDismiss() {
                  return _this2.setState({ alert1Visible: false });
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                },
                'Warning:'
              ),
              ' Best check yo self, you\'re not looking too good.'
            ),
            this.state.alert2Visible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
              { className: 'alert-sm', bsStyle: 'success', onDismiss: function onDismiss() {
                  return _this2.setState({ alert2Visible: false });
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                'Success:'
              ),
              ' You successfully read this important alert message.'
            ),
            this.state.alert3Visible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
              { className: 'alert-sm', bsStyle: 'info', onDismiss: function onDismiss() {
                  return _this2.setState({ alert3Visible: false });
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 97
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  },
                  __self: this
                },
                'Info:'
              ),
              ' This alert needs your attention, but it\'s not super important.'
            ),
            this.state.alert4Visible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
              { className: 'alert-sm clearfix', bsStyle: 'danger', onDismiss: function onDismiss() {
                  return _this2.setState({ alert4Visible: false });
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'fw-semi-bold', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  },
                  __self: this
                },
                'Danger:'
              ),
              ' Change this and that and try again.',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'pull-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                  { bsStyle: 'danger', bsSize: 'xsmall', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    },
                    __self: this
                  },
                  'Take this action'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: this
                  },
                  ' or '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                  { bsSize: 'xsmall', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    },
                    __self: this
                  },
                  'Cancel'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5__components_Widget__["a" /* default */],
              { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'pull-right mt-n-xs', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { className: 'td-underline fs-sm', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 118
                        },
                        __self: this
                      },
                      'Options'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h5',
                    { className: 'mt-0 mb-0', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      },
                      __self: this
                    },
                    'Recent posts ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Badge */],
                      { bsStyle: 'success', className: 'ml-xs', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 120
                        },
                        __self: this
                      },
                      '5'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    { className: 'fs-sm mb-0 text-muted', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      },
                      __self: this
                    },
                    'posts, that have been published recently'
                  )
                ), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'table',
                { className: 'table table-sm table-no-border mb-0', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'tbody',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    },
                    __self: this
                  },
                  this.props.posts && this.props.posts.map(function (post, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'tr',
                      { key: post.id, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                          },
                          __self: _this2
                        },
                        new Date(post.updatedAt).toLocaleString()
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'td',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 129
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                          { to: '/app/posts', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 129
                            },
                            __self: _this2
                          },
                          post.title
                        )
                      )
                    );
                  }),
                  this.props.posts && !this.props.posts.length && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 133
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { colSpan: '100', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 134
                        },
                        __self: this
                      },
                      'No posts yet'
                    )
                  ),
                  this.props.isFetching && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'tr',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 138
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'td',
                      { colSpan: '100', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 139
                        },
                        __self: this
                      },
                      'Loading...'
                    )
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["h" /* ListGroup */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                { to: '/app', className: 'list-group-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'phone', className: 'mr-xs opacity-70', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  },
                  __self: this
                }),
                ' Incoming calls ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Badge */],
                  { bsStyle: 'danger', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 148
                    },
                    __self: this
                  },
                  '3'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                { to: '/app', className: 'list-group-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'bell', className: 'mr-xs opacity-70', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                  },
                  __self: this
                }),
                ' Notifications ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Badge */],
                  { bsStyle: 'warning', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 149
                    },
                    __self: this
                  },
                  '6'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                { to: '/app', className: 'list-group-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'comment', className: 'mr-xs opacity-70', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  },
                  __self: this
                }),
                ' Messages ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["g" /* Badge */],
                  { bsStyle: 'success', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 150
                    },
                    __self: this
                  },
                  '18'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                { to: '/app', className: 'list-group-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'eye-open', className: 'mr-xs opacity-70', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: this
                }),
                ' Visits total'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["a" /* Link */],
                { to: '/app', className: 'list-group-item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'cloud', className: 'mr-xs opacity-70', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: this
                }),
                ' Inbox ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["e" /* Glyphicon */], { glyph: 'chevron-right', className: 'opacity-70 pull-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                  },
                  __self: this
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { className: 'mb', __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          },
          'Some standard react-bootstrap components'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
          { className: 'mb', __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["i" /* ButtonToolbar */],
              { className: 'mb', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                { bsSize: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                  },
                  __self: this
                },
                'Default'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                { bsSize: 'small', bsStyle: 'success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                  },
                  __self: this
                },
                'Success'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                { bsSize: 'small', bsStyle: 'info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                  },
                  __self: this
                },
                'Info'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                { bsSize: 'small', bsStyle: 'warning', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                  },
                  __self: this
                },
                'Warning'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                { bsSize: 'small', bsStyle: 'inverse', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                  },
                  __self: this
                },
                'Inverse'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["j" /* ButtonGroup */],
              { className: 'mb', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                  },
                  __self: this
                },
                '1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["f" /* Button */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                  },
                  __self: this
                },
                '2'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["k" /* DropdownButton */],
                { title: 'Dropdown', id: 'bg-nested-dropdown', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["l" /* MenuItem */],
                  { eventKey: '1', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 170
                    },
                    __self: this
                  },
                  'Dropdown link'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["l" /* MenuItem */],
                  { eventKey: '2', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    },
                    __self: this
                  },
                  'Dropdown link'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174
                },
                __self: this
              },
              'For more components please checkout ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://react-bootstrap.github.io/components.html',
                  target: '_blank', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                  },
                  __self: this
                },
                'react-bootstrap documentation'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
            { sm: 6, __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["m" /* ProgressBar */], { className: 'progress-sm', bsStyle: 'success', now: 40, __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["m" /* ProgressBar */], { className: 'progress-sm', bsStyle: 'info', now: 20, __source: {
                fileName: _jsxFileName,
                lineNumber: 179
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["m" /* ProgressBar */], { className: 'progress-sm', bsStyle: 'warning', now: 60, __source: {
                fileName: _jsxFileName,
                lineNumber: 180
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["m" /* ProgressBar */], { className: 'progress-sm', bsStyle: 'danger', now: 80, __source: {
                fileName: _jsxFileName,
                lineNumber: 181
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__Dashboard_scss___default.a)(Dashboard)));

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Login_scss__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Login_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Login_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_user__ = __webpack_require__(125);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\login\\Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










 // eslint-disable-line


var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      login: '',
      password: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'changeLogin',
    value: function changeLogin(event) {
      this.setState({ login: event.target.value });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'responseFacebook',
    value: function responseFacebook(response) {
      if (response.status != "not_authorized" && response.status != "unknown") {
        if (response) {
          // console.log("facebook", response);
          this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_user__["i" /* loginUserWithFacebook */])(response, this.state.type));
        }
      }
    }
  }, {
    key: 'doLogin',
    value: function doLogin(e) {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actions_user__["j" /* loginUser */])({ email: this.state.login, password: this.state.password }));
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var userType = this.props.userType;
      // const { from } = this.props.location.state || { from: { pathname: '/app/customer' } };   

      if (this.props.isAuthenticated && userType === 'ROLE_GYM') {
        // cant access login page while logged in
        var _from = { from: { pathname: '/app/gym' } },
            from = _from.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: from, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      }

      if (this.props.isAuthenticated && userType === 'ROLE_CUSTOMER') {
        // cant access login page while logged in
        var _from3 = { from: { pathname: '/app/customer' } },
            _from2 = _from3.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: _from2, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__Login_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Grid */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
              { xs: 10, xsOffset: 1, sm: 6, smOffset: 3, lg: 4, lgOffset: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  },
                  __self: this
                },
                'React Dashboard'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__components_Widget__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_8__Login_scss___default.a.widget, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'mt-0', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    },
                    __self: this
                  },
                  'Sign In'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'mt', onSubmit: this.doLogin.bind(this), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    },
                    __self: this
                  },
                  this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
                    { className: 'alert-sm', bsStyle: 'danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    },
                    this.props.errorMessage
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.login, onChange: this.changeLogin.bind(this), type: 'text', required: true, name: 'username', placeholder: 'Username', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 82
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.password, onChange: this.changePassword.bind(this), type: 'password', required: true, name: 'password', placeholder: 'Password', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'clearfix', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'btn-toolbar pull-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 88
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-success btn-sm', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                          },
                          __self: this
                        },
                        this.props.isFetching ? 'Loading...' : 'Login'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default.a, {
                  appId: '345501322630290',
                  autoLoad: false,
                  icon: 'fa-facebook',
                  fields: 'name,email,picture',
                  scope: 'public_profile,user_friends',
                  textButton: 'Or Sign in with Facebook',
                  disableMobileRedirect: true,
                  callback: this.responseFacebook.bind(this),
                  size: "small",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'clearfix', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'mt-sm pull-right fs-sm', href: '/register', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      },
                      __self: this
                    },
                    'Don\'t have a account Sign up?'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], { className: 'text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        })
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.userType,
    errorMessage: state.auth.errorMessage
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["e" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_8__Login_scss___default.a)(Login))));

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Widget__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Footer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Register_scss__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Register_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Register_scss__);
var _jsxFileName = 'C:\\MyProject\\React\\react-dashboard-master\\src\\pages\\register\\Register.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










// import s from './Login.scss'; // eslint-disable-line



var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      login: '',
      mobile: '',
      password: '',
      type: ''
    };
    return _this;
  }

  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // };

  _createClass(Register, [{
    key: 'changeLogin',
    value: function changeLogin(event) {
      this.setState({ login: event.target.value });
    }
  }, {
    key: 'changeMobile',
    value: function changeMobile(event) {
      this.setState({ mobile: event.target.value });
    }
  }, {
    key: 'changePassword',
    value: function changePassword(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'changeType',
    value: function changeType(event) {
      this.setState({ type: event.target.value });
    }
  }, {
    key: 'doRegister',
    value: function doRegister(e) {
      this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_user__["h" /* registerUser */])({ email: this.state.login, password: this.state.password, mobile: this.state.mobile }, this.state.type));
      e.preventDefault();
    }
  }, {
    key: 'responseFacebook',
    value: function responseFacebook(response) {
      if (response.status != "not_authorized" && response.status != "unknown") {
        if (response) {
          // console.log("facebook", response);
          this.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_user__["i" /* loginUserWithFacebook */])(response, this.state.type));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var userType = this.props.userType;

      var _ref = this.props.location.state || { from: { pathname: '/login' } },
          from = _ref.from;

      if (this.props.isRegistered) {
        // cant access login page while logged in
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: from, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }

      if (this.props.isAuthenticated && userType === 'ROLE_GYM') {
        // cant access login page while logged in
        var _from2 = { from: { pathname: '/app/gym' } },
            _from = _from2.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: _from, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        });
      }

      if (this.props.isAuthenticated && userType === 'ROLE_CUSTOMER') {
        // cant access login page while logged in
        var _from4 = { from: { pathname: '/app/customer' } },
            _from3 = _from4.from;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router__["c" /* Redirect */], { to: _from3, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Grid */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["b" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["c" /* Col */],
              { xs: 10, xsOffset: 1, sm: 6, smOffset: 3, lg: 4, lgOffset: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  },
                  __self: this
                },
                'React Dashboard'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6__components_Widget__["a" /* default */],
                { className: __WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a.widget, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { className: 'mt-0', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102
                    },
                    __self: this
                  },
                  'Sign Up'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'mt', onSubmit: this.doRegister.bind(this), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    },
                    __self: this
                  },
                  this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["d" /* Alert */],
                    { className: 'alert-sm', bsStyle: 'danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 106
                      },
                      __self: this
                    },
                    this.props.errorMessage
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.login, onChange: this.changeLogin.bind(this), type: 'text', required: true, name: 'username', placeholder: 'Email', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 112
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.mobile, onChange: this.changeMobile.bind(this), type: 'text', required: true, name: 'mobile', placeholder: 'Mobile No', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control no-border', value: this.state.password, onChange: this.changePassword.bind(this), type: 'password', required: true, name: 'password', placeholder: 'Password', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'form-group', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'type', value: 'gym', onChange: this.changeType.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 121
                      },
                      __self: this
                    }),
                    ' Gym',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'type', value: 'customer', onChange: this.changeType.bind(this), __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                      },
                      __self: this
                    }),
                    ' Customer'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'clearfix', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 124
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'btn-toolbar pull-right', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 125
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-success btn-sm', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 126
                          },
                          __self: this
                        },
                        this.props.isFetching ? 'Loading...' : 'Register'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_facebook_login___default.a, {
                  appId: '345501322630290',
                  autoLoad: false,
                  icon: 'fa-facebook',
                  fields: 'name,email,picture',
                  scope: 'public_profile,user_friends',
                  textButton: 'Or Sign up with Facebook',
                  disableMobileRedirect: true,
                  callback: this.responseFacebook.bind(this),
                  size: "small",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'clearfix', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 143
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'mt-sm pull-right fs-sm', href: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 144
                      },
                      __self: this
                    },
                    'Already have a account Sign in?'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Footer__["a" /* default */], { className: 'text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        })
      );
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isRegistered: state.auth.isRegistered,
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.userType,
    errorMessage: state.auth.errorMessage
  };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router__["e" /* withRouter */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps)(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_9__Register_scss___default.a)(Register))));

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user__ = __webpack_require__(125);



// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    isAuthenticated: false
  };
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["a" /* LOGIN_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["b" /* LOGIN_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        userType: action.userType
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["c" /* LOGIN_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
        userType: ''
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["d" /* REGISTER_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
        type: action.type
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["e" /* REGISTER_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        isRegistered: true,
        errorMessage: ''
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["f" /* REGISTER_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions_user__["g" /* LOGOUT_SUCCESS */]:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gym;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_gym__ = __webpack_require__(243);


function gym() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["a" /* CREATE_GYM_INITIAL */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: null
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["b" /* CREATE_GYM_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["c" /* CREATE_GYM_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'GYM updated successfully',
        gym: action.GYM
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["d" /* CREATE_GYM_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["e" /* FETCH_GYM_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["f" /* FETCH_GYM_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        gym: action.GYM
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["g" /* FETCH_GYM_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["h" /* UPLOAD_GYM_IMAGES_REQUEST */]:
      return Object.assign({}, state, {
        isUploading: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["i" /* UPLOAD_GYM_IMAGES_SUCCESS */]:
      return Object.assign({}, state, {
        isUploading: false,
        uploadMessage: action.GYM
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_gym__["j" /* UPLOAD_GYM_IMAGES_FAILURE */]:
      return Object.assign({}, state, {
        isUploading: false,
        uploadMessage: action.message
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gym__ = __webpack_require__(399);







/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* combineReducers */])({
  auth: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  navigation: __WEBPACK_IMPORTED_MODULE_3__navigation__["a" /* default */],
  posts: __WEBPACK_IMPORTED_MODULE_4__posts__["a" /* default */],
  gym: __WEBPACK_IMPORTED_MODULE_5__gym__["a" /* default */]
}));

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var initialState = {
  sidebarOpened: false,
  sidebarStatic: false
};

function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* TOGGLE_SIDEBAR */]:
      return _extends({}, state, {
        sidebarOpened: !state.sidebarOpened
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* OPEN_SIDEBAR */]:
      return _extends({}, state, {
        sidebarOpened: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* CLOSE_SIDEBAR */]:
      return _extends({}, state, {
        sidebarOpened: false
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = posts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_posts__ = __webpack_require__(160);


function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false
  };
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["a" /* CREATE_POST_INITIAL */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: null
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["b" /* CREATE_POST_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["c" /* CREATE_POST_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Post created successfully'
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["d" /* CREATE_POST_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Due to security reasons posts creation is closed in demo version. Please setup locally to test'
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["e" /* FETCH_POSTS_REQUEST */]:
      return Object.assign({}, state, {
        isFetching: true
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["f" /* FETCH_POSTS_SUCCESS */]:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_posts__["g" /* FETCH_POSTS_FAILURE */]:
      return Object.assign({}, state, {
        isFetching: false,
        message: 'Something wrong happened. Please come back later'
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(406);






function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* applyMiddleware */].apply(undefined, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(undefined, middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createGraphqlRequest(fetch) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetch('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createHelpers(_ref2) {
  var fetch = _ref2.fetch,
      history = _ref2.history;

  return {
    fetch: fetch,
    history: history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);


function createLogger() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(938));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(940));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(941));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(942));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(943));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._2bWwWJnR3vgnJqodLkqv8l {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 13px; }\n\n._2URMNY0wZAkF5N8QBiUx1o {\n  margin: 0 auto;\n  padding: 7px 30px; }\n\n._22t3zk4gQaPvl-we5uwIIK {\n  display: inline-block;\n  padding: 0 5px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Footer/Footer.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,gBAAgB,EAAE;;AAEpB;EACE,eAAe;EACf,kBAAkB,EAAE;;AAEtB;EACE,sBAAsB;EACtB,eAAe,EAAE","file":"Footer.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 13px; }\n\n.container {\n  margin: 0 auto;\n  padding: 7px 30px; }\n\n.spacer {\n  display: inline-block;\n  padding: 0 5px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "_2bWwWJnR3vgnJqodLkqv8l",
	"container": "_2URMNY0wZAkF5N8QBiUx1o",
	"spacer": "_22t3zk4gQaPvl-we5uwIIK"
};

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._1C7Re3tYpm2Bo83NVKcnCy {\n  font-size: 20px;\n  margin-left: -10px;\n  margin-top: -1px;\n  margin-bottom: -2px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Header/Header.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB,EAAE","file":"Header.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.menuButton {\n  font-size: 20px;\n  margin-left: -10px;\n  margin-top: -1px;\n  margin-bottom: -2px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"menuButton": "_1C7Re3tYpm2Bo83NVKcnCy"
};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._2stg9rh091v_AF7F70D3pX {\n  height: 100%; }\n\n._3zc8FoVSR8V8J9ADqZUC7X {\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  transition: left 0.3s ease-in-out, right 0.3s ease-in-out; }\n  @media (min-width: 768px) {\n    ._3zc8FoVSR8V8J9ADqZUC7X {\n      left: 200px;\n      right: 0; } }\n\n@media (max-width: 767px) {\n  ._2yRv1JRbrSmsuTtHfmnr1l {\n    left: 200px;\n    right: -200px; } }\n\n._1Knya0ilZiesXcu0SakYki {\n  min-height: 100%;\n  padding: 90px 30px 60px;\n  background-color: #e5e9ec; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Layout/Layout.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,aAAa,EAAE;;AAEjB;EACE,iBAAiB;EACjB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,0DAA0D,EAAE;EAC5D;IACE;MACE,YAAY;MACZ,SAAS,EAAE,EAAE;;AAEnB;EACE;IACE,YAAY;IACZ,cAAc,EAAE,EAAE;;AAEtB;EACE,iBAAiB;EACjB,wBAAwB;EACxB,0BAA0B,EAAE","file":"Layout.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  height: 100%; }\n\n.wrap {\n  min-height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  transition: left 0.3s ease-in-out, right 0.3s ease-in-out; }\n  @media (min-width: 768px) {\n    .wrap {\n      left: 200px;\n      right: 0; } }\n\n@media (max-width: 767px) {\n  .sidebarOpen {\n    left: 200px;\n    right: -200px; } }\n\n.content {\n  min-height: 100%;\n  padding: 90px 30px 60px;\n  background-color: #e5e9ec; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "_2stg9rh091v_AF7F70D3pX",
	"wrap": "_3zc8FoVSR8V8J9ADqZUC7X",
	"sidebarOpen": "_2yRv1JRbrSmsuTtHfmnr1l",
	"content": "_1Knya0ilZiesXcu0SakYki"
};

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._8SsMF9uRKtrFrukAMc0PV a {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n  ._8SsMF9uRKtrFrukAMc0PV a:hover, ._8SsMF9uRKtrFrukAMc0PV a:active, ._8SsMF9uRKtrFrukAMc0PV a:focus {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n._8SsMF9uRKtrFrukAMc0PV > a {\n  position: relative;\n  padding-left: 15px;\n  line-height: 44px; }\n  ._8SsMF9uRKtrFrukAMc0PV > a > i {\n    margin-right: 7px; }\n\n._1HrGxhjZe-vOIWe7xkoUGt {\n  float: right;\n  margin-top: 20px;\n  margin-right: 15px; }\n\n._3W_wlqV9Jfq5nHCuNAjFXB {\n  font-weight: bold; }\n\n.V5EMoGqY55mrgfo7o4NEi {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1); }\n  .V5EMoGqY55mrgfo7o4NEi div {\n    padding: 0; }\n  .V5EMoGqY55mrgfo7o4NEi ul {\n    padding-left: 0;\n    font-size: 14px; }\n    .V5EMoGqY55mrgfo7o4NEi ul li {\n      padding: 3px 0;\n      list-style: none; }\n    .V5EMoGqY55mrgfo7o4NEi ul a {\n      padding: 4px 20px 4px 36px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Sidebar/LinksGroup/LinksGroup.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,gBAAgB,EAAE;EAClB;IACE,2CAA2C,EAAE;;AAEjD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB,EAAE;EACpB;IACE,kBAAkB,EAAE;;AAExB;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB,EAAE;;AAEtB;EACE,aAAa;EACb,iBAAiB;EACjB,UAAU;EACV,iBAAiB;EACjB,+BAA+B,EAAE;EACjC;IACE,WAAW,EAAE;EACf;IACE,gBAAgB;IAChB,gBAAgB,EAAE;IAClB;MACE,eAAe;MACf,iBAAiB,EAAE;IACrB;MACE,2BAA2B,EAAE","file":"LinksGroup.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.headerLink a {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n  .headerLink a:hover, .headerLink a:active, .headerLink a:focus {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.headerLink > a {\n  position: relative;\n  padding-left: 15px;\n  line-height: 44px; }\n  .headerLink > a > i {\n    margin-right: 7px; }\n\n.caret {\n  float: right;\n  margin-top: 20px;\n  margin-right: 15px; }\n\n.headerLinkActive {\n  font-weight: bold; }\n\n.panel {\n  border: none;\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.1); }\n  .panel div {\n    padding: 0; }\n  .panel ul {\n    padding-left: 0;\n    font-size: 14px; }\n    .panel ul li {\n      padding: 3px 0;\n      list-style: none; }\n    .panel ul a {\n      padding: 4px 20px 4px 36px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"headerLink": "_8SsMF9uRKtrFrukAMc0PV",
	"caret": "_1HrGxhjZe-vOIWe7xkoUGt",
	"headerLinkActive": "_3W_wlqV9Jfq5nHCuNAjFXB",
	"panel": "V5EMoGqY55mrgfo7o4NEi"
};

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._1i9xEzQx1fULAnuEVfm1lk {\n  width: 200px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #50585a;\n  color: #fff; }\n\n._270qKtov97dYD95pNli6LG {\n  margin: 0 0 17px;\n  height: 50px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex; }\n  ._270qKtov97dYD95pNli6LG a {\n    text-decoration: none;\n    color: #fff; }\n\n._22yTZabAgYnFMsSg08J5So {\n  padding: 10px 0;\n  overflow-y: auto; }\n\n.pVYJHDHrjUALq6Us47rm1 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px;\n  background-color: #5a6365;\n  font-size: 13px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Sidebar/Sidebar.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,aAAa;EACb,gBAAgB;EAChB,QAAQ;EACR,OAAO;EACP,UAAU;EACV,0BAA0B;EAC1B,YAAY,EAAE;;AAEhB;EACE,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,wBAAwB;EACxB,cAAc,EAAE;EAChB;IACE,sBAAsB;IACtB,YAAY,EAAE;;AAElB;EACE,gBAAgB;EAChB,iBAAiB,EAAE;;AAErB;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,cAAc;EACd,0BAA0B;EAC1B,gBAAgB,EAAE","file":"Sidebar.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  width: 200px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #50585a;\n  color: #fff; }\n\n.logo {\n  margin: 0 0 17px;\n  height: 50px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  display: flex; }\n  .logo a {\n    text-decoration: none;\n    color: #fff; }\n\n.nav {\n  padding: 10px 0;\n  overflow-y: auto; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 10px;\n  background-color: #5a6365;\n  font-size: 13px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "_1i9xEzQx1fULAnuEVfm1lk",
	"logo": "_270qKtov97dYD95pNli6LG",
	"nav": "_22yTZabAgYnFMsSg08J5So",
	"footer": "pVYJHDHrjUALq6Us47rm1"
};

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.JybDCdoEEuM9MCWBd1uuf {\n  display: block;\n  position: relative;\n  margin-bottom: 30px;\n  padding: 15px 20px;\n  background: #fff;\n  border-radius: 3px; }\n\n._17pNb181LhH6WgWafwl4h3 {\n  margin-top: 0;\n  margin-bottom: 11px;\n  color: #444; }\n  ._17pNb181LhH6WgWafwl4h3:before, ._17pNb181LhH6WgWafwl4h3:after {\n    content: \" \";\n    display: table; }\n  ._17pNb181LhH6WgWafwl4h3:after {\n    clear: both; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/components/Widget/Widget.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,cAAc;EACd,oBAAoB;EACpB,YAAY,EAAE;EACd;IACE,aAAa;IACb,eAAe,EAAE;EACnB;IACE,YAAY,EAAE","file":"Widget.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.widget {\n  display: block;\n  position: relative;\n  margin-bottom: 30px;\n  padding: 15px 20px;\n  background: #fff;\n  border-radius: 3px; }\n\n.title {\n  margin-top: 0;\n  margin-bottom: 11px;\n  color: #444; }\n  .title:before, .title:after {\n    content: \" \";\n    display: table; }\n  .title:after {\n    clear: both; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"widget": "JybDCdoEEuM9MCWBd1uuf",
	"title": "_17pNb181LhH6WgWafwl4h3"
};

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/customer/Customer.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG","file":"Customer.scss","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/dashboard/Dashboard.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG","file":"Dashboard.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._3Jv0Lk-frZBCqR5Gpdffdw {\n  padding-top: 25vh; }\n\n._25lehz0rJP2wPZNzpiuZU6 {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 30px !important; }\n  ._25lehz0rJP2wPZNzpiuZU6 .form-control {\n    font-size: 14px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/login/Login.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,kBAAkB,EAAE;;AAEtB;EACE,iBAAiB;EACjB,eAAe;EACf,yBAAyB,EAAE;EAC3B;IACE,gBAAgB,EAAE","file":"Login.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  padding-top: 25vh; }\n\n.widget {\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 30px !important; }\n  .widget :global .form-control {\n    font-size: 14px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "_3Jv0Lk-frZBCqR5Gpdffdw",
	"widget": "_25lehz0rJP2wPZNzpiuZU6"
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n._1vzNMbmlEbL4vcXE8VrnAj {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n._3RHtB7GFZ_hyi8n9lmiZ83 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/register/Register.scss"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;;;;;;;GAOG;AACH;;;GAGG;AACH;;;;;;;GAOG;AACH;;8EAE8E;AAC9E;;8EAE8E;AAC9E;;8EAE8E;AAC9E,gCAAgC;AAChC,2BAA2B;AAC3B,6BAA6B;AAC7B,iCAAiC;AACjC;;GAEG;AACH;EACE,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB,EAAE","file":"Register.scss","sourcesContent":["@charset \"UTF-8\";\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * Customized version of bootstrap using variables from _variables.scss.\n * This file is loaded via separate loader thus allowing to use original bootstrap classes (e.g. .btn-default) through out the app.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/*\n * Typography\n * ======================================================================== */\n/*\n * Layout\n * ======================================================================== */\n/*\n * Media queries breakpoints\n * ======================================================================== */\n/* Extra small screen / phone */\n/* Small screen / tablet */\n/* Medium screen / desktop */\n/* Large screen / wide desktop */\n/**\n * Custom application mixins available through out the app\n */\n.root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "_1vzNMbmlEbL4vcXE8VrnAj",
	"container": "_3RHtB7GFZ_hyi8n9lmiZ83"
};

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports


// module
exports.push([module.i, "div.BookForm div.inline-error {\n  padding: 5px;\n  border-radius: 0 0 4px 4px;\n  z-index: -1;\n  top: -2px;\n  position: relative; }\n\ndiv.BookForm ul.selected-covers {\n  flex-wrap: wrap;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  margin-top: 10px; }\n\ndiv.BookForm ul.selected-covers li {\n  width: 150px;\n  overflow: hidden;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\ndiv.BookForm ul.selected-covers li div.photo {\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  background: #000;\n  display: flex;\n  border-radius: 4px;\n  border: 2px solid #333;\n  position: relative; }\n\ndiv.BookForm ul.selected-covers li div.photo div.remove {\n  color: #fff;\n  position: absolute;\n  top: 10px;\n  background: #000;\n  border: 2px solid #fff;\n  border-radius: 20px;\n  padding: 2.5;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 0 0 5px #000;\n  right: 10px; }\n\ndiv.BookForm ul.selected-covers li div.file-name {\n  color: #999;\n  text-align: center;\n  margin-top: 10px; }\n", "", {"version":3,"sources":["C:/MyProject/React/react-dashboard-master/src/pages/gym/gymDetails/Index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,2BAA2B;EAC3B,YAAY;EACZ,UAAU;EACV,mBAAmB,EAAE;;AAEvB;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,cAAc;EACd,iBAAiB,EAAE;;AAErB;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,uBAAuB;EACvB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY,EAAE;;AAEhB;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB,EAAE","file":"Index.css","sourcesContent":["div.BookForm div.inline-error {\n  padding: 5px;\n  border-radius: 0 0 4px 4px;\n  z-index: -1;\n  top: -2px;\n  position: relative; }\n\ndiv.BookForm ul.selected-covers {\n  flex-wrap: wrap;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  margin-top: 10px; }\n\ndiv.BookForm ul.selected-covers li {\n  width: 150px;\n  overflow: hidden;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\ndiv.BookForm ul.selected-covers li div.photo {\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  background: #000;\n  display: flex;\n  border-radius: 4px;\n  border: 2px solid #333;\n  position: relative; }\n\ndiv.BookForm ul.selected-covers li div.photo div.remove {\n  color: #fff;\n  position: absolute;\n  top: 10px;\n  background: #000;\n  border: 2px solid #fff;\n  border-radius: 20px;\n  padding: 2.5;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 0 0 5px #000;\n  right: 10px; }\n\ndiv.BookForm ul.selected-covers li div.file-name {\n  color: #999;\n  text-align: center;\n  margin-top: 10px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"BookForm": "BookForm",
	"inline-error": "inline-error",
	"selected-covers": "selected-covers",
	"photo": "photo",
	"remove": "remove",
	"file-name": "file-name"
};

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(true);
// imports
exports.i(__webpack_require__(644), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nunito:300,400,600,800);", ""]);

// module

// exports
exports.locals = {
	"navbar": "navbar",
	"btn": "btn",
	"caret": "caret",
	"dropup": "dropup",
	"label": "label",
	"table": "table",
	"table-bordered": "table-bordered",
	"glyphicon": "glyphicon",
	"glyphicon-asterisk": "glyphicon-asterisk",
	"glyphicon-plus": "glyphicon-plus",
	"glyphicon-euro": "glyphicon-euro",
	"glyphicon-eur": "glyphicon-eur",
	"glyphicon-minus": "glyphicon-minus",
	"glyphicon-cloud": "glyphicon-cloud",
	"glyphicon-envelope": "glyphicon-envelope",
	"glyphicon-pencil": "glyphicon-pencil",
	"glyphicon-glass": "glyphicon-glass",
	"glyphicon-music": "glyphicon-music",
	"glyphicon-search": "glyphicon-search",
	"glyphicon-heart": "glyphicon-heart",
	"glyphicon-star": "glyphicon-star",
	"glyphicon-star-empty": "glyphicon-star-empty",
	"glyphicon-user": "glyphicon-user",
	"glyphicon-film": "glyphicon-film",
	"glyphicon-th-large": "glyphicon-th-large",
	"glyphicon-th": "glyphicon-th",
	"glyphicon-th-list": "glyphicon-th-list",
	"glyphicon-ok": "glyphicon-ok",
	"glyphicon-remove": "glyphicon-remove",
	"glyphicon-zoom-in": "glyphicon-zoom-in",
	"glyphicon-zoom-out": "glyphicon-zoom-out",
	"glyphicon-off": "glyphicon-off",
	"glyphicon-signal": "glyphicon-signal",
	"glyphicon-cog": "glyphicon-cog",
	"glyphicon-trash": "glyphicon-trash",
	"glyphicon-home": "glyphicon-home",
	"glyphicon-file": "glyphicon-file",
	"glyphicon-time": "glyphicon-time",
	"glyphicon-road": "glyphicon-road",
	"glyphicon-download-alt": "glyphicon-download-alt",
	"glyphicon-download": "glyphicon-download",
	"glyphicon-upload": "glyphicon-upload",
	"glyphicon-inbox": "glyphicon-inbox",
	"glyphicon-play-circle": "glyphicon-play-circle",
	"glyphicon-repeat": "glyphicon-repeat",
	"glyphicon-refresh": "glyphicon-refresh",
	"glyphicon-list-alt": "glyphicon-list-alt",
	"glyphicon-lock": "glyphicon-lock",
	"glyphicon-flag": "glyphicon-flag",
	"glyphicon-headphones": "glyphicon-headphones",
	"glyphicon-volume-off": "glyphicon-volume-off",
	"glyphicon-volume-down": "glyphicon-volume-down",
	"glyphicon-volume-up": "glyphicon-volume-up",
	"glyphicon-qrcode": "glyphicon-qrcode",
	"glyphicon-barcode": "glyphicon-barcode",
	"glyphicon-tag": "glyphicon-tag",
	"glyphicon-tags": "glyphicon-tags",
	"glyphicon-book": "glyphicon-book",
	"glyphicon-bookmark": "glyphicon-bookmark",
	"glyphicon-print": "glyphicon-print",
	"glyphicon-camera": "glyphicon-camera",
	"glyphicon-font": "glyphicon-font",
	"glyphicon-bold": "glyphicon-bold",
	"glyphicon-italic": "glyphicon-italic",
	"glyphicon-text-height": "glyphicon-text-height",
	"glyphicon-text-width": "glyphicon-text-width",
	"glyphicon-align-left": "glyphicon-align-left",
	"glyphicon-align-center": "glyphicon-align-center",
	"glyphicon-align-right": "glyphicon-align-right",
	"glyphicon-align-justify": "glyphicon-align-justify",
	"glyphicon-list": "glyphicon-list",
	"glyphicon-indent-left": "glyphicon-indent-left",
	"glyphicon-indent-right": "glyphicon-indent-right",
	"glyphicon-facetime-video": "glyphicon-facetime-video",
	"glyphicon-picture": "glyphicon-picture",
	"glyphicon-map-marker": "glyphicon-map-marker",
	"glyphicon-adjust": "glyphicon-adjust",
	"glyphicon-tint": "glyphicon-tint",
	"glyphicon-edit": "glyphicon-edit",
	"glyphicon-share": "glyphicon-share",
	"glyphicon-check": "glyphicon-check",
	"glyphicon-move": "glyphicon-move",
	"glyphicon-step-backward": "glyphicon-step-backward",
	"glyphicon-fast-backward": "glyphicon-fast-backward",
	"glyphicon-backward": "glyphicon-backward",
	"glyphicon-play": "glyphicon-play",
	"glyphicon-pause": "glyphicon-pause",
	"glyphicon-stop": "glyphicon-stop",
	"glyphicon-forward": "glyphicon-forward",
	"glyphicon-fast-forward": "glyphicon-fast-forward",
	"glyphicon-step-forward": "glyphicon-step-forward",
	"glyphicon-eject": "glyphicon-eject",
	"glyphicon-chevron-left": "glyphicon-chevron-left",
	"glyphicon-chevron-right": "glyphicon-chevron-right",
	"glyphicon-plus-sign": "glyphicon-plus-sign",
	"glyphicon-minus-sign": "glyphicon-minus-sign",
	"glyphicon-remove-sign": "glyphicon-remove-sign",
	"glyphicon-ok-sign": "glyphicon-ok-sign",
	"glyphicon-question-sign": "glyphicon-question-sign",
	"glyphicon-info-sign": "glyphicon-info-sign",
	"glyphicon-screenshot": "glyphicon-screenshot",
	"glyphicon-remove-circle": "glyphicon-remove-circle",
	"glyphicon-ok-circle": "glyphicon-ok-circle",
	"glyphicon-ban-circle": "glyphicon-ban-circle",
	"glyphicon-arrow-left": "glyphicon-arrow-left",
	"glyphicon-arrow-right": "glyphicon-arrow-right",
	"glyphicon-arrow-up": "glyphicon-arrow-up",
	"glyphicon-arrow-down": "glyphicon-arrow-down",
	"glyphicon-share-alt": "glyphicon-share-alt",
	"glyphicon-resize-full": "glyphicon-resize-full",
	"glyphicon-resize-small": "glyphicon-resize-small",
	"glyphicon-exclamation-sign": "glyphicon-exclamation-sign",
	"glyphicon-gift": "glyphicon-gift",
	"glyphicon-leaf": "glyphicon-leaf",
	"glyphicon-fire": "glyphicon-fire",
	"glyphicon-eye-open": "glyphicon-eye-open",
	"glyphicon-eye-close": "glyphicon-eye-close",
	"glyphicon-warning-sign": "glyphicon-warning-sign",
	"glyphicon-plane": "glyphicon-plane",
	"glyphicon-calendar": "glyphicon-calendar",
	"glyphicon-random": "glyphicon-random",
	"glyphicon-comment": "glyphicon-comment",
	"glyphicon-magnet": "glyphicon-magnet",
	"glyphicon-chevron-up": "glyphicon-chevron-up",
	"glyphicon-chevron-down": "glyphicon-chevron-down",
	"glyphicon-retweet": "glyphicon-retweet",
	"glyphicon-shopping-cart": "glyphicon-shopping-cart",
	"glyphicon-folder-close": "glyphicon-folder-close",
	"glyphicon-folder-open": "glyphicon-folder-open",
	"glyphicon-resize-vertical": "glyphicon-resize-vertical",
	"glyphicon-resize-horizontal": "glyphicon-resize-horizontal",
	"glyphicon-hdd": "glyphicon-hdd",
	"glyphicon-bullhorn": "glyphicon-bullhorn",
	"glyphicon-bell": "glyphicon-bell",
	"glyphicon-certificate": "glyphicon-certificate",
	"glyphicon-thumbs-up": "glyphicon-thumbs-up",
	"glyphicon-thumbs-down": "glyphicon-thumbs-down",
	"glyphicon-hand-right": "glyphicon-hand-right",
	"glyphicon-hand-left": "glyphicon-hand-left",
	"glyphicon-hand-up": "glyphicon-hand-up",
	"glyphicon-hand-down": "glyphicon-hand-down",
	"glyphicon-circle-arrow-right": "glyphicon-circle-arrow-right",
	"glyphicon-circle-arrow-left": "glyphicon-circle-arrow-left",
	"glyphicon-circle-arrow-up": "glyphicon-circle-arrow-up",
	"glyphicon-circle-arrow-down": "glyphicon-circle-arrow-down",
	"glyphicon-globe": "glyphicon-globe",
	"glyphicon-wrench": "glyphicon-wrench",
	"glyphicon-tasks": "glyphicon-tasks",
	"glyphicon-filter": "glyphicon-filter",
	"glyphicon-briefcase": "glyphicon-briefcase",
	"glyphicon-fullscreen": "glyphicon-fullscreen",
	"glyphicon-dashboard": "glyphicon-dashboard",
	"glyphicon-paperclip": "glyphicon-paperclip",
	"glyphicon-heart-empty": "glyphicon-heart-empty",
	"glyphicon-link": "glyphicon-link",
	"glyphicon-phone": "glyphicon-phone",
	"glyphicon-pushpin": "glyphicon-pushpin",
	"glyphicon-usd": "glyphicon-usd",
	"glyphicon-gbp": "glyphicon-gbp",
	"glyphicon-sort": "glyphicon-sort",
	"glyphicon-sort-by-alphabet": "glyphicon-sort-by-alphabet",
	"glyphicon-sort-by-alphabet-alt": "glyphicon-sort-by-alphabet-alt",
	"glyphicon-sort-by-order": "glyphicon-sort-by-order",
	"glyphicon-sort-by-order-alt": "glyphicon-sort-by-order-alt",
	"glyphicon-sort-by-attributes": "glyphicon-sort-by-attributes",
	"glyphicon-sort-by-attributes-alt": "glyphicon-sort-by-attributes-alt",
	"glyphicon-unchecked": "glyphicon-unchecked",
	"glyphicon-expand": "glyphicon-expand",
	"glyphicon-collapse-down": "glyphicon-collapse-down",
	"glyphicon-collapse-up": "glyphicon-collapse-up",
	"glyphicon-log-in": "glyphicon-log-in",
	"glyphicon-flash": "glyphicon-flash",
	"glyphicon-log-out": "glyphicon-log-out",
	"glyphicon-new-window": "glyphicon-new-window",
	"glyphicon-record": "glyphicon-record",
	"glyphicon-save": "glyphicon-save",
	"glyphicon-open": "glyphicon-open",
	"glyphicon-saved": "glyphicon-saved",
	"glyphicon-import": "glyphicon-import",
	"glyphicon-export": "glyphicon-export",
	"glyphicon-send": "glyphicon-send",
	"glyphicon-floppy-disk": "glyphicon-floppy-disk",
	"glyphicon-floppy-saved": "glyphicon-floppy-saved",
	"glyphicon-floppy-remove": "glyphicon-floppy-remove",
	"glyphicon-floppy-save": "glyphicon-floppy-save",
	"glyphicon-floppy-open": "glyphicon-floppy-open",
	"glyphicon-credit-card": "glyphicon-credit-card",
	"glyphicon-transfer": "glyphicon-transfer",
	"glyphicon-cutlery": "glyphicon-cutlery",
	"glyphicon-header": "glyphicon-header",
	"glyphicon-compressed": "glyphicon-compressed",
	"glyphicon-earphone": "glyphicon-earphone",
	"glyphicon-phone-alt": "glyphicon-phone-alt",
	"glyphicon-tower": "glyphicon-tower",
	"glyphicon-stats": "glyphicon-stats",
	"glyphicon-sd-video": "glyphicon-sd-video",
	"glyphicon-hd-video": "glyphicon-hd-video",
	"glyphicon-subtitles": "glyphicon-subtitles",
	"glyphicon-sound-stereo": "glyphicon-sound-stereo",
	"glyphicon-sound-dolby": "glyphicon-sound-dolby",
	"glyphicon-sound-5-1": "glyphicon-sound-5-1",
	"glyphicon-sound-6-1": "glyphicon-sound-6-1",
	"glyphicon-sound-7-1": "glyphicon-sound-7-1",
	"glyphicon-copyright-mark": "glyphicon-copyright-mark",
	"glyphicon-registration-mark": "glyphicon-registration-mark",
	"glyphicon-cloud-download": "glyphicon-cloud-download",
	"glyphicon-cloud-upload": "glyphicon-cloud-upload",
	"glyphicon-tree-conifer": "glyphicon-tree-conifer",
	"glyphicon-tree-deciduous": "glyphicon-tree-deciduous",
	"glyphicon-cd": "glyphicon-cd",
	"glyphicon-save-file": "glyphicon-save-file",
	"glyphicon-open-file": "glyphicon-open-file",
	"glyphicon-level-up": "glyphicon-level-up",
	"glyphicon-copy": "glyphicon-copy",
	"glyphicon-paste": "glyphicon-paste",
	"glyphicon-alert": "glyphicon-alert",
	"glyphicon-equalizer": "glyphicon-equalizer",
	"glyphicon-king": "glyphicon-king",
	"glyphicon-queen": "glyphicon-queen",
	"glyphicon-pawn": "glyphicon-pawn",
	"glyphicon-bishop": "glyphicon-bishop",
	"glyphicon-knight": "glyphicon-knight",
	"glyphicon-baby-formula": "glyphicon-baby-formula",
	"glyphicon-tent": "glyphicon-tent",
	"glyphicon-blackboard": "glyphicon-blackboard",
	"glyphicon-bed": "glyphicon-bed",
	"glyphicon-apple": "glyphicon-apple",
	"glyphicon-erase": "glyphicon-erase",
	"glyphicon-hourglass": "glyphicon-hourglass",
	"glyphicon-lamp": "glyphicon-lamp",
	"glyphicon-duplicate": "glyphicon-duplicate",
	"glyphicon-piggy-bank": "glyphicon-piggy-bank",
	"glyphicon-scissors": "glyphicon-scissors",
	"glyphicon-bitcoin": "glyphicon-bitcoin",
	"glyphicon-btc": "glyphicon-btc",
	"glyphicon-xbt": "glyphicon-xbt",
	"glyphicon-yen": "glyphicon-yen",
	"glyphicon-jpy": "glyphicon-jpy",
	"glyphicon-ruble": "glyphicon-ruble",
	"glyphicon-rub": "glyphicon-rub",
	"glyphicon-scale": "glyphicon-scale",
	"glyphicon-ice-lolly": "glyphicon-ice-lolly",
	"glyphicon-ice-lolly-tasted": "glyphicon-ice-lolly-tasted",
	"glyphicon-education": "glyphicon-education",
	"glyphicon-option-horizontal": "glyphicon-option-horizontal",
	"glyphicon-option-vertical": "glyphicon-option-vertical",
	"glyphicon-menu-hamburger": "glyphicon-menu-hamburger",
	"glyphicon-modal-window": "glyphicon-modal-window",
	"glyphicon-oil": "glyphicon-oil",
	"glyphicon-grain": "glyphicon-grain",
	"glyphicon-sunglasses": "glyphicon-sunglasses",
	"glyphicon-text-size": "glyphicon-text-size",
	"glyphicon-text-color": "glyphicon-text-color",
	"glyphicon-text-background": "glyphicon-text-background",
	"glyphicon-object-align-top": "glyphicon-object-align-top",
	"glyphicon-object-align-bottom": "glyphicon-object-align-bottom",
	"glyphicon-object-align-horizontal": "glyphicon-object-align-horizontal",
	"glyphicon-object-align-left": "glyphicon-object-align-left",
	"glyphicon-object-align-vertical": "glyphicon-object-align-vertical",
	"glyphicon-object-align-right": "glyphicon-object-align-right",
	"glyphicon-triangle-right": "glyphicon-triangle-right",
	"glyphicon-triangle-left": "glyphicon-triangle-left",
	"glyphicon-triangle-bottom": "glyphicon-triangle-bottom",
	"glyphicon-triangle-top": "glyphicon-triangle-top",
	"glyphicon-console": "glyphicon-console",
	"glyphicon-superscript": "glyphicon-superscript",
	"glyphicon-subscript": "glyphicon-subscript",
	"glyphicon-menu-left": "glyphicon-menu-left",
	"glyphicon-menu-right": "glyphicon-menu-right",
	"glyphicon-menu-down": "glyphicon-menu-down",
	"glyphicon-menu-up": "glyphicon-menu-up",
	"img-responsive": "img-responsive",
	"img-rounded": "img-rounded",
	"img-thumbnail": "img-thumbnail",
	"img-circle": "img-circle",
	"sr-only": "sr-only",
	"sr-only-focusable": "sr-only-focusable",
	"h1": "h1",
	"h2": "h2",
	"h3": "h3",
	"h4": "h4",
	"h5": "h5",
	"h6": "h6",
	"small": "small",
	"lead": "lead",
	"mark": "mark",
	"text-left": "text-left",
	"text-right": "text-right",
	"text-center": "text-center",
	"text-justify": "text-justify",
	"text-nowrap": "text-nowrap",
	"text-lowercase": "text-lowercase",
	"text-uppercase": "text-uppercase",
	"initialism": "initialism",
	"text-capitalize": "text-capitalize",
	"text-muted": "text-muted",
	"text-primary": "text-primary",
	"text-success": "text-success",
	"text-info": "text-info",
	"text-warning": "text-warning",
	"text-danger": "text-danger",
	"bg-primary": "bg-primary",
	"bg-success": "bg-success",
	"bg-info": "bg-info",
	"bg-warning": "bg-warning",
	"bg-danger": "bg-danger",
	"page-header": "page-header",
	"list-unstyled": "list-unstyled",
	"list-inline": "list-inline",
	"dl-horizontal": "dl-horizontal",
	"blockquote-reverse": "blockquote-reverse",
	"pull-right": "pull-right",
	"pre-scrollable": "pre-scrollable",
	"container": "container",
	"container-fluid": "container-fluid",
	"row": "row",
	"col-xs-1": "col-xs-1",
	"col-sm-1": "col-sm-1",
	"col-md-1": "col-md-1",
	"col-lg-1": "col-lg-1",
	"col-xs-2": "col-xs-2",
	"col-sm-2": "col-sm-2",
	"col-md-2": "col-md-2",
	"col-lg-2": "col-lg-2",
	"col-xs-3": "col-xs-3",
	"col-sm-3": "col-sm-3",
	"col-md-3": "col-md-3",
	"col-lg-3": "col-lg-3",
	"col-xs-4": "col-xs-4",
	"col-sm-4": "col-sm-4",
	"col-md-4": "col-md-4",
	"col-lg-4": "col-lg-4",
	"col-xs-5": "col-xs-5",
	"col-sm-5": "col-sm-5",
	"col-md-5": "col-md-5",
	"col-lg-5": "col-lg-5",
	"col-xs-6": "col-xs-6",
	"col-sm-6": "col-sm-6",
	"col-md-6": "col-md-6",
	"col-lg-6": "col-lg-6",
	"col-xs-7": "col-xs-7",
	"col-sm-7": "col-sm-7",
	"col-md-7": "col-md-7",
	"col-lg-7": "col-lg-7",
	"col-xs-8": "col-xs-8",
	"col-sm-8": "col-sm-8",
	"col-md-8": "col-md-8",
	"col-lg-8": "col-lg-8",
	"col-xs-9": "col-xs-9",
	"col-sm-9": "col-sm-9",
	"col-md-9": "col-md-9",
	"col-lg-9": "col-lg-9",
	"col-xs-10": "col-xs-10",
	"col-sm-10": "col-sm-10",
	"col-md-10": "col-md-10",
	"col-lg-10": "col-lg-10",
	"col-xs-11": "col-xs-11",
	"col-sm-11": "col-sm-11",
	"col-md-11": "col-md-11",
	"col-lg-11": "col-lg-11",
	"col-xs-12": "col-xs-12",
	"col-sm-12": "col-sm-12",
	"col-md-12": "col-md-12",
	"col-lg-12": "col-lg-12",
	"col-xs-pull-0": "col-xs-pull-0",
	"col-xs-pull-1": "col-xs-pull-1",
	"col-xs-pull-2": "col-xs-pull-2",
	"col-xs-pull-3": "col-xs-pull-3",
	"col-xs-pull-4": "col-xs-pull-4",
	"col-xs-pull-5": "col-xs-pull-5",
	"col-xs-pull-6": "col-xs-pull-6",
	"col-xs-pull-7": "col-xs-pull-7",
	"col-xs-pull-8": "col-xs-pull-8",
	"col-xs-pull-9": "col-xs-pull-9",
	"col-xs-pull-10": "col-xs-pull-10",
	"col-xs-pull-11": "col-xs-pull-11",
	"col-xs-pull-12": "col-xs-pull-12",
	"col-xs-push-0": "col-xs-push-0",
	"col-xs-push-1": "col-xs-push-1",
	"col-xs-push-2": "col-xs-push-2",
	"col-xs-push-3": "col-xs-push-3",
	"col-xs-push-4": "col-xs-push-4",
	"col-xs-push-5": "col-xs-push-5",
	"col-xs-push-6": "col-xs-push-6",
	"col-xs-push-7": "col-xs-push-7",
	"col-xs-push-8": "col-xs-push-8",
	"col-xs-push-9": "col-xs-push-9",
	"col-xs-push-10": "col-xs-push-10",
	"col-xs-push-11": "col-xs-push-11",
	"col-xs-push-12": "col-xs-push-12",
	"col-xs-offset-0": "col-xs-offset-0",
	"col-xs-offset-1": "col-xs-offset-1",
	"col-xs-offset-2": "col-xs-offset-2",
	"col-xs-offset-3": "col-xs-offset-3",
	"col-xs-offset-4": "col-xs-offset-4",
	"col-xs-offset-5": "col-xs-offset-5",
	"col-xs-offset-6": "col-xs-offset-6",
	"col-xs-offset-7": "col-xs-offset-7",
	"col-xs-offset-8": "col-xs-offset-8",
	"col-xs-offset-9": "col-xs-offset-9",
	"col-xs-offset-10": "col-xs-offset-10",
	"col-xs-offset-11": "col-xs-offset-11",
	"col-xs-offset-12": "col-xs-offset-12",
	"col-sm-pull-0": "col-sm-pull-0",
	"col-sm-pull-1": "col-sm-pull-1",
	"col-sm-pull-2": "col-sm-pull-2",
	"col-sm-pull-3": "col-sm-pull-3",
	"col-sm-pull-4": "col-sm-pull-4",
	"col-sm-pull-5": "col-sm-pull-5",
	"col-sm-pull-6": "col-sm-pull-6",
	"col-sm-pull-7": "col-sm-pull-7",
	"col-sm-pull-8": "col-sm-pull-8",
	"col-sm-pull-9": "col-sm-pull-9",
	"col-sm-pull-10": "col-sm-pull-10",
	"col-sm-pull-11": "col-sm-pull-11",
	"col-sm-pull-12": "col-sm-pull-12",
	"col-sm-push-0": "col-sm-push-0",
	"col-sm-push-1": "col-sm-push-1",
	"col-sm-push-2": "col-sm-push-2",
	"col-sm-push-3": "col-sm-push-3",
	"col-sm-push-4": "col-sm-push-4",
	"col-sm-push-5": "col-sm-push-5",
	"col-sm-push-6": "col-sm-push-6",
	"col-sm-push-7": "col-sm-push-7",
	"col-sm-push-8": "col-sm-push-8",
	"col-sm-push-9": "col-sm-push-9",
	"col-sm-push-10": "col-sm-push-10",
	"col-sm-push-11": "col-sm-push-11",
	"col-sm-push-12": "col-sm-push-12",
	"col-sm-offset-0": "col-sm-offset-0",
	"col-sm-offset-1": "col-sm-offset-1",
	"col-sm-offset-2": "col-sm-offset-2",
	"col-sm-offset-3": "col-sm-offset-3",
	"col-sm-offset-4": "col-sm-offset-4",
	"col-sm-offset-5": "col-sm-offset-5",
	"col-sm-offset-6": "col-sm-offset-6",
	"col-sm-offset-7": "col-sm-offset-7",
	"col-sm-offset-8": "col-sm-offset-8",
	"col-sm-offset-9": "col-sm-offset-9",
	"col-sm-offset-10": "col-sm-offset-10",
	"col-sm-offset-11": "col-sm-offset-11",
	"col-sm-offset-12": "col-sm-offset-12",
	"col-md-pull-0": "col-md-pull-0",
	"col-md-pull-1": "col-md-pull-1",
	"col-md-pull-2": "col-md-pull-2",
	"col-md-pull-3": "col-md-pull-3",
	"col-md-pull-4": "col-md-pull-4",
	"col-md-pull-5": "col-md-pull-5",
	"col-md-pull-6": "col-md-pull-6",
	"col-md-pull-7": "col-md-pull-7",
	"col-md-pull-8": "col-md-pull-8",
	"col-md-pull-9": "col-md-pull-9",
	"col-md-pull-10": "col-md-pull-10",
	"col-md-pull-11": "col-md-pull-11",
	"col-md-pull-12": "col-md-pull-12",
	"col-md-push-0": "col-md-push-0",
	"col-md-push-1": "col-md-push-1",
	"col-md-push-2": "col-md-push-2",
	"col-md-push-3": "col-md-push-3",
	"col-md-push-4": "col-md-push-4",
	"col-md-push-5": "col-md-push-5",
	"col-md-push-6": "col-md-push-6",
	"col-md-push-7": "col-md-push-7",
	"col-md-push-8": "col-md-push-8",
	"col-md-push-9": "col-md-push-9",
	"col-md-push-10": "col-md-push-10",
	"col-md-push-11": "col-md-push-11",
	"col-md-push-12": "col-md-push-12",
	"col-md-offset-0": "col-md-offset-0",
	"col-md-offset-1": "col-md-offset-1",
	"col-md-offset-2": "col-md-offset-2",
	"col-md-offset-3": "col-md-offset-3",
	"col-md-offset-4": "col-md-offset-4",
	"col-md-offset-5": "col-md-offset-5",
	"col-md-offset-6": "col-md-offset-6",
	"col-md-offset-7": "col-md-offset-7",
	"col-md-offset-8": "col-md-offset-8",
	"col-md-offset-9": "col-md-offset-9",
	"col-md-offset-10": "col-md-offset-10",
	"col-md-offset-11": "col-md-offset-11",
	"col-md-offset-12": "col-md-offset-12",
	"col-lg-pull-0": "col-lg-pull-0",
	"col-lg-pull-1": "col-lg-pull-1",
	"col-lg-pull-2": "col-lg-pull-2",
	"col-lg-pull-3": "col-lg-pull-3",
	"col-lg-pull-4": "col-lg-pull-4",
	"col-lg-pull-5": "col-lg-pull-5",
	"col-lg-pull-6": "col-lg-pull-6",
	"col-lg-pull-7": "col-lg-pull-7",
	"col-lg-pull-8": "col-lg-pull-8",
	"col-lg-pull-9": "col-lg-pull-9",
	"col-lg-pull-10": "col-lg-pull-10",
	"col-lg-pull-11": "col-lg-pull-11",
	"col-lg-pull-12": "col-lg-pull-12",
	"col-lg-push-0": "col-lg-push-0",
	"col-lg-push-1": "col-lg-push-1",
	"col-lg-push-2": "col-lg-push-2",
	"col-lg-push-3": "col-lg-push-3",
	"col-lg-push-4": "col-lg-push-4",
	"col-lg-push-5": "col-lg-push-5",
	"col-lg-push-6": "col-lg-push-6",
	"col-lg-push-7": "col-lg-push-7",
	"col-lg-push-8": "col-lg-push-8",
	"col-lg-push-9": "col-lg-push-9",
	"col-lg-push-10": "col-lg-push-10",
	"col-lg-push-11": "col-lg-push-11",
	"col-lg-push-12": "col-lg-push-12",
	"col-lg-offset-0": "col-lg-offset-0",
	"col-lg-offset-1": "col-lg-offset-1",
	"col-lg-offset-2": "col-lg-offset-2",
	"col-lg-offset-3": "col-lg-offset-3",
	"col-lg-offset-4": "col-lg-offset-4",
	"col-lg-offset-5": "col-lg-offset-5",
	"col-lg-offset-6": "col-lg-offset-6",
	"col-lg-offset-7": "col-lg-offset-7",
	"col-lg-offset-8": "col-lg-offset-8",
	"col-lg-offset-9": "col-lg-offset-9",
	"col-lg-offset-10": "col-lg-offset-10",
	"col-lg-offset-11": "col-lg-offset-11",
	"col-lg-offset-12": "col-lg-offset-12",
	"table-condensed": "table-condensed",
	"table-striped": "table-striped",
	"table-hover": "table-hover",
	"active": "active",
	"success": "success",
	"info": "info",
	"warning": "warning",
	"danger": "danger",
	"table-responsive": "table-responsive",
	"form-control": "form-control",
	"input-sm": "input-sm",
	"input-group-sm": "input-group-sm",
	"input-group-addon": "input-group-addon",
	"input-group-btn": "input-group-btn",
	"input-lg": "input-lg",
	"input-group-lg": "input-group-lg",
	"form-group": "form-group",
	"radio": "radio",
	"checkbox": "checkbox",
	"radio-inline": "radio-inline",
	"checkbox-inline": "checkbox-inline",
	"disabled": "disabled",
	"form-control-static": "form-control-static",
	"form-group-sm": "form-group-sm",
	"form-group-lg": "form-group-lg",
	"has-feedback": "has-feedback",
	"form-control-feedback": "form-control-feedback",
	"has-success": "has-success",
	"help-block": "help-block",
	"control-label": "control-label",
	"has-warning": "has-warning",
	"has-error": "has-error",
	"form-inline": "form-inline",
	"input-group": "input-group",
	"form-horizontal": "form-horizontal",
	"focus": "focus",
	"btn-default": "btn-default",
	"open": "open",
	"dropdown-toggle": "dropdown-toggle",
	"badge": "badge",
	"btn-primary": "btn-primary",
	"btn-success": "btn-success",
	"btn-info": "btn-info",
	"btn-warning": "btn-warning",
	"btn-danger": "btn-danger",
	"btn-link": "btn-link",
	"btn-lg": "btn-lg",
	"btn-group-lg": "btn-group-lg",
	"btn-sm": "btn-sm",
	"btn-group-sm": "btn-group-sm",
	"btn-xs": "btn-xs",
	"btn-group-xs": "btn-group-xs",
	"btn-block": "btn-block",
	"fade": "fade",
	"in": "in",
	"collapse": "collapse",
	"collapsing": "collapsing",
	"dropdown": "dropdown",
	"dropdown-menu": "dropdown-menu",
	"divider": "divider",
	"dropdown-menu-right": "dropdown-menu-right",
	"dropdown-menu-left": "dropdown-menu-left",
	"dropdown-header": "dropdown-header",
	"dropdown-backdrop": "dropdown-backdrop",
	"navbar-fixed-bottom": "navbar-fixed-bottom",
	"navbar-right": "navbar-right",
	"btn-group": "btn-group",
	"btn-group-vertical": "btn-group-vertical",
	"btn-toolbar": "btn-toolbar",
	"btn-group-justified": "btn-group-justified",
	"nav": "nav",
	"nav-divider": "nav-divider",
	"nav-tabs": "nav-tabs",
	"nav-pills": "nav-pills",
	"nav-stacked": "nav-stacked",
	"nav-justified": "nav-justified",
	"nav-tabs-justified": "nav-tabs-justified",
	"tab-content": "tab-content",
	"tab-pane": "tab-pane",
	"navbar-header": "navbar-header",
	"navbar-collapse": "navbar-collapse",
	"navbar-fixed-top": "navbar-fixed-top",
	"navbar-static-top": "navbar-static-top",
	"navbar-brand": "navbar-brand",
	"navbar-toggle": "navbar-toggle",
	"icon-bar": "icon-bar",
	"navbar-nav": "navbar-nav",
	"navbar-form": "navbar-form",
	"navbar-btn": "navbar-btn",
	"navbar-text": "navbar-text",
	"navbar-left": "navbar-left",
	"navbar-default": "navbar-default",
	"navbar-link": "navbar-link",
	"navbar-inverse": "navbar-inverse",
	"breadcrumb": "breadcrumb",
	"pagination": "pagination",
	"pagination-lg": "pagination-lg",
	"pagination-sm": "pagination-sm",
	"pager": "pager",
	"next": "next",
	"previous": "previous",
	"label-default": "label-default",
	"label-primary": "label-primary",
	"label-success": "label-success",
	"label-info": "label-info",
	"label-warning": "label-warning",
	"label-danger": "label-danger",
	"list-group-item": "list-group-item",
	"jumbotron": "jumbotron",
	"thumbnail": "thumbnail",
	"caption": "caption",
	"alert": "alert",
	"alert-link": "alert-link",
	"alert-dismissable": "alert-dismissable",
	"alert-dismissible": "alert-dismissible",
	"close": "close",
	"alert-success": "alert-success",
	"alert-info": "alert-info",
	"alert-warning": "alert-warning",
	"alert-danger": "alert-danger",
	"progress": "progress",
	"progress-bar": "progress-bar",
	"progress-striped": "progress-striped",
	"progress-bar-striped": "progress-bar-striped",
	"progress-bar-stripes": "progress-bar-stripes",
	"progress-bar-success": "progress-bar-success",
	"progress-bar-info": "progress-bar-info",
	"progress-bar-warning": "progress-bar-warning",
	"progress-bar-danger": "progress-bar-danger",
	"media": "media",
	"media-body": "media-body",
	"media-object": "media-object",
	"media-right": "media-right",
	"media-left": "media-left",
	"pull-left": "pull-left",
	"media-middle": "media-middle",
	"media-bottom": "media-bottom",
	"media-heading": "media-heading",
	"media-list": "media-list",
	"list-group": "list-group",
	"list-group-item-heading": "list-group-item-heading",
	"list-group-item-text": "list-group-item-text",
	"list-group-item-success": "list-group-item-success",
	"list-group-item-info": "list-group-item-info",
	"list-group-item-warning": "list-group-item-warning",
	"list-group-item-danger": "list-group-item-danger",
	"panel": "panel",
	"panel-body": "panel-body",
	"panel-heading": "panel-heading",
	"panel-title": "panel-title",
	"panel-footer": "panel-footer",
	"panel-collapse": "panel-collapse",
	"panel-group": "panel-group",
	"panel-default": "panel-default",
	"panel-primary": "panel-primary",
	"panel-success": "panel-success",
	"panel-info": "panel-info",
	"panel-warning": "panel-warning",
	"panel-danger": "panel-danger",
	"embed-responsive": "embed-responsive",
	"embed-responsive-item": "embed-responsive-item",
	"embed-responsive-16by9": "embed-responsive-16by9",
	"embed-responsive-4by3": "embed-responsive-4by3",
	"well": "well",
	"well-lg": "well-lg",
	"well-sm": "well-sm",
	"modal-open": "modal-open",
	"modal": "modal",
	"modal-dialog": "modal-dialog",
	"modal-content": "modal-content",
	"modal-backdrop": "modal-backdrop",
	"modal-header": "modal-header",
	"modal-title": "modal-title",
	"modal-body": "modal-body",
	"modal-footer": "modal-footer",
	"modal-scrollbar-measure": "modal-scrollbar-measure",
	"modal-sm": "modal-sm",
	"modal-lg": "modal-lg",
	"tooltip": "tooltip",
	"top": "top",
	"right": "right",
	"bottom": "bottom",
	"left": "left",
	"tooltip-inner": "tooltip-inner",
	"tooltip-arrow": "tooltip-arrow",
	"top-left": "top-left",
	"top-right": "top-right",
	"bottom-left": "bottom-left",
	"bottom-right": "bottom-right",
	"popover": "popover",
	"popover-title": "popover-title",
	"popover-content": "popover-content",
	"arrow": "arrow",
	"carousel": "carousel",
	"carousel-inner": "carousel-inner",
	"item": "item",
	"prev": "prev",
	"carousel-control": "carousel-control",
	"icon-prev": "icon-prev",
	"icon-next": "icon-next",
	"carousel-indicators": "carousel-indicators",
	"carousel-caption": "carousel-caption",
	"clearfix": "clearfix",
	"center-block": "center-block",
	"hide": "hide",
	"show": "show",
	"invisible": "invisible",
	"text-hide": "text-hide",
	"hidden": "hidden",
	"affix": "affix",
	"visible-xs": "visible-xs",
	"visible-sm": "visible-sm",
	"visible-md": "visible-md",
	"visible-lg": "visible-lg",
	"visible-xs-block": "visible-xs-block",
	"visible-xs-inline": "visible-xs-inline",
	"visible-xs-inline-block": "visible-xs-inline-block",
	"visible-sm-block": "visible-sm-block",
	"visible-sm-inline": "visible-sm-inline",
	"visible-sm-inline-block": "visible-sm-inline-block",
	"visible-md-block": "visible-md-block",
	"visible-md-inline": "visible-md-inline",
	"visible-md-inline-block": "visible-md-inline-block",
	"visible-lg-block": "visible-lg-block",
	"visible-lg-inline": "visible-lg-inline",
	"visible-lg-inline-block": "visible-lg-inline-block",
	"hidden-xs": "hidden-xs",
	"hidden-sm": "hidden-sm",
	"hidden-md": "hidden-md",
	"hidden-lg": "hidden-lg",
	"visible-print": "visible-print",
	"visible-print-block": "visible-print-block",
	"visible-print-inline": "visible-print-inline",
	"visible-print-inline-block": "visible-print-inline-block",
	"hidden-print": "hidden-print",
	"progress-sm": "progress-sm",
	"progress-xs": "progress-xs",
	"no-border": "no-border",
	"btn-inverse": "btn-inverse",
	"alert-sm": "alert-sm",
	"table-no-border": "table-no-border",
	"table-sm": "table-sm",
	"app": "app",
	"mt-xlg": "mt-xlg",
	"mt-n-xlg": "mt-n-xlg",
	"mt-lg": "mt-lg",
	"mt-n-lg": "mt-n-lg",
	"mt": "mt",
	"mt-n": "mt-n",
	"mt-md": "mt-md",
	"mt-n-md": "mt-n-md",
	"mt-sm": "mt-sm",
	"mt-n-sm": "mt-n-sm",
	"mt-xs": "mt-xs",
	"mt-n-xs": "mt-n-xs",
	"mt-0": "mt-0",
	"mt-n-0": "mt-n-0",
	"mb-xlg": "mb-xlg",
	"mb-n-xlg": "mb-n-xlg",
	"mb-lg": "mb-lg",
	"mb-n-lg": "mb-n-lg",
	"mb": "mb",
	"mb-n": "mb-n",
	"mb-md": "mb-md",
	"mb-n-md": "mb-n-md",
	"mb-sm": "mb-sm",
	"mb-n-sm": "mb-n-sm",
	"mb-xs": "mb-xs",
	"mb-n-xs": "mb-n-xs",
	"mb-0": "mb-0",
	"mb-n-0": "mb-n-0",
	"ml-lg": "ml-lg",
	"ml-n-lg": "ml-n-lg",
	"ml": "ml",
	"ml-n": "ml-n",
	"ml-md": "ml-md",
	"ml-n-md": "ml-n-md",
	"ml-sm": "ml-sm",
	"ml-n-sm": "ml-n-sm",
	"ml-xs": "ml-xs",
	"ml-n-xs": "ml-n-xs",
	"ml-0": "ml-0",
	"ml-n-0": "ml-n-0",
	"mr-lg": "mr-lg",
	"mr-n-lg": "mr-n-lg",
	"mr": "mr",
	"mr-n": "mr-n",
	"mr-md": "mr-md",
	"mr-n-md": "mr-n-md",
	"mr-sm": "mr-sm",
	"mr-n-sm": "mr-n-sm",
	"mr-xs": "mr-xs",
	"mr-n-xs": "mr-n-xs",
	"mr-0": "mr-0",
	"mr-n-0": "mr-n-0",
	"opacity-10": "opacity-10",
	"opacity-n-10": "opacity-n-10",
	"opacity-20": "opacity-20",
	"opacity-n-20": "opacity-n-20",
	"opacity-30": "opacity-30",
	"opacity-n-30": "opacity-n-30",
	"opacity-40": "opacity-40",
	"opacity-n-40": "opacity-n-40",
	"opacity-50": "opacity-50",
	"opacity-n-50": "opacity-n-50",
	"opacity-60": "opacity-60",
	"opacity-n-60": "opacity-n-60",
	"opacity-70": "opacity-70",
	"opacity-n-70": "opacity-n-70",
	"opacity-80": "opacity-80",
	"opacity-n-80": "opacity-n-80",
	"opacity-90": "opacity-90",
	"opacity-n-90": "opacity-n-90",
	"fw-semi-bold": "fw-semi-bold",
	"fs-sm": "fs-sm",
	"text-default": "text-default",
	"badge-primary": "badge-primary",
	"badge-success": "badge-success",
	"badge-info": "badge-info",
	"badge-warning": "badge-warning",
	"badge-danger": "badge-danger",
	"bg-dark": "bg-dark",
	"td-underline": "td-underline"
};

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(634);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Footer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Footer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(635);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Header.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Header.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(636);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Layout.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Layout.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(637);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./LinksGroup.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../../node_modules/sass-loader/lib/loader.js!./LinksGroup.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(638);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Sidebar.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Sidebar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(639);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Widget.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Widget.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(640);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Customer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Customer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(641);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Dashboard.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Dashboard.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(642);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Login.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=!../../../node_modules/sass-loader/lib/loader.js!./Login.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(645);
    var insertCss = __webpack_require__(43);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[local]&importLoaders=2!../../node_modules/sass-loader/lib/loader.js!./theme.scss", function() {
        content = require("!!../../node_modules/css-loader/index.js?sourceMap&modules&localIdentName=[local]&importLoaders=2!../../node_modules/sass-loader/lib/loader.js!./theme.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(375);
module.exports = __webpack_require__(374);


/***/ })

},[937]);
//# sourceMappingURL=client.js.map