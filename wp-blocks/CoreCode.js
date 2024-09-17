import React from 'react';
import { gql } from '@apollo/client';
import { getStyles, useBlocksTheme } from '@faustwp/blocks'; 

export default function CoreCode(props) {
    console.log(props);
//   const theme = useBlocksTheme();
//   const style = getStyles(theme, props);
  const { attributes } = props;
  
  let content = props.attributes?.data?.post?.content;
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

CoreCode.fragments = {
  key: `CoreCodeBlockFragment`,
  entry: gql`
    fragment CoreCodeBlockFragment on CoreCode {
      attributes {
        borderColor
        backgroundColor
        content
        style
        textColor
        fontSize
        fontFamily
        cssClassName
      }
    }
  `,
};

