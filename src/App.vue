<template>
  <div id="app">
    <div class="wrappic1 p-t-33">
        <img src="./static/images/logo.png" width="200" height="200" alt="LOGO" class="image-circle">
    </div>

    <p class="txt-center m1-txt1 p-t-33 p-b-68">
        এখন মাগরিব এর সময়, আজ মাগরিব এর শেষ সময় ০৭ ০১ p.m. <br /> ওয়াক্ত শেষ হতে আর বাকি ...
    </p>

    <div class="wsize2 flex-w flex-c hsize1 cd100 countdown">

        <div class="flex-col-c-m size2 how-countdown">
            <span class="l1-txt1 p-b-9 hours">{{ hours }}</span>
            <span class="s1-txt1">ঘণ্টা</span>
        </div>

        <div class="flex-col-c-m size2 how-countdown">
            <span class="l1-txt1 p-b-9 minutes">{{ minutes | two_digits }}</span>
            <span class="s1-txt1">মিনিট</span>
        </div>

        <div class="flex-col-c-m size2 how-countdown">
            <span class="l1-txt1 p-b-9 seconds">{{ seconds | two_digits }}</span>
            <span class="s1-txt1">সেকেন্ড</span>
        </div>
    </div>

    <p class="s1-txt4 txt-center p-t-1 p-b-20">
        নির্ধারিত শহর <strong> Dhaka</strong>
    </p>

    <div v-for="data in this.$options.waqtJson">{{data}}</div>

    <p class="s1-txt4 txt-center p-t-20 p-b-20">
        <a href="https://www.facebook.com/395255500880249" target="_blank" class="bor">Messenger Bot</a> |
        <a href="https://habibur.com/salat/districts/dhaka/fullyear/"  target="_blank"class="bor">Full Year Time Table</a> |
        <a href="https://github.com/rabiulislam993/Current-Salat-Waqt-Countdown" class="bor">Source Code</a>
    </p>

  </div>
</template>

<script>
    import WAQT_JSON from './static/json/salat-waqt.json'

    export default {
        name: 'app',
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000),
                salatTime: this.getCurrentSalatTime()
            }
        },
        waqtJson: WAQT_JSON,
        methods: {
            getCurrentSalatTime: function() {
                // return "2019-07-06 08:15:00"
                return "1/28/2019, 7:50:51 PM"
            }
        },
        computed: {
            dateInMilliseconds() {
                return Math.trunc(Date.parse(this.salatTime) / 1000)
            },
            seconds() {
                return (this.dateInMilliseconds - this.now) % 60;
            },
            minutes() {
                return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
            },
            hours() {
                return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
            }
        },
        mounted() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
        }
    }
</script>

<style>
 @import 'static/css/style.css';
 @import 'static/css/util.css';
</style>
