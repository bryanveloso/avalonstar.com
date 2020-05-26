/** @jsx jsx */
/* eslint-disable no-underscore-dangle */

import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { jsx, Box } from 'theme-ui'

import clientConfig from '../../client-config'

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) return null
  const fluidProps = getFluidGatsbyImage(node.asset._id, { maxWidth: 1200 }, clientConfig.sanity)
  return (
    <figure sx={{ m: 0, mb: 4 }}>
      <Box sx={{ boxShadow: 'card.md' }}>
        <Img fluid={fluidProps} alt={node.alt} sx={{ borderRadius: 2 }} />
      </Box>
      <Box sx={{ variant: 'structure.caption' }}>
        <figcaption>{node.caption}</figcaption>
      </Box>
    </figure>
  )
}
