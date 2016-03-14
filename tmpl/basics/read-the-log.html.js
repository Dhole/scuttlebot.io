var page = require('../page.part')
var com = require('../com.part')

module.exports = () => page({
  tab: 'basics',
  path: '/basics/read-the-log.html',
  content: `
    <h2>Read the log</h2>
    ${ com.code({ js: jsSnippet, bash: bashSnippet }) }
    <p class="next"><a href="/basics/publish-a-message.html">Publish a message</a></p>
    <ul class="see-also">
      <li><a href="/modules/scuttlebot.html"><code>createLogStream()</code> API</a></li>
      <li><a href="/advanced/advanced-queries.html">Advanced queries</a></li>
      <li><a href="/advanced/pull-streams.html">Pull streams</a></li>
    </ul>
  `
})

var jsSnippet = `
var pull = require('pull-stream')
pull(
  ssb.createLogStream({ limit: 100 }),
  pull.collect(err, msgs) {
    if (err)
      throw err
    console.log(msgs)
  })
)
`

var bashSnippet = `
sbot log --limit 100
`