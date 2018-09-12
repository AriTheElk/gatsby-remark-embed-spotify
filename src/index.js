"use strict";
const visit = require("unist-util-visit");

module.exports = ({ markdownAST }, { width = "100%", height = 400 } = {}) => {
  visit(markdownAST, "text", node => {
    const { value } = node;
    if (
      /https:\/\/open\.spotify\.com\/(user\/[A-Za-z0-9-_]*\/playlist|track|artist|album)\/[A-Za-z0-9-_?=]*/.test(
        value
      )
    ) {
      const spotifyURL = value
        .replace("https://open.spotify.com", "https://open.spotify.com/embed")
        .split("?")[0];
      node.type = "html";
      node.value = `<iframe src="${spotifyURL}" width="${width}" height="${height}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    }
  });

  return markdownAST;
};
