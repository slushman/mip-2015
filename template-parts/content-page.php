<?php
/**
 * Template used for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Midwest Inland Port 2015
 */

?><article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="page-header contentpage"><?php

		the_title( '<h1 class="page-title">', '</h1>' );

	?></header><!-- .entry-header -->

	<div class="page-content"><?php

		the_content();

	?></div><!-- .entry-content -->

	<footer class="entry-footer"><?php

		edit_post_link( esc_html__( 'Edit', 'mip-2015' ), '<span class="edit-link">', '</span>' );

	?></footer><!-- .entry-footer -->
</article><!-- #post-## -->