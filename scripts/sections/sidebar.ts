
$("./body") {
  $$("#mw-panel") {
    $$("form") {
      insert_after("p", "This is an experiment I made to try out a mobilized Wikipedia. The code is available at <a href='http://github.com/hcatlin/wikita'>http://github.com/hcatlin/wikita</a> -- Please feel free to contribute! Or, follow me on Twitter: <a href='http://www.twitter.com/hcatlin'>@hcatlin</a>", class: "small_notice")
      insert_before("h1", "Wikita")
    }
    

    $$("#p-logo") {
      remove()
    }
  }
  
}
