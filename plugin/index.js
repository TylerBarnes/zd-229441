export const onPostBuild = meta => {
  meta.netlifyConfig.redirects.push({
    force: true,
    from: '/*',
    status: 301,
    to: 'https://www.netlify.com/'
  })
}