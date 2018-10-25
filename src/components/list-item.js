import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LI = styled.li`
  font-family: 'Lucida Console', Monaco, monospace;
  margin-bottom: 25px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.txt.main};
  transition: ${props =>
    `color ${props.theme.transition.duration} ${props.theme.transition.curve}`};

  &:hover,
  &:focus {
    transition: none;
    outline: none;
    color: ${props => props.theme.txt.loud};
  }
`;

const Title = styled.strong`
  display: inline-block;
  font-size: 1.5em;
  margin-bottom: 0.2em;

  &::selection {
    background-color: ${props => props.theme.txt.main};
    color: ${props => props.theme.txt.loud};
  }
`;

const By = styled.small`
  display: block;
  font-size: 1em;
  color: ${props => props.theme.txt.quiet};
`;

const ListItem = memo(props => (
  <LI>
    <Link href={props.url} rel="noopener" target="_blank">
      <Title>{props.title}</Title>
    </Link>
    <By>{props.by}</By>
  </LI>
));

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  by: PropTypes.string,
  score: PropTypes.number,
  time: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.number),
  commentsCount: PropTypes.number
};

export default ListItem;
