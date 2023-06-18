function Game() {
    this.size = 26;
    this.speed = 10;
    this.score = 0;

    this.snake = new Snake(this);
    this.food = new Food(this);
    this.food.generateFood();
    this.started = false;
}

Game.prototype.run = function() {

    this.snake.moveStep();

    if (this.isTouchingHimself() || this.isTouchingBoard()) {

        alert("You Died :(");
        document.location.reload();


    }
    if (this.isTouchingFood()) {

        this.food.deleteFood(this.snake.getHeadPosition());
        this.food.generateFood();
        this.snake.grow();
    }

}

Game.prototype.move = function(direction) {

    pos = cloneObj(this.snake.getHeadPosition());

    pos.d = direction;

    console.log(pos);

    this.snake.addTurn(pos);

}

Game.prototype.isTouchingHimself = function() {

    return this.snake.isTouchingHimself();

}

Game.prototype.isTouchingBoard = function() {

    if (this.snake.getHeadPosition().x < 0 || this.snake.getHeadPosition().x > (this.size - 1) ||
        this.snake.getHeadPosition().y < 0 || this.snake.getHeadPosition().y > (this.size - 1)) {

        return true;

    } else {
        return false;
    }

}


Game.prototype.isTouchingFood = function() {

    return this.food.isFood(this.snake.getHeadPosition());

}