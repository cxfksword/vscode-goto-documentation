# vscode-goto-documentation

A Visual Studio Code extension to jump to documentation for the current keyword, ported from [sublime-text-2-goto-documentation](https://github.com/kemayo/sublime-text-2-goto-documentation)


## Supports

 * PHP
 * JS / CoffeeScript
 * HTML
 * CSS/SASS/LESS
 * Python
 * Clojure
 * Go
 * Ruby
 * C / C++
 * Perl
 * C#
 * Lua
 * Erlang
 * Haskell
 * ...you can add any other language via settings


Installation
--------------

Search for `goto documentation`



How to use
----------------
Move the cursor inside the word you want the docs for and: 
 * Press `Super+Shift+H` or  
 * mouse right click the word and select **gotoDocument**

## Edit the urls
GotoDocumentation allows you to edit the url that opens by editing the settings.
### The available settings are:
```

    "goto-documentation.customDocs": {
        // the key value pair represent scope -> doc url
        // supported placeholders:
        //  - ${query} the selected text/word
       "css": "http://devdocs.io/#q=${query}",
    }

```