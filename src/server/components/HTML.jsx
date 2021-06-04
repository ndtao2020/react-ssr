import React from "react"
import PropTypes from "prop-types"
import configBuild from "../../../configs/build"

export default function HTML({
  hostname,
  url,
  isLogin,
  children,
  title,
  description,
  keywords,
  image,
  css,
  scripts,
  state,
  csrf,
}) {
  // Render
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1,initial-scale=1,width=device-width"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          name="google-site-verification"
          content="xiMe8anTjJm9_X1C2X-DqdjN7zXptepvd9lILEC130M"
        />
        <title>{title || "Home Page"}</title>
        <meta
          name="description"
          content={description || process.env.APP_DESCRIPTION}
        />
        <meta name="keywords" content={keywords.join(",")} />
        <meta property="og:site_name" content={title || "Home Page"} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:url" content={`${hostname}${url}`} />
        <meta property="og:title" content={title || "Home Page"} />
        <meta
          property="og:description"
          content={description || process.env.APP_DESCRIPTION}
        />
        <meta
          property="og:image"
          content={image ? image : `${hostname}/${configBuild.folderAssets}/l.png`}
        />
        <meta property="fb:app_id" content="180537556559844" />
        <meta name="_csrc9eebe" content={csrf} />
        <link rel="canonical" href={`${hostname}${url}`} />
        <link rel="shortcut icon" href={`/${configBuild.folderAssets}/f.ico`} />
        {css.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__DATA__=${JSON.stringify({ ...state, isLogin })};`,
          }}
        />
        {scripts.map(({ async, src }) =>
          async ? (
            <script key={src} crossOrigin="true" async src={src} />
          ) : (
            <script key={src} src={src} />
          )
        )}
      </body>
    </html>
  )
}

HTML.defaultProps = {
  hostname: "",
  keywords: ["Container"],
  css: [],
  scripts: [],
  header: true,
  footer: true,
  state: {},
}

HTML.propTypes = {
  hostname: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.array.isRequired,
  image: PropTypes.string,
  css: PropTypes.array.isRequired,
  scripts: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  csrf: PropTypes.any.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
