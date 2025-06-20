import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h2 {...props} />,
    h2: (props) => <h3 {...props} />,
    h3: (props) => <h4 {...props} />,
    h4: (props) => <h5 {...props} />,
    h5: (props) => <h6 {...props} />,
    h6: (props) => <h6 {...props} />, // Or, for example, <p {...props}><strong>{props.children}</strong></p>
  }
}
