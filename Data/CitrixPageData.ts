import { AppsOutlined, BookmarkBorderOutlined, ComputerOutlined, SvgIconComponent } from "@mui/icons-material"

interface CitrixHeaderPart {
  icon: SvgIconComponent,
  description: string
}

export const CitrixHeader: CitrixHeaderPart[] = [
  {
    icon: BookmarkBorderOutlined,
    description: 'FAVOURITES'
  },
  {
    icon: ComputerOutlined,
    description: 'DESKTOPS'
  },
  {
    icon: AppsOutlined,
    description: 'APPS'
  }
]

interface PageItemType {
  imagesrc: string,
  text: string,
  subtext?: string
}

export const PageItem: PageItemType[] = [
  {
    imagesrc: 'https://1.bp.blogspot.com/-rnqykMTuaHw/XJDfaizUHiI/AAAAAAAAJOY/vKUXLUXRid83y84ALW-pi0YHIGW6pAnHgCK4BGAYYCw/s1600/logo%2Bmicrosoft%2Baccess%2Bicon.png',
    text: 'Access 2016',
    subtext: 'Automation'
  },
  {
    imagesrc: 'https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png',
    text: 'Calculator'
  },
  {
    imagesrc: 'https://img.icons8.com/color/2x/powerpoint.png',
    text: 'MS PowerPoint'
  },
  {
    imagesrc: 'https://img.icons8.com/nolan/2x/ms-excel.png',
    text: 'MS Excel'
  },
  {
    imagesrc: 'https://img.icons8.com/color/2x/microsoft-outlook-2019--v2.png',
    text: 'MS Outlook'
  },
  {
    imagesrc: 'https://img.icons8.com/external-bearicons-blue-bearicons/2x/external-ERP-miscellany-texts-and-badges-bearicons-blue-bearicons.png',
    text: 'ERP System'
  },
  {
    imagesrc: 'https://img.icons8.com/dusk/2x/notes-app.png',
    text: 'Notes App'
  },
  {
    imagesrc: 'https://img.icons8.com/dusk/2x/sql.png',
    text: 'SQL Database'
  },
  {
    imagesrc: 'https://img.icons8.com/dusk/2x/ms-one-note.png',
    text: 'OneNote'
  },
  {
    imagesrc: 'https://img.icons8.com/dusk/2x/ms-publisher.png',
    text: 'MS Publisher'
  },
  {
    imagesrc: 'https://img.icons8.com/dusk/2x/microsoft-teams.png',
    text: 'MS Teams'
  },
  {
    imagesrc: 'https://img.icons8.com/color/2x/cisco-webex-meetings.png',
    text: 'Webex'
  },
  {
    imagesrc: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/2x/external-trading-stock-market-wanicon-lineal-color-wanicon.png',
    text: 'Trading Console',
    subtext: 'Automation'
  }
]