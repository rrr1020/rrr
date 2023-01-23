<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
.....................................................................................................
import React from "react";
import website1 from '../images/web4.jpg'
import website2 from '../images/web5.jpg'
import website3 from '../images/web3.jpg'

function Home(){
  const pstyle={
    fontSize:"18px",
    lineHeight:"35px",
    textalign:"center"

  }
    return(
        <div className="home">
          <div className="container-fluid" style={{margin:"0",padding:"0"}}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img src={website1} alt="Los Angeles" style={{ width: "100%",height: "450px" }} />
            </div>
            <div className="item">
              <img src={website2} alt="Chicago" style={{ width: "100%",height:"450px" }} />
            </div>
            <div className="item">
              <img src={website3} alt="New york" style={{ width: "100%",height:"450px" }} />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
<br></br><br></br>
      
  <div className="container">
    <div className="row">
      <div className="col-sm-8">
        <p>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.

</p>

      </div>
      <div className="col-sm-4">
        <img src={website1} height="300px" width="450px"/>
      </div>
    </div>
  </div>

        </div>
    )
    
}
export default Home;
