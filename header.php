<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="wrapper">

	<header class="site-header">
		<div class="container">
			<div class="site-header__logo">
				Logo
			</div>
			<div class="hamburger">
				<input class="checkbox" type="checkbox" name="" id="checkbox-menu" />
				<div class="hamburger__line"></div>
				<div class="hamburger__line"></div>
				<div class="hamburger__line"></div>
			</div>
		</div>
	</header><!-- #site-header -->

	<nav id="nav-menu">
		<div class="container">
			<?php wp_nav_menu(); ?>
		</div>
	</nav>
