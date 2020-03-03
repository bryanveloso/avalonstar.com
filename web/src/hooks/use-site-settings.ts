
import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query SiteSettings {
    sanitySiteSettings {
      title
      description
      keywords
    }
  }
`

export const useSiteSettings = () => {
  const { sanitySiteSettings } = useStaticQuery(QUERY)
  return sanitySiteSettings
}
