import Balloon from '@economist/component-balloon';
import React from 'react';
import SectionsCard from '@economist/component-sections-card';

export default function MenuTopic({ href, title, sectionsCardData }) {
  return (
    <Balloon
      className="navigation__main-sections-card navigation__main-navigation--desktop"
      showOnHover
      trigger={(
        <a href={href} className="navigation__sections-link navigation__main-navigation-link">
          {title}
        </a>
      )}
    >
      <div>
        <SectionsCard data={sectionsCardData} />
      </div>
    </Balloon>
  );
}

if (process.env.NODE_ENV !== 'production') {
  MenuTopic.propTypes = {
    href: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    sectionsCardData: SectionsCard.propTypes.data,
  };
}
