/** @jsx jsx */
import { Fragment } from 'react'
import {
 jsx, AspectRatio, Image, Text, Box,
} from 'theme-ui'

const Cover = ({
 ratio, url, alt, caption,
}) => (
  <Fragment>
    <AspectRatio ratio={ratio} sx={{ bg: 'main.dark' }}>
      {url && (
        <Image
          src={`${url}`}
          alt={alt}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </AspectRatio>
    <Box sx={{ variant: 'structure.caption' }}>
      <Text>{caption}</Text>
    </Box>
  </Fragment>
)

export default Cover
