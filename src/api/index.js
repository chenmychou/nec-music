import axios from 'axios'
import {reqUrl} from '../config'

axios.defaults.baseURL = reqUrl;

//banner
export const getBanner = () => axios.get('banner');

//推荐歌单
export const getPersonalized = () => axios.get('personalized');

//推荐电台
export const getRecDjprogram = () => axios.get('personalized/djprogram');

//获取推荐节目
export const getRecProgram = (offset=0,limit=10) => axios.get('program/recommend',{
	params:{
		offset,
		limit
	}
})

//获取节目排行榜
export const getTopProgram = (offset=0,limit=10) => axios.get('program/toplist',{
	params:{
		offset,
		limit
	}
})

//获取节目详情
export const getDjProgramDetail = id => axios.get(`dj/program/detail?id=${id}`);

//获取节目评论
export const getDjComment = (id,offset=0,limit=20) => axios.get('comment/dj',{
	params:{
		id,
		offset:offset*limit,
		limit
	}
})

//新碟上架
export const getTopAlbum = (area,offset=0,limit=35) => axios.get('top/album',{
	params:{
		offset:offset*limit,
		limit,
		area
	}
});

//热门新碟
export const getHotAlbum = (offset=0,limit=10) => axios.get('hot/album');

//排行榜
export const getTops = () => axios.get('toplist');

//排行榜详情
export const getTopList = idx => axios.get(`top/list?idx=${idx}`);

//获取热门歌手
export const getTopArtists = (offset=0,limit=10) => axios.get('top/artists',{
	params:{
		offset,
		limit
	}
});

//获取歌手列表(5001入驻歌手)
export const getArtistsList = (cat=5001,initial=66,offset=0,limit=20) => axios.get('artists/list',{
	params:{
		cat,
		initial,
		offset:offset*limit,
		limit
	}
})

//获取歌手详情
export const getArtistDetail = id => axios.get(`artist/desc?id=${id}`)

//获取推荐电台
export const getDjRecommend = () => axios.get('dj/recommend');

//获取歌单详情
export const getPlayListDetail = id => axios.get(`playlist/detail?id=${id}`)

//获取音乐url
export const getMusicUrl = id => axios.get(`music/url?id=${id}`)

//获取音乐详情
export const getSongDetail = ids => axios.get(`song/detail?ids=${ids}`)

//获取歌曲评论
export const getSongComment = (id,offset=0,limit=20) => axios.get('comment/music',{
	params:{
		id,
		offset:offset*limit,
		limit
	}
})

//获取音乐歌词
export const getLyric = id => axios.get(`lyric?id=${id}`);

//获取歌单分类
export const getPlayListCat = () => axios.get('playlist/catlist')

//获取歌单列表
export const getPlayList = ({cat="全部",order="hot",offset=0,limit=35}) => axios.get('top/playlist',{
	params:{
		cat,
		order,
		offset:offset*limit,
		limit
	}
})

//获取歌单评论
export const getPlayListComment = (id,offset=0,limit=20) => axios.get('comment/playlist',{
	params:{
		id,
		offset:offset*20,
		limit
	}
})

//搜索
export const search = (keywords,type=1,limit=30,offset=0) => axios.get('search',{
	params:{
		keywords,
		offset,
		limit,
		type
	}
})

//搜索建议
export const searchSuggest = (keywords,type=1,limit=30,offset=0) => axios.get('search',{
	params:{
		keywords,
		offset,
		limit,
		type
	}
})

//获取电台分类
export const getDjCate = () => axios.get('dj/catelist');

//获取电台分类推荐
export const getDjRecommendByCate = (type,offset=0,limit=4) => axios.get('dj/recommend/type',{
	params:{
		type,
		offset,
		limit
	}
})

//获取电台节目列表
export const getDjPrograms = (rid,offset=0,limit=5,asc=0) => axios.get('dj/program',{
	params:{
		rid,
		offset:offset*limit,
		limit,
		asc
	}
})

//获取电台详情
export const getDjDetail = id => axios.get(`dj/detail?rid=${id}`)

//获取相似电台
export const getSimiDj = id => axios.get(`simi/user?id=${id}`)



