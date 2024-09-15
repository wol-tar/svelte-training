<script>
    export let images;

    let sliderCenterIndex = 0;
    let sliderLeftIndex = images.length - 1;
    let sliderRightIndex = 1;

    function sliderMoveLeft() {
        const length = images.length;
        sliderCenterIndex = (sliderCenterIndex - 1 + length) % length;
        sliderLeftIndex = (sliderCenterIndex - 1 + length) % length;
        sliderRightIndex = (sliderCenterIndex + 1) % length;
    }

    function sliderMoveRight() {
        const length = images.length;
        sliderCenterIndex = (sliderCenterIndex + 1) % length;
        sliderLeftIndex = (sliderCenterIndex - 1 + length) % length;
        sliderRightIndex = (sliderCenterIndex + 1) % length;
    }
</script>

<div class="slider">
    <img src={images[sliderLeftIndex]} alt="スライダー画像 (左)" class="slider-item left" />
    <img src={images[sliderCenterIndex]} alt="スライダー画像" class="slider-item" />
    <img src={images[sliderRightIndex]} alt="スライダー画像 (右)" class="slider-item right" />
    <button class="slider-left-button" on:click={sliderMoveLeft}>←</button>
    <button class="slider-right-button" on:click={sliderMoveRight}>→</button>
</div>

<style>
    .slider {
        position: relative;
        width: 80%;
        margin: 0 10%;
    }

    .slider-item {
        width: 100%;
    }

    .slider-item.left {
        position: absolute;
        top: 0;
        right: 100%;
    }

    .slider-item.right {
        position: absolute;
        top: 0;
        left: 100%;
    }

    .slider-left-button {
        position: absolute;
        top: 50%;
        right: 100%;
    }

    .slider-right-button {
        position: absolute;
        top: 50%;
        left: 100%;
    }
</style>
