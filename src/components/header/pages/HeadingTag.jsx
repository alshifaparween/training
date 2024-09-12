import React, { memo } from 'react'

const HeadingTag = (props) => {
    const { level, text, style, className, onClick, children } = props
    const checkValid = Math.max(1, Math.min(6, level ? level : 6))
    const HeadTag = `h${checkValid}`

    return (
        <HeadTag
            style={style}
            className={className}
            onClick={onClick}
        >
            {/* {text} */}
            {children}
        </HeadTag>
    )
}
export default memo(HeadingTag)