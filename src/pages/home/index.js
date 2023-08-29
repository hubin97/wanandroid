import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets, withSafeAreaInsets } from 'react-native-safe-area-context';
import {Skeleton_Home} from '../../utils/content-loader';
import {articleListReq, articleTopReq, bannerReq} from '../../api/network';
import {Carousel} from '@ant-design/react-native';
import nextImg from "../../images/next.png";
// import { PropTypes } from "prop-types";
import {styles as commonStyles} from '../../styles';
import { styles } from "./styles";
const {width: kW, height: kH} = Dimensions.get('window');

// https://reactnavigation.org/docs/status-bar/
const HomePage = ({ navigation, insets }) => {
  const [loading, setLoading] = useState(true);
  const [over, setOver] = useState(false);
  const [banner, setBanner] = useState([]);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [naviOpacity, setNaviOpacity] = useState(0);

  useEffect(() => {
    Promise.all([bannerReq(), articleTopReq(), articleListReq(0)])
      .then(result => {
        //console.log('res>>>', JSON.stringify(res));
        setBanner(result[0].data);
        setArticles([...result[1].data, ...result[2].data.datas]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });

    setOver(false);
    setLoading(true);
    setTimeout(() => {
      setOver(true);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (page === 0) { return }
    articleListReq(page).then(res => {
        console.log('page>>>', page);
        //console.log('res>>>', JSON.stringify(res));
        let curPage = res.data.curPage ?? 0
        let pageCount = res.data.pageCount ?? 0
        if (curPage >= pageCount) {
          setHasMoreData(false)
        }
        let datas = [...articles, ...res.data.datas]
        setArticles(datas);
    }).catch(error => {
        console.log(error);
    });
  }, [page]);

  if (!over && loading) {
    return <Skeleton_Home />;
  }

  // console.log('listData', listData);
  const _renderCarousel = (
    <Carousel autoplay infinite style={{width: kW, height: 200}}>
      {banner.length > 0 &&
        banner.map(item => {
          return (
            <TouchableOpacity key={item.id} activeOpacity={0.7} onPress={() => {
              console.log('item>>>', JSON.stringify(item));
              navigation.push('DetailPage', item)
            }}>
              <Image style={{width: '100%', height: '100%'}} source={{uri: item.imagePath ?? ''}}/>
            </TouchableOpacity>
          );
        })}
    </Carousel>
  );

  const _onScroll = (e) => {
    let originY = e.nativeEvent.contentOffset.y;
    //console.log('originY>>', originY);
    if (originY <= 0) {
      naviOpacity && setNaviOpacity(0)
    } else if (originY <= 44) {
      setNaviOpacity(originY/44)
    } else if (originY > 44) {
      naviOpacity < 1 && setNaviOpacity(1)
    } 
  }

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.7}
        onPress={() => {
          //console.log('item>>>', JSON.stringify(item));
          /**
           * {"adminAdd":false,"apkLink":"","audit":1,"author":"郭霖","canEdit":false,"chapterId":409,"chapterName":"郭霖","collect":false,"courseId":13,"desc":"","descMd":"","envelopePic":"","fresh":false,"host":"","id":26580,"isAdminAdd":false,"link":"https://mp.weixin.qq.com/s/Egt6kGqOQHeTvpxC3Q7jMA","niceDate":"2023-05-31 00:00","niceShareDate":"2023-05-31 23:17","origin":"","prefix":"","projectLink":"","publishTime":1685462400000,"realSuperChapterId":407,"selfVisible":0,"shareDate":1685546267000,"shareUser":"","superChapterId":408,"superChapterName":"公众号","tags":[{"name":"公众号","url":"/wxarticle/list/409/1"}],"title":"5分钟带你复刻蚂蚁基金业绩走势图","type":0,"userId":-1,"visible":1,"zan":0}
           */
          navigation.push('DetailPage', item)
        }}>
        <View style={styles.itemWrapper}>
          <Image style={styles.nextStyle} source={ nextImg }/>
          <View style={styles.contentStyle}>
            <Text style={styles.titleStyle}>
              {item.title}
            </Text>
            <View
              style={styles.bottomStyle}>
              <Text style={styles.authorStyle}>{item.author}</Text>
              <Text style={styles.dateStyle}>{item.niceDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  //   console.log(JSON.stringify(banner));
  //   console.log(JSON.stringify(articles));
  const statusBarHeight = insets.top
  // console.log('insets>>>>', insets);
  return (
    <SafeAreaView style={[commonStyles.containers, { marginTop: - statusBarHeight}]}>
      <View style={[styles.naviWrapper, { marginTop: statusBarHeight, height: 44 + statusBarHeight, opacity: naviOpacity }]}>
        <View style={[styles.naviItemStyle, { marginTop: statusBarHeight }]}>
          <Text style={styles.naviTextStyle}>{'首页'}</Text>
        </View>
      </View>
      <FlatList
        style={[styles.listStyle, { marginTop: statusBarHeight }]}
        data={articles}
        renderItem={_renderItem}
        ListHeaderComponent={_renderCarousel}
        onScroll={_onScroll}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
            if (hasMoreData) {
              setPage(page+1)
            }
        }}
      />
    </SafeAreaView>
  );
};

export default withSafeAreaInsets(HomePage);