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
      <facebook-button v-bind:hasIcon="false" shareTitle="Comment" hasCounter></facebook-button>
      <facebook-button class="share-button--circle" shareTitle="Comment" hasCounter></facebook-button>
      <facebook-button class="share-button--circle" shareTitle="Comment" btnText hasCounter></facebook-button>
      <facebook-button
        class="share-button--circle"
        shareTitle="Comment"
        v-bind:hasIcon="false"
        hasCounter
      ></facebook-button>
      <facebook-button class="share-button--outline" shareTitle="Comment" hasCounter></facebook-button>
      <facebook-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
        hasCounter
      ></facebook-button>
      <facebook-button class="share-button--outline" hasCounter></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
        hasCounter
      ></facebook-button>
    </div>
    <div class="share-buttons-group">
      <facebook-messenger-button shareTitle="Comment"></facebook-messenger-button>
      <facebook-messenger-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></facebook-messenger-button>
      <facebook-messenger-button v-bind:hasIcon="false" shareTitle="Comment"></facebook-messenger-button>
      <facebook-messenger-button class="share-button--circle" shareTitle="Comment"></facebook-messenger-button>
      <facebook-messenger-button class="share-button--circle" shareTitle="Comment" btnText></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
      <facebook-messenger-button class="share-button--outline" shareTitle="Comment"></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
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
    <div class="share-buttons-group">
      <instapaper-button shareTitle="Comment"></instapaper-button>
      <instapaper-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></instapaper-button>
      <instapaper-button v-bind:hasIcon="false" shareTitle="Comment"></instapaper-button>
      <instapaper-button class="share-button--circle" shareTitle="Comment"></instapaper-button>
      <instapaper-button class="share-button--circle" shareTitle="Comment" btnText></instapaper-button>
      <instapaper-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></instapaper-button>
      <instapaper-button class="share-button--outline" shareTitle="Comment"></instapaper-button>
      <instapaper-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></instapaper-button>
      <instapaper-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></instapaper-button>
      <instapaper-button class="share-button--circle share-button--outline" shareTitle="Comment"></instapaper-button>
      <instapaper-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></instapaper-button>
      <instapaper-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></instapaper-button>
    </div>
    <div class="share-buttons-group">
      <hatena-button shareTitle="Comment"></hatena-button>
      <hatena-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></hatena-button>
      <hatena-button v-bind:hasIcon="false" shareTitle="Comment"></hatena-button>
      <hatena-button class="share-button--circle" shareTitle="Comment"></hatena-button>
      <hatena-button class="share-button--circle" shareTitle="Comment" btnText></hatena-button>
      <hatena-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></hatena-button>
      <hatena-button class="share-button--outline" shareTitle="Comment"></hatena-button>
      <hatena-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></hatena-button>
      <hatena-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></hatena-button>
      <hatena-button class="share-button--circle share-button--outline" shareTitle="Comment"></hatena-button>
      <hatena-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></hatena-button>
      <hatena-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></hatena-button>
    </div>
    <div class="share-buttons-group">
      <email-button shareTitle="Comment"></email-button>
      <email-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></email-button>
      <email-button v-bind:hasIcon="false" shareTitle="Comment"></email-button>
      <email-button class="share-button--circle" shareTitle="Comment"></email-button>
      <email-button class="share-button--circle" shareTitle="Comment" btnText></email-button>
      <email-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></email-button>
      <email-button class="share-button--outline" shareTitle="Comment"></email-button>
      <email-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></email-button>
      <email-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></email-button>
      <email-button class="share-button--circle share-button--outline" shareTitle="Comment"></email-button>
      <email-button class="share-button--circle share-button--outline" shareTitle="Comment" btnText></email-button>
      <email-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></email-button>
    </div>
    <div class="share-buttons-group">
      <viber-button shareTitle="Comment"></viber-button>
      <viber-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></viber-button>
      <viber-button v-bind:hasIcon="false" shareTitle="Comment"></viber-button>
      <viber-button class="share-button--circle" shareTitle="Comment"></viber-button>
      <viber-button class="share-button--circle" shareTitle="Comment" btnText></viber-button>
      <viber-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></viber-button>
      <viber-button class="share-button--outline" shareTitle="Comment"></viber-button>
      <viber-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></viber-button>
      <viber-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></viber-button>
      <viber-button class="share-button--circle share-button--outline" shareTitle="Comment"></viber-button>
      <viber-button class="share-button--circle share-button--outline" shareTitle="Comment" btnText></viber-button>
      <viber-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></viber-button>
    </div>
    <div class="share-buttons-group">
      <telegram-button shareTitle="Comment"></telegram-button>
      <telegram-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></telegram-button>
      <telegram-button v-bind:hasIcon="false" shareTitle="Comment"></telegram-button>
      <telegram-button class="share-button--circle" shareTitle="Comment"></telegram-button>
      <telegram-button class="share-button--circle" shareTitle="Comment" btnText></telegram-button>
      <telegram-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></telegram-button>
      <telegram-button class="share-button--outline" shareTitle="Comment"></telegram-button>
      <telegram-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></telegram-button>
      <telegram-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></telegram-button>
      <telegram-button class="share-button--circle share-button--outline" shareTitle="Comment"></telegram-button>
      <telegram-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></telegram-button>
      <telegram-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></telegram-button>
    </div>
    <div class="share-buttons-group">
      <whatsApp-button shareTitle="Comment"></whatsApp-button>
      <whatsApp-button
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></whatsApp-button>
      <whatsApp-button v-bind:hasIcon="false" shareTitle="Comment"></whatsApp-button>
      <whatsApp-button class="share-button--circle" shareTitle="Comment"></whatsApp-button>
      <whatsApp-button class="share-button--circle" shareTitle="Comment" btnText></whatsApp-button>
      <whatsApp-button class="share-button--circle" shareTitle="Comment" v-bind:hasIcon="false"></whatsApp-button>
      <whatsApp-button class="share-button--outline" shareTitle="Comment"></whatsApp-button>
      <whatsApp-button
        class="share-button--outline"
        v-bind:isBlank="false"
        shareText="Twiiter share good work"
        shareTitle="Comment"
        btnText
      ></whatsApp-button>
      <whatsApp-button class="share-button--outline" shareTitle="Comment" v-bind:hasIcon="false"></whatsApp-button>
      <whatsApp-button class="share-button--circle share-button--outline" shareTitle="Comment"></whatsApp-button>
      <whatsApp-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        btnText
      ></whatsApp-button>
      <whatsApp-button
        class="share-button--circle share-button--outline"
        shareTitle="Comment"
        v-bind:hasIcon="false"
      ></whatsApp-button>
    </div>

    <div class="share-buttons-group">
      <twitter-button class="share-button--painted" hasCounter></twitter-button>
      <liveJournal-button class="share-button--painted"></liveJournal-button>
      <digg-button class="share-button--painted"></digg-button>
      <renren-button class="share-button--painted"></renren-button>
      <blogger-button class="share-button--painted"></blogger-button>
      <weibo-button class="share-button--painted"></weibo-button>
      <evernote-button class="share-button--painted"></evernote-button>
      <vkontakte-button class="share-button--painted" hasCounter></vkontakte-button>
      <facebook-button class="share-button--painted" hasCounter></facebook-button>
      <linkedIn-button class="share-button--painted" hasCounter></linkedIn-button>
      <tumblr-button class="share-button--painted" hasCounter></tumblr-button>
      <pinterest-button class="share-button--painted" hasCounter></pinterest-button>
      <reddit-button class="share-button--painted"></reddit-button>
      <pocket-button class="share-button--painted"></pocket-button>
      <xing-button class="share-button--painted"></xing-button>
      <odnoklassniki-button class="share-button--painted" hasCounter></odnoklassniki-button>
      <instapaper-button class="share-button--painted"></instapaper-button>
      <hatena-button class="share-button--painted"></hatena-button>
      <email-button class="share-button--painted"></email-button>
      <viber-button class="share-button--painted"></viber-button>
      <telegram-button class="share-button--painted"></telegram-button>
      <whatsApp-button class="share-button--painted"></whatsApp-button>
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
import FacebookMessengerButton from "./components/FacebookMessengerButton";
import LinkedInButton from "./components/LinkedInButton";
import TumblrButton from "./components/TumblrButton";
import PinterestButton from "./components/PinterestButton";
import RedditButton from "./components/RedditButton";
import PocketButton from "./components/PocketButton";
import XingButton from "./components/XingButton";
import OdnoklassnikiButton from "./components/OdnoklassnikiButton";
import InstapaperButton from "./components/InstapaperButton";
import HatenaButton from "./components/HatenaButton";
import EmailButton from "./components/EmailButton";
import ViberButton from "./components/ViberButton";
import TelegramButton from "./components/TelegramButton";
import WhatsAppButton from "./components/WhatsAppButton";

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
    FacebookMessengerButton,
    LinkedInButton,
    TumblrButton,
    PinterestButton,
    RedditButton,
    PocketButton,
    XingButton,
    OdnoklassnikiButton,
    InstapaperButton,
    HatenaButton,
    EmailButton,
    ViberButton,
    TelegramButton,
    WhatsAppButton
  }
};
</script>

<style>
.share-buttons-group {
  margin-bottom: 20px;
}
</style>
