<template>
  <div id="book">
    <Transition name="fade-transform" mode="out-in">
      <div class="page" v-if="book.length">
        <Quote :quote="$config.bookOpts.qoute" />
        <ul class="content">
          <li v-for="item in book" :key="item.name">
            <div class="info">
              <img :src="item.cover" alt />
              <div>
                <h3>{{ item.name }}</h3>
                <p>导演：{{ item.author }}</p>
				        <p>原作：{{ item.yuanzuo }}</p>
                <p>上映时间：{{ item.published }}</p>
                <p>
                  <span>官网：</span>
                  <a v-if="item.postLink" :href="item.postLink" rel="noopener noreferrer" target="_blank" class="title">{{
                    item.postTitle 
                  }}</a>
                  <span v-else>暂无</span>
                </p>
                <p>
                  <span>喜爱指数：</span>
                  <i class="icon icon-star" v-for="i in parseInt(item.rating)" :key="`star-${i}`"></i>
                </p>
              </div>
            </div>
            <p class="description">{{ item.description }}</p>
          </li>
        </ul>
      </div>
      <Loading v-else />
    </Transition>

    <Comment v-if="$config.bookOpts.enableComment && initComment" title="电影" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Quote from '@/components/Quote-book'
import Comment from '@/components/Comment'

export default {
  name: 'book',
  components: {
    Loading,
    Quote,
    Comment
  },
  data() {
    return {
      book: [],
      initComment: false
    }
  },
  async created() {
    await this.queryBooks()
    this.initComment = true
  },
  methods: {
    async queryBooks() {
      this.book = await this.$store.dispatch('queryPage', { type: 'book' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
