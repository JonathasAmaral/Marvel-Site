angular.module("marvelApi").component("searchCharacter", {
    bindings: {
        searchName: '=',
        search: '&',
    },

    templateUrl: "public/features/characters/components/search-character/searchCharacter.html",
    controller: function () {},
    controllerAs: "ctrl",
})