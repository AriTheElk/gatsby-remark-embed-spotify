# gatsby-remark-embed-spotify

Embed Spotify songs, playlists, sets, and artist pages in your markdown files!

### [View a live demo here](https://words.garet.io/music-for-programming/)

<a href="https://www.buymeacoffee.com/gm" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Install

1. Install plugin to your site:

```bash
yarn add gatsby-remark-embed-spotify
```

2. Add `gatsby-remark-embed-spotify` to your `gatsby-transformer-remark` plugins in `gatsby-config.js`:

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: ["gatsby-remark-embed-spotify"]
    }
  }
];
```

3. Restart gastby.

## Usage

```markdown
## My blog post

This is an example of embedding a single spotify track.
Just type your markdown as you normally do, and then insert a valid
spotify link anywhere to automatically transform it into an embed!

https://open.spotify.com/track/6CnkGSMarTBjIKWuuGXBNl?si=ecMRoa36RnWte3RR7PdJhw

You can also embed albums

https://open.spotify.com/album/3ICWz0kXRrh74cfcS0diek?si=AEK51ar4RI6zNduAVMmI-Q

And playlists!

https://open.spotify.com/user/garetmckinley/playlist/2SmGA6PDALbMzfBwseeDNx?si=CDGId95KQHis8uYipbXLzQ

And artist pages!

https://open.spotify.com/artist/0nLTVC5FExtXgF3RoLh0TH?si=SIPTIBZHTaiODE_WNqB-BA
```

> __NOTE:__ Make sure to copy the link instead of embed code or Spotify URI.

<p align="center"><img src="https://i.imgur.com/eqx9bHa.png" alt="screenshot for share > copy artist link" /></p>

## Configuration

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-embed-spotify",
          options: {
            width: "800px", // default is "300px"
            height: "600px" // default is "380px
          }
        }
      ]
    }
  }
];
```

## License

MIT
