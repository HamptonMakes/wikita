# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
  add_canonical_tag()

  add_assets()

  @import sections/header.ts
  @import sections/sidebar.ts
  @import sections/footer.ts

  @import mappings.ts
}

