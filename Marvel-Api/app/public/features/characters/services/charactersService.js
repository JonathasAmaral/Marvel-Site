angular.module("marvelApi").service("CharactersService", function ($http, env) {
  this.getAllCharacters = (name, offset, limit) => {
    const params = {
      apikey: "5a237863b3cc2061003cbbc4fe20dc06",
      hash: "df11c785e5b6ed36060bbd8a36919508",
      ts: 2,
      offset,
      limit,
    };
    
    if (name != null && name != "" && name != undefined) {
      params["nameStartsWith"] = name;
    }

    return $http.get(`${env.apiUrl}/characters`, {
      params,
    });
  };

  this.getAllDetails = (id, offset, limit) => {
    const params = {
      apikey: "5a237863b3cc2061003cbbc4fe20dc06",
      hash: "df11c785e5b6ed36060bbd8a36919508",
      ts: 2,
      offset,
      limit,
    };

    if (dd != null && id != "" && id != undefined) {
      params["id"] = id;
    }

    return $http.get(`${env.apiUrl}/characters/${id}`, {
      params,
    });
  }
});