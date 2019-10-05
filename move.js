'use strict';
class Moves {
    constructor(element, left, toLeft, time, speed, image) {
        this.i = 0;
        this.elm = document.querySelector(element).style;
        this.toLeft = toLeft;
        this.elm.position = ' absolute';
        this.time = time * 1000;
        this.speed = speed;
        this.left = left;
        this.image = image;
        this.callback();
        this.elmImage();
    };
    move() {
        if (this.left > this.toLeft || this.left < 0) {
            this.speed = -this.speed;
            this.elmImage();
        };
        this.left += this.speed;
        this.elm.left = this.left + 'px';
    };
    elmImage() {
        if (typeof this.image == 'object') {
            this.elm.background = 'url(' + this.image[this.i % 2] + ') no-repeat';
            this.elm.backgroundSize = '100%';
            this.i++;
        } else {
            this.elm.background = 'url(' + this.image + ') no-repeat';
            this.elm.backgroundSize = '100%';
        }
    }
    callback() {
        setTimeout(() => {
            this.callback();
            this.move();
        }, this.time);
    };
};
console.log('在这下面分别传入你要移动的属性的id、tag或class，然后设定它的移动位子从哪里到哪里，然后是相隔多少秒移动一次，移动速度，最后是图片')
console.log("var a = new Moves('div', 0, 600, 0.01, 100, ['0.gif', 'bilibili.gif'])")
