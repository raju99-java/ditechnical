/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
//        myFonts = ['Aclonica', 'Allan', 'Allerta', 'Allerta Stencil', 'Amaranth', 'Angkor', 'Annie Use Your Telescope', 'Anonymous Pro', 'Anton', 'Architects Daughter', 'Arimo', 'Artifika', 'Arvo', 'Astloch', 'Bangers', 'Battambang', 'Bayon', 'Bentham', 'Bevan', 'Bigshot One', 'Bokor', 'Brawler', 'Buda', 'Cabin', 'Cabin Sketch', 'Calligraffitti', 'Candal', 'Cantarell', 'Cardo', 'Carter One', 'Caudex', 'Chenla', 'Cherry Cream Soda', 'Chewy', 'Coda', 'Coda Caption', 'Coming Soon', 'Content', 'Copse', 'Corben', 'Cousine', 'Covered By Your Grace', 'Crafty Girls', 'Crimson Text', 'Crushed', 'Cuprum', 'Damion', 'Dancing Script', 'Dangrek', 'Dawning of a New Day', 'Didact Gothic', 'Droid Sans', 'Droid Sans Mono', 'Droid Serif', 'EB Garamond', 'Expletus Sans', 'Fontdiner Swanky', 'Francois One', 'Freehand', 'GFS Didot', 'GFS Neohellenic', 'Geo', 'Goudy Bookletter 1911', 'Gruppo', 'Handlee', 'Hanuman', 'Holtwood One SC', 'Homemade Apple', 'IM Fell DW Pica', 'IM Fell DW Pica SC', 'IM Fell Double Pica', 'IM Fell Double Pica SC', 'IM Fell English', 'IM Fell English SC', 'IM Fell French Canon', 'IM Fell French Canon SC', 'IM Fell Great Primer', 'IM Fell Great Primer SC', 'Inconsolata', 'Indie Flower', 'Irish Grover', 'Josefin Sans', 'Josefin Slab', 'Judson', 'Jura', 'Just Another Hand', 'Just Me Again Down Here', 'Kenia', 'Khmer', 'Koulen', 'Kranky', 'Kreon', 'Kristi', 'Lato', 'League Script', 'Lekton', 'Limelight', 'Lobster', 'Lora', 'Luckiest Guy', 'Maiden Orange', 'Mako', 'Maven Pro', 'Meddon', 'MedievalSharp', 'Megrim', 'Merriweather', 'Metal', 'Metrophobic', 'Michroma', 'Miltonian', 'Miltonian Tattoo', 'Molengo', 'Monofett', 'Moul', 'Moulpali', 'Mountains of Christmas', 'Muli', 'Neucha', 'Neuton', 'News Cycle', 'Nobile', 'Nova Cut', 'Nova Flat', 'Nova Mono', 'Nova Oval', 'Nova Round', 'Nova Script', 'Nova Slim', 'Nova Square', 'Nunito', 'OFL Sorts Mill Goudy TT', 'Odor Mean Chey', 'Old Standard TT', 'Open Sans', 'Open Sans Condensed', 'Orbitron', 'Oswald', 'Over the Rainbow', 'PT Sans', 'PT Sans Caption', 'PT Sans Narrow', 'PT Serif', 'PT Serif Caption', 'Pacifico', 'Paytone One', 'Permanent Marker', 'Philosopher', 'Play', 'Playfair Display', 'Podkova', 'Preahvihear', 'Puritan', 'Quattrocento', 'Quattrocento Sans', 'Radley', 'Raleway', 'Reenie Beanie', 'Rock Salt', 'Rokkitt', 'Ruslan Display', 'Schoolbell', 'Shanti', 'Siemreap', 'Sigmar One', 'Six Caps', 'Slackey', 'Smythe', 'Sniglet', 'Special Elite', 'Sue Ellen Francisco', 'Sunshiney', 'Suwannaphum', 'Swanky and Moo Moo', 'Syncopate', 'Tangerine', 'Taprom', 'Tenor Sans', 'Terminal Dosis Light', 'The Girl Next Door', 'Tinos', 'Ubuntu', 'Ultra', 'UnifrakturCook', 'UnifrakturMaguntia', 'Unkempt', 'VT323', 'Vibur', 'Vollkorn', 'Waiting for the Sunrise', 'Wallpoet', 'Walter Turncoat', 'Wire One', 'Yanone Kaffeesatz'];
        myFonts = ['Fredericka the Great','TransportD','Raleway'];

config.font_names = 'serif;sans serif;monospace;cursive;fantasy';

for(var i = 0; i<myFonts.length; i++){
            config.font_names = config.font_names+';'+myFonts[i];
            myFonts[i] = 'http://fonts.googleapis.com/css?family='+myFonts[i].replace(' ','+');
}

config.contentsCss = ['/ckeditor/contents.css'].concat(myFonts);
config.extraPlugins = 'language';
};
