import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { LIST_TYPES } from './item-list';

const UL = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const LI = styled.li`
  margin: 25px 0px;
  opacity: 0;
  animation: ${props => props.theme.animation.fadeInDown}
    ${props => props.theme.durations.medium} ${props => props.idx * 0.04}s
    ${props => props.theme.curves.cubic} forwards;
  > a {
    outline: none;
    font-weight: bold;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.main};
    font-size: ${props => props.theme.text.size.large};
    transition: ${props =>
      `color ${props.theme.durations.short} ${props.theme.curves.cubic}`};

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.loud};
    }
  }
`;

const Home = () => (
  <UL>
    {Object.keys(LIST_TYPES).map((type, idx) => (
      <LI key={`home-${type}`} idx={idx + 1}>
        <Link to={`/${type}`}>{type}</Link>
      </LI>
    ))}
  </UL>
);

export default Home;
