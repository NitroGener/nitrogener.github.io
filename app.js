var app = new Vue({
    delimiters: ["[[", "]]"],
    el: "#app",
    data: {
        giftURLs: []
    },
    methods: {
        generateNewCode: function () {
            var alphas = "abcdefghijklmnopqrstuvwxyz1234567890"
            var randomCode = "";

            for (var i = 0; i < 8; i++) {
                randomCode += alphas[Math.round(Math.random() * (alphas.length - 1))]
            }

            var giftURL = { url: "https://discord.gift/" + randomCode };
            this.giftURLs.push(giftURL);
        }
    }
});