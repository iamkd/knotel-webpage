import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import { rhythm } from '../utils/typography'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div className="wrap">
          {this.props.children}
      </div>
    )
  }
}
