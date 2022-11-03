import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            {/* Global site tag (gtag.js) - Google Analytics
            <Script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                
                ga('create', 'code_here', 'auto');
                ga('send', 'pageview');
            </Script> */}
            
            <title>Laminar Global | The world&apos;s most advanced streaming PaaS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="The World's Most Advanced AVOD + SVOD + TVOD Streaming PaaS" />
            <meta name="author" content="Laminar Global" />
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/ico" href="favicon.ico" />
            <link href="style.css" rel="stylesheet" />
            <link href="css/all.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />

            <Script src="js/jquery.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Draggable.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/EasePack.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="lazyOnload" defer></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" strategy="lazyOnload" defer></Script>
            {/* <Script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDEBtu79UhRfZlN6RS8DFHha5_z0iPr_B4&sensor=false" strategy="lazyOnload" defer></Script> */}
            <Script src="js/clapatwebgl.js" strategy="lazyOnload" defer></Script>
            <Script src="js/plugins.js" strategy="lazyOnload" defer></Script>
            <Script src="js/common.js" strategy="lazyOnload" defer></Script>
            <Script src="js/contact.js" strategy="lazyOnload" defer></Script>
            <Script src="js/scripts.js" strategy="lazyOnload" defer></Script>
        </Head>
        <body className="hidden hidden-ball smooth-scroll" data-primary-color="#ff0000">
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument