import { MDXProvider } from '@mdx-js/react'
import { components } from '../mdx-components'
import AboutContent from '../content/about.mdx'

export default function About() {
  return (
    <MDXProvider components={components}>
      <AboutContent />
    </MDXProvider>
  )
}
