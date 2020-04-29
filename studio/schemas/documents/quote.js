import { RiChatHeartLine } from 'react-icons/ri'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: RiChatHeartLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],
}
