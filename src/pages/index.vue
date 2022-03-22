<template lang="html">
  <div class="container">
    <div>
      <movie-index-header></movie-index-header>
    </div>
    <div class="UserMessage">
      <user-message></user-message>
    </div>
    <div class="contentPic">
      <index-header-pic v-for="item in headerItems" :key="item._id" :recommendImg="item.recommendImg"
      :recommendSrc="item.recommendSrc" :recommendTitle="item.recommendTitle"></index-header-pic>
    </div>
    <div class="contentMain">
      <Row>
        <i-col span="11" offset="1">
          <Card>
            <p slot="title">
              <Icon type="ios-film-outline"></Icon>电影
            </p>
            <ul class="cont-ul">
              <movies-list v-for="item in movieItems" :key="item._id" :id="item._id" :movieName="item.movieName"
              :movieTime="item.movieTime"></movies-list>
            </ul>
          </Card>
        </i-col>
        <i-col span="10" offset="1">
          <Card>
            <p slot="title">
              <Icon type="edit"></Icon>新闻
            </p>
            <ul class="cont-ul">
              <news-list v-for="item in newsItems" :key="item._id" :id="item._id" :articleTitle="item.articleTitle"
              :articleTime="item.articleTime"></news-list>
            </ul>
          </Card>
        </i-col>
      </Row>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import MovieIndexHeader from '../components/MovieIndexHeader'
import CommonFooter from '../components/CommonFooter'
import NewsList from '../components/NewsList'
import MoviesList from '../components/MoviesList'
import IndexHeaderPic from '../components/IndexHeaderPic'
import UserMessage from '../components/UserMessage'
export default {
  data () {
    return {
      headerItems: [],
      newsItems: [],
      movieItems: []
    }
  },
  created() {
    this.$http.get('http://localhost:3000/showIndex').then((data) => {
      this.headerItems = data.body.data;
      console.log(data);
    })

    this.$http.get('http://localhost:3000/showArticle').then((data) => {
      this.newsItems = data.body.data;
      console.log(data);
    })

    this.$http.get('http://localhost:3000/showRanking').then((data) => {
      this.movieItems = data.body.data;
      console.log(data);
    })
  },
  components: {
    MovieIndexHeader,
    CommonFooter,
    NewsList,
    MoviesList,
    IndexHeaderPic,
    UserMessage
  }
};
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .contentMain{
    padding-top: 15px;
  }
  .userMessage{
    margin-top:0px;
    margin-left: 0px;
  }
  .contentPic{
    padding-top:5px;
  }

  .cont-ul {
    padding-top: 0.5rem;
    background-color: #fff;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
