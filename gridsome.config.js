module.exports = {
  siteName: 'portfolio.seike460.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
          ]
        }
      }
    }
  ]
}