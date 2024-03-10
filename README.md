# Pod Force
Launch your personal podcast player with open-source, forever-free web tech

## About this project

I created Pod Force so Big Tech could no longer come between me and my favorite podcasters. While it's certainly possible and probably advisable to build a fully interactive web app to do this, I realized I could get 90% of what I needed with a static site using jekyll-import to grab the podcast content. Special thanks to ChatGPT for helping me figure out the Ruby and Javascript bits.

## How to use this template

### Copying the template

1. Press the `Use this template` button on the `Code` tab.
1. Follow the instructions to name and save your repository.

### Adding subscriptions

1. In the `_data` folder, update the `subscriptions.yml` file with the podcast feed links you want to subscribe to, following the format of the examples.
1. Commit the changes.

### Updating your site with the latest episodes

Pod Force is set up to run on a schedule. You can also manually update and publish your site:

1. Go to the `Actions` tab.
1. Go to the `Deploy Jekyll site to Pages` workflow file.
1. Press the `Run workflow` button and give it a few minutes.

If you want to change the timing and/or frequency of the schedule:

1. Read up on the "cron" syntax.
1. Update the cron setting in this file: `.github/workflows/publish.yml`

## License and credit
Pod Force is available for use and modification under the MIT license. It relies on the following open-source projects:

- Jekyll
- jekyll-import
- Pico CSS framework