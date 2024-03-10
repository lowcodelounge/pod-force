require "jekyll-import"
    
module MyFeedImporter
  class MyFeedGenerator < Jekyll::Generator
    def generate(site)
      # Get feed links from subscriptions.yml data file
      subs = site.data['subscriptions']

      # Run the Jekyll importer on each one to generate posts
      subs.each do |podcast|
        JekyllImport::Importers::RSS.run(
          {
            "source" => "#{podcast['url']}",
            "tag" => "#{podcast['title']}",
            "canonical_link" => true,
            "render_audio" => true
          }
        )
      end
    end
  end
end