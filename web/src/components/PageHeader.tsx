/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from 'theme-ui'

const PageHeader = ({ title, subtitle }) => (
  <Flex sx={{ py: 4, px: 4 }}>
    <Box sx={{ flex: '1 1 auto' }}>
      <Heading as="h1" sx={{ variant: 'text.hero', mb: 0 }}>
        {title}
        <span sx={{ color: 'main.avagreen' }}>.</span>
      </Heading>
      <Text sx={{ variant: 'text.subhero' }}>{subtitle}</Text>
    </Box>
  </Flex>
)

export default PageHeader
