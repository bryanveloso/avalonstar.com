/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'

const PageHeader = ({ title, subtitle }) => (
  <Box sx={{ mb: 6 }}>
    <Heading as="h1" variant="hero" sx={{ mb: 1 }}>
      {title}
      <span sx={{ color: 'main.avagreen' }}>.</span>
    </Heading>
    <Text variant="subheader">{subtitle}</Text>
  </Box>
)

export default PageHeader
