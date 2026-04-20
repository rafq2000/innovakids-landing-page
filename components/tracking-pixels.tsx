"use client"

import Script from "next/script"

// Global typings so window.gtag / window.dataLayer are available across the app
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[]
        gtag: (...args: unknown[]) => void
        fbq?: (...args: unknown[]) => void
    }
}

const GOOGLE_ADS_ID = "AW-18090948342"
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || ""
const META_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ""

export function TrackingPixels() {
    return (
        <>
            {/* Google tag — loads once, serves both Google Ads and GA4 */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-tag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${GOOGLE_ADS_ID}');
                    ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: true });` : ""}
                `}
            </Script>

            {/* Meta Pixel — only initializes if NEXT_PUBLIC_FACEBOOK_PIXEL_ID is set */}
            {META_PIXEL_ID && (
                <>
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
                            fbq('init', '${META_PIXEL_ID}');
                            fbq('track', 'PageView');
                        `}
                    </Script>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            )}
        </>
    )
}
