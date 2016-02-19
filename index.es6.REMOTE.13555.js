'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _reactStickyPosition = require('react-sticky-position');

var _reactStickyPosition2 = _interopRequireDefault(_reactStickyPosition);

var _autohide = require('./autohide');

var _autohide2 = _interopRequireDefault(_autohide);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _economistComponentGoogleSearch = require('@economist/component-google-search');

var _economistComponentGoogleSearch2 = _interopRequireDefault(_economistComponentGoogleSearch);

var _economistComponentBalloon = require('@economist/component-balloon');

var _economistComponentBalloon2 = _interopRequireDefault(_economistComponentBalloon);

var _economistComponentSectionsCard = require('@economist/component-sections-card');

var _economistComponentSectionsCard2 = _interopRequireDefault(_economistComponentSectionsCard);

var _economistComponentAccordion = require('@economist/component-accordion');

var _economistComponentAccordion2 = _interopRequireDefault(_economistComponentAccordion);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  _createClass(Navigation, null, [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element), _react2['default'].PropTypes.element]),
      links: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object),
      autohide: _react2['default'].PropTypes.bool,
      svgUri: _react2['default'].PropTypes.string,
      userLoggedIn: _react2['default'].PropTypes.bool,
      currentUrl: _react2['default'].PropTypes.string,
      sharedMenu: _react2['default'].PropTypes.object.isRequired,
      sectionsCardData: _react2['default'].PropTypes.object.isRequired,
      accordionData: _react2['default'].PropTypes.array.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      autohide: true
    },
    enumerable: true
  }]);

  function Navigation(props) {
    var _this = this;

    _classCallCheck(this, Navigation);

    _React$Component.call(this, props);

    this.closeSearchBar = function () {
      _this.setState({ searching: false });
    };

    this.openSearchBar = function (event) {
      event.stopPropagation();
      event.preventDefault();
      _this.setState({ searching: true });
      return false;
    };

    this.state = {
      searching: false
    };
  }

  Navigation.prototype.renderLoginLogout = function renderLoginLogout() {
    var destinationParameter = this.props.currentUrl ? '?destination=' + encodeURIComponent(this.props.currentUrl) : '';
    if (this.props.userLoggedIn) {
      var logoutUrl = '/logout' + destinationParameter;
      return _react2['default'].createElement(
        _economistComponentLinkButton2['default'],
        {
          href: logoutUrl,
          className: 'navigation__link navigation__user-menu-link navigation__user-menu-link--logout',
          icon: { icon: 'user', color: 'thimphu', useBackground: true },
          unstyled: true
        },
        'Log out'
      );
    }
    var loginUrl = '/user/login' + destinationParameter;
    var registerUrl = '/user/register' + destinationParameter;
    var userMenuBalloonTrigger = _react2['default'].createElement(
      _economistComponentLinkButton2['default'],
      {
        href: loginUrl,
        className: 'navigation__link navigation__user-menu-link navigation__user-menu-link--login',
        icon: { icon: 'user', color: 'thimphu', useBackground: true },
        unstyled: true
      },
      'Log in'
    );
    return _react2['default'].createElement(
      _economistComponentBalloon2['default'],
      { showOnHover: true, trigger: userMenuBalloonTrigger },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          {
            shadow: true,
            href: loginUrl,
            className: 'navigation__user-menu-log-in-button'
          },
          'Log in to ',
          _react2['default'].createElement(
            'span',
            { className: 'navigation__user-menu-the-economist-name' },
            'The Economist'
          )
        ),
        _react2['default'].createElement(
          'span',
          { className: 'navigation__user-menu-register' },
          'New to ',
          _react2['default'].createElement(
            'span',
            { className: 'navigation__user-menu-the-economist-name' },
            'The Economist'
          ),
          '?',
          _react2['default'].createElement(
            'a',
            {
              className: 'navigation__user-menu-register-link',
              href: registerUrl
            },
            'Register now'
          )
        )
      )
    );
  };

  Navigation.prototype.renderSearch = function renderSearch(searching) {
    if (searching) {
      return _react2['default'].createElement(
        'div',
        { className: 'navigation__search--open' },
        _react2['default'].createElement(
          'div',
          { className: 'navigation__search-magnifier' },
          _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'magnifier', size: '28px' })
        ),
        _react2['default'].createElement(_economistComponentGoogleSearch2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__search-close-button-wrapper' },
          _react2['default'].createElement(_economistComponentLinkButton2['default'], {
            unstyled: true,
            className: 'navigation__link navigation__search-close-button',
            icon: { icon: 'close', color: 'thimphu', useBackground: true },
            onClick: this.closeSearchBar
          })
        )
      );
    }
    return _react2['default'].createElement(
      'div',
      { className: 'navigation__search--closed' },
      _react2['default'].createElement(
        'div',
        { className: 'navigation__show-field-group' },
        _react2['default'].createElement(_economistComponentLinkButton2['default'], {
          unstyled: true,
          icon: { icon: 'magnifier', size: '28px' },
          className: 'navigation__link navigation__collapsed-magnifier',
          href: 'http://www.economist.com/search/',
          onClick: this.openSearchBar
        }),
        _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          {
            unstyled: true,
            icon: { icon: 'magnifier', color: 'thimphu', useBackground: true },
            className: 'navigation__link navigation__search-open-button',
            href: 'http://www.economist.com/search/',
            onClick: this.openSearchBar
          },
          'Search'
        )
      )
    );
  };

  Navigation.prototype.render = function render() {
    var searching = this.state.searching;

    var svgUri = { uri: this.props.svgUri } || {};
    var menuAccordionTrigger = _react2['default'].createElement(
      'a',
      { href: '/Sections', className: 'navigation__sections-link' },
      _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'hamburger', size: '28px', color: 'white' }),
      _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'close', size: '28px', color: 'white' })
    );
    var menuSectionsTrigger = _react2['default'].createElement(
      'a',
      { href: this.props.sharedMenu.topic.href, className: 'navigation__sections-link' },
      this.props.sharedMenu.topic.title
    );
    var children = [_react2['default'].createElement(
      'div',
      { className: 'navigation__primary', key: 'primary-navigation' },
      _react2['default'].createElement(
        'div',
        { className: 'navigation__primary-inner' },
        _react2['default'].createElement(
          'a',
          { href: 'http://www.economist.com', className: 'navigation__link-logo' },
          _react2['default'].createElement(_economistComponentIcon2['default'], _extends({ icon: 'economist', size: '64px' }, svgUri)),
          _react2['default'].createElement('div', { className: 'navigation__link-empty-logo' })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            className: 'navigation__main-navigation-link navigation__mobile-accordion',
            trigger: menuAccordionTrigger
          },
          _react2['default'].createElement(_economistComponentAccordion2['default'], { list: this.props.accordionData })
        ),
        _react2['default'].createElement(
          _economistComponentBalloon2['default'],
          {
            className: 'navigation__main-navigation-link navigation__main-sections-card',
            showOnHover: true,
            trigger: menuSectionsTrigger
          },
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_economistComponentSectionsCard2['default'], { data: this.props.sectionsCardData })
          )
        ),
        _react2['default'].createElement(
          'a',
          { href: '/printedition', className: 'navigation__main-navigation-link navigation__link' },
          'Print edition'
        ),
        _react2['default'].createElement(
          'a',
          { href: this.props.sharedMenu.more.href, className: 'navigation__main-navigation-link navigation__link' },
          this.props.sharedMenu.more.title
        ),
        _react2['default'].createElement('div', { className: 'navigation__primary-expander' }),
        _react2['default'].createElement(
          _economistComponentLinkButton2['default'],
          { href: this.props.sharedMenu.subscribe.href,
            className: 'navigation__main-navigation-link navigation__link navigation__main-navigation-link-subscribe',
            target: '_blank',
            i13nModel: {
              action: 'click',
              element: 'subscribe'
            },
            unstyled: true
          },
          this.props.sharedMenu.subscribe.title
        ),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__user-menu' },
          this.renderLoginLogout()
        ),
        _react2['default'].createElement(
          'div',
          { className: 'navigation__search' },
          this.renderSearch(searching)
        )
      )
    )];

    if (this.props.autohide) {
      children.push(_react2['default'].createElement(
        _autohide2['default'],
        { className: 'navigation__secondary', key: 'secondary-autohide' },
        this.props.children
      ));
    } else {
      children.push(_react2['default'].createElement(
        'div',
        { className: 'navigation__secondary', key: 'secondary' },
        this.props.children
      ));
    }
    return _react2['default'].createElement(
      _reactStickyPosition2['default'],
      {
        className: _classnames2['default'](this.props.className, { 'navigation--autohide': this.props.autohide })
      },
      children
    );
  };

  return Navigation;
})(_react2['default'].Component);

exports['default'] = Navigation;
module.exports = exports['default'];