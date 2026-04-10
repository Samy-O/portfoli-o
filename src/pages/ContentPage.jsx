import { MDXProvider } from '@mdx-js/react'
import { components } from '../mdx-components'

export default function ContentPage({ Content }) {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}
