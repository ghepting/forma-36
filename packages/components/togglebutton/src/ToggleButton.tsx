import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { IconComponent } from '@contentful/f36-icon';
import getStyles from './ToggleButton.styles';

export interface ToggleButtonProps extends CommonProps {
  /**
   * Applies active styles
   * @default false
   */
  isActive?: boolean;
  /**
   * Disabled interaction and applies disabled styles
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: IconComponent;
  /**
   * Function triggered when the toggle button is clicked.
   */
  onToggle?: () => void;
  children: React.ReactNode;
}

function _ToggleButton(
  props: ToggleButtonProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    testId = 'cf-ui-toggle-button',
    children,
    className,
    isDisabled,
    isActive,
    icon,
    onToggle,
  } = props;
  const styles = getStyles({ isActive, isDisabled });
  return (
    <Button
      testId={testId}
      type="button"
      ref={ref}
      onClick={!isDisabled && onToggle}
      className={cx(styles.toggleButton, className)}
      icon={icon}
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
}

export const ToggleButton = React.forwardRef(_ToggleButton);
