import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const data = [
  {
    id: 1,
    text: 'about',
    url: '/#about'
  },
  {
    id: 2,
    text: 'products & services',
    url: '/#products'
  },
  {
    id: 3,
    text: 'our work',
    url: '/#work'
  },
  {
    id: 4,
    text: 'news & insights',
    url: '/maintenance'
  },
  {
    id: 5,
    text: 'careers',
    url: '/careers'
  }
];

const links = data.map(link => {
  return (
    <li key={link.id}>
      <AnchorLink to={link.url}>{link.text}</AnchorLink>
    </li>
  )
});

export default () => {
  return (
    <ul>
      {links}
    </ul>
  )
}