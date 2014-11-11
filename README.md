mudra
====

an irc bot that abstracts irc traffic into sqs packets. the eventual aim is to
have irc itself serve as a command interface; vitually all languages have a
library for irc. therefore it is easy to plug anything in to the process. just
speak irc.

packets are sent into sqs (an AMQP-like service). mudra itself does nothing
with these messages. the idea is that while mudra would digest these packets
(convert the natural language interface of irc into commandlets), somebody
else would digest them from the queue.

so for example, you might say on irc 'hey mudra, remind me i need to buy
tomatoes.'

this would get sent into sqs as a parsed instructions. it might understand a
reminders process and a shopping list process. so you'd get something like:

```
{ "tasks": [
  { "taskname": "reminders", "arguments": "buy tomatoes" },
  { "taskname": "shopping-list", "arguments": "tomatoes" },
] }
```

note that in this example the languagey stuff is removed, and "speech" is
parsed down into directives. the purpose of this is to have the most natural
interface possible for the bot (mudra), which subsequently dispatches tasks
to all kinds of other things (reminders, shopping, address book, et cetera),
which are orthogonal and separated from the irc code; their purpose is follow
commands that are issued in json objects from the message queue (thus removing
any of the parsing from their code, and making mudra strictly a natural
language parser).

author
====

[@avriette](https://github.com/avriette), jane@cpan.org
