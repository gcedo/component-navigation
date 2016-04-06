import Balloon from '@economist/component-balloon';
import React from 'react';
import SectionsCard from '@economist/component-sections-card';

export default function MenuMore({ href, title, moreBalloonData }) {
  return (
    <Balloon
      dynamicPositioning={false}
      className="navigation__more navigation__main-sections-card navigation__main-navigation--desktop"
      showOnHover
      trigger={(
        <a href={href} className="navigation__sections-link navigation__main-navigation-link">
          {title}
        </a>
      )}
    >
      <SectionsCard
        titles={{
          sections: 'Apps and Digital Editions',
          blogs: 'From the economist group',
        }}
        data={moreBalloonData}
      />
    </Balloon>
  );
}

if (process.env.NODE_ENV !== 'production') {
  MenuMore.propTypes = {
    href: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    moreBalloonData: SectionsCard.propTypes.data,
  };
}
