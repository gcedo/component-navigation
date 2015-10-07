import React from 'react';
import Icon from '@economist/component-icon';
import List from '@economist/component-list';
import StickyPosition from 'react-sticky-position';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.element,
      links: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    };
  }

  render() {
    let bottomBar = '';
    if (this.props.links) {
      bottomBar = (<div className="navigation__secondary">
         <List className="navigation__secondary-inner">
         {this.props.links.map((contextItem) => {
           return (<a {...contextItem} className="navigation__secondary-link">
               {contextItem.title}
            </a>);
         })}
         </List>
       </div>);
    }

    return (
      <StickyPosition className={this.props.className}>
         <div className="navigation__primary">
           <div className="navigation__primary-inner">
             <a href="http://www.economist.com" className="navigation__link-logo">
               <Icon icon="economist" size="45px"/>
             </a>
             <div className="navigation__primary-expander"></div>
             <a
               href="http://www.economist.com/search/gcs#gsc.tab=0"
               target="_blank" className="navigation__link-search"
             >
               <Icon icon="magnifier" size="34px"/>
             </a>
           </div>
         </div>
         {bottomBar}
      </StickyPosition>
    );
  }
}
