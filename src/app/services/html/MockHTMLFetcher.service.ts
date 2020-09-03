import { Injectable } from '@angular/core';
import ControlModule from '../control.module';
import { HTMLFetcher } from './HTMLFetcher.service';

@Injectable({
    providedIn: ControlModule,
})
export default class MockHTMLFetcher implements HTMLFetcher{

    async fetch(url: string): Promise<HTMLDocument> {
        const doc: HTMLDocument = new DOMParser().parseFromString(MockHTMLFetcher.HTML, 'text/html');
        return doc;
    }

    private static readonly HTML: string = `<!DOCTYPE html>
    <html class="no-js wf-roboto-n4-active wf-roboto-n3-active wf-roboto-n5-active wf-roboto-i4-active wf-roboto-i3-active wf-roboto-i1-active wf-roboto-n1-active wf-active" id="ng-app" ng-app="HelixApp" ng-strict-di=""><!--<![endif]--><head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style><title>Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 by Stronger E-sports</title><!-- base href="https://battlefy.com/" --><meta http-equiv="CACHE-CONTROL" content="NO-CACHE"><meta http-equiv="expires" content="0"><meta name="description" content="🏆 Torneo de League of Legends 5v5 organizado por Stronger Esport, en colaboracion de LoPColombia con objetivo de..."><meta charset="utf-8"><meta name="author" content="Battlefy"><meta name="keywords" content="esports, league of legends, dota 2, competitive online gaming, hearthstone, heroes of the storm, call of duty"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="fragment" content="!"><meta property="og:title" content="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 by Stronger E-sports"><meta property="og:url" content="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb59d"><meta property="og:type" content="website"><meta property="og:description" content="🏆 Torneo de League of Legends 5v5 organizado por Stronger Esport, en colaboracion de LoPColombia con objetivo de..."><meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1586842972552.png?alt=media&amp;token=5c00d543-3484-4eb8-96af-f17d05ada8d4"><meta name="google-site-verification" content="1wOPdmS-9z4b6zRwd85qY9XPXA_K0UX2aTLJrx8v36g"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@battlefy"><meta name="twitter:title" content="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 by Stronger E-sports"><meta name="twitter:description" content="🏆 Torneo de League of Legends 5v5 organizado por Stronger Esport, en colaboracion de LoPColombia con objetivo de..."><meta name="twitter:creator" content="@battlefy"><meta name="twitter:image:src" content="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1586842972552.png?alt=media&amp;token=5c00d543-3484-4eb8-96af-f17d05ada8d4"><meta name="prerender-status-code" content="200"><!-- Fonts --><link href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/material-icons.css" rel="stylesheet"><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/font-awesome.css"><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/toaster.css"><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/bootstrap-slider.css"><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-carousel.css"><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/daterangepicker.css"><!-- start Mixpanel --><script type="text/javascript" async="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/nuvlth23"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/sdk.js" async="" crossorigin="anonymous"></script><script type="text/javascript" async="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/linkid.js"></script><script async="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/bfltcs.js"></script><script type="text/javascript" id="www-widgetapi-script" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/www-widgetapi.js" async=""></script><script id="facebook-jssdk" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/sdk_002.js"></script><script type="text/javascript" async="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/mixpanel-2-latest.js"></script><script type="text/javascript">(function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
        0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
        for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
        MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
        mixpanel.init("e08747cbb3f8a2e553dd289d19c3a435");</script><!-- end Mixpanel --><!-- start Intercom.io --><script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/nuvlth23';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script><!-- end Intercom.io --><!--BEGIN QUALTRICS WEBSITE FEEDBACK SNIPPET--><link rel="stylesheet" href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/css.css" media="all"><script type="text/javascript">(function(){var g=function(e,h,f,g){
            this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
            this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
            this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
            this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g;document.body&&document.body.appendChild(a)}};
            this.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()})}};
            try{(new g(100,"r","QSI_S_ZN_9MgUKkF6ighTgnH","https://zn9mgukkf6ightgnh-battlefyinc.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_9MgUKkF6ighTgnH")).start()}catch(i){}})();</script><link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAgAElEQVR4nO1dd3xT5d4POBA6crLTJG3SNp1pm7ZJV7rSJs08Jx00pSvJOcWBr+gr1z3QcK8oqCgOEAS8guLAgaKi4kJFUS5DNmU0zSjifMEJCjzvH2m09rbNc5KTtEW+n0/+a8/ze37P+u0fjTaOIJVKJ4ni45nCyUxRShw7XYZw8os5CZWt4ozps2XFC26VKe8VxMWxR5vO8YBMBiMXT86+elSJkEqlkxAEQTgxMfy0WFaWgiOo0PCS0KYkqW16imzWDdkF98zPUy1bqqhdu6bc+PHrldgX76kbD36qsfp26Nu+P2DsPHnEbAdeDAefaK2eKm6iblQnNMYBaLQJBUxu2b1y1Ypt+tZvsMSUtogOyOFwYiUIIpEjnIJavsjYmpR52azMgjnz5eXLHy+qfXVNuXHTBnX9/s+1Lcd2GdpPDFzQPgsBfBYC+DACeDECeDEceDAcuFEc9KIO4EIdoMdsB16MAB9rph4pYnJVEZ3MOAag0SaUs4U1i5TqFw6YOn45ZpkOPtVYfbzYWC5lgwgnM0XVXEGdIznrqjm5JY+uLtG9t6G6Yd/n2pZjB4ydJ12oA7hRHHgxAvRZuvoXdvCC+hf1COTPg+Hgk9qpvfksVhFlEznHUMTkqh5T1rzYbe485cMI4EIdwIcRYGFB5TOUDFDAZisfU9a8+Hmd9ehhs+20DyP+XFzMv7hkFxZ28T+ra+lTMgTllEzkHEN6HCtzXp7q8X2mzp99GAF6zI4/eOfFCNAqzpge9iByhFOwSdvsPmrp6l9oahd52MVHcbBV1/JVKZuvDp9V5xZE8fHMq9Pkt2/VtX4VOPEDeddjdoC9xo6fcxjcvLAG4sXGctdVmLf6MCIqix74uVEc7NS3fqfmiAwU8eycgY6XhL1RZdnh7b95h+KfF8PBS+XGT0Ui0eSQB3I6nRPvlpct77NEd/F7UQfYZ+r82ShMbqaQb+MeYjo9+f788n8fNNl/82D4iDw8aiHALdmK+8IaEBVIpvWg9tPRuvL9V5cd9KKOs10psmsp4ts5AVOCeOrG2qbDfZa/vvMj8VAnkDSEPKAEQSQf1Ta53OjIO43qxfdiOLhNplzgpDknUsi/cQvxlCkJc3PLlhwy2X53Bzn1A2/QzRqrTzxlSkJIgwIabcI8uWpFX5TffR9GgEUK9QsCgWAKxXwcl6jiJurerK7f5cMI0DPMWz8cH5cVadYBGm1CSANreEnoIbPtVDSvfh9GgLUV6OecmBg+xXwcd5BIJJdck55/515Dx49eyFM/8OfFcBCy+VcYF8d6rQrb7o3i6XejONistfpkCFdOMS/HHaR0euryIs06D4b/l2oH83OZHWC/sfPXkHk5K1M+J5oqnwt1gIMm26+mBPFUink57lDLFxk31jYdDIf/HhQH66stu0J6RjMZjNztutZvh9MtI3L6MRxck55/ZwT4OW5gtVovmC6Vzdpn6vw5mHoX7NdnIcAdOUULQyJiYUHlM9HU+X0WAjxeVPuqVCqdFAG+jgsgCILMzVUt7UUdZ6k4eL0oDgwJ4kbShNTyRUa/4Bed0+9BcbBJM9WTGh8vjQBfxwUETGbik8XaN/02/PB56kIdYKuu9dskOj2FFCEikWjy82XGTdES/FyoAxwy2X81CZNbIsTbMY8CNlv5RpVlB5Xylg8jwBMlmvVqtfpCUsS0STKvcKOOs9FS+7wYAZyy0kcixNsxjzpBomWzptlLtbDtwwhweWrODaSI4cfGcj5QNx0KV/ggs/ivlJv/I4yLY0WIv2MaLWJp1x5jxwmq+d1jtoMDxs5f5Sx+MSmCZmbIZ0fz6t9r6PixnC2siRB/xyycNNrEGdLcmw+Z7L/1RsC87sZw8FZV/V4ejxcDTZQEQSSf11mPRkvt81kIcEOm4p7IsXlsQiaTXXxLtuK+QERUJHjbZyHA3Xmqx0kRdrtM+YAvSmqfF8PB2nJ0y9/t6hcIBFPm5qqWerDgXryhrnXYv+1FHYCUUJ3D4Obt1Lcdj9SOHPhzoQ5w0Gj7tZIl1ESQ12MODAaD/mB+1dNeDCet5rlQBzhisp/tNnX+DvO3W+tIqn//zCldFC1vnw8jwDx52fKQvVPjEEwmM/6RwqrnfBbyOn4v6gAHjJ2/zpOrVuzQt34f7JB6MQI8U2bYCK3+yWKZ2bsM7SeicfrdKA42a5q9EgSRRJblYwcIgiCLlTUvhWLgcaM42G/q/Lk5KdXeIJJ2wsQA9FkIcC0Zc/o9eapl0Xr7PSgOHMlZV0WQ32MKwrg41hKF+uVQTr4bxcEufdtxiyC1lUaj0RbkV6wMZprvMTtAt9F2spiTUAlFYA6Dm/dFlN5+L0aAtRXmzzkcTmxEuT5GgCAIsrxIs64vhMX3YDjYpp/2dZ0g0UKj+aN+N9Y0HQkWkeXBcLBBXb+fzWbHQRHpzCl+OBoOnx6zAxw0207V8EWmiHJ9jIDD4cQuUlSvCcW658VwsFlj9VXy/hSSa/gi0xGIeEwfRoD75ZWroIhMjY+XbtW1fB0Nvd+HEWCxUv2i03nux/b5pf3Kp0MxqPkwAmysbTpcwOSWDfzmLdmK+2AOqhvDQZNQaoMidIY09+ZonH6/xa/9x3wW/5xP5eLxeDGLFOoXQnnzfRgB3q5u2CVDOPkDvymVSie9XGHcHMxc7EIdYLt+2ndSOj01KKEMBoP+VlX93mjY/PswAsyTq1ZEjOtjBAqF4qI5spJHQxGofRgB1lWiWzLi2BmDv5vD4Obt0bf/CKX+leo/sFqtFwQltiExpa0HdZyJtMfPhTrATn3bcTnCKYgI18cInDTnxOuzCu9yh2Dk6bMQ4NVKdMtwJ9cmyZgBEwzaZ+kCV6fL74AieEFBxUpXFII9+iwEuCdPtYxSbkcRKQxGEkw61cy0vNt6MfwMWZ76MAI8W2bYmIwg4qG+C2i0CY8oqtcEV//s4AjqOAPtWHuwsOrpSEf7uFAH2GPs+CGXzlaQ5PuoA9BoE6q5SXVyFr84mODaIcmYccRs/52sKu3DCLCyuO4tbkwMb7hv82NjOR9rpnqCCepuFAfv1zYe5sfGcqAmeFu2ckGkdf8+jAAP5Fc+RZL3ow6JRHJJmzj90gqeQBvMXG0RpLbuNXT8SEaTChS4eLyo9tVgzrAabqIeJh2vz0KAB/OrnoaepEmY3BJJ9c+FOkC3qfOXIqZgXFXw4MbE8G6XKR+AyaNTsYS1O/Vt35NJlwss/sKC6meYTGZ8sDHukBUthLEl+DAC2MVZ/wM90XwWq+iAsfPXSN0Cvv4dPp70/pQ4dvqq0roNMKZqGcKVf6K1eshoUT1mv6Vunly1AiZOXyKRXLKuEtsOo/7t1Lcdz2YyZdCTlSCIZIvW+mUkbgFKslGjjAqeQPtuTWP3Zak51wf722QEEb9ZXb+LjKGnx+wvleOUlT4CG/aexWDkwKh/HgwHa8qNmxQKxUXQExaJRJPfqrbsiYQdwIPh4NUK83/Gi81/mjj90p36tuMzM+Szg/0tnU5nrC7TvUfGxOsyO0Av6gA3ZhXNI7NIXSmya2HUPx9GgOuzCu8iPfHlRZp1kYj/82IEmJ4im0WaoChDrVZfeE16/p1ejACzs5ULYP5+nrycVIGMQJGsm7KU86EMNAPweFHtq8E2Wo/ZDlxm+9mQSuXdnKW8l2pTcMjJCFGGKD6euSC/YuVRSxd4IL/yKYlEckmw/7kqPe9WNwpv6HGh/pM/K1M+h2xsfuIUtuAzbfD4TDfqAJs0ze6RVMlh0ZqUflkkYtEfyK98aixH+6THsTLXlBs++qbhUrCiWPs6zFPVJJTaDpnsJ2GFZpc/4PPMDGnuzU4njbQgrOEloS6z/SwMvxcXql8MiRGV3ER9j5lcsGGw66gHdZyp4YvHrMtXzREZPtJMPfJNw6VgTbnxY5iTU8RJqNqub/sGVt3rRR3gsNnxG4xAORzuzCl5CCZEz4sRoFOSdWVIg6TFsrJ2Gzp+okoVdKM4eLem4QCDwaCHOvFIokOSMWOPsePEsfrp4J3qhn1DOV4GQ0qnp76jbtwPW5ihF3WAbqPt13Dq8fJ4vJjXq9AdMOrfPmPHLyH7WUTx8cx3qhv2UVX3p89CgNsghKlog8fjxdyaU3R/D+o402chwGd1LX0FbLYy2P8xmcz4Z0v1H8A+k739xq/2pPTLw6G3gM1WHjDagj43HgwH6yrMW0MuoeN0Oic+Uax9g4p4wEAs2liz/AknM0VLlTUvBWoO7za2n9DyheZg/+d0OifelVf6GKyW5EYdYJ+x86fmpFR7uDRPT8n6X5hxfRgBZsvCPHB3yIoWUqEJhFWJIkLI6c+47bMQ/RnIjt9axNIumP91SLKv6YVMkHX7nV4nqMhudjqdE1cUa1+HUv9Qx5mwC2d2SrKupGID+DACOHOKHw6XAVRByxeaN2usvsBJ8mIEuCmrcD7M/xZxEqr2GDp+gLGSulEc7DV2/EBVCXYxnZ68RdfyVbCxe1EH+Exj/TLsIloVPIH2kNn2eziawB/SPzdRTwUTwgGg0SbgydlX7zV2/uTpl218FgI8VFj5LIyuL6bTk99RN+6HsZD2L/4JKuvvo8LkZhiZzIsRYFmx5rWw1W0Jgki21rV+E45PoBd1gI9rp/ZC+6IjBB6PFzNHVvLowPIqPowAL5WbP4WhTSAQTFlRrHkdKvgSxcEuffv/6QWJ9VTOYY6s5NE+SxfUBnCkZl8T9oB+jxO6LRyfQKCgIwXzDxliOj35yZK69d4BSZceDAcba5sOS2OZ2TDfmJUpn+OFyN7xYDj4Qt/6nY6XhFE5Bw6HE/tWtWVPsOyfQO5/Hp1dSMnAjyqqnw9HDqBsN4aIIiZX9bbasmeg4aQXdYDd+vbjA2PrRwIqkEyDsfR5MBxs07V+peEloZGYR7e5M2hdJg+Gg9crsS9I5f6PhJkZ8tmhmoR7zHbQbbSdHK2Q7waRtHObrvWrgYaaHrMduDD8TIckYwbMN9JiWVmbNc1eD0TWzTbdtK8reAJtJOZypTT3Jph16LMQ4F85pYspG1jHS8JCtQZ6MBy8VV2/GzoViSIoFIqLrk3Pdx40204NFpq8GAFmy4oeBDQQVEBiMpnxq0v17wezhQQ6lVTxhLWRmI/Var1gZUnd23DqH37GlJBCXSHNjDh2xm5DW9DAg+He/0cU1WsoIwYCwrg41oP5lU+70f8un+rDCPDv4rq3YGMRZmcrFwRjugfDwRZdy5ewz0kogBXGe1EH+KzOelQ0mSWkbHAEQZAPahsPh2IS7rMQYGZa3m2UERMEKfHxac+U6t8fKtXag+Hgw9qpR2BrDeoFifXB3n0PhoP/1E07Fuk6Ro2ilA6Y9jtejABPleo2UB5q92Sx9k2ywSE9Zjs4bLadjlbCZxmbX/1eTcOBoU5sb3/BKVjLWBKdnrKxtunwSNpPQOCr5YuMkZ7bPXmqZTCCuA8jwNVpubdTTsCNmYq7yWoCvagDbK2b9s1wSQ1UokUs7dqha/t2KK9cfwwimCHNvRnmWxKJ5JIVxZrXRrr6A9d+GZtfHem5MZnM+Leq63cHU8UD6l8hk1dKORH1opR2srYAD4aDteWmLTAWtlAhlUonXZdZOPew2f6be5ir2t8Pr2q1TCa7GOabV6Xn3Rrs5G+tm3asMkqWzRKOoKLbZPsNxv6wvtqyizL1byAULF5Jt4mcSbjPQmEjwiHAiYnhP6qoft47Qq18bz9TEqdMEcB8s4wn1Ow1dgwr8Ebz5Afwj8x8J4xHts9CgLm5ZUsiQoR4ypSETzXNXjImYR9GgFmZBXMiQY8M4eSvrUA/HynNuhd1gJ2Gtu9VnIQqmG/yYmO566ssO4cL7ggIfJHS84eCWq2+8Jkyw0YY+asXdQAsUvWUZTLZxav7pWvYDeDFcNAQgUbEdYJEyydaq2ckWnrMduBB8bOwkTdOmnPiPXmqZcN9M6Dnl7JFaqrnMxJS4+Ol2/XTvgumggfkLTGdnhwxYmbLguvEfy6AA3SbO0+VMriUtnCdnuJvlBBMJQ30wYWNs28SSm0uzDFkjl1A2o/myQ9galK6A9b7t6qkbgPZ0HJSaBFLu2AFQX/4d8vXUNUoICAQCKbckl10H0yjBDfq1/dhT4O/5d1U11Bzc2M42GVo/55qrx4s7i+oXAVl/sWIyHdSKWTySruNtpMwLcncGA7eqW7YR0X2j3AyU7REoX55cLPj4W6eg2bbKdi0M4VCcdFDhZXPDqXiulEc7NC1fRsJxw4MEARB3qtpOADj/Ttksv8W8aLa/NhYzieQgqAXI8CqUt0GJ418zPtA9DdK2A4bl+glGQdnF2f9z1C9D9woDvYYOk6M1smn0Wg0FSeh6qDJHlT9c6M4eFfdeJBOpzMiSpDVar3geZX+Q9hyJPPk5cvDGQ8VJjd/pv0zbAtm8ddWolsQBEFgvp/FYORs1bV8NfiN7e0P4KQykicUzMosmANjfOtX/5ZGhah/5pQugiHqqKULXJuZ7wxlDLVafeGV0tybuk2dv8C2P3WhDrDX2PFDKUMAJXRKJJJLnijRrB98s/T2F6qempTuCIV2qqBQKC56odz4KYzM5cVw0CCSdkaFsDZJ5hWw8XCt4ozpZL9Pp9MZ8/PKl7lJNkL0YDiYlSmHtjlcnppz3eCT70ZxsM/Y+cM0cfqlZOmmGilx7PRdhvYfYNS/Hfq271Pi2OlRIayQySvtNnWOaBHsTyc7SzYINCOOnbF6GE/eSD8fRoDnVIaPYAVOOcIp2KFr+0u/w17UAQ6YbD9H7SQFQXNiGgGr/j1bqv+AdOOnUJE4ZYpgs8bqG0kQ7DE7wAGj7SSZdqQ8Hi9mTbnho6MQAY+Dr/49xo4TSkh7A4/Hi3m6rO7dgaqVC3WAQ2bbqXAzdqjEI5BlZPswAlybHtpTGxICb9NIgpkLdYAtupavyFilRJNZwm261m9DqaQFG89Po/kTOgY+Yf1ZuqcvT5XdGBpHqIcwLo61sXZq0MLP/tJv9tORDEQZEnfllT42UmaqPwm0sZtMu5dkBBGT7UkQCH6EDTdPi2VlbR2QVOEvy+I4OytTPmcspatXc5PqYAo/j1q4fZsk84pgvvK15aYtsO5XGs3v2Qv2tAze/YfNjt9g9XSZTHbxEkXt2gDd/oJMBLghW3HPWCtUdX1W4V2wwR8PF1Y9F3UCi5hc1f4RKoh5MQI8Wax9k8w3RfHxzPfUjQdhw876MALcn1/5JOzi+Ztd4n8YfHwYAe4rqFhJZpNGA1KpdJL/iQ3OBw+Gg2mSNCLqRArj4libNM3u4RbLhxHgvvzKJ8l8UyQSTV5bYf4MRsXsRR1gi7bly5R4ThrMt6V0euqnmmZvgF4fRoCHFdXPRztSGQZyhFOwx9DxkysID1yoA+w2tP+YFsvKijqRVqv1gtWl+veHEwR9/VcrmW8CGm3CimJN0KzXwA0DW13DarVesCC/YmXA4OPFCPC4suaVsVakQq1WX4gJk1veqLLsgHkGPRgO1laYP49ktNWIcMpKHxnOPu/vSZt9Hdlv/iundDFMCPa6Smw7rLnXIkhtPWK2/97TT9fKkrq3I24zJwk5wil4TFnzosvsOAvrbfVhBLg+U3H3qBFtTUzDhyPWhxEgFFPq5Wk5N4ykXgZy3mH73XNiYvgb1PX7PRgOvBgB1ldbdqUwGEnkZxsZCASCKVel593yhb71OzLGr0Dl72quoG7UiM9n8Yu6jbaTQ7ln3SgOYBdpIIzC5OaRToAPI8Cq0roNsILbdZmFc30YAbwYAd6raezOZDByyc80Mihk8kqfLtO/68FwQDbz2o3iYJOm2c2LjeWO2gQEcXHsD2ubXIMFwcAuDqUWgJzFLz4wzKbqMdvBQaPtZAVkSFYhk1e629B+wocRYJuu9aviQT12RgsIgiD/yCj45y592/FQ8y19GAGWKtRraaNpuwA02oShkkX8tYA6f1dy4bxyAyGczBQNV5/YhxHgUYX6BRi1TyqVTlpVqnvnWH0X2KVv/z8tXxy05k80UMETaF+pMH/mxQjSp/6vchDJyt+Rwg2ZhXMH2+57zA6w39h5MpQmEFKpdNK6CvPWwc9AoLEEbMJDwGN5yGQfdbcujea/LW/NLrp/n6nz53BL7/rVv46fchjcvNGeFw0VSKYN7oHj8ufd/5gex8ok+z1Ao01YWFC1erAVzGchwCOQFq9kBBFv7o8YnpE2+vb9Wr7I+Folts2LEZS0gg+UfoNpUxNxyBFOwQFj58nBG2CXof0EbALmYFydJr99oHrpMtvBflPHL0rIQI+5uWVLv66/FNwhK1o4miZefmwsZ7as6MFuo+0kbBFJmF+fhQB3yIoWjta8/gJRfDzzHXXj/oGCYKA1eajVqbR8obnHbP/TZGshwGJlzUswi1nG5lf3oPbTjynUL4/mCanhi0xvVll2+ig69QN/vajj7GjGKf4Xlij/dLAENsB23bTvQt0AKfHxaQGvYCDatZqbFFTfFYlEk1+uMG5+rQrbJoiLY4cydrig0+mM22XFD3SbO09Fos+Cu9/7F3bpNypxXWbh3IFvdi/qAJ9qrL5QXZRsNjtuoPHmOZX+Q5gOGp2SzCu26lq+JhOEQiVULGHt2n4JP6JtdpQ1r4zG/IZFoyilY+AT4Eb93alhTbVDYVl/arYHw0EbRHyecDJTtL66frchQdwU6pihgsFg0K/PKrxrr7Hjh0g01/jLBrAQ4PLUHNIm9ogii8HIGRjIQcUGuCZDPvtY/XTwYc3UHphy7TdlKedfKc27JdTxQkUxJ6Hy5f7oqEi22OtFHaDP0gW+0LUeH60bbljweLyY9dX1uwO3ABUbQMNLQr+0dIFbshX3BftbBYtXcmu24n5SDZHCBJvNjvtHZqFzt6HjRCRPvRvFgc9CgG26aV/PzS1b0m8HGTORS39goO5OxQZIiYtL36Jr+aooSFq3RCK5pCtFdq1wMlMU6lhkUcIRVKwpN24K15o33C/QOs6D+otYXpOef2fUQr5DxYxU2Y0BTYCKDcBgMOh35pQ8FCxgo5DJK6WsGmYQcDic2JlpebftDMOGP9LPhTpA4ClZW2H+vFOSeUVIfX5GA1XcRJ2rX3enYgM4nc6JwU61QqG4CKajBxWQs/jFz5YZNobiuYNZ+D6MAPuNHb+sKNa+phNIGiJS4iWSSKLTU7bWtX4TaIEW7gYYK1AoFBfNSJPduF3X9i3Vp74XdQAfRoCd+rbj8/NUy4qYXNVYC06FhkQiuWRdBbrVg+HnzAaQxjKzH1PWvOjub+1G5fvuwwiwWWP13SErfiDkfj5jDfPkZcv7LMS43wBqtfrCFrG0a7PW6iObojbSwgeExg3q+t2Xp+XcEI3SeVGFPTlzpg/zb4B3qhv2jccNkESnpzxSqH4u8JRR8b77LAQ4ZLb9vrpM916jSNox1uIRKYOKJaw9bLad9mA4eL+28bAoPp452jSRQVOS1LaxtunwSFXHyL7vewztPz5UWPlsDTdRP9byDyiHcDJT9Jm25Zi/iGLrN2PKYTECkhFEPF9evrwHdZwJ14HjDrzvWmvfnTklD4USFDNuIZPJLn5eZfy4z9IFtta1fjsedFhDgrjpA3XTwXDe+j/fdxy83f++SxBEMtpzGxXMyS159KilC+zQtR4fy0zgxsTw/pVTujgct22P2X/NH0EdZ54tM2xsTEq1n7PvOyzqRSntPowIOSQsGlBzRIY3q+t39YXowPE7ZghwwGg7uUihfkHNERlGLTtnrEGOcAoOmDpP7Td2/jomghYHgMlkxs/KLJizz9D5UyghWm4UB32Y3zEzX656oozNrx5LKeVjAqL4eOYmTbP7iNl+tmCMxOHTaH6P4XNlhg/Ihmj94ZjBcLCxpunQ9VmFd0XL/DwuAWhgwhPF2je8GA4qWVGuWjEERCLR5CuluTftNLR/T8ZtG3jfXagdvFqJbiGSM2eOF61m1DErUz7ny/ouQHXPPLKQIZz8f5do3yDjwHENeN+fLNa+iQok06iodPq3gk4gaThq6QL1opT20RhfJpNdbE/OnPmfutZjsOqdG/Xr79t1bd/Oz1c9oeIkVI1bx8xoIyOOnXHAaDvZlSK7djTGXqRQv+BGg5/6wPvuxXDwkWZqz43ZirtlTLgOoucxAng8Xsy76saDZCp3hQun0zmxWZJGBDKCgtUwDARevFaFbe9KkV1LaYu186DRlirVa+/Lr1gZjbEETGbi/fnl/+5FHWdHcuC4+u3zh8y200+V6jZgwuQWJpMZHw0a/3a4JkM+e1WJbkOkx9Hyxea31ZY9I5363n6P3B5jxw9LlDUvqTkiQzQDSP+W0PCS0OdUho8iVb6UTqczbpYp7+022k4OZ8oNOGa2aFu+nJtTuvhv5ZgZbSQjiHh1me49MoUiYVHOFtYMl4Hjf9/xP2ISZmbIZyfR6SlU03AeQSCVSictUqpfCDVDeChwOJzYq9Pld+wdwpQbeN+PmG2nX1SZPmkRS7vGWzzCOQdnTvHDChavhIpv5dLZiqfL9O8O7g8YeN/3Gjp+WlKkflnLF5th8gjPIwpoFWdMD9caKJFILrksRfaPQBWt/37frV/OzVUtlbP4xVTRfR4UoZDJKw2n9r4slpm9oljzWsCoEzDc+PvjNBz43/SCO86/72MYiVPYgkaRtCOU/20SSm2bNf6o3IEZM69VoFtbkzIvi4RweR4UQyqVTjIkiJvIqIKiySzhfHn58sNm22kvRgAfRoBus+3UU6W6DahAMu284WacoZQtUsN60zS8JPSd6oZ9x+qng6OWLrBT3/b9AwWVq8rY/OrzhptxihwGNy/YdY0gCHKbTLmgB3WcOWbpAp9qmr03y5T3ZjEYOdGi8zwiBG5MDE8wQm1eFSehan2VZfvR+i7wtrp+9/QU2azzjplzCGw2O26oBWUymfE3y5T3fqFv/e55lXEjKkidNtbKt58HBQA02oTBglsRU6B6XLy/qEgAAAA3SURBVFnzymJlzYsVPIE2au3OzmN0IRKJJptEKVNnpuXdls9iFY02PecRZcgQrpyqVvLnEXn8P7GGZc1EGuJMAAAAAElFTkSuQmCC"><style type="text/css" data-fbcssmodules="css:fb.css.basecss:fb.css.dialog css:fb.css.iframewidget">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
    .fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
    .fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}</style></head><body><div id="ZN_9MgUKkF6ighTgnH"><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div><!--END WEBSITE FEEDBACK SNIPPET--><style>body {
            background-color: #151b27;
          }</style><link href="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/bundle.css" rel="stylesheet"><script>window.prerenderReady = false;
            window.fbAsyncInit = function() {
              FB.init({
                appId: (function(host) {
                  if (host === 'battlefy.com') {
                    return '228119950711466';
                  } else if (host === 'staging.battlefy.com' || host === 'cancun.battlefy.com' || host === 'barbados.battlefy.com') {
                    return '241545402702254';
                  }
                  return '236373013219493';
                  })(window.location.host),
                xfbml: true,
                status: true,
                cookie: true,
                version: 'v2.3'
              });
            };
    
            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "//connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));</script><bfy-auth-panel toggle="loginToggled" tab-state="tabState"></bfy-auth-panel><bfy-global-error-message><div class="bfy-global-error-message" ng-class="{'closed': openNotication === false, 'opened': openNotication === true}">
      <div class="global-message"> <span translate=""><span>Oops! Looks like something is wrong.</span></span> <!---->
        <!---->
        <a ng-click="stop()" class="close-btn">×</a>
      </div>
    </div>
    </bfy-global-error-message><bf-app class="firefox"><!----><bf-side-bar class="animated global" ng-class="[{'blurred' : $ctrl.blurredSidebar}, $ctrl.sideBarState]" ng-show="$ctrl.isSideBarOpen" ng-if="$ctrl.rendersSideBar" user="$ctrl.user" user-inventory-balance="$ctrl.userInventoryBalance" bf-store="$ctrl.bfStore" bf-following="$ctrl.bfFollowing" side-bar-organizations="$ctrl.sideBarOrganizations" side-bar-tournaments="$ctrl.sideBarTournaments" side-bar-state="$ctrl.sideBarState" on-logout="$ctrl.logout" on-login="$ctrl.login" on-register="$ctrl.register" on-toggle-side-bar="$ctrl.toggleSideBar" on-side-bar-state-change="$ctrl.onSideBarStateChange" on-organize="$ctrl.trackOrganize" on-find-tournaments="$ctrl.trackFindTournaments" on-open-store="$ctrl.openStore" on-close-global-player-guide-onboarding-tooltip="$ctrl.closeGlobalPlayerGuideOnboardingTooltip" toggle-global-player-guide="$ctrl.toggleGlobalPlayerGuide" show-global-player-guide="$ctrl.showGlobalPlayerGuide" show-global-player-guide-onboarding-tooltip="$ctrl.showGlobalPlayerGuideOnboardingTooltip"><div class="side-bar-pages">
    
      <!----><div class="animated side-bar-page global" ng-if="$ctrl.sideBarState === 'global'">
        <bf-side-bar-header class="global display-options show-options"><div class="header-title">
      <!---->
      <!----><i ng-if="!$ctrl.pageTitle" class="icon-sm-logo brand" ui-sref="home" ng-click="$ctrl.trackLogoClick()" href="/"></i><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-side-bar-header>
    
        <bf-global-bar user="$ctrl.user" user-level="$ctrl.userLevel" minimized="$ctrl.isSideBarMinimized" search-query="$ctrl.searchQuery" unread-notifications-count="$ctrl.unreadNotificationsCount" unread-team-invite-count="$ctrl.unreadTeamInviteCount" user-inventory-balance="$ctrl.userInventoryBalance" bf-store="$ctrl.bfStore" bf-following="$ctrl.bfFollowing" on-toggle-side-bar="$ctrl.onToggleSideBar" on-logout="$ctrl.onLogout" on-login="$ctrl.onLogin" on-search-clicked="$ctrl.onSearchClick" on-search-by-term="$ctrl.searchByTerm" on-search-query-change="$ctrl.onSearchQueryChange" on-minimized-search-icon-clicked="$ctrl.maximizeSideBar" on-register="$ctrl.onRegister" on-go-to-link="$ctrl.goToLink" on-go-to-notifications="$ctrl.transitionToNotifications" on-go-to-org="$ctrl.goToOrg" on-open-store="$ctrl.onOpenStore" on-organize="$ctrl.onOrganize" on-find-tournaments="$ctrl.onFindTournaments" toggle-global-player-guide="$ctrl.toggleGlobalPlayerGuide" show-global-player-guide="$ctrl.showGlobalPlayerGuide" show-global-player-guide-onboarding-tooltip="$ctrl.showGlobalPlayerGuideOnboardingTooltip" on-close-global-player-guide-onboarding-tooltip="$ctrl.onCloseGlobalPlayerGuideOnboardingTooltip"><div class="cta-container">
      <div class="display-options show-options">
          <div class="side-bar-search">
            <bf-search-input class="full-width" placeholder="Search everything" search-callback="$ctrl.onSearchQueryChange" clear-callback="$ctrl.onSearchQueryChange" ng-keydown="$ctrl.onSearchByTerm" debounce="0"><div class="search-box relative clearable" flex="" row="" layout="start center" ng-class="{clearable: $ctrl.clearCallback}">
      <i class="material-icons mi-search text-gray text-18px position-absolute"></i>
      <input type="text" class="search-input bg-gray-500 pr-10 border-rounded border border-navy-400 ng-pristine ng-untouched ng-valid ng-empty" name="search" placeholder="Search everything" ng-keydown="$ctrl.ngKeydown($event)" ng-model="$ctrl.searchQuery" ng-click="$ctrl.clickCallback($event)" ng-change="$ctrl.searchCallback($ctrl.searchQuery)" ng-model-options="{ debounce: $ctrl.debounce }">
      <!---->
    </div>
    </bf-search-input>
            <!----><div ng-if="$ctrl.showImprovedSearch" class="improved-search" translate=""><span>NEW</span></div><!---->
        </div>
    
        <a class="side-bar-list-item find-tournaments" ui-sref="landing" ui-sref-active="active" ng-click="$ctrl.onGoToLink(); $ctrl.onFindTournaments();" href="https://battlefy.com/">
          <bf-nav-icon><div class="icon-container" ng-transclude="">
            <i class="material-icons mi-home"></i>
          </div>
    </bf-nav-icon>
    
          <span class="side-bar-icon-text" translate=""><span>Home</span></span>
        </a>
        <!---->
    
        <!---->
    
        <a class="side-bar-list-item browse-tournaments" ui-sref="browse" ui-sref-active="active" href="https://battlefy.com/browse">
          <bf-nav-icon><div class="icon-container" ng-transclude="">
            <i class="fa fa-trophy" aria-hidden="true"></i>
          </div>
    </bf-nav-icon>
    
          <span class="side-bar-icon-text" translate=""><span>Browse Tournaments</span></span>
        </a>
    
        <!----><a class="side-bar-list-item" ng-href="joined-tournaments" ng-click="$ctrl.trackClick('joined-tournaments')" ng-if="$ctrl.user" href="https://battlefy.com/joined-tournaments">
          <bf-nav-icon name="'Organize Tournaments' | translate"><div class="icon-container" ng-transclude="">
            <i class="material-icons">date_range</i>
          </div>
    </bf-nav-icon>
    
          <span class="side-bar-icon-text" translate=""><span>Joined Tournaments</span></span>
        </a><!---->
    
        <!----><a e2e="sidebar-organize" class="side-bar-list-item" ng-click="$ctrl.onGoToOrg(); $ctrl.onOrganize();" ng-if="$ctrl.user">
          <bf-nav-icon><div class="icon-container" ng-transclude="">
            <i class="material-icons">build</i>
          </div>
    </bf-nav-icon>
          <span class="side-bar-icon-text" translate=""><span>Organize Tournaments</span></span>
          <i class="material-icons mi-keyboard_arrow_right side-bar-item-nav"></i>
        </a><!---->
    
        <!---->
    
        <a class="side-bar-list-item armoury-icon last-item" ng-click="$ctrl.onOpenStore({type: 'Sidebar'})">
          <bf-nav-icon><div class="icon-container" ng-transclude="">
            <i class="material-icons security"></i>
          </div>
    </bf-nav-icon>
    
          <!----><bf-badge ng-if="$ctrl.bfStore.unopenedCrateCount" count="$ctrl.bfStore.unopenedCrateCount"><div class="badge-container pulse" ng-class="$ctrl.size">
      <span class="badge-text">1</span>
    </div>
    </bf-badge><!---->
    
          <span class="side-bar-icon-text" translate=""><span>Armoury</span></span>
        </a>
    
        <hr class="divider">
      </div>
      <div class="avatar-container display-options hide-options">
        <bf-plain-avatar equipment="$ctrl.user.equipment"><!----><div class="hover-avatar" ng-if="!ctrl.equipment">
      <div class="wrapper sticker-boarder">
        <img class="face" ng-src="https://cdn.battlefy.com/helix/images/store/kissy-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/kissy-face.png">
        <img class="body">
        <img class="head">
      </div>
    </div><!---->
    <!---->
    </bf-plain-avatar>
        <div flex="" layout="center center">
          <a type="button" class="btn customize mt-15" ng-click="$ctrl.openEquip();" translate=""><span>Customize</span></a>
        </div>
      </div>
    </div>
    
    <!---->
    
    <!----><div class="gpg-options-container animated" ng-if="$ctrl.user" ng-class="{'is-gpg-open': $ctrl.showGlobalPlayerGuide}" style="">
      <a class="side-bar-list-item language-dropdown-item">
        <bf-language-dropdown class="full-width" user="$ctrl.user"><select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" ng-options="lang.locale as lang.name for lang in $ctrl.locales | orderBy: 'name'" ng-change="$ctrl.selectLang($ctrl.selectedLang)" ng-model="$ctrl.selectedLang"><option value="" disabled="disabled" translate=""><span>Select A Language</span></option><option label="Bahasa Indonesia" value="string:id">Bahasa Indonesia</option><option label="Deutsch" value="string:de_DE">Deutsch</option><option label="English" value="string:en" selected="selected">English</option><option label="Español" value="string:es_MX">Español</option><option label="Français" value="string:fr_FR">Français</option><option label="Italiano" value="string:it_IT">Italiano</option><option label="język polski" value="string:pl_PL">język polski</option><option label="Português" value="string:pt_BR">Português</option><option label="Pусский" value="string:ru_RU">Pусский</option><option label="tiếng Việt" value="string:vi_VN">tiếng Việt</option><option label="ไทย" value="string:th">ไทย</option><option label="中文" value="string:zh_TW">中文</option><option label="日本語" value="string:ja_JA">日本語</option><option label="한국어" value="string:ko">한국어</option></select>
    </bf-language-dropdown>
      </a>
      <!----><bf-gpg-notifications-panel ng-if="!$ctrl.isMobile &amp;&amp; $ctrl.user" equipment="$ctrl.user.equipment" user="$ctrl.user" show-global-player-guide="$ctrl.showGlobalPlayerGuide" toggle-global-player-guide="$ctrl.toggleGlobalPlayerGuide"><div class="gpg-container" ng-click="$ctrl.toggleGlobalPlayerGuide(!$ctrl.showGlobalPlayerGuide)">
      <div class="gpg-title  hidden-mobile" flex="" layout="center center">
        <!----><p ng-if="$ctrl.unhandledNotifications.length === 0" translate=""><span>MY TOURNAMENTS</span></p><!---->
        <!---->
      </div>
    
      <div class="gpg-mobile-title hidden-desktop no-notifications">
        <!---->
      </div>
      <div class="gpg-animation-container">
        <div class="gpg-video-wrapper" ng-class="{'critical': $ctrl.unhandledNotifications.length &gt; 0}">
          <!----><video ng-if="$ctrl.isDesktop" class="gpg-video video-fade-in hidden-mobile" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/gpg-bg-animation.mp4" autoplay="autoplay" loop="" muted="muted" width="250" height="125"></video><!---->
          <!----><video ng-if="$ctrl.isDesktop" class="gpg-video  hidden-mobile" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/gpg-bg-animation-critical.mp4" autoplay="autoplay" loop="" muted="muted" width="250" height="125"></video><!---->
        </div>
        <div flex="" layout="start center" class="gpg-user">
          <div class="gpg-avatar-container">
            <bf-gpg-user-avatar equipment="$ctrl.user.equipment"><!----><div class="user-avatar" ng-if="$ctrl.equipment">
      <div class="wrapper sticker-boarder">
        <img class="face" ng-src="https://cdn.battlefy.com/helix/images/store/kissy-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/kissy-face.png">
        <img class="body">
        <img class="head">
      </div>
    </div><!---->
    
    <!---->
    </bf-gpg-user-avatar>
          </div>
          <p class="mb-0 ml-15 gpg-username hidden-mobile">Ajoscram</p>
          <i class="ml-30 material-icons hidden-mobile">chevron_right</i>
          <!---->
          <!----><i class="material-icons hidden-desktop" ng-if="!$ctrl.showGlobalPlayerGuide">expand_more</i><!---->
        </div>
      </div>
    </div>
    </bf-gpg-notifications-panel><!---->
      <!----><bf-global-bar-user-options ng-if="$ctrl.user" on-go-to-link="$ctrl.onGoToLink" bf-store="$ctrl.bfStore" show-global-player-guide="$ctrl.showGlobalPlayerGuide" toggle-global-player-guide="$ctrl.toggleGlobalPlayerGuide" unread-team-invite-count="$ctrl.unreadTeamInviteCount" on-logout="$ctrl.onLogout" user="$ctrl.user"><div class="info-drawer hide-drawer" ng-class="{'hide-drawer': $ctrl.isDesktop &amp;&amp; !$ctrl.showGlobalPlayerGuide, 'show-drawer': $ctrl.isMobile }">
    
      <bf-wallet class="pl-10 pr-10 mt-10 mb-10 border-left border-4px border-transparent" user="$ctrl.user" bf-store="$ctrl.bfStore" ng-click="$ctrl.bfStore.promptWalletTopUp();"><div class="wallet" flex="" row="" layout="space-between center">
      <div grow="" flex="" row="" layout="start center">
        <div class="ml-5 mr-15 icon-container">
          <i class="material-icons mi-account-balance-wallet text-gray"></i>
        </div>
        <p class="text-gray mr-5" translate=""><span>Wallet</span></p>
      </div>
      <div class="mr-25 balance" flex="" row="" layout="end center" ng-class="{'pulse-infinite': $ctrl.balance !== $ctrl.wallet.balance}">
        <p class="animated text-highlight-300" translate=""><span>0 coins</span></p>
      </div>
    </div>
    </bf-wallet>
    
      <a class="side-bar-list-item settings mt-5" ng-click="$ctrl.openLink()" ui-sref="user-profile({slug: $ctrl.user.slug})" ui-sref-active="active" href="https://battlefy.com/users/miku-loarde">
        <bf-nav-icon><div class="icon-container" ng-transclude="">
          <i class="material-icons mi-profile"></i>
        </div>
    </bf-nav-icon>
    
        <span class="side-bar-icon-text" translate=""><span>Profile</span></span>
      </a>
    
      <a class="side-bar-list-item settings" ui-sref="settings" ui-sref-active="active" ng-click="$ctrl.openLink();" href="https://battlefy.com/settings">
        <bf-nav-icon><div class="icon-container" ng-transclude="">
          <i class="material-icons mi-cog"></i>
        </div>
    </bf-nav-icon>
    
        <span class="side-bar-icon-text" translate=""><span>Settings</span></span>
      </a>
    
      <a class="side-bar-list-item" ng-click="$ctrl.onLogout()">
        <bf-nav-icon><div class="icon-container" ng-transclude="">
          <i class="material-icons mi-exit-to-app"></i>
        </div>
    </bf-nav-icon>
    
        <span class="side-bar-icon-text" translate=""><span>Logout</span></span>
      </a>
    </div>
    </bf-global-bar-user-options><!---->
    </div><!---->
    </bf-global-bar>
      </div><!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    </div>
    </bf-side-bar><!---->
    
    <!---->
    
    <!---->
    
    <bf-company-nag-bar on-close-nag-bar="$ctrl.closeNagBar" show-company-nag="$ctrl.showCompanyNag"><div class="info-bar animated fade-in font-500 text-14px fixed-trl text-center gutter-20 bg-secondary text-white ng-hide" ng-show="$ctrl.showCompanyNag">
      <div class="info-content relative" flex="" row="" layout="center center">
        <div translate=""><span>Our </span><a ng-click="$ctrl.openTermsOfService()">Terms of Service</a><span> and </span><a ng-click="$ctrl.openTermsOfService()">Privacy Policy</a><span>
     has been updated effective May 25, 2018. By continuing to use the site 
    after this date, you are agreeing to the updated policies. If you wish 
    to withdraw, please follow instructions on your </span><a ui-sref="settings" href="https://battlefy.com/settings">account settings</a><span> page.</span></div>
        <a class="relative close-btn pt-5 text-underline" ng-click="$ctrl.closeBar()">
          <i class="material-icons mi-clear"></i>
        </a>
      </div>
    </div>
    </bf-company-nag-bar>
    
    <!---->
    
    <main class="main side-bar-open" ng-class="{'side-bar-open' : $ctrl.isSideBarOpen, 'hide-sidebar' : !$ctrl.rendersSideBar, 'info-bar-shown': $ctrl.showNotificationNag, 'user-preferences-shown': $ctrl.showUserPreferences()}">
      <!----><div ui-view="">
              <div id="tournament" class="tournament-layout">
                <!----><div ui-view=""><bf-tournament set-top-bar-title="$ctrl.setTopBarTitle" preview="preview" permissions="permissions" server-utc-time="serverUtcTime" ng-class="lookAndFeelClass" tournament="tournament" teams-count="teamsCount" pending-teams-count="pendingTeamsCount" free-agents="freeAgents" user="$ctrl.user" user-players="userPlayers" wizard="$ctrl.tournamentCreateWizard" on-open-store="$ctrl.openStore" bf-store="$ctrl.bfStore" pending-team="$ctrl.pendingTeam" joined-team="$ctrl.joinedTeam" update-pending-team="$ctrl.updatePendingTeam" update-joined-team="$ctrl.updateJoinedTeam" paid-for-tournament="paidForTournament" delete-pending-team="$ctrl.deletePendingTeam" bf-following="$ctrl.bfFollowing" set-custom-join-flow-state="$ctrl.setCustomJoinFlowState" custom-join-flow-state="$ctrl.customJoinFlowState" top-bar-buttons="$ctrl.topBarButtons" set-top-bar-buttons="$ctrl.setTopBarButtons" feedback-options="$ctrl.feedbackOptions" reset-current-tournament-feedback="$ctrl.resetCurrentTournamentFeedback" feedback-update-for-tournament-id="$ctrl.feedbackUpdateForTournamentId" feedback-submit-for-tournament-id="$ctrl.feedbackSubmitForTournamentId" feedback-delete-for-tournament-id="$ctrl.feedbackDeleteForTournamentId" feedback-current-tournament="$ctrl.feedbackCurrentTournament" feedback-selected-positive="$ctrl.feedbackSelectedPositive" feedback-selected-option="$ctrl.feedbackSelectedOption" feedback-updated-comment="$ctrl.feedbackUpdatedComment" set-top-bar-tournament-info="$ctrl.setTopBarTournamentInfo" show-notification-settings-nag="$ctrl.showNotificationSettingsNag" close-notification-settings-nag="$ctrl.closeNotificationSettingsNag" is-after-join="isAfterJoin" edit-feedback-mode="$ctrl.editFeedbackMode" cancel-edit-feedback-mode="$ctrl.cancelEditFeedbackMode" class="game-league-of-legends match-page"><div ng-show="$ctrl.editMenuShown" class="close-button ng-hide">
      <a class="close" ng-click="$ctrl.toggleEditMenu()"></a>
    </div>
    
    <bf-admin-menu ng-show="$ctrl.editMenuShown" list-items="$ctrl.menuListItems" on-select="$ctrl.onSelect" class="hidden-desktop ng-hide"><div class="admin-menu absolute-stretch mb-20 mr-20 mt-20 ml-20" flex="" column="" layout="space-between stretch" grow="">
      <div class="top-links mt-20 mb-10" grow="">
        <!----><div ng-repeat="item in $ctrl.listItems.topItems" class="top-link-section mb-40">
          <h2 class="link-title overflow-ellipsis text-white letter-spacing-2px mt-10 mb-10 text-20px font-600" ng-bind="item.title">EDIT</h2>
          <ul class="list-unstyled">
            <!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Setup</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Brackets</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Streams</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Publish</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!---->
          </ul>
        </div><!----><div ng-repeat="item in $ctrl.listItems.topItems" class="top-link-section mb-40">
          <h2 class="link-title overflow-ellipsis text-white letter-spacing-2px mt-10 mb-10 text-20px font-600" ng-bind="item.title">SHARE</h2>
          <ul class="list-unstyled">
            <!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Invite Players</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Embed Codes</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!---->
          </ul>
        </div><!----><div ng-repeat="item in $ctrl.listItems.topItems" class="top-link-section mb-40">
          <h2 class="link-title overflow-ellipsis text-white letter-spacing-2px mt-10 mb-10 text-20px font-600" ng-bind="item.title">MANAGE</h2>
          <ul class="list-unstyled">
            <!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="manage-tournament-participants" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Participants</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Email Participants</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="manage-tournament-seed-brackets" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Seed Brackets</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Match Dashboard</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!----><!----><li flex="" row="" layout="start center" ng-repeat="link in item.links" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" ng-if="!link.hidden" class="link-item cursor-pointer" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)">
              <!---->
              <h3 class="text-16px text-gray font-400">Activity Feed</h3>
              <!---->
              <!---->
              <!---->
            </li><!----><!---->
          </ul>
        </div><!---->
      </div>
    
      <div class="bottom-links mt-20">
        <hr class="divider">
        <ul class="list-unstyled mt-20">
          <!----><li flex="" row="" layout="space-between center" ng-repeat="link in $ctrl.listItems.bottomItems" ng-class="{selected: $ctrl.selectedItem.slug === link.slug, disabled: !link.enabled}" e2e="" ng-click="link.enabled &amp;&amp; $ctrl.onSelect(link)" class="cursor-pointer">
            <h4 class="text-gray text-16px font-400 full-width" grow="">Delete Tournament</h4>
            <!---->
            <div class="text-gray text-12px" flex="" row="" layout="end center" ng-bind-html="link.iconHtml"><i class="material-icons"></i></div>
          </li><!---->
        </ul>
      </div>
    </div>
    </bf-admin-menu>
    
    <bf-org-specific-nag organization-slug="$ctrl.tournament.organization.slug"><!----></bf-org-specific-nag>
    
    <bf-game-specific-nag game-slug="$ctrl.tournament.game.slug"><!----></bf-game-specific-nag>
    
    <div class="tournament-details">
      <div class="tournament-wrapper" ng-class="{
          'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize',
          'hs-app-ad-spacing': $ctrl.gameSlug === 'hearthstone'
        }">
        <div class="tournament-details-content tournament-header hidden-mobile" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
          <div class="tournament-fixed-size">
            <div class="tournament-title-bar" flex="" row="" layout="space-between end">
              <bf-org-title grow="" class="mt-20" permissions="$ctrl.permissions" organization="$ctrl.tournament.organization" bf-following="$ctrl.bfFollowing" user="$ctrl.user" page="'tournament_page'"><div flex="" row="" layout="start stretch">
      <!----><a ui-sref="organization.tournaments({orgSlug: $ctrl.organization.slug})" target="_self" ng-if="$ctrl.organization.logoUrl" href="https://battlefy.com/stronger-e-sports">
        <bf-icon class="mr-10 lg" title="$ctrl.organization.name" image-url="$ctrl.organization.logoUrl"><!----><bf-image class="icon-background" ratio="1/1" ng-if="$ctrl.imageUrl" image-url="$ctrl.imageUrl" style="padding-top: 100%;"><!----><div class="animated actual-image fade-in" role="img" alt="" ng-if="$ctrl.loaded" aria-label="" battlefy-background-image="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1577980608355.png?alt=media&amp;token=8dd00e72-fff5-4756-abea-4fa2be7b8cdd" style="background-image: url(&quot;https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1577980608355.png?alt=media&amp;token=8dd00e72-fff5-4756-abea-4fa2be7b8cdd&quot;); background-size: cover;"></div><!---->
    <img class="dummy-image" ng-src="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1577980608355.png?alt=media&amp;token=8dd00e72-fff5-4756-abea-4fa2be7b8cdd" bfy-on-load="$ctrl.onImageLoad($event)" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/user-imgs57faf55f215be5200c9667051577980608355.png">
    <div class="animated image-loader ng-hide" ng-show="!$ctrl.loaded" style="">
      <i class="bfy-icon-mini-logo"></i>
    </div>
    </bf-image><!---->
    
    <!---->
    </bf-icon>
      </a><!---->
      <div class="mw-100">
        <div flex="" row="" layout="start start" class="mw-100">
          <a ui-sref="organization.tournaments({orgSlug: $ctrl.organization.slug})" ng-click="$ctrl.trackOrgClick();" target="_self" class="org-title-container mw-100" href="https://battlefy.com/stronger-e-sports">
            <h2 class="org-title font-400 text-16px text-24px-desktop text-white" ng-bind="$ctrl.organization.name">Stronger E-sports</h2>
          </a>
          <!---->
        </div>
        <div flex="" row="" layout="start center">
          <button class="btn btn-secondary btn-xs btn-custom-width btn-follow text-10px position-relative" type="button" ng-class="{'btn-followed': $ctrl.doesFollow}" ng-click="$ctrl.toggleFollow($ctrl.organization._id)">
              <span class="hidden-on-hover" ng-bind="$ctrl.doesFollow ? $ctrl.followingText : $ctrl.followText" translate="">Follow</span>
              <span class="fade-in-up-on-hover absolute-left-right" translate=""><span>Unfollow?</span></span>
          </button>
          <span class="follow-count text-10px text-gray ml-10" translate=""><span>16430 Followers</span></span>
        </div>
      </div>
    </div>
    
    <button class="btn btn-sm mt-10 full-width sm-follow" type="button" translate="" ng-click="$ctrl.toggleFollow($ctrl.organization._id)"><span>Follow</span></button>
    </bf-org-title>
            </div>
          </div>
        </div>
    
        <div class="tournament-name hidden-mobile" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
          <div flex="" row="" layout="start center">
            <h2 e2e="tournament-page-tournament-name" class="font-400 text-28px" ng-bind="$ctrl.tournament.name">Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902</h2>
    
            <!---->
          </div>
        </div>
    
        <div class="position-relative">
        <div class="tournament-details-content tournament-nav" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
          <div class="tournament-fixed-size" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
            <div class="tournament-name mr-20 ml-20 mt-10 hidden-desktop" flex="" row="" layout="start center">
              <h2 e2e="tournament-page-tournament-name" class="font-400 text-28px" ng-bind="$ctrl.tournament.name">Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902</h2>
    
              <!---->
            </div>
    
            <div class="tournament-feedback-banner">
              <!----><bf-tournament-ratings-banner feedback-source="$ctrl.feedbackSource" feedback="$ctrl.feedbackCurrentTournament" on-click="$ctrl.showTournamentFeedbackPopover" show-ratings-banner="$ctrl.showRatingsBanner" ng-if="$ctrl.showFeedback || $ctrl.feedbackCurrentTournament._id" reset-current-tournament-feedback="$ctrl.resetCurrentTournamentFeedback" can-edit-feedback="$ctrl.canEditFeedback" edit-tournament-feedback-popover="$ctrl.editTournamentFeedbackPopover" edit-feedback-mode="$ctrl.editFeedbackMode"><div>
        <div class="tournament-ratings-banner-container-default ng-hide" ng-show="!$ctrl.hasGivenFeedback &amp;&amp; $ctrl.showRatingsBanner">
            <p translate=""><span>Enjoying this tournament?</span></p>
    
            <bf-tournament-feedback-thumb-buttons feedback-source="$ctrl.feedbackSource" feedback="$ctrl.feedback" on-click="$ctrl.onClick"><div ng-class="{'container': $ctrl.feedbackSource === 'playerguide'}" flex="" row="">
      <a ng-click="$ctrl.clickThumbs(true)" class="mr-20 feedback-icon positive-feedback-icon text-white" ng-class="{'feedback-nonselected': $ctrl.hasThumbsDown, 'feedback-given': $ctrl.feedback._id}">
        <i class="material-icons mi-thumb-up" ng-class="{'large-icon': $ctrl.feedbackSource === 'playerguide', 'mr-30': $ctrl.isPlayerGuide}">
          
        </i>
        Yes
      </a>
      <a ng-click="$ctrl.clickThumbs(false)" class="feedback-icon negative-feedback-icon text-white" ng-class="{'feedback-nonselected': $ctrl.hasThumbsUp, 'feedback-given': $ctrl.feedback._id}">
        <i class="material-icons mi-thumb-down" ng-class="{'large-icon': $ctrl.feedbackSource === 'playerguide'}">
          
        </i>
        No
      </a>
    </div>
    </bf-tournament-feedback-thumb-buttons>
    
            <div class="feedback-tooltip info-btn text-center font-500" data-title="Ratings help organizers improve your tournament experience. Rate it!" data-placement="top" bs-tooltip="">?</div>
        </div>
    
        <!---->
    
        <!---->
    </div></bf-tournament-ratings-banner><!---->
            </div>
    
            <div class="tournament-navigation" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
              <div class="bfy-nav-list" flex="" row="" layout="space-between center">
                <ul grow="" flex="" row="" layout="space-between center">
                  <li class="mr-20-desktop" ng-class="{ active: $ctrl.state.name === 'tournament.details.info' }">
                    <a class="list-link" ui-sref="tournament.details.info({
                        organizationSlug: $ctrl.tournament.organization.slug,
                        titleSlug: $ctrl.tournament.slug,
                        tournamentId: $ctrl.tournament._id
                      })" scroll-top="" translate="" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/info"><span>Overview</span></a>
                  </li>
    
                  <li class="mr-20-desktop" ng-class="{active: $ctrl.state.name === 'tournament.details.participants'}">
                    <a class="list-link" ui-sref="tournament.details.participants" scroll-top="" translate="" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/participants"><span>Participants</span></a>
                  </li>
    
                  <!----><li ng-if="!$ctrl.ffaMatches || $ctrl.ffaMatches.length === 0" class="mr-20-desktop hidden-desktop" ng-class="{ 'active': $ctrl.state.url === 'bracket-list'}">
                    <a class="list-link" ui-sref="tournament.details.bracketList" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/bracket-list">
                      <span translate=""><span>Brackets</span></span>
                      <span class="counter ng-hide" ng-class="{'pulse': $ctrl.tournament.newUserMatchIds.length &gt; 0 }" ng-bind="$ctrl.tournament.newUserMatchIds.length" ng-show="$ctrl.tournament.newUserMatchIds.length &gt; 0">0</span>
                    </a>
                  </li><!---->
    
                  <!---->
    
                  <li class="mr-20-desktop hidden-mobile" ng-class="{ 'active': $ctrl.isOnSomeStage() }">
                    <!-- if only 1 stage: link directly to it -->
                    <!----><a e2e="tournament-page-tab-bracket" class="list-link" ng-if="$ctrl.tournament.stages.length === 1" ui-sref="tournament.details.stage.bracket({stageId: $ctrl.tournament.stages[0]._id, round: ''})" translate="" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/bracket/"><span>Brackets</span></a><!---->
    
                    <!-- if only multiple stages or no stages: dropdown -->
                    <a e2e="tournament-page-tab-bracket" class="list-link ng-hide" bs-dropdown="" ng-show="$ctrl.tournament.stages.length &gt; 1 || $ctrl.tournament.stages.length === 0" translate=""><span>Brackets</span></a>
    
                    
                  </li>
    
                  <!----><li class="mr-20-desktop" ng-if="!$ctrl.tournament.features.liveStreams" ng-class="{active: $ctrl.state.name === 'tournament.details.media'}">
                    <a class="list-link" ui-sref="tournament.details.media" scroll-top="" translate="" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/media"><span>Media</span></a>
                  </li><!---->
    
                  <!---->
    
                  <!----><li class="mr-20-desktop hidden-mobile" ng-class="{ 'active': $ctrl.isOnSomeStageStats() }" ng-if="$ctrl.showStats">
    
                    <!-- if only 1 stage: link directly to it -->
                    <!----><a class="list-link" ng-repeat="stage in $ctrl.tournament.stages" ng-show="$ctrl.tournament.stages.length === 1" translate="" ui-sref="tournament.details.stage.stats({stageId: stage._id, round: ''})" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/stats"><span>Stats</span></a><!---->
    
                    <!-- if only multiple stages or no stages: dropdown -->
                    <a class="list-link ng-hide" bs-dropdown="" ng-show="$ctrl.tournament.stages.length &gt; 1 || $ctrl.tournament.stages.length === 0" translate=""><span>Stats</span></a>
                    
                  </li><!---->
    
                  <!----><li ng-if="!$ctrl.disablePlayerInteraction" class="mr-20-desktop hidden-mobile" ng-class="{ active: $ctrl.state.name === 'tournament.details.live.feed' }">
                    <a class="list-link" ui-sref="tournament.details.live.feed" scroll-top="" translate="" href="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/live"><span>Announcements</span></a>
                  </li><!---->
                </ul>
                <!-- <div class="hidden-mobile view-counts text-14px text-gray gutter-horizontal-10 cursor-pointer" flex row layout="space-between center" data-placement="bottom" data-title="{{ 'People viewing this tournament' | translate}}" bs-tooltip><i class="material-icons text-16px flash-slow infinite text-primary mi-person mr-5">&#xE7FD;</i> {{$ctrl.viewCount}}</div> -->
                <!----><bf-tournament-contact-info-button class="hidden-mobile" ng-if="!$ctrl.permissions.canAdmin" contact-info="$ctrl.tournament.contact" tournament="$ctrl.tournament"><button class="btn btn-sm btn-support" bs-tooltip="" ng-click="$ctrl.track()" data-trigger="click" data-placement="bottom-right" data-template="&lt;div class=&quot;tooltip in&quot;&gt;
      &lt;p translate&gt;Contact the Tournament Organizer&lt;/p&gt;
    
      &lt;p translate&gt;
        &lt;a
          href=&quot;{{$ctrl.formattedContactInfo.details}}&quot;
          ng-click=&quot;$ctrl.trackLinkClick()&quot;
          target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;&gt;Go to organizer's {{$ctrl.formattedContactInfo.type}} page.&lt;/a&gt;
      &lt;/p&gt;
    &lt;/div&gt;" data-html="true">
      <span translate=""><span>Contact</span></span>
    </button>
    </bf-tournament-contact-info-button><!---->
    
                <!---->
              </div>
            </div>
          </div>
        </div>
        </div>
        <div ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}" class="tournament-details-content tournament-body tournament-content infinite-scroll-container">
          <div class="tournament-fixed-size" ng-class="{'account-linking-minimize': $ctrl.customJoinFlowState === 'minimize'}">
            <!----><div ui-view="" class="tournament-routes"><div class="stage-view-container">
      <div id="stage-bracket-container">
        <!----><div ui-view=""><bf-match user="$ctrl.user" match="match" stage="stage" has-round-completed="hasRoundCompleted" participants="participants" current-user-player="currentUserPlayer" free-agents="freeAgents" tournament="tournament" permissions="permissions" bf-store="$ctrl.bfStore" on-open-store="$ctrl.onOpenStore" update-match="updateMatch" feedback-options="$ctrl.feedbackOptions" bf-following="$ctrl.bfFollowing" reset-current-tournament-feedback="$ctrl.resetCurrentTournamentFeedback" feedback-update-for-tournament-id="$ctrl.feedbackUpdateForTournamentId" feedback-submit-for-tournament-id="$ctrl.feedbackSubmitForTournamentId" feedback-delete-for-tournament-id="$ctrl.feedbackDeleteForTournamentId" feedback-current-tournament="$ctrl.feedbackCurrentTournament" feedback-selected-positive="$ctrl.feedbackSelectedPositive" feedback-selected-option="$ctrl.feedbackSelectedOption" feedback-updated-comment="$ctrl.feedbackUpdatedComment"><div class="match-page">
      <div id="bfy-match-menu" class="bfy-match-menu">
        <div class="hidden-lg">
          <div class="row">
            <div class="col-xs-6">
              <a id="close" ng-click="$ctrl.goPrevious()" translate=""><span>&lt; Back</span></a>
            </div>
            <div class="col-xs-6 text-right">
              <ul class="list-inline social-buttons">
                <li>
                  <a facebook-share="" picture="https://d33jl3tgfli0fm.cloudfront.net/helix/images/games/league-of-legends/icon.png" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" caption="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
                    <span class="social-icon"><i class="fa fa-facebook"></i></span>
                  </a>
                </li>
                <li>
                  <a twitter-share="" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
                    <span class="social-icon"><i class="fa fa-twitter"></i> </span>
                  </a>
                </li>
                <li>
                  <a reddit-share="" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" caption="{[ $ctrl.tournament.name }}" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
                    <span class="social-icon"><i class="fa fa-reddit"></i></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="visible-lg">
          <div class="row">
            <div class="col-sm-6">
              <a id="close" ng-click="$ctrl.goPrevious()" translate=""><span>&lt; Back</span></a>
            </div>
            <div class="col-sm-6 text-right">
              <bfy-social-share header-text="Share this match:" picture="https://d33jl3tgfli0fm.cloudfront.net/helix/images/games/league-of-legends/icon.png" share-title="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" share-link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d" caption="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902" user="$ctrl.user"><div class="bfy-social-share">
      <ul class="list-inline social-buttons">
        <li class="text-muted" translate=""><span>Share this match:</span></li>
        <li data-title="Copy URL" data-placement="bottom" bs-tooltip="">
          <a ngclipboard="" data-clipboard-text="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d" ng-click="trackCopyUrl()">
            <span class="social-icon"><i class="fa fa-link"></i></span>
          </a>
          <div class="copied-text ng-hide" ng-show="copied">
            Copied Url
          </div>
        </li>
        <li data-title="Facebook" data-placement="bottom" bs-tooltip="">
          <a facebook-share="" picture="https://d33jl3tgfli0fm.cloudfront.net/helix/images/games/league-of-legends/icon.png" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" caption="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
            <span class="social-icon"><i class="fa fa-facebook"></i></span>
          </a>
        </li>
        <li data-title="Twitter" data-placement="bottom" bs-tooltip="">
          <a twitter-share="" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
            <span class="social-icon"><i class="fa fa-twitter"></i> </span>
          </a>
        </li>
        <li data-title="Reddit" data-placement="bottom" bs-tooltip="">
          <a reddit-share="" name="Check out this Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902 match on Battlefy!" caption="Torneo Poros de Colombia | 5v5 | Server LAN | Lunes 19hs Col ID 3902" link="https://battlefy.com/stronger-e-sports/torneo-poros-de-colombia-5v5-server-lan-lunes-19hs-col-id-3902/5ec85a60690f90341de0a1ae/stage/5ed58f17c31dad4b86a15db2/match/5ed596ef25d1076888cbb58d">
            <span class="social-icon"><i class="fa fa-reddit"></i></span>
          </a>
        </li>
      </ul>
    </div>
    </bfy-social-share></div>
          </div>
        </div>
      </div>
    
      <div class="role-component" ng-switch="$ctrl.role">
        <!-- temporary hack to send role down, will be removed when each role component is refactored -->
        <!---->
    
        <!---->
    
        <!----><bf-match-viewer ng-switch-default="" match="$ctrl.match" stage="$ctrl.stage" tournament="$ctrl.tournament" bf-store="$ctrl.bfStore" on-open-store="$ctrl.onOpenStore"><div class="card">
      <bf-match-title class="mb-10" tournament="$ctrl.tournament" stage="$ctrl.stage" match="$ctrl.match"><!----><div flex="" column="" layout="center center" ng-if="$ctrl.stage.bracket.type !== 'ladder'">
      <div class="text-24px font-400 mb-60" ng-class="{'mb-60': !$ctrl.match.station}">
        <span translate="" translate-comment="Round 1 - Match 2"><span>Round</span></span> <span>2</span>
        <span translate="" translate-comment="Round 1 - Match 2"><span>Match</span></span> <span>34</span>
      </div>
      <!---->
    </div><!---->
    </bf-match-title>
      <bf-match-core-info tournament="$ctrl.tournament" stage="$ctrl.stage" match="$ctrl.match" report="false" role="'viewer'" bf-store="$ctrl.bfStore" on-open-store="$ctrl.onOpenStore"><!---->
    
    <div flex="" column="" layout="space-between center">
      <!----><div class="round-information-container" ng-if="$ctrl.currentRound &amp;&amp; $ctrl.currentRound.roundText">
        <h3 class="round-text-title" translate=""><span>Round Details</span></h3>
        <p class="round-text-container" ng-bind-html="$ctrl.currentRound.roundText"><p>19:00
     HS COL Los equipos tienen 15 minutos de tolerancia a partir del horario
     establecido (para hacer check in, entrar a sala y mandar partida) para 
    cada ronda.</p><p>El check in solo cuenta para el obtener el codigo. El horario es el de cada ronda.</p></p>
      </div><!---->
    </div>
    
    <!---->
    
    <!---->
    
    <!---->
    
    <div flex="" row="" layout="space-between center">
      <div class="avatar-container left-group text-gray">
        <bf-team-icon team="$ctrl.match.top.team" tournament="$ctrl.tournament" enable-avatar-preview="true" bf-store="$ctrl.bfStore" on-open-store="$ctrl.onOpenStore" animation-offset-small="0" animation-offset-large="0"><!---->
    
    <!----><bf-team-badge ng-if="$ctrl.tournament.type !== 'solo'" name="Venecos x100pre" avatar-url="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F5998ce68d5230a032ed31e58%2F1592171086350.jpg?alt=media&amp;token=cd24af75-4059-48be-8ba1-762489d772b1"><div class="team-avatar-container" ng-class="{ 'active': $ctrl.active }">
      <div class="team-avatar" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F5998ce68d5230a032ed31e58%2F1592171086350.jpg?alt=media&amp;token=cd24af75-4059-48be-8ba1-762489d772b1)"></div>
    </div>
    </bf-team-badge><!---->
    
    <!---->
    
    <!---->
    </bf-team-icon>
      </div>
    
      <div class="round-info">
        <div class="mt-20">
          <bf-match-score-box tournament="$ctrl.tournament" stage="$ctrl.stage" match="$ctrl.match" report="$ctrl.report" role="$ctrl.role"><!----><div class="top-score text-center" ng-if="!$ctrl.report || $ctrl.role === 'player'">
      <!----><h3 ng-if="!$ctrl.match.isBye">1</h3><!---->
      <!---->
    </div><!---->
    <!---->
    <div class="best-of text-muted text-center">
      <!---->
      <!---->
      <!----><div ng-if="!$ctrl.match.isBye"> Best of 1 </div><!---->
    </div>
    
    <!----><div class="bottom-score text-center" ng-if="!$ctrl.report || $ctrl.role === 'player'">
      <!----><h3 ng-if="!$ctrl.match.isBye">0</h3><!---->
      <!---->
    </div><!---->
    <!---->
    </bf-match-score-box>
        </div>
      </div>
    
      <div class="avatar-container text-right right-group text-gray">
        <bf-team-icon team="$ctrl.match.bottom.team" tournament="$ctrl.tournament" enable-avatar-preview="true" bf-store="$ctrl.bfStore" on-open-store="$ctrl.onOpenStore" animation-offset-small="0.8" animation-offset-large="2.5"><!---->
    
    <!----><bf-team-badge ng-if="$ctrl.tournament.type !== 'solo'" name="Daebak" avatar-url="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F59aadf231a4b88033552720a%2F1528252725536.png?alt=media&amp;token=391e9994-86d1-489f-9f99-ec5a0111c993"><div class="team-avatar-container" ng-class="{ 'active': $ctrl.active }">
      <div class="team-avatar" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F59aadf231a4b88033552720a%2F1528252725536.png?alt=media&amp;token=391e9994-86d1-489f-9f99-ec5a0111c993)"></div>
    </div>
    </bf-team-badge><!---->
    
    <!---->
    
    <!---->
    </bf-team-icon>
      </div>
    </div>
    
    <div flex="" row="" layout="space-between start" class="match-participant-names">
      <div class="match-team-container">
        <div class="win-status top">
          <!----><div ng-if="$ctrl.match.isComplete">
            <!----><small class="winner" ng-if="$ctrl.match.top.winner" translate=""><span>VICTORY</span></small><!---->
            <!---->
            <!---->
          </div><!---->
        </div>
        <div class="hidden-xs hidden-sm bfy-match-team" stage="$ctrl.stage" is-bye="$ctrl.match.isBye" position="$ctrl.match.top">
      <h2>
        <!----><span class="team-name" ng-if="position.team || position.team.name !== ''" ng-class="{'dropped' : position.disqualified}">
          Venecos x100pre
        </span><!---->
        <!---->
        <!---->
        <!----><small class="is-ready" ng-if="stage.hasMatchCheckin &amp;&amp; position.readyAt &amp;&amp; !isBye">
          <br>
          <i class="fa fa-check"></i>
          <span title="Jun 1st 2020 6:07 PM CST" translate=""><span>READY</span></span>
        </small><!---->
        <!---->
    
      </h2>
    </div>
        <!----><p class="title-seed-number text-uppercase text-gray text-12px" ng-if="$ctrl.match.top.seedNumber || $ctrl.match.top.seed" translate=""><span>Seed #16</span></p><!---->
    
        <!----><a class="subheading view-roster hidden-xs hidden-sm" ng-if="$ctrl.match.top.team &amp;&amp; !$ctrl.report &amp;&amp; $ctrl.tournament.type !== 'solo'" ng-click="$ctrl.viewRoster($ctrl.match.top.team)" translate=""><span>View Roster</span></a><!---->
      </div>
    
      <div class="match-team-container text-align-right">
        <div class="win-status bottom">
          <!----><div ng-if="$ctrl.match.isComplete">
            <!---->
            <!----><small class="loser" ng-if="!$ctrl.match.bottom.winner &amp;&amp; ($ctrl.match.top.winner || $ctrl.match.isDoubleLoss) &amp;&amp; !$ctrl.match.isBye &amp;&amp; !$ctrl.match.isTie" translate=""><span>DEFEATED</span></small><!---->
            <!---->
          </div><!---->
        </div>
        <div class="hidden-xs hidden-sm bfy-match-team" stage="$ctrl.stage" is-bye="$ctrl.match.isBye" position="$ctrl.match.bottom">
      <h2>
        <!----><span class="team-name" ng-if="position.team || position.team.name !== ''" ng-class="{'dropped' : position.disqualified}">
          Daebak
        </span><!---->
        <!---->
        <!---->
        <!----><small class="is-ready" ng-if="stage.hasMatchCheckin &amp;&amp; position.readyAt &amp;&amp; !isBye">
          <br>
          <i class="fa fa-check"></i>
          <span title="Jun 1st 2020 6:02 PM CST" translate=""><span>READY</span></span>
        </small><!---->
        <!---->
    
      </h2>
    </div>
        <!----><p class="title-seed-number text-uppercase text-gray text-12px mb-5" ng-if="$ctrl.match.bottom.seedNumber || $ctrl.match.bottom.seed" translate=""><span>Seed #17</span></p><!---->
        <!----><a class="subheading view-roster hidden-xs hidden-sm" ng-if="$ctrl.match.bottom.team &amp;&amp; !$ctrl.report &amp;&amp; $ctrl.tournament.type !== 'solo'" ng-click="$ctrl.viewRoster($ctrl.match.bottom.team);" translate=""><span>View Roster</span></a><!---->
      </div>
    </div>
    
    <div class="match-listing-mobile-row hidden-md hidden-lg">
      <div flex="" row="" layout="space-between start">
        <div class="match-team-container">
          <div class="bfy-match-team" stage="$ctrl.stage" is-bye="$ctrl.match.isBye" position="$ctrl.match.top">
      <h2>
        <!----><span class="team-name" ng-if="position.team || position.team.name !== ''" ng-class="{'dropped' : position.disqualified}">
          Venecos x100pre
        </span><!---->
        <!---->
        <!---->
        <!----><small class="is-ready" ng-if="stage.hasMatchCheckin &amp;&amp; position.readyAt &amp;&amp; !isBye">
          <br>
          <i class="fa fa-check"></i>
          <span title="Jun 1st 2020 6:07 PM CST" translate=""><span>READY</span></span>
        </small><!---->
        <!---->
    
      </h2>
    </div>
        </div>
        <div class="match-team-container text-align-right">
          <div class="bfy-match-team" stage="$ctrl.stage" is-bye="$ctrl.match.isBye" position="$ctrl.match.bottom">
      <h2>
        <!----><span class="team-name" ng-if="position.team || position.team.name !== ''" ng-class="{'dropped' : position.disqualified}">
          Daebak
        </span><!---->
        <!---->
        <!---->
        <!----><small class="is-ready" ng-if="stage.hasMatchCheckin &amp;&amp; position.readyAt &amp;&amp; !isBye">
          <br>
          <i class="fa fa-check"></i>
          <span title="Jun 1st 2020 6:02 PM CST" translate=""><span>READY</span></span>
        </small><!---->
        <!---->
    
      </h2>
    </div>
        </div>
      </div>
    </div>
    </bf-match-core-info>
    
      <!---->
    </div>
    
    
    <!---->
    </bf-match-viewer><!---->
      </div>
    
      <div id="match-extras">
        <div class="hidden-lg">
        <!----><div id="match-extras-tabs" ng-if="$ctrl.hasStats || $ctrl.twitchStreams.length &gt; 0">
          <div bs-active-pane="$ctrl.tabs.activeTab" data-nav-class="nav-pills-mobile" bs-tabs=""><ul class="nav nav-pills-mobile" ng-class="$navClass" role="tablist"><!----><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : '', $pane.disabled ? 'disabled' : '' ]" class="active"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled &amp;&amp; $setActive($pane.name || $index)" data-index="0" ng-bind-html="$pane.title" aria-controls="$pane.title" href="">Rosters</a></li><!----><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : '', $pane.disabled ? 'disabled' : '' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled &amp;&amp; $setActive($pane.name || $index)" data-index="1" ng-bind-html="$pane.title" aria-controls="$pane.title" href="">Stats</a></li><!----></ul><div ng-transclude="" class="tab-content">
            <div title="Rosters" ng-class="{active: $ctrl.tabs.activeTab === 0}" bs-pane="" class="tab-pane am-fade active"></div>
            <!---->
            <!----><div title="Stats" name="stats" ng-if="$ctrl.hasStats" ng-class="{active: $ctrl.tabs.activeTab === 'stats'}" bs-pane="" class="tab-pane am-fade"></div><!---->
          </div></div>
          </div><!---->
          <div id="match-extras-content">
            <div ng-show="$ctrl.tabs.activeTab === 0" class="">
              <div class="bfy-team-details" selected-team="$ctrl.topTeam">
      <div class="team-details-title">
        <h4 translate=""><span>Venecos x100pre</span></h4>
        <div class="button-close hidden-xs hidden-sm" ng-click="hide()"></div>
      </div>
    
      <div class="table-responsive">
        <!----><table class="bfy-table" ng-if="selectedTeam.players.length &gt; 0">
          <tbody>
            <!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/ghostship-pilot-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ghostship-pilot-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/all-outta-space-gum-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/all-outta-space-gum-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/all-outta-space-gum-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/all-outta-space-gum-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Item de adc
                <span class="captain hidden-lg hidden-md" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iv PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/kissy-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/kissy-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/assassin-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/assassin-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/mecha-santa-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/mecha-santa-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Soy Platinoob
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iii PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum III
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/rose-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/rose-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/steel-bullet-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/steel-bullet-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/yume-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/yume-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Soy Diamandco
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iii PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum III
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> z </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Bleak
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank gold-i GOLD">
                </div>
                <div class="player-rank-details">
                  gold I
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/kissy-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/kissy-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/rogue-collar-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/rogue-collar-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/demon-horn-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/demon-horn-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                HardPanter22
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-i DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond I
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/dwarf-emperor-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/dwarf-emperor-face.png"><!---->
      <!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/ghostship-admiral-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ghostship-admiral-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                GTR Brabiary
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/relaxed-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/relaxed-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/pandastronaut-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/pandastronaut-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/wolf-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/wolf-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Don Dagat
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-ii PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum II
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> d </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Papernub
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> r </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Trick2blu4
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank gold-ii GOLD">
                </div>
                <div class="player-rank-details">
                  gold II
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/angry-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angry-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/king-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/king-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/scifi-helmet-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/scifi-helmet-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Quality
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank gold-iii GOLD">
                </div>
                <div class="player-rank-details">
                  gold III
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/wolf-shaman-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/wolf-shaman-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/wolf-shaman-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/wolf-shaman-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/wolf-shaman-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/wolf-shaman-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                SanderGamer31
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> m </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                CarneDelTaco
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank gold-iii GOLD">
                </div>
                <div class="player-rank-details">
                  gold III
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> j </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Bebe Gerber
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iv PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum IV
                </div>
              </td><!---->
              <!---->
            </tr><!---->
          </tbody>
        </table><!---->
      </div>
      <!---->
    </div>
              <div class="bfy-team-details" selected-team="$ctrl.bottomTeam">
      <div class="team-details-title">
        <h4 translate=""><span>Daebak</span></h4>
        <div class="button-close hidden-xs hidden-sm" ng-click="hide()"></div>
      </div>
    
      <div class="table-responsive">
        <!----><table class="bfy-table" ng-if="selectedTeam.players.length &gt; 0">
          <tbody>
            <!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/spec-ops-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/spec-ops-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/viking-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/viking-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/ælfric-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/lfric-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Your Nunna
                <span class="captain hidden-lg hidden-md" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/hear-me-rawr-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/hear-me-rawr-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/pandastronaut-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/pandastronaut-body.png"><!---->
      <!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                huggablewilliam
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank master-i MASTER">
                </div>
                <div class="player-rank-details">
                  master I
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> s </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Iced Macchiato
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!---->
              <!----><td ng-if="!player.stats &amp;&amp; selectedTeam.persistentTeam &amp;&amp; selectedTeam.persistentTeam.gameID === 1" class="player-lol-stats">
                <div>
                  -
                </div>
              </td><!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> l </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                XFazePogersX1314
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iii PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum III
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> r </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                Hi am lance
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!---->
              <!----><td ng-if="!player.stats &amp;&amp; selectedTeam.persistentTeam &amp;&amp; selectedTeam.persistentTeam.gameID === 1" class="player-lol-stats">
                <div>
                  -
                </div>
              </td><!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/ghostship-pilot-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ghostship-pilot-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/ghostship-pilot-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ghostship-pilot-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/dragoat-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/dragoat-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                kashi947
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!---->
              <!----><td ng-if="!player.stats &amp;&amp; selectedTeam.persistentTeam &amp;&amp; selectedTeam.persistentTeam.gameID === 1" class="player-lol-stats">
                <div>
                  -
                </div>
              </td><!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> c </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                EJHAZARD
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/fire-woman-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/fire-woman-face.png"><!---->
      <!---->
      <!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                KR Haise
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank gold-i GOLD">
                </div>
                <div class="player-rank-details">
                  gold I
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> 2 </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                snkis
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-iv DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/happy-crazy-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/happy-crazy-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/red-assassin-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/red-assassin-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/demon-horn-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/demon-horn-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                KR Aspis
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank platinum-iv PLATINUM">
                </div>
                <div class="player-rank-details">
                  platinum IV
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!---->
      <!---->
      <!---->
      <!---->
      <!----><p class="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase" ng-if="$ctrl.isUgly &amp;&amp; $ctrl.showLetter" flex="" column="" layout="center center"> s </p><!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                tffgg
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!----><td ng-if="player.stats" class="player-lol-stats">
                <div class="player-rank diamond-ii DIAMOND">
                </div>
                <div class="player-rank-details">
                  diamond II
                </div>
              </td><!---->
              <!---->
            </tr><!----><tr ng-repeat="player in teamPlayers">
              <td class="user-avatar">
                <bf-avatar equipment="player.user.equipment" user="player.user" enable-preview="true" bf-store="bfStore" on-open-store="onOpenStore"><div class="wrapper sticker-boarder" ng-click="$ctrl.openUser()">
      <!----><img class="face" ng-if="$ctrl.face &amp;&amp; !$ctrl.isUgly" ng-src="https://cdn.battlefy.com/helix/images/store/tea-sir-face" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/tea-sir-face.png"><!---->
      <!----><img class="body" ng-if="$ctrl.body" ng-src="https://cdn.battlefy.com/helix/images/store/pope-body" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/pope-body.png"><!---->
      <!----><img class="head" ng-if="$ctrl.head" ng-src="https://cdn.battlefy.com/helix/images/store/freaky-the-snowman-head" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/freaky-the-snowman-head.png"><!---->
      <!---->
      <!---->
      <!---->
    </div>
    </bf-avatar>
              </td>
              <td class="player-in-game-name">
                VizAbuelo
                <span class="captain hidden-lg hidden-md ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" translate=""><span>C</span></span>
              </td>
              <td>
                <span class="hidden-sm hidden-xs ng-hide" ng-show="player.isCaptain &amp;&amp; !hideCaptainBadge" data-title="Captain" bs-tooltip="" translate=""><span>Captain</span></span>
              </td>
              <!---->
              <!----><td ng-if="!player.stats &amp;&amp; selectedTeam.persistentTeam &amp;&amp; selectedTeam.persistentTeam.gameID === 1" class="player-lol-stats">
                <div>
                  -
                </div>
              </td><!---->
            </tr><!---->
          </tbody>
        </table><!---->
      </div>
      <!---->
    </div>
            </div>
            <div ng-show="$ctrl.tabs.activeTab === 'media'" class="ng-hide">
              <bfy-media-list streams="$ctrl.twitchStreams" media="$ctrl.media"><div class="bfy-media-container">
      <!---->
    
      <div class="media-container tournament-streams ng-hide" ng-show="tournamentStreams.length &gt; 0">
        <h2 class="title" translate=""><span>Tournament Streams</span></h2>
        <div class="media-cards">
          <!---->
        </div>
      </div>
    
      <div class="media-container streams ng-hide" ng-show="streams.length &gt; 0">
        <h2 class="title" translate=""><span>Player Streams</span></h2>
        <div class="media-cards" flex="" row="" wrap="">
          <!---->
        </div>
      </div>
    
      <div class="media-container videos ng-hide" ng-show="videos.length &gt; 0">
        <h2 class="title" translate=""><span>Videos</span></h2>
        <!----><div ng-if="!showCarousel" class="media-cards" flex="" row="" wrap="">
          <!---->
        </div><!---->
    
        <!---->
      </div>
    
      <div class="media-container images ng-hide" ng-show="images.length &gt; 0">
        <h2 class="title" translate=""><span>Screen Shots</span></h2>
        <!----><div ng-if="!showCarousel" class="media-cards" flex="" row="" wrap="">
          <!---->
        </div><!---->
    
    
        <!---->
      </div>
    
      <div class="empty-message mb-20 ng-hide" ng-show="youtubePlaylist.length === 0 &amp;&amp; tournamentStreams.length === 0 &amp;&amp; streams.length === 0 &amp;&amp; videos.length === 0 &amp;&amp; images.length === 0">
        <div translate=""><span>There is currently no media available.</span></div>
      </div>
    </div>
    </bfy-media-list>
            </div>
            <div ng-show="$ctrl.tabs.activeTab === 'stats'" class="ng-hide">
              <!----><bfy-lol-match-stats match="$ctrl.match" ng-if="$ctrl.tournament.game.slug === 'league-of-legends'"><!----><div ng-if="match">
      <!----><div ng-if="stats.gameNumberRange.length === 1">
        <bfy-lol-stats class="static" game-number="gameNumber" summary="summary" match="match"><!----><div ng-include="getTemplateUrl()"><!----><div class="end-of-game game-stats clearfix" ng-if="stats.teams !== undefined">
      <!----><div class="well" ng-if="stats.teams[0].teamStats.bans">
        <div class="bans">
          <!----><div class="ban-list" ng-if="stats.teams[0].teamStats.bans">
            <ul class="list list-unstyled list-inline">
              <!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Gnar.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Gnar.png" width="40" height="40">
                <p>5</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Gragas.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Gragas.png" width="40" height="40">
                <p>4</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Morgana.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Morgana.png" width="40" height="40">
                <p>3</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Braum.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Braum.png" width="40" height="40">
                <p>2</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Malzahar.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Malzahar.png" width="40" height="40">
                <p>1</p>
              </li><!---->
            </ul>
          </div><!---->
          <h3 translate=""><span>BANS</span></h3>
          <!----><div class="ban-list" ng-if="stats.teams[1].teamStats.bans">
            <ul class="list list-unstyled list-inline">
              <!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ekko.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Ekko.png" width="40" height="40">
                <p>1</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Yuumi.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Yuumi.png" width="40" height="40">
                <p>2</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Sylas.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Sylas.png" width="40" height="40">
                <p>3</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Maokai.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Maokai.png" width="40" height="40">
                <p>4</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Galio.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Galio.png" width="40" height="40">
                <p>6</p>
              </li><!---->
            </ul>
          </div><!---->
        </div>
      </div><!---->
    
      <!----><div ng-repeat="team in stats.teams">
        <div class="well">
          <h2 class="team-name">
            <span>Venecos x100pre</span>
            <!----><small class="first-place" ng-if="team.players[0].winner" translate=""><span>- VICTORY</span></small><!---->
            <!---->
          </h2>
    
          <h4 class="team-stats">
            33/20/62
            <!----><span ng-if="stats.teams[0].players[0].gameLengthDisplay">31m 11s</span><!---->
            <br>
            <span data-title="Barons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              2
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-baron.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-baron.png">
            </span>
            <span data-title="Dragons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              4
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-dragon.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-dragon.png">
            </span>
            <span data-title="Towers Killed" data-placement="top" data-auto-close="1" bs-tooltip="">
              8
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-tower.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-tower.png">
            </span>
            <!----><span ng-if="team.teamStats.firstRiftHerald" data-title="This Team slew the Rift Herald" data-placement="top" data-auto-close="1" bs-tooltip="">
              RH
            </span><!---->
          </h4>
    
          <div class="stat-table-container">
            <table class="table table-striped table-stats">
              <thead>
                <tr><th class="player" translate=""><span>Player</span></th>
                <th class="performance" translate=""><span>Performance</span></th>
                <th class="income" translate=""><span>Income</span></th>
                <th class="items" translate=""><span>Items</span></th>
                <th class="damage" translate=""><span>Damage</span></th>
              </tr></thead>
              <tbody>
                <!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Irelia.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Irelia.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Item de Adc</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 5 / 9
                        <br>
                        <span translate=""><span>3.4 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        191 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.13 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>13,052 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3071.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Black Cleaver&lt;/strong&gt;&lt;br&gt;Dealing physical damage to enemy champions reduces their Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3071.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3140.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Quicksilver Sash&lt;/strong&gt;&lt;br&gt;Activate to remove all crowd control debuffs" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3140.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3153.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Blade of the Ruined King&lt;/strong&gt;&lt;br&gt;Deals damage based on target's Health, can steal Movement Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3153.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3052.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Jaurim's Fist&lt;/strong&gt;&lt;br&gt;Attack Damage and stacking Health on Unit Kill" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3052.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1037.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Pickaxe&lt;/strong&gt;&lt;br&gt;Moderately increases Attack Damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1037.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        18,315
                        <br>
                        20% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Poppy.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Poppy.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png" class="lol-icon lol-spell-icon" data-title="Smite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerSmite.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Papernub</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 4 / 10
                        <br>
                        <span translate=""><span>4.5 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        173 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.55 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,193 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1401.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Enchantment: Cinderhulk&lt;/strong&gt;&lt;br&gt;Grants Health and Immolate Aura" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1401.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3193.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Gargoyle Stoneplate&lt;/strong&gt;&lt;br&gt;Greatly increases defense near multiple enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3193.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3076.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Bramble Vest&lt;/strong&gt;&lt;br&gt;Prevents enemies from using Life Steal against you." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3076.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3742.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dead Man's Plate&lt;/strong&gt;&lt;br&gt;Build momentum as you move around then smash into enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3742.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3067.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Kindlegem&lt;/strong&gt;&lt;br&gt;Increases Health and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3067.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        11,408
                        <br>
                        13% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Zyra.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Zyra.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png" class="lol-icon lol-spell-icon" data-title="Ignite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerDot.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Soy Diamandco</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        3 / 6 / 14
                        <br>
                        <span translate=""><span>2.83 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        27 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>0.87 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>9,376 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3030.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Hextech GLP-800&lt;/strong&gt;&lt;br&gt;Activate to fire icy bolts to slow enemies" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3030.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3853.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Shard of True Ice&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3853.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3151.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Liandry's Torment&lt;/strong&gt;&lt;br&gt;Spell damage burns enemies for a portion of their Health" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3151.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1052.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Amplifying Tome&lt;/strong&gt;&lt;br&gt;Slightly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1052.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        13,906
                        <br>
                        15% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/MissFortune.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/MissFortune.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png" class="lol-icon lol-spell-icon" data-title="Heal" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerHeal.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Soy Platinoob</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        9 / 2 / 13
                        <br>
                        <span translate=""><span>11 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 15</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        214 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.86 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>15,336 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3031.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Infinity Edge&lt;/strong&gt;&lt;br&gt;Massively enhances critical strikes" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3031.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3508.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Essence Reaver&lt;/strong&gt;&lt;br&gt;Grants Critical Strike Chance, Cooldown Reduction, Attack Damage and restores mana on hit." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3508.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3139.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercurial Scimitar&lt;/strong&gt;&lt;br&gt;Activate to remove all crowd control debuffs and grant massive Movement Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3139.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Berserker's Greaves&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and Attack Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3006.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3033.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mortal Reminder&lt;/strong&gt;&lt;br&gt;Overcomes enemies with high Health recovery and Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3033.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        25,378
                        <br>
                        28% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Orianna.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Orianna.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerBarrier.png" class="lol-icon lol-spell-icon" data-title="Barrier" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerBarrier.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Bleak</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-gold-i"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>gold I</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        5 / 3 / 16
                        <br>
                        <span translate=""><span>7 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        190 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.09 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,183 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3285.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Luden's Echo&lt;/strong&gt;&lt;br&gt;Increases Ability Power, Mana, and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3285.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3157.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Zhonya's Hourglass&lt;/strong&gt;&lt;br&gt;Activate to become invincible but unable to take actions" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3157.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3165.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Morellonomicon&lt;/strong&gt;&lt;br&gt;Increases magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3165.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1056.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Doran's Ring&lt;/strong&gt;&lt;br&gt;Good starting item for casters" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1056.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        21,662
                        <br>
                        24% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!---->
              </tbody>
            </table>
          </div>
        </div>
      </div><!----><div ng-repeat="team in stats.teams">
        <div class="well">
          <h2 class="team-name">
            <span>Daebak</span>
            <!---->
            <!----><small class="second-place" ng-if="!team.players[0].winner" translate=""><span>- DEFEAT</span></small><!---->
          </h2>
    
          <h4 class="team-stats">
            20/33/31
            <!----><span ng-if="stats.teams[0].players[0].gameLengthDisplay">31m 11s</span><!---->
            <br>
            <span data-title="Barons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              0
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-baron.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-baron.png">
            </span>
            <span data-title="Dragons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              0
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-dragon.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-dragon.png">
            </span>
            <span data-title="Towers Killed" data-placement="top" data-auto-close="1" bs-tooltip="">
              3
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-tower.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-tower.png">
            </span>
            <!---->
          </h4>
    
          <div class="stat-table-container">
            <table class="table table-striped table-stats">
              <thead>
                <tr><th class="player" translate=""><span>Player</span></th>
                <th class="performance" translate=""><span>Performance</span></th>
                <th class="income" translate=""><span>Income</span></th>
                <th class="items" translate=""><span>Items</span></th>
                <th class="damage" translate=""><span>Damage</span></th>
              </tr></thead>
              <tbody>
                <!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Kayn.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Kayn.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png" class="lol-icon lol-spell-icon" data-title="Smite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerSmite.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>VizAbuelo</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!----><span ng-if="!player.tier" class="lol-player-rank rank-small lol-player-rank-unknown"></span><!---->
                            <!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>Unranked</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        10 / 7 / 4
                        <br>
                        <span translate=""><span>2 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        176 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.64 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,745 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1412.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Enchantment: Warrior&lt;/strong&gt;&lt;br&gt;Grants Attack Damage and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1412.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3193.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Gargoyle Stoneplate&lt;/strong&gt;&lt;br&gt;Greatly increases defense near multiple enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3193.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3071.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Black Cleaver&lt;/strong&gt;&lt;br&gt;Dealing physical damage to enemy champions reduces their Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3071.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3065.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Spirit Visage&lt;/strong&gt;&lt;br&gt;Increases Health and healing effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3065.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        14,081
                        <br>
                        22% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Lux.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Lux.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Iced Macchiato</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!----><span ng-if="!player.tier" class="lol-player-rank rank-small lol-player-rank-unknown"></span><!---->
                            <!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>Unranked</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        2 / 9 / 11
                        <br>
                        <span translate=""><span>1.44 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 15</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        213 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.83 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>11,266 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1058.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Needlessly Large Rod&lt;/strong&gt;&lt;br&gt;Greatly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1058.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3285.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Luden's Echo&lt;/strong&gt;&lt;br&gt;Increases Ability Power, Mana, and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3285.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1082.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dark Seal&lt;/strong&gt;&lt;br&gt;Provides Ability Power and Mana.  Increases in power as you kill enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1082.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3102.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Banshee's Veil&lt;/strong&gt;&lt;br&gt;Periodically blocks enemy abilities" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3102.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1058.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Needlessly Large Rod&lt;/strong&gt;&lt;br&gt;Greatly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1058.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        21,054
                        <br>
                        33% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Kaisa.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Kaisa.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png" class="lol-icon lol-spell-icon" data-title="Heal" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerHeal.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>XFazePogersX1314</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        0 / 5 / 2
                        <br>
                        <span translate=""><span>0.4 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        181 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.8 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>8,825 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1055.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Doran's Blade&lt;/strong&gt;&lt;br&gt;Good starting item for attackers" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1055.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3042.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Muramana&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3042.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3124.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Guinsoo's Rageblade&lt;/strong&gt;&lt;br&gt;Increases Attack Speed, Armor Penetration, and Magic Penetration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3124.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3363.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Farsight Alteration&lt;/strong&gt;&lt;br&gt;Grants increased range and reveals the targetted area" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3363.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Berserker's Greaves&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and Attack Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3006.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3101.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Stinger&lt;/strong&gt;&lt;br&gt;Increased Attack Speed and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3101.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        3,388
                        <br>
                        5% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Mordekaiser.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Mordekaiser.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>snkis</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 4 / 4
                        <br>
                        <span translate=""><span>3 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        206 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.61 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>13,849 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3116.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Rylai's Crystal Scepter&lt;/strong&gt;&lt;br&gt;Abilities slow enemies" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3116.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3211.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Spectre's Cowl&lt;/strong&gt;&lt;br&gt;Improves defense and grants regeneration upon being damaged" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3211.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3152.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Hextech Protobelt-01&lt;/strong&gt;&lt;br&gt;Activate to dash forward and unleash a fiery explosion" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3152.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3076.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Bramble Vest&lt;/strong&gt;&lt;br&gt;Prevents enemies from using Life Steal against you." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3076.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3151.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Liandry's Torment&lt;/strong&gt;&lt;br&gt;Spell damage burns enemies for a portion of their Health" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3151.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        17,804
                        <br>
                        28% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Sett.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Sett.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png" class="lol-icon lol-spell-icon" data-title="Ignite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerDot.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Your Nunna</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        0 / 8 / 10
                        <br>
                        <span translate=""><span>1.25 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 12</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        39 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>1.25 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>6,580 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Control Ward&lt;/strong&gt;&lt;br&gt;Used to disable wards and invisible traps in an area." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/2055.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2421.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Broken Stopwatch&lt;/strong&gt;&lt;br&gt;Upgrades to stopwatch" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/2421.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3857.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Pauldrons of Whiterock&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3857.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3742.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dead Man's Plate&lt;/strong&gt;&lt;br&gt;Build momentum as you move around then smash into enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3742.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1057.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Negatron Cloak&lt;/strong&gt;&lt;br&gt;Moderately increases Magic Resist" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1057.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        7,695
                        <br>
                        12% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!---->
              </tbody>
            </table>
          </div>
        </div>
      </div><!---->
    </div><!---->
    </div></bfy-lol-stats>
      </div><!---->
      <!---->
    </div><!---->
    </bfy-lol-match-stats><!---->
              <div class="stats well ng-hide" ng-show="!$ctrl.stats.gameNumberRange">
                <div class="empty-message text-center">
                  <h3 translate=""><span>No Stats Currently</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="visible-lg">
          <div class="match-media-content">
            <bfy-media-stream-carousel streams="$ctrl.twitchStreams"><!---->
    </bfy-media-stream-carousel>
    
            <!---->
            <!---->
          </div>
    
          <!----><bfy-lol-match-stats ng-if="$ctrl.tournament.game.slug === 'league-of-legends'" match="$ctrl.match" query="$ctrl.stats.query"><!----><div ng-if="match">
      <!----><div ng-if="stats.gameNumberRange.length === 1">
        <bfy-lol-stats class="static" game-number="gameNumber" summary="summary" match="match"><!----><div ng-include="getTemplateUrl()"><!----><div class="end-of-game game-stats clearfix" ng-if="stats.teams !== undefined">
      <!----><div class="well" ng-if="stats.teams[0].teamStats.bans">
        <div class="bans">
          <!----><div class="ban-list" ng-if="stats.teams[0].teamStats.bans">
            <ul class="list list-unstyled list-inline">
              <!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Gnar.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Gnar.png" width="40" height="40">
                <p>5</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Gragas.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Gragas.png" width="40" height="40">
                <p>4</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Morgana.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Morgana.png" width="40" height="40">
                <p>3</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Braum.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Braum.png" width="40" height="40">
                <p>2</p>
              </li><!----><li ng-repeat="ban in stats.teams[0].teamStats.bans|orderBy:'-pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Malzahar.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Malzahar.png" width="40" height="40">
                <p>1</p>
              </li><!---->
            </ul>
          </div><!---->
          <h3 translate=""><span>BANS</span></h3>
          <!----><div class="ban-list" ng-if="stats.teams[1].teamStats.bans">
            <ul class="list list-unstyled list-inline">
              <!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Ekko.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Ekko.png" width="40" height="40">
                <p>1</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Yuumi.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Yuumi.png" width="40" height="40">
                <p>2</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Sylas.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Sylas.png" width="40" height="40">
                <p>3</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Maokai.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Maokai.png" width="40" height="40">
                <p>4</p>
              </li><!----><li ng-repeat="ban in stats.teams[1].teamStats.bans|orderBy:'pickTurn'">
                <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Galio.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Galio.png" width="40" height="40">
                <p>6</p>
              </li><!---->
            </ul>
          </div><!---->
        </div>
      </div><!---->
    
      <!----><div ng-repeat="team in stats.teams">
        <div class="well">
          <h2 class="team-name">
            <span>Venecos x100pre</span>
            <!----><small class="first-place" ng-if="team.players[0].winner" translate=""><span>- VICTORY</span></small><!---->
            <!---->
          </h2>
    
          <h4 class="team-stats">
            33/20/62
            <!----><span ng-if="stats.teams[0].players[0].gameLengthDisplay">31m 11s</span><!---->
            <br>
            <span data-title="Barons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              2
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-baron.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-baron.png">
            </span>
            <span data-title="Dragons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              4
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-dragon.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-dragon.png">
            </span>
            <span data-title="Towers Killed" data-placement="top" data-auto-close="1" bs-tooltip="">
              8
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-tower.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-tower.png">
            </span>
            <!----><span ng-if="team.teamStats.firstRiftHerald" data-title="This Team slew the Rift Herald" data-placement="top" data-auto-close="1" bs-tooltip="">
              RH
            </span><!---->
          </h4>
    
          <div class="stat-table-container">
            <table class="table table-striped table-stats">
              <thead>
                <tr><th class="player" translate=""><span>Player</span></th>
                <th class="performance" translate=""><span>Performance</span></th>
                <th class="income" translate=""><span>Income</span></th>
                <th class="items" translate=""><span>Items</span></th>
                <th class="damage" translate=""><span>Damage</span></th>
              </tr></thead>
              <tbody>
                <!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Irelia.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Irelia.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Item de Adc</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 5 / 9
                        <br>
                        <span translate=""><span>3.4 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        191 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.13 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>13,052 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3071.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Black Cleaver&lt;/strong&gt;&lt;br&gt;Dealing physical damage to enemy champions reduces their Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3071.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3140.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Quicksilver Sash&lt;/strong&gt;&lt;br&gt;Activate to remove all crowd control debuffs" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3140.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3153.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Blade of the Ruined King&lt;/strong&gt;&lt;br&gt;Deals damage based on target's Health, can steal Movement Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3153.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3052.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Jaurim's Fist&lt;/strong&gt;&lt;br&gt;Attack Damage and stacking Health on Unit Kill" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3052.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1037.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Pickaxe&lt;/strong&gt;&lt;br&gt;Moderately increases Attack Damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1037.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        18,315
                        <br>
                        20% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Poppy.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Poppy.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png" class="lol-icon lol-spell-icon" data-title="Smite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerSmite.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Papernub</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 4 / 10
                        <br>
                        <span translate=""><span>4.5 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        173 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.55 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,193 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1401.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Enchantment: Cinderhulk&lt;/strong&gt;&lt;br&gt;Grants Health and Immolate Aura" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1401.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3193.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Gargoyle Stoneplate&lt;/strong&gt;&lt;br&gt;Greatly increases defense near multiple enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3193.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3076.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Bramble Vest&lt;/strong&gt;&lt;br&gt;Prevents enemies from using Life Steal against you." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3076.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3742.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dead Man's Plate&lt;/strong&gt;&lt;br&gt;Build momentum as you move around then smash into enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3742.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3067.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Kindlegem&lt;/strong&gt;&lt;br&gt;Increases Health and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3067.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        11,408
                        <br>
                        13% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Zyra.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Zyra.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png" class="lol-icon lol-spell-icon" data-title="Ignite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerDot.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Soy Diamandco</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        3 / 6 / 14
                        <br>
                        <span translate=""><span>2.83 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        27 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>0.87 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>9,376 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3030.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Hextech GLP-800&lt;/strong&gt;&lt;br&gt;Activate to fire icy bolts to slow enemies" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3030.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3853.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Shard of True Ice&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3853.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3151.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Liandry's Torment&lt;/strong&gt;&lt;br&gt;Spell damage burns enemies for a portion of their Health" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3151.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1052.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Amplifying Tome&lt;/strong&gt;&lt;br&gt;Slightly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1052.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        13,906
                        <br>
                        15% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/MissFortune.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/MissFortune.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png" class="lol-icon lol-spell-icon" data-title="Heal" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerHeal.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Soy Platinoob</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        9 / 2 / 13
                        <br>
                        <span translate=""><span>11 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 15</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        214 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.86 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>15,336 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3031.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Infinity Edge&lt;/strong&gt;&lt;br&gt;Massively enhances critical strikes" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3031.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3508.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Essence Reaver&lt;/strong&gt;&lt;br&gt;Grants Critical Strike Chance, Cooldown Reduction, Attack Damage and restores mana on hit." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3508.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3139.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercurial Scimitar&lt;/strong&gt;&lt;br&gt;Activate to remove all crowd control debuffs and grant massive Movement Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3139.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Berserker's Greaves&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and Attack Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3006.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3033.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mortal Reminder&lt;/strong&gt;&lt;br&gt;Overcomes enemies with high Health recovery and Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3033.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        25,378
                        <br>
                        28% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-winner">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Orianna.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Orianna.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerBarrier.png" class="lol-icon lol-spell-icon" data-title="Barrier" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerBarrier.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Bleak</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-gold-i"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>gold I</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        5 / 3 / 16
                        <br>
                        <span translate=""><span>7 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        190 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.09 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,183 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3285.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Luden's Echo&lt;/strong&gt;&lt;br&gt;Increases Ability Power, Mana, and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3285.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3157.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Zhonya's Hourglass&lt;/strong&gt;&lt;br&gt;Activate to become invincible but unable to take actions" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3157.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3165.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Morellonomicon&lt;/strong&gt;&lt;br&gt;Increases magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3165.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1056.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Doran's Ring&lt;/strong&gt;&lt;br&gt;Good starting item for casters" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1056.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        21,662
                        <br>
                        24% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!---->
              </tbody>
            </table>
          </div>
        </div>
      </div><!----><div ng-repeat="team in stats.teams">
        <div class="well">
          <h2 class="team-name">
            <span>Daebak</span>
            <!---->
            <!----><small class="second-place" ng-if="!team.players[0].winner" translate=""><span>- DEFEAT</span></small><!---->
          </h2>
    
          <h4 class="team-stats">
            20/33/31
            <!----><span ng-if="stats.teams[0].players[0].gameLengthDisplay">31m 11s</span><!---->
            <br>
            <span data-title="Barons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              0
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-baron.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-baron.png">
            </span>
            <span data-title="Dragons Slain" data-placement="top" data-auto-close="1" bs-tooltip="">
              0
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-dragon.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-dragon.png">
            </span>
            <span data-title="Towers Killed" data-placement="top" data-auto-close="1" bs-tooltip="">
              3
              <img class="lol-objective-icon" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/icon-tower.png" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/icon-tower.png">
            </span>
            <!---->
          </h4>
    
          <div class="stat-table-container">
            <table class="table table-striped table-stats">
              <thead>
                <tr><th class="player" translate=""><span>Player</span></th>
                <th class="performance" translate=""><span>Performance</span></th>
                <th class="income" translate=""><span>Income</span></th>
                <th class="items" translate=""><span>Items</span></th>
                <th class="damage" translate=""><span>Damage</span></th>
              </tr></thead>
              <tbody>
                <!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Kayn.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Kayn.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerSmite.png" class="lol-icon lol-spell-icon" data-title="Smite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerSmite.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>VizAbuelo</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!----><span ng-if="!player.tier" class="lol-player-rank rank-small lol-player-rank-unknown"></span><!---->
                            <!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>Unranked</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        10 / 7 / 4
                        <br>
                        <span translate=""><span>2 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        176 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.64 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>12,745 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1412.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Enchantment: Warrior&lt;/strong&gt;&lt;br&gt;Grants Attack Damage and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1412.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3193.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Gargoyle Stoneplate&lt;/strong&gt;&lt;br&gt;Greatly increases defense near multiple enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3193.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3071.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Black Cleaver&lt;/strong&gt;&lt;br&gt;Dealing physical damage to enemy champions reduces their Armor" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3071.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3065.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Spirit Visage&lt;/strong&gt;&lt;br&gt;Increases Health and healing effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3065.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        14,081
                        <br>
                        22% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Lux.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Lux.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Iced Macchiato</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!----><span ng-if="!player.tier" class="lol-player-rank rank-small lol-player-rank-unknown"></span><!---->
                            <!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>Unranked</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        2 / 9 / 11
                        <br>
                        <span translate=""><span>1.44 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 15</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        213 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.83 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>11,266 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1058.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Needlessly Large Rod&lt;/strong&gt;&lt;br&gt;Greatly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1058.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3285.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Luden's Echo&lt;/strong&gt;&lt;br&gt;Increases Ability Power, Mana, and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3285.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1082.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dark Seal&lt;/strong&gt;&lt;br&gt;Provides Ability Power and Mana.  Increases in power as you kill enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1082.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3102.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Banshee's Veil&lt;/strong&gt;&lt;br&gt;Periodically blocks enemy abilities" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3102.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1058.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Needlessly Large Rod&lt;/strong&gt;&lt;br&gt;Greatly increases Ability Power" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1058.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        21,054
                        <br>
                        33% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Kaisa.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Kaisa.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerHeal.png" class="lol-icon lol-spell-icon" data-title="Heal" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerHeal.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>XFazePogersX1314</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-platinum-iii"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>platinum III</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        0 / 5 / 2
                        <br>
                        <span translate=""><span>0.4 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 14</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        181 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>5.8 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>8,825 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1055.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Doran's Blade&lt;/strong&gt;&lt;br&gt;Good starting item for attackers" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1055.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3042.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Muramana&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3042.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3124.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Guinsoo's Rageblade&lt;/strong&gt;&lt;br&gt;Increases Attack Speed, Armor Penetration, and Magic Penetration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3124.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3363.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Farsight Alteration&lt;/strong&gt;&lt;br&gt;Grants increased range and reveals the targetted area" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3363.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3006.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Berserker's Greaves&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and Attack Speed" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3006.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3101.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Stinger&lt;/strong&gt;&lt;br&gt;Increased Attack Speed and Cooldown Reduction" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3101.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://cdn.battlefy.com/helix/images/icon/lol/emptyslot.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/emptyslot.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        3,388
                        <br>
                        5% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Mordekaiser.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Mordekaiser.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerTeleport.png" class="lol-icon lol-spell-icon" data-title="Teleport" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerTeleport.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png" class="lol-icon lol-spell-icon" data-title="Precision" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7201_Precision.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png" class="lol-icon lol-spell-icon" data-title="Domination" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7200_Domination.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>snkis</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        8 / 4 / 4
                        <br>
                        <span translate=""><span>3 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 16</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        206 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>6.61 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>13,849 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3116.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Rylai's Crystal Scepter&lt;/strong&gt;&lt;br&gt;Abilities slow enemies" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3116.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3211.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Spectre's Cowl&lt;/strong&gt;&lt;br&gt;Improves defense and grants regeneration upon being damaged" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3211.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3152.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Hextech Protobelt-01&lt;/strong&gt;&lt;br&gt;Activate to dash forward and unleash a fiery explosion" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3152.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3340.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Warding Totem (Trinket)&lt;/strong&gt;&lt;br&gt;Periodically place a Stealth Ward" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3340.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3076.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Bramble Vest&lt;/strong&gt;&lt;br&gt;Prevents enemies from using Life Steal against you." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3076.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3020.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Sorcerer's Shoes&lt;/strong&gt;&lt;br&gt;Enhances Movement Speed and magic damage" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3020.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3151.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Liandry's Torment&lt;/strong&gt;&lt;br&gt;Spell damage burns enemies for a portion of their Health" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3151.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        17,804
                        <br>
                        28% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!----><tr ng-repeat="player in team.players" ng-class="{ 'player-winner': team.players[0].winner, 'player-loser': !team.players[0].winner }" class="player-loser">
                  <td class="player">
                    <div class="player-name-container">
                      <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Sett.png" class="lol-champion-icon" data-title="" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/Sett.png">
                      <div class="summoner-spell-container">
                          <!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerFlash.png" class="lol-icon lol-spell-icon" data-title="Flash" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerFlash.png">
                          </div><!----><div ng-repeat="summonerSpell in player.champion.summonerSpells track by $index">
                            <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/SummonerDot.png" class="lol-icon lol-spell-icon" data-title="Ignite" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/SummonerDot.png">
                          </div><!---->
                      </div>
                      <div class="summoner-spell-container">
                        <!---->
    
                        <!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png" class="lol-icon lol-spell-icon" data-title="Inspiration" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7203_Whimsy.png">
                        </div><!----><!----><!----><div ng-if="player.champion.runesReforged" ng-repeat="rune in player.champion.runesReforged">
                          <img ng-src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png" class="lol-icon lol-spell-icon" data-title="Sorcery" data-placement="bottom" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/7202_Sorcery.png">
                        </div><!----><!---->
                      </div>
    
                      <div class="summoner-spell-container pl-10">
                        <div class="summoner-name"><b>Your Nunna</b></div>
                        <div class="summoner-rank-container">
                          <div class="rank-image">
                            <!---->
                            <!----><span ng-if="player.tier" class="lol-player-rank rank-small lol-player-rank-diamond-iv"></span><!---->
                          </div>
                          <small class="text-capitalize" translate=""><span>diamond IV</span></small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="performance">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Performance" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/performance.html" data-auto-close="1" bs-popover="">
                        0 / 8 / 10
                        <br>
                        <span translate=""><span>1.25 KDA</span></span>
                        <br>
                        <span class="secondary-text" translate=""><span>Lvl 12</span></span>
                    </div>
                  </td>
                  <td class="income">
                    <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Income" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/income.html" data-auto-close="1" bs-popover="">
                        39 <span translate=""><span>CS</span></span>
                        <!----><span ng-if="player.income.creepsKilled.perMin"><br>1.25 CS/min</span><!---->
                        <br>
                        <span class="secondary-text" translate=""><span>6,580 Gold</span></span>
                    </div>
                  </td>
                  <td class="items">
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2055.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Control Ward&lt;/strong&gt;&lt;br&gt;Used to disable wards and invisible traps in an area." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/2055.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/2421.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Broken Stopwatch&lt;/strong&gt;&lt;br&gt;Upgrades to stopwatch" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/2421.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3857.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Pauldrons of Whiterock&lt;/strong&gt;&lt;br&gt;" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3857.png"><!---->
                        <img ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3364.png" class="lol-icon lol-trinket-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Oracle Lens&lt;/strong&gt;&lt;br&gt;Disables nearby invisible wards and traps for a duration" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3364.png">
                    </div>
                    <div style="display:inline-block;">
                      <!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3742.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Dead Man's Plate&lt;/strong&gt;&lt;br&gt;Build momentum as you move around then smash into enemies." data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3742.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/1057.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Negatron Cloak&lt;/strong&gt;&lt;br&gt;Moderately increases Magic Resist" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/1057.png"><!----><img ng-repeat="item in player.inventory.items|limitTo:-3 track by $index" ng-src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/item/3111.png" class="lol-icon lol-item-icon" data-placement="bottom" data-html="true" data-title="&lt;strong&gt;Mercury's Treads&lt;/strong&gt;&lt;br&gt;Increases Movement Speed and reduces duration of disabling effects" data-auto-close="1" bs-tooltip="" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/3111.png"><!---->
                    </div>
                  </td>
                  <td class="damage">
                      <div class="popover-link" data-placement="top-right" data-trigger="hover" data-title="Damage Dealt and Taken" data-html="true" data-content-template="/scripts/modules/bfyStats/src/directives/leagueOfLegends/damage.html" data-auto-close="1" bs-popover="">
                        7,695
                        <br>
                        12% <span translate=""><span>of Team Damage</span></span>
                    </div>
                  </td>
                </tr><!---->
              </tbody>
            </table>
          </div>
        </div>
      </div><!---->
    </div><!---->
    </div></bfy-lol-stats>
      </div><!---->
      <!---->
    </div><!---->
    </bfy-lol-match-stats><!---->
        </div>
      </div>
    </div>
    </bf-match></div>
      </div>
    </div>
    </div>
          </div>
        </div>
        </div>
      </div>
    
      <!----><div class="bfy-tournament-guide" tournament="$ctrl.tournament" organization="$ctrl.tournament.organization" meets-community-prizing-requirements="$ctrl.meetsCommunityPrizingRequirements" user-players="$ctrl.userPlayers" permissions="$ctrl.permissions" on-confirm-roster="$ctrl.onConfirmRoster" teams-count="$ctrl.teamsCount.count" pending-teams-count="$ctrl.pendingTeamsCount.count" start-seconds="$ctrl.startSeconds" checkin-seconds="$ctrl.checkinSeconds" pending-team="$ctrl.pendingTeam" joined-team="$ctrl.joinedTeam" update-pending-team="$ctrl.updatePendingTeam" update-joined-team="$ctrl.updateJoinedTeam" get-team="$ctrl.getTeam" user-tournament-player="$ctrl.userTournamentPlayer" joined-team-roster="$ctrl.joinedTeamRoster" pending-team-roster="$ctrl.pendingTeamRoster" show-invite-modal="$ctrl.showInviteModal" add-player-to-roster="$ctrl.addPlayerToRoster" remove-player-from-roster="$ctrl.removePlayerFromRoster" add-player-to-joined-team="$ctrl.addPlayerToJoinedTeam" remove-player-from-joined-team="$ctrl.removePlayerFromJoinedTeam" rename-pending-team-player="$ctrl.renamePendingTeamPlayer" rename-joined-team-player="$ctrl.renameJoinedTeamPlayer" paid-for-tournament="$ctrl.paidForTournament" delete-pending-team="$ctrl.deletePendingTeam" toggle-autojoin="$ctrl.toggleAutojoin" user="$ctrl.user" update-pending-team-validation="$ctrl.updatePendingTeamValidation" pending-team-validation="$ctrl.pendingTeamValidation" on-tournament-start="$ctrl.onTournamentStart" on-password-guess="$ctrl.checkPassword" verified-password="$ctrl.verifiedPassword" player-guide-state="$ctrl.playerGuideState" submit-twitch-id="$ctrl.saveTwitchIDOnUser" check-vgl-consent-validation="$ctrl.checkVglConsentValidation" bf-following="$ctrl.bfFollowing" on-join-code-guess="$ctrl.onJoinCodeGuess" show-pre-join-modal="$ctrl.showPreJoinModal" show-roster-toggle-popover="$ctrl.showRosterTogglePopover" ladder-enqueue="$ctrl.ladderEnqueue" ladder-dequeue="$ctrl.ladderDequeue" update-ladder-status="$ctrl.updateLadderStatus" ladder-status="$ctrl.ladderStatus" ladder-stage="$ctrl.ladderStage" user-matches="$ctrl.userMatches" ffa-your-match-starting-soon="$ctrl.ffaYourMatchStartingSoon" ffa-your-match-starts-in="$ctrl.ffaYourMatchStartsIn" update-player-guide-state="$ctrl.updatePlayerGuideState" set-custom-join-flow-state="$ctrl.setCustomJoinFlowState" get-waitlist-status="$ctrl.getWaitlistStatus" waitlist-status="$ctrl.waitlistStatus" ng-if="$ctrl.isDesktop &amp;&amp; $ctrl.customJoinFlowState === 'close'">
      <!---->
      <div class="tournament-guide-header">
        <div id="header-title">
          <!---->
          <!----><h2 translate="" ng-if="
            (
              startSeconds &lt; 0
              &amp;&amp; (
                !ladderStage
                || ladderStage.$$ladderStageEnded
              )
            )
            || !tournament.registrationEnabled
            || !tournament.isPublished
            || tournament.hasFinishedSeeding
            || (tournament.leagueID &amp;&amp; organization.slug !== 'one-esports')
          "><span>Registration Closed</span></h2><!---->
        </div>
        <!----><div id="header-items" class="text-left" ng-if="!hideParticipantCount">
          <div class="details-item" flex="" row="">
            <h5>
              <span class="count"> 47 </span>
              <!---->
              <!---->
              <!----><span class="secondary-text team-or-player" ng-if="tournament.type !== 'solo'" translate=""><span>Teams</span></span><!---->
              <span class="secondary-text text-registered" translate=""><span>Registered</span></span>
              <!----><span class="secondary-text ml-5" ng-if="pendingTeamsCount &amp;&amp; pendingTeamsCount &gt; 0" translate=""><span>(4 pending)</span></span><!---->
            </h5>
            <!----><bf-info-button class="border-navy-325 ml-10" ng-if="pendingTeamsCount &amp;&amp; pendingTeamsCount &gt; 0" info="pendingTeamsInfo" container="'.details-item'"><div class="info-btn text-center font-500" data-placement="left" data-title="Pending Teams have started the join process but still have steps to complete before finishing." data-trigger="hover" data-html="true" bs-tooltip="" data-container=".details-item">?</div>
    </bf-info-button><!---->
          </div>
    
    
          <!----><div class="details-item" ng-if="tournament.type === 'draft' || tournament.type === 'team&amp;draft' ">
            <h5>
              <span class="count">14</span>
              <span class="secondary-text team-or-player" translate=""><span>Free Agents Registered</span></span>
            </h5>
          </div><!---->
    
        </div><!---->
      </div>
    
      <!---->
    
      <!----><div class="hidden-sm hidden-xs bfy-play-again" tournament="tournament" ng-if="(userMatches.noMoreMatches || (!showUserMatches &amp;&amp; permissions.isCheckInOver)) &amp;&amp;
        userMatches.stages.length &gt; 0 &amp;&amp;
        userMatches.numberOfStartedStages &gt; 0 &amp;&amp;
        organization.slug !== 'rlcs'">
      <!----><div class="play-again-title" ng-if="nextTournament">
        <h4 translate=""><span>Up Next</span></h4>
        <a ui-sref="discovery" translate="" href="https://battlefy.com/discovery/"><span>More</span></a>
      </div><!---->
      <!----><div class="play-again-tournament-container" ng-if="nextTournament">
          <!----><bf-spotlight-card basic="true" tournament="nextTournament" ng-if="nextTournament"><div ng-click="$ctrl.goToTournament($ctrl.tournament)">
      <div class="date-tag fade-in"> in 21 hours </div>
      <div class="game-bg-container" ui-sref="tournament.details.info({ organizationSlug: $ctrl.tournament.organization.slug, titleSlug: $ctrl.tournament.slug, tournamentId: $ctrl.tournament._id })" title="🏆 Torneo Legendario - LAS - 5v5 - Domingo 20 hs ARG 🏆 ID 4005" href="//%F0%9F%8F%86-torneo-legendario-las-5v5-domingo-20-hs-arg-%F0%9F%8F%86-id-4005/5f40692f72caf64e0f2b73ed/info">
          <bf-image ratio="300/645" image-url="$ctrl.imageUrl" alt="$ctrl.tournament.name" style="padding-top: 46.5116%;"><!----><div class="animated actual-image fade-in" role="img" alt="🏆 Torneo Legendario - LAS - 5v5 - Domingo 20 hs ARG 🏆 ID 4005" ng-if="$ctrl.loaded" aria-label="" battlefy-background-image="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1597118718586.png?alt=media&amp;token=7a5c996e-05d6-4276-ae5e-b4b64fcfea14" style="background-image: url(&quot;https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1597118718586.png?alt=media&amp;token=7a5c996e-05d6-4276-ae5e-b4b64fcfea14&quot;); background-size: cover;"></div><!---->
    <img class="dummy-image" ng-src="https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F57faf55f215be5200c966705%2F1597118718586.png?alt=media&amp;token=7a5c996e-05d6-4276-ae5e-b4b64fcfea14" bfy-on-load="$ctrl.onImageLoad($event)" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/user-imgs57faf55f215be5200c9667051597118718586.png">
    <div class="animated image-loader ng-hide" ng-show="!$ctrl.loaded" style="">
      <i class="bfy-icon-mini-logo"></i>
    </div>
    </bf-image>
          <div class="card-details">
            <div class="details-header">
              <h4 ui-sref="$ctrl.tournament.details.info({ organizationSlug: $ctrl.tournament.organization.slug, titleSlug: $ctrl.tournament.slug, tournamentId: $ctrl.tournament._id })" data-ng-bind="$ctrl.tournament.name" data-ellipsis="">🏆 Torneo Legendario - LAS - 5v5 -…</h4>
              <!----><a ng-click="$ctrl.goToOrg($event)" ui-sref="organization.tournaments({ orgSlug: $ctrl.tournament.organization.slug })" data-ng-bind="$ctrl.tournament.organization.name" ng-if="!$ctrl.organization" data-ellipsis="" href="https://battlefy.com/"></a><!---->
            </div>
          </div>
          <div class="card-secondary-details">
            <p class="text-capitalize tournament-game">League of Legends</p>
            <div class="details-bottom basic">
              <p><i class="fa fa-calendar-o"></i><span>2020/08/30 </span></p>
              <p><i class="fa fa-map-marker"></i><span>Latin America South</span></p>
            </div>
            <div class="details-bottom advanced">
              <h4 class="tournament-name" data-ng-bind="$ctrl.tournament.name" data-ellipsis="">🏆 Torneo Legendario - LAS - 5v5 - Domingo 20 hs ARG 🏆 ID 4005</h4>
              <p><i class="fa fa-calendar-o"></i><span>2020/08/30 </span><i class="fa fa-map-marker"></i><span>Latin America South</span></p>
            </div>
            <i class="fa fa-2x fa-arrow-circle-o-right"></i>
          </div>
          <div class="card-hover-top"></div>
          <div class="card-hover-bottom"></div>
      </div>
    </div>
    </bf-spotlight-card><!---->
      </div><!---->
    </div><!---->
    
      <!----><bf-player-guide ng-if="!searchInProgress &amp;&amp; !showRoster" tournament="tournament" pending-team="pendingTeam" joined-team="joinedTeam" get-team="getTeam" show-invite-modal="showInviteModal" start-seconds="startSeconds" checkin-seconds="checkinSeconds" permissions="permissions" paid-for-tournament="paidForTournament" delete-pending-team="deletePendingTeam" rename-pending-team-player="renamePendingTeamPlayer" rename-joined-team-player="renameJoinedTeamPlayer" toggle-autojoin="toggleAutojoin" update-pending-team-validation="updatePendingTeamValidation" check-vgl-consent-validation="checkVglConsentValidation" pending-team-validation="pendingTeamValidation" on-tournament-start="onTournamentStart" on-password-guess="onPasswordGuess" verified-password="verifiedPassword" player-guide-state="playerGuideState" user="user" team-cap="tournament.teamCap" at-cap="atCap" toggle-roster="toggleRoster" submit-twitch-id="submitTwitchId" user-tournament-player="userTournamentPlayer" bf-following="bfFollowing" show-roster-toggle-popover="showRosterTogglePopover" show-pre-join-modal="showPreJoinModal" on-confirm-roster="onConfirmRoster" ladder-enqueue="ladderEnqueue" ladder-dequeue="ladderDequeue" update-ladder-status="updateLadderStatus" ladder-status="ladderStatus" ladder-stage="ladderStage" user-matches="userMatches" ffa-your-match-starting-soon="ffaYourMatchStartingSoon" ffa-your-match-starts-in="ffaYourMatchStartsIn" update-player-guide-state="updatePlayerGuideState" on-join-code-guess="onJoinCodeGuess" set-custom-join-flow-state="setCustomJoinFlowState"><div class="player-guide-card-container">
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
    
      <!----><h3 class="division-header letter-spacing-1px mb-10" ng-if="!$ctrl.playerGuideState.cardRegistrationClosed.render &amp;&amp; $ctrl.playerGuideState.cardPlayHeader.render" id="cardPlayHeader" style="transform: translate3d(0, 0px, 0)" translate=""><span>3. Play</span></h3><!---->
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!-- CSGO PLAY MATCH  OR WAIT FOR SERVER CREDZ -->
    
      <!---->
    
      <!---->
    
      <!----><bf-player-guide-card class="mb-10" title="'Play Again' | translate" help-text="$ctrl.playerGuideState.cardPlayAgain.helpText" ng-disabled="$ctrl.playerGuideState.cardPlayAgain.disabled" ng-if="!$ctrl.playerGuideState.cardRegistrationClosed.render &amp;&amp; $ctrl.playerGuideState.cardPlayAgain.render" id="cardPlayAgain" style="transform: translate3d(0, 33px, 0)"><div ng-class="{disable: $ctrl.isDisabled}">
      <div class="player-guide-header">
        <div class="player-guide-text">
          <!---->
          <div class="player-guide-title">Play Again</div>
        </div>
        <!---->
        <!---->
      </div>
      <div class="player-guide-body" ng-transclude="">
        <!---->
        <!---->
        <p class="text-gray" translate=""><span>There are no more matches for you to play at this time.</span></p>
        <button class="btn btn-primary btn-sm mt-10" ng-click="$ctrl.goToDiscovery();" translate=""><span>Show Me More Tournaments</span></button>
      </div>
    </div>
    </bf-player-guide-card><!---->
    
      <!---->
    
    </div>
    </bf-player-guide><!---->
    
      <!---->
    
      <!---->
    
      <!---->
    
      <!---->
    </div><!---->
    
      <!---->
    
    <!----><div ng-if="$ctrl.customJoinFlowState === 'close'" class="join-up-container hidden-desktop" ng-class="{
        'raised': $ctrl.gameSlug === 'hearthstone'
      }">
      <!----><bf-mobile-play-button ng-if="(($ctrl.registrationOpen &amp;&amp; $ctrl.permissions.canJoin) || $ctrl.permissions.isJoined)" show-mobile-player-menu="$ctrl.showMobilePlayerMenu" show-user-matches="$ctrl.showUserMatches" player-guide-state="$ctrl.playerGuideState" start-seconds="$ctrl.startSeconds" pending-team="$ctrl.pendingTeam" tournament="$ctrl.tournament" checkin-seconds="$ctrl.checkinSeconds" permissions="$ctrl.permissions" ladder-stage="$ctrl.ladderStage" ladder-status="$ctrl.ladderStatus"><div class="play-button-container">
      <!---->
      <!----><button class="button-action btn btn-primary border-rounded-top" ng-if="!$ctrl.isJoin" ng-click="$ctrl.showMobilePlayerMenu()" translate=""><span>Play</span></button><!---->
    </div>
    </bf-mobile-play-button><!---->
    </div><!---->
    
    <!---->
    
    <!---->
    
    <!---->
    
    <!---->
    </bf-tournament></div>
              </div>
            </div>
    </main>
    
    <!---->
    
    <!---->
    
    
    <bf-match-tie-prompt-modal><!----></bf-match-tie-prompt-modal>
    
    <bf-match-manual-tiebreaker-modal><!----></bf-match-manual-tiebreaker-modal>
    
    <!---->
    
    <!---->
    
    <!---->
    <!---->
    
    <!---->
    
    <!----></bf-app><div id="toast-container" ng-class="[config.position, config.animation]" class="toast-top-right"><!----></div><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/jquery.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/jquery-ui.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-messages.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-ui-router.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-inview.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ng-infinite-scroll.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/d3.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/d3-tip.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-sanitize.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-cookies.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-gettext.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/underscore-min.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/toaster.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/moment-with-locales.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/moment-timezone-with-data-10-year-range.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/moment-duration-format.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/tmhDynamicLocale.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-strap_002.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-strap.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/jquery_002.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-animate.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/underscore.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/bootstrap-slider.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/slider.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-carousel.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-touch.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ct-ui-router-extras.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/humanize-duration.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/smart-table.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/auth0.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/scrollMonitor.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/aws-sdk.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-intercom.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/clipboard.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/ngclipboard.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/checkout.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-recaptcha.js"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/daterangepicker.js"></script><!-- Youtube Embeds --><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/iframe_api"></script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/angular-youtube-embed.js"></script><script>window.intercomSettings = {};
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/webfontloader.js"></script><script>WebFont.load({
            google: {
              families: ['Roboto:400,500,300,400italic,300italic,100italic,100']
            }
          });</script><script src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/bundle.js"></script><script type="text/javascript" src="Torneo%20Poros%20de%20Colombia%205v5%20Server%20LAN%20Lunes%2019hs%20Col%20ID%203902%20by%20Stronger%20E-sports_files/a"></script><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div><iframe id="intercom-frame" style="position: absolute !important; opacity: 0 !important; width: 1px !important; height: 1px !important; top: 0 !important; left: 0 !important; border: none !important; display: block !important; z-index: -1 !important; pointer-events: none;" aria-hidden="true" tabindex="-1" title="Intercom"></iframe><div class="intercom-lightweight-app" aria-live="polite"><style id="intercom-lightweight-app-style" type="text/css">
      @keyframes intercom-lightweight-app-launcher {
        from {
          opacity: 0;
          transform: scale(0.5);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    
      @keyframes intercom-lightweight-app-gradient {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    
      @keyframes intercom-lightweight-app-messenger {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    
      .intercom-lightweight-app {
        position: fixed;
        z-index: 2147483001;
        width: 0;
        height: 0;
        font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;
      }
    
      .intercom-lightweight-app-gradient {
        position: fixed;
        z-index: 2147483002;
        width: 500px;
        height: 500px;
        bottom: 0;
        right: 0;
        pointer-events: none;
        background: radial-gradient(
          ellipse at bottom right,
          rgba(29, 39, 54, 0.16) 0%,
          rgba(29, 39, 54, 0) 72%);
        animation: intercom-lightweight-app-gradient 200ms ease-out;
      }
    
      .intercom-lightweight-app-launcher {
        position: fixed;
        z-index: 2147483003;
        bottom: 60px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #28303F;
        cursor: pointer;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);
        animation: intercom-lightweight-app-launcher 250ms ease;
      }
    
      .intercom-lightweight-app-launcher:focus {
        outline: none;
        box-shadow: inset 0 0 0 5px #3b99fc;
      }
    
      .intercom-lightweight-app-launcher-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        transition: transform 100ms linear, opacity 80ms linear;
      }
    
      .intercom-lightweight-app-launcher-icon-open {
        
            opacity: 1;
            transform: rotate(0deg) scale(1);
          
      }
    
      .intercom-lightweight-app-launcher-icon-open svg {
        width: 28px;
        height: 32px;
      }
    
      .intercom-lightweight-app-launcher-icon-open svg path {
        fill: rgb(255, 255, 255);
      }
    
      .intercom-lightweight-app-launcher-icon-self-serve {
        
            opacity: 1;
            transform: rotate(0deg) scale(1);
          
      }
    
      .intercom-lightweight-app-launcher-icon-self-serve svg {
        height: 56px;
      }
    
      .intercom-lightweight-app-launcher-icon-self-serve svg path {
        fill: rgb(255, 255, 255);
      }
    
      .intercom-lightweight-app-launcher-custom-icon-open {
        max-height: 36px;
        max-width: 36px;
        
            opacity: 1;
            transform: rotate(0deg) scale(1);
          
      }
    
      .intercom-lightweight-app-launcher-icon-minimize {
        
            opacity: 0;
            transform: rotate(-60deg) scale(0);
          
      }
    
      .intercom-lightweight-app-launcher-icon-minimize svg {
        width: 16px;
      }
    
      .intercom-lightweight-app-launcher-icon-minimize svg path {
        fill: rgb(255, 255, 255);
      }
    
      .intercom-lightweight-app-messenger {
        position: fixed;
        z-index: 2147483003;
        overflow: hidden;
        background-color: white;
        animation: intercom-lightweight-app-messenger 250ms ease-out;
        
            width: 376px;
            height: calc(100% - 80px);
            max-height: 704px;
            min-height: 250px;
            right: 20px;
            bottom: 60px;
            box-shadow: 0 5px 40px rgba(0,0,0,0.16);
            border-radius: 8px;
          
      }
    
      .intercom-lightweight-app-messenger-header {
        height: 75px;
        background: linear-gradient(
          135deg,
          rgb(40, 48, 63) 0%,
          rgb(0, 0, 1) 100%
        );
      }
    
      @media print {
        .intercom-lightweight-app {
          display: none;
        }
      }
    </style></div><div style="position: absolute; top: 0px; opacity: 0; pointer-events: none; box-sizing: border-box;" class="d3-tip"></div><div style="position: absolute; top: 0px; opacity: 0; pointer-events: none; box-sizing: border-box;" class="d3-tip"></div><div style="position: absolute; top: 736.8px; opacity: 0; pointer-events: none; box-sizing: border-box; left: 779px;" class="d3-tip n">Match score verified by Battlefy</div><div style="position: absolute; top: 0px; opacity: 0; pointer-events: none; box-sizing: border-box;" class="d3-tip"></div><div style="position: absolute; top: 873.8px; opacity: 0; pointer-events: none; box-sizing: border-box; left: 1138.38px;" class="d3-tip n">Match score verified by Battlefy</div><div style="position: absolute; top: 0px; opacity: 0; pointer-events: none; box-sizing: border-box;" class="d3-tip"></div><div style="position: absolute; top: 806.8px; opacity: 0; pointer-events: none; box-sizing: border-box; left: 850.383px;" class="d3-tip n">Match score verified by Battlefy</div></body></html>`;
}