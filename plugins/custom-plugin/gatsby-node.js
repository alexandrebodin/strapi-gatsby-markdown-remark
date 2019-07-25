const crypto = require("crypto")
const path = require("path")
const digest = str =>
  crypto
    .createHash("md5")
    .update(str)
    .digest("hex")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === "StrapiArticle") {
    const content = node.content || ""

    const textNode = {
      id: `${node.id}-markdownContent`,
      parent: node.id,
      internal: {
        type: `${node.internal.type}markdownContent`,
        mediaType: "text/markdown",
        content: content,
        contentDigest: digest(content),
      },
    }

    createNode(textNode)

    createNodeField({
      node,
      name: "markdownContent___NODE",
      value: textNode.id,
    })
  }
}
