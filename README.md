# Youtube Address Bar Seek Time

Chrome extension that modifies the address bar of youtube videos with the current seek time.

So you can close and reopen the browser and continue youtube videos where you left off.

## Updates

* fixed issue with incorrect playlist index, due to Youtube auto incrementing it

## Issue

Each time the address bar is updated, an entry in the browser's history is recorded. So to reduce spamming the browser history, I made it only update the address bar every 5 seconds.