/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'

const PageHeader = ({ title, subtitle }) => (
  <Box sx={{ mb: 6, mt: 2 }}>
    <Heading as="h1" variant="hero" sx={{ mb: 0 }}>
      {title}
      <span sx={{ color: 'main.avagreen' }}>.</span>
    </Heading>
    <Text variant="subhero">{subtitle}</Text>
  </Box>
)

export default PageHeader
