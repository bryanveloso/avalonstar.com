import { useStaticQuery, graphql } from 'gatsby'

const QUERY = graphql`
  query AuthorData {
    sanityAuthor(slug: {current: {eq: "bryan-veloso"}}) {
      name
      _rawBio(resolveReferences: { maxDepth: 5 })
      facebook
      github
      instagram
      twitch
      twitter
      youtube
    }
  }
`

export const useAuthorData = () => {
  const { sanityAuthor } = useStaticQuery(QUERY)
  return sanityAuthor
}
