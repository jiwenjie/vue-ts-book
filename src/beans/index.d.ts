// 基础
export interface Meta {
  views: number;
  likes: number;
  comments: number;
}

export interface UserInfo {
  _id: string;
  name: string;
  avatar: string | any;
}

// 导航 nav
export interface NavListItem {
  index: string;
  path: string;
  name: string;
}

// banner
export interface Banner {
  desc: string,
  id: number,
  imagePath: string,
  isVisible: number,
  order: number,
  title: string,
  type: number,
  url: string,
  cur: boolean, // 标示是否是当前的 banner
}
