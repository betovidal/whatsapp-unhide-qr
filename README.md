whatsapp-unhide-qr
============

Under some conditions in Linux, whatsapp web QR shows for some milliseconds and then dissappears. As no feedback is given I suppose it's something we can fix with the power of JS!


Usage
-----------

There's two files, one for analizing/editing the code and the other to quickly be added as a bookmark (which is what I prefer).

As this is not a repetitive thing to do (if you like to remember computers which have a known whatsapp session), maybe you should just copy/paste the multi-line code into the console and scan the QR. But if for some reason you want it available as a bookmark (if you logout everytime you stop using whatsapp in that computer), there's the one-liner already wrapped around a ____javascript:(/* Code here */)();_ so you can add it as a bookmark.


Use it as a bookmark
------------

In chrome, you just have to right click the bookmarks bar (Ctrl+Shift+B if it's not visible), click on 'Add page...', give it a name and past the one liner code into the URL text box. After that, just click on it. It will make sure you don't have two timers running at the same time and that it is called from a web.whatsapp.com host.

Todo
---------------

- Validate in more browsers.
- Process to remove comments, make it into a single line and add wrapper.
- Test!
- Generate documentation ?
