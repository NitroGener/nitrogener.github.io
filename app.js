var app = new Vue({
    delimiters: ["[[", "]]"],
    el: "#app",
    data: {
        giftURLs: []
    },
    methods: {
        generateNewCode: function() {
            var randomCode = "coming soon just wait ok";
            var giftURL = {url: "https://discord.gift/" + randomCode};
            this.giftURLs.push(giftURL);
        }
    }
});