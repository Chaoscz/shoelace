import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

import menuItemCheckIcon from '../../icons/menu-item-check.svg';

/**
 * @slot prefix - Used to prepend an icon or similar element to the dropdown item.
 * @slot suffix - Used to append an icon or similar element to the dropdown item.
 * @slot - The dropdown item's label.
 */

@Component({
  tag: 'sl-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true
})
export class DropdownItem {
  /** Set to true to draw the item in a checked state. */
  @Prop() checked = false;

  /** Set to true to draw the dropdown item in an active state. */
  @Prop() active = false;

  /** Set to true to draw the dropdown item in a disabled state. */
  @Prop() disabled = false;

  @Event() slSelect: EventEmitter;

  render() {
    return (
      <div
        class={{
          'sl-dropdown-item': true,
          'sl-dropdown-item--checked': this.checked,
          'sl-dropdown-item--active': this.active,
          'sl-dropdown-item--disabled': this.disabled
        }}
        role="menuitem"
        aria-checked={this.checked}
        aria-disabled={this.disabled}
        aria-selected={this.active}
      >
        <span class="sl-dropdown-item__check" innerHTML={menuItemCheckIcon} />

        <span class="sl-dropdown-item__prefix">
          <slot name="prefix" />
        </span>

        <span class="sl-dropdown-item__label">
          <slot />
        </span>

        <span class="sl-dropdown-item__suffix">
          <slot name="suffix" />
        </span>
      </div>
    );
  }
}
