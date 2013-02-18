$("./head") {
  $("./title") {
    inner("Wikita, The Tablet Optimized Encyclopedia")
  }
}

$$("li#n-shoplink") { remove() }

$$("#mw-page-base, #mw-head-base") {
  remove()
}
$$("#p-personal") {
  $("/html/body//div[@id='p-navigation']//div[@class='body']") { 

    insert_top("ul", class: "personalNav")
    insert_top("span", "Account", class: "navHeading")
  }
  $$("li") {
    attribute("id") { remove() }
    move_to("//ul[@class = 'personalNav']", "top")
  }
  remove()
}

$("/html/body//div[@id='p-navigation']//div[@class='body']") { 
  insert_top("ul", class: "pageNav")
  insert_top("span", "Page", class: "navHeading")
}
$$(".vectorTabs") {
  $$(".selected") {
    remove()
  }
  
  $$("li") {
    move_to("//ul[@class = 'pageNav']", "top")
  }
}

$$("#mw-head") {

}
