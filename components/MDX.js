import React from 'react'
import { transform } from 'buble'
import mdx from '@mdx-js/mdx'
import { MDXTag } from '@mdx-js/tag'

export default ({
  scope = {},
  components = {},
  mdPlugins = [],
  hastPlugins = [],
  children,
  ...props
}) => {
  try {
    const fullScope = {
      MDXTag,
      components,
      props,
      ...scope,
    }

    const jsx = mdx
      .sync(children, {
        mdPlugins,
        hastPlugins,
        skipExport: true,
      })
      .trim()

    const { code } = transform(jsx)
    const keys = Object.keys(fullScope)
    const values = Object.values(fullScope)
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      '_fn',
      'React',
      ...keys,
      `${code}

    return React.createElement(MDXContent, { components, ...props });`,
    )

    return fn({}, React, ...values)
  } catch (error) {
    // ToDo: show the last working state instead of the error message below
    return <div>No live preview while typing JSX yet :/</div>
  }
}
