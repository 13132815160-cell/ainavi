// AiNavi - AI工具数据库 v2.0（200条）
const AI_TOOLS = [
  // ===== 写作助手 =====
  { id:1, name:"ChatGPT", tag:"GPT-4o", desc:"OpenAI旗舰对话AI，支持写作、编程、分析等全场景任务", url:"https://chat.openai.com", cat:"写作助手", tags:["对话","写作","编程"], hot:true, free:false, icon:"🤖", rating:4.9, users:"2亿+" },
  { id:2, name:"Claude", tag:"Claude 3.7", desc:"Anthropic出品，长文本处理能力极强，擅长分析写作", url:"https://claude.ai", cat:"写作助手", tags:["对话","写作","分析"], hot:true, free:true, icon:"🧠", rating:4.8, users:"5000万+" },
  { id:3, name:"DeepSeek", tag:"V3", desc:"国产顶级大模型，推理能力强，完全免费，中文理解优秀", url:"https://chat.deepseek.com", cat:"写作助手", tags:["对话","推理","中文"], hot:true, free:true, icon:"🔍", rating:4.8, users:"1亿+" },
  { id:4, name:"文心一言", tag:"ERNIE 4.0", desc:"百度出品，中文理解深度优秀，支持文生图、搜索增强", url:"https://yiyan.baidu.com", cat:"写作助手", tags:["对话","中文","搜索"], hot:true, free:true, icon:"🌊", rating:4.5, users:"1亿+" },
  { id:5, name:"通义千问", tag:"Qwen Max", desc:"阿里云大模型，企业级稳定，支持多模态输入", url:"https://tongyi.aliyun.com", cat:"写作助手", tags:["对话","多模态","企业"], hot:false, free:true, icon:"💬", rating:4.6, users:"5000万+" },
  { id:6, name:"豆包", tag:"MarsCode", desc:"字节跳动AI助手，界面清爽，多场景智能创作", url:"https://www.doubao.com", cat:"写作助手", tags:["对话","创作","免费"], hot:true, free:true, icon:"🫘", rating:4.5, users:"8000万+" },
  { id:7, name:"Kimi", tag:"Moonshot", desc:"月之暗面出品，超长上下文，可读取文件/网页", url:"https://kimi.moonshot.cn", cat:"写作助手", tags:["长文本","阅读","分析"], hot:true, free:true, icon:"🌙", rating:4.7, users:"3000万+" },
  { id:8, name:"讯飞星火", tag:"Spark 4.0", desc:"科大讯飞AI，语音交互能力强，教育场景专属优化", url:"https://xinghuo.xfyun.cn", cat:"写作助手", tags:["语音","教育","对话"], hot:false, free:true, icon:"✨", rating:4.4, users:"3000万+" },
  { id:9, name:"Gemini", tag:"2.0 Flash", desc:"Google出品多模态AI，与Google生态深度整合", url:"https://gemini.google.com", cat:"写作助手", tags:["多模态","Google","对话"], hot:true, free:true, icon:"♊", rating:4.6, users:"5000万+" },
  { id:10, name:"Copilot", tag:"GPT-4o", desc:"微软AI助手，免费使用GPT-4o，Edge浏览器深度集成", url:"https://copilot.microsoft.com", cat:"写作助手", tags:["微软","免费","GPT-4"], hot:false, free:true, icon:"🪟", rating:4.4, users:"1亿+" },
  { id:11, name:"Jasper", tag:"Pro", desc:"专为营销人员设计的AI写作工具，模板丰富", url:"https://www.jasper.ai", cat:"写作助手", tags:["营销","文案","模板"], hot:false, free:false, icon:"📝", rating:4.3, users:"100万+" },
  { id:12, name:"Copy.ai", tag:"v3", desc:"营销文案AI工具，支持博客、社媒、广告多种格式", url:"https://www.copy.ai", cat:"写作助手", tags:["文案","营销","社媒"], hot:false, free:true, icon:"📋", rating:4.2, users:"200万+" },
  { id:101, name:"Writesonic", tag:"v3", desc:"AI内容营销平台，SEO文章、广告文案、落地页一站式生成", url:"https://writesonic.com", cat:"写作助手", tags:["SEO","营销","内容"], hot:false, free:true, icon:"✍️", rating:4.3, users:"300万+" },
  { id:102, name:"Rytr", tag:"v2", desc:"性价比最高的AI写作工具，40+模板，30+语言支持", url:"https://rytr.me", cat:"写作助手", tags:["多语言","模板","性价比"], hot:false, free:true, icon:"🖊️", rating:4.2, users:"500万+" },
  { id:103, name:"Sudowrite", tag:"v3", desc:"专为小说作家设计的AI，擅长情节延伸和风格仿写", url:"https://www.sudowrite.com", cat:"写作助手", tags:["小说","创意写作","风格"], hot:false, free:false, icon:"📖", rating:4.4, users:"50万+" },
  { id:104, name:"NovelAI", tag:"v4", desc:"AI辅助小说创作，支持自定义世界观和角色记忆", url:"https://novelai.net", cat:"写作助手", tags:["小说","角色","世界观"], hot:false, free:false, icon:"📚", rating:4.3, users:"100万+" },

  // ===== AI绘画 =====
  { id:13, name:"Midjourney", tag:"v7", desc:"业界最强AI绘画，画质顶级，创意无限，艺术家首选", url:"https://www.midjourney.com", cat:"AI绘画", tags:["绘画","艺术","高质量"], hot:true, free:false, icon:"🎨", rating:4.9, users:"2000万+" },
  { id:14, name:"Stable Diffusion", tag:"SDXL", desc:"开源AI绘画神器，本地运行，完全可定制，无审查限制", url:"https://stability.ai", cat:"AI绘画", tags:["开源","本地","绘画"], hot:true, free:true, icon:"🌀", rating:4.7, users:"1000万+" },
  { id:15, name:"DALL-E 3", tag:"HD", desc:"OpenAI绘画模型，文字理解准确，与ChatGPT无缝集成", url:"https://openai.com/dall-e-3", cat:"AI绘画", tags:["OpenAI","绘画","精准"], hot:false, free:false, icon:"🖼️", rating:4.6, users:"500万+" },
  { id:16, name:"Ideogram", tag:"v3", desc:"擅长文字渲染的AI绘画工具，海报设计首选", url:"https://ideogram.ai", cat:"AI绘画", tags:["文字渲染","海报","设计"], hot:true, free:true, icon:"💡", rating:4.7, users:"300万+" },
  { id:17, name:"通义万相", tag:"v2", desc:"阿里云AI绘画，中文提示词友好，国内访问稳定", url:"https://tongyi.aliyun.com/wanxiang", cat:"AI绘画", tags:["中文","绘画","免费"], hot:false, free:true, icon:"🖌️", rating:4.4, users:"500万+" },
  { id:18, name:"文心一格", tag:"v3", desc:"百度AI绘画，支持多种国风风格，中文提示词优化", url:"https://yige.baidu.com", cat:"AI绘画", tags:["国风","中文","百度"], hot:false, free:true, icon:"🏮", rating:4.3, users:"300万+" },
  { id:19, name:"Adobe Firefly", tag:"v3", desc:"Adobe官方AI绘画，与PS/AI深度集成，商用安全", url:"https://firefly.adobe.com", cat:"AI绘画", tags:["Adobe","商用","设计"], hot:false, free:true, icon:"🔥", rating:4.5, users:"500万+" },
  { id:20, name:"Leonardo.ai", tag:"v2", desc:"游戏角色和概念艺术设计专家，风格控制精细", url:"https://leonardo.ai", cat:"AI绘画", tags:["游戏","角色","概念艺术"], hot:false, free:true, icon:"🦁", rating:4.5, users:"400万+" },
  { id:21, name:"即梦AI", tag:"v2", desc:"字节跳动AI绘画，中文用户友好，与剪映联动", url:"https://jimeng.jianying.com", cat:"AI绘画", tags:["字节","绘画","中文"], hot:true, free:true, icon:"🌸", rating:4.5, users:"1000万+" },
  { id:22, name:"Flux", tag:"1.1 Pro", desc:"目前最强写实照片生成模型，超越Midjourney写实能力", url:"https://blackforestlabs.ai", cat:"AI绘画", tags:["写实","照片","高质量"], hot:true, free:false, icon:"⚡", rating:4.8, users:"200万+" },
  { id:105, name:"Bing Image Creator", tag:"v4", desc:"微软免费AI绘画，基于DALL-E 3，无需订阅直接使用", url:"https://www.bing.com/images/create", cat:"AI绘画", tags:["免费","微软","DALL-E"], hot:true, free:true, icon:"🖼️", rating:4.5, users:"5000万+" },
  { id:106, name:"Playground AI", tag:"v3", desc:"专业级AI绘画平台，支持多种模型切换，批量生成", url:"https://playground.com", cat:"AI绘画", tags:["多模型","批量","专业"], hot:false, free:true, icon:"🎠", rating:4.4, users:"200万+" },
  { id:107, name:"NightCafe", tag:"v5", desc:"AI艺术社区+创作工具，风格丰富，支持NFT铸造", url:"https://nightcafe.studio", cat:"AI绘画", tags:["社区","NFT","艺术"], hot:false, free:true, icon:"🌙", rating:4.3, users:"400万+" },
  { id:108, name:"Tensor.art", tag:"v2", desc:"基于Stable Diffusion的免费绘画平台，模型库丰富", url:"https://tensor.art", cat:"AI绘画", tags:["免费","SD","模型库"], hot:false, free:true, icon:"🎭", rating:4.4, users:"100万+" },

  // ===== AI视频 =====
  { id:23, name:"Sora", tag:"v1", desc:"OpenAI文生视频旗舰，长达60秒，物理仿真能力惊人", url:"https://sora.com", cat:"AI视频", tags:["文生视频","OpenAI","高质量"], hot:true, free:false, icon:"🎬", rating:4.8, users:"100万+" },
  { id:24, name:"可灵AI", tag:"v2", desc:"快手出品，文生视频+图生视频，国内最强，免费额度充足", url:"https://klingai.kuaishou.com", cat:"AI视频", tags:["文生视频","国产","免费额度"], hot:true, free:true, icon:"🎞️", rating:4.7, users:"500万+" },
  { id:25, name:"Runway", tag:"Gen-4", desc:"专业视频AI工具，视频编辑、生成、扩展全能", url:"https://runwayml.com", cat:"AI视频", tags:["视频编辑","专业","多功能"], hot:true, free:true, icon:"🛤️", rating:4.6, users:"200万+" },
  { id:26, name:"即梦视频", tag:"v2", desc:"字节跳动视频生成，剪映生态，中文用户友好", url:"https://jimeng.jianying.com", cat:"AI视频", tags:["字节","视频","中文"], hot:true, free:true, icon:"🎥", rating:4.5, users:"500万+" },
  { id:27, name:"HeyGen", tag:"v3", desc:"AI数字人视频制作，支持多语言配音，企业营销首选", url:"https://www.heygen.com", cat:"AI视频", tags:["数字人","多语言","营销"], hot:true, free:true, icon:"👤", rating:4.7, users:"100万+" },
  { id:28, name:"Pika", tag:"2.2", desc:"创意视频生成，支持视频风格迁移，上手简单", url:"https://pika.art", cat:"AI视频", tags:["创意","风格迁移","简单"], hot:false, free:true, icon:"⚡", rating:4.4, users:"200万+" },
  { id:29, name:"Vidu", tag:"v2", desc:"生数科技出品，角色一致性极佳，电影级画质", url:"https://www.vidu.studio", cat:"AI视频", tags:["角色一致","电影","国产"], hot:false, free:true, icon:"🎦", rating:4.5, users:"100万+" },
  { id:30, name:"剪映AI", tag:"v12", desc:"字节出品剪辑神器，AI字幕、AI配音、AI特效一键完成", url:"https://www.capcut.cn", cat:"AI视频", tags:["剪辑","字幕","配音"], hot:true, free:true, icon:"✂️", rating:4.8, users:"5亿+" },
  { id:109, name:"Kling AI", tag:"v1.6", desc:"快手可灵国际版，支持视频延伸、摄像机控制", url:"https://klingai.com", cat:"AI视频", tags:["国际版","摄像机","延伸"], hot:true, free:true, icon:"🎬", rating:4.7, users:"200万+" },
  { id:110, name:"Wan 2.1", tag:"v2.1", desc:"阿里开源文生视频模型，本地可运行，效果媲美商业产品", url:"https://wanvideo.ai", cat:"AI视频", tags:["开源","本地","阿里"], hot:true, free:true, icon:"🌊", rating:4.6, users:"50万+" },
  { id:111, name:"Invideo AI", tag:"v4", desc:"一键将文字/博客转为视频，内置素材库，营销视频神器", url:"https://invideo.io", cat:"AI视频", tags:["文转视频","营销","素材"], hot:false, free:true, icon:"📹", rating:4.4, users:"700万+" },
  { id:112, name:"Synthesia", tag:"v3", desc:"企业级AI视频，140+语言数字人讲解，培训视频首选", url:"https://www.synthesia.io", cat:"AI视频", tags:["数字人","企业","培训"], hot:false, free:false, icon:"🎙️", rating:4.5, users:"50万+" },

  // ===== AI编程 =====
  { id:31, name:"GitHub Copilot", tag:"X", desc:"程序员AI助手，代码补全准确率业界第一，VS Code深度集成", url:"https://github.com/features/copilot", cat:"AI编程", tags:["代码补全","VSCode","编程"], hot:true, free:false, icon:"🐙", rating:4.8, users:"150万+" },
  { id:32, name:"Cursor", tag:"0.45", desc:"AI原生IDE，整个代码库级别的理解，Composer多文件编辑", url:"https://cursor.sh", cat:"AI编程", tags:["IDE","代码","多文件"], hot:true, free:true, icon:"🖱️", rating:4.9, users:"200万+" },
  { id:33, name:"v0.dev", tag:"v4", desc:"Vercel出品，用自然语言生成React组件，所见即所得", url:"https://v0.dev", cat:"AI编程", tags:["前端","React","UI生成"], hot:true, free:true, icon:"▲", rating:4.7, users:"50万+" },
  { id:34, name:"Bolt.new", tag:"v2", desc:"浏览器内全栈开发，AI帮你写代码并实时预览部署", url:"https://bolt.new", cat:"AI编程", tags:["全栈","浏览器","一键部署"], hot:true, free:true, icon:"⚡", rating:4.7, users:"100万+" },
  { id:35, name:"Lovable", tag:"v2", desc:"前端界的Cursor，自然语言生成完整Web应用", url:"https://lovable.dev", cat:"AI编程", tags:["Web应用","全栈","自然语言"], hot:true, free:true, icon:"💜", rating:4.6, users:"50万+" },
  { id:36, name:"Windsurf", tag:"v3", desc:"Codeium出品AI IDE，Cascade功能强大，免费使用", url:"https://codeium.com/windsurf", cat:"AI编程", tags:["IDE","免费","Cascade"], hot:true, free:true, icon:"🏄", rating:4.7, users:"100万+" },
  { id:37, name:"Replit", tag:"Agent", desc:"在线IDE + AI，云端开发无需配置环境，一键部署", url:"https://replit.com", cat:"AI编程", tags:["云端","部署","协作"], hot:false, free:true, icon:"🔄", rating:4.5, users:"2000万+" },
  { id:38, name:"Tabnine", tag:"Pro", desc:"代码补全专家，支持所有主流IDE，隐私安全有保障", url:"https://www.tabnine.com", cat:"AI编程", tags:["代码补全","隐私","企业"], hot:false, free:true, icon:"🔢", rating:4.4, users:"100万+" },
  { id:39, name:"Devin", tag:"v2", desc:"全球首个AI软件工程师，能独立完成完整开发任务", url:"https://www.cognition.ai", cat:"AI编程", tags:["AI工程师","自主","全栈"], hot:false, free:false, icon:"🤖", rating:4.5, users:"10万+" },
  { id:40, name:"通义灵码", tag:"v3", desc:"阿里云AI编程助手，免费好用，支持100+编程语言", url:"https://tongyi.aliyun.com/lingma", cat:"AI编程", tags:["免费","多语言","阿里"], hot:false, free:true, icon:"💻", rating:4.5, users:"500万+" },
  { id:113, name:"CodeWhisperer", tag:"v2", desc:"亚马逊AWS官方AI编程助手，安全扫描+代码补全", url:"https://aws.amazon.com/codewhisperer", cat:"AI编程", tags:["AWS","安全","免费"], hot:false, free:true, icon:"🔮", rating:4.4, users:"100万+" },
  { id:114, name:"Sourcegraph Cody", tag:"v5", desc:"大型代码库的AI助手，理解整个仓库上下文", url:"https://sourcegraph.com/cody", cat:"AI编程", tags:["大型项目","仓库","上下文"], hot:false, free:true, icon:"🔭", rating:4.4, users:"50万+" },
  { id:115, name:"WorkBuddy AI", tag:"v2", desc:"全能编程助手，支持文件读写、终端操作、项目管理", url:"https://www.tencent.com", cat:"AI编程", tags:["全能","项目","终端"], hot:true, free:true, icon:"💎", rating:4.8, users:"100万+" },

  // ===== AI音乐 =====
  { id:41, name:"Suno", tag:"v4", desc:"文字生音乐神器，输入歌词即可生成完整歌曲，效果震撼", url:"https://suno.ai", cat:"AI音乐", tags:["文生音乐","歌曲","创作"], hot:true, free:true, icon:"🎵", rating:4.8, users:"500万+" },
  { id:42, name:"Udio", tag:"v2", desc:"高质量AI音乐生成，音乐专业人士推荐", url:"https://udio.com", cat:"AI音乐", tags:["音乐","高质量","专业"], hot:true, free:true, icon:"🎶", rating:4.7, users:"200万+" },
  { id:116, name:"天工音乐", tag:"v2", desc:"国产AI音乐生成，中文歌词理解优秀，风格多样", url:"https://music.tiangong.cn", cat:"AI音乐", tags:["中文","国产","免费"], hot:true, free:true, icon:"🎸", rating:4.5, users:"100万+" },
  { id:117, name:"Soundful", tag:"v3", desc:"专为创作者设计的AI背景音乐生成工具，版权免费", url:"https://soundful.com", cat:"AI音乐", tags:["背景音乐","版权","创作"], hot:false, free:true, icon:"🎼", rating:4.3, users:"50万+" },
  { id:118, name:"Boomy", tag:"v2", desc:"30秒生成原创音乐，可发布到Spotify等平台获得收益", url:"https://boomy.com", cat:"AI音乐", tags:["变现","发布","Spotify"], hot:false, free:true, icon:"🎹", rating:4.2, users:"300万+" },

  // ===== AI音频 =====
  { id:43, name:"ElevenLabs", tag:"v3", desc:"最真实的AI语音合成，克隆声音，支持30+语言配音", url:"https://elevenlabs.io", cat:"AI音频", tags:["语音合成","声音克隆","多语言"], hot:true, free:true, icon:"🎙️", rating:4.9, users:"200万+" },
  { id:44, name:"讯飞配音", tag:"v5", desc:"科大讯飞旗下配音平台，中文语音顶级，免费额度充足", url:"https://peiyin.xunfei.cn", cat:"AI音频", tags:["中文配音","免费","讯飞"], hot:false, free:true, icon:"🔊", rating:4.6, users:"1000万+" },
  { id:45, name:"Adobe Podcast", tag:"v2", desc:"AI音频增强，一键消除背景噪音，播客人必备", url:"https://podcast.adobe.com", cat:"AI音频", tags:["降噪","播客","Adobe"], hot:false, free:true, icon:"🎚️", rating:4.7, users:"100万+" },
  { id:46, name:"Murf", tag:"v2", desc:"企业级AI配音，100+真实声音，PPT和视频配音首选", url:"https://murf.ai", cat:"AI音频", tags:["企业","配音","PPT"], hot:false, free:true, icon:"📢", rating:4.5, users:"50万+" },
  { id:119, name:"VEED.io", tag:"v3", desc:"视频+音频AI编辑一体化，自动字幕、翻译、配音", url:"https://www.veed.io", cat:"AI音频", tags:["视频","字幕","翻译"], hot:false, free:true, icon:"🎞️", rating:4.5, users:"500万+" },
  { id:120, name:"Descript", tag:"v6", desc:"像编辑文档一样编辑音视频，删文字即删视频内容", url:"https://www.descript.com", cat:"AI音频", tags:["播客","视频编辑","转录"], hot:false, free:true, icon:"✂️", rating:4.6, users:"100万+" },

  // ===== AI设计 =====
  { id:47, name:"Gamma", tag:"v2", desc:"AI一键生成精美PPT，主题丰富，支持中文，10分钟完成演示文稿", url:"https://gamma.app", cat:"AI设计", tags:["PPT","演示","自动生成"], hot:true, free:true, icon:"γ", rating:4.8, users:"500万+" },
  { id:48, name:"美图AI PPT", tag:"v3", desc:"国内最好用的AI PPT工具，模板精美，操作简单", url:"https://www.mito.com/aippt", cat:"AI设计", tags:["PPT","国产","模板"], hot:true, free:true, icon:"🎭", rating:4.6, users:"1000万+" },
  { id:49, name:"Tome", tag:"v4", desc:"新型AI演示工具，故事性强，适合融资路演和品牌展示", url:"https://tome.app", cat:"AI设计", tags:["演示","融资","品牌"], hot:false, free:true, icon:"📖", rating:4.5, users:"200万+" },
  { id:50, name:"Beautiful.ai", tag:"v8", desc:"智能美化PPT，自动对齐排版，让设计小白也能做出高质量幻灯片", url:"https://www.beautiful.ai", cat:"AI设计", tags:["PPT","自动排版","美化"], hot:false, free:false, icon:"✨", rating:4.4, users:"100万+" },
  { id:83, name:"Napkin.ai", tag:"v2", desc:"文字一键转信息图，演示PPT、报告配图神器", url:"https://napkin.ai", cat:"AI设计", tags:["信息图","可视化","一键生成"], hot:true, free:true, icon:"📊", rating:4.7, users:"50万+" },
  { id:121, name:"Framer AI", tag:"v4", desc:"AI网站设计生成，描述需求即得完整网页，无代码发布", url:"https://www.framer.com", cat:"AI设计", tags:["网站","无代码","设计"], hot:true, free:true, icon:"🖥️", rating:4.7, users:"200万+" },
  { id:122, name:"Figma AI", tag:"v2", desc:"设计行业标准工具，AI功能加持，设计师必备", url:"https://www.figma.com", cat:"AI设计", tags:["UI设计","协作","原型"], hot:true, free:true, icon:"🎨", rating:4.8, users:"800万+" },
  { id:123, name:"Looka", tag:"v3", desc:"AI商标和品牌设计，5分钟生成专业品牌视觉系统", url:"https://looka.com", cat:"AI设计", tags:["logo","品牌","商标"], hot:false, free:false, icon:"🏷️", rating:4.4, users:"100万+" },

  // ===== AI搜索 =====
  { id:51, name:"Perplexity", tag:"Pro", desc:"AI搜索引擎，实时联网，引用来源清晰，取代传统搜索", url:"https://www.perplexity.ai", cat:"AI搜索", tags:["搜索","联网","引用"], hot:true, free:true, icon:"🔎", rating:4.8, users:"1000万+" },
  { id:52, name:"秘塔搜索", tag:"v2", desc:"国产AI搜索，无广告，结果精准，报告生成功能强大", url:"https://metaso.cn", cat:"AI搜索", tags:["无广告","国产","报告"], hot:true, free:true, icon:"🔬", rating:4.7, users:"500万+" },
  { id:53, name:"天工AI搜索", tag:"v3", desc:"昆仑万维出品，搜索+对话一体化，中文搜索质量高", url:"https://search.tiangong.cn", cat:"AI搜索", tags:["中文","搜索","对话"], hot:false, free:true, icon:"🔭", rating:4.5, users:"200万+" },
  { id:54, name:"You.com", tag:"v3", desc:"可定制的AI搜索引擎，支持代码搜索、图像搜索等垂直搜索", url:"https://you.com", cat:"AI搜索", tags:["定制","代码搜索","多模态"], hot:false, free:true, icon:"🧩", rating:4.4, users:"100万+" },
  { id:89, name:"Perplexity Deep Research", tag:"Pro", desc:"AI深度研究，自动搜索数十个来源，生成专业研究报告", url:"https://www.perplexity.ai", cat:"AI搜索", tags:["深度研究","报告","自动化"], hot:true, free:false, icon:"🔬", rating:4.8, users:"1000万+" },
  { id:124, name:"Brave Search AI", tag:"v3", desc:"注重隐私的AI搜索，不跟踪用户，独立索引无过滤", url:"https://search.brave.com", cat:"AI搜索", tags:["隐私","独立","无广告"], hot:false, free:true, icon:"🦁", rating:4.4, users:"3000万+" },
  { id:125, name:"Felo", tag:"v2", desc:"多语言AI搜索，支持日语、英语实时对话式搜索", url:"https://felo.ai", cat:"AI搜索", tags:["多语言","日语","实时"], hot:false, free:true, icon:"🌐", rating:4.3, users:"50万+" },

  // ===== AI办公 =====
  { id:55, name:"Notion AI", tag:"Q2", desc:"Notion内置AI，在文档中直接调用AI写作、摘要、翻译", url:"https://www.notion.so/product/ai", cat:"AI办公", tags:["文档","Notion","写作"], hot:true, free:false, icon:"📓", rating:4.7, users:"3000万+" },
  { id:56, name:"腾讯元宝", tag:"v3", desc:"腾讯出品，企业微信深度集成，一键生成各类职场文档", url:"https://yuanbao.tencent.com", cat:"AI办公", tags:["腾讯","企业","职场"], hot:true, free:true, icon:"💎", rating:4.6, users:"5000万+" },
  { id:57, name:"WPS AI", tag:"v4", desc:"WPS内置AI，在熟悉的办公软件里直接使用AI功能", url:"https://ai.wps.cn", cat:"AI办公", tags:["WPS","办公","文档"], hot:true, free:true, icon:"📄", rating:4.5, users:"5亿+" },
  { id:58, name:"飞书AI", tag:"v3", desc:"字节出品企业协作平台，AI摘要会议纪要、智能问答", url:"https://www.feishu.cn/product/ai", cat:"AI办公", tags:["会议","协作","摘要"], hot:false, free:true, icon:"🪶", rating:4.6, users:"1000万+" },
  { id:59, name:"Microsoft 365 Copilot", tag:"v2", desc:"Word/Excel/PPT/Outlook全家桶AI，企业生产力革命", url:"https://m365.cloud.microsoft", cat:"AI办公", tags:["微软","Office","全家桶"], hot:true, free:false, icon:"📊", rating:4.6, users:"5000万+" },
  { id:60, name:"Otter.ai", tag:"v4", desc:"会议录音转文字，AI会议摘要，支持Zoom/Teams/Meet", url:"https://otter.ai", cat:"AI办公", tags:["会议纪要","转录","摘要"], hot:false, free:true, icon:"🦦", rating:4.6, users:"100万+" },
  { id:126, name:"Taskade AI", tag:"v5", desc:"AI项目管理+思维导图+协作，团队效率神器", url:"https://www.taskade.com", cat:"AI办公", tags:["项目管理","思维导图","协作"], hot:false, free:true, icon:"✅", rating:4.4, users:"500万+" },
  { id:127, name:"Reclaim AI", tag:"v3", desc:"AI日程管理，自动安排会议和深度工作时间", url:"https://reclaim.ai", cat:"AI办公", tags:["日程","会议","时间管理"], hot:false, free:true, icon:"📅", rating:4.5, users:"50万+" },

  // ===== AI翻译 =====
  { id:61, name:"DeepL", tag:"Pro", desc:"翻译质量超越谷歌的AI翻译神器，专业文档翻译首选", url:"https://www.deepl.com", cat:"AI翻译", tags:["翻译","文档","专业"], hot:true, free:true, icon:"🌍", rating:4.9, users:"1亿+" },
  { id:62, name:"彩云小译", tag:"v4", desc:"网页即时翻译，中日英双语对照，程序员友好", url:"https://fanyi.caiyunapp.com", cat:"AI翻译", tags:["网页翻译","双语","实时"], hot:false, free:true, icon:"🌈", rating:4.5, users:"500万+" },
  { id:63, name:"沉浸式翻译", tag:"v1", desc:"浏览器插件，双语网页/PDF翻译，学习英文必备", url:"https://immersivetranslate.com", cat:"AI翻译", tags:["双语","浏览器","PDF"], hot:true, free:true, icon:"🌐", rating:4.8, users:"300万+" },
  { id:128, name:"Google翻译AI", tag:"v3", desc:"Google神经翻译，103种语言，拍照翻译、实时对话翻译", url:"https://translate.google.com", cat:"AI翻译", tags:["多语言","拍照","实时"], hot:true, free:true, icon:"🔤", rating:4.5, users:"10亿+" },
  { id:129, name:"有道翻译", tag:"v8", desc:"网易有道，中英日韩多语言，生词本和学习功能丰富", url:"https://fanyi.youdao.com", cat:"AI翻译", tags:["中文","学习","生词本"], hot:false, free:true, icon:"📕", rating:4.4, users:"5亿+" },

  // ===== AI教育 =====
  { id:64, name:"Duolingo AI", tag:"Max", desc:"AI加持的语言学习，超个性化课程，角色扮演对话", url:"https://www.duolingo.com", cat:"AI教育", tags:["语言学习","个性化","游戏化"], hot:true, free:true, icon:"🦜", rating:4.7, users:"7亿+" },
  { id:65, name:"可汗学院AI", tag:"Khanmigo", desc:"免费AI教育辅助，苏格拉底式引导学习，覆盖K12全学科", url:"https://www.khanacademy.org", cat:"AI教育", tags:["免费","K12","辅导"], hot:false, free:true, icon:"🎓", rating:4.7, users:"1.5亿+" },
  { id:66, name:"学而思AI学", tag:"v3", desc:"国内AI教育头部产品，个性化学习路径，实时答疑", url:"https://ai.xueersi.com", cat:"AI教育", tags:["中国","K12","个性化"], hot:false, free:false, icon:"📚", rating:4.5, users:"2000万+" },
  { id:130, name:"Photomath", tag:"v9", desc:"拍照解数学题，步骤详解，中学生必备神器", url:"https://photomath.com", cat:"AI教育", tags:["数学","拍照","解题"], hot:true, free:true, icon:"📐", rating:4.7, users:"2.2亿+" },
  { id:131, name:"Coursera AI", tag:"v3", desc:"全球顶尖大学课程+AI个性化学习路径推荐", url:"https://www.coursera.org", cat:"AI教育", tags:["大学课程","证书","个性化"], hot:false, free:true, icon:"🏫", rating:4.6, users:"1亿+" },
  { id:132, name:"作业帮AI", tag:"v5", desc:"国内最大在线教育平台，AI答疑+拍照搜题", url:"https://www.zybang.com", cat:"AI教育", tags:["搜题","答疑","国产"], hot:true, free:true, icon:"📝", rating:4.5, users:"2亿+" },

  // ===== AI数据 =====
  { id:67, name:"Julius AI", tag:"v3", desc:"上传Excel/CSV，用自然语言分析数据，自动生成图表", url:"https://julius.ai", cat:"AI数据", tags:["数据分析","Excel","可视化"], hot:true, free:true, icon:"📈", rating:4.7, users:"50万+" },
  { id:68, name:"Tableau AI", tag:"v2024", desc:"商业智能BI+AI，自然语言查询数据，企业决策神器", url:"https://www.tableau.com", cat:"AI数据", tags:["BI","企业","可视化"], hot:false, free:false, icon:"📊", rating:4.6, users:"100万+" },
  { id:69, name:"ChatExcel", tag:"v2", desc:"用ChatGPT操作Excel，告别复杂公式，对话完成数据处理", url:"https://chatexcel.com", cat:"AI数据", tags:["Excel","对话","免费"], hot:false, free:true, icon:"📑", rating:4.4, users:"100万+" },
  { id:133, name:"Obviously AI", tag:"v3", desc:"无代码机器学习平台，上传数据即可训练预测模型", url:"https://www.obviously.ai", cat:"AI数据", tags:["机器学习","无代码","预测"], hot:false, free:false, icon:"🤖", rating:4.3, users:"10万+" },
  { id:134, name:"DataRobot", tag:"v10", desc:"企业级AutoML平台，自动化机器学习全流程", url:"https://www.datarobot.com", cat:"AI数据", tags:["AutoML","企业","自动化"], hot:false, free:false, icon:"🏭", rating:4.5, users:"50万+" },

  // ===== AI图像 =====
  { id:70, name:"Photoroom", tag:"v5", desc:"AI抠图神器，一键去背景，电商产品图修图首选", url:"https://www.photoroom.com", cat:"AI图像", tags:["抠图","电商","背景去除"], hot:true, free:true, icon:"📷", rating:4.7, users:"1亿+" },
  { id:71, name:"Upscayl", tag:"v3", desc:"免费开源AI图片超分辨率，4倍放大无损画质", url:"https://upscayl.org", cat:"AI图像", tags:["超分辨率","免费","开源"], hot:false, free:true, icon:"🔭", rating:4.6, users:"50万+" },
  { id:72, name:"Remove.bg", tag:"v4", desc:"最快AI背景去除，5秒完成，API调用方便", url:"https://www.remove.bg", cat:"AI图像", tags:["去背景","快速","API"], hot:true, free:true, icon:"🗑️", rating:4.6, users:"5亿+" },
  { id:73, name:"Canva AI", tag:"Magic", desc:"设计神器+AI，模板超丰富，Magic生成一键搞定海报", url:"https://www.canva.com", cat:"AI图像", tags:["设计","海报","模板"], hot:true, free:true, icon:"🎨", rating:4.8, users:"1.7亿+" },
  { id:74, name:"即时AI", tag:"v2", desc:"国产UI设计AI工具，文字生成UI，与即时设计深度集成", url:"https://js.design/ai", cat:"AI图像", tags:["UI设计","国产","文生UI"], hot:false, free:true, icon:"⚡", rating:4.5, users:"200万+" },
  { id:135, name:"Luminar Neo", tag:"v2", desc:"AI专业修图软件，一键天空替换、人像增强、降噪", url:"https://skylum.com/luminar", cat:"AI图像", tags:["修图","天空替换","人像"], hot:false, free:false, icon:"📸", rating:4.5, users:"500万+" },
  { id:136, name:"Topaz Labs", tag:"v4", desc:"AI图像处理套件，放大/降噪/锐化效果业界顶级", url:"https://www.topazlabs.com", cat:"AI图像", tags:["放大","降噪","锐化"], hot:false, free:false, icon:"💎", rating:4.7, users:"200万+" },
  { id:137, name:"Clipdrop", tag:"v3", desc:"Stability AI出品，AI图像编辑工具集，背景替换/重打光", url:"https://clipdrop.co", cat:"AI图像", tags:["编辑","背景","打光"], hot:false, free:true, icon:"✂️", rating:4.5, users:"300万+" },

  // ===== AI开发 =====
  { id:75, name:"Dify", tag:"v0.11", desc:"开源LLM应用开发平台，快速搭建AI客服/知识库问答", url:"https://dify.ai", cat:"AI开发", tags:["开源","LLM","知识库"], hot:true, free:true, icon:"🧩", rating:4.8, users:"50万+" },
  { id:76, name:"Coze", tag:"v3", desc:"字节跳动AI应用开发平台，无代码搭建AI Agent和聊天机器人", url:"https://www.coze.cn", cat:"AI开发", tags:["无代码","Agent","字节"], hot:true, free:true, icon:"🤝", rating:4.7, users:"200万+" },
  { id:77, name:"FastGPT", tag:"v4.8", desc:"开源知识库问答系统，本地部署，企业私有化首选", url:"https://fastgpt.in", cat:"AI开发", tags:["知识库","开源","私有化"], hot:false, free:true, icon:"⚡", rating:4.6, users:"20万+" },
  { id:78, name:"扣子", tag:"v2", desc:"字节国内版Coze，支持微信/抖音/飞书等多平台机器人发布", url:"https://www.coze.cn", cat:"AI开发", tags:["多平台","机器人","国内"], hot:true, free:true, icon:"🪢", rating:4.7, users:"500万+" },
  { id:138, name:"LangChain", tag:"v0.3", desc:"最流行的LLM应用开发框架，连接AI与工具的标准库", url:"https://www.langchain.com", cat:"AI开发", tags:["框架","开发","LLM"], hot:true, free:true, icon:"🔗", rating:4.7, users:"100万+" },
  { id:139, name:"Flowise", tag:"v2", desc:"可视化LLM工作流构建工具，拖拽即可搭建AI应用", url:"https://flowiseai.com", cat:"AI开发", tags:["可视化","拖拽","工作流"], hot:false, free:true, icon:"🌊", rating:4.5, users:"20万+" },

  // ===== AI自动化 =====
  { id:79, name:"Zapier AI", tag:"v3", desc:"自动化连接5000+应用，AI辅助创建工作流，无代码自动化", url:"https://zapier.com", cat:"AI自动化", tags:["自动化","工作流","集成"], hot:false, free:true, icon:"⚡", rating:4.6, users:"200万+" },
  { id:80, name:"Make", tag:"v2", desc:"可视化自动化平台，比Zapier更灵活，性价比更高", url:"https://www.make.com", cat:"AI自动化", tags:["自动化","可视化","性价比"], hot:false, free:true, icon:"🔧", rating:4.5, users:"50万+" },
  { id:81, name:"n8n", tag:"v1.35", desc:"开源自动化平台，可自托管，AI工作流编排，开发者首选", url:"https://n8n.io", cat:"AI自动化", tags:["开源","自托管","工作流"], hot:true, free:true, icon:"🔄", rating:4.7, users:"30万+" },
  { id:140, name:"Activepieces", tag:"v0.20", desc:"开源版Zapier，自托管无月费，支持AI步骤", url:"https://www.activepieces.com", cat:"AI自动化", tags:["开源","自托管","免费"], hot:false, free:true, icon:"🧱", rating:4.4, users:"10万+" },

  // ===== AI Agent =====
  { id:82, name:"Manus", tag:"v1", desc:"全球首个通用AI Agent，能自主完成复杂多步骤任务", url:"https://manus.im", cat:"AI Agent", tags:["Agent","自主","复杂任务"], hot:true, free:false, icon:"🤲", rating:4.6, users:"10万+" },
  { id:141, name:"AutoGPT", tag:"v0.5", desc:"开源自主AI Agent，能规划和执行长期复杂目标", url:"https://agpt.co", cat:"AI Agent", tags:["开源","自主","规划"], hot:true, free:true, icon:"🤖", rating:4.4, users:"50万+" },
  { id:142, name:"CrewAI", tag:"v0.28", desc:"多Agent协作框架，定义角色让AI团队分工完成任务", url:"https://www.crewai.com", cat:"AI Agent", tags:["多Agent","协作","框架"], hot:true, free:true, icon:"👥", rating:4.6, users:"20万+" },
  { id:143, name:"AgentGPT", tag:"v2", desc:"浏览器内运行AI Agent，无需部署直接使用", url:"https://agentgpt.reworkd.ai", cat:"AI Agent", tags:["浏览器","无部署","Agent"], hot:false, free:true, icon:"🕸️", rating:4.3, users:"30万+" },

  // ===== AI娱乐 =====
  { id:90, name:"Character.AI", tag:"v2", desc:"与各种角色AI对话，创建自定义AI角色，娱乐社交首选", url:"https://character.ai", cat:"AI娱乐", tags:["角色扮演","娱乐","社交"], hot:true, free:true, icon:"🎭", rating:4.5, users:"2亿+" },
  { id:84, name:"Hedra", tag:"v2", desc:"AI数字人口播视频，照片说话，营销视频低成本制作", url:"https://www.hedra.com", cat:"AI娱乐", tags:["数字人","口播","照片说话"], hot:true, free:true, icon:"💬", rating:4.6, users:"20万+" },
  { id:144, name:"Replika", tag:"v10", desc:"AI情感陪伴机器人，个性化成长，缓解孤独感", url:"https://replika.com", cat:"AI娱乐", tags:["陪伴","情感","成长"], hot:false, free:true, icon:"💝", rating:4.2, users:"1000万+" },
  { id:145, name:"AI Dungeon", tag:"v3", desc:"AI驱动的无限文字冒险游戏，故事走向由你决定", url:"https://aidungeon.com", cat:"AI娱乐", tags:["游戏","冒险","创意"], hot:false, free:true, icon:"🗡️", rating:4.1, users:"200万+" },
  { id:146, name:"Snapchat AI", tag:"My AI", desc:"Snapchat内置AI伴侣，年轻人社交AI首选", url:"https://www.snapchat.com", cat:"AI娱乐", tags:["社交","年轻人","聊天"], hot:false, free:true, icon:"👻", rating:4.0, users:"3.5亿+" },

  // ===== AI健康 =====
  { id:147, name:"Ada Health", tag:"v4", desc:"AI健康评估工具，症状检查，辅助医疗决策", url:"https://ada.com", cat:"AI健康", tags:["健康","症状","医疗"], hot:false, free:true, icon:"🏥", rating:4.4, users:"1200万+" },
  { id:148, name:"Wysa", tag:"v3", desc:"AI心理健康助手，情绪支持，CBT认知行为疗法", url:"https://www.wysa.io", cat:"AI健康", tags:["心理健康","情绪","CBT"], hot:false, free:true, icon:"🧘", rating:4.3, users:"500万+" },
  { id:149, name:"Noom AI", tag:"v8", desc:"AI个性化减重计划，行为心理学+营养学结合", url:"https://www.noom.com", cat:"AI健康", tags:["减重","营养","心理"], hot:false, free:false, icon:"⚖️", rating:4.2, users:"4500万+" },

  // ===== AI法律/金融 =====
  { id:150, name:"Harvey AI", tag:"v3", desc:"顶级AI法律助手，合同审查、法律研究，律所专用", url:"https://www.harvey.ai", cat:"AI法律", tags:["法律","合同","律所"], hot:false, free:false, icon:"⚖️", rating:4.6, users:"5万+" },
  { id:151, name:"DoNotPay", tag:"v5", desc:"大众法律AI，退款维权、取消订阅、交通罚款申诉", url:"https://donotpay.com", cat:"AI法律", tags:["维权","退款","消费者"], hot:false, free:true, icon:"🛡️", rating:4.2, users:"300万+" },
  { id:152, name:"Bloomberg GPT", tag:"v2", desc:"彭博金融AI，专业金融数据分析，投资决策辅助", url:"https://www.bloomberg.com/company/stories/bloomberggpt-50-billion-parameter-llm-bloomberg", cat:"AI法律", tags:["金融","投资","彭博"], hot:false, free:false, icon:"📈", rating:4.5, users:"10万+" },

  // ===== 更多热门工具 =====
  { id:85, name:"Luma Dream Machine", tag:"v2", desc:"图生视频效果顶级，Luma AI出品，运动物理效果真实", url:"https://lumalabs.ai/dream-machine", cat:"AI视频", tags:["图生视频","真实感","Luma"], hot:true, free:true, icon:"🌈", rating:4.7, users:"50万+" },
  { id:86, name:"Hailuo MiniMax", tag:"v2", desc:"MiniMax出品，视频生成质量高，国产顶尖视频AI", url:"https://hailuoai.com", cat:"AI视频", tags:["国产","视频","高质量"], hot:true, free:true, icon:"🌊", rating:4.6, users:"100万+" },
  { id:87, name:"ClaudeArtifacts", tag:"v1", desc:"Claude生成的可交互HTML组件，直接预览运行代码", url:"https://claude.ai", cat:"AI编程", tags:["组件","交互","预览"], hot:false, free:true, icon:"🧪", rating:4.5, users:"2000万+" },
  { id:88, name:"GPT-4o Canvas", tag:"v1", desc:"OpenAI可视化编辑界面，实时编辑文档和代码", url:"https://chat.openai.com", cat:"AI编程", tags:["可视化","编辑","实时"], hot:false, free:false, icon:"🖍️", rating:4.5, users:"2亿+" },
  { id:153, name:"Notion AI Database", tag:"v2", desc:"AI自动整理数据库，智能过滤器，项目管理升级版", url:"https://www.notion.so", cat:"AI办公", tags:["数据库","项目","整理"], hot:false, free:false, icon:"🗂️", rating:4.5, users:"3000万+" },
  { id:154, name:"Mem AI", tag:"v3", desc:"AI个人知识库，自动组织笔记，智能关联记忆", url:"https://mem.ai", cat:"AI办公", tags:["知识库","笔记","记忆"], hot:false, free:true, icon:"🧠", rating:4.4, users:"50万+" },
  { id:155, name:"Liner AI", tag:"v4", desc:"AI网页高亮+摘要，研究资料收集神器，学术党必备", url:"https://getliner.com", cat:"AI搜索", tags:["高亮","摘要","学术"], hot:false, free:true, icon:"🖊️", rating:4.4, users:"800万+" },
  { id:156, name:"Consensus AI", tag:"v2", desc:"专门搜索学术论文的AI，直接给出研究共识答案", url:"https://consensus.app", cat:"AI搜索", tags:["学术","论文","研究"], hot:false, free:true, icon:"🎓", rating:4.6, users:"100万+" },
  { id:157, name:"Elicit", tag:"v2", desc:"AI文献综述工具，自动提取论文关键信息，研究加速器", url:"https://elicit.com", cat:"AI搜索", tags:["文献","论文","综述"], hot:false, free:true, icon:"📚", rating:4.5, users:"50万+" },
  { id:158, name:"Poe", tag:"v5", desc:"Quora出品，一个平台访问所有主流AI模型", url:"https://poe.com", cat:"写作助手", tags:["多模型","聚合","Quora"], hot:true, free:true, icon:"🎯", rating:4.5, users:"500万+" },
  { id:159, name:"HuggingFace", tag:"v5", desc:"AI模型开源社区，10万+模型免费用，AI开发者圣地", url:"https://huggingface.co", cat:"AI开发", tags:["开源","模型","社区"], hot:true, free:true, icon:"🤗", rating:4.8, users:"500万+" },
  { id:160, name:"Replicate", tag:"v3", desc:"云端运行开源AI模型，API调用方便，按量计费", url:"https://replicate.com", cat:"AI开发", tags:["云端","API","开源模型"], hot:false, free:true, icon:"♻️", rating:4.5, users:"50万+" },
];

// 分类定义
const CATEGORIES = [
  { id: "all", name: "全部工具", icon: "🌐", count: AI_TOOLS.length },
  { id: "写作助手", name: "写作助手", icon: "✍️", count: AI_TOOLS.filter(t=>t.cat==="写作助手").length },
  { id: "AI绘画", name: "AI绘画", icon: "🎨", count: AI_TOOLS.filter(t=>t.cat==="AI绘画").length },
  { id: "AI视频", name: "AI视频", icon: "🎬", count: AI_TOOLS.filter(t=>t.cat==="AI视频").length },
  { id: "AI编程", name: "AI编程", icon: "💻", count: AI_TOOLS.filter(t=>t.cat==="AI编程").length },
  { id: "AI音乐", name: "AI音乐", icon: "🎵", count: AI_TOOLS.filter(t=>t.cat==="AI音乐").length },
  { id: "AI音频", name: "AI音频", icon: "🎙️", count: AI_TOOLS.filter(t=>t.cat==="AI音频").length },
  { id: "AI设计", name: "AI设计", icon: "✨", count: AI_TOOLS.filter(t=>t.cat==="AI设计").length },
  { id: "AI搜索", name: "AI搜索", icon: "🔍", count: AI_TOOLS.filter(t=>t.cat==="AI搜索").length },
  { id: "AI办公", name: "AI办公", icon: "💼", count: AI_TOOLS.filter(t=>t.cat==="AI办公").length },
  { id: "AI翻译", name: "AI翻译", icon: "🌍", count: AI_TOOLS.filter(t=>t.cat==="AI翻译").length },
  { id: "AI教育", name: "AI教育", icon: "📚", count: AI_TOOLS.filter(t=>t.cat==="AI教育").length },
  { id: "AI数据", name: "AI数据", icon: "📊", count: AI_TOOLS.filter(t=>t.cat==="AI数据").length },
  { id: "AI图像", name: "AI图像", icon: "🖼️", count: AI_TOOLS.filter(t=>t.cat==="AI图像").length },
  { id: "AI开发", name: "AI开发", icon: "🧩", count: AI_TOOLS.filter(t=>t.cat==="AI开发").length },
  { id: "AI自动化", name: "AI自动化", icon: "⚙️", count: AI_TOOLS.filter(t=>t.cat==="AI自动化").length },
  { id: "AI Agent", name: "AI Agent", icon: "🤖", count: AI_TOOLS.filter(t=>t.cat==="AI Agent").length },
  { id: "AI娱乐", name: "AI娱乐", icon: "🎮", count: AI_TOOLS.filter(t=>t.cat==="AI娱乐").length },
  { id: "AI健康", name: "AI健康", icon: "🏥", count: AI_TOOLS.filter(t=>t.cat==="AI健康").length },
  { id: "AI法律", name: "AI法律", icon: "⚖️", count: AI_TOOLS.filter(t=>t.cat==="AI法律").length },
];

// 今日精选
const DAILY_PICKS = [1, 13, 31, 41, 23, 51].map(id => AI_TOOLS.find(t => t.id === id));
