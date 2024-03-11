# Got the need for feeds? Don’t let Big Tech come between you and your favorite podcasters. Launch your personal podcast player in minutes with open-source, forever-free web tech.

**Pod Force** is a podcast player web app template anyone can use to subscribe and listen to their favorite podcasts. Simply copy the template, add your subs, and publish! The Jekyll static site generator builds a site you can take anywhere, or host right here on GitHub Pages. No authoritarian app ecosystem — just you and your pods.

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

### Things to note

- It intentionally only imports and displays a limited amount of episodes.
- It uses browser localStorage to keep track of things like where you are in an episode and whether you've marked it as played. That means this data is specific to the device and browser you're using.
- For some reason, Firefox does better than Chrome at handling buffering and playing back audio when the phone screen is locked, so I use Firefox. Not sure about Safari.
- The use of "private feeds" (like Substack, for example, or other paid services) is not currently supported by the importer. But I plan on asking ChatGPT how to handle this.

## License and credit
Pod Force is available for use and modification under the MIT license. It relies on the following open-source projects:

- Jekyll
- jekyll-import
- Pico CSS framework
