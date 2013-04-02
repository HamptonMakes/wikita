
$("./body") {
  #<a href="https://github.com/you"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" alt="Fork me on GitHub"></a>
  insert_top("a", href: "http://github.com/hcatlin/wikita") {
  	insert_top("img", style: "position: absolute; top: 0; right: 0; border: 0; z-index: 100", src: "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png")
  }
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
