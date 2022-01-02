import React from 'react'

const Layout = () => {
    return (
        <>
        
        <div className="container-fluid home-main bckground">
		<h2>Mouhamed Amine Mbarek <span className="blinker">.</span></h2>
		<button type="button" className="btn btn-default">View Profile</button>
	</div>
	<div className="container-fluid home-content1">
		<div className="row">
			<div className="col-md-6 content1-left">
				<h3>Why to use Bootstrap <span className="blinker">?</span></h3>
				<p>Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.</p>
			
			</div>
			<div className="col-md-6 content1-right">
				<p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.</p>
			</div>
		</div>
	</div>
	<div className="container-fluid home-content2">
		<p><span>News</span> and <span>announcements</span> for all things <span>Bootstrap</span>, including new <span>releases</span> and <span>Bootstrap Themes</span>.</p>
	</div>

        </>
    )
}

export default Layout
