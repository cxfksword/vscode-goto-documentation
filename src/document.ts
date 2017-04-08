'use strict';

import * as vscode from 'vscode';

const open = require('open');
const open_darwin = require('mac-open');

export default class Document {
    // decide what os should be used
    // possible node values 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
    private static platform: string  = process.platform;

    private static defaultDocs : object = {
        "ahk": "http://www.ahkscript.org/docs/commands/${query}.htm",
        "rails": "http://api.rubyonrails.org/?q=${query}",
        "controller": "http://api.rubyonrails.org/?q=${query}",
        "ruby": "http://ruby-doc.com/search.html?q=${query}",
        "js": "https://developer.mozilla.org/en-US/search?q=${query}&topic=js",
        "html": "https://developer.mozilla.org/en-US/search?q=${query}&topic=html",
        "coffee": "https://developer.mozilla.org/en-US/search?q=${query}",
        "php": "http://php.net/manual-lookup.php?pattern=${query}",
        "clojure": "http://clojuredocs.org/search?x=0&y=0&q=${query}",
        "go": "http://golang.org/search?q=${query}",
        "c": "http://www.cplusplus.com/search.do?q=${query}",
        "cpp": "http://www.cplusplus.com/search.do?q=${query}",
        "smarty": "http://www.smarty.net/${query}",
        "cmake": "http://cmake.org/cmake/help/v2.8.8/cmake.html#command:${query}",
        "perl": "http://perldoc.perl.org/search.html?q=${query}",
        "cs": "http://social.msdn.microsoft.com/Search/?query=${query}",
        "lua": "http://pgl.yoyo.org/luai/i/${query}",
        "pgsql": "http://www.postgresql.org/search/?u=%%2Fdocs%%2Fcurrent%%2F&q=${query}",
        "erlang": "http://erldocs.com/R16B03/?search=${query}",
        "haskell": "http://hayoo.fh-wedel.de/?query=${query}",
        "scala": "http://scalex.org/?q=${query}",
        "css": "http://devdocs.io/#q=${query}",
        "scss": "http://devdocs.io/#q=${query}",
        "less": "http://devdocs.io/#q=${query}",
        "google": "https://google.com/search?q=${query}",
        "python": "http://docs.python.org/3/search.html?q=${query}"
    };

    public static open(languageId: string, keyword: string, customDocs?: object): void {
        if (!keyword) {
            return;
        }

        let docs : any = this.defaultDocs;
        if (customDocs) {
            Object.assign(docs, customDocs);
        }

        let url: string = '';
        if (languageId in docs) {
             url = docs[languageId].replace('${query}', encodeURIComponent(keyword));
        } else {
             url = docs['google'].replace('${query}', encodeURIComponent(keyword));
        }

        this.platform === 'darwin' ? open_darwin(url) : open(url);
    }
}