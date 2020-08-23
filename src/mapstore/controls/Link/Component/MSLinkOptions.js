import React, { Component } from 'react';

import { Dropdown, DropdownOption } from '../../../../components/Dropdown';
import './styles.css';

export default class MSLinkOptions extends Component {

    state = { expanded: false }

    toggle = () => {
        this.setState(prev => ({
            expanded: !prev.expanded
        }));
    }

  render() {
    const { expanded } = this.state;
    const { 
      externalLinkOption,
      onSelectionChange,
      currentSelectOption,
      availableStorySections } = this.props;
    return (
        <div className="rdw-block-wrapper" aria-label="rdw-block-control">
        <Dropdown
        className='ms-rdw-link-options-dropdown'
        onChange={onSelectionChange}
        expanded={expanded}
        doExpand={this.toggle}
        doCollapse={this.toggle}
        onExpandEvent={this.toggle}
        title="MSLinks"
      >
        <span>
            {currentSelectOption}
        </span>
        <DropdownOption
            active={true}
            value={externalLinkOption}
            key={externalLinkOption}
        >
            External Link
        </DropdownOption>
        {availableStorySections && availableStorySections.map(section => (
            <DropdownOption
            active={section.id === currentSelectOption}
            value={section.id}
            key={section.id}
            >
                {section.title}
            </DropdownOption>
        ))}
      </Dropdown>
      </div>
    );
  }
};
