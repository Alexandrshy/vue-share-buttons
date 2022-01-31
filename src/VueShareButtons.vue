<template>
  <div class="share-buttons">
    <div class="share-buttons-group">
      <twitter-button></twitter-button>
      <twitter-button
        btnText
        description="Twitter share good work"
        v-bind:isBlank="false"
      ></twitter-button>
      <twitter-button v-bind:hasIcon="false"></twitter-button>
      <twitter-button class="share-button--circle"></twitter-button>
      <twitter-button class="share-button--circle" btnText></twitter-button>
      <twitter-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></twitter-button>
      <twitter-button class="share-button--outline"></twitter-button>
      <twitter-button
        btnText
        class="share-button--outline"
        description="Twitter share good work"
        v-bind:isBlank="false"
      ></twitter-button>
      <twitter-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></twitter-button>
      <twitter-button
        class="share-button--circle share-button--outline"
      ></twitter-button>
      <twitter-button
        btnText
        class="share-button--circle share-button--outline"
      ></twitter-button>
      <twitter-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></twitter-button>
    </div>
    <div class="share-buttons-group">
      <liveJournal-button></liveJournal-button>
      <liveJournal-button
        btnText
        description="LiveJournal share good work"
        v-bind:isBlank="false"
      ></liveJournal-button>
      <liveJournal-button v-bind:hasIcon="false"></liveJournal-button>
      <liveJournal-button class="share-button--circle"></liveJournal-button>
      <liveJournal-button
        btnText
        class="share-button--circle"
      ></liveJournal-button>
      <liveJournal-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></liveJournal-button>
      <liveJournal-button class="share-button--outline"></liveJournal-button>
      <liveJournal-button
        btnText
        class="share-button--outline"
        description="LiveJournal share good work"
        v-bind:isBlank="false"
      ></liveJournal-button>
      <liveJournal-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></liveJournal-button>
      <liveJournal-button
        class="share-button--circle share-button--outline"
      ></liveJournal-button>
      <liveJournal-button
        btnText
        class="share-button--circle share-button--outline"
      ></liveJournal-button>
      <liveJournal-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></liveJournal-button>
    </div>
    <div class="share-buttons-group">
      <digg-button></digg-button>
      <digg-button btnText v-bind:isBlank="false"></digg-button>
      <digg-button v-bind:hasIcon="false"></digg-button>
      <digg-button class="share-button--circle"></digg-button>
      <digg-button class="share-button--circle" btnText></digg-button>
      <digg-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></digg-button>
      <digg-button class="share-button--outline"></digg-button>
      <digg-button
        btnText
        class="share-button--outline"
        v-bind:isBlank="false"
      ></digg-button>
      <digg-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></digg-button>
      <digg-button
        class="share-button--circle share-button--outline"
      ></digg-button>
      <digg-button
        btnText
        class="share-button--circle share-button--outline"
      ></digg-button>
      <digg-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></digg-button>
    </div>
    <div class="share-buttons-group">
      <renren-button></renren-button>
      <renren-button btnText v-bind:isBlank="false"></renren-button>
      <renren-button v-bind:hasIcon="false"></renren-button>
      <renren-button class="share-button--circle"></renren-button>
      <renren-button class="share-button--circle" btnText></renren-button>
      <renren-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></renren-button>
      <renren-button class="share-button--outline"></renren-button>
      <renren-button
        btnText
        class="share-button--outline"
        v-bind:isBlank="false"
      ></renren-button>
      <renren-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></renren-button>
      <renren-button
        class="share-button--circle share-button--outline"
      ></renren-button>
      <renren-button
        btnText
        class="share-button--circle share-button--outline"
      ></renren-button>
      <renren-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></renren-button>
    </div>
    <div class="share-buttons-group">
      <blogger-button></blogger-button>
      <blogger-button
        btnText
        description="Blogger share good work"
        v-bind:isBlank="false"
      ></blogger-button>
      <blogger-button v-bind:hasIcon="false"></blogger-button>
      <blogger-button class="share-button--circle"></blogger-button>
      <blogger-button class="share-button--circle" btnText></blogger-button>
      <blogger-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></blogger-button>
      <blogger-button class="share-button--outline"></blogger-button>
      <blogger-button
        btnText
        class="share-button--outline"
        description="Blogger share good work"
        v-bind:isBlank="false"
      ></blogger-button>
      <blogger-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></blogger-button>
      <blogger-button
        class="share-button--circle share-button--outline"
      ></blogger-button>
      <blogger-button
        btnText
        class="share-button--circle share-button--outline"
      ></blogger-button>
      <blogger-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></blogger-button>
    </div>
    <div class="share-buttons-group">
      <weibo-button></weibo-button>
      <weibo-button
        btnText
        description="Weibo share good work"
        v-bind:isBlank="false"
      ></weibo-button>
      <weibo-button v-bind:hasIcon="false"></weibo-button>
      <weibo-button class="share-button--circle"></weibo-button>
      <weibo-button class="share-button--circle" btnText></weibo-button>
      <weibo-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></weibo-button>
      <weibo-button class="share-button--outline"></weibo-button>
      <weibo-button
        btnText
        class="share-button--outline"
        description="Weibo share good work"
        v-bind:isBlank="false"
      ></weibo-button>
      <weibo-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></weibo-button>
      <weibo-button
        class="share-button--circle share-button--outline"
      ></weibo-button>
      <weibo-button
        btnText
        class="share-button--circle share-button--outline"
      ></weibo-button>
      <weibo-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></weibo-button>
    </div>
    <div class="share-buttons-group">
      <vkontakte-button></vkontakte-button>
      <vkontakte-button
        btnText
        description="Vkontakte share good work"
        v-bind:isBlank="false"
      ></vkontakte-button>
      <vkontakte-button v-bind:hasIcon="false"></vkontakte-button>
      <vkontakte-button class="share-button--circle"></vkontakte-button>
      <vkontakte-button btnText class="share-button--circle"></vkontakte-button>
      <vkontakte-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></vkontakte-button>
      <vkontakte-button class="share-button--outline"></vkontakte-button>
      <vkontakte-button
        btnText
        class="share-button--outline"
        description="Vkontakte share good work"
        v-bind:isBlank="false"
      ></vkontakte-button>
      <vkontakte-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></vkontakte-button>
      <vkontakte-button
        class="share-button--circle share-button--outline"
      ></vkontakte-button>
      <vkontakte-button
        btnText
        class="share-button--circle share-button--outline"
      ></vkontakte-button>
      <vkontakte-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></vkontakte-button>
    </div>
    <div class="share-buttons-group">
      <facebook-button></facebook-button>
      <facebook-button btnText v-bind:isBlank="false"></facebook-button>
      <facebook-button hasCounter v-bind:hasIcon="false"></facebook-button>
      <facebook-button
        class="share-button--circle"
        hasCounter
      ></facebook-button>
      <facebook-button
        btnText
        class="share-button--circle"
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--circle"
        hasCounter
        v-bind:hasIcon="false"
      ></facebook-button>
      <facebook-button
        class="share-button--outline"
        hasCounter
      ></facebook-button>
      <facebook-button
        btnText
        class="share-button--outline"
        hasCounter
        v-bind:isBlank="false"
      ></facebook-button>
      <facebook-button
        class="share-button--outline"
        hasCounter
        v-bind:hasIcon="false"
      ></facebook-button>
      <facebook-button
        class="share-button--outline"
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        hasCounter
      ></facebook-button>
      <facebook-button
        btnText
        class="share-button--circle share-button--outline"
        hasCounter
      ></facebook-button>
      <facebook-button
        class="share-button--circle share-button--outline"
        hasCounter
        v-bind:hasIcon="false"
      ></facebook-button>
    </div>
    <div class="share-buttons-group">
      <facebook-messenger-button></facebook-messenger-button>
      <facebook-messenger-button btnText></facebook-messenger-button>
      <facebook-messenger-button
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle"
      ></facebook-messenger-button>
      <facebook-messenger-button
        btnText
        class="share-button--circle"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--outline"
      ></facebook-messenger-button>
      <facebook-messenger-button
        btnText
        class="share-button--outline"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle share-button--outline"
      ></facebook-messenger-button>
      <facebook-messenger-button
        btnText
        class="share-button--circle share-button--outline"
      ></facebook-messenger-button>
      <facebook-messenger-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></facebook-messenger-button>
    </div>
    <div class="share-buttons-group">
      <linkedIn-button></linkedIn-button>
      <linkedIn-button
        btnText
        description="LinkedIn share good work"
        v-bind:isBlank="false"
      ></linkedIn-button>
      <linkedIn-button v-bind:hasIcon="false"></linkedIn-button>
      <linkedIn-button class="share-button--circle"></linkedIn-button>
      <linkedIn-button btnText class="share-button--circle"></linkedIn-button>
      <linkedIn-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></linkedIn-button>
      <linkedIn-button class="share-button--outline"></linkedIn-button>
      <linkedIn-button
        btnText
        class="share-button--outline"
        description="LinkedIn share good work"
        v-bind:isBlank="false"
      ></linkedIn-button>
      <linkedIn-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></linkedIn-button>
      <linkedIn-button
        class="share-button--circle share-button--outline"
      ></linkedIn-button>
      <linkedIn-button
        btnText
        class="share-button--circle share-button--outline"
      ></linkedIn-button>
      <linkedIn-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></linkedIn-button>
    </div>
    <div class="share-buttons-group">
      <tumblr-button></tumblr-button>
      <tumblr-button
        btnText
        description="Tumblr share good work"
        v-bind:isBlank="false"
      ></tumblr-button>
      <tumblr-button v-bind:hasIcon="false"></tumblr-button>
      <tumblr-button class="share-button--circle"></tumblr-button>
      <tumblr-button btnText class="share-button--circle"></tumblr-button>
      <tumblr-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></tumblr-button>
      <tumblr-button class="share-button--outline"></tumblr-button>
      <tumblr-button
        btnText
        class="share-button--outline"
        description="Tumblr share good work"
        v-bind:isBlank="false"
      ></tumblr-button>
      <tumblr-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></tumblr-button>
      <tumblr-button
        class="share-button--circle share-button--outline"
      ></tumblr-button>
      <tumblr-button
        btnText
        class="share-button--circle share-button--outline"
      ></tumblr-button>
      <tumblr-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></tumblr-button>
    </div>
    <div class="share-buttons-group">
      <pinterest-button></pinterest-button>
      <pinterest-button
        btnText
        description="Pinterest share good work"
        v-bind:isBlank="false"
      ></pinterest-button>
      <pinterest-button v-bind:hasIcon="false"></pinterest-button>
      <pinterest-button class="share-button--circle"></pinterest-button>
      <pinterest-button btnText class="share-button--circle"></pinterest-button>
      <pinterest-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></pinterest-button>
      <pinterest-button class="share-button--outline"></pinterest-button>
      <pinterest-button
        btnText
        class="share-button--outline"
        description="Pinterest share good work"
        v-bind:isBlank="false"
      ></pinterest-button>
      <pinterest-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></pinterest-button>
      <pinterest-button
        class="share-button--circle share-button--outline"
      ></pinterest-button>
      <pinterest-button
        btnText
        class="share-button--circle share-button--outline"
      ></pinterest-button>
      <pinterest-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></pinterest-button>
    </div>
    <div class="share-buttons-group">
      <reddit-button></reddit-button>
      <reddit-button btnText v-bind:isBlank="false"></reddit-button>
      <reddit-button v-bind:hasIcon="false"></reddit-button>
      <reddit-button class="share-button--circle"></reddit-button>
      <reddit-button btnText class="share-button--circle"></reddit-button>
      <reddit-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></reddit-button>
      <reddit-button class="share-button--outline"></reddit-button>
      <reddit-button
        btnText
        class="share-button--outline"
        v-bind:isBlank="false"
      ></reddit-button>
      <reddit-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></reddit-button>
      <reddit-button
        class="share-button--circle share-button--outline"
      ></reddit-button>
      <reddit-button
        btnText
        class="share-button--circle share-button--outline"
      ></reddit-button>
      <reddit-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></reddit-button>
    </div>
    <div class="share-buttons-group">
      <pocket-button></pocket-button>
      <pocket-button btnText v-bind:isBlank="false"></pocket-button>
      <pocket-button v-bind:hasIcon="false"></pocket-button>
      <pocket-button class="share-button--circle"></pocket-button>
      <pocket-button btnText class="share-button--circle"></pocket-button>
      <pocket-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></pocket-button>
      <pocket-button class="share-button--outline"></pocket-button>
      <pocket-button
        btnText
        class="share-button--outline"
        v-bind:isBlank="false"
      ></pocket-button>
      <pocket-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></pocket-button>
      <pocket-button
        class="share-button--circle share-button--outline"
      ></pocket-button>
      <pocket-button
        btnText
        class="share-button--circle share-button--outline"
      ></pocket-button>
      <pocket-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></pocket-button>
    </div>
    <div class="share-buttons-group">
      <xing-button></xing-button>
      <xing-button btnText v-bind:isBlank="false"></xing-button>
      <xing-button v-bind:hasIcon="false"></xing-button>
      <xing-button class="share-button--circle"></xing-button>
      <xing-button btnText class="share-button--circle"></xing-button>
      <xing-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></xing-button>
      <xing-button class="share-button--outline"></xing-button>
      <xing-button
        btnText
        class="share-button--outline"
        v-bind:isBlank="false"
      ></xing-button>
      <xing-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></xing-button>
      <xing-button
        class="share-button--circle share-button--outline"
      ></xing-button>
      <xing-button
        btnText
        class="share-button--circle share-button--outline"
      ></xing-button>
      <xing-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></xing-button>
    </div>
    <div class="share-buttons-group">
      <odnoklassniki-button></odnoklassniki-button>
      <odnoklassniki-button
        btnText
        description="Odnoklassniki share good work"
        v-bind:isBlank="false"
      ></odnoklassniki-button>
      <odnoklassniki-button v-bind:hasIcon="false"></odnoklassniki-button>
      <odnoklassniki-button class="share-button--circle"></odnoklassniki-button>
      <odnoklassniki-button
        btnText
        class="share-button--circle"
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--outline"
      ></odnoklassniki-button>
      <odnoklassniki-button
        btnText
        class="share-button--outline"
        description="Odnoklassniki share good work"
        v-bind:isBlank="false"
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle share-button--outline"
      ></odnoklassniki-button>
      <odnoklassniki-button
        btnText
        class="share-button--circle share-button--outline"
      ></odnoklassniki-button>
      <odnoklassniki-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></odnoklassniki-button>
    </div>
    <div class="share-buttons-group">
      <instapaper-button></instapaper-button>
      <instapaper-button
        btnText
        description="Instapaper share good work"
        v-bind:isBlank="false"
      ></instapaper-button>
      <instapaper-button v-bind:hasIcon="false"></instapaper-button>
      <instapaper-button class="share-button--circle"></instapaper-button>
      <instapaper-button
        btnText
        class="share-button--circle"
      ></instapaper-button>
      <instapaper-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></instapaper-button>
      <instapaper-button class="share-button--outline"></instapaper-button>
      <instapaper-button
        btnText
        class="share-button--outline"
        description="Instapaper share good work"
        v-bind:isBlank="false"
      ></instapaper-button>
      <instapaper-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></instapaper-button>
      <instapaper-button
        class="share-button--circle share-button--outline"
      ></instapaper-button>
      <instapaper-button
        btnText
        class="share-button--circle share-button--outline"
      ></instapaper-button>
      <instapaper-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></instapaper-button>
    </div>
    <div class="share-buttons-group">
      <hatena-button></hatena-button>
      <hatena-button
        btnText
        description="Hatena share good work"
        v-bind:isBlank="false"
      ></hatena-button>
      <hatena-button v-bind:hasIcon="false"></hatena-button>
      <hatena-button class="share-button--circle"></hatena-button>
      <hatena-button btnText class="share-button--circle"></hatena-button>
      <hatena-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></hatena-button>
      <hatena-button class="share-button--outline"></hatena-button>
      <hatena-button
        btnText
        class="share-button--outline"
        description="Hatena share good work"
        v-bind:isBlank="false"
      ></hatena-button>
      <hatena-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></hatena-button>
      <hatena-button
        class="share-button--circle share-button--outline"
      ></hatena-button>
      <hatena-button
        btnText
        class="share-button--circle share-button--outline"
      ></hatena-button>
      <hatena-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></hatena-button>
    </div>
    <div class="share-buttons-group">
      <email-button></email-button>
      <email-button btnText></email-button>
      <email-button v-bind:hasIcon="false"></email-button>
      <email-button class="share-button--circle"></email-button>
      <email-button btnText class="share-button--circle"></email-button>
      <email-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></email-button>
      <email-button class="share-button--outline"></email-button>
      <email-button btnText class="share-button--outline"></email-button>
      <email-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></email-button>
      <email-button
        class="share-button--circle share-button--outline"
      ></email-button>
      <email-button
        btnText
        class="share-button--circle share-button--outline"
      ></email-button>
      <email-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></email-button>
    </div>
    <div class="share-buttons-group">
      <viber-button></viber-button>
      <viber-button btnText></viber-button>
      <viber-button v-bind:hasIcon="false"></viber-button>
      <viber-button class="share-button--circle"></viber-button>
      <viber-button btnText class="share-button--circle"></viber-button>
      <viber-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></viber-button>
      <viber-button class="share-button--outline"></viber-button>
      <viber-button btnText class="share-button--outline"></viber-button>
      <viber-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></viber-button>
      <viber-button
        class="share-button--circle share-button--outline"
      ></viber-button>
      <viber-button
        btnText
        class="share-button--circle share-button--outline"
      ></viber-button>
      <viber-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></viber-button>
    </div>
    <div class="share-buttons-group">
      <telegram-button></telegram-button>
      <telegram-button
        btnText
        description="Telegram share good work"
      ></telegram-button>
      <telegram-button v-bind:hasIcon="false"></telegram-button>
      <telegram-button class="share-button--circle"></telegram-button>
      <telegram-button btnText class="share-button--circle"></telegram-button>
      <telegram-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></telegram-button>
      <telegram-button class="share-button--outline"></telegram-button>
      <telegram-button
        btnText
        class="share-button--outline"
        description="Telegram share good work"
      ></telegram-button>
      <telegram-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></telegram-button>
      <telegram-button
        class="share-button--circle share-button--outline"
      ></telegram-button>
      <telegram-button
        btnText
        class="share-button--circle share-button--outline"
      ></telegram-button>
      <telegram-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></telegram-button>
    </div>
    <div class="share-buttons-group">
      <whatsApp-button></whatsApp-button>
      <whatsApp-button btnText></whatsApp-button>
      <whatsApp-button v-bind:hasIcon="false"></whatsApp-button>
      <whatsApp-button class="share-button--circle"></whatsApp-button>
      <whatsApp-button btnText class="share-button--circle"></whatsApp-button>
      <whatsApp-button
        class="share-button--circle"
        v-bind:hasIcon="false"
      ></whatsApp-button>
      <whatsApp-button class="share-button--outline"></whatsApp-button>
      <whatsApp-button btnText class="share-button--outline"></whatsApp-button>
      <whatsApp-button
        class="share-button--outline"
        v-bind:hasIcon="false"
      ></whatsApp-button>
      <whatsApp-button
        class="share-button--circle share-button--outline"
      ></whatsApp-button>
      <whatsApp-button
        btnText
        class="share-button--circle share-button--outline"
      ></whatsApp-button>
      <whatsApp-button
        class="share-button--circle share-button--outline"
        v-bind:hasIcon="false"
      ></whatsApp-button>
    </div>

    <div class="share-buttons-group">
      <twitter-button class="share-button--painted"></twitter-button>
      <liveJournal-button class="share-button--painted"></liveJournal-button>
      <digg-button class="share-button--painted"></digg-button>
      <renren-button class="share-button--painted"></renren-button>
      <blogger-button class="share-button--painted"></blogger-button>
      <weibo-button class="share-button--painted"></weibo-button>
      <vkontakte-button
        class="share-button--painted"
        hasCounter
      ></vkontakte-button>
      <facebook-button
        class="share-button--painted"
        hasCounter
      ></facebook-button>
      <linkedIn-button
        class="share-button--painted"
        hasCounter
      ></linkedIn-button>
      <tumblr-button class="share-button--painted" hasCounter></tumblr-button>
      <pinterest-button
        class="share-button--painted"
        hasCounter
      ></pinterest-button>
      <reddit-button class="share-button--painted"></reddit-button>
      <pocket-button class="share-button--painted"></pocket-button>
      <xing-button class="share-button--painted"></xing-button>
      <odnoklassniki-button
        class="share-button--painted"
        hasCounter
      ></odnoklassniki-button>
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
    WhatsAppButton,
  },
};
</script>

<style>
.share-buttons-group {
  margin-bottom: 20px;
}
</style>
