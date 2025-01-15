import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, setResponseStatus, setResponseHeader, send as send$1, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, setHeader, getHeader, appendHeader, getQuery as getQuery$1, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withoutProtocol, withTrailingSlash, withLeadingSlash, withBase, withoutTrailingSlash, decodePath } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47Applications_47XAMPP_47xamppfiles_47htdocs_47biztosAlkuszApp_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import unstorage_47drivers_47fs_45lite from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/radix3/dist/index.mjs';
import { toValue } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as resolve$1, isAbsolute } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/pathe/dist/index.mjs';
import nodemailer from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/nodemailer/lib/nodemailer.js';
import { findIndex, omit } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/@dword-design/functions/dist/index.js';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/ipx/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "675d2152-d11c-42f1-8c03-036d86002afc"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2024-05-28T16:08:21.340Z"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {},
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "5.1.5",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true
      }
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "biztosAlkuszApp",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://www.alkuszom.info",
        "trailingSlash": true
      }
    ],
    "version": "2.2.12",
    "debug": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', file_58_47_47_47Applications_47XAMPP_47xamppfiles_47htdocs_47biztosAlkuszApp_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"file:///Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/.nuxt/cache/nitro/prerender"}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/biztosAlkuszApp/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  const isFileUrl = $url.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function defineNitroPlugin(def) {
  return def;
}

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _EGrXyAr59T = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const plugins = [
  _EGrXyAr59T
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send$1(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send$1(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send$1(event, html);
});

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"7e52-PUel7jjTO6toPjYv1HIN07SfOe0\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 32338,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"7e52-PUel7jjTO6toPjYv1HIN07SfOe0\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 32338,
    "path": "../../.output/public/404.html"
  },
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.627Z",
    "size": 62,
    "path": "../../.output/public/_payload.json"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"e819-HAnoQtO3dRBrs0LRjtvwPccLvk4\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 59417,
    "path": "../../.output/public/index.html"
  },
  "/__sitemap__/style.xsl": {
    "type": "application/xml",
    "etag": "\"174e-04KStjaK+j7dbchiMHqnnHF1ICc\"",
    "mtime": "2024-05-28T16:08:29.312Z",
    "size": 5966,
    "path": "../../.output/public/__sitemap__/style.xsl"
  },
  "/ajanlatkeres/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:30.492Z",
    "size": 62,
    "path": "../../.output/public/ajanlatkeres/_payload.json"
  },
  "/ajanlatkeres/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"96d0-aJXApiK2aMrxkqefeLqWb/ROyls\"",
    "mtime": "2024-05-28T16:08:29.488Z",
    "size": 38608,
    "path": "../../.output/public/ajanlatkeres/index.html"
  },
  "/dokumentumok/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.613Z",
    "size": 62,
    "path": "../../.output/public/dokumentumok/_payload.json"
  },
  "/dokumentumok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"973d-rjz7hxkbNePrb64RcsBXp3Cx17E\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 38717,
    "path": "../../.output/public/dokumentumok/index.html"
  },
  "/gepjarmu-biztositas/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.625Z",
    "size": 62,
    "path": "../../.output/public/gepjarmu-biztositas/_payload.json"
  },
  "/gepjarmu-biztositas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b007-4ggFIVuW0ejh0hXGi6M/XwBKOg0\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 45063,
    "path": "../../.output/public/gepjarmu-biztositas/index.html"
  },
  "/adatvedelmi-tajekoztato/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-OFUahb7ePKV0tL7qBzanTnIUmMg\"",
    "mtime": "2024-05-28T16:08:30.492Z",
    "size": 62,
    "path": "../../.output/public/adatvedelmi-tajekoztato/_payload.json"
  },
  "/adatvedelmi-tajekoztato/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"ea76-DLgVAF4ddssNNMmmdNR9/9W2oBw\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 60022,
    "path": "../../.output/public/adatvedelmi-tajekoztato/index.html"
  },
  "/kapcsolat/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.625Z",
    "size": 62,
    "path": "../../.output/public/kapcsolat/_payload.json"
  },
  "/kapcsolat/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"96c1-frYGmtiEawArkSNKe2tSoqhsQpg\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 38593,
    "path": "../../.output/public/kapcsolat/index.html"
  },
  "/karbejentes/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.610Z",
    "size": 62,
    "path": "../../.output/public/karbejentes/_payload.json"
  },
  "/karbejentes/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a5bf-TnV5NSjakUI1ArKH2+dOfhHaY1c\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 42431,
    "path": "../../.output/public/karbejentes/index.html"
  },
  "/partnerek/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:30.492Z",
    "size": 62,
    "path": "../../.output/public/partnerek/_payload.json"
  },
  "/partnerek/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a9aa-EaV3StZjJVPBFXNAiPyTnFOMEEU\"",
    "mtime": "2024-05-28T16:08:29.488Z",
    "size": 43434,
    "path": "../../.output/public/partnerek/index.html"
  },
  "/rendezvenyszolgalat/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.610Z",
    "size": 62,
    "path": "../../.output/public/rendezvenyszolgalat/_payload.json"
  },
  "/rendezvenyszolgalat/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a99f-9KfT/9WfNl5Gr1DuoiN7Zy1eUPc\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 43423,
    "path": "../../.output/public/rendezvenyszolgalat/index.html"
  },
  "/szemelyes-tanacsadas/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.625Z",
    "size": 62,
    "path": "../../.output/public/szemelyes-tanacsadas/_payload.json"
  },
  "/szemelyes-tanacsadas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a837-M9c1feRhZQje9wbprcQka7iNQeU\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 43063,
    "path": "../../.output/public/szemelyes-tanacsadas/index.html"
  },
  "/tanulobiztositas/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.627Z",
    "size": 62,
    "path": "../../.output/public/tanulobiztositas/_payload.json"
  },
  "/tanulobiztositas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a9e6-KyfoN+FeV+4f4RUtHqGnv1J4kec\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 43494,
    "path": "../../.output/public/tanulobiztositas/index.html"
  },
  "/utasbiztositas/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:30.494Z",
    "size": 62,
    "path": "../../.output/public/utasbiztositas/_payload.json"
  },
  "/utasbiztositas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"aa09-mIPfwcvCaaSaqQ8e9zS4RdDObLU\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 43529,
    "path": "../../.output/public/utasbiztositas/index.html"
  },
  "/szolgaltatasok/_payload.json": {
    "type": "application/json",
    "etag": "\"3e-4lZSHlUfjHwAbi9+Gb/co7fT4Pc\"",
    "mtime": "2024-05-28T16:08:29.610Z",
    "size": 62,
    "path": "../../.output/public/szolgaltatasok/_payload.json"
  },
  "/szolgaltatasok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"b239-i+iiyLevf0yy0iyKhuVTKRzppq8\"",
    "mtime": "2024-05-28T16:08:29.487Z",
    "size": 45625,
    "path": "../../.output/public/szolgaltatasok/index.html"
  },
  "/_ipx/_/img/btn-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"bb-m827/cCffKTBNzLWjiJTX8uHPeI\"",
    "mtime": "2024-05-28T16:08:30.186Z",
    "size": 187,
    "path": "../../.output/public/_ipx/_/img/btn-arrow.svg"
  },
  "/_ipx/_/img/blog/blog.jpg": {
    "type": "image/jpeg",
    "etag": "\"51b2-MDoIxq73hWT7k3mc8n4M6zs1VhY\"",
    "mtime": "2024-05-28T16:08:30.534Z",
    "size": 20914,
    "path": "../../.output/public/_ipx/_/img/blog/blog.jpg"
  },
  "/_ipx/_/img/blog/blog2.jpg": {
    "type": "image/jpeg",
    "etag": "\"514e-ofVJmY9YPaWDACOhZP0WGE1Y7K0\"",
    "mtime": "2024-05-28T16:08:30.533Z",
    "size": 20814,
    "path": "../../.output/public/_ipx/_/img/blog/blog2.jpg"
  },
  "/_ipx/_/img/blog/blog3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2dd3-9OtSdDXMAisHkaOankzR1qtN1Tw\"",
    "mtime": "2024-05-28T16:08:30.540Z",
    "size": 11731,
    "path": "../../.output/public/_ipx/_/img/blog/blog3.jpg"
  },
  "/_ipx/_/img/footer/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"86d76-i4qVgqixSx+sferOjfFt1G4q0h4\"",
    "mtime": "2024-05-28T16:08:30.186Z",
    "size": 552310,
    "path": "../../.output/public/_ipx/_/img/footer/logo.svg"
  },
  "/_ipx/_/img/header/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"189-Xb21P+8amlvF6wlBooC4jUTqFKg\"",
    "mtime": "2024-05-28T16:08:30.353Z",
    "size": 393,
    "path": "../../.output/public/_ipx/_/img/header/facebook.svg"
  },
  "/_ipx/_/img/header/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"86b7f-gz8Qzsy61la82X7rjCj4XNwEYwQ\"",
    "mtime": "2024-05-28T16:08:30.217Z",
    "size": 551807,
    "path": "../../.output/public/_ipx/_/img/header/logo.svg"
  },
  "/_ipx/_/img/header/mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"104-ZQfMo8anrWXHoFogpxNPhhfzXNg\"",
    "mtime": "2024-05-28T16:08:30.354Z",
    "size": 260,
    "path": "../../.output/public/_ipx/_/img/header/mail.svg"
  },
  "/_ipx/_/img/header/mobile.svg": {
    "type": "image/svg+xml",
    "etag": "\"418-h4TLxiOyR5f7Eps3ulkRoWRFmxY\"",
    "mtime": "2024-05-28T16:08:30.372Z",
    "size": 1048,
    "path": "../../.output/public/_ipx/_/img/header/mobile.svg"
  },
  "/_ipx/_/img/slider/about-r.svg": {
    "type": "image/svg+xml",
    "etag": "\"ba-3DlD28QqwkWq/aHxhypF/gXBbE4\"",
    "mtime": "2024-05-28T16:08:30.186Z",
    "size": 186,
    "path": "../../.output/public/_ipx/_/img/slider/about-r.svg"
  },
  "/_ipx/_/img/slider/arrow-l.svg": {
    "type": "image/svg+xml",
    "etag": "\"e7-HH+m0uQWoYbfucixh0mE8T9N/TU\"",
    "mtime": "2024-05-28T16:08:30.184Z",
    "size": 231,
    "path": "../../.output/public/_ipx/_/img/slider/arrow-l.svg"
  },
  "/_ipx/_/img/slider/arrow-r.svg": {
    "type": "image/svg+xml",
    "etag": "\"e6-5hZ09/ed+vcPbSXlJ4x1wXleuBY\"",
    "mtime": "2024-05-28T16:08:30.186Z",
    "size": 230,
    "path": "../../.output/public/_ipx/_/img/slider/arrow-r.svg"
  },
  "/_ipx/_/img/subpage-services/gepjarmubiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"98c-9oyL8GIIW7AyGPPRHGV66pT+hcY\"",
    "mtime": "2024-05-28T16:08:30.342Z",
    "size": 2444,
    "path": "../../.output/public/_ipx/_/img/subpage-services/gepjarmubiztositas.svg"
  },
  "/_ipx/_/img/subpage-services/karbejelentes.svg": {
    "type": "image/svg+xml",
    "etag": "\"f47-KGCk+4iTcnRjNbw2d/9RZ+37UcU\"",
    "mtime": "2024-05-28T16:08:30.341Z",
    "size": 3911,
    "path": "../../.output/public/_ipx/_/img/subpage-services/karbejelentes.svg"
  },
  "/_ipx/_/img/subpage-services/rendezveny_biztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"7eb-f3vgYS0t3YnHzuJ2mv8m/PaVUuY\"",
    "mtime": "2024-05-28T16:08:30.347Z",
    "size": 2027,
    "path": "../../.output/public/_ipx/_/img/subpage-services/rendezveny_biztositas.svg"
  },
  "/_ipx/_/img/subpage-services/szemelyes_tanacsadas.svg": {
    "type": "image/svg+xml",
    "etag": "\"916-NbxVXMBY8MurJ78giWhs3/9ZS8E\"",
    "mtime": "2024-05-28T16:08:30.185Z",
    "size": 2326,
    "path": "../../.output/public/_ipx/_/img/subpage-services/szemelyes_tanacsadas.svg"
  },
  "/_ipx/_/img/subpage-services/tanulobiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"770-Odh/nac0Vul+aA8AtllweRiRa9I\"",
    "mtime": "2024-05-28T16:08:30.185Z",
    "size": 1904,
    "path": "../../.output/public/_ipx/_/img/subpage-services/tanulobiztositas.svg"
  },
  "/_ipx/_/img/subpage-services/utazasbiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"bf9-JQj16Qn/a57i2EvKngpXoieaGg0\"",
    "mtime": "2024-05-28T16:08:30.535Z",
    "size": 3065,
    "path": "../../.output/public/_ipx/_/img/subpage-services/utazasbiztositas.svg"
  },
  "/_ipx/_/img/services/gepjarmubiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"88e-7DjCixS8LPannl4PvJqdKYPcdQ0\"",
    "mtime": "2024-05-28T16:08:30.341Z",
    "size": 2190,
    "path": "../../.output/public/_ipx/_/img/services/gepjarmubiztositas.svg"
  },
  "/_ipx/_/img/services/karbejelentes.svg": {
    "type": "image/svg+xml",
    "etag": "\"e42-QOSQtP9f80Ma6U8XvFmYdQfy2Lg\"",
    "mtime": "2024-05-28T16:08:30.341Z",
    "size": 3650,
    "path": "../../.output/public/_ipx/_/img/services/karbejelentes.svg"
  },
  "/_ipx/_/img/services/rendezveny_biztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"729-nHJE0ac3HM4o09nNjdjNRckw+qw\"",
    "mtime": "2024-05-28T16:08:30.342Z",
    "size": 1833,
    "path": "../../.output/public/_ipx/_/img/services/rendezveny_biztositas.svg"
  },
  "/_ipx/_/img/services/szemelyes_tanacsadas.svg": {
    "type": "image/svg+xml",
    "etag": "\"883-mQTty8Yseis2kTTcuCzXDjkkQnU\"",
    "mtime": "2024-05-28T16:08:30.341Z",
    "size": 2179,
    "path": "../../.output/public/_ipx/_/img/services/szemelyes_tanacsadas.svg"
  },
  "/_ipx/_/img/services/tanulobiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d7-arxf8rOAFaRaMsUQfTMvjSqbauo\"",
    "mtime": "2024-05-28T16:08:30.341Z",
    "size": 1751,
    "path": "../../.output/public/_ipx/_/img/services/tanulobiztositas.svg"
  },
  "/_ipx/_/img/services/utazasbiztositas.svg": {
    "type": "image/svg+xml",
    "etag": "\"b2f-wI9UvavLgYk3WqAfM33P8hCbF8k\"",
    "mtime": "2024-05-28T16:08:30.238Z",
    "size": 2863,
    "path": "../../.output/public/_ipx/_/img/services/utazasbiztositas.svg"
  },
  "/_ipx/_/img/partners/bottom.webp": {
    "type": "image/webp",
    "etag": "\"109f4-df5HcG5rJHKXlpB+n/AEC3KbDpA\"",
    "mtime": "2024-05-28T16:08:30.782Z",
    "size": 68084,
    "path": "../../.output/public/_ipx/_/img/partners/bottom.webp"
  },
  "/_ipx/_/img/partners/partners.svg": {
    "type": "image/svg+xml",
    "etag": "\"921a-668/iE/HtUHeV5Cijym8CdAui2A\"",
    "mtime": "2024-05-28T16:08:30.185Z",
    "size": 37402,
    "path": "../../.output/public/_ipx/_/img/partners/partners.svg"
  },
  "/_ipx/_/img/partners/partners10.svg": {
    "type": "image/svg+xml",
    "etag": "\"2845-ASvn8AuoRUHrb+WXIjRbbgVQLVY\"",
    "mtime": "2024-05-28T16:08:30.390Z",
    "size": 10309,
    "path": "../../.output/public/_ipx/_/img/partners/partners10.svg"
  },
  "/_ipx/_/img/partners/partners11.svg": {
    "type": "image/svg+xml",
    "etag": "\"eca3-6d2+9B1Lc/FiZcSFMDqGrKjMe4w\"",
    "mtime": "2024-05-28T16:08:30.523Z",
    "size": 60579,
    "path": "../../.output/public/_ipx/_/img/partners/partners11.svg"
  },
  "/_ipx/_/img/partners/partners12.svg": {
    "type": "image/svg+xml",
    "etag": "\"3fd9-bZ929ob8La9de5AIebWkrBGJVqk\"",
    "mtime": "2024-05-28T16:08:30.528Z",
    "size": 16345,
    "path": "../../.output/public/_ipx/_/img/partners/partners12.svg"
  },
  "/_ipx/_/img/partners/partners13.svg": {
    "type": "image/svg+xml",
    "etag": "\"3b44-T08Lf2neKLZ0sefskYkrE6WHFCg\"",
    "mtime": "2024-05-28T16:08:30.528Z",
    "size": 15172,
    "path": "../../.output/public/_ipx/_/img/partners/partners13.svg"
  },
  "/_ipx/_/img/partners/partners14.svg": {
    "type": "image/svg+xml",
    "etag": "\"f7f5-8YUj0Yv5RBiTQ7xl9Uceek2bLuc\"",
    "mtime": "2024-05-28T16:08:30.528Z",
    "size": 63477,
    "path": "../../.output/public/_ipx/_/img/partners/partners14.svg"
  },
  "/_ipx/_/img/partners/partners2.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d2c-2NOjtvSGkmA+YVo6lx5IIllgeNU\"",
    "mtime": "2024-05-28T16:08:30.353Z",
    "size": 27948,
    "path": "../../.output/public/_ipx/_/img/partners/partners2.svg"
  },
  "/_ipx/_/img/partners/partners3.svg": {
    "type": "image/svg+xml",
    "etag": "\"36b9-+G4kPLy0g0UQw+YjcsdEXxvDOXc\"",
    "mtime": "2024-05-28T16:08:30.353Z",
    "size": 14009,
    "path": "../../.output/public/_ipx/_/img/partners/partners3.svg"
  },
  "/_ipx/_/img/partners/partners4.svg": {
    "type": "image/svg+xml",
    "etag": "\"21c70-QLdEafd4YfmPDrPCQexmWRIpIYQ\"",
    "mtime": "2024-05-28T16:08:30.354Z",
    "size": 138352,
    "path": "../../.output/public/_ipx/_/img/partners/partners4.svg"
  },
  "/_ipx/_/img/partners/partners5.svg": {
    "type": "image/svg+xml",
    "etag": "\"2528-OisRdUqPKA+H/h1xD/Ys9uOgwu0\"",
    "mtime": "2024-05-28T16:08:30.374Z",
    "size": 9512,
    "path": "../../.output/public/_ipx/_/img/partners/partners5.svg"
  },
  "/_ipx/_/img/partners/partners6.svg": {
    "type": "image/svg+xml",
    "etag": "\"2817c-A3faEO0++I971lzmBddDyVeaitM\"",
    "mtime": "2024-05-28T16:08:30.390Z",
    "size": 164220,
    "path": "../../.output/public/_ipx/_/img/partners/partners6.svg"
  },
  "/_ipx/_/img/partners/partners7.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ed3-CgO69/3QAk7Bv4dMmB/1gXjlqMQ\"",
    "mtime": "2024-05-28T16:08:30.375Z",
    "size": 11987,
    "path": "../../.output/public/_ipx/_/img/partners/partners7.svg"
  },
  "/_ipx/_/img/partners/partners8.svg": {
    "type": "image/svg+xml",
    "etag": "\"2356-3PIT4qk5FjZiGhQbHU2r8uoYBEA\"",
    "mtime": "2024-05-28T16:08:30.375Z",
    "size": 9046,
    "path": "../../.output/public/_ipx/_/img/partners/partners8.svg"
  },
  "/_ipx/_/img/partners/partners9.svg": {
    "type": "image/svg+xml",
    "etag": "\"8d58-NSSn2KXGk5Z1UbJaskiqxuXvQEg\"",
    "mtime": "2024-05-28T16:08:30.390Z",
    "size": 36184,
    "path": "../../.output/public/_ipx/_/img/partners/partners9.svg"
  },
  "/_ipx/_/img/partners/right-arrow.svg": {
    "type": "image/svg+xml",
    "etag": "\"b8-48CzO2Hv52HuEIb0EDDNDRcZrLQ\"",
    "mtime": "2024-05-28T16:08:30.272Z",
    "size": 184,
    "path": "../../.output/public/_ipx/_/img/partners/right-arrow.svg"
  },
  "/_ipx/f_webp/img/slider/slider.webp": {
    "type": "image/webp",
    "etag": "\"151c0-9W3vbBs3GPaviX+q+I2FEiyNJsI\"",
    "mtime": "2024-05-28T16:08:30.573Z",
    "size": 86464,
    "path": "../../.output/public/_ipx/f_webp/img/slider/slider.webp"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _QYJG1p = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _uJCM4u = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function normaliseSitemapUrls(data, resolvers) {
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    return e;
  }).filter(Boolean);
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc, resolvers);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        if (typeof a.href === "string")
          a.href = resolve(a.href, resolvers);
        else if (typeof a.href === "object" && a.href)
          a.href = resolve(a.href.href, resolvers);
        return a;
      }), "hreflang");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc, resolvers);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        if (v.content_loc)
          v.content_loc = resolve(v.content_loc, resolvers);
        return v;
      });
    }
    return e;
  }
  return mergeOnKey(
    entries.map(normaliseEntry).map((e) => ({ ...e, _key: `${e._sitemap || ""}${e.loc}` })),
    "_key"
  );
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const urls = await globalThis.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    abortRequestTimeout && clearTimeout(abortRequestTimeout);
  }
}
function globalSitemapSources() {
  return import('./virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('./virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function filterSitemapUrls(_urls, options) {
  const urlFilter = createFilter({
    include: options.include,
    exclude: options.exclude
  });
  return _urls.filter((e) => {
    let path = e.loc;
    try {
      path = parseURL(e.loc).pathname;
    } catch {
      return false;
    }
    if (!urlFilter(path))
      return false;
    if (options.isMultiSitemap && e._sitemap && options.sitemapName)
      return e._sitemap === options.sitemapName;
    return true;
  });
}

function normaliseI18nSources(sources, { autoI18n, isI18nMapped, include, exclude }) {
  const filterPath = createPathFilter({
    include,
    exclude
  });
  if (autoI18n && isI18nMapped) {
    return sources.map((s) => {
      const urls = (s.urls || []).map((_url) => {
        const url = typeof _url === "string" ? { loc: _url } : _url;
        url.loc = url.loc || url.url;
        if (!hasProtocol(url.loc, { acceptRelative: true }))
          url.loc = withLeadingSlash(url.loc);
        return url;
      });
      s.urls = urls.map((url) => {
        if (url._sitemap || url._i18nTransform)
          return url;
        if (url.loc && !hasProtocol(url.loc, { acceptRelative: true })) {
          const match = splitForLocales(url.loc, autoI18n.locales.map((l) => l.code));
          const localeCode = match[0] || autoI18n.defaultLocale;
          const pathWithoutPrefix = match[1];
          const locale = autoI18n.locales.find((e) => e.code === localeCode);
          if (locale) {
            if (!url.alternatives) {
              const alternatives = urls.map((u) => {
                if (u._sitemap || u._i18nTransform)
                  return false;
                if (u?.loc) {
                  if (!filterPath(u.loc))
                    return false;
                  const [_localeCode, _pathWithoutPrefix] = splitForLocales(u.loc, autoI18n.locales.map((l) => l.code));
                  if (pathWithoutPrefix === _pathWithoutPrefix) {
                    const entries = [];
                    if (_localeCode === autoI18n.defaultLocale) {
                      entries.push({
                        href: u.loc,
                        hreflang: "x-default"
                      });
                    }
                    entries.push({
                      href: u.loc,
                      hreflang: _localeCode || autoI18n.defaultLocale
                    });
                    return entries;
                  }
                }
                return false;
              }).flat().filter(Boolean);
              if (alternatives.length)
                url.alternatives = alternatives;
            }
            return {
              _sitemap: locale.iso || locale.code,
              ...url
            };
          }
        }
        return url;
      });
      return s;
    });
  }
  return sources;
}
function applyI18nEnhancements(_urls, options) {
  const { autoI18n, include, exclude } = options;
  const filterPath = createPathFilter({
    include,
    exclude
  });
  return _urls.map((e) => {
    if (!e._i18nTransform)
      return e;
    delete e._i18nTransform;
    const parsedURL = parseURL(e.loc);
    const path = withLeadingSlash(parsedURL.pathname + parsedURL.search + parsedURL.hash);
    const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
    let pathWithoutLocale = path;
    let locale;
    if (match[0]) {
      pathWithoutLocale = match[1] || "/";
      locale = match[0];
    }
    if (locale && false) {
      console.warn("You're providing a locale in the url, but the url is marked as inheritI18n. This will cause issues with the sitemap. Please remove the locale from the url.");
      return e;
    }
    if (autoI18n.differentDomains) {
      return {
        // will force it to pass filter
        _sitemap: options.sitemapName,
        ...e,
        alternatives: [
          {
            // apply default locale domain
            ...autoI18n.locales.find((l) => [l.code, l.iso].includes(autoI18n.defaultLocale)),
            code: "x-default"
          },
          ...autoI18n.locales.filter((l) => !!l.domain)
        ].map((locale2) => {
          return {
            hreflang: locale2.iso || locale2.code,
            href: joinURL(withHttps(locale2.domain), pathWithoutLocale)
          };
        })
      };
    }
    return autoI18n.locales.map((l) => {
      let loc = joinURL(`/${l.code}`, pathWithoutLocale);
      if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
        loc = pathWithoutLocale;
      return {
        _sitemap: options.isI18nMapped ? l.iso || l.code : void 0,
        ...e,
        loc,
        alternatives: [{ code: "x-default" }, ...autoI18n.locales].map((locale2) => {
          const code = locale2.code === "x-default" ? autoI18n.defaultLocale : locale2.code;
          const isDefault = locale2.code === "x-default" || locale2.code === autoI18n.defaultLocale;
          let href = "";
          if (autoI18n.strategy === "prefix") {
            href = joinURL("/", code, pathWithoutLocale);
          } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
            if (isDefault) {
              href = pathWithoutLocale;
            } else {
              href = joinURL("/", code, pathWithoutLocale);
            }
          }
          const hreflang = locale2.iso || locale2.code;
          if (!filterPath(href))
            return false;
          return {
            hreflang,
            href
          };
        }).filter(Boolean)
      };
    });
  }).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls2) {
    return sortEntries ? sortSitemapUrls(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls2.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls2;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.iso, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: !_tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  let resolvedSources = await resolveSitemapSources(sources);
  if (autoI18n)
    resolvedSources = normaliseI18nSources(resolvedSources, { autoI18n, isI18nMapped, ...sitemap });
  const normalisedUrls = normaliseSitemapUrls(resolvedSources.map((e) => e.urls).flat(), resolvers);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults)).map((e) => {
    const path = parseURL(e.loc).pathname;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index)
      return false;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase() === "noindex");
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(e, routeRules.sitemap) : e;
  }).filter(Boolean);
  if (autoI18n?.locales)
    enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, ...sitemap });
  const filteredUrls = filterSitemapUrls(enhancedUrls, { event: resolvers.event, isMultiSitemap, autoI18n, ...sitemap });
  const sortedUrls = maybeSort(filteredUrls);
  const slicedUrls = maybeSlice(sortedUrls);
  const nitro = useNitroApp();
  const ctx = {
    urls: slicedUrls,
    sitemapName: sitemap.sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", ctx);
  const urls = maybeSort(normaliseSitemapUrls(ctx.urls, resolvers));
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits });
}

async function buildSitemapIndex(resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  const isChunking = typeof sitemaps.chunks !== "undefined";
  const chunks = {};
  if (isChunking) {
    const sitemap = sitemaps.chunks;
    const sources = await resolveSitemapSources(await globalSitemapSources());
    const normalisedUrls = normaliseSitemapUrls(sources.map((e) => e.urls).flat(), resolvers);
    let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    if (autoI18n?.locales)
      enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, sitemapName: sitemap.sitemapName });
    const filteredUrls = filterSitemapUrls(enhancedUrls, { ...sitemap, autoI18n, isMultiSitemap: true });
    const sortedUrls = maybeSort(filteredUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  } else {
    for (const sitemap in sitemaps) {
      if (sitemap !== "index") {
        chunks[sitemap] = chunks[sitemap] || { urls: [] };
      }
    }
  }
  {
    appendHeader(
      resolvers.event,
      "x-nitro-prerender",
      Object.keys(chunks).map((name) => encodeURIComponent(`/${name}-sitemap.xml`)).join(", ")
    );
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      sitemap: resolvers.canonicalUrlResolver(`${name}-sitemap.xml`)
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  const sitemapXml = entries.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  return wrapSitemapXml([
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  ], resolvers, { version, xsl, credits });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(e, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  let sitemap = await (definition.sitemapName === "index" ? buildSitemapIndex(useNitroUrlResolvers(e), runtimeConfig) : buildSitemap(definition, useNitroUrlResolvers(e), runtimeConfig));
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  sitemap = ctx.sitemap;
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  e.context._isSitemap = true;
  return sitemap;
}

const _P3NzWK = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const options = {
  "message": [
    {
      "to": "web@alkuszom.info"
    }
  ],
  "smtp": {
    "host": "s56.tarhely.com",
    "port": 587,
    "auth": {
      "user": "web@alkuszom.info",
      "pass": "#+SpM_HR~QCy"
    }
  }
};

const send = (async (body, options, transport) => {
  body = {
    config: 0,
    ...body
  };
  if (typeof body.config === 'string') {
    const configIndex = findIndex(_ => _.name === body.config)(options.message);
    if (configIndex === -1) {
      throw new Error(`Message config with name '${body.config}' not found.`);
    }
    body.config = configIndex;
  } else if (!options.message[body.config]) {
    throw new Error(`Message config not found at index ${body.config}.`);
  }
  await transport.sendMail({
    ...omit(['config', 'to', 'cc', 'bcc'])(body),
    ...omit(['name'])(options.message[body.config])
  });
});

const transport = nodemailer.createTransport(options.smtp);
const _R12dxX = defineEventHandler(async event => {
  try {
    await send(await readBody(event), options, transport);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  return '';
});

const _2tKUKK = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_aLS80g = () => import('./build/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _QYJG1p, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _uJCM4u, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _P3NzWK, lazy: false, middleware: false, method: undefined },
  { route: '/mail/send', handler: _R12dxX, lazy: false, middleware: false, method: "post" },
  { route: '/_ipx/**', handler: _2tKUKK, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_aLS80g, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, closePrerenderer as c, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=runtime.mjs.map
