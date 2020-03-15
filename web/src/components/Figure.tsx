/** @jsx jsx */
/* eslint-disable no-underscore-dangle */

import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { jsx } from 'theme-ui'

import clientConfig from '../../client-config'

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) return null
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth: 1200 }, clientConfig.sanity)
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
