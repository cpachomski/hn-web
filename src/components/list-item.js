import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LI = styled.li`
  font-family: ${props => props.theme.text.fonts.monospace};
  margin-bottom: 25px;
  opacity: 0;
  position: relative;
  animation: ${props => props.theme.animation.fadeInDown}
    ${props => props.theme.durations.fast} ${props => props.idx * 0.04}s
    ${props => props.theme.curves.cubic} forwards;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.main};
  transition: ${props =>
    `color ${props.theme.durations.fast} ${props.theme.curves.cubic}`};

  &:hover,
  &:focus {
    transition: none;
    outline: none;
    color: ${props => props.theme.colors.loud};
  }
`;

const Title = styled.strong`
  display: inline-block;
  font-size: ${props => props.theme.text.size.medium};
  margin-bottom: 0.2em;

  &::selection {
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.loud};
  }
`;

const By = styled.small`
  display: block;
  font-size: 1em;
  color: ${props => props.theme.colors.quiet};
`;

const ListItem = memo(
  props =>
    props.url && props.title ? (
      <LI idx={props.idx + 1}>
        <Link href={props.url} rel="noopener" target="_blank">
          <Title>{props.title}</Title>
        </Link>
        <By>{props.by}</By>
      </LI>
    ) : null
);

ListItem.propTypes = {
  idx: PropTypes.number,
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
