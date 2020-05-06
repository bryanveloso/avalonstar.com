import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

import serializers from '@/components/Serializers/Base'

import clientConfig from '../../client-config'

const PortableText = ({ blocks }) => <BlockContent blocks={blocks} serializers={serializers} />

export default PortableText
