module.exports = {
	name: 'leave',
	alias: 'l',
	description: 'Leave your voice channel.',
	category: 'utility',
	async execute(message, args, queueHolder) {
		try {
			await queueHolder.subscription.connection.destroy();
			queueHolder.textChannel = null;
    		queueHolder.subscription = null;
    		queueHolder.songs = [];
    		queueHolder.currentSong = null;
    		queueHolder.volume = 0.2;
		} catch (err) {
			console.log(err);
		}

	},
};
