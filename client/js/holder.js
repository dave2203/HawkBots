  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>holder/holder.js at master · imsky/holder</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4615019" name="octolytics-actor-id" /><meta content="sergiolinkpf" name="octolytics-actor-login" /><meta content="d61066cc93b912ef2b6274b8572fc00613348cc169c99f4336f3c79fcf9d7249" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="uudd9MjD20YQuv3/84E+BNx0cojLx0dmuUfzmcq4MBA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-e851f4e9bd753bd1a66c92824ac8926f5afef3f1.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-c8d09242e690007cb21dcd5a4a184a9bc17447d4.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-8e41813b46197a4fc32425710b6439a84af50113.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="a43e5f2a7ebf13757fe7c0d6a7dc18bc">

        <link data-pjax-transient rel='permalink' href='/imsky/holder/blob/afb8feef8672f2ee6a33e4aebc061cb39b5948b6/holder.js'>
    <meta property="og:title" content="holder"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/imsky/holder"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/786552a84365e60df3eeec8bc339a18c?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Holder renders image placeholders entirely on the client side."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="imsky/holder"/>

    <meta name="description" content="Holder renders image placeholders entirely on the client side." />


    <meta content="330895" name="octolytics-dimension-user_id" /><meta content="imsky" name="octolytics-dimension-user_login" /><meta content="4641606" name="octolytics-dimension-repository_id" /><meta content="imsky/holder" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4641606" name="octolytics-dimension-repository_network_root_id" /><meta content="imsky/holder" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/imsky/holder/commits/master.atom" rel="alternate" title="Recent Commits to holder:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="sergiolinkpf"
      data-repo="imsky/holder"
      data-branch="master"
      data-sha="b8f1852b76118873aa9d1fb9138b980cdb536a7b"
  >

    <input type="hidden" name="nwo" value="imsky/holder" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/sergiolinkpf" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/a8db71bdb944eceaa66a79541c6c071c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> sergiolinkpf
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
    </li>
    <li>
        <a href="/imsky/holder/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="uudd9MjD20YQuv3/84E+BNx0cojLx0dmuUfzmcq4MBA=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4641606" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/imsky/holder/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/imsky/holder/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/imsky/holder/stargazers">2,213</a>
    </li>

        <li>
          <a href="/imsky/holder/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/imsky/holder/network" class="social-count">196</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/imsky" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">imsky</span>
                  </a></span> /
                <strong><a href="/imsky/holder" class="js-current-repository">holder</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/imsky/holder/pulse" class="js-selected-navigation-item " data-selected-links="pulse /imsky/holder/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/imsky/holder" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /imsky/holder">Code</a></li>
    <li><a href="/imsky/holder/network" class="js-selected-navigation-item " data-selected-links="repo_network /imsky/holder/network">Network</a></li>
    <li><a href="/imsky/holder/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /imsky/holder/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/imsky/holder/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /imsky/holder/issues">Issues <span class='counter'>0</span></a></li>



    <li><a href="/imsky/holder/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /imsky/holder/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/imsky/holder/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /imsky/holder/tags">Tags <span class="counter ">11</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/gh-pages/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/master/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.9/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9" rel="nofollow" title="v1.9">v1.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.8/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8" rel="nofollow" title="v1.8">v1.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.7/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7" rel="nofollow" title="v1.7">v1.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.6/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6" rel="nofollow" title="v1.6">v1.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.5/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5" rel="nofollow" title="v1.5">v1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.4/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4" rel="nofollow" title="v1.4">v1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.3/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3" rel="nofollow" title="v1.3">v1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.2/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2" rel="nofollow" title="v1.2">v1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.1/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1" rel="nofollow" title="v1.1">v1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/v1.0/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0" rel="nofollow" title="v1.0">v1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/imsky/holder/blob/1.9.0/holder.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.0" rel="nofollow" title="1.9.0">1.9.0</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/imsky/holder" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /imsky/holder">Files</a></li>
    <li><a href="/imsky/holder/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /imsky/holder/commits/master">Commits</a></li>
    <li><a href="/imsky/holder/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /imsky/holder/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:880aae8961fdb741a96885ae16de7d5d -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:880aae8961fdb741a96885ae16de7d5d -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imsky/holder" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">holder</span></a></span></span><span class="separator"> / </span><strong class="final-path">holder.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="holder.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/imsky/holder/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/786552a84365e60df3eeec8bc339a18c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/imsky" rel="author">imsky</a></span>
    <time class="js-relative-date" datetime="2013-06-13T19:26:03-07:00" title="2013-06-13 19:26:03">June 13, 2013</time>
    <div class="commit-title">
        <a href="/imsky/holder/commit/afb8feef8672f2ee6a33e4aebc061cb39b5948b6" class="message">finalize vertical height text functionality on fluid placeholdres</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="imsky" href="/imsky/holder/commits/master/holder.js?author=imsky"><img height="20" src="https://secure.gravatar.com/avatar/786552a84365e60df3eeec8bc339a18c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cnanney" href="/imsky/holder/commits/master/holder.js?author=cnanney"><img height="20" src="https://secure.gravatar.com/avatar/c0dfa1ed712960cc0a8b5fbeb0bdd7d7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="bardware" href="/imsky/holder/commits/master/holder.js?author=bardware"><img height="20" src="https://secure.gravatar.com/avatar/f8d057e5d7a546526e123d1b028710fb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="clexit" href="/imsky/holder/commits/master/holder.js?author=clexit"><img height="20" src="https://secure.gravatar.com/avatar/ede8c5d70c55828b3889fd47a1cf077f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="andrefarzat" href="/imsky/holder/commits/master/holder.js?author=andrefarzat"><img height="20" src="https://secure.gravatar.com/avatar/39cbf87dae724f2cb64e92accdd4d349?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/786552a84365e60df3eeec8bc339a18c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/imsky">imsky</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/c0dfa1ed712960cc0a8b5fbeb0bdd7d7?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cnanney">cnanney</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/f8d057e5d7a546526e123d1b028710fb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/bardware">bardware</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ede8c5d70c55828b3889fd47a1cf077f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/clexit">clexit</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/39cbf87dae724f2cb64e92accdd4d349?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/andrefarzat">andrefarzat</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/imsky/holder/blob/afb8feef8672f2ee6a33e4aebc061cb39b5948b6/holder.js" data-title="holder/holder.js at master · imsky/holder · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">executable file</span>
                  <span>448 lines (381 sloc)</span>
                <span>13.485 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/imsky/holder/edit/master/holder.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/imsky/holder/raw/master/holder.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/imsky/holder/blame/master/holder.js" class="button minibutton ">Blame</a>
                  <a href="/imsky/holder/commits/master/holder.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">Holder - 2.0 - client side image placeholders</span></div><div class='line' id='LC4'><span class="cm">(c) 2012-2013 Ivan Malopinsky / http://imsky.co</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC7'><span class="cm">Commercial use requires attribution.</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">*/</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><span class="kd">var</span> <span class="nx">Holder</span> <span class="o">=</span> <span class="nx">Holder</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">app</span><span class="p">,</span> <span class="nx">win</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="kd">var</span> <span class="nx">preempted</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC15'><span class="nx">fallback</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC16'><span class="nx">canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">);</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="c1">//getElementsByClassName polyfill</span></div><div class='line' id='LC19'><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="o">||</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span><span class="kd">var</span> <span class="nx">t</span><span class="o">=</span><span class="nb">document</span><span class="p">,</span><span class="nx">n</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="p">[];</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">)</span><span class="k">return</span> <span class="nx">t</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">evaluate</span><span class="p">){</span><span class="nx">r</span><span class="o">=</span><span class="s2">&quot;.//*[contains(concat(&#39; &#39;, @class, &#39; &#39;), &#39; &quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot; &#39;)]&quot;</span><span class="p">,</span><span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">evaluate</span><span class="p">(</span><span class="nx">r</span><span class="p">,</span><span class="nx">t</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="kc">null</span><span class="p">);</span><span class="k">while</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nx">iterateNext</span><span class="p">())</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">n</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;*&quot;</span><span class="p">),</span><span class="nx">r</span><span class="o">=</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|\\s)&quot;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;(\\s|$)&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span><span class="nx">r</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">n</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">className</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">n</span><span class="p">[</span><span class="nx">i</span><span class="p">])}</span><span class="k">return</span> <span class="nx">s</span><span class="p">})</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="c1">//getComputedStyle polyfill</span></div><div class='line' id='LC22'><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="o">||</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">getPropertyValue</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">n</span><span class="o">=</span><span class="sr">/(\-([a-z]){1})/g</span><span class="p">;</span><span class="k">return</span> <span class="nx">t</span><span class="o">==</span><span class="s2">&quot;float&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="s2">&quot;styleFloat&quot;</span><span class="p">),</span><span class="nx">n</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">toUpperCase</span><span class="p">()})),</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">[</span><span class="nx">t</span><span class="p">]</span><span class="o">:</span><span class="kc">null</span><span class="p">},</span><span class="k">this</span><span class="p">})</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="c1">//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications</span></div><div class='line' id='LC25'><span class="kd">function</span> <span class="nx">contentLoaded</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="nx">t</span><span class="p">){</span><span class="kd">var</span> <span class="nx">l</span><span class="o">=</span><span class="s2">&quot;complete&quot;</span><span class="p">,</span><span class="nx">s</span><span class="o">=</span><span class="s2">&quot;readystatechange&quot;</span><span class="p">,</span><span class="nx">u</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">u</span><span class="p">,</span><span class="nx">c</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">n</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;addEventListener&quot;</span><span class="o">:</span><span class="s2">&quot;attachEvent&quot;</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;removeEventListener&quot;</span><span class="o">:</span><span class="s2">&quot;detachEvent&quot;</span><span class="p">,</span><span class="nx">f</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="s2">&quot;on&quot;</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){(</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="o">!=</span><span class="nx">s</span><span class="o">||</span><span class="nx">i</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">l</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">((</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="o">==</span><span class="s2">&quot;load&quot;</span><span class="o">?</span><span class="nx">n</span><span class="o">:</span><span class="nx">i</span><span class="p">)[</span><span class="nx">v</span><span class="p">](</span><span class="nx">f</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="o">!</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="o">=!</span><span class="mi">0</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">t</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="kc">null</span><span class="p">))},</span><span class="nx">o</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">try</span><span class="p">{</span><span class="nx">a</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">(</span><span class="s2">&quot;left&quot;</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">n</span><span class="p">){</span><span class="nx">setTimeout</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span><span class="mi">50</span><span class="p">);</span><span class="k">return</span><span class="p">}</span><span class="nx">r</span><span class="p">(</span><span class="s2">&quot;poll&quot;</span><span class="p">)};</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">readyState</span><span class="o">==</span><span class="nx">l</span><span class="p">)</span><span class="nx">t</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span><span class="s2">&quot;lazy&quot;</span><span class="p">);</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">.</span><span class="nx">createEventObject</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">doScroll</span><span class="p">){</span><span class="k">try</span><span class="p">{</span><span class="nx">c</span><span class="o">=!</span><span class="nx">n</span><span class="p">.</span><span class="nx">frameElement</span><span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">y</span><span class="p">){}</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">o</span><span class="p">()}</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">](</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">i</span><span class="p">[</span><span class="nx">e</span><span class="p">](</span><span class="nx">f</span><span class="o">+</span><span class="nx">s</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">u</span><span class="p">),</span><span class="nx">n</span><span class="p">[</span><span class="nx">e</span><span class="p">](</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">,</span><span class="nx">u</span><span class="p">)}};</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="c1">//https://gist.github.com/991057 by Jed Schmidt with modifications</span></div><div class='line' id='LC28'><span class="kd">function</span> <span class="nx">selector</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span></div><div class='line' id='LC29'>	<span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(\W)?(.*)/</span><span class="p">);</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nb">document</span><span class="p">[</span><span class="s2">&quot;getElement&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">?</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">==</span><span class="s2">&quot;#&quot;</span><span class="o">?</span><span class="s2">&quot;ById&quot;</span><span class="o">:</span><span class="s2">&quot;sByClassName&quot;</span><span class="o">:</span><span class="s2">&quot;sByTagName&quot;</span><span class="p">)](</span><span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span></div><div class='line' id='LC30'>	<span class="kd">var</span> <span class="nx">ret</span><span class="o">=</span><span class="p">[];</span>	<span class="nx">b</span><span class="o">!=</span><span class="kc">null</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">ret</span><span class="o">=</span><span class="nx">b</span><span class="o">:</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">==</span><span class="mi">0</span><span class="o">?</span><span class="nx">ret</span><span class="o">=</span><span class="nx">b</span><span class="o">:</span><span class="nx">ret</span><span class="o">=</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span>	<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC31'><span class="p">}</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="c1">//shallow object property extend</span></div><div class='line' id='LC34'><span class="kd">function</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="p">{};</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">d</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">c</span><span class="p">[</span><span class="nx">d</span><span class="p">]</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">];</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">e</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span><span class="nx">c</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">e</span><span class="p">];</span><span class="k">return</span> <span class="nx">c</span><span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="c1">//hasOwnProperty polyfill</span></div><div class='line' id='LC37'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">)</span></div><div class='line' id='LC38'>	<span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">prop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="kd">var</span> <span class="nx">proto</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">__proto__</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC40'>		<span class="k">return</span> <span class="p">(</span><span class="nx">prop</span> <span class="k">in</span> <span class="k">this</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">prop</span> <span class="k">in</span> <span class="nx">proto</span><span class="p">)</span> <span class="o">||</span> <span class="nx">proto</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">!==</span> <span class="k">this</span><span class="p">[</span><span class="nx">prop</span><span class="p">]);</span></div><div class='line' id='LC41'>	<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="kd">function</span> <span class="nx">text_size</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">,</span> <span class="nx">template</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>	<span class="nx">height</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC45'>	<span class="nx">width</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">width</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC46'>	<span class="kd">var</span> <span class="nx">bigSide</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span></div><div class='line' id='LC47'>	<span class="kd">var</span> <span class="nx">smallSide</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">height</span><span class="p">,</span> <span class="nx">width</span><span class="p">)</span></div><div class='line' id='LC48'>	<span class="kd">var</span> <span class="nx">scale</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">/</span> <span class="mi">12</span><span class="p">;</span></div><div class='line' id='LC49'>	<span class="kd">var</span> <span class="nx">newHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">smallSide</span> <span class="o">*</span> <span class="mf">0.75</span><span class="p">,</span> <span class="mf">0.75</span> <span class="o">*</span> <span class="nx">bigSide</span> <span class="o">*</span> <span class="nx">scale</span><span class="p">);</span></div><div class='line' id='LC50'>	<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC51'>		<span class="nx">height</span><span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">template</span><span class="p">.</span><span class="nx">size</span><span class="p">,</span> <span class="nx">newHeight</span><span class="p">))</span></div><div class='line' id='LC52'>	<span class="p">}</span></div><div class='line' id='LC53'><span class="p">}</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><span class="kd">function</span> <span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">dimensions</span><span class="p">,</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">ratio</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>	<span class="kd">var</span> <span class="nx">ts</span> <span class="o">=</span> <span class="nx">text_size</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC57'>	<span class="kd">var</span> <span class="nx">text_height</span> <span class="o">=</span> <span class="nx">ts</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC58'>	<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">*</span> <span class="nx">ratio</span><span class="p">,</span></div><div class='line' id='LC59'>		<span class="nx">height</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span> <span class="o">*</span> <span class="nx">ratio</span><span class="p">;</span></div><div class='line' id='LC60'>	<span class="kd">var</span> <span class="nx">font</span> <span class="o">=</span> <span class="nx">template</span><span class="p">.</span><span class="nx">font</span> <span class="o">?</span> <span class="nx">template</span><span class="p">.</span><span class="nx">font</span> <span class="o">:</span> <span class="s2">&quot;sans-serif&quot;</span><span class="p">;</span></div><div class='line' id='LC61'>	<span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC62'>	<span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC63'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">textAlign</span> <span class="o">=</span> <span class="s2">&quot;center&quot;</span><span class="p">;</span></div><div class='line' id='LC64'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">textBaseline</span> <span class="o">=</span> <span class="s2">&quot;middle&quot;</span><span class="p">;</span></div><div class='line' id='LC65'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">template</span><span class="p">.</span><span class="nx">background</span><span class="p">;</span></div><div class='line' id='LC66'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillRect</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span><span class="p">);</span></div><div class='line' id='LC67'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="nx">template</span><span class="p">.</span><span class="nx">foreground</span><span class="p">;</span></div><div class='line' id='LC68'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="s2">&quot;bold &quot;</span> <span class="o">+</span> <span class="nx">text_height</span> <span class="o">+</span> <span class="s2">&quot;px &quot;</span> <span class="o">+</span> <span class="nx">font</span><span class="p">;</span></div><div class='line' id='LC69'>	<span class="kd">var</span> <span class="nx">text</span> <span class="o">=</span> <span class="nx">template</span><span class="p">.</span><span class="nx">text</span> <span class="o">?</span> <span class="nx">template</span><span class="p">.</span><span class="nx">text</span> <span class="o">:</span> <span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;x&quot;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">));</span></div><div class='line' id='LC70'>	<span class="kd">var</span> <span class="nx">text_width</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="nx">text</span><span class="p">).</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC71'>	<span class="k">if</span> <span class="p">(</span><span class="nx">text_width</span> <span class="o">/</span> <span class="nx">width</span> <span class="o">&gt;=</span> <span class="mf">0.75</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>		<span class="nx">text_height</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">text_height</span> <span class="o">*</span> <span class="mf">0.75</span> <span class="o">*</span> <span class="p">(</span><span class="nx">width</span><span class="o">/</span><span class="nx">text_width</span><span class="p">));</span></div><div class='line' id='LC73'>	<span class="p">}</span></div><div class='line' id='LC74'>	<span class="c1">//Resetting font size if necessary</span></div><div class='line' id='LC75'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="s2">&quot;bold &quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">text_height</span> <span class="o">*</span> <span class="nx">ratio</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;px &quot;</span> <span class="o">+</span> <span class="nx">font</span><span class="p">;</span></div><div class='line' id='LC76'>	<span class="nx">ctx</span><span class="p">.</span><span class="nx">fillText</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="p">(</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">),</span> <span class="p">(</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">),</span> <span class="nx">width</span><span class="p">);</span></div><div class='line' id='LC77'>	<span class="k">return</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">(</span><span class="s2">&quot;image/png&quot;</span><span class="p">);</span></div><div class='line' id='LC78'><span class="p">}</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="kd">function</span> <span class="nx">render</span><span class="p">(</span><span class="nx">mode</span><span class="p">,</span> <span class="nx">el</span><span class="p">,</span> <span class="nx">holder</span><span class="p">,</span> <span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>	<span class="kd">var</span> <span class="nx">dimensions</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">,</span></div><div class='line' id='LC82'>		<span class="nx">theme</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">theme</span><span class="p">,</span></div><div class='line' id='LC83'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">text</span> <span class="o">?</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">holder</span><span class="p">.</span><span class="nx">text</span><span class="p">)</span> <span class="o">:</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC84'>	<span class="kd">var</span> <span class="nx">dimensions_caption</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;x&quot;</span> <span class="o">+</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>	<span class="nx">theme</span> <span class="o">=</span> <span class="p">(</span><span class="nx">text</span> <span class="o">?</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">theme</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC87'>		<span class="nx">text</span><span class="o">:</span> <span class="nx">text</span></div><div class='line' id='LC88'>	<span class="p">})</span> <span class="o">:</span> <span class="nx">theme</span><span class="p">);</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="nx">theme</span> <span class="o">=</span> <span class="p">(</span><span class="nx">holder</span><span class="p">.</span><span class="nx">font</span> <span class="o">?</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">theme</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC91'>		<span class="nx">font</span><span class="o">:</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">font</span></div><div class='line' id='LC92'>	<span class="p">})</span> <span class="o">:</span> <span class="nx">theme</span><span class="p">);</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>	<span class="k">if</span> <span class="p">(</span><span class="nx">mode</span> <span class="o">==</span> <span class="s2">&quot;image&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>		<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC96'>		<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;alt&quot;</span><span class="p">,</span> <span class="nx">text</span> <span class="o">?</span> <span class="nx">text</span> <span class="o">:</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">text</span> <span class="o">?</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">text</span> <span class="o">+</span> <span class="s2">&quot; [&quot;</span> <span class="o">+</span> <span class="nx">dimensions_caption</span> <span class="o">+</span> <span class="s2">&quot;]&quot;</span> <span class="o">:</span> <span class="nx">dimensions_caption</span><span class="p">);</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="k">if</span> <span class="p">(</span><span class="nx">fallback</span> <span class="o">||</span> <span class="o">!</span><span class="nx">holder</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC100'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC101'>		<span class="p">}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>		<span class="k">if</span> <span class="p">(</span><span class="nx">fallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">background</span><span class="p">;</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC107'>			<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span> <span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">dimensions</span><span class="p">,</span> <span class="nx">theme</span><span class="p">,</span> <span class="nx">ratio</span><span class="p">));</span></div><div class='line' id='LC108'>		<span class="p">}</span></div><div class='line' id='LC109'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">mode</span> <span class="o">==</span> <span class="s2">&quot;background&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">fallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundImage</span> <span class="o">=</span> <span class="s2">&quot;url(&quot;</span> <span class="o">+</span> <span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">dimensions</span><span class="p">,</span> <span class="nx">theme</span><span class="p">,</span> <span class="nx">ratio</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundSize</span> <span class="o">=</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;px &quot;</span> <span class="o">+</span> <span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC113'>		<span class="p">}</span></div><div class='line' id='LC114'>	<span class="p">}</span></div><div class='line' id='LC115'>	<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">mode</span> <span class="o">==</span> <span class="s2">&quot;fluid&quot;</span><span class="p">){</span></div><div class='line' id='LC116'>		<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC117'>		<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;alt&quot;</span><span class="p">,</span> <span class="nx">text</span> <span class="o">?</span> <span class="nx">text</span> <span class="o">:</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">text</span> <span class="o">?</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">text</span> <span class="o">+</span> <span class="s2">&quot; [&quot;</span> <span class="o">+</span> <span class="nx">dimensions_caption</span> <span class="o">+</span> <span class="s2">&quot;]&quot;</span> <span class="o">:</span> <span class="nx">dimensions_caption</span><span class="p">);</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>		<span class="k">if</span> <span class="p">(</span><span class="nx">fallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>			<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span> <span class="o">=</span> <span class="nx">theme</span><span class="p">.</span><span class="nx">background</span><span class="p">;</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC123'>			<span class="nx">el</span><span class="p">.</span><span class="nx">holderData</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">;</span></div><div class='line' id='LC124'>			<span class="nx">fluid_images</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC125'>			<span class="nx">fluid_update</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC126'>		<span class="p">}</span></div><div class='line' id='LC127'>	<span class="p">}</span></div><div class='line' id='LC128'><span class="p">};</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><span class="kd">function</span> <span class="nx">fluid_update</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>	<span class="kd">var</span> <span class="nx">images</span><span class="p">;</span></div><div class='line' id='LC132'>	<span class="k">if</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">==</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC133'>		<span class="nx">images</span> <span class="o">=</span> <span class="nx">fluid_images</span><span class="p">;</span></div><div class='line' id='LC134'>	<span class="p">}</span></div><div class='line' id='LC135'>	<span class="k">else</span><span class="p">{</span></div><div class='line' id='LC136'>		<span class="nx">images</span> <span class="o">=</span> <span class="p">[</span><span class="nx">element</span><span class="p">]</span></div><div class='line' id='LC137'>	<span class="p">}</span></div><div class='line' id='LC138'>	<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">images</span><span class="p">){</span></div><div class='line' id='LC139'>		<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span></div><div class='line' id='LC140'>		<span class="k">if</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">holderData</span><span class="p">){</span></div><div class='line' id='LC141'>			<span class="kd">var</span> <span class="nx">parent</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC142'>			<span class="kd">var</span> <span class="nx">parentHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">parent</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">,</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">))</span></div><div class='line' id='LC143'>			<span class="kd">var</span> <span class="nx">parentWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">parent</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">))</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>			<span class="k">if</span><span class="p">(</span><span class="nx">parent</span> <span class="o">==</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">){</span></div><div class='line' id='LC146'>				<span class="kd">var</span> <span class="nx">scrollbarWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span> <span class="o">-</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">)</span></div><div class='line' id='LC147'>				<span class="kd">var</span> <span class="nx">scrollbarHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">innerHeight</span> <span class="o">-</span> <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">)</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>				<span class="kd">var</span> <span class="nx">windowScrollHeight</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerHeight</span> <span class="o">-</span> <span class="nx">scrollbarHeight</span></div><div class='line' id='LC150'>				<span class="kd">var</span> <span class="nx">windowScrollWidth</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">innerWidth</span> <span class="o">-</span> <span class="nx">scrollbarWidth</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>				<span class="nx">parentWidth</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">windowScrollWidth</span><span class="p">,</span> <span class="nx">parentWidth</span><span class="p">)</span></div><div class='line' id='LC153'>				<span class="nx">parentHeight</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">windowScrollHeight</span><span class="p">,</span> <span class="nx">parentHeight</span><span class="p">)</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>				<span class="k">if</span><span class="p">(</span><span class="nx">parentHeight</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">){</span></div><div class='line' id='LC156'>					<span class="nx">parentHeight</span> <span class="o">=</span> <span class="mi">50</span><span class="p">;</span></div><div class='line' id='LC157'>					<span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">){</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nx">info</span><span class="p">(</span><span class="s2">&quot;Holder: HTML CSS height needs to be set at 100% for fluid placeholders inside the BODY tag.&quot;</span><span class="p">)}</span></div><div class='line' id='LC158'>				<span class="p">}</span></div><div class='line' id='LC159'>			<span class="p">}</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>			<span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">holderData</span><span class="p">;</span></div><div class='line' id='LC162'>			<span class="kd">var</span> <span class="nx">dimensions</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">holderData</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">;</span></div><div class='line' id='LC163'>			<span class="kd">var</span> <span class="nx">new_dimensions</span> <span class="o">=</span> <span class="p">{</span><span class="nx">width</span><span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">),</span> <span class="nx">height</span><span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">)}</span></div><div class='line' id='LC164'>			<span class="k">if</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;%&quot;</span><span class="p">){</span></div><div class='line' id='LC165'>				<span class="nx">new_dimensions</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span><span class="o">/</span><span class="mi">100</span> <span class="o">*</span> <span class="nx">parentHeight</span><span class="p">;</span></div><div class='line' id='LC166'>			<span class="p">}</span></div><div class='line' id='LC167'>			<span class="k">if</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;%&quot;</span><span class="p">){</span></div><div class='line' id='LC168'>				<span class="nx">new_dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">width</span><span class="p">)</span><span class="o">/</span><span class="mi">100</span> <span class="o">*</span> <span class="nx">parentWidth</span><span class="p">;</span></div><div class='line' id='LC169'>			<span class="p">}</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>			<span class="k">if</span> <span class="p">(</span><span class="nx">fallback</span> <span class="o">||</span> <span class="o">!</span><span class="nx">holder</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">new_dimensions</span><span class="p">.</span><span class="nx">width</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC173'>				<span class="nx">el</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">new_dimensions</span><span class="p">.</span><span class="nx">height</span> <span class="o">+</span> <span class="s2">&quot;px&quot;</span><span class="p">;</span></div><div class='line' id='LC174'>			<span class="p">}</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>			<span class="nx">el</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">,</span> <span class="nx">draw</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">new_dimensions</span><span class="p">,</span> <span class="nx">holder</span><span class="p">.</span><span class="nx">theme</span><span class="p">,</span> <span class="nx">ratio</span><span class="p">));</span></div><div class='line' id='LC177'>		<span class="p">}</span></div><div class='line' id='LC178'>	<span class="p">}</span></div><div class='line' id='LC179'><span class="p">}</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'><span class="kd">function</span> <span class="nx">parse_flags</span><span class="p">(</span><span class="nx">flags</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>	<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC184'>		<span class="nx">theme</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">themes</span><span class="p">.</span><span class="nx">gray</span></div><div class='line' id='LC185'>	<span class="p">},</span> <span class="nx">render</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>	<span class="k">for</span> <span class="p">(</span><span class="nx">sl</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">sl</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>		<span class="kd">var</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></div><div class='line' id='LC189'>		<span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC190'>			<span class="nx">render</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC191'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">dimensions</span> <span class="o">=</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">dimensions</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">flag</span><span class="p">);</span></div><div class='line' id='LC192'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">fluid</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC193'>			<span class="nx">render</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC194'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">dimensions</span> <span class="o">=</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">fluid</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">flag</span><span class="p">);</span></div><div class='line' id='LC195'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">fluid</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC196'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">colors</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC197'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">theme</span> <span class="o">=</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">colors</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">flag</span><span class="p">);</span></div><div class='line' id='LC198'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">flag</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC199'>			<span class="c1">//If a theme is specified, it will override custom colors</span></div><div class='line' id='LC200'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">theme</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">flag</span><span class="p">];</span></div><div class='line' id='LC201'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC202'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">text</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">flag</span><span class="p">);</span></div><div class='line' id='LC203'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC204'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">font</span><span class="p">.</span><span class="nx">output</span><span class="p">(</span><span class="nx">flag</span><span class="p">);</span></div><div class='line' id='LC205'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">auto</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC206'>			<span class="nx">ret</span><span class="p">.</span><span class="nx">auto</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC207'>		<span class="p">}</span></div><div class='line' id='LC208'>	<span class="p">}</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>	<span class="k">return</span> <span class="nx">render</span> <span class="o">?</span> <span class="nx">ret</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'><span class="p">};</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'>	<span class="nx">fallback</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC218'><span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC219'>	<span class="k">if</span> <span class="p">(</span><span class="nx">canvas</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">(</span><span class="s2">&quot;image/png&quot;</span><span class="p">)</span></div><div class='line' id='LC220'>		<span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;data:image/png&quot;</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>		<span class="c1">//Android doesn&#39;t support data URI</span></div><div class='line' id='LC222'>		<span class="nx">fallback</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC223'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC224'>		<span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s2">&quot;2d&quot;</span><span class="p">);</span></div><div class='line' id='LC225'>	<span class="p">}</span></div><div class='line' id='LC226'><span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><span class="kd">var</span> <span class="nx">dpr</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">bsr</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">fallback</span><span class="p">){</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">dpr</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">devicePixelRatio</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsr</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">webkitBackingStorePixelRatio</span> <span class="o">||</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">mozBackingStorePixelRatio</span> <span class="o">||</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">msBackingStorePixelRatio</span> <span class="o">||</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">oBackingStorePixelRatio</span> <span class="o">||</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">backingStorePixelRatio</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC233'><span class="p">}</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'><span class="kd">var</span> <span class="nx">ratio</span> <span class="o">=</span> <span class="nx">dpr</span> <span class="o">/</span> <span class="nx">bsr</span><span class="p">;</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'><span class="kd">var</span> <span class="nx">fluid_images</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'><span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC240'>	<span class="nx">domain</span><span class="o">:</span> <span class="s2">&quot;holder.js&quot;</span><span class="p">,</span></div><div class='line' id='LC241'>	<span class="nx">images</span><span class="o">:</span> <span class="s2">&quot;img&quot;</span><span class="p">,</span></div><div class='line' id='LC242'>	<span class="nx">bgnodes</span><span class="o">:</span> <span class="s2">&quot;.holderjs&quot;</span><span class="p">,</span></div><div class='line' id='LC243'>	<span class="nx">themes</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC244'>		<span class="s2">&quot;gray&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC245'>			<span class="nx">background</span><span class="o">:</span> <span class="s2">&quot;#eee&quot;</span><span class="p">,</span></div><div class='line' id='LC246'>			<span class="nx">foreground</span><span class="o">:</span> <span class="s2">&quot;#aaa&quot;</span><span class="p">,</span></div><div class='line' id='LC247'>			<span class="nx">size</span><span class="o">:</span> <span class="mi">12</span></div><div class='line' id='LC248'>		<span class="p">},</span></div><div class='line' id='LC249'>		<span class="s2">&quot;social&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC250'>			<span class="nx">background</span><span class="o">:</span> <span class="s2">&quot;#3a5a97&quot;</span><span class="p">,</span></div><div class='line' id='LC251'>			<span class="nx">foreground</span><span class="o">:</span> <span class="s2">&quot;#fff&quot;</span><span class="p">,</span></div><div class='line' id='LC252'>			<span class="nx">size</span><span class="o">:</span> <span class="mi">12</span></div><div class='line' id='LC253'>		<span class="p">},</span></div><div class='line' id='LC254'>		<span class="s2">&quot;industrial&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC255'>			<span class="nx">background</span><span class="o">:</span> <span class="s2">&quot;#434A52&quot;</span><span class="p">,</span></div><div class='line' id='LC256'>			<span class="nx">foreground</span><span class="o">:</span> <span class="s2">&quot;#C2F200&quot;</span><span class="p">,</span></div><div class='line' id='LC257'>			<span class="nx">size</span><span class="o">:</span> <span class="mi">12</span></div><div class='line' id='LC258'>		<span class="p">}</span></div><div class='line' id='LC259'>	<span class="p">},</span></div><div class='line' id='LC260'>	<span class="nx">stylesheet</span><span class="o">:</span> <span class="s2">&quot;.holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}&quot;</span></div><div class='line' id='LC261'><span class="p">};</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC265'>	<span class="nx">dimensions</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC266'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/^(\d+)x(\d+)$/</span><span class="p">,</span></div><div class='line' id='LC267'>		<span class="nx">output</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'>			<span class="kd">var</span> <span class="nx">exec</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC269'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC270'>				<span class="nx">width</span><span class="o">:</span> <span class="o">+</span><span class="nx">exec</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span></div><div class='line' id='LC271'>				<span class="nx">height</span><span class="o">:</span> <span class="o">+</span><span class="nx">exec</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span></div><div class='line' id='LC272'>			<span class="p">}</span></div><div class='line' id='LC273'>		<span class="p">}</span></div><div class='line' id='LC274'>	<span class="p">},</span></div><div class='line' id='LC275'>	<span class="nx">fluid</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC276'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/^([0-9%]+)x([0-9%]+)$/</span><span class="p">,</span></div><div class='line' id='LC277'>		<span class="nx">output</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>			<span class="kd">var</span> <span class="nx">exec</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC279'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC280'>				<span class="nx">width</span><span class="o">:</span> <span class="nx">exec</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span></div><div class='line' id='LC281'>				<span class="nx">height</span><span class="o">:</span> <span class="nx">exec</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span></div><div class='line' id='LC282'>			<span class="p">}</span></div><div class='line' id='LC283'>		<span class="p">}</span></div><div class='line' id='LC284'>	<span class="p">},</span></div><div class='line' id='LC285'>	<span class="nx">colors</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC286'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i</span><span class="p">,</span></div><div class='line' id='LC287'>		<span class="nx">output</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>			<span class="kd">var</span> <span class="nx">exec</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC289'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC290'>				<span class="nx">size</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">themes</span><span class="p">.</span><span class="nx">gray</span><span class="p">.</span><span class="nx">size</span><span class="p">,</span></div><div class='line' id='LC291'>				<span class="nx">foreground</span><span class="o">:</span> <span class="s2">&quot;#&quot;</span> <span class="o">+</span> <span class="nx">exec</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span></div><div class='line' id='LC292'>				<span class="nx">background</span><span class="o">:</span> <span class="s2">&quot;#&quot;</span> <span class="o">+</span> <span class="nx">exec</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></div><div class='line' id='LC293'>			<span class="p">}</span></div><div class='line' id='LC294'>		<span class="p">}</span></div><div class='line' id='LC295'>	<span class="p">},</span></div><div class='line' id='LC296'>	<span class="nx">text</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC297'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/text\:(.*)/</span><span class="p">,</span></div><div class='line' id='LC298'>		<span class="nx">output</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">val</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC300'>		<span class="p">}</span></div><div class='line' id='LC301'>	<span class="p">},</span></div><div class='line' id='LC302'>	<span class="nx">font</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC303'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/font\:(.*)/</span><span class="p">,</span></div><div class='line' id='LC304'>		<span class="nx">output</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">val</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC306'>		<span class="p">}</span></div><div class='line' id='LC307'>	<span class="p">},</span></div><div class='line' id='LC308'>	<span class="nx">auto</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC309'>		<span class="nx">regex</span><span class="o">:</span> <span class="sr">/^auto$/</span></div><div class='line' id='LC310'>	<span class="p">}</span></div><div class='line' id='LC311'><span class="p">}</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'><span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">flag</span> <span class="k">in</span> <span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC315'>	<span class="nx">app</span><span class="p">.</span><span class="nx">flags</span><span class="p">[</span><span class="nx">flag</span><span class="p">].</span><span class="nx">match</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>		<span class="k">return</span> <span class="nx">val</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">regex</span><span class="p">)</span></div><div class='line' id='LC317'>	<span class="p">}</span></div><div class='line' id='LC318'><span class="p">}</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'><span class="nx">app</span><span class="p">.</span><span class="nx">add_theme</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">theme</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'>	<span class="nx">name</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">theme</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">themes</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">theme</span><span class="p">);</span></div><div class='line' id='LC322'>	<span class="k">return</span> <span class="nx">app</span><span class="p">;</span></div><div class='line' id='LC323'><span class="p">};</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'><span class="nx">app</span><span class="p">.</span><span class="nx">add_image</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC326'>	<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC327'>	<span class="k">if</span> <span class="p">(</span><span class="nx">node</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC328'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>			<span class="kd">var</span> <span class="nx">img</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;img&quot;</span><span class="p">)</span></div><div class='line' id='LC330'>			<span class="nx">img</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC331'>			<span class="nx">node</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">img</span><span class="p">);</span></div><div class='line' id='LC332'>		<span class="p">}</span></div><div class='line' id='LC333'>	<span class="p">}</span></div><div class='line' id='LC334'>	<span class="k">return</span> <span class="nx">app</span><span class="p">;</span></div><div class='line' id='LC335'><span class="p">};</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'><span class="nx">app</span><span class="p">.</span><span class="nx">run</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>	<span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">o</span><span class="p">),</span></div><div class='line' id='LC339'>	    <span class="nx">images</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">imageNodes</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">bgnodes</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">images</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">){</span></div><div class='line' id='LC342'>	    <span class="nx">imageNodes</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">images</span><span class="p">);</span></div><div class='line' id='LC343'>	<span class="p">}</span></div><div class='line' id='LC344'>	<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">images</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC345'>		<span class="nx">imageNodes</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">images</span><span class="p">;</span></div><div class='line' id='LC346'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">Node</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">images</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC347'>		<span class="nx">imageNodes</span> <span class="o">=</span> <span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">images</span><span class="p">];</span></div><div class='line' id='LC348'>	<span class="p">}</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">){</span></div><div class='line' id='LC351'>	    <span class="nx">bgnodes</span> <span class="o">=</span> <span class="nx">selector</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">);</span></div><div class='line' id='LC352'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">elements</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">NodeList</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>		<span class="nx">bgnodes</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">;</span></div><div class='line' id='LC354'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">Node</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">bgnodes</span> <span class="k">instanceof</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Node</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'>		<span class="nx">bgnodes</span> <span class="o">=</span> <span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">bgnodes</span><span class="p">];</span></div><div class='line' id='LC356'>	<span class="p">}</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'>	<span class="nx">preempted</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>	<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">imageNodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">images</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">imageNodes</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>	<span class="kd">var</span> <span class="nx">holdercss</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;holderjs-style&quot;</span><span class="p">);</span></div><div class='line' id='LC363'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">holdercss</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>		<span class="nx">holdercss</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">);</span></div><div class='line' id='LC365'>		<span class="nx">holdercss</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;id&quot;</span><span class="p">,</span> <span class="s2">&quot;holderjs-style&quot;</span><span class="p">);</span></div><div class='line' id='LC366'>		<span class="nx">holdercss</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;text/css&quot;</span><span class="p">;</span></div><div class='line' id='LC367'>		<span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">holdercss</span><span class="p">);</span></div><div class='line' id='LC368'>	<span class="p">}</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">nocss</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>	    <span class="k">if</span> <span class="p">(</span><span class="nx">holdercss</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC372'>		    <span class="nx">holdercss</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">+=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">stylesheet</span><span class="p">;</span></div><div class='line' id='LC373'>	    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC374'>		    <span class="nx">holdercss</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">stylesheet</span><span class="p">));</span></div><div class='line' id='LC375'>	    <span class="p">}</span></div><div class='line' id='LC376'>	<span class="p">}</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>	<span class="kd">var</span> <span class="nx">cssregex</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">domain</span> <span class="o">+</span> <span class="s2">&quot;\/(.*?)\&quot;?\\)&quot;</span><span class="p">);</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">bgnodes</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC381'>		<span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">bgnodes</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="kc">null</span><span class="p">)</span></div><div class='line' id='LC382'>			<span class="p">.</span><span class="nx">getPropertyValue</span><span class="p">(</span><span class="s2">&quot;background-image&quot;</span><span class="p">);</span></div><div class='line' id='LC383'>		<span class="kd">var</span> <span class="nx">flags</span> <span class="o">=</span> <span class="nx">src</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">cssregex</span><span class="p">);</span></div><div class='line' id='LC384'>		<span class="kd">var</span> <span class="nx">bgsrc</span> <span class="o">=</span> <span class="nx">bgnodes</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-background-src&quot;</span><span class="p">);</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>		<span class="k">if</span> <span class="p">(</span><span class="nx">flags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC387'>			<span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nx">parse_flags</span><span class="p">(</span><span class="nx">flags</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC388'>			<span class="k">if</span> <span class="p">(</span><span class="nx">holder</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC389'>				<span class="nx">render</span><span class="p">(</span><span class="s2">&quot;background&quot;</span><span class="p">,</span> <span class="nx">bgnodes</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">holder</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC390'>			<span class="p">}</span></div><div class='line' id='LC391'>		<span class="p">}</span></div><div class='line' id='LC392'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">bgsrc</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC393'>		    <span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nx">parse_flags</span><span class="p">(</span><span class="nx">bgsrc</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">bgsrc</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC394'>				<span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC395'>		    <span class="k">if</span><span class="p">(</span><span class="nx">holder</span><span class="p">){</span></div><div class='line' id='LC396'>			<span class="nx">render</span><span class="p">(</span><span class="s2">&quot;background&quot;</span><span class="p">,</span> <span class="nx">bgnodes</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">holder</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC397'>		    <span class="p">}</span></div><div class='line' id='LC398'>		<span class="p">}</span></div><div class='line' id='LC399'>	<span class="p">}</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>	<span class="k">for</span> <span class="p">(</span><span class="nx">l</span> <span class="o">=</span> <span class="nx">images</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>		<span class="kd">var</span> <span class="nx">attr_src</span> <span class="o">=</span> <span class="nx">attr_data_src</span> <span class="o">=</span> <span class="nx">src</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'>		<span class="k">try</span><span class="p">{</span></div><div class='line' id='LC406'>		    <span class="nx">attr_src</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;src&quot;</span><span class="p">);</span></div><div class='line' id='LC407'>		    <span class="nx">attr_datasrc</span> <span class="o">=</span> <span class="nx">images</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-src&quot;</span><span class="p">);</span></div><div class='line' id='LC408'>		<span class="p">}</span><span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">){}</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>		<span class="k">if</span> <span class="p">(</span><span class="nx">attr_datasrc</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!!</span> <span class="nx">attr_src</span> <span class="o">&amp;&amp;</span> <span class="nx">attr_src</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC411'>			<span class="nx">src</span> <span class="o">=</span> <span class="nx">attr_src</span><span class="p">;</span></div><div class='line' id='LC412'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!!</span> <span class="nx">attr_datasrc</span> <span class="o">&amp;&amp;</span> <span class="nx">attr_datasrc</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>			<span class="nx">src</span> <span class="o">=</span> <span class="nx">attr_datasrc</span><span class="p">;</span></div><div class='line' id='LC414'>		<span class="p">}</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>		<span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC417'>			<span class="kd">var</span> <span class="nx">holder</span> <span class="o">=</span> <span class="nx">parse_flags</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">)</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">domain</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC418'>				<span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC419'>			<span class="k">if</span> <span class="p">(</span><span class="nx">holder</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC420'>				<span class="k">if</span> <span class="p">(</span><span class="nx">holder</span><span class="p">.</span><span class="nx">fluid</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC421'>					<span class="nx">render</span><span class="p">(</span><span class="s2">&quot;fluid&quot;</span><span class="p">,</span> <span class="nx">images</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">holder</span><span class="p">,</span> <span class="nx">src</span><span class="p">)</span></div><div class='line' id='LC422'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC423'>					<span class="nx">render</span><span class="p">(</span><span class="s2">&quot;image&quot;</span><span class="p">,</span> <span class="nx">images</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">holder</span><span class="p">,</span> <span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC424'>				<span class="p">}</span></div><div class='line' id='LC425'>			<span class="p">}</span></div><div class='line' id='LC426'>		<span class="p">}</span></div><div class='line' id='LC427'>	<span class="p">}</span></div><div class='line' id='LC428'>	<span class="k">return</span> <span class="nx">app</span><span class="p">;</span></div><div class='line' id='LC429'><span class="p">};</span></div><div class='line' id='LC430'><br/></div><div class='line' id='LC431'><span class="nx">contentLoaded</span><span class="p">(</span><span class="nx">win</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC432'>	<span class="k">if</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC433'>		<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;resize&quot;</span><span class="p">,</span> <span class="nx">fluid_update</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC434'>		<span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;orientationchange&quot;</span><span class="p">,</span> <span class="nx">fluid_update</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC435'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC436'>		<span class="nb">window</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onresize&quot;</span><span class="p">,</span> <span class="nx">fluid_update</span><span class="p">)</span></div><div class='line' id='LC437'>	<span class="p">}</span></div><div class='line' id='LC438'>	<span class="nx">preempted</span> <span class="o">||</span> <span class="nx">app</span><span class="p">.</span><span class="nx">run</span><span class="p">();</span></div><div class='line' id='LC439'><span class="p">});</span></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC442'>	<span class="nx">define</span><span class="p">(</span><span class="s2">&quot;Holder&quot;</span><span class="p">,</span> <span class="p">[],</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC443'>		<span class="k">return</span> <span class="nx">app</span><span class="p">;</span></div><div class='line' id='LC444'>	<span class="p">});</span></div><div class='line' id='LC445'><span class="p">}</span></div><div class='line' id='LC446'><br/></div><div class='line' id='LC447'><span class="p">})(</span><span class="nx">Holder</span><span class="p">,</span> <span class="nb">window</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.09601s from fe3.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/imsky/holder/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.09648' data-host='fe3'></span>
    
  </body>
</html>

