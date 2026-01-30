"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

export function TrackingPixels() {
  // Delay loading of heavy third-party scripts to prioritize LCP
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 4 seconds delay allows the page to settle and pass LCP/TBT checks
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) return null

  return (
    <>
      {/* Google Ads / GTM - Optimized Load */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-796498700"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-796498700');
          
          // Conversion Event from original layout.tsx
          gtag('event', 'conversion', {
            'send_to': 'AW-796498700/sY1fCLaiq9sbEIy25vsC',
            'value': 1.0,
            'currency': 'CLP'
          });
        `}
      </Script>

      {/* Facebook Pixel - Optimized Load */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          // Config placeholder preserved from original file
          // fbq('init', 'YOUR_PIXEL_ID');
          // fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}
