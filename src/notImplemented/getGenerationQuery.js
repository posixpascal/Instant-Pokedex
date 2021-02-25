const getGenerationQuery = (generation) => ({
  "1": "?limit=151",
  "2": "?limit=100&offset=151",
  "3": "?limit=135&offset=251",
  "4": "?limit=107&offset=386",
  "5": "?limit=156&offset=493",
  "6": "?limit=72&offset=649",
  "7": "?limit=88&offset=721",
  "8": "?limit=89&offset=809",
  "i": "?limit=898"
})[generation];

export default getGenerationQuery;
