import classNames from 'classnames';
import * as React from 'react';
import { useCallback } from 'react';
import { ENTERED, ENTERING } from 'react-transition-group/Transition';
import { getReactVersion } from '@restart/ui/utils';
import transitionEndListener from './transitionEndListener';
import triggerBrowserReflow from './triggerBrowserReflow';
import TransitionWrapper from './TransitionWrapper';
import { jsx as _jsx } from "react/jsx-runtime";
const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};
const Fade = /*#__PURE__*/React.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  const {
    major
  } = getReactVersion();
  const childRef = major >= 19 ? children.props.ref : children.ref;
  return /*#__PURE__*/_jsx(TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: childRef,
    children: (status, innerProps) => /*#__PURE__*/React.cloneElement(children, {
      ...innerProps,
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = 'Fade';
export default Fade;