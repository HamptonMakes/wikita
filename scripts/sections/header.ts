$("./head") {
  $("./title") {
    inner("Wikita, The Tablet Optimized Encyclopedia")
  }
}

$$("#mw-page-base, #mw-head-base") {
  remove()
}
$$("#p-personal") {
  $$("li") {
    attribute("id") { remove() }
    move_to("/html/body//div[@id='p-navigation']//div[@class='body']/ul", "top")
  }
  remove()
}
$$("#mw-head") {

}