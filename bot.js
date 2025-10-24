const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const Vec3 = require('vec3')

const bot = mineflayer.createBot({
  host: 'nhan.play.hosting', // 
  port: 46945,
  username: 'afkbot', // 
  version: false
})

bot.loadPlugin(pathfinder)

bot.on('spawn', () => {
  console.log('Bot đã vào server modpack!')
})

bot.on('physicTick', () => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
})

setInterval(() => {
  bot.chat('AFK bot đang chạy 24/24')
}, 10 * 60 * 1000)
