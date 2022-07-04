angular.module("marvelApi").controller("CharacterDetailsController", ["$stateParams", "CharactersService", CharacterDetailsController]);

function CharacterDetailsController($stateParams) {
    const vm = this;
    vm.characterId = $stateParams.characterId;
    vm.details = [];
    // vm.comic = [];
    // vm.series = [];
    // vm.story = [];
    vm.offset = 0;
    vm.limit = 20;

   vm.getDetails = () => {
    CharactersService.getAllDetails(vm.characterId, vm.offset, vm.limit)
      .then((response) => {
        vm.details = response.data.data.results;
        
    })
      .catch((error) => {
            console.log(error);
    });
  };
  

    vm.seeDetails = (details) => {
      console.log("Informação", details);
  };

    vm.seeMore = () => {
      vm.offset += vm.limit;
      vm.getDetails();
    }

    console.log("CharacterDetailsController", vm.characterId);
    console.log("CharacterDetailsController", vm.getDetails);
    console.log("Não concluir o codigo. Mas se me derem uma chance, posso mostra que sou capaz para ficar na vaga");
  }

 