const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const Vec3 = require('vec3');

const bot = mineflayer.createBot({
  host: 'nhan.play.hosting', // đổi thành IP server
 
  username: 'BotAFK' // đổi tên bot
});

bot.loadPlugin(pathfinder);

bot.once('spawn', () => {
  const defaultMove = new Movements(bot);
  bot.pathfinder.setMovements(defaultMove);

  // Auto AFK: đi tới 1 điểm rồi quay lại
  const goal = new goals.GoalBlock(bot.entity.position.x + 1, bot.entity.position.y, bot.entity.position.z + 1);
  bot.pathfinder.setGoal(goal);
});

bot.on('error', err => console.log(err));
bot.on('end', () => console.log('Bot đã disconnect'));
bot.on('kicked', console.log)
bot.on('error', console.log)
