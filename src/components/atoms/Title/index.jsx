import React from 'react';
import PropTypes from 'prop-types';

import { H1 } from './styles';

const Title = ({children, size}) => <H1 size={size}>{children}</H1>;

Title.propTypes = {
  size: PropTypes.string
}