/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'

export default ({ mark, children }) => {
  if (!mark.reference || !mark.reference.slug) return null
  const { slug } = mark.reference
  return (
    <Link to={`/${slug.current}`} sx={{ variant: 'styles.a' }}>
      {children}
    </Link>
  )
}
