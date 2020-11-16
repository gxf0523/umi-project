import React, {Component} from "react";
import styles from './index.css';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import Locale from 'react-jinke-music-player/lib/config/locale';
import 'react-jinke-music-player/assets/index.css';
const audioList1 = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Dorost Nemisham',
    singer: 'Sirvan Khosravi',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc:
      'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
  },
]
const options = {
  audioLists: audioList1,//播放列表
  defaultPlayIndex: 0,//音频播放器的默认播放索引
  locale: Locale.en_US,//语言
  quietUpdate:false,//更新音频列表时不中断当前播放状态
  clearPriorAudioLists:false,//用第一个加载的播放列表替换新的播放列表
  autoPlayInitLoadPlayList:false,//在加载新的播放列表后立即播放新的播放列表
  showMediaSession: true,//显示chrome媒体会话
  showLyric: true,//音频播放器面板的歌词显示
  // showDestroy: true,//销毁播放器按钮显示
  autoHiddenCover: false,//如果没有封面照片，则自动隐藏封面照片
  spaceBar: true,//在空白处播放和暂停音频
  responsive: true,//启用响应式播放器，自动切换桌面和移动设备
  theme: 'light',//音乐播放器主题颜色 dark,light,auto
  bounds: 'body',//界线（指定运动边界）
  preload: false,//预载（页面加载后是否立即加载音频）
  glassBg: false,//播放器的背景是否显示磨砂玻璃效果
  remember: false,//下次访问播放器时，是否保持上一个状态
  remove: true,//音频可以删除
  defaultPosition: {//音频控制器的初始位置 left,top,right,and bottom
    bottom: 0,
    left: 0,
  },
  playModeText: {
    order: '顺序播放',
    orderLoop: '列表循环',
    singleLoop: '单曲循环',
    shufflePlay: '随机播放',
  },
  openText: '打开',
  closeText: '关闭',
  checkedText: '开',
  unCheckedText: '关',
  notContentText: '暂无音乐',
  panelTitle: '播放列表',
  defaultPlayMode: 'order',//音频播放器选项默认播放模式可以设置为order，orderLoop，singleLoop，shufflePlay或省略
  mode: 'full',//音频主题开关checkedText可以设置为mini，也可以full省略
  once: true,//false	默认的audioPlay句柄功能将在每次暂停后再次播放。如果只想触发一次，则可以设置为“ true”
  autoPlay: false,//	加载完成后是否播放音频
  toggleMode: true,//您是否可以在完全=>迷你或最小=>完全两种模式之间切换
  showMiniModeCover: true,//音频封面显示为“迷你”模式
  showMiniProcessBar: false,//	音频进度栏显示为“迷你”模式
  drag: true,//可以拖动音频控制器的“迷你”模式
  seeked: true,//可以拖动还是单击进度栏以播放新进度
  showProgressLoadBar: true,//显示音频加载进度栏
  showPlay: true,//音频播放器面板的播放按钮显示
  showReload: false,//音频播放器面板的重新加载按钮显示
  showDownload: false,//音频播放器面板的下载按钮显示
  showPlayMode: true,//音频播放器面板的播放模式切换按钮显示
  showThemeSwitch: true,//音频播放器面板的主题切换开关显示
  extendsContent: [],//可扩展的自定义内容
  defaultVolume: 0.1,//音频播放器的默认音量，范围0-1
  playModeShowTime: 600,//播放模式切换显示时间（毫秒）
  loadAudioErrorPlayNext: true,//当前音频播放失败时是否尝试播放下一个音频
  onAudioDownload(audioInfo) {//音频下载句柄
    console.log('audio download', audioInfo);
  },
  onAudioPlay(audioInfo) {//音频播放手柄
    console.log('audio playing', audioInfo);
  },
  onAudioPause(audioInfo) {//音频暂停手柄
    console.log('audio pause', audioInfo);
  },
  onAudioSeeked(audioInfo) {//当用户已将音频句柄移动/跳到新位置时
    console.log('audio seeked', audioInfo);
  },
  onAudioVolumeChange(currentVolume) {//更改音量后，手柄最小值= 0.0最大值= 1.0
    console.log('audio volume change', currentVolume);
  },
  onAudioEnded(audioInfo) {//单曲结束处理
    console.log('audio ended', audioInfo);
  },
  onAudioAbort(e) {//音频加载异常终止目标事件
    console.log('audio abort', e);
  },
  onAudioProgress(audioInfo) {//音频播放进度句柄
    console.log('audio progress',audioInfo);
  },
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo);
  },
  onAudioLoadError(e) {//音频重装手柄
    console.log('audio load err', e);
  },
  onThemeChange(theme) {//	主题更改句柄
    console.log('theme change:', theme);
  },
  onAudioListsChange(currentPlayId, audioLists, audioInfo) {//音频列表更改句柄
    console.log('[currentPlayId] audio lists change:', currentPlayId);
    console.log('[audioLists] audio lists change:', audioLists);
    console.log('[audioInfo] audio lists change:', audioInfo);
  },
  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {//音频当前播放曲目更改手柄
    console.log('audio play track change:', currentPlayId, audioLists, audioInfo);
  },
  onPlayModeChange(playMode) {
    console.log('play mode change:', playMode);
  },
  onModeChange(mode) {//模式改变手柄
    console.log('mode change:', mode);
  },
  onAudioListsPanelChange(panelVisible) {//音频列表面板更改手柄
    console.log('audio lists panel visible:', panelVisible);
  },
  onAudioListsDragEnd(fromIndex, endIndex) {//音频列表拖动结束手柄
    console.log('audio lists drag end:', fromIndex, endIndex);
  },
  getAudioInstance(audio) {
    console.log('audio instance', audio)
  },
};
class Home extends Component{
  constructor(props) {
      super(props);
      this.audio = {}
      this.state = {
        params: {
          ...options,
          getAudioInstance: (audio) => {
            this.audio = audio
          },
        },
      }
  }
  componentDidMount(){

  }
  render(){
    const {params} = this.state;
  return (
    <div className={styles.normals}>
      <button
          type="button"
          onClick={() => {
            this.audio.playbackRate = 10
          }}
        >
          change play back rate to 10
        </button>
      <ReactJkMusicPlayer {...params} />
    </div>
  );
}
}
export default Home;
