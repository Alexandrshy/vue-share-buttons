<template>
  <div class="share-buttons">
    <twitter-button></twitter-button>
    <twitter-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></twitter-button>
    <twitter-button v-bind:hasIcon="false"></twitter-button>
    <twitter-button class="share-button--circle"></twitter-button>
    <twitter-button class="share-button--circle" btnText></twitter-button>
    <twitter-button class="share-button--circle" v-bind:hasIcon="false"></twitter-button>
    <twitter-button class="share-button--outline"></twitter-button>
    <twitter-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></twitter-button>
    <twitter-button class="share-button--outline" v-bind:hasIcon="false"></twitter-button>
    <twitter-button class="share-button--circle share-button--outline"></twitter-button>
    <twitter-button class="share-button--circle share-button--outline" btnText></twitter-button>
    <twitter-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></twitter-button>
    <br>
    <liveJournal-button></liveJournal-button>
    <liveJournal-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></liveJournal-button>
    <liveJournal-button v-bind:hasIcon="false"></liveJournal-button>
    <liveJournal-button class="share-button--circle"></liveJournal-button>
    <liveJournal-button class="share-button--circle" btnText></liveJournal-button>
    <liveJournal-button class="share-button--circle" v-bind:hasIcon="false"></liveJournal-button>
    <liveJournal-button class="share-button--outline"></liveJournal-button>
    <liveJournal-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></liveJournal-button>
    <liveJournal-button class="share-button--outline" v-bind:hasIcon="false"></liveJournal-button>
    <liveJournal-button class="share-button--circle share-button--outline"></liveJournal-button>
    <liveJournal-button class="share-button--circle share-button--outline" btnText></liveJournal-button>
    <liveJournal-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></liveJournal-button>
    <br>
    <digg-button></digg-button>
    <digg-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></digg-button>
    <digg-button v-bind:hasIcon="false"></digg-button>
    <digg-button class="share-button--circle"></digg-button>
    <digg-button class="share-button--circle" btnText></digg-button>
    <digg-button class="share-button--circle" v-bind:hasIcon="false"></digg-button>
    <digg-button class="share-button--outline"></digg-button>
    <digg-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></digg-button>
    <digg-button class="share-button--outline" v-bind:hasIcon="false"></digg-button>
    <digg-button class="share-button--circle share-button--outline"></digg-button>
    <digg-button class="share-button--circle share-button--outline" btnText></digg-button>
    <digg-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></digg-button>
    <br>
    <renren-button></renren-button>
    <renren-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></renren-button>
    <renren-button v-bind:hasIcon="false"></renren-button>
    <renren-button class="share-button--circle"></renren-button>
    <renren-button class="share-button--circle" btnText></renren-button>
    <renren-button class="share-button--circle" v-bind:hasIcon="false"></renren-button>
    <renren-button class="share-button--outline"></renren-button>
    <renren-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></renren-button>
    <renren-button class="share-button--outline" v-bind:hasIcon="false"></renren-button>
    <renren-button class="share-button--circle share-button--outline"></renren-button>
    <renren-button class="share-button--circle share-button--outline" btnText></renren-button>
    <renren-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></renren-button>
    <br>
    <blogger-button></blogger-button>
    <blogger-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></blogger-button>
    <blogger-button v-bind:hasIcon="false"></blogger-button>
    <blogger-button class="share-button--circle"></blogger-button>
    <blogger-button class="share-button--circle" btnText></blogger-button>
    <blogger-button class="share-button--circle" v-bind:hasIcon="false"></blogger-button>
    <blogger-button class="share-button--outline"></blogger-button>
    <blogger-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></blogger-button>
    <blogger-button class="share-button--outline" v-bind:hasIcon="false"></blogger-button>
    <blogger-button class="share-button--circle share-button--outline"></blogger-button>
    <blogger-button class="share-button--circle share-button--outline" btnText></blogger-button>
    <blogger-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></blogger-button>
    <br>
    <weibo-button></weibo-button>
    <weibo-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></weibo-button>
    <weibo-button v-bind:hasIcon="false"></weibo-button>
    <weibo-button class="share-button--circle"></weibo-button>
    <weibo-button class="share-button--circle" btnText></weibo-button>
    <weibo-button class="share-button--circle" v-bind:hasIcon="false"></weibo-button>
    <weibo-button class="share-button--outline"></weibo-button>
    <weibo-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      btnText
    ></weibo-button>
    <weibo-button class="share-button--outline" v-bind:hasIcon="false"></weibo-button>
    <weibo-button class="share-button--circle share-button--outline"></weibo-button>
    <weibo-button class="share-button--circle share-button--outline" btnText></weibo-button>
    <weibo-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></weibo-button>
    <br>

    <vkontakte-button shareTitle="Comment"></vkontakte-button>
    <vkontakte-button
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      shareTitle="Comment"
      btnText
    ></vkontakte-button>
    <vkontakte-button v-bind:hasIcon="false" shareTitle="Comment"></vkontakte-button>
    <vkontakte-button class="share-button--circle" shareTitle="Comment"></vkontakte-button>
    <vkontakte-button class="share-button--circle" shareTitle="Comment" btnText></vkontakte-button>
    <vkontakte-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></vkontakte-button>
    <vkontakte-button class="share-button--outline" shareTitle="Comment"></vkontakte-button>
    <vkontakte-button
      class="share-button--outline"
      v-bind:isBlank="false"
      shareText="Twiiter share good work"
      shareTitle="Comment"
      btnText
    ></vkontakte-button>
    <vkontakte-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></vkontakte-button>
    <vkontakte-button class="share-button--circle share-button--outline" shareTitle="Comment"></vkontakte-button>
    <vkontakte-button
      class="share-button--circle share-button--outline"
      shareTitle="Comment"
      btnText
    ></vkontakte-button>
    <vkontakte-button
      class="share-button--circle share-button--outline"
      shareTitle="Comment"
      v-bind:hasIcon="false"
    ></vkontakte-button>
    <br>
  </div>
</template>

<script>
import TwitterButton from "./components/TwitterButton";
import LiveJournalButton from "./components/LiveJournalButton";
import BloggerButton from "./components/BloggerButton";
import DiggButton from "./components/DiggButton";
import RenrenButton from "./components/RenrenButton";
import WeiboButton from "./components/WeiboButton";
import VkontakteButton from "./components/VkontakteButton";

export default {
  name: "app-share-buttons",
  components: {
    TwitterButton,
    LiveJournalButton,
    BloggerButton,
    DiggButton,
    RenrenButton,
    WeiboButton,
    VkontakteButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
