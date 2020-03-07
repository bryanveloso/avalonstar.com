import imageUrlBuilder from '@sanity/image-url'

import clientConfig from '../../client-config'

const builder = imageUrlBuilder(clientConfig.sanity)

export function imageUrlFor(source) {
  return builder.image(source)
}
