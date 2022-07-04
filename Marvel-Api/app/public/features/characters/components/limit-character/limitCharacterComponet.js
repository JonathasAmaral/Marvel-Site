angular.module("marvelApi").component("limitCharacter" , {
    bindings: {
        buttonLimit: "&",
        limit: "<"
    },

    templateUrl: "public/features/characters/components/limit-character/limitCharacter.html",
    controller: function () {},
    controllerAs: "ctrl",
})