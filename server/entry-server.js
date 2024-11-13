import { basename } from "node:path";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderSlot, renderToString } from "vue/server-renderer";
import { defineComponent, mergeProps, unref, useSSRContext, ref, computed, resolveComponent, withCtx, createTextVNode, toDisplayString, resolveDirective, createVNode, onMounted, openBlock, createBlock, createCommentVNode, Fragment, renderList, createSSRApp } from "vue";
import { useRoute, createRouter, createMemoryHistory } from "vue-router";
import { useSeoMeta, useHead, createHead } from "@vueuse/head";
import VueDOMPurifyHTML from "vue-dompurify-html";
const _imports_0 = "/profile-pic.jpg";
const config = {
  appTitle: "Uche's Coding Corner"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "AppTitle",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-title" }, _attrs))}><div class="app-title__avatar"><img alt="Profile image"${ssrRenderAttr("src", _imports_0)} width="135"></div><div class="app-title__content"><h1 class="app-title__name" role="title">${ssrInterpolate(unref(config).appTitle)}</h1><span>Software engineer exploring the world of web development and beyond.</span></div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layout/AppTitle.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24"
  }, _attrs))}><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"></path></svg>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/LightMode.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const LightMode = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$k = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24"
  }, _attrs))}><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/DarkMode.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const DarkMode = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$3]]);
const mode = ref("light");
function useThemeMode() {
  const setBrowserMode = () => {
    if (typeof window !== "undefined" && window.localStorage["udc:mode"]) {
      update(window.localStorage["udc:mode"]);
      return;
    }
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        update("dark");
      }
    }
  };
  const update = (modeValue, save = false) => {
    var _a, _b, _c, _d;
    mode.value = modeValue;
    if (mode.value === "dark") {
      document.body.classList.add("dark-mode");
      (_a = document.querySelector('link[title="highlight-default"]')) == null ? void 0 : _a.setAttribute("disabled", "");
      (_b = document.querySelector('link[title="highlight-dark"]')) == null ? void 0 : _b.removeAttribute("disabled");
    } else {
      (_c = document.querySelector('link[title="highlight-dark"]')) == null ? void 0 : _c.setAttribute("disabled", "");
      (_d = document.querySelector('link[title="highlight-default"]')) == null ? void 0 : _d.removeAttribute("disabled");
      document.body.classList.remove("dark-mode");
    }
    if (save && window) {
      window.localStorage.setItem("udc:mode", mode.value);
    }
  };
  const toggleMode = () => {
    if (document.body.classList.contains("dark-mode")) {
      update("light", true);
    } else {
      update("dark", true);
    }
  };
  return {
    mode,
    setBrowserMode,
    toggleMode
  };
}
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitch",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { mode: mode2, toggleMode } = useThemeMode();
    const classes = computed(() => {
      return {
        "theme-switch--is-on": mode2.value === "dark",
        "theme-switch--is-off": mode2.value === "light"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["theme-switch", classes.value],
        role: "button",
        "aria-label": "toggle theme mode"
      }, _attrs))} data-v-e82f81b6><div class="theme-switch__button" data-v-e82f81b6></div>`);
      if (unref(mode2) === "light") {
        _push(`<span class="theme-switch__slot bright" role="img" aria-label="light mode icon" data-v-e82f81b6>`);
        _push(ssrRenderComponent(LightMode, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mode2) === "dark") {
        _push(`<span class="theme-switch__slot dark" role="img" aria-label="dark mode icon" data-v-e82f81b6>`);
        _push(ssrRenderComponent(DarkMode, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ThemeSwitch.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ThemeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-e82f81b6"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const links = [
      {
        label: "Me",
        routeName: "home"
      },
      {
        label: "Blog",
        routeName: "blog"
      },
      {
        label: "Portfolio",
        routeName: "portfolio"
      },
      {
        label: "Goodies",
        routeName: "goodies"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))}><div class="router-link__list"><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_router_link, {
          to: { name: link.routeName },
          class: { "nav--selected": unref(route).name === link.routeName }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (index < links.length - 1) {
          _push(`<span class="nav__divider">/</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(ThemeSwitch, null, null, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layout/AppNav.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layout/AppHeader.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><span class="copyright">© 2019-present ${ssrInterpolate(unref(config).appTitle)}. All Rights Reserved.</span></footer>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layout/AppFooter.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const themeMode = useThemeMode();
    themeMode.setBrowserMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$g, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const blogPosts = [
  {
    path: "/blog/2019/11/01/clean-code",
    tags: "learning,education",
    date: "2019-11-01T00:00:00.000Z",
    title: "10 Tips for clean code",
    slug: "clean-code-2019",
    excerpt: '<p>I was listening to a YouTube video on Clean Code by <a href="https://twitter.com/mtoppa">Michael Toppa</a> during a short break from work. This video provides an excellent summary of what you should keep in mind when you are structuring your code or implementing a new feature....</p>',
    content: `<p>I was listening to a YouTube video on Clean Code by <a href="https://twitter.com/mtoppa">Michael Toppa</a> during a short break from work. This video provides an excellent summary of what you should keep in mind when you are structuring your code or implementing a new feature.</p>
<p>If you've come across a bit of nasty code that you wrote months ago and wondered how to refactor it, then the tips in this video are a good place to start.</p>
<p>Below is a summary of the 10 tips Michael shared for writing clean code:</p>
<ol>
<li>
<p>You are responsible for the quality of your code</p>
</li>
<li>
<p>Use meaningful names</p>
</li>
<li>
<p>Write code that expresses intent</p>
</li>
<li>
<p>Comments are often lies waiting to happen.
Code should speak for itself whenever possible</p>
</li>
<li>
<p>Boy Scout Rule: Leave the code better than you found it</p>
</li>
<li>
<p>Single Responsible Principle (SPR)</p>
</li>
<li>
<p>Write tests (Test-driven development (TDD))</p>
</li>
<li>
<p>Work in short cycles: incremental and iterative</p>
</li>
<li>
<p>Independent Architecture</p>
</li>
<li>
<p>Practice makes perfect</p>
</li>
</ol>
<iframe src="https://www.youtube.com/embed/UjhX2sVf0eg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  },
  {
    path: "/blog/2020/02/11/async-script",
    tags: "javascript,html,performance",
    date: "2019-02-11T00:00:00.000Z",
    title: "How to add JavaScript to a page",
    slug: "async-script",
    excerpt: "<p>One common solution is to place the <code>&#x3C;script></code> tag at the end of the <code>&#x3C;body></code> tag to ensure that the DOM is loaded first before executing any javascript. However, there are other equally good solutions....</p>",
    content: `<p>How and where you load external scripts on a page can affect page load speed and performance. <code>&#x3C;script></code> tags were usually placed in the <code>&#x3C;head></code> section and quite often without only the <code>src</code> attributes. These external Scripts are loaded and executed synchronously, meaning the HTML parser is forced to wait for the resource to be fetched.
If there is an issue with the server response, this could result in page blocking and a terrible user experience. In order to avoid this, it is recommended to defer javascript loading and execution until the page is rendered.</p>
<p>One common solution is to place the <code>&#x3C;script></code> tag at the end of the <code>&#x3C;body></code> tag to ensure that the DOM is loaded first before executing any javascript. However, there are other equally good solutions.</p>
<h2>aysnc and defer attributes</h2>
<p>The <code>&#x3C;script></code> tags are placed in the <code>&#x3C;head></code> section with attributes <code>async</code> or <code>defer</code>. These attributes tell the browser how to fetch and execute external scripts.</p>
<p>The <code>defer</code> attribute tells the browser to load the script but not execute any Javascript until the DOM is ready (the document has been fully parsed and before the <code>DOMContentLoaded</code> event is fired).</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://"</span> <span class="hljs-attr">defer</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<p>The <code>async</code> attribute tells the browser to execute the external script asynchronously. The HTML parser can continue parsing the page without
waiting for the script to be executed.</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://"</span> <span class="hljs-attr">async</span>></span><span class="hljs-tag">&#x3C;/<span class="hljs-name">script</span>></span>
</code></pre>
<p><small>Check <a href="https://caniuse.com" rel="noopenner noreferrer" target="_blank">caniuse.com</a> for browser compatibility of <a href="https://caniuse.com/#search=async" rel="noopenner noreferrer" target="_blank">async</a> and <a href="https://caniuse.com/#search=defer" rel="noopenner noreferrer" target="_blank">defer</a> attributes.</small></p>
<h2>Dynamic insert</h2>
<p>There are some cases where you only want to load a script in certain situations. This is known as <strong>on-demand loading</strong> to avoid unnecessary requests.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">insertScript</span>(<span class="hljs-params">id, callback</span>) {
  <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(id)) {
    <span class="hljs-keyword">return</span>;
  }

  <span class="hljs-keyword">var</span> scriptInDoc = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementsByTagName</span>(<span class="hljs-string">'script'</span>)[<span class="hljs-number">0</span>];
  <span class="hljs-keyword">var</span> script = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">'script'</span>);
  script.<span class="hljs-property">src</span> = <span class="hljs-string">'https://....'</span>;
  script.<span class="hljs-property">id</span> = id;
  script.<span class="hljs-property">onload</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title function_">callback</span>();
  }
  scriptInDoc.<span class="hljs-property">parentNode</span>.<span class="hljs-title function_">insertBefore</span>(script, scriptInDoc);
}
</code></pre>
<h2>Conclusion</h2>
<p>Always incorporate JavaScript asynchronously and only load external scripts at the point when they are needed to avoid extra network requests.</p>`
  },
  {
    path: "/blog/2020/09/09/secure-cookies-set-cookie",
    tags: "javascript,securityauthentication",
    date: "2020-09-09T00:00:00.000Z",
    title: "Secure cookies and Set-Cookie",
    slug: "secure-cookies-set-cookie",
    excerpt: "<p>The Set-Cookie is a response header containing a cookie set by the server, which sends this to the user agent so that the user agent can then send it back to the server. The Set-Cookie header basically instructs the browser to create a cookie for the specified domain. This cookie information is then sent back to the server in subsequent requests for the domains specified....</p>",
    content: '<p>The Set-Cookie is a response header containing a cookie set by the server, which sends this to the user agent so that the user agent can then send it back to the server. The Set-Cookie header basically instructs the browser to create a cookie for the specified domain. This cookie information is then sent back to the server in subsequent requests for the domains specified.</p>\n<p>Session cookies are used to identify a user’s session and generally contain sensitive data. Session cookies must be secure.</p>\n<p>For example:</p>\n<pre><code class="hljs language-text">Set-Cookie: &#x3C;cookie-name>=&#x3C;cookie-value>; Path=&#x3C;path-value>; Domain=&#x3C;domain-value>; Secure; HttpOnly; SameSite=None\n</code></pre>\n<p>The HttpOnly and Secure attributes prevent the cookie from being accessed through the Document.cookie property, thus mitigating cross-site scripting attacks. Secure cookies are only sent back to the server when a request is made with the https:// scheme.</p>\n<p>Notice the SameSite attribute in the example cookie above. This has to be set to None in other to allow for both cross-site and same-site requests. Modern versions of Chrome and Firefox will not send the Set-Cookie header back to the server, therefore preventing CORS requests.</p>\n<p>During development, it will sometimes be necessary to maintain the session of an authenticated user, and since secure cookies can only be sent via https, you would need to create a self-signed certificate for your application. You can find additional information in the <a href="https://letsencrypt.org/docs/certificates-for-localhost/">certificates for localhost</a> article on how to create server keys and certificates for localhost.</p>'
  },
  {
    path: "/blog/2020/09/15/from-jekyll-to-gridsome",
    tags: "static-sites,javascript,web frameworks",
    date: "2020-09-15T00:00:00.000Z",
    title: "Moving from Jekyll to Gridsome",
    slug: "from-jekyll-to-gridsome",
    excerpt: "<p>When I started the process of setting up this tech blog, I knew from the get-go I wanted a solution that was quick and easy that required limited effort. I definitely didn’t want to use a CMS system like WordPress or Ghost and headless CMS would have been overkill. The goal was to write blog posts quickly using Markdown and deploy them without effort....</p>",
    content: "<p>When I started the process of setting up this tech blog, I knew from the get-go I wanted a solution that was quick and easy that required limited effort. I definitely didn’t want to use a CMS system like WordPress or Ghost and headless CMS would have been overkill. The goal was to write blog posts quickly using Markdown and deploy them without effort.</p>\n<p>My journey began with flat-file CMS. I started out with Pico because a friend recommended it to me. It was fairly simple to use but I found I had to rely on plugins to get the exact behaviour I wanted. The major downside is that it’s built on PHP and I had to create custom plugins to get my desired functionality, which was a little more effort than I was willing to invest.</p>\n<p>The next option was Grav. Why it had some pretty cool features. There was honestly a lot more to set up than I expected for a simple flat-file CMS and I definitely did not need the Admin panel.</p>\n<p>Jekyll was my next stop and my introduction to static websites. It provided the simple setup and easy deployment that I needed. Although it requires Ruby and RubyGems, it was honestly a breeze to set up. However, it was a bit painful to set up proper code highlighting and I had to do quite a bit of tweaking to get the desired look.</p>\n<p>While I was satisfied with Jekyll, I played around with other static website generators such as Gatsby, VuePress, Hugo, Nuxt and Gridsome. All of these options are petty good and I don’t think one is better than the other. In the end, I decided to go with Gridsome.</p>\n<p>The reason why I decided to move away from Jekyll was that I wanted to be able to use Graphql and any other modern web framework such as Vue or React. Gridsome was the perfect choice because it’s built with Vue (which I already have experience in) and supports Graphql out of the box. It does help a great deal if you use the Gridsome CLI.</p>\n<p>These are the major advantages that convinced me to migrate from Jekyll to Gridsome:</p>\n<ul>\n<li>No Ruby</li>\n<li>Out of the box code highlighting</li>\n<li>Vue and Graghql</li>\n<li>Better performance</li>\n<li>Working with Component-based architecture</li>\n</ul>\n<p>Overall, I am very satisfied with Gridsome and it feels great being able to create components again. From my observations, It will be easy to work with for anyone having a rudimentary understanding of Vue.</p>"
  },
  {
    path: "/blog/2020/11/12/polling-settimeout-setinterval",
    tags: "javascript,performance",
    date: "2020-11-12T00:00:00.000Z",
    title: "Improve polling using setTimeOut",
    slug: "improve-polling-settimeout",
    excerpt: "<p><code>setTimeOut</code> and <code>setInterval</code> are very similar in that they perform an action after a given time period. The difference is that <code>setTimeOut</code> executes the function only once. Polling requires that you execute an action/function after a given interval. It is very common to implement polling using the window <code>setInterval</code> property....</p>",
    content: `<p><code>setTimeOut</code> and <code>setInterval</code> are very similar in that they perform an action after a given time period. The difference is that <code>setTimeOut</code> executes the function only once. Polling requires that you execute an action/function after a given interval. It is very common to implement polling using the window <code>setInterval</code> property.</p>
<p>For example:</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> interval = <span class="hljs-number">0</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">action</span>(<span class="hljs-params"></span>) {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'do something here'</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">poll</span>(<span class="hljs-params"></span>) {
  interval = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =></span> {
    <span class="hljs-title function_">action</span>()
  }, <span class="hljs-number">10000</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">clear</span>(<span class="hljs-params"></span>) {
  <span class="hljs-built_in">clearInterval</span>(interval)
}

<span class="hljs-title function_">poll</span>()
</code></pre>
<p>The implementation above is simple, clear, and efficient. It ensures that the <code>action</code> is performed every 10 seconds. However, if the action is a request to the server and the server is slow, you could have multiple requests pending because <code>setInterval</code> will execute after the given time has elapsed, whether the previous call has been completed or not. We can mitigate this issue easily using <code>setTimeout</code>.</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">action</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">// mimic slow server</span>
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">resolve, reject</span>) {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =></span> {
    <span class="hljs-title function_">resolve</span>(<span class="hljs-string">'do something here'</span>)
  }, <span class="hljs-number">10000</span>)
  })
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">poll</span>(<span class="hljs-params"></span>) {
  interval = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">async</span> () => {
    <span class="hljs-keyword">await</span> <span class="hljs-title function_">action</span>()
    <span class="hljs-title function_">poll</span>()
  }, <span class="hljs-number">10000</span>)
}
</code></pre>
<p>Now we will only poll the action again after the previous one has been completed.</p>
<h3>Bonus</h3>
<p>You might want to poll the <code>action</code> only if the page is visible to the user or the browser tab is active. This is where window event listener <code>visibilitychange</code> comes in handy. <code>visibilitychange</code> is triggered each time the browser tab is active or inactive. In the handler of the event listener, you can check for the browser tab visible using <code>document.hidden</code> or <code>document.visibilityState</code>.</p>
<p>For example:</p>
<pre><code class="hljs language-javascript"><span class="hljs-variable language_">document</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">"visibilitychange"</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">document</span>.<span class="hljs-property">hidden</span>) {
    <span class="hljs-title function_">clear</span>()
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-title function_">poll</span>()
  }
});
</code></pre>
<p>Pretty simple!</p>
<p>Here's the full code for you to try out:</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> interval = <span class="hljs-number">0</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">action</span>(<span class="hljs-params"></span>) {
  <span class="hljs-comment">// mimic slow server</span>
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">resolve, reject</span>) {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =></span> {
    <span class="hljs-title function_">resolve</span>(<span class="hljs-string">'do something here'</span>)
  }, <span class="hljs-number">10000</span>)
  })
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">poll</span>(<span class="hljs-params"></span>) {
  interval = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">async</span> () => {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">action</span>()
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(response)
    <span class="hljs-title function_">poll</span>()
  }, <span class="hljs-number">10000</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">clear</span>(<span class="hljs-params"></span>) {
  <span class="hljs-built_in">clearInterval</span>(interval)
}

<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">"visibilitychange"</span>, <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">document</span>.<span class="hljs-property">hidden</span>) {
    <span class="hljs-title function_">clear</span>()
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-title function_">poll</span>()
  }
});

<span class="hljs-title function_">poll</span>()
</code></pre>`
  },
  {
    path: "/blog/2020/11/30/p-versus-np-problem",
    tags: "complexity,algorithm,computer science",
    date: "2020-11-30",
    title: "Algorithm: P versus NP problem",
    slug: "p-versus-np-problem",
    excerpt: "<p>Most people who are studying or studied computer science have come across the P verse NP problem. It's one of those topics that you are taught in university and will most like promptly forget about when graduation comes around and you start working in the industry. I have honestly not paid much attention to it until recently....</p>",
    content: `<p>Most people who are studying or studied computer science have come across the P verse NP problem. It's one of those topics that you are taught in university and will most like promptly forget about when graduation comes around and you start working in the industry. I have honestly not paid much attention to it until recently.</p>
<p>What is P versus NP and why is it important?</p>
<p>The P versus NP problem is an unsolved problem in computer science that tries to determine if an algorithm that can be verified in polynomial time can also be solved in polynomial time.</p>
<p>In this post, I'll give an introduction into P, NP, NP-Hard and NP-Complete and why this is such an important problem. There will also be references to time complexity so I highly recommend reading up on it or checking out the resources I listed in my post <a href="/blog/2020/04/04/learn-big-o-notation/">Learning Big O notation as a Javascript developer</a>.</p>
<h3>P (deterministic polynomial time)</h3>
<p>P problems are the set of problems that have been solved and verified in polynomial time (o(n)<sup>k</sup>). Examples include linear sort, merge sort, binary search, bubble sort and insertion sort.</p>
<p>Let's take the bubble sort example. The bubble sort algorithm goes through a sortable array of numbers and swaps the adjacent elements if they are in the wrong order.</p>
<pre><code class="hljs language-javascript">  <span class="hljs-keyword">const</span> arr = [<span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">0</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">1</span>]
  <span class="hljs-keyword">const</span> length = arr.<span class="hljs-property">length</span>
  <span class="hljs-keyword">let</span> indicator = <span class="hljs-number">1</span>

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &#x3C; length &#x26;&#x26; indicator == <span class="hljs-number">1</span>; i++) {
    indicator = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = <span class="hljs-number">0</span>; j &#x3C; length - i - <span class="hljs-number">1</span>; j++) {
      <span class="hljs-keyword">if</span> (arr[j] > arr[j + <span class="hljs-number">1</span>]) {
        <span class="hljs-keyword">const</span> temp = arr[j]
        arr[j] = arr[j+<span class="hljs-number">1</span>]
        arr[j+<span class="hljs-number">1</span>] = temp
        indicator = <span class="hljs-number">1</span>
      }
    }
  }
</code></pre>
<p>The above is a variant of the algorithm. The indicator variable will track if any of the elements have been swapped and will also indicate if the array is already sorted. The worst-case scenario is O(n<sup>2</sup>) if the array is not sorted and O(n) otherwise.</p>
<p>Let's consider another very simple example. We want to calculate the sum of each row in a two-dimensional array and output the sum for each row in an array. We have the algorithm below to do so:</p>
<pre><code class="hljs language-javascript">  <span class="hljs-keyword">const</span> arr = [
    [<span class="hljs-number">2</span>, <span class="hljs-number">10</span>, <span class="hljs-number">6</span>],
    [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">9</span>],
    [<span class="hljs-number">13</span>, <span class="hljs-number">8</span>, <span class="hljs-number">6</span>],
  ]
  <span class="hljs-keyword">const</span> result = []

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &#x3C; arr.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">let</span> sum = <span class="hljs-number">0</span>
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = <span class="hljs-number">0</span>; j &#x3C; arr[i].<span class="hljs-property">length</span>; j++) {
      sum += arr[i][j]
    }
    result.<span class="hljs-title function_">push</span>(sum)
  }
</code></pre>
<p>The time complexity of this algorithm is O(n<sup>m</sup>) where m is the number of dimensions (2 in this case) and n is the size of each array.</p>
<p>Taking the two examples above, we can easily see that logic used to deduce a solution for the bubble sort can easily be applied to the second problem.</p>
<p>However, there exist a set problems that have only been proven to be solved with an exponential-time algorithm (O(2<sup>n</sup>)). These problems are known as NP problems.</p>
<p><img src="/images/p_np.png" alt=">Diagram of P ≠ NP"></p>
<p><small>Diagram of P ≠ NP (left) and P = NP (right). It is widely believed that P ≠ NP.</small></p>
<h3>NP (non-deterministic polynomial time)</h3>
<p>NP problems consist of the set of problems whose solution can be verified in polynomial time but there is no known algorithm that can easily solve them. Examples include 0-1 Knapsack, the traveling salesman, boolean satisfiability problem, and the subset sum problem. P problems were once NP problems proven to be solvable in polynomial time.</p>
<p>NP complexity class of problems can be broken down into three sets: NP, NP-Hard, and NP-Complete.</p>
<h3>NP-Hard and NP-Complete</h3>
<p>For a problem to belong to the NP set, it has to be a decision problem with solutions of polynomial length.</p>
<p>NP-hardness refers to the set of problems that are at least as hard as the hardest problems in NP. The hardest of these problems are NP-Complete. If you take a look at the diagram above of P ≠ NP, you can see that NP-Hard problems cab be neither NP-Complete nor NP. These problems are difficult or impossible to check if they are decidable (returning a true of false value). An example of an NP is the halting problem. The halting problem tries to verify if given an algorithm, will it halt or continue in an infinite loop. There is no existing algorithm that can prove if a function will halt or run forever.</p>
<p>NP-Complete problems are NP-Hard problems that have been proven to be decidable in polynomial time (NP-Complete is a subset of NP and NP-Hard). A very good is Sudoku. In an NxN grid where N is the number of rows and columns, the number in a cell should be unique for it's row and column. When a Sudoku grid is solved, it's fairly easy to verify the solution:</p>
<p>Here is a quick solution using a nested loop that checks if each row in the grid has a unique value.</p>
<pre><code class="hljs language-javascript">  <span class="hljs-keyword">const</span> grid = <span class="hljs-title function_">completeGrid</span>()
  <span class="hljs-keyword">const</span> isSolved = <span class="hljs-literal">true</span>

  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = grid; i &#x3C; grid.<span class="hljs-property">length</span>; i++) {
    <span class="hljs-keyword">const</span> unique = []

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> j = grid; j &#x3C; grid.<span class="hljs-property">length</span>; j++) {
      <span class="hljs-keyword">const</span> cell = grid[i][j]
      
      <span class="hljs-keyword">if</span> (unique.<span class="hljs-title function_">includes</span>(cell)) {
        isSolved = <span class="hljs-literal">false</span>
        <span class="hljs-keyword">break</span>
      }

      unique.<span class="hljs-title function_">push</span>(cell)
    } 
  }
</code></pre>
<p>The time complexity for the alogirithm will alway be O(n<sup>n</sup>) irrespective of how large the grid is. The question is what is the complexity of the <code>completeGrid</code> function.</p>
<p>This is different when we want to write an algorithm that can solve an NxN sudoku grid where N can be a very large number.</p>
<h3>Why is the P versus NP problem important?</h3>
<p>If it can be proven to solve just one problem in NP-Complete polynomial time, all NP problems become P problems. That means that problems that we taught were initially hard will become very easy to solve. This will open to a vast improvement and milestones in technology such as in the field of medicine where we can easily find cures to complex diseases and even cancer. However, it would pose a significant negative impact on crytopgraphy, which depends on algorithms that are NP-hard.</p>
<div class="divider"></div>
<h3>Resources</h3>
<ul>
<li><strong>Introduction to Algorithms</strong> by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein</li>
<li><a href="https://www.youtube.com/watch?v=YX40hbAHx3s">P vs. NP and the Computational Complexity Zoo</a> (Youtube video)</li>
<li><a href="https://www.youtube.com/watch?v=e2cF8a5aAhE">NP-Hard and NP-Complete Problems</a> (Youtube video)</li>
<li><a href="https://news.mit.edu/2009/explainer-pnp">Explained: P vs. NP</a></li>
</ul>`
  },
  {
    path: "/blog/2024/06/30/planner-app",
    tags: "static site generation,javascript,vue",
    date: "2024-06-30",
    title: "Exploring New Technologies: Creating a Planner App with Vue 3",
    slug: "planner-app-with-vue-3",
    excerpt: "<p>I believe that to truly master a skill, practical experience is essential. This has always been my advice to aspiring frontend developers. While it's beneficial to explore various technologies and frameworks through small projects or extensive reading, the best way to grow your skills is by building a scalable project that you can continually build upon as you learn new things and discover new use cases....</p>",
    content: `<p>I believe that to truly master a skill, practical experience is essential. This has always been my advice to aspiring frontend developers. While it's beneficial to explore various technologies and frameworks through small projects or extensive reading, the best way to grow your skills is by building a scalable project that you can continually build upon as you learn new things and discover new use cases.</p>
<p>My favourite side projects are productivity apps. There are numerous productivity apps in the market, such as Todoist, Trello, Google Calendar, and Habitica. However, I thought, why not build one tailored to my needs using frontend technologies I'm less familiar with?</p>
<p>Amidst my work and various other personal projects, I began creating my planner app that is a combination of todo lists and habit tracker. I set five strict criteria for the app:</p>
<ul>
<li>It had to be a Vue 3 app.</li>
<li>It had to use at least one JavaScript feature I had no experience with.</li>
<li>It needed to be designed with accessibility in mind.</li>
<li>It had to be a progressive web app (PWA).</li>
<li>It had to be testable.</li>
</ul>
<p>The technologies I ended up using were Vue 3, Pinia for state management, web workers, IndexedDB for storage, and Vitest for testing.</p>
<h2>Ideation</h2>
<p>Like anyone, I begin every new project by brainstorming ideas. As the primary user of the application, I wanted it to be straightforward and easy to use. I narrowed down the core use cases to three:</p>
<ul>
<li>A user should be able to create tasks for any future date.</li>
<li>A user can create a list and add tasks to it.</li>
<li>A user can establish habits.</li>
</ul>
<p>Based on these use cases, I developed my requirements and defined the user journey.</p>
<p>Next, I moved on to the design phase. I sketched wireframes to determine component positioning, page flow, and the overall user journey. Once satisfied with the initial design, I used Figma to create the pages and components. Tailwind CSS assisted in establishing the colour theme and building the basic reusable components. The final design was simple, clean, and easy to implement.</p>
<h2>Learning more about progressive web apps</h2>
<p>With the Vite PWA plugin, it's easy to have a basic setup of PWA. I wanted to challenge myself and at least a rudimentary understanding of the setup required to have a PWA compliant application. The Chrome team behind Web.dev have created an excellent course (<a href="https://web.dev/learn/pwa">https://web.dev/learn/pwa</a>) to understand all aspects of progressive web app development. I was able to get a good understanding of the manifest and the standard practices.</p>
<h2>IndexDB as client-side storage</h2>
<p>For the initial phase of the project, I wanted the app to be completely serverless, so I opted for client-side storage. While I typically use local web storage for smaller web projects and simpler data, the potential complexity and possibility to use a server in the future led me to choose the IndexedDB API, which offers a storage system akin to a relational database.</p>
<p>Setting up a database with IndexedDB was straightforward. It was easy to scan the store, add, and retrieve data. However, combining data from multiple stores proved challenging. The solution I devised required more iterations and comparisons of entries than I would have preferred, impacting overall data retrieval performance. I think my mistake was treating IndexedDB too much like a traditional relational database; a simpler structure would have been more effective.</p>
<p>Additionally, the asynchronous nature of the IndexedDB API required careful consideration of how to use the database across the application.</p>
<h2>Leveraging web workers</h2>
<p>Web workers were something I had known about for a long time but had little to no experience with. I wanted to change that, so I created a small use case that would allow me to gradually introduce the concept into my project: cleaning up old or expired entries from the app. Web workers operate in the background and do not use the main thread, which keeps it free to handle user interactions without lag.</p>
<p>The implementation of the web worker for this use case is fairly simple. The application only needed to be aware via a message when the cleaning started and ended. Exceptions were handled in such a way that the failure had no impact on functionality. This is a relatively simple use of web workers, but there are many possibilities for further exploration. I would like to introduce proper client-side caching to see how this positively impacts efficiency and performance.</p>
<h2>Accessibility</h2>
<p>Sometime last year, I took some courses in UX design to gain a better understanding of the field and how I can improve my approach to user experience. One aspect of these courses was accessibility, which made me realize how often people with disabilities are overlooked in daily web development. As someone who has friends and acquaintances with disabilities, accessibility is now a significant focus in all my work. This is the first project where accessibility has been an integral part of the initial phase of development and planning.</p>
<p>Ensuring website accessibility is straightforward with resources like the A11y Project and W3C. Additionally, modern browser DevTools come with accessibility inspectors, making it easier than ever to create inclusive websites.</p>
<p>I found it enlightening to put myself in the shoes of someone with disabilities by navigating the app using only the keyboard and screen readers (ex: macOS VoiceOver). This exercise was invaluable in solidifying my approach to testing web applications for accessibility compliance and enhancing the user experience for everyone.</p>
<h2>Testing with Vitest</h2>
<p>Since switching from Jest to Vitest for my Vue projects, I've found it to be a game-changer. Vitest seamlessly integrates with Vite, requiring less setup and configuration. Its API closely mirrors Jest's, making the transition smooth with minimal learning curve. I also found Vitest to have a better overall performance in terms of speed.</p>
<p>Test-driven development (TDD) is my preferred testing approach, as it ensures your code is testable, reliable, and has fewer bugs. However, it can be tedious to implement this approach when starting a new project under tight deadlines. I had set a specific timeline for the first phase of this project that I was unwilling to extend, especially due to my full-time job, numerous hobbies, and limited time. Therefore, I opted to compromise and prioritize testing critical components over testing the entire application.</p>
<p>While the test coverage isn't as extensive as I'd like, I have created a strong testing groundwork for future enhancements. Over time, I plan to incrementally expand and improve the test coverage, especially with more focus on component testing (testing integrated components).</p>
<h2>Conclusion</h2>
<p>The project was enjoyable to build. It was occasionally frustrating, as the planning of the architecture could have been better, and I had to iterate over the implementation of some parts of the application. Most importantly, I learned a lot and identified areas where I could improve. While the app is far from perfect, it serves as a foundation for experimenting with new ideas and honing my skills. I had the opportunity to explore powerful JavaScript features and witness its practical benefits firsthand. There is much to improve, particularly in terms of testing coverage and user experience.</p>
<p>Moving forward, the next steps involve enhancing the app further by adding more animations, perfecting the design and accessibility, and simplifying the data structure.</p>
<p><a href="https://simplearchitect.dev/projects/planner/setup">App demo</a></p>`
  }
];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Tags",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const tagList = computed(() => {
      const tags = props.tags.split(",") || [];
      return tags.map((tag) => {
        return {
          name: tag,
          class: `tag--bg${Math.ceil(Math.random() * 6)}`
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tags" }, _attrs))}><!--[-->`);
      ssrRenderList(tagList.value, (tag, index) => {
        _push(`<div class="${ssrRenderClass([tag.class, "tag"])}">${ssrInterpolate(tag.name)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Tags.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
function readingTime(text) {
  if (!text || typeof document === "undefined") {
    return 0;
  }
  const div = document.createElement("div");
  div.innerHTML = text;
  const wpm = 238;
  const words = div.innerText.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "BlogPost",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const timeToRead = computed(() => readingTime(props.post.content));
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      _push(`<div${ssrRenderAttrs(_attrs)}><a${ssrRenderAttr("href", __props.post.path)}><h3>${ssrInterpolate(__props.post.title)}</h3></a><small>${ssrInterpolate(new Date(__props.post.date).toDateString())} • ${ssrInterpolate(timeToRead.value)} min read</small>`);
      if (__props.post.tags) {
        _push(ssrRenderComponent(_sfc_main$e, {
          tags: __props.post.tags
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_dompurify_html, __props.post.excerpt))}></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BlogPost.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ContentMain",
  __ssrInlineRender: true,
  props: {
    flex: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "content-main" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`<div class="${ssrRenderClass([{ "flex": __props.flex }, "content-main__body"])}">`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContentMain.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<h2${ssrRenderAttrs(mergeProps({ class: "content-title" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContentTitle.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ContentTitle = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$a = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tooltip" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<span class="tooltip__text">`);
  ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent);
  _push(`</span></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ToolTip.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ToolTip = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "OngoingGoal",
  __ssrInlineRender: true,
  props: {
    completed: {
      type: Number,
      default: 0,
      validator: (value) => value <= 6
    }
  },
  setup(__props) {
    const percentage = {
      1: "10%",
      2: "25%",
      3: "50%",
      4: "65%",
      5: "75%",
      6: "100%"
    };
    const props = __props;
    const remaining = computed(() => 6 - props.completed);
    const getPercentage = (num) => {
      return percentage[num];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "goal" }, _attrs))} data-v-d139933d><span class="goal__label" data-v-d139933d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span><div class="goal__levels" data-v-d139933d><!--[-->`);
      ssrRenderList(__props.completed, (n) => {
        _push(ssrRenderComponent(ToolTip, {
          key: "completed_" + n
        }, {
          text: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(getPercentage(n))}`);
            } else {
              return [
                createTextVNode(toDisplayString(getPercentage(n)), 1)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="goal__level filled" data-v-d139933d${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "goal__level filled" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(remaining.value, (n) => {
        _push(`<div class="goal__level" data-v-d139933d></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/OngoingGoal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const OngoingGoal = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-d139933d"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const skillsInterest = ref();
    const posts = blogPosts.sort((a, b) => {
      return b.date < a.date ? -1 : 0;
    });
    onMounted(() => {
      if (window.Worker) {
        const worker = new Worker("/workers/loader.js");
        worker.onmessage = (e) => {
          skillsInterest.value = e.data.skills;
        };
        worker.postMessage("start worker");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$c, { flex: "" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`About Me`);
                } else {
                  return [
                    createTextVNode("About Me")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode("About Me")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Hey there,</p><p${_scopeId}>Welcome to my corner of the internet!</p><p${_scopeId}>I&#39;ve been passionate about all things software and technology for many years, ever since I decided as a teenager that I wanted to become a game developer (spoiler alert: that didn’t quite pan out!). When I&#39;m not coding, you can find me at my local bouldering venues, wandering around the city, or cozying up with a book at a café.</p>`);
          } else {
            return [
              createVNode("p", null, "Hey there,"),
              createVNode("p", null, "Welcome to my corner of the internet!"),
              createVNode("p", null, "I've been passionate about all things software and technology for many years, ever since I decided as a teenager that I wanted to become a game developer (spoiler alert: that didn’t quite pan out!). When I'm not coding, you can find me at my local bouldering venues, wandering around the city, or cozying up with a book at a café.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$c, { flex: "" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Skills`);
                } else {
                  return [
                    createTextVNode("Skills")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Skills")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>CURRENT SKILLS</h3>`);
            if (skillsInterest.value) {
              _push2(`<span${_scopeId}>${ssrInterpolate(skillsInterest.value.skills.current.join(", "))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h3${_scopeId}>PRIOR SKILLS</h3>`);
            if (skillsInterest.value) {
              _push2(`<span${_scopeId}>${ssrInterpolate(skillsInterest.value.skills.prior.join(", "))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h3${_scopeId}>LANGUAGES</h3>`);
            if (skillsInterest.value) {
              _push2(`<span${_scopeId}>${ssrInterpolate(skillsInterest.value.skills.languages.join(", "))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("h3", null, "CURRENT SKILLS"),
              skillsInterest.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(skillsInterest.value.skills.current.join(", ")), 1)) : createCommentVNode("", true),
              createVNode("h3", null, "PRIOR SKILLS"),
              skillsInterest.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(skillsInterest.value.skills.prior.join(", ")), 1)) : createCommentVNode("", true),
              createVNode("h3", null, "LANGUAGES"),
              skillsInterest.value ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(skillsInterest.value.skills.languages.join(", ")), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$c, {
        class: "skills-learning",
        flex: ""
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learning`);
                } else {
                  return [
                    createTextVNode("Learning")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Learning")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (skillsInterest.value) {
              _push2(`<!--[-->`);
              ssrRenderList(skillsInterest.value.learning, (item, index) => {
                _push2(ssrRenderComponent(OngoingGoal, {
                  completed: item.level,
                  key: index
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              skillsInterest.value ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(skillsInterest.value.learning, (item, index) => {
                return openBlock(), createBlock(OngoingGoal, {
                  completed: item.level,
                  key: index
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["completed"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$c, { flex: "" }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Recent Blog Posts`);
                } else {
                  return [
                    createTextVNode("Recent Blog Posts")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Recent Blog Posts")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(posts).length) {
              _push2(`<!--[-->`);
              ssrRenderList(4, (i) => {
                _push2(ssrRenderComponent(_sfc_main$d, {
                  post: unref(posts)[i - 1]
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<p${_scopeId}>Nothing to see here...yet!</p>`);
            }
          } else {
            return [
              unref(posts).length ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (i) => {
                return createVNode(_sfc_main$d, {
                  key: i,
                  post: unref(posts)[i - 1]
                }, null, 8, ["post"]);
              }), 64)) : (openBlock(), createBlock("p", { key: 1 }, "Nothing to see here...yet!"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = blogPosts.sort((a, b) => {
      return b.date < a.date ? -1 : 0;
    });
    useSeoMeta({
      title: `Blog | ${config.appTitle}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$c, _attrs, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(posts).length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(posts), (post, index) => {
                _push2(ssrRenderComponent(_sfc_main$d, {
                  post,
                  key: index
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<p${_scopeId}>Nothing to see here...yet! Keep an eye out for updates and engaging posts.</p>`);
            }
          } else {
            return [
              unref(posts).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(posts), (post, index) => {
                return openBlock(), createBlock(_sfc_main$d, {
                  post,
                  key: index
                }, null, 8, ["post"]);
              }), 128)) : (openBlock(), createBlock("p", { key: 1 }, "Nothing to see here...yet! Keep an eye out for updates and engaging posts."))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "post",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const post = ref();
    const route = useRoute();
    const slug = typeof route.params.slug === "string" ? route.params.slug : route.params.slug.join("/");
    post.value = blogPosts.find((result) => result.path.includes(slug));
    useSeoMeta({
      title: `${(_a = post.value) == null ? void 0 : _a.title} | ${config.appTitle}`,
      description: (_b = post.value) == null ? void 0 : _b.excerpt
    });
    const timeToRead = computed(() => {
      var _a2;
      return readingTime(((_a2 = post.value) == null ? void 0 : _a2.content) || "");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_dompurify_html = resolveDirective("dompurify-html");
      if (post.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-post" }, _attrs))}><h1>${ssrInterpolate(post.value.title)}</h1><p>${ssrInterpolate(new Date(post.value.date).toDateString())} 🍵 <small>${ssrInterpolate(timeToRead.value)} min read</small></p><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_dompurify_html, post.value.content))}></div><div class="divider"></div>`);
        _push(ssrRenderComponent(_sfc_main$e, {
          tags: post.value.tags
        }, null, _parent));
        _push(`<div class="divider"></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/post.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, _attrs))}><path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/Chevron.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const open = ref(props.isOpen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["accordion", {
          "accordion--open": open.value
        }]
      }, _attrs))}><h3 class="accordion__header"><button role="button"${ssrRenderAttr("aria-expanded", !!open.value)}${ssrRenderAttr("aria-roledescription", "Accordion toggle" + __props.title)}${ssrRenderAttr("aria-label", "Accordion toggle" + __props.title)} data-testid="accordion-btn">${ssrInterpolate(__props.title)} <div class="accordion__header-toggle">`);
      _push(ssrRenderComponent(SvgIcon, {
        width: "32",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</div></button></h3>`);
      if (open.value) {
        _push(`<div role="region" class="${ssrRenderClass([{
          "accordion__content--open": open.value
        }, "accordion__content"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "goodies",
  __ssrInlineRender: true,
  setup(__props) {
    const snippets = ref([]);
    useSeoMeta({
      title: `Goodies | ${config.appTitle}`
    });
    const skillsInterest = ref();
    onMounted(() => {
      if (window.Worker) {
        const worker = new Worker("/workers/loader.js");
        worker.onmessage = (e) => {
          skillsInterest.value = e.data.skills;
        };
        worker.postMessage("start worker");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$c, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Top Pick Resources `);
                } else {
                  return [
                    createTextVNode(" Top Pick Resources ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode(" Top Pick Resources ")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              title: "Favourite websites & Blogs",
              isOpen: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = skillsInterest.value) == null ? void 0 : _a.goodies) {
                    _push3(`<ul${_scopeId2}><!--[-->`);
                    ssrRenderList(skillsInterest.value.goodies.sites, (item, index) => {
                      _push3(`<li${_scopeId2}><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer"${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                      if (item.description) {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_b = skillsInterest.value) == null ? void 0 : _b.goodies) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.sites, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("a", {
                            href: item.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, toDisplayString(item.name), 9, ["href"]),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              title: "Podcasts",
              isOpen: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = skillsInterest.value) == null ? void 0 : _a.goodies.podcasts) {
                    _push3(`<ul${_scopeId2}><!--[-->`);
                    ssrRenderList(skillsInterest.value.goodies.podcasts, (item, index) => {
                      _push3(`<li${_scopeId2}><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer"${_scopeId2}>${ssrInterpolate(item.name)}</a>`);
                      if (item.description) {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_b = skillsInterest.value) == null ? void 0 : _b.goodies.podcasts) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.podcasts, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("a", {
                            href: item.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, toDisplayString(item.name), 9, ["href"]),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              title: "Favourite Tech Books",
              isOpen: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = skillsInterest.value) == null ? void 0 : _a.goodies.books) {
                    _push3(`<ul${_scopeId2}><!--[-->`);
                    ssrRenderList(skillsInterest.value.goodies.books, (item, index) => {
                      _push3(`<li${_scopeId2}><strong${_scopeId2}>${ssrInterpolate(item.name)}</strong><br${_scopeId2}><small${_scopeId2}>${ssrInterpolate(item.author)}</small>`);
                      if (item.description) {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    ((_b = skillsInterest.value) == null ? void 0 : _b.goodies.books) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.books, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("strong", null, toDisplayString(item.name), 1),
                          createVNode("br"),
                          createVNode("small", null, toDisplayString(item.author), 1),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              title: "Code snippets",
              isOpen: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Checkout out my <a href="https://gist.github.com/uche789"${_scopeId2}>gists page</a>`);
                  if (snippets.value.length) {
                    _push3(`<p${_scopeId2}></p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" Checkout out my "),
                    createVNode("a", { href: "https://gist.github.com/uche789" }, "gists page"),
                    snippets.value.length ? (openBlock(), createBlock("p", { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                title: "Favourite websites & Blogs",
                isOpen: true
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = skillsInterest.value) == null ? void 0 : _a.goodies) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.sites, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("a", {
                            href: item.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, toDisplayString(item.name), 9, ["href"]),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              createVNode(_sfc_main$4, {
                title: "Podcasts",
                isOpen: true
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = skillsInterest.value) == null ? void 0 : _a.goodies.podcasts) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.podcasts, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("a", {
                            href: item.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, toDisplayString(item.name), 9, ["href"]),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              createVNode(_sfc_main$4, {
                title: "Favourite Tech Books",
                isOpen: true
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = skillsInterest.value) == null ? void 0 : _a.goodies.books) ? (openBlock(), createBlock("ul", { key: 0 }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(skillsInterest.value.goodies.books, (item, index) => {
                        return openBlock(), createBlock("li", { key: index }, [
                          createVNode("strong", null, toDisplayString(item.name), 1),
                          createVNode("br"),
                          createVNode("small", null, toDisplayString(item.author), 1),
                          item.description ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.description), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }),
              createVNode(_sfc_main$4, {
                title: "Code snippets",
                isOpen: true
              }, {
                default: withCtx(() => [
                  createTextVNode(" Checkout out my "),
                  createVNode("a", { href: "https://gist.github.com/uche789" }, "gists page"),
                  snippets.value.length ? (openBlock(), createBlock("p", { key: 0 })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/goodies.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioItem",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const getDisplayText = (p) => {
      var _a, _b;
      if ((_a = p.link) == null ? void 0 : _a.displayText) {
        return p.link.displayText;
      }
      return ((_b = p.link) == null ? void 0 : _b.url) || "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-title" }, _attrs))}><h4>${ssrInterpolate(__props.project.title)}</h4><p>${ssrInterpolate(__props.project.description)}</p>`);
      if (__props.project.technologies) {
        _push(`<p><strong>Technologies</strong>: ${ssrInterpolate(__props.project.technologies.join(", "))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.dueDate) {
        _push(`<div><strong>Due Date:</strong> ${ssrInterpolate(new Date(__props.project.dueDate).toLocaleDateString())}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.link) {
        _push(`<div><strong>Link:</strong> <a${ssrRenderAttr("href", ((_a = __props.project.link) == null ? void 0 : _a.url) || "")}>${ssrInterpolate(getDisplayText(__props.project))}</a><br></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PortfolioItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Portfolio | ${config.appTitle}`,
      description: "Coding snippets, projects, proof of concepts and more"
    });
    const projects = ref([]);
    onMounted(() => {
      if (window.Worker) {
        const worker = new Worker("/workers/loader.js");
        worker.onmessage = (e) => {
          projects.value = e.data.projects || [];
        };
        worker.postMessage("start worker");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$c, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ContentTitle, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Portfolio `);
                } else {
                  return [
                    createTextVNode(" Portfolio ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(ContentTitle, null, {
                default: withCtx(() => [
                  createTextVNode(" Portfolio ")
                ]),
                _: 1
              })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>Featured Projects</h3><!--[-->`);
            ssrRenderList(projects.value.filter((p) => p.isFeatured), (project) => {
              _push2(ssrRenderComponent(_sfc_main$2, { project }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$4, { title: "Fun Projects" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(projects.value.filter((p) => !p.isFeatured), (project) => {
                    _push3(ssrRenderComponent(_sfc_main$2, { project }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(projects.value.filter((p) => !p.isFeatured), (project) => {
                      return openBlock(), createBlock(_sfc_main$2, { project }, null, 8, ["project"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}> To see more, you can checkout my <a href="https://github.com/uche789" target="_blank" rel="noopener noreferrer"${_scopeId}>github account</a>. </p>`);
          } else {
            return [
              createVNode("h3", null, "Featured Projects"),
              (openBlock(true), createBlock(Fragment, null, renderList(projects.value.filter((p) => p.isFeatured), (project) => {
                return openBlock(), createBlock(_sfc_main$2, { project }, null, 8, ["project"]);
              }), 256)),
              createVNode(_sfc_main$4, { title: "Fun Projects" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(projects.value.filter((p) => !p.isFeatured), (project) => {
                    return openBlock(), createBlock(_sfc_main$2, { project }, null, 8, ["project"]);
                  }), 256))
                ]),
                _: 1
              }),
              createVNode("p", null, [
                createTextVNode(" To see more, you can checkout my "),
                createVNode("a", {
                  href: "https://github.com/uche789",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, "github account"),
                createTextVNode(". ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Error | ${config.appTitle}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Oops! Wrong page</h1><p>The page you are looking for does not exist, or it may have been moved or renamed.</p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const router = createRouter({
  history: createMemoryHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: _sfc_main$8
    },
    {
      path: "/blog",
      name: "blog",
      component: _sfc_main$7
    },
    {
      path: "/blog/:slug+",
      name: "post",
      component: _sfc_main$6
    },
    {
      path: "/goodies",
      name: "goodies",
      component: _sfc_main$3
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: _sfc_main$1
    },
    {
      path: "/:pathMatch(.*)*",
      component: _sfc_main
    }
  ]
});
const head = createHead();
function createClientApp() {
  const app = createSSRApp(_sfc_main$f);
  app.use(VueDOMPurifyHTML).use(router).use(head);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router: router2 } = createClientApp();
  await router2.push(url);
  await router2.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  render
};
