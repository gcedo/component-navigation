import 'babel-polyfill';
import Navigation from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import links from './links';
import { mount } from 'enzyme';
import navigationLinks from '@economist/component-sections-card/lib/context';
chai.use(chaiEnzyme()).should();
describe('Navigation', () => {
  let props = null;
  let registered = null;
  beforeEach(() => {
    props = {
      links: registered,
      sectionsCardData: navigationLinks,
      moreBalloonData: {},
      accordionData: [
        {
          title: 'Topics',
          href: '/sections',
          children: context.sections,
        },
        {
          title: 'Blogs',
          href: '/blogs',
          children: context.blogs,
        },
        {
          title: 'Print Edition',
          href: '/printedition',
        },
        {
          title: 'More',
          href: '/digital',
        },
        {
          title: 'Subscribe',
          href: 'https://subscriptions.economist.com/',
          target: '_blank',
          unstyled: false,
          i13nModel: { // eslint-disable-line id-match
            action: 'click',
            element: 'subscribe',
          },
        },
      ],
      sharedMenu: {
        topic: {
          title: 'Topics',
          href: '/sections',
        },
        more: {
          title: 'More',
          href: '/digital',
        },
        subscribe: {
          title: 'Subscribe',
          href: 'https://subscriptions.economist.com/',
        },
      },
    };
    registered = [ links.subscribe, links.myeconomist, links.logout ];
  });

  it('renders a React element', () => {
    React.isValidElement(<Navigation {...props} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let navigation = null;
    it('renders a top level div.navigation', () => {
      rendered = mount(<Navigation {...props} className="navigation" />);
      navigation = rendered.find('.navigation');
      navigation.should.have.tagName('div');
      navigation.should.have.className('navigation');
    });

    it('renders link to /user/login?destination={this.props.currentUrl}', () => {
      rendered = mount(<Navigation {...props} className="navigation" currentUrl="/foo/bar" />);
      rendered.find('.navigation__user-menu-log-in-button')
        .should.have.attr('href', '/user/login?destination=%2Ffoo%2Fbar');
    });

    it('renders link to /logout?destination={this.props.currentUrl} when user is logged in', () => {
      rendered = mount(<Navigation {...props} userLoggedIn currentUrl="/foo/bar" />);
      rendered.find('.navigation__user-menu-linklist-link--cta')
        .should.have.attr('href', '/logout?destination=%2Ffoo%2Fbar');
    });

  });

});
