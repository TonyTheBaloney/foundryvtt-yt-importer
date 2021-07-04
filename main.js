Hooks.on("renderSidebarTab", async (app, html) => {
    console.log(app.options.id)
    /*if (app.options.id == "scenes") {
      let button = $("<button class='import-dd'><i class='fas fa-file-import'></i> Universal Battlemap Import</button>")
  
      button.click(function () {
        new YTImporter().render(true);
      });
  
      html.find(".directory-footer").append(button);
    }*/
})

class YTImporter extends Application{
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "yt-importer";
        options.template = "modules/yt-import/importer.html"
        options.classes.push("yt-importer");
        options.resizable = false;
        options.height = "auto";
        options.width = 400;
        options.minimizable = true;
        options.title = "Youtube Importer0"
        return options;
    }   
    

}

