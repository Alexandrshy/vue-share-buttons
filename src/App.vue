<template>
  <div class="share-buttons">
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
      <evernote-button shareTitle="Comment"></evernote-button>
      <evernote-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></evernote-button>
      <evernote-button v-bind:hasIcon="false" shareTitle="Comment"></evernote-button>
      <evernote-button class="share-button--circle" shareTitle="Comment"></evernote-button>
      <evernote-button class="share-button--circle" shareTitle="Comment" btnText></evernote-button>
      <evernote-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></evernote-button>
      <evernote-button class="share-button--outline" shareTitle="Comment"></evernote-button>
      <evernote-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></evernote-button>
      <evernote-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></evernote-button>
      <evernote-button class="share-button--circle share-button--outline" shareTitle="Comment"></evernote-button>
      <evernote-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></evernote-button>
      <evernote-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></evernote-button>
    </div>
    <div class="share-buttons-group">
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
    </div>
    <div class="share-buttons-group">
      <facebook-button shareTitle="Comment"></facebook-button>
      <facebook-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></facebook-button>
      <facebook-button v-bind:hasIcon="false" shareTitle="Comment"></facebook-button>
      <facebook-button class="share-button--circle" shareTitle="Comment"></facebook-button>
      <facebook-button class="share-button--circle" shareTitle="Comment" btnText></facebook-button>
      <facebook-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></facebook-button>
      <facebook-button class="share-button--outline" shareTitle="Comment"></facebook-button>
      <facebook-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></facebook-button>
      <facebook-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></facebook-button>
      <facebook-button class="share-button--circle share-button--outline" shareTitle="Comment"></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></facebook-button>
    </div>
    <div class="share-buttons-group">
      <linkedIn-button shareTitle="Comment"></linkedIn-button>
      <linkedIn-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></linkedIn-button>
      <linkedIn-button v-bind:hasIcon="false" shareTitle="Comment"></linkedIn-button>
      <linkedIn-button class="share-button--circle" shareTitle="Comment"></linkedIn-button>
      <linkedIn-button class="share-button--circle" shareTitle="Comment" btnText></linkedIn-button>
      <linkedIn-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></linkedIn-button>
      <linkedIn-button class="share-button--outline" shareTitle="Comment"></linkedIn-button>
      <linkedIn-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></linkedIn-button>
      <linkedIn-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></linkedIn-button>
      <linkedIn-button class="share-button--circle share-button--outline" shareTitle="Comment"></linkedIn-button>
      <linkedIn-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></linkedIn-button>
      <linkedIn-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></linkedIn-button>
    </div>
    <div class="share-buttons-group">
      <tumblr-button shareTitle="Comment"></tumblr-button>
      <tumblr-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></tumblr-button>
      <tumblr-button v-bind:hasIcon="false" shareTitle="Comment"></tumblr-button>
      <tumblr-button class="share-button--circle" shareTitle="Comment"></tumblr-button>
      <tumblr-button class="share-button--circle" shareTitle="Comment" btnText></tumblr-button>
      <tumblr-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></tumblr-button>
      <tumblr-button class="share-button--outline" shareTitle="Comment"></tumblr-button>
      <tumblr-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></tumblr-button>
      <tumblr-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></tumblr-button>
      <tumblr-button class="share-button--circle share-button--outline" shareTitle="Comment"></tumblr-button>
      <tumblr-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></tumblr-button>
      <tumblr-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></tumblr-button>
    </div>
    <div class="share-buttons-group">
      <pinterest-button shareTitle="Comment"></pinterest-button>
      <pinterest-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></pinterest-button>
      <pinterest-button v-bind:hasIcon="false" shareTitle="Comment"></pinterest-button>
      <pinterest-button class="share-button--circle" shareTitle="Comment"></pinterest-button>
      <pinterest-button class="share-button--circle" shareTitle="Comment" btnText></pinterest-button>
      <pinterest-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></pinterest-button>
      <pinterest-button class="share-button--outline" shareTitle="Comment"></pinterest-button>
      <pinterest-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></pinterest-button>
      <pinterest-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></pinterest-button>
      <pinterest-button class="share-button--circle share-button--outline" shareTitle="Comment"></pinterest-button>
      <pinterest-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></pinterest-button>
      <pinterest-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></pinterest-button>
    </div>
    <div class="share-buttons-group">
      <reddit-button shareTitle="Comment"></reddit-button>
      <reddit-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></reddit-button>
      <reddit-button v-bind:hasIcon="false" shareTitle="Comment"></reddit-button>
      <reddit-button class="share-button--circle" shareTitle="Comment"></reddit-button>
      <reddit-button class="share-button--circle" shareTitle="Comment" btnText></reddit-button>
      <reddit-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></reddit-button>
      <reddit-button class="share-button--outline" shareTitle="Comment"></reddit-button>
      <reddit-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></reddit-button>
      <reddit-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></reddit-button>
      <reddit-button class="share-button--circle share-button--outline" shareTitle="Comment"></reddit-button>
      <reddit-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></reddit-button>
      <reddit-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></reddit-button>
    </div>
    <div class="share-buttons-group">
      <pocket-button shareTitle="Comment"></pocket-button>
      <pocket-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></pocket-button>
      <pocket-button v-bind:hasIcon="false" shareTitle="Comment"></pocket-button>
      <pocket-button class="share-button--circle" shareTitle="Comment"></pocket-button>
      <pocket-button class="share-button--circle" shareTitle="Comment" btnText></pocket-button>
      <pocket-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></pocket-button>
      <pocket-button class="share-button--outline" shareTitle="Comment"></pocket-button>
      <pocket-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></pocket-button>
      <pocket-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></pocket-button>
      <pocket-button class="share-button--circle share-button--outline" shareTitle="Comment"></pocket-button>
      <pocket-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></pocket-button>
      <pocket-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></pocket-button>
    </div>
    <div class="share-buttons-group">
      <xing-button shareTitle="Comment"></xing-button>
      <xing-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></xing-button>
      <xing-button v-bind:hasIcon="false" shareTitle="Comment"></xing-button>
      <xing-button class="share-button--circle" shareTitle="Comment"></xing-button>
      <xing-button class="share-button--circle" shareTitle="Comment" btnText></xing-button>
      <xing-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></xing-button>
      <xing-button class="share-button--outline" shareTitle="Comment"></xing-button>
      <xing-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></xing-button>
      <xing-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></xing-button>
      <xing-button class="share-button--circle share-button--outline" shareTitle="Comment"></xing-button>
      <xing-button class="share-button--circle share-button--outline" shareTitle="Comment" btnText></xing-button>
      <xing-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></xing-button>
    </div>
    <div class="share-buttons-group">
      <odnoklassniki-button shareTitle="Comment"></odnoklassniki-button>
      <odnoklassniki-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></odnoklassniki-button>
      <odnoklassniki-button v-bind:hasIcon="false" shareTitle="Comment"></odnoklassniki-button>
      <odnoklassniki-button class="share-button--circle" shareTitle="Comment"></odnoklassniki-button>
      <odnoklassniki-button class="share-button--circle" shareTitle="Comment" btnText></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
      <odnoklassniki-button class="share-button--outline" shareTitle="Comment"></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
      <odnoklassniki-button class="share-button--circle share-button--outline" shareTitle="Comment"></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
    </div>
  </div>
</template>

<script>
import TwitterButton from "./components/TwitterButton";
import LiveJournalButton from "./components/LiveJournalButton";
import BloggerButton from "./components/BloggerButton";
import DiggButton from "./components/DiggButton";
import RenrenButton from "./components/RenrenButton";
import WeiboButton from "./components/WeiboButton";
import EvernoteButton from "./components/EvernoteButton";
import VkontakteButton from "./components/VkontakteButton";
import FacebookButton from "./components/FacebookButton";
import LinkedInButton from "./components/LinkedInButton";
import TumblrButton from "./components/TumblrButton";
import PinterestButton from "./components/PinterestButton";
import RedditButton from "./components/RedditButton";
import PocketButton from "./components/PocketButton";
import XingButton from "./components/XingButton";
import OdnoklassnikiButton from "./components/OdnoklassnikiButton";

export default {
  name: "app-share-buttons",
  components: {
    TwitterButton,
    LiveJournalButton,
    BloggerButton,
    DiggButton,
    RenrenButton,
    WeiboButton,
    EvernoteButton,
    VkontakteButton,
    FacebookButton,
    LinkedInButton,
    TumblrButton,
    PinterestButton,
    RedditButton,
    PocketButton,
    XingButton,
    OdnoklassnikiButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
