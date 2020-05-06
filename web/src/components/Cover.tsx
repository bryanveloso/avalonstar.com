/** @jsx jsx */
import Img from 'gatsby-image'
import { Fragment } from 'react'
import { jsx, AspectRatio, Text, Box } from 'theme-ui'

const Cover = ({ ratio, asset, alt, caption }) => (
  <Fragment>
    <Box sx={{ position: 'relative', boxShadow: 'card.xl', zIndex: '100' }}>
      <AspectRatio ratio={ratio} sx={{ bg: 'main.dark' }}>
        {asset && (
          <Img
            fluid={asset}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        )}
      </AspectRatio>
    </Box>
    <Box sx={{ variant: 'structure.caption' }}>
      <Text>{caption}</Text>
    </Box>
  </Fragment>
)

export default Cover
