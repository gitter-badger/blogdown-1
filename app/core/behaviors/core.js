const BlogdownBody = {};

const BlogdownPage = {
  ready: function() {
    app.runHook('pageReady', {
      page: this.page
    });
  },
  attached: function() {
    app.runHook('pageAttached', {
      page: this.page
    });
  }
};

const BlogdownPosts = {
  ready: function() {
    app.runHook('postsReady', {
      page: this.page,
      posts: this.posts
    });
  },
  attached: function() {
    app.runHook('postsAttached', {
      page: this.page,
      posts: this.posts
    });
    }
};

const BlogdownPost = {
  ready: function() {
    app.runHook('postReady', {
      post: this.post
    });
  },
  attached: function() {
    app.runHook('postAttached', {
      post: this.post
    });
  }
};

const BlogdownHooks = {
  ready: function() {
    this._hookID = moment().format('x');
    if (!app._hooks) app._hooks = {};
    _.each(this.registerHooks(), (hook, key) => {
      if (!app._hooks[key]) app._hooks[key] = {};
      app._hooks[key][this._hookID] = hook;
    });
  },
  detached: function() {
    _.each(this.registerHooks(), (hook, key) => {
      delete app._hooks[key][this._hookID];
    });
  }
};