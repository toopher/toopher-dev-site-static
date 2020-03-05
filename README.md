This repository is serving the content at https://dev.toopher.com.

I grabbed a static snapshot of the post-acquisition content and decommissioned the portal app.  Here's what was needed to do that:

1. Use [httrack](http://www.httrack.com/) (available with `brew install httrack`) to crawl the website, download the content, and rewrite internal links to work.  httrack is a great tool, but we're having to wrangle it a bit to preserve "pretty" URLs.

       httrack https://dev.toopher.com/docs/getting-started -O docs -N "%p/%n/index.%t" --do-not-log --cache=0 --quiet -I0 --robots=0 --cookies=0 --display

1. The HTML links generated above still refer to `../index.html` instead of "pretty" URLs, so fix that up.

       find docs -name '*.html' -type f -print0 | xargs -0 sed -i '' 's:/index.html:/:g'

1. Add a [404.html](./docs/404.html) file to catch and redirect all unrecognized URLs to the getting started page.

Hat-tips to:
 * [Sending a Drupal Site Into Retirement Using HTTrack](https://www.lullabot.com/articles/sending-drupal-site-retirement-using-httrack) for the inspiration to use httrack and for most of the needed wrangling for pretty URLs
 * [Redirect a GitHub Pages site with this HTTP hack](https://opensource.com/article/19/7/permanently-redirect-github-pages) for showing how to make unrecognized URLs redirect 

