/*
 * This class is for the board background
 */

const Lane = require('./Lane.js');

class Board{
	constructor(lanes, width, height, alien_player_id, bug_player_id){
		this.lanes = lanes == null ? [] : lanes;
		this.lane_width = width / 5;
		this.width = width;
		this.height = height;
		this.alien_player_id = alien_player_id;
		this.bug_player_id = bug_player_id;
	}

	createCopy(alien_id, bug_id){
		return new Board(this.lanes, this.width, this.height, alien_id, bug_id);
	}

	addLane(index, path){
		this.lanes[index] = new Lane(path, this.lane_width * index, 200, this.lane_width, this.height, this.bug_player_id, this.alien_player_id);
	}

	getLanes(){
		return(this.lanes);
	}
	
}

module.exports = Board;

