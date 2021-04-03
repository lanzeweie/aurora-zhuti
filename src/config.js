/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  title: '往事之所',
  subtitle: '时间之快 如似流沙',
  /**
   * Github Issues 配置
   */
  username: 'lanzeweie', // github 用户名
  repository: 'Article', // 文章仓库地址
  token: ['d06b01448ae33c4c8735', '3bded6a8e6f630aa9a2f'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: 'de768f3d234ff9dc39cc',
    clientSecret: 'ac4c1a37b24012035ef9f77864a7eed348543c10',
    repo: 'comment', // 评论仓库地址
    owner: 'lanzeweie',
    admin: ['lanzeweie'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
    proxy: 'https://bokegitalkcors.herokuapp.com/https://github.com/login/oauth/access_token',
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: '3Aj8U09c5UWu8SdcpxkUvzqq-MdYXbMMI',
    appKey: 'xqhT7Y3v0kRyiXrRjjb6L63n',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '归 一', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '总 分 类',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '筛 选',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '往 昔',
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: true,
    enableComment: true,
    qoute: '喜爱 的 电影 电视剧',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '终 焉',
    avatar: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/龙猫.png',
 /* graduated: 'University of Electronic Science and Technology of China (UESTC)',
    college: 'Communication&Information Engineering', */
    contact: [
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/email.png',
        link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=QS0gLzskNiQoJAEnLjksICgtbyIuLA',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
        link: 'https://github.com/lanzeweie',
      },
      {
        icon: 'https://tenkinoko.com/assets/images/common/share-tw.png',
        link: 'https://twitter.com/kjXAQVGuLD9iTkA',
      }
    ]
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/zfb.png',
    },
    {
      name: '微信',
      img: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/wx.png',
    },
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: 'グランドエスケープ',
      三浦透子: '三浦透子',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/彼女は旅に出る.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/グランドエスケープ.jpg',
    },
    {
      name: '彼女は旅に出る',
      artist: '鎖那',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/彼女は旅に出る.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/彼女は旅に出る.jpg',
    },
    {
      name: '三葉のテー',
      artist: 'RADWIMPS',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/三葉のテーマ.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/君名.jpg',
    },
    {
      name: '打上火花',
      artist: 'DAOKO,米津玄師',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/打上火花.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/打上火花.jpg',
    },
    {
      name: 'HYDRA',
      artist: 'MYTH&ROID',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/HYDRA.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/HYDRA.jpg',
    },
    {
      name: '最美的期待',
      artist: '周笔畅',
      url: 'https://cdn.jsdelivr.net/gh/lanzeweie/cdn/Music/最美的期待.mp3',
      cover: '//cdn.jsdelivr.net/gh/lanzeweie/cdn/picture/最美的期待.jpg',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],
}
