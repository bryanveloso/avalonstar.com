/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import Figure from '@/components/Figure'
import External from '@/images/external.svg'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <Styled.h1>{props.children}</Styled.h1>
        case 'h2':
          return <Styled.h2>{props.children}</Styled.h2>
        case 'h3':
          return <Styled.h3 sx={{ variant: 'text.entry.h3' }}>{props.children}</Styled.h3>
        case 'h4':
          return <Styled.h4>{props.children}</Styled.h4>
        case 'h5':
          return <Styled.h5>{props.children}</Styled.h5>
        case 'h6':
          return <Styled.h6>{props.children}</Styled.h6>
        case 'blockquote':
          return <Styled.blockquote>{props.children}</Styled.blockquote>
        default:
          return <Styled.p sx={{ variant: 'text.entry.p' }}>{props.children}</Styled.p>
      }
    },
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
  },
  marks: {
    em: ({ children }) => <Styled.em>{children}</Styled.em>,
    link: ({ children, mark }) => {
      const { blank, href } = mark
      return blank ? (
        <Styled.a href={href} target="_blank" rel="noopener">
          {children}
          <External sx={{ height: '1.0rem', pl: 1 }} />
        </Styled.a>
      ) : (
        <Styled.a href={href}>{children}</Styled.a>
      )
    },
    strong: ({ children }) => <Styled.strong>{children}</Styled.strong>,
  },
  list: ({ children }) => <Styled.ul>{children}</Styled.ul>,
  listItem: ({ children }) => <Styled.li>{children}</Styled.li>,
}

export default serializers
