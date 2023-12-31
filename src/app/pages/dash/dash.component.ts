import { Component, OnInit } from "@angular/core";
import {
  CardProvider,
  CategoryType,
} from "src/app/elements/card/card.component";

export interface Category {
  title: string;
  providers: CardProvider[];
}

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.scss"],
})
export class DashComponent implements OnInit {
  categories: Category[];

  constructor() {}

  ngOnInit() {
    this.getDefault();
  }

  getDefault() {
    this.categories = [
      {
        title: "Streaming",
        providers: [
          {
            name: "YouTube",
            url: "https://youtube.com",
            color: "#c2c2c2",
            logo: "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Bilibili",
            url: "https://www.bilibili.com/",
            color: "#c2c2c2",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Bilibili_logo.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "duboku",
            url: "https://www.duboku.com/",
            color: "#c2c2c2",
            logo: "https://www.duboku.tv/template/mytheme/statics/img/logo.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Netflix",
            url: "https://netflix.com",
            color: "#121212",
            logo: "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Disney+",
            url: "https://disneyplus.com/",
            color: "#040814",
            logo: "https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Logo.wine.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Hulu",
            url: "https://hulu.com",
            color: "#121212",
            logo: "https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Amazon Prime Video",
            url: "https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011",
            color: "#232f3e",
            logo: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Max",
            url: "https://max.com/",
            color: "#000e46",
            logo: "https://images.cdn.prd.api.discomax.com/2023%2F4%2F13%2F6464c054-300e-4800-815f-84e63545ca8c.png?h=192&f=webp",
            category: CategoryType.Streaming,
          },
          {
            name: "Apple TV+",
            url: "https://tv.apple.com/",
            color: "#121212",
            logo: "https://tv.apple.com/assets/brands/Apple_TV_Plus_logo_white-fa7126f2bf5269837b484153a88493f8.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Peacock",
            url: "https://www.peacocktv.com/watch/home",
            color: "#121212",
            logo: "https://www.peacocktv.com/dam/growth/assets/what-is-peacock/11.19/peacock-logo-white.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Paramount+",
            url: "https://www.paramountplus.com/",
            color: "#0036c4",
            logo: "https://wwwimage-us.pplusstatic.com/base/files/cbs_page_attribute/pplus_logo_white.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Rumble",
            url: "https://rumble.com/",
            color: "#10212F",
            logo: "https://corp.rumble.com/wp-content/uploads/2022/01/logo.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Crackle",
            url: "https://crackle.com/",
            color: "#121212",
            logo: "https://theme.zdassets.com/theme_assets/2245835/235983e17cb74a10434931c8ec05c9d9c1def3e6.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Curiosity Stream",
            url: "https://curiositystream.com/",
            color: "#161e37",
            logo: "https://www.logo.wine/a/logo/CuriosityStream/CuriosityStream-Secondary-White-Logo.wine.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Crunchyroll",
            url: "https://crunchyroll.com/",
            color: "#c2c2c2",
            logo: "https://www.logo.wine/a/logo/Crunchyroll/Crunchyroll-Logo.wine.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "Rakuten Viki",
            url: "https://viki.com/",
            color: "#0C9BFF",
            logo: "https://m.media-amazon.com/images/I/31T4eMT29IL.png",
            category: CategoryType.Streaming,
          },
          {
            name: "Shudder",
            url: "https://www.shudder.com",
            color: "#121212",
            logo: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600/sh/shudder-logo-flat.png",
            category: CategoryType.Streaming,
          },
          {
            name: "hotstar",
            url: "https://hotstar.com",
            color: "#c2c2c2",
            logo: "https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/hotstar-logo.svg",
            category: CategoryType.Streaming,
          },
          {
            name: "PBS Kids",
            url: "https://pbskids.org/video/livetv",
            color: "#121212",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/PBS_Kids_Logo.svg/150px-PBS_Kids_Logo.svg.png",
            category: CategoryType.Streaming,
          },
        ],
      },
      {
        title: "Live Television",
        providers: [
          {
            name: "YouTube TV",
            url: "https://tv.youtube.com",
            color: "#c2c2c2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/YouTube_TV_logo.svg",
            category: CategoryType.Live,
          },
          {
            name: "Sling",
            url: "https://sling.com/",
            color: "#02223b",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Sling_TV_logo.svg",
            category: CategoryType.Live,
          },
          {
            name: "AT&T TV",
            url: "https://stream.directv.com",
            color: "#c2c2c2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/DIRECTV_STREAM_2021_logo.svg/220px-DIRECTV_STREAM_2021_logo.svg.png",
            category: CategoryType.Live,
          },
          {
            name: "Xfinity Stream",
            url: "https://xfinity.com/stream",
            color: "#121212",
            logo: "https://www.xfinity.com/stream/partners/comcast/logo.svg",
            category: CategoryType.Live,
          },
          {
            name: "fubotv",
            url: "https://fubo.tv",
            color: "#1d175c",
            logo: "https://www.ccmtc.com/wp-content/uploads/2021/08/light-1.png",
            category: CategoryType.Live,
          },
          {
            name: "philo",
            url: "https://philo.com",
            color: "#066fd0",
            logo: "https://static-us-east-2-fastly-a.www.philo.com/storage/images/philo-logo-white.png",
            category: CategoryType.Live,
          },
          {
            name: "tubi",
            url: "https://tubitv.com/",
            color: "#fa382f",
            logo: "https://www.logo.wine/a/logo/Tubi/Tubi-White-Logo.wine.svg",
            category: CategoryType.Live,
          },
          {
            name: "Pluto TV",
            url: "https://pluto.tv/",
            color: "#121212",
            logo: "https://static-homepage-en.pluto.tv/hp-assets/images/pluto-tv-abbd637b3dc06fb0f0c5ee6eea402166.svg",
            category: CategoryType.Live,
          },
        ],
      },
      {
        title: "Sports",
        providers: [
          {
            name: "ESPN",
            url: "https://www.espn.com/watch/",
            color: "#d00",
            logo: "https://secure.espncdn.com/redesign/assets/img/logos/logo-espn-82x20.png",
            category: CategoryType.Sports,
          },
          {
            name: "FOX Sports",
            url: "https://www.foxsports.com/live",
            color: "#c2c2c2",
            logo: "https://statics.foxsports.com/static/orion/style/images/icons/fox-logos/fox-logo-black.svg",
            category: CategoryType.Sports,
          },
          {
            name: "NFL+",
            url: "https://www.nfl.com/plus/",
            color: "#121212",
            logo: "https://static.www.nfl.com/league/apps/shared/svg/PrimaryDark.svg",
            category: CategoryType.Sports,
          },
          {
            name: "MLBtv",
            url: "https://www.mlb.com/tv",
            color: "#041e42",
            logo: "https://images.ctfassets.net/iiozhi00a8lc/78yBC9oWuP1VldT6aJT1sL/8cc2b4b9d9ab83e6a90ee48476b66074/MLBTV_19_ondark_RGB.svg",
            category: CategoryType.Sports,
          },
          {
            name: "NBA League Pass",
            url: "https://www.nba.com/watch/league-pass",
            color: "#143b75",
            logo: "https://cdn.comcast.com/-/jssmedia/Images/www_xfinity_com/TV/Sports/NBA%20League%20Pass/NBA_League_Pass_horiz_wht.png?rev=5c91466f-7896-4f77-8553-5a05cea732af",
            category: CategoryType.Sports,
          },
          {
            name: "DAZN",
            url: "https://www.dazn.com/",
            color: "#0c161c",
            logo: "https://www.dazn.com/favicon.svg",
            category: CategoryType.Sports,
          },
        ],
      },
      {
        title: "Personal Media",
        providers: [
          {
            name: "Plex",
            url: "https://app.plex.tv/desktop",
            color: "#1f2326",
            logo: "https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg",
            category: CategoryType.Personal,
          },
          {
            name: "Emby",
            url: "http://app.emby.media/",
            color: "#212121",
            logo: "https://emby.media/resources/logowhite_1881.png",
            category: CategoryType.Personal,
          },
          {
            name: "Google Drive",
            url: "https://drive.google.com/",
            color: "#c2c2c2",
            logo: "https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-64dp/logo_drive_2020q4_color_2x_web_64dp.png",
            category: CategoryType.Personal,
          },
          {
            name: "Dropbox",
            url: "https://dropbox.com/",
            color: "#0d2f81",
            logo: "https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-White-Logo.wine.svg",
            category: CategoryType.Personal,
          },
          {
            name: "iCloud",
            url: "https://icloud.com/iclouddrive",
            color: "#c2c2c2",
            logo: "https://financesonline.com/uploads/2019/08/icloud-logo1.png",
            category: CategoryType.Personal,
          },
          {
            name: "OneDrive",
            url: "https://onedrive.live.com/?id=root",
            color: "#0078d4",
            logo: "https://cdn.freebiesupply.com/logos/large/2x/onedrive-logo-black-and-white.png",
            category: CategoryType.Personal,
          },
          {
            name: "Box",
            url: "https://box.com",
            color: "#0061d5",
            logo: "https://www.gainsight.com/wp-content/uploads/2015/09/box-logo.png",
            category: CategoryType.Personal,
          },
          {
            name: "Google Photos",
            url: "https://photos.google.com/",
            color: "#c2c2c2",
            logo: "https://www.google.com/photos/static/2020/images/index/logo_photos_192px.svg",
            category: CategoryType.Personal,
          },
          {
            name: "Google Books",
            url: "https://play.google.com/books",
            color: "#c2c2c2",
            logo: "https://cdn.worldvectorlogo.com/logos/google-play-books.svg",
            category: CategoryType.Personal,
          },
        ],
      },
      {
        title: "Gaming",
        providers: [
          {
            name: "Twitch",
            url: "https://twitch.tv",
            color: "#8d45f8",
            logo: "https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg",
            category: CategoryType.Gaming,
          },
          {
            name: "Kick",
            url: "https://kick.com",
            color: "#0c0e0f",
            logo: "https://i.imgur.com/BdexlQP.png",
            category: CategoryType.Gaming,
          },
          {
            name: "Facebook Gaming",
            url: "https://fb.gg",
            color: "#005fec",
            logo: "https://static.xx.fbcdn.net/rsrc.php/yV/r/cE21p7BN2IP.svg",
            category: CategoryType.Gaming,
          },
          {
            name: "DLive",
            url: "https://dlive.tv/",
            color: "#121212",
            logo: "https://dlive.tv/img/logo-darkmode.50133ca0.svg",
            category: CategoryType.Gaming,
          },
          {
            name: "Caffeine",
            url: "https://caffeine.tv/",
            color: "#0000ff",
            logo: "https://cdn.apk-cloud.com/detail/screenshot/uIs50DZc_Wun-tXMjGT8TR9HlNM17NyGpzpJ_jKp2LDi2WmfvtQlELjZhyHP_Py0Mw=h900.webp?vr",
            category: CategoryType.Gaming,
          },
          {
            name: "Xbox",
            url: "https://www.xbox.com/play",
            color: "#107c10",
            logo: "https://cdn.freebiesupply.com/logos/large/2x/xbox-9-logo-black-and-white.png",
            category: CategoryType.Gaming,
          },
          {
            name: "GeForce Now",
            url: "https://play.geforcenow.com/mall/",
            color: "#121212",
            logo: "https://cdn.steamgriddb.com/logo/15ef9d499850bb871944e0b52083173a.png",
            category: CategoryType.Gaming,
          },
          {
            name: "Amazon Luna",
            url: "https://www.amazon.com/luna/",
            color: "#3c007d",
            logo: "https://m.media-amazon.com/images/G/01/T/TC05316420/A07531864/brand/luna-logo.png",
            category: CategoryType.Gaming,
          },
          {
            name: "DOOM Shareware",
            url: "https://uacorp.space",
            color: "#121212",
            logo: "https://static.wikia.nocookie.net/logopedia/images/0/09/Doom_1.gif",
            category: CategoryType.Gaming,
          },
        ],
      },
      {
        title: "Utility",
        providers: [
          {
            name: "Google Maps",
            url: "https://maps.google.com/",
            color: "#c2c2c2",
            logo: "https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q",
            category: CategoryType.Utility,
          },
          {
            name: "Waze",
            url: "https://waze.com/livemap",
            color: "#47cfee",
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d0/Waze-logo-2020.svg/800px-Waze-logo-2020.svg.png",
            category: CategoryType.Utility,
          },
          {
            name: "ABetterRoutePlanner",
            url: "https://new.abetterrouteplanner.com",
            color: "#2196f3",
            logo: "https://new.abetterrouteplanner.com/abrp_banner.png",
            category: CategoryType.Utility,
          },
          {
            name: "Plugshare",
            url: "https://www.plugshare.com/",
            color: "#003ca6",
            logo: "https://assets.plugshare.com/assets/plugshare-web.png",
            category: CategoryType.Utility,
          },
          {
            name: "Tesla",
            url: "https://tesla.com/teslaaccount",
            color: "#e12026",
            logo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-White-Logo.wine.svg",
            category: CategoryType.Utility,
          },
          {
            name: "Ventusky",
            url: "https://www.ventusky.com/?l=radar",
            color: "#31537d",
            logo: "https://i.imgur.com/OOZBXGw.png",
            category: CategoryType.Utility,
          },
          {
            name: "Google Calendar",
            url: "https://calendar.google.com",
            color: "#c2c2c2",
            logo: `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date().getDate()}_2x.png`,
            category: CategoryType.Utility,
          },
        ],
      },
    ];
  }
}
